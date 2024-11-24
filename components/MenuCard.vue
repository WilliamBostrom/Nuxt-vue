<template>
  <div class="card text-center flex-wrap">
    <img :src="recipe.image" alt="recipe thumb" class="thumb pb-2" />
    <p class="font-bold text-gray-700 truncate text-start">
      {{ recipe.name }}
    </p>
    <div class="h-[80px] flex flex-col items-start">
      <span
        >⭐
        <span class="text-sm"
          >{{ recipe.rating }}/5 ({{ recipe.reviewCount }})
        </span></span
      >
      <span
        >🕒 <span class="text-sm">{{ recipe.cookTimeMinutes }} min </span></span
      >
      <span
        >🔥
        <span class="text-sm">{{ recipe.caloriesPerServing }} cals </span></span
      >
    </div>
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
  /* width: 100%; */
  max-height: 300px;
  max-width: 100%;
  margin: 0 auto;
}
</style>
