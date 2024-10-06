<template>
    <div>
        <h4>Company: {{ data.company }}</h4>
        <h4>Age: {{ data.age }}</h4>
        <button @click="handleChange">Change data</button>
    </div>
</template>

<script setup>
import { reactive } from 'vue';

    const data = reactive({
        company:"Rikkei Academy",
        age: 2,
    })
    const handleChange = () => {
        data.company = "Rikkei Education",
        data.age = 1
    }
</script>

<style>

</style>