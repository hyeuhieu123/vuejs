<template>
    <div>
        <input :value="price" @input="handleChange" type="number">
        <button @click="handleClick">Add To Cart</button>
        <p>Tổng số tiền trong giỏ hàng: {{ sum }} và giá trị bình phương: {{ square }}</p>
    </div>
</template>

<script setup>
import { computed, ref, watch } from 'vue';
const price = ref(0);
const sum = ref(0);
const handleChange = (event) => {
    price.value = parseFloat(event.target.value);
};
const handleClick = () => {
    sum.value += price.value;
};
watch(sum,(newValue,oldValue)=>{
    console.log(` Giá trị cũ ${oldValue} và giá trị mới ${newValue} `);
    
})
const square = computed(()=>{
    return sum.value ** 2
})
</script>

<style>
</style>
