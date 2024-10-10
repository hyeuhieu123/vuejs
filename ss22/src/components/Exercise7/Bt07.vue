<template>
  <div>
    <button class="btn" @click="showAddForm">Thêm mới sản phẩm</button>
    <div class="view-all">
      <table>
        <thead>
          <tr>
            <th>STT</th>
            <th>Tên sản phẩm</th>
            <th>Hình ảnh</th>
            <th>Giá</th>
            <th>Số lượng (kg)</th>
            <th>Ngày thêm</th>
            <th>Chức năng</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(product, index) in products" :key="index">
            <td>{{ index + 1 }}</td>
            <td>{{ product.name }}</td>
            <td>
              <img :src="product.image" alt="Hình ảnh sản phẩm" width="50" />
            </td>
            <td>{{ product.price }} đ</td>
            <td>{{ product.quantity }}</td>
            <td>{{ product.dateAdded }}</td>
            <td>
              <button @click="showEditForm(product)">Sửa</button>
              <button @click="confirmDelete(product.id)">Xóa</button>
            </td>
          </tr>
        </tbody>
      </table>

      <ProductForm
        v-if="showForm"
        :productToEdit="currentProduct"
        :products="products"
        :isEdit="isEdit"
        @save="saveProduct"
        @cancel="closeForm"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import ProductForm from "./ProductForm.vue";

const products = ref([]);
const showForm = ref(false);
const currentProduct = ref(null);
const isEdit = ref(false);

// Fetch products from API
const getData = async () => {
  const res = await fetch("http://localhost:3000/products");
  const data = await res.json();
  products.value = data;
};

// Show add form
const showAddForm = () => {
  currentProduct.value = null;
  isEdit.value = false;
  showForm.value = true;
};

// Show edit form
const showEditForm = (product) => {
  currentProduct.value = { ...product };
  isEdit.value = true;
  showForm.value = true;
};

// Handle form save
const saveProduct = async (product) => {
  if (isEdit.value) {
    // Update existing product
    await fetch(`http://localhost:3000/products/${product.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(product),
    });
  } else {
    // Add new product
    await fetch("http://localhost:3000/products", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(product),
    });
  }
  closeForm();
  getData();
};

// Confirm delete
const confirmDelete = (id) => {
  if (confirm("Bạn có chắc muốn xóa sản phẩm này không?")) {
    deleteProduct(id);
  }
};

// Delete product
const deleteProduct = async (id) => {
  await fetch(`http://localhost:3000/products/${id}`, {
    method: "DELETE",
  });
  getData();
};

// Close form
const closeForm = () => {
  showForm.value = false;
};

getData();
</script>

<style scoped>
.view-all {
  display: flex;
  flex-direction: row;
  gap: 20px;
}

.btn {
  background-color: rgb(53, 53, 248);
  color: white;
}

table {
  width: 100%;
  border-collapse: collapse;
}
th,
td {
  border: 1px solid #ddd;
  padding: 8px;
}
th {
  background-color: #f2f2f2;
}
</style>
