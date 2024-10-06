<template>
  <div>
    <button @click="handletoggle">Toggle</button>
    <Exercise05Children v-if="showChildren"></Exercise05Children>
  </div>
</template>

<script setup>
import { ref } from "vue";
import Exercise05Children from "./Exercise05Children.vue";

const showChildren = ref(false);

const handletoggle = () => {
  showChildren.value = !showChildren.value;
};
</script>

<style scoped></style>
