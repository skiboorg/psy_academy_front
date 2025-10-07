<script setup lang="ts">
defineProps(['title','text'])
</script>

<template>
  <div class="flex flex-col h-full items-start justify-between gap-4 filter p-3 lg:p-5 rounded-[5px] bg-white/10 border border-[#636363] backdrop-blur-md text-white">
      <p class="font-semibold leading-[100%]">{{title}}</p>
      <p class="leading-[100%]">{{text}}</p>
  </div>

</template>

<style scoped>

</style>