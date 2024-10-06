<template>
  <div>
    <input v-model="inputValue" type="text" />
    <p>giá trị input: {{ inputValue }}</p>
    <button @click="handleClick">Change value</button>
    <h3>Sở thích</h3>
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
    <p>thới quen: {{ hobbies }}</p>
  </div>
</template>
<script setup>
import { ref } from "vue";

const inputValue = ref("rikkei academy");

const handleClick = () => {
  inputValue.value = "rikkei education";
};

const hobbies = ref([]);
</script>
<style></style>
