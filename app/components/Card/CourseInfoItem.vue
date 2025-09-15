<script setup lang="ts">
defineProps(['title','text'])
</script>

<template>
  <div class="filter p-3 lg:p-5 rounded-[5px] bg-white/10 border border-[#636363] backdrop-blur-md text-white">
      <p class="font-semibold mb-4 lg:mb-10">{{title}}</p>
      <p>{{text}}</p>
  </div>

</template>

<style scoped>

</style>