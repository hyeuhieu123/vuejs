<template>
  <div>
    parent
    <child>:propName="message" :age="age"</child>
  </div>
</template>
<script setup>
import { ref } from "vue";
import Child from "./Child.vue";
let message = ref("hello");
let age = ref(20);
</script>
<style scoped></style>
