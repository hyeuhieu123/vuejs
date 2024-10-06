<template>
  <div>
    <h2>Thông tin cá nhân</h2>
    <ul>
      <li>Họ và tên: {{ name }}</li>
      <li>Email: {{ email }}</li>
      <li>Giới tính: {{ gender }}</li>
      <li>Ngày sinh: {{ dateOfBirth }}</li>
      <li>Địa chỉ: {{ address }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "nguyen a",
      gender: "namam",
      dateOfBirth: "06/03/2024",
      email: "nva@gmail.com",
      address: "Thanh Xuân, Hà Nội",
    };
  },
};
</script>

<style></style>
