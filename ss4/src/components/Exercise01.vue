<template>
    <button @click="handleClick">Click {{ count }} lần</button>
</template>

<script setup>
import { ref } from 'vue';

  const count = ref(0);
  const handleClick = () => {
    count.value += 1;
  }
</script>

<style>

</style>