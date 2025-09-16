<script setup lang="ts">
const visible = useState('callbackModalVisible')
const form_type = useState('callbackModalFormType')
</script>

<template>
  <Dialog v-model:visible="visible" modal close-on-escape :show-header="false" class="relative" :style="{ width: '25rem' }">
    <div class="absolute top-5 right-5 z-[100]">
      <i class="pi pi-times cursor-pointer" @click="visible=false" :class="form_type === 'primary' ? 'text-white':''"></i>
    </div>
    <CardSubscribe :variant="form_type"/>
  </Dialog>

</template>

<style scoped>

</style>