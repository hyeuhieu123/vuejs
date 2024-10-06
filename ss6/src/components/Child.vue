<template>
  <div>
    child
    <p>giá trị nhận về từ cha " {{ props.propName }}"</p>
    <p>tuổi {{ props.age }}</p>
  </div>
</template>
<script setup>
const props = defineProps(["propName", "age"]);
console.log("giá trì props", props);
</script>
<style scoped></style>
