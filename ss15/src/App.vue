<template>
  <div>
    vue router
    <v-container>
      <v-data-table :items="items"></v-data-table>
    </v-container>
    <v-btn> Button </v-btn>
    <br />
    <router-link to="/">home</router-link>
    <router-link to="/about">about</router-link>
    <router-link to="/contact">contact</router-link>
    <!-- <a href="/">click home</a><br />
    <a href="/about">click about</a><br />
    <a href="/contact">click contact</a> -->
  </div>
</template>
<script setup>
const items = [
  {
    name: "African Elephant",
    species: "Loxodonta africana",
    diet: "Herbivore",
    habitat: "Savanna, Forests",
  },
  // ... more items
];
</script>
<style></style>
