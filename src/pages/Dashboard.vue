<template>
  Hello!
  <button @click="logout">
    Log out
  </button>
</template>
<script setup lang="ts">
import useAuthStore from '@/stores/useAuthStore'

const authStore = useAuthStore()

async function logout () {
  await authStore.logout()
}

</script>
