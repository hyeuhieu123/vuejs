<template>
  <div>
    <h4>Các số chẵn trong mảng:</h4>
    <ul>
      <li v-for="(number, index) in evenNumbers" :key="index">{{ number }}</li>
    </ul>
  </div>
</template>

<script setup>
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = numbers.filter((number) => number % 2 === 0);
</script>

<style></style>
