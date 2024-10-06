<template>
  <div>
    <div class="text-center pa-4">
      <v-btn @click="dialog = true"> Xác nhận </v-btn>

      <v-dialog v-model="dialog" width="auto">
        <v-card
          max-width="400"
          prepend-icon="mdi-update"
          text="Bạn có chắc muốn cập nhật không? Nếu có dữ liệu sẽ tự động cập nhật"
          title="Xác nhận"
        >
          <template v-slot:actions>
            <v-btn
              class="ms-auto"
              text="Xác nhận"
              @click="dialog = false"
            ></v-btn>
          </template>
        </v-card>
      </v-dialog>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";

const dialog = ref(false);
</script>
<style></style>
