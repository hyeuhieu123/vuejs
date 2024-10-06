<template>
    <div class="admin-layout">
      <header class="header">Header</header>
      <div class="content">
        <nav class="menu">Menu</nav>
        <main class="main">Main</main>
      </div>
      <footer class="footer">Footer</footer>
    </div>
  </template>
  
  <script>
  export default {
    name: 'AdminIndex'
  }
  </script>
  
  <style scoped>
  .admin-layout {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }
  
  .header, .footer {
    background-color: #e6e6e6;
    padding: 10px;
    text-align: center;
  }
  
  .content {
    display: flex;
    flex: 1;
    text-align: center;

  }
  
  .menu {
    background-color: #003366;
    color: white;
    width: 200px;
    padding: 20px;
    text-align: center;

  }
  
  .main {
    flex: 1;
    padding: 20px;
  }
  </style>