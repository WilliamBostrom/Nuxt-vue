<template>
  <div class="card text-center flex-wrap relative">
    <div class="absolute top-2 right-2 flex space-x-2 items-center">
      <div
        class="text-gray-500 text-xs bg-gray-200 px-2 py-1 rounded-md"
        v-if="showNextModelLabel"
      >
        Add to favorites
      </div>
      <button
        @click="$emit('addFavorite', recipe)"
        class="cursor-pointer"
        @mouseenter="showNextModelLabel = true"
        @mouseleave="showNextModelLabel = false"
      >
        ⭐
      </button>
    </div>
    <img :src="recipe.image" alt="recipe thumb" class="thumb pb-2" />
    <p class="font-bold text-gray-700 dark:text-white truncate text-start">
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
const showNextModelLabel = ref(false);
</script>

<style scoped>
.thumb {
  max-height: 300px;
  max-width: 100%;
  margin: 0 auto;
}
</style>
