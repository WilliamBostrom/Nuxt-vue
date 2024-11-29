<template>
  <div>
    <header class="shadow-sm bg-white dark:bg-slate-900">
      <nav class="container mx-auto p-4 flex justify-between items-center">
        <NuxtLink to="/menu" class="font-bold text-2xl grow text-[#12b488]"
          >Nuxt<span class="text-black">Menu</span></NuxtLink
        >

        <!-- Desktop menu (always visible) -->
        <ul class="hidden md:flex gap-4 items-center">
          <li>
            <ClientOnly>
              <ColorModeSelector />
            </ClientOnly>
          </li>
          <li><NuxtLink to="/todo">To-Dos</NuxtLink></li>
          <li><NuxtLink to="/menu">Food menu</NuxtLink></li>
        </ul>

        <!-- Mobile menu button (hamburger) -->
        <div class="md:hidden flex gap-4">
          <ClientOnly>
            <ColorModeSelector />
          </ClientOnly>
          <button @click="toggleMenu" class="text-gray-500 focus:outline-none">
            <svg
              class="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </nav>
    </header>

    <!-- Mobile menu (hidden by default, shown when toggled) -->
    <div
      v-if="isMenuOpen"
      class="md:hidden bg-gray-300 text-gray-800 dark:bg-gray-800 dark:text-gray-300"
    >
      <ul class="space-y-4 py-4 px-6 border-b-2">
        <li><NuxtLink to="/">Home</NuxtLink></li>
        <li><NuxtLink to="/todo" class="block">To-Dos</NuxtLink></li>
        <li><NuxtLink to="/menu" class="block">Food menu</NuxtLink></li>
        <li>
          <NuxtLink to="/login" class="block">Login</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/register" class="block">Sign up</NuxtLink>
        </li>
      </ul>
    </div>

    <main class="container mx-auto p-4">
      <slot />
    </main>
    <footer class="container mx-auto p-4 flex justify-end border-t-2">
      <ul class="flex gap-4 py-4">
        <li><NuxtLink to="/">Home</NuxtLink></li>

        <li><NuxtLink to="/todo">To Do List</NuxtLink></li>
        <li><NuxtLink to="/menu">Food menu</NuxtLink></li>
      </ul>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isMenuOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
  },
};
</script>

<style>
.router-link-exact-active {
  color: #12b488;
}
</style>
