<template>
  <h2 class="text-2xl font-bold mb-4">
    Register for X
  </h2>
  <form @submit.prevent="createUser">
    <div class="grid grid-cols-1 gap-6">
      <label class="block">
        <span>Email</span>
        <input
          v-model="email"
          type="email"
          class="mt-1 block w-full"
        >
      </label>
      <label class="block">
        <span>Password</span>
        <input
          v-model="password"
          type="password"
          class="mt-1 block w-full"
        >
      </label>
      <label class="block">
        <span>Repeat Password</span>
        <input
          v-model="passwordConfirm"
          type="password"
          class="mt-1 block w-full"
        >
      </label>
    </div>
    <div class="flex gap-2 justify-center">
      <button
        type="submit"
        class="mt-4 text-white desktop-xl:text-2xl bg-black px-4 py-2 border-2 rounded border-black hover:bg-white dark:hover:bg-main-dark-bg hover:text-black"
      >
        Sign Up
      </button>
      <button
        class="mt-4 text-white desktop-xl:text-2xl bg-black px-4 py-2 border-2 rounded border-black hover:bg-white dark:hover:bg-main-dark-bg hover:text-black"
        @click.prevent="goToLogin"
      >
        Login
      </button>
    </div>
  </form>
</template>

<script setup lang="ts">
import { inject, ref } from 'vue'
import { useRouter } from 'vue-router'

import useAuthStore from '@/stores/useAuthStore'
import { pocketBaseSymbol } from '@/symbols/injectionSymbols'

const $pb = inject(pocketBaseSymbol)

const username = ref("")
const email = ref("")
const password = ref("")
const passwordConfirm = ref("")

const authStore = useAuthStore()
const createUser = async () => {
  try {
    const user = await $pb.collection("users").create({
      username: username.value,
      email: email.value,
      password: password.value,
      passwordConfirm: passwordConfirm.value
    })
    if (!user) {
      console.log("No user found")
      return
    }
    await authStore.login(email.value, password.value)
  } catch (error) {
    console.log(error)
  }
}

const router = useRouter()

async function goToLogin () {
  await router.push({ name: 'login' })
}

</script>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
