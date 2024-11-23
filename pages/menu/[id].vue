<template>
  <div>food details for {{ id }}</div>
</template>

<script setup lang="ts">
const { id } = useRoute().params;
definePageMeta({
  layout: "menu",
});
</script>

<style scoped></style>
