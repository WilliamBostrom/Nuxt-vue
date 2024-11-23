<template>
  <main>
    <div class="grid grid-cols-4 gap-5">
      <div v-for="recipe in recipes" :key="recipe.id">
        <NuxtLink :to="`/menu/${recipe.id}`">{{ recipe.name }}</NuxtLink>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "menu",
});

// Hämtar recept
const { data } = await useFetch<{ recipes: Recipe[] }>(
  "https://dummyjson.com/recipes"
);

const recipes: Recipe[] = data.value?.recipes || [];
console.log(recipes);
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
