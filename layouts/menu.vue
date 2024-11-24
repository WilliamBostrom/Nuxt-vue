<template>
  <div>
    <header class="shadow-sm bg-white">
      <nav
        class="container mx-auto p-4 text-[#12b488] flex justify-between items-center"
      >
        <NuxtLink to="/menu" class="font-bold text-2xl grow"
          >Nuxt<span class="text-black">Menu</span></NuxtLink
        >
        <ul class="flex gap-4">
          <li><NuxtLink to="/">Home</NuxtLink></li>
          <li><NuxtLink to="/todo">Todo List</NuxtLink></li>

          <li><NuxtLink class="btn" to="/menu">Food menu</NuxtLink></li>
        </ul>
      </nav>
    </header>
    <main class="container mx-auto p4">
      <slot />
    </main>
    <footer class="container mx-auto p4 flex justify-end border-t-2">
      <ul class="flex gap-4 py-4">
        <li><NuxtLink to="/">Home</NuxtLink></li>

        <li><NuxtLink to="/todo">To Do List</NuxtLink></li>
        <li><NuxtLink to="/menu">Food menu</NuxtLink></li>
      </ul>
    </footer>
  </div>
</template>

<style>
.router-link-exact-active {
  color: #12b488;
}
.btn {
  color: white;
}
</style>
