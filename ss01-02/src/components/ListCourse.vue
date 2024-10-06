<script setup>
    const listCourses = ["HTML","CSS","JAVASCRIPT","REACTJS"]
</script>

<template>
    <div>
        <h1>Danh sách khóa học</h1>
        <ul>
            <li>{{ listCourses[0] }}</li>
            <li>{{ listCourses[1] }}</li>
            <li>{{ listCourses[2] }}</li>
            <li>{{ listCourses[3] }}</li>
        </ul>
    </div>
</template>

<style>

</style>