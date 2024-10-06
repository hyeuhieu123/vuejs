<template>
  <div class="container">
    <form @submit.prevent="addProduct">
      <div class="form-group">
        <label for="productCode">Mã sản phẩm</label>
        <input
          type="text"
          class="form-control"
          id="productCode"
          v-model="product.code"
          required
        />
      </div>
      <div class="form-group">
        <label for="productName">Tên sản phẩm</label>
        <input
          type="text"
          class="form-control"
          id="productName"
          v-model="product.name"
          required
        />
      </div>
      <div class="form-group">
        <label for="productPrice">Giá</label>
        <input
          type="number"
          class="form-control"
          id="productPrice"
          v-model="product.price"
          required
        />
      </div>
      <div class="form-group">
        <label for="productQuantity">Số lượng</label>
        <select
          class="form-control"
          id="productQuantity"
          v-model="product.quantity"
        >
          <option v-for="n in 100" :key="n">{{ n }}</option>
        </select>
      </div>
      <button type="submit" class="btn btn-custom btn-block">Thêm mới</button>
    </form>
  </div>
</template>

<script setup>
import { reactive } from "vue";

const product = reactive({
  code: "",
  name: "",
  price: null,
  quantity: 10,
});

const addProduct = () => {
  console.log("Sản phẩm mới:", product);
};
</script>

<style scoped>
.container {
  max-width: 400px;
  margin-top: 50px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.btn-custom {
  background-color: #007bff;
  color: white;
}
</style>
