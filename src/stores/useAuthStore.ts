import { useLocalStorage } from "@vueuse/core"
import { defineStore } from "pinia"
import { inject, ref } from "vue"
import { useRouter } from "vue-router"

import client from "@/pb"
import { pocketBaseSymbol } from "@/symbols/injectionSymbols"

const useAuthStore = defineStore('authStore', () => {
  const $pb = inject(pocketBaseSymbol)
  const router = useRouter()
  const username = ref(useLocalStorage("username", ""))
  const userEmail = ref(useLocalStorage("userEmail", ""))
  const userId = ref(useLocalStorage("userId", ""))

  async function login (email: string, password: string) {
    try {
      const userData = await $pb!
          .collection("users")
          .authWithPassword(email, password)
      if (userData) {
        username.value = userData.record.username
        userEmail.value = userData.record.email
        userId.value = userData.record.id
        await router.push({ name: 'dashboard' })
      } else {
        console.log("Failure")
      }
    } catch (error) {
      console.log(error)
    }
  }

  function isLoggedIn () {
    return !!client?.authStore.token
  }

  async function logout () {
    username.value = ""
    userId.value = ""
    $pb!.authStore.clear()
    await router.push({ name: "login" })
  }

  async function register (email: string, password: string, passwordConfirm: string) {
  try {
    const user = await $pb!.collection("users").create({
      username: username.value,
      email,
      password,
      passwordConfirm,
    })
    if (!user) {
      console.log("No user found")
      return
    }
    await login(email, password)
    } catch (error) {
      console.log(error)
    }
  }

  return {
    username,
    userId,
    isLoggedIn,
    login,
    register,
    logout,
  }
})

export default useAuthStore
