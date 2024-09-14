import PocketBase from "pocketbase"

export default new PocketBase(`http://${import.meta.env.VITE_POCKETBASE_URL}`)
