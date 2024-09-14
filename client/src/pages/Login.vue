<template>
  <h2 class="text-2xl font-bold mb-4">
    Login to Your Site
  </h2>
  <form @submit.prevent="login">
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
    </div>
    <div class="flex gap-2 justify-center">
      <button
        type="submit"
        class="mt-4 text-white desktop-xl:text-2xl bg-black px-4 py-2 border-2 rounded border-black hover:bg-white dark:hover:bg-main-dark-bg hover:text-black"
      >
        Login
      </button>
    </div>
  </form>
  <button
    class="mt-4 text-white desktop-xl:text-2xl bg-black px-4 py-2 border-2 rounded border-black hover:bg-white dark:hover:bg-main-dark-bg hover:text-black"
    @click="signup"
  >
    Sign Up
  </button>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

import useAuthStore from '@/stores/useAuthStore'

const email = ref("")
const password = ref("")

const router = useRouter()

const authStore =useAuthStore()
async function login () {
  console.log("Logging in...")
  await authStore.login(email.value, password.value)
}

async function signup () {
  await router.push({ name: 'register' })
}
</script>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
