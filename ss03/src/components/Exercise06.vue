<template>
  <button @click="handleClick('123')">get param</button>
</template>

<script setup>
const handleClick = (str) => {
  console.log(str);
};
</script>

<style></style>
