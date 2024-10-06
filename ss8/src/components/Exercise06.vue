<template>
  <div>
    <ul>
      <li>
        <input
          type="checkbox"
          v-model="hobbies"
          value="đá bóng"
          id="đá bóng"
        />đá bóng
      </li>
      <li>
        <input
          type="checkbox"
          v-model="hobbies"
          value="đua xe"
          id="đua xe"
        />đua xe
      </li>
      <li>
        <input type="checkbox" v-model="hobbies" value="game" id="game" />game
      </li>
      <li>
        <input type="checkbox" v-model="hobbies" value="học" id="học" />học
      </li>
    </ul>
    <p>Sở thích: {{ hobbies }}</p>
  </div>
</template>
<script setup>
import { ref } from "vue";

const hobbies = ref([]);
</script>
<style></style>
