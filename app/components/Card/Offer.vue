<script setup lang="ts">
defineProps(['title','text','to','isLast'])

</script>

<template>
  <div class="flex flex-col items-start justify-between lg:border-r px-4 first:pl-0 border-[#636363]  py-8 h-full"
  :class="isLast ? 'border-none ' : ''"
  >
    <div class="mb-9">
      <h3 class="font-semibold ">{{title}}</h3>
      <p class="text-sm">{{text}}</p>
    </div>
    <UIArrowButton extra_class="!mt-0" :to="to"/>
  </div>
</template>

<style scoped>

</style>