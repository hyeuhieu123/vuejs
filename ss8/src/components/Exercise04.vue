<template>
  <div>
    <p>Tiến độ hoàn thành: {{ inputValue }}%</p>
    <input v-model="inputValue" type="range" />
  </div>
</template>
<script setup>
import { ref } from "vue";

const inputValue = ref("");
</script>
<style></style>
