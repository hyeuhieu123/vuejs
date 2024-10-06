<template>
    <input type="text" v-model="str">
</template>

<script setup>
import { ref, watch } from 'vue';

const str = ref("");

watch(str, (newValue, oldValue) => {
    console.log(`Giá trị cũ: ${oldValue} và giá trị mới: ${newValue}`);
});
</script>
