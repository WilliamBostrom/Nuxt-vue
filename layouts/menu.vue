<template>
  <div>
    <header class="shadow-sm bg-white">
      <nav class="container mx-auto p-4">
        <NuxtLink to="/menu" class="font-bold">Nuxt Chas Menu</NuxtLink>
      </nav>
    </header>
    <main class="container mx-auto p4">
      <slot />
    </main>
    <footer class="container mx-auto p4 flex justify-between border-t-2">
      <ul class="flex gap-4">
        <li><NuxtLink to="/">Home</NuxtLink></li>
        <li><NuxtLink to="/menu">Food menu</NuxtLink></li>
        <li><NuxtLink to="/todo">To Do List</NuxtLink></li>
        <li><NuxtLink to="/about">About</NuxtLink></li>
      </ul>
    </footer>
  </div>
</template>

<style>
.router-link-exact-active {
  color: #12b488;
}
</style>
