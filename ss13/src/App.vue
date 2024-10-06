<!-- <template>
  <div>
    <h1>VueTify</h1>
    <v-btn>click 1</v-btn>
    <v-carousel hide-delimiters>
      <v-carousel-item
        v-for="(item, i) in items"
        :key="i"
        :src="item.src"
        cover
      ></v-carousel-item>
    </v-carousel>
  </div>
</template>
<script setup>
const items = [
  {
    src: "https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg",
  },
  {
    src: "https://cdn.vuetifyjs.com/images/carousel/sky.jpg",
  },
  {
    src: "https://cdn.vuetifyjs.com/images/carousel/bird.jpg",
  },
  {
    src: "https://cdn.vuetifyjs.com/images/carousel/planet.jpg",
  },
];
</script>
<style></style> -->

<template>
  <div>
    <Excercise01></Excercise01>
    <br>
    <Excercise02></Excercise02>
        <br>
    <Excercise03></Excercise03>
        <br>
    <Excercise04></Excercise04>
        <br>
    <Excercise05></Excercise05>
        <br>
    <Excercise06></Excercise06>
        <br>
    <Excercise07></Excercise07>
        <br>
    <Excercise08></Excercise08>
   
   
  </div>
</template>
<script setup>
import Excercise01 from "./components/Excercise01.vue";
import Excercise02 from "./components/Excercise02.vue";
import Excercise03 from "./components/Excercise03.vue";
import Excercise04 from "./components/Excercise04.vue";
import Excercise05 from "./components/Excercise05.vue";
import Excercise06 from "./components/Excercise06.vue";
import Excercise07 from "./components/Excercise07.vue";
import Excercise08 from "./components/Excercise08.vue";


</script>
<style></style>
