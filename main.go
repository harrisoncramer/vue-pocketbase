package main

import (
	"log"
	"os"

	"github.com/labstack/echo/v5"
	"github.com/pocketbase/pocketbase"
	"github.com/pocketbase/pocketbase/apis"
	"github.com/pocketbase/pocketbase/core"
)

func main() {
	app := pocketbase.New()

	// Example API, extending our API even further
	app.OnBeforeServe().Add(func(e *core.ServeEvent) error {
		e.Router.GET("/pb-demo/api/hello", func(c echo.Context) error {
			return c.String(200, "Hello world!")
		})
		return nil
	})

	// Serves static files
	app.OnBeforeServe().Add(func(e *core.ServeEvent) error {
		e.Router.GET("/*", apis.StaticDirectoryHandler(os.DirFS("./pb_public"), false))

		return nil
	})

	if err := app.Start(); err != nil {
		log.Fatal(err)
	}
}
