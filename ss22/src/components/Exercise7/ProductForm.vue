<template>
  <div class="form-container">
    <h2>{{ isEdit ? "Cập nhật sản phẩm" : "Thêm mới sản phẩm" }}</h2>
    <form @submit.prevent="saveProduct">
      <div>
        <label>Tên sản phẩm:</label>
        <input v-model="product.name" type="text" />
        <span v-if="errors.name">{{ errors.name }}</span>
      </div>
      <div>
        <label>Hình ảnh (URL):</label>
        <input v-model="product.image" type="text" />
        <span v-if="errors.image">{{ errors.image }}</span>
      </div>
      <div>
        <label>Giá (đ):</label>
        <input v-model="product.price" type="number" />
        <span v-if="errors.price">{{ errors.price }}</span>
      </div>
      <div>
        <label>Số lượng (kg):</label>
        <input v-model="product.quantity" type="number" />
        <span v-if="errors.quantity">{{ errors.quantity }}</span>
      </div>
      <div>
        <button type="submit">Lưu</button>
        <button type="button" @click="cancel">Hủy</button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";

const props = defineProps({
  productToEdit: Object,
  products: Array,
  isEdit: Boolean,
});

const emit = defineEmits(["save", "cancel"]);
const product = ref({
  name: "",
  image: "",
  price: "",
  quantity: "",
  dateAdded: new Date().toISOString().slice(0, 10),
});

const errors = ref({
  name: "",
  image: "",
  price: "",
  quantity: "",
});

const clearErrors = () => {
  errors.value = { name: "", image: "", price: "", quantity: "" };
};

watch(
  () => props.productToEdit,
  (newProduct) => {
    if (props.isEdit && newProduct) {
      product.value = { ...newProduct };
    }
  },
  { immediate: true }
);

// Validate form inputs
const validateForm = () => {
  clearErrors();
  let isValid = true;

  if (!product.value.name) {
    errors.value.name = "Tên sản phẩm không được để trống.";
    isValid = false;
  } else if (
    !props.isEdit &&
    props.products.some((p) => p.name === product.value.name)
  ) {
    errors.value.name = "Tên sản phẩm không được trùng.";
    isValid = false;
  }
  if (!product.value.image) {
    errors.value.image = "Hình ảnh không được để trống.";
    isValid = false;
  }
  if (!product.value.price) {
    errors.value.price = "Giá không được để trống.";
    isValid = false;
  }
  if (!product.value.quantity) {
    errors.value.quantity = "Số lượng không được để trống.";
    isValid = false;
  }

  return isValid;
};

// Save product
const saveProduct = () => {
  if (validateForm()) {
    emit("save", { ...product.value });
  }
};

const cancel = () => {
  emit("cancel");
};
</script>

<style scoped>
.form-container {
  padding: 20px;
  border: 1px solid #ccc;
  background-color: #f9f9f9;
}
span {
  color: red;
  font-size: 12px;
}
</style>
