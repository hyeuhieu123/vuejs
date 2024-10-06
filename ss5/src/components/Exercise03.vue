<template>
    <div>
        <h4 v-if="userRole === 'admin'">Quyền hạn của bạn là: Admin</h4>
        <h4 v-else-if="userRole === 'user'">Quyền hạn của bạn là: User</h4>
        <h4 v-else>Quyền hạn của bạn là: Guest</h4>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const userRole = ref("admin");
</script>

<style>
</style>
