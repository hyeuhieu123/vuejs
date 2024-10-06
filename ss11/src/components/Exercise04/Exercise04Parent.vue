<template>
  <div>
    <Exercise04Children :age="age"></Exercise04Children>
    <button @click="handleIncrease">Increase age</button>
  </div>
</template>
<script setup>
import { ref } from "vue";
import Exercise04Children from "./Exercise04Children.vue";

const age = ref(0);
const handleIncrease = () => {
  age.value++;
};
</script>
<style></style>
