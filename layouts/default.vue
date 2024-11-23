<template>
  <div>
    <header class="shadow-sm bg-white">
      <nav class="container-mx-auto p-4 flex justify-between">
        <NuxtLink to="/" class="font-bold text-2xl"
          >Nuxt<span class="text-black">Home</span></NuxtLink
        >
        <ul class="flex gap-4">
          <li><NuxtLink to="/">Home</NuxtLink></li>
          <li><NuxtLink to="/todo">Todo List</NuxtLink></li>

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
</style>
