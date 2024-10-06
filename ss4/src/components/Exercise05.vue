<template>
    <div>
        <ul>
            <li v-for="item in data" :key="item.id">
                {{ item.name }}: {{ item.quantity }}
                <button @click="handleClick(item.id)">Tăng số lượng</button>
            </li>
        </ul>
        <div>Tổng số lượng sản phẩm: {{ sum }}</div>
    </div>
</template>

<script setup>
import { computed, reactive } from 'vue';
const data = reactive([
    {
        id: 1,
        name: "Mèn mén loại 1",
        quantity: 5,
    },
    {
        id: 2,
        name: "Mèn mén loại 2",
        quantity: 3,
    },
    {
        id: 3,
        name: "Mèn mén loại 3",
        quantity: 2,
    },
]);

const sum = computed(() => {
    return data.reduce((acc, item) => acc + item.quantity, 0);
});

const handleClick = (id) => {
    const find = data.find((product) => product.id === id);
    if (find) {
        find.quantity += 1;
    }
};
</script>

