<template>
  <main class="mb-8">
    <h1
      v-if="favoriteRecipes.length > 0"
      class="text-2xl font-bold mb-4 text-center"
    >
      Favorites
    </h1>
    <div
      v-if="favoriteRecipes.length > 0"
      class="mx-auto flex md:justify-center lg:justify-center sm:justify-center justify-center items-center gap-2 md:gap-3 lg:gap-4 flex-wrap"
    >
      <div
        v-for="recipe in favoriteRecipes"
        :key="recipe.id"
        class="mb-2 card w-[300px] flex items-center justify-center"
      >
        <div class="flex items-center justify-between w-full">
          <NuxtLink
            :to="`/menu/${recipe.id}`"
            class="text-blue-500 hover:underline"
          >
            {{ recipe.name }}
          </NuxtLink>
          <button
            @click="removeFavoriteRecipe(recipe)"
            class="ml-4 text-red-500 hover:underline"
          >
            <img
              src="https://api.iconify.design/heroicons:trash.svg?color=%23888888"
              alt=""
              class="text-red-500"
            />
          </button>
        </div>
      </div>
    </div>
    <h1 class="text-2xl font-bold mt-8 text-center">Menu</h1>
    <div class="flex items-center justify-center">
      <input
        class="mt-4 border border-gray-200 card bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#12b488] justify-center p-2 w-64"
        placeholder="Sök efter måltider..."
        v-model="filterText"
      />
    </div>
    <div class="mt-6 gap-6 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      <div v-for="recipe in filteredMeals" :key="recipe.id">
        <MenuCard :recipe="recipe" @addFavorite="addFavoriteRecipe" />
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { ref, computed, watch, onMounted } from "vue";
import { useFetch } from "#app";

interface Recipe {
  id: string;
  name: string;
}

const filterText = ref("");

const { data, error } = await useFetch<Recipe[]>("api/food/menus");
if (error.value) {
  console.error("Error fetching recipes:", error.value);
}
const recipes: Recipe[] = data.value || [];

const filteredMeals = computed(() =>
  recipes.filter((meal) =>
    meal.name.toLowerCase().includes(filterText.value.toLowerCase())
  )
);

const favoriteRecipes = ref<Recipe[]>([]);

const addFavoriteRecipe = (recipe: Recipe) => {
  if (!Array.isArray(favoriteRecipes.value)) {
    favoriteRecipes.value = [];
  }

  if (!favoriteRecipes.value.some((r) => r.id === recipe.id)) {
    favoriteRecipes.value.unshift(recipe);
    localStorage.setItem(
      "favoriteRecipes",
      JSON.stringify(favoriteRecipes.value)
    );
  }
};

const removeFavoriteRecipe = (recipe: Recipe) => {
  favoriteRecipes.value = favoriteRecipes.value.filter(
    (r) => r.id !== recipe.id
  );
};

watch(favoriteRecipes, () => {
  localStorage.setItem(
    "favoriteRecipes",
    JSON.stringify(favoriteRecipes.value)
  );
});

onMounted(() => {
  const savedFavorites = localStorage.getItem("favoriteRecipes");
  favoriteRecipes.value = savedFavorites ? JSON.parse(savedFavorites) : [];
});
</script>

<style scoped>
h2 {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 16px;
}
p {
  margin: 20px 0;
}
button {
  cursor: pointer;
}
</style>
