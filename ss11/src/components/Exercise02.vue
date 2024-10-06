<template>
  <div>
    <button @click="handleCount">Counter</button>
    <p>du lieu: {{ count }}</p>
  </div>
</template>
<script setup>
import { onUpdated, ref } from "vue";

const count = ref(0);
const handleCount = () => {
  count.value++;
};

onUpdated(() => {
  console.log("Du lieu da thay doi");
});
</script>
<style></style>
