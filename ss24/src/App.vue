<template>
  <div class="task-manager">
    <h1>Quản lý công việc</h1>
    <div>
      <input
        v-model="inputValue"
        type="text"
        placeholder="Nhập tên công việc"
        required
      />
      <button @click="handleAdd" class="addJob">Thêm công việc</button>
    </div>

    <div class="filter-buttons">
      <button @click="setFilter('all')">Tất cả</button>
      <button @click="setFilter('completed')">Hoàn thành</button>
      <button @click="setFilter('inProgress')">Đang thực hiện</button>
    </div>

    <ul>
      <li v-for="job in filteredJobs" :key="job.id">
        <input
          @click="changeStatus(job)"
          type="checkbox"
          :checked="job.status"
        />
        <span :class="{ completed: job.status }">{{ job.name }}</span>
        <button @click="openEditModal(job)">✏️</button>
        <!-- Thêm hàm này -->
        <button>🗑️</button>
      </li>
    </ul>

    <button @click="deleteCompletedTasks">Xóa công việc hoàn thành</button>
    <button @click="deleteAllTasks">Xóa tất cả công việc</button>

    <!-- Modal form để chỉnh sửa công việc -->
    <Form
      v-if="isForm"
      :job="currentJob"
      @closeModal="closeModal"
      @confirmEdit="confirmEdit"
    ></Form>
  </div>
</template>

<script setup>
import { reactive, ref, computed } from "vue";
import Form from "@/components/Form.vue";

const inputValue = ref("");
const listJob = reactive(JSON.parse(localStorage.getItem("jobs")) || []);
const filter = ref("all");
const isForm = ref(false);
const currentJob = ref(null); // Công việc đang chỉnh sửa

// Đóng modal
const closeModal = () => {
  isForm.value = false;
  currentJob.value = null;
};

// Mở modal chỉnh sửa
const openEditModal = (job) => {
  isForm.value = true;
  currentJob.value = { ...job }; // Tạo bản sao công việc
};

// Xác nhận chỉnh sửa
const confirmEdit = (updatedJob) => {
  const index = listJob.findIndex((job) => job.id === updatedJob.id);
  if (index !== -1) {
    listJob[index].name = updatedJob.name;
    localStorage.setItem("jobs", JSON.stringify([...listJob]));
  }
  closeModal();
};

// Hàm thêm công việc
const handleAdd = () => {
  if (!inputValue.value) {
    return;
  }
  listJob.push({
    id: Math.ceil(Math.random() * 999999),
    name: inputValue.value,
    status: false,
  });
  localStorage.setItem("jobs", JSON.stringify([...listJob]));
  inputValue.value = "";
};

// Đổi trạng thái hoàn thành của công việc
const changeStatus = (job) => {
  job.status = !job.status;
  localStorage.setItem("jobs", JSON.stringify([...listJob]));
};

// Cập nhật bộ lọc công việc
const setFilter = (newFilter) => {
  filter.value = newFilter;
};

// Lọc công việc theo trạng thái
const filteredJobs = computed(() => {
  if (filter.value === "completed") {
    return listJob.filter((job) => job.status === true);
  } else if (filter.value === "inProgress") {
    return listJob.filter((job) => job.status === false);
  }

  return listJob;
});

// Xóa các công việc đã hoàn thành
const deleteCompletedTasks = () => {
  const remainingJobs = listJob.filter((job) => !job.status);
  localStorage.setItem("jobs", JSON.stringify([...remainingJobs]));
  listJob.length = 0;
  listJob.push(...remainingJobs);
};

// Xóa tất cả công việc
const deleteAllTasks = () => {
  listJob.length = 0;
  localStorage.removeItem("jobs");
};
</script>

<style scoped>
.filter-buttons button {
  margin-top: 10px;
  padding: 10px;
}
.addJob {
  background: #2463eb;
  border: none;
  border-radius: 10px;
  width: 100%;
  padding: 10px;
  color: white;
}
.task-manager {
  max-width: 400px;
  margin: auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #f9f9f9;
}

h1 {
  text-align: center;
}

input[type="text"] {
  width: calc(100% - 22px);
  padding: 10px;
  margin-bottom: 10px;
}

button {
  margin-right: 5px;
}

.filter-buttons {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
}

.completed {
  text-decoration: line-through;
}
</style>
