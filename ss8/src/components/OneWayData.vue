<template>
  <div>
    <input :value="inputValue" type="text" />
    <p>giá trị input: {{ inputValue }}</p>
    <button @click="handleClick">Change value</button>
  </div>
</template>
<script setup>
import { ref } from "vue";

const inputValue = ref("rikkei academy");

const handleClick = () => {
  inputValue.value = "rikkei education";
};
</script>
<style></style>
