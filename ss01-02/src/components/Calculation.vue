<template>
    <div>
      <h4>Danh sách kết quả</h4>
      <ul>
        <li>{{ a }} + {{ b }} = {{ addition() }}</li>
        <li>{{ a }} - {{ b }} = {{ subtraction() }}</li>
        <li>{{ a }} * {{ b }} = {{ multiplication() }}</li>
        <li>{{ a }} / {{ b }} = {{ division() }}</li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        a: 10,
        b: 10,
      };
    },
    methods: {
      addition() {
        return this.a + this.b;
      },
      subtraction() {
        return this.a - this.b;
      },
      multiplication() {
        return this.a * this.b;
      },
      division() {
        return this.a / this.b;
      },
    },
  };
  </script>
  
  <style>
  </style>
  