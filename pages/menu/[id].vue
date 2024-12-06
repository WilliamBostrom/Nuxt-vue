<template>
  <div class="mb-8" v-if="recipe">
    <MenuDetails :recipe="recipe" />
  </div>

  <div v-else>Loading...</div>
</template>

<script setup lang="ts">
const { id } = useRoute().params;

const { data: recipe } = await useFetch<Recipe>(`/api/food/${id}`);

if (!recipe.value) {
  throw createError({ statusCode: 404, statusMessage: "Recipe not found." });
}

useHead({
  title: recipe.value?.name ? `${recipe.value.name} - NextMenu` : "NextMenu",
});
</script>

<style scoped></style>
