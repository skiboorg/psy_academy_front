<script setup lang="ts">
defineProps(['hide_img','item'])
</script>

<template>
<div class="bg-white">
  <img v-if="!hide_img" class="w-full h-[210px] object-cover" :src="item.cover_image">
  <div class="p-[30px]">
    <div class="flex items-center justify-between mb-[30px]">
      <UIBadge v-for="tag in item.tags" :label="tag.name"/>
      <span class="text-xs text-[#727272]">{{item.created_at}}</span>
    </div>
    <p class="text-lg font-semibold mb-5 leading-[120%] tracking-[-0.05rem]">{{item.name}}</p>
    <p class="text-sm text-[#727272] leading-[140%] mb-[30px]">{{item.description}}</p>
    <UIButton show_left_icon :primary="false">
      <nuxt-link :to="`/news/${item.slug}`">Читать</nuxt-link>
    </UIButton>
  </div>

</div>
</template>

<style scoped>

</style>