<template>
  <div>
    <header class="shadow-sm bg-white dark:bg-slate-900">
      <nav class="container mx-auto p-4 flex justify-between items-center">
        <NuxtLink to="/" class="font-bold text-2xl"
          >Nuxt<span class="text-black dark:text-gray-300">Home</span></NuxtLink
        >
        <ul class="flex gap-4 items-center">
          <li>
            <ClientOnly>
              <ColorModeSelector />
            </ClientOnly>
          </li>
          <li><NuxtLink to="/todo">To-Dos</NuxtLink></li>

          <li><NuxtLink class="btn" to="/menu">Food menu</NuxtLink></li>
        </ul>
      </nav>
    </header>
    <main class="container mx-auto p-4">
      <slot />
    </main>
  </div>
</template>

<style>
.router-link-exact-active {
  color: #12b488;
}
.btn {
  color: white;
}

body {
  @apply bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300;
}
</style>
