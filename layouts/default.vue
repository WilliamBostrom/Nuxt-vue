<template>
  <div>
    <!-- Include the Header component -->
    <Header :isMenuOpen="isMenuOpen" @toggle-menu="toggleMenu" />

    <main class="container mx-auto p-4">
      <slot />
    </main>
    <footer
      v-if="user"
      class="container mx-auto p-4 flex justify-end border-t-2"
    >
      <ul class="flex gap-4 py-4">
        <li><NuxtLink to="/">Home</NuxtLink></li>

        <li><NuxtLink to="/todo">To-Dos</NuxtLink></li>
        <li><NuxtLink to="/menu">Food menu</NuxtLink></li>
      </ul>
    </footer>
  </div>
</template>

<script setup lang="ts">
import Header from "~/components/Header.vue";
const user = useSupabaseUser();

const isMenuOpen = ref(false);

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value;
}
</script>

<style>
.router-link-exact-active {
  color: #12b488;
}
</style>
