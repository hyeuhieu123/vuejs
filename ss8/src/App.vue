<!-- <template>
  <div>
    <p>One-way binding</p>
    <p>Hiển thị giá trị count: {{ count }}</p>
    <button @click="handleClick">click</button>
    <br />
    <br />
    <OneWayData></OneWayData>
    <br />
    <p>Two way data</p>
    <TwoWayData></TwoWayData>
  </div>
</template>
<script setup>
import { ref } from "vue";
import OneWayData from "./components/OneWayData.vue";
import TwoWayData from "./components/TwoWayData.vue";

const count = ref(0);
const handleClick = () => {
  count.value++;
};
</script>
<style></style> -->

<template>
  <div>
    <Exercise01></Exercise01>
    <Exercise02></Exercise02>
    <Exercise03></Exercise03>
    <Exercise04></Exercise04>
    <Exercise05></Exercise05>
    <Exercise06></Exercise06>
    <h3>Thêm mới sản phẩm</h3>
    <Exercise07></Exercise07>

  </div>
</template>
<script setup>
import Exercise01 from "./components/Exercise01.vue";
import Exercise02 from "./components/Exercise02.vue";
import Exercise03 from "./components/Exercise03.vue";
import Exercise04 from "./components/Exercise04.vue";
import Exercise05 from "./components/Exercise05.vue";
import Exercise06 from "./components/Exercise06.vue";
import Exercise07 from "./components/Exercise07.vue";
</script>
<style></style>
