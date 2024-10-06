<template>
  <div>
    <p>Ngày sinh: {{ inputValue }}</p>
    <input v-model="inputValue" type="date" />
  </div>
</template>
<script setup>
import { ref } from "vue";

const inputValue = ref("");
</script>
<style></style>
