<template>
    <div>
        <input :value="price" @input="handleChange" type="number">
        <button @click="handleClick">Add To Cart</button>
        <p>Tổng số tiền trong giỏ hàng: {{ sum }}</p>
    </div>
</template>

<script setup>
import { ref } from 'vue';
const price = ref(0);
const sum = ref(0);
const handleChange = (event) => {
    price.value = parseFloat(event.target.value);
};
const handleClick = () => {
    sum.value += price.value;
};
</script>

<style>
</style>
