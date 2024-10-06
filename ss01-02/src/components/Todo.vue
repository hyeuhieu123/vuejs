<template>
    <div class="todo-app">
      <div class="container">
        <h1 class="app-title">Quản lý công việc</h1>
        <form class="add-task-form">
          <input type="text" placeholder="Thêm công việc mới" class="task-input" />
          <button type="submit" class="add-button">Thêm</button>
        </form>
  
        <div class="task-list">
          <div class="task-item">
            <label class="task-label">
              <input type="checkbox" class="task-checkbox" />
              <span class="task-text">Hoàn thành báo cáo dự án</span>
            </label>
            <div class="task-actions">
              <button class="edit-button"><i class="fas fa-pencil-alt"></i></button>
              <button class="delete-button"><i class="fas fa-trash-alt"></i></button>
            </div>
          </div>
          <div class="task-item completed">
            <label class="task-label">
              <input type="checkbox" class="task-checkbox" checked />
              <span class="task-text">Gửi email cho khách hàng</span>
            </label>
            <div class="task-actions">
              <button class="edit-button"><i class="fas fa-pencil-alt"></i></button>
              <button class="delete-button"><i class="fas fa-trash-alt"></i></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'TodoList',
  }
  </script>
  
  <style scoped>
  .todo-app {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
  }
  
  .container {
    background: white;
    border-radius: 15px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    padding: 30px;
    width: 100%;
    max-width: 500px;
  }
  
  .app-title {
    color: #3a3a3a;
    text-align: center;
    margin-bottom: 30px;
    font-size: 28px;
  }
  
  .add-task-form {
    display: flex;
    margin-bottom: 20px;
  }
  
  .task-input {
    flex-grow: 1;
    padding: 10px 15px;
    border: 1px solid #e0e0e0;
    border-radius: 5px 0 0 5px;
    font-size: 16px;
  }
  
  .add-button {
    background-color: #4CAF50;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 0 5px 5px 0;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  
  .add-button:hover {
    background-color: #45a049;
  }
  
  .task-list {
    list-style-type: none;
    padding: 0;
  }
  
  .task-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px;
    background-color: #f9f9f9;
    border-radius: 5px;
    margin-bottom: 10px;
    transition: all 0.3s;
  }
  
  .task-item:hover {
    background-color: #f0f0f0;
  }
  
  .task-label {
    display: flex;
    align-items: center;
    cursor: pointer;
  }
  
  .task-checkbox {
    margin-right: 10px;
  }
  
  .task-text {
    font-size: 16px;
    color: #333;
  }
  
  .task-item.completed .task-text {
    text-decoration: line-through;
    color: #888;
  }
  
  .task-actions {
    display: flex;
  }
  
  .edit-button, .delete-button {
    background: none;
    border: none;
    cursor: pointer;
    font-size: 16px;
    margin-left: 10px;
    transition: color 0.3s;
  }
  
  .edit-button {
    color: #2196F3;
  }
  
  .delete-button {
    color: #F44336;
  }
  
  .edit-button:hover, .delete-button:hover {
    opacity: 0.7;
  }
  </style>