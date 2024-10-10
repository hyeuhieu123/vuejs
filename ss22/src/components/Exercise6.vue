<template>
  <div>
    <h1>Update product</h1>
    <ul>
      <li v-for="product in products" :key="product.id">
        {{ product.name }}
        <button @click="updateProduct(product.id)">update</button>
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

const updateProduct = (id) => {
  const newProduct = {
    name: "iphone11",
    image: "",
    price: 1000,
    quantity: 10,
  };

  fetch(`http://localhost:3000/product/${id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newProduct),
  });
  getProduct();
};
</script>
<style></style>
