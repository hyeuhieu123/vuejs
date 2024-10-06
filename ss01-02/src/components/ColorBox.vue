<template>
    <div>
      <div
        :style="{
          backgroundColor:
            number === 1
              ? 'red'
              : number === 2
              ? 'blue'
              : number === 3
              ? 'green'
              : '',
        }"
        class="square"
      ></div>
      <button @click="handleRed">Red</button>
      <button @click="handleBlue">Blue</button>
      <button @click="handleGreen">Green</button>
      <h3>{{ number }}</h3>
    </div>
  </template>
  
  <script>
  export default {
      data() {
          return {
              number: 0
          };
      },
      methods: {
          handleRed() {
              this.number = 1;
          },
  
          handleBlue() {
              this.number = 2;
          },
  
          handleGreen() {
              this.number = 3;
          },
      }
  }
  </script>
  
  <style>
  .square {
    width: 200px;
    height: 200px;
    border: 1px solid black;
  }
  </style>
  