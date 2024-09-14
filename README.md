# PocketBase + Vue3 

This repository contains code for spinning up a [Pocketbase](https://pocketbase.io/) server/db with Vue!

It's not secure, as it currently uses HTTP and allows anyone to create an adminstrator account. But it can serve as a jumping off point for deploying to production.

# Requirements

Assumes that you have `brew` and `curl` for installing dependencies, and `go` for running code.

Install the additional dependencies (assuming MacOS operating system) via the `bin/setup` script:

```bash
bin/setup
```

# Development

```bash
task dev
```

# Production

Build the EC2 instance:

```bash
task infra:apply
```

Build and send the assets to the server:

```bash
task deploy
```

In the server, start pocketbase and bind it to the exposed HTTP port:

```bash
task connect
sudo STATIC=true ./pocketbase serve --http="0.0.0.0:80" & # After connecting, run in background
exit
```

Open the webpage:

```bash
task web
```

