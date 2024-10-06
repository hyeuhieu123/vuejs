<template>
    <div class="card">
      <div class="image">
        <h3>Image</h3>
      </div>
      <div class="content">
        <h3>Title</h3>
        <button>Add to card</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Card'
  }
  </script>
  
  <style scoped>
  .card {
    width: 200px;
    border: 1px solid #ccc;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  .image {
    height: 120px;
    background-color: gray;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
  }
  
  .content {
    padding: 16px;
  }
  
  h3 {
    margin: 0 0 10px 0;
    font-size: 18px;
  }
  
  button {
    width: 100%;
    padding: 8px;
    background-color: #f0f0f0;
    border: 1px solid #ccc;
    border-radius: 4px;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #e0e0e0;
  }
  </style>