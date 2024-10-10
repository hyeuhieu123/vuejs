<template>
  <div>
    <ul>
      <li v-for="user in users" :key="user.id">
        {{ user.name }}
        <button @click="deleteUser(user.id)">delete</button>
      </li>
    </ul>
    <button @click="addUser">Add user</button>
    <Excercise2></Excercise2>
    <Excercise3></Excercise3>
    <Excercise4></Excercise4>
    <Excercise5></Excercise5>
    <Excercise6></Excercise6>
    <h1>Product</h1>
    <Excercise7></Excercise7>
  </div>
</template>
<script setup>
import { onMounted, ref } from "vue";
import Excercise2 from "./components/Excercise2.vue";
import Excercise3 from "./components/Excercise3.vue";
import Excercise4 from "./components/Excercise4.vue";
import Excercise5 from "./components/Excercise5.vue";
import Excercise6 from "./components/Excercise6.vue";
import Excercise7 from "./components/Excercise7/Excercise7.vue";

const users = ref([]);
const getData = async () => {
  const res = await fetch("http://localhost:3000/user");
  const data = await res.json();

  users.value = data;
};

onMounted(() => {
  getData();
});

// khai baos them user
const addUser = () => {
  const newUser = {
    name: "Thu Trang",
  };

  fetch("http://localhost:3000/user", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newUser),
  });
};

// Ham Xoa
const deleteUser = (id) => {
  fetch(`http://localhost:3000/user/${id}`, {
    method: "DELETE",
  });
  getData();
};
</script>
<style></style>
