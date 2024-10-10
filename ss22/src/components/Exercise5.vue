<template>
  <div>
    <ul>
      <li v-for="product in products" :key="product.id">
        {{ product.name }}
      </li>
    </ul>
    <button @click="addProduct">Add product</button>
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

const addProduct = () => {
  const newProduct = {
    name: "iphone10",
    image: "",
    price: 1000,
    quantity: 10,
  };

  fetch("http://localhost:3000/product", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newProduct),
  });

  getProduct();
};
</script>
<style></style>
