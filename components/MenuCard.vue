<template>
  <div class="card text-center">
    <img :src="recipe.image" alt="recipe thumb" class="thumb" />
    <p class="font-bold text-gray-500 truncate">{{ recipe.name }}</p>
    <NuxtLink :to="`/menu/${recipe.id}`">
      <p class="btn">View Details</p>
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
const { recipe } = defineProps(["recipe"]);
</script>

<style scoped>
.thumb {
  max-height: 120px;
  max-width: 70%;
  margin: 0 auto;
}
</style>
