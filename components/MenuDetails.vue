<template>
  <div class="card">
    <div class="grid md:lg:grid-cols-1 lg:grid-cols-2 md:gap-2 lg:gap-10">
      <div class="lg:p-7 mx-auto md:my-2 lg:my-7">
        <img :src="recipe.image" alt="recipe image" />
      </div>
      <div class="md:p-2 lg:p-7">
        <h2 class="text-4xl my-7">{{ recipe.name }}</h2>
        <div class="flex gap-2">
          <p class="pr-[12px] border-r border-gray-200">
            <span class="font-bold">{{ recipe.ingredients.length }}</span>
            Ingredients
          </p>
          <p class="pl-[8px]">
            <span class="font-bold">{{
              recipe.cookTimeMinutes + recipe.prepTimeMinutes
            }}</span>
            min
          </p>
        </div>
        <aside>
          <div>
            <h3 class="text-2xl my-5 underline">How to do</h3>
            <ol>
              <li
                class="flex items-center gap-2"
                v-for="(instructions, index) in recipe.instructions"
                :key="index"
              >
                <span
                  class="h-3 w-3 p-3 bg-green-500 text-white rounded-full flex items-center justify-center text-[12px]"
                  >{{ index + 1 }}</span
                >
                {{ instructions }}
              </li>
            </ol>
          </div>
          <div>
            <h3 class="text-2xl my-5 underline">Ingredients</h3>
            <ul
              :class="
                recipe.ingredients.length > 5
                  ? 'grid grid-cols-2 gap-4'
                  : 'flex flex-col gap-2'
              "
            >
              <li
                v-for="(ingredient, index) in recipe.ingredients"
                :key="index"
                class="flex items-center gap-2"
              >
                <span
                  class="h-3 w-3 p-3 text-gray-950 rounded-full flex items-center justify-center border-green-500 border-2"
                >
                </span>
                {{ ingredient }}
              </li>
            </ul>
          </div>
        </aside>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { recipe } = defineProps(["recipe"]);
</script>

<style scoped>
li {
  margin-bottom: 12px;
  font-size: 16px;
  line-height: 1.2;
}
</style>
