import PocketBase from "pocketbase"

export default new PocketBase(import.meta.env.VITE_POCKETBASE_URL)
