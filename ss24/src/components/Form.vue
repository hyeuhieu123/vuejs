<template>
  <div class="modal-overlay">
    <div class="modal">
      <div class="modal-header">
        <h3>Sửa công việc</h3>
        <button @click="closeModal">X</button>
      </div>
      <div class="modal-body">
        <input type="text" v-model="editedJob.name" />
      </div>
      <div class="modal-footer">
        <button @click="closeModal">Hủy</button>
        <button @click="confirmEdit">Xác nhận</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";

const props = defineProps(["job"]);
const emits = defineEmits(["closeModal", "confirmEdit"]);

const editedJob = ref({ ...props.job });

const closeModal = () => {
  emits("closeModal");
};

const confirmEdit = () => {
  emits("confirmEdit", editedJob.value);
};
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
}
.modal {
  background: white;
  padding: 20px;
  border-radius: 5px;
  width: 300px;
}
.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.modal-body {
  margin: 20px 0;
}
.modal-footer {
  display: flex;
  justify-content: flex-end;
}
</style>
