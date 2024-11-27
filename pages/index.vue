<template>
  <main>
    <section class="bg-[#f1f1f1]">
      <div
        class="container flex flex-col lg:flex-row items-center py-20 gap-10"
      >
        <div class="flex-1 order-2 lg:order-1 text-center lg:text-left">
          <h1 class="text-4xl lg:text-6xl font-extrabold mb-6 text-balance">
            Explore recipes or create to-dos! The choice is yours!
          </h1>
          <p class="text-xl lg:text-2xl mb-8 text-balance">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt,
            dolores.
          </p>

          <NuxtLink
            to="/menu"
            class="px-4 py-2 text-white self-start bg-[#12b488] rounded-md text-lg cursor-pointer"
          >
            Browse Recipes
          </NuxtLink>
          <NuxtLink
            to="todo"
            class="px-4 py-2 text-white self-start bg-[#12b488] rounded-md text-lg cursor-pointer ml-4"
          >
            Write Todos
          </NuxtLink>
        </div>
        <div class="flex-1 order-1 lg:order-2">
          <img
            src="https://images.playground.com/cm0mpzksi01eqahllbsdzboea_original.jpeg"
            alt="cover image of food"
          />
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts"></script>

<style scoped>
h2 {
  font-size: 32px;
  margin-bottom: 20px;
}
p {
  margin: 20px 0;
}
</style>
