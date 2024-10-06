<template>
  <div>
    <h1>component Lifecycle</h1>
    <button @click="changeCount">click</button>
  </div>
</template>
<script setup>
import {
  computed,
  onBeforeMount,
  onBeforeUpdate,
  onMounted,
  onUpdated,
  ref,
} from "vue";

const countA = ref(0);
const countB = ref(0);

onMounted(() => {
  console.log("hook onMounted được gọi");
});

onBeforeMount(() => {
  console.log("hook onBeforeMount được gọi");
});

onBeforeUpdate(() => {
  console.log("onBeforeUpdate được gọi");
});

onUpdated(() => {
  console.log("onUpdated được gọi");
});

const CaculatorA = () => {
  console.log("1111111");
};

const CaculatorB = computed(() => {
  countB.value++;
  console.log("222222");
});

const changeCount = () => {
  countA.value++;
};
</script>
<style></style>
