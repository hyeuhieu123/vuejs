<template>
  <div>
    <input type="text" v-model="inputValue" />
    <p>gia tri: {{ inputValue }}</p>
  </div>
</template>

<script setup>
import { watch, ref } from "vue";

const inputValue = ref("");

watch(inputValue, (newValue) => {
  document.title = newValue;
});
</script>

<style scoped></style>
