<template>
    <div class="manager">
      <table>
        <thead>
          <tr>
            <th>STT</th>
            <th>Họ và tên</th>
            <th>Ngày sinh</th>
            <th>Giới tính</th>
            <th>Địa chỉ</th>
            <th>Hành động</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(user, index) in users" :key="user.id">
            <td>{{ index + 1 }}</td>
            <td>{{ user.name }}</td>
            <td>{{ user.birthDate }}</td>
            <td>{{ user.gender }}</td>
            <td>{{ user.address }}</td>
            <td>
              <button class="edit">Sửa</button>
              <button class="delete">Xóa</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ManageUser',
    data() {
      return {
        users: [
          { id: 1, name: 'Malcolm Lockyer', birthDate: '21/03/1961', gender: 'Nam', address: 'New york' },
          { id: 2, name: 'Maria', birthDate: '11/02/1990', gender: 'Nữ', address: 'London' },
        ]
      }
    }
  }
  </script>
  
  <style scoped>
  .manager {
    font-family: Arial, sans-serif;
  }
  
  table {
    width: 100%;
    border-collapse: collapse;
  }
  
  th, td {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: left;
  }
  
  th {
    background-color: #f2f2f2;
  }
  
  .edit, .delete {
    padding: 5px 10px;
    margin-right: 5px;
    cursor: pointer;
  }
  
  .edit {
    background-color: #4CAF50;
    color: white;
    border: none;
  }
  
  .delete {
    background-color: #f44336;
    color: white;
    border: none;
  }
  </style>