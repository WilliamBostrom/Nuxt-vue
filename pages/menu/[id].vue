<template>
  <div v-if="recipe">
    <!-- <div
      class="container mx-auto p-4 flex justify-center flex-col items-center"
    >
      <img class="w-[400px]" :src="recipe.image" :alt="recipe.name" />
      <div>{{ recipe.name }}</div>
    </div> -->

    <MenuDetails :recipe="recipe" />
  </div>

  <div v-else>Loading...</div>
</template>

<script setup lang="ts">
const { id } = useRoute().params;

const { data: recipe } = await useFetch<Recipe>(
  `https://dummyjson.com/recipes/${id}`
);

definePageMeta({
  layout: "menu",
});
</script>

<style scoped></style>
