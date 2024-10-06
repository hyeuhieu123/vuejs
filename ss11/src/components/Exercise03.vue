<template>
  <div>
    <h3>Current company: {{ company }}</h3>
    <h3>Age: {{ age }}</h3>
    <button @click="handleRandom">Random</button>
  </div>
</template>
<script setup>
import { ref } from "vue";

const age = ref(1);
const company = ref("Rikkei Academy");
const companies = ["Rikkei Academy", "Rikkei Education", "Rikkei Fokuda"];

const handleRandom = () => {
  age.value = Math.floor(Math.random() * 10);
  company.value = companies[Math.floor(Math.random() * 3)];
};
</script>
<style></style>
