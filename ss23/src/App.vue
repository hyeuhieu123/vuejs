<template>
  <div>
    <ul>
      <li v-for="user in users" :key="user.id">
        {{ user.name }}
        <button @click="deleteUser(user.id)">delete</button>
        <button @click="UpdataUser(user.id)">Update</button>
      </li>
    </ul>
    <button @click="addUser">add</button>
    <select @change="handleChange">
      <option value="asc">A-Z</option>
      <option value="desc">Z-A</option>
    </select>
    <input type="text" v-model="inputValue" />
    <button @click="handleSearch">tìm kiếm</button>

    <Exercise2></Exercise2>
    <Exercise3></Exercise3>
    <Exercise4></Exercise4>
    <Exercise5></Exercise5>
    <Exercise6></Exercise6>
  </div>
</template>

<script setup>
import axios from "axios";
import { ref } from "vue";
import Exercise2 from "./components/Exercise2.vue.vue";
import Exercise3 from "./components/Exercise3.vue.vue";
import Exercise4 from "./components/Exercise4.vue.vue";
import Exercise5 from "./components/Exercise5.vue.vue";
import Exercise6 from "./components/Exercise6.vue.vue";

const users = ref([]);
const inputValue = ref("");

// lấy
const getUsers = async () => {
  let res = await axios.get("http://localhost:3000/user");
  users.value = res.data;
};

getUsers();

const addUser = async () => {
  const newUser = {
    name: "Văn A",
  };
  let res = await axios.post("http://localhost:3000/user", newUser);
  getUsers();
};
const deleteUser = async (id) => {
  let res = await axios.delete(`http://localhost:3000/user/${id}`);
  getUsers();
};

const UpdataUser = async (id) => {
  const updateName = {
    name: "Văn B",
  };

  let res = await axios.patch(`http://localhost:3000/user/${id}`, updateName);

  getUsers();
};

const handleChange = async (event) => {
  let res = await axios.get(
    `http://localhost:3000/user?_sort=name&_order=${event.target.value}`
  );
  users.value = res.data;
};

const handleSearch = async () => {
  let res = await axios.get(
    `http://localhost:3000/user?name_like=${inputValue.value.toLowerCase()}`
  );

  users.value = res.data;
};
</script>

<style></style>
