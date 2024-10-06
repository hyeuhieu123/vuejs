<template>
    <div>
        <button 
            v-for="(item, index) in data" 
            :key="index" 
            @click="handleClick(item.id)" 
            :style="{ backgroundColor: item.status === 1 ? 'red' : 'white' }"
        >
            Button {{ item.id }}
        </button>
    </div>
</template>

<script setup>
import { reactive } from 'vue';

const data = reactive([
    {
        id: 1,
        status: 0,
    },
    {
        id: 2,
        status: 0,
    },
    {
        id: 3,
        status: 0,
    }
]);

const handleClick = (id) => {
    data.forEach(item => item.status = 0);
    const clickedItem = data.find(item => item.id === id);
    if (clickedItem) {
        clickedItem.status = 1;
    }
};
</script>

<style>
</style>
