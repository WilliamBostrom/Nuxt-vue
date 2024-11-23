<template>
  <div class="card">
    <div class="grid grid-cols-2 gap-10">
      <div class="p-7">
        <img :src="recipe.image" alt="recipe image" class="mx-auto my-7" />
      </div>
      <div class="p-7">
        <h2 class="text-4xl my-7">{{ recipe.name }}</h2>
        <div class="flex gap-2">
          <p class="pr-[12px] border-r border-gray-200">
            <span class="font-bold">{{ recipe.ingredients.length }}</span>
            Ingredients
          </p>
          <p class="pl-[8px]">
            <span class="font-bold">{{ recipe.cookTimeMinutes }}</span>
            min
          </p>
        </div>
        <aside>
          <div>
            <h3 class="text-2xl my-5 underline">Do like this</h3>
            <ol>
              <li
                v-for="(instructions, index) in recipe.instructions"
                :key="index"
              >
                {{ index + 1 + "." }} {{ instructions }}
              </li>
            </ol>
          </div>
          <div>
            <h3 class="text-2xl my-5 underline">Ingredients</h3>
            <ul>
              <li
                v-for="(ingredient, index) in recipe.ingredients"
                :key="index"
              >
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
  margin-bottom: 8px;
  font-size: 16px;
  line-height: 1.2;
}
</style>
