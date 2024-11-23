<template>
  <div v-if="recipe">
    <div>Food details for {{ id }}</div>
    <div>{{ recipe.name }}</div>
  </div>
  <div v-else>Loading...</div>
</template>

<script setup lang="ts">
const { id } = useRoute().params;
definePageMeta({
  layout: "menu",
});

const { data: recipe } = await useFetch<Recipe>(
  `https://dummyjson.com/recipes/${id}`
);
</script>

<style scoped></style>
