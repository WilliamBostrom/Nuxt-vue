<template>
  <div class="h-[400px] flex flex-col items-center justify-center">
    <h1 class="text-2xl text-center mb-4">Signing in...</h1>
    <p class="text-center">Wait a moment while we sign you in...</p>
  </div>
</template>

<script setup lang="ts">
useRedirectIfAuth("/");
</script>
