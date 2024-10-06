<template>
  <input
    type="text"
    :value="h1"
    :style="{ color: isActive ? 'black' : 'red' }"
  />
</template>

<script setup>
const h1 = "Block";
const isActive = false;
</script>

<style></style>
