<template>
    <div>
      <h1>Form</h1>
      <form @submit.prevent="handleSubmit">
        <input type="text" placeholder="Enter something" />
        <button type="submit">Submit</button>
      </form>
    </div>
  </template>
  
  <script setup>
  const handleSubmit = () => {
    console.log("Form submission prevented!");
  }
  </script>
  
  <style>
  </style>
  