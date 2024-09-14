import PocketBase from "pocketbase"

let pb: PocketBase
if (import.meta.env.VITE_POCKETBASE_URL) {
  pb = new PocketBase(`http://${import.meta.env.VITE_POCKETBASE_URL}`)
} else {
  pb = new PocketBase()
}

export default pb

