<script setup>
    const user = {
        firstName: "Nguyễn Văn",
        lastName: "A"
    }
    
    const formatName = () => {
        return user.firstName + ' ' + user.lastName
    }
</script>

<template>
  <h1>Họ và tên: {{ formatName() }}</h1>
</template>

<style>

</style>
