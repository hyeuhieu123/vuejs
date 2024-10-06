<template>
  <div>
    <p>Tuoi: {{ age }}</p>
  </div>
</template>
<script setup>
import { onMounted } from "vue";

// Nhận giá trị age qua props
const props = defineProps(["age"]);

onMounted(() => {
  console.log("Gia tri age da duoc thay doi");
});
</script>
<style></style>
