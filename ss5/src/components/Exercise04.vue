<template>
    <div>
        <button @click="handleClick">Ẩn</button>
        <button @click="handleClick2">Hiện</button>
        <h4 v-show="isVisible">Thông báo: Welcome to Rikkei Education</h4>
    </div>
</template>

<script setup>
import { ref } from 'vue';

    const  isVisible = ref(false);
    const handleClick = () => {
        isVisible.value = false
    }
    const handleClick2 = () => {
        isVisible.value = true
    }
</script>

<style>

</style>