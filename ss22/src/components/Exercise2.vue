<template>
  <div>
    <ul>
      <li v-for="product in products" :key="product.id">
        {{ product.name }}
      </li>
    </ul>
  </div>
</template>
<script setup>
import { ref } from "vue";

const products = ref([]);

const getProduct = async () => {
  const res = await fetch("http://localhost:3000/product");
  const data = await res.json();

  products.value = data;
};

getProduct();
</script>
<style></style>
