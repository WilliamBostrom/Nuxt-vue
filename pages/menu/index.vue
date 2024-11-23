<template>
  <main>
    <div class="grid grid-cols-4 gap-5">
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

// Hämtar recepten från din server-API-endpoint
const { data } = await useFetch<Recipe[]>("api/food/menus"); // Anropar den server-sida API-routen

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
