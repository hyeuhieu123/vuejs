<template>
  <div>
    <ul>
      <li v-for="product in products" :key="product.id">
        {{ product.name }}
        <button @click="getProductId(product.id)">getProductId</button>
      </li>
    </ul>
    <h2>Thông tin sản phẩm</h2>
    <p>{{ productId }}</p>
  </div>
</template>
<script setup>
import { ref } from "vue";

const products = ref([]);
const productId = ref();

const getProduct = async () => {
  const res = await fetch("http://localhost:3000/product");
  const data = await res.json();

  products.value = data;
};

getProduct();

const getProductId = async (id) => {
  const res = await fetch(`http://localhost:3000/product/${id}`);
  const data = await res.json();

  productId.value = data;
};
</script>
<style></style>
