<template>
  <div>
    <p>color</p>
    <input v-model="inputValue" type="color" />
    <p>mã màu: {{ inputValue }}</p>
  </div>
</template>
<script setup>
import { ref } from "vue";

const inputValue = ref("");
</script>
<style></style>
