import { inject } from "vue"
import { useRouter } from "vue-router"

import { pocketBaseSymbol } from "@/symbols/injectionSymbols"

export default function useAuth () {
  const router = useRouter()
  const $pb = inject(pocketBaseSymbol)

  // Authenticate the user via email and password
  async function login (email: string, password: string) {
    try {
      const userData = await $pb
          .collection("users")
          .authWithPassword(email, password)
      if (userData) {
        console.log("Successful registration")
        await router.push({ name: 'dashboard' })
      } else {
        console.log("Failure")
      }
    } catch (error) {
      console.log(error)
    }
  }

  async function logout () {

  }

  return {
    login,
  }
}
