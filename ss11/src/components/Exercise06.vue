<template>
  <div>
    <h1>Count: {{ count }}</h1>
    <button @click="increment">Increment</button>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";

const count = ref(0);

const increment = () => {
  count.value++;
  document.title = `Count: ${count.value}`;
};
</script>

<style scoped></style>
