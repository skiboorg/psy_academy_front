<script setup lang="ts">
defineProps(['items'])
</script>

<template>
<div class="flex flex-col gap-4">
  <BlockCourseInfoPanelItem v-for="(item, index) in items" :key="index" :item="item" :index="index" />
</div>
</template>
