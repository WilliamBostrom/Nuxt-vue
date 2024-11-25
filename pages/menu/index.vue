<template>
  <main class="mb-8">
    <div class="mt-6 gap-6 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      <div v-for="recipe in recipes" :key="recipe.id">
        <MenuCard :recipe="recipe" />
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "menu",
});

useHead({
  title: "NextMenu",
});

const { data } = await useFetch<Recipe[]>("api/food/menus");

const recipes: Recipe[] = data.value || [];
</script>

<style scoped>
h2 {
  font-size: 32px;
  margin-bottom: 20px;
}
p {
  margin: 20px 0;
}
</style>
