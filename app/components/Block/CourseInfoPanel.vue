<script setup lang="ts">
defineProps(['items','show_index'])
</script>

<template>
<div class="flex flex-col gap-4">
  <BlockCourseInfoPanelItem :show_index="show_index" v-for="(item, index) in items" :key="index" :item="item" :index="index" />
</div>
</template>
