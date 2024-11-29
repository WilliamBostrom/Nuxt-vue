<template>
  <main class="mb-8">
    <div class="flex items-center justify-center">
      <input
        class="mt-8 border border-gray-200 card bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#12b488] justify-center p-2"
        placeholder="Search meals..."
        v-model="filterText"
      />
    </div>
    <div class="mt-6 gap-6 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      <div v-for="recipe in filteredMeals" :key="recipe.id">
        <MenuCard :recipe="recipe" />
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
const filterText = ref("");

definePageMeta({
  layout: "menu",
});

useHead({
  title: "NextMenu",
});

const { data } = await useFetch<Recipe[]>("api/food/menus");

const recipes: Recipe[] = data.value || [];

const filteredMeals = computed(() =>
  recipes.filter(
    (
      meal // Ingen .value här på recipes
    ) => meal.name.toLowerCase().includes(filterText.value.toLowerCase()) // använd filterText här istället
  )
);
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
