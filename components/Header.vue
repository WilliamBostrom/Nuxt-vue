<template>
  <header class="shadow-sm bg-white dark:bg-slate-900">
    <nav class="container mx-auto p-4 flex justify-between items-center">
      <!-- Logo -->
      <NuxtLink to="/" class="font-bold text-2xl text-[#12b488]">
        Nuxt<span class="text-black dark:text-gray-300">Home</span>
      </NuxtLink>

      <!-- Desktop menu -->
      <div class="hidden md:flex gap-2 items-center">
        <div>
          <ClientOnly>
            <ColorModeSelector />
          </ClientOnly>
        </div>
        <ul v-if="user" class="hidden md:flex gap-4 items-center">
          <li><NuxtLink to="/todo">To-Dos</NuxtLink></li>
          <li><NuxtLink to="/menu">Food menu</NuxtLink></li>
          <li>
            <button
              class="btn"
              @click="
                async () => {
                  console.log('klickad');
                  await supabase.auth.signOut();
                  $emit('toggle-menu', false);
                  return navigateTo('/login');
                }
              "
            >
              Sign Out
            </button>
          </li>
        </ul>
      </div>
      <!-- Mobile menu button -->
      <div class="md:hidden flex gap-4">
        <ClientOnly>
          <ColorModeSelector />
        </ClientOnly>
        <button
          v-if="user"
          @click="$emit('toggle-menu')"
          class="text-gray-500 focus:outline-none"
        >
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

    <!-- Mobile menu -->
    <div
      v-if="isMenuOpen"
      class="md:hidden bg-gray-300 text-gray-800 dark:bg-gray-800 dark:text-gray-300"
    >
      <ul class="space-y-4 py-4 px-6 border-b-2">
        <li><NuxtLink to="/todo" class="block">To-Dos</NuxtLink></li>
        <li><NuxtLink to="/menu" class="block">Food menu</NuxtLink></li>
        <li>
          <NuxtLink to="/login" class="block">Login</NuxtLink>
        </li>
        <li>
          <button
            @click="
              async () => {
                console.log('klickad');
                await supabase.auth.signOut();
                $emit('toggle-menu', false);
                return navigateTo('/login');
              }
            "
          >
            Sign Out
          </button>
        </li>
      </ul>
    </div>
  </header>
</template>

<script setup lang="ts">
defineProps({
  isMenuOpen: Boolean,
});

defineEmits(["toggle-menu"]);
const supabase = useSupabaseClient();
const user = useSupabaseUser();
</script>

<style scoped>
.router-link-exact-active {
  color: #12b488;
}
.btn {
  color: white;
}
</style>
