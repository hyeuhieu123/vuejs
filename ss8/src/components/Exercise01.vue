<template>
  <div>
    <p>email</p>
    <input v-model="inputValue" type="text" />
    <p>giá trị input: {{ inputValue }}</p>
  </div>
</template>
<script setup>
import { ref } from "vue";

const inputValue = ref("");
</script>
<style></style>
