<template>
  <div>vex</div>
</template>

<script setup>
import { useStore } from "vuex";
import HelloWorld from "./components/HelloWorld.vue";

const store = useStore();
console.log(store);
</script>

<style></style>
