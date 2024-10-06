<template>
  <div>
    <h3>Sở thích</h3>
    <ul>
      <li><input type="radio" v-model="gender" value="nam" id="nam" />nam</li>
      <li><input type="radio" v-model="gender" value="nữ" id="nữ" />nữ</li>
      <li>
        <input type="radio" v-model="gender" value="khác" id="khác" />khác
      </li>
    </ul>
    <p>thói quen: {{ gender }}</p>
  </div>
</template>
<script setup>
import { ref } from "vue";

const gender = ref("nam");
</script>
<style></style>
