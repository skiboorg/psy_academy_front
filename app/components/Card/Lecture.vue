<script setup lang="ts">
defineProps(['lecture'])
</script>

<template>
  <div class="bg-white">

    <img class="w-full h-auto lg:h-[285px] object-cover" :src="lecture.cover_image">
    <div class="p-[30px]">
      <div class="flex items-center gap-2 mb-[30px]">
        <UIBadge :label="lecture.card_tag"/>
        <UIBadge :label="lecture.format?.name" :dot_color="lecture.format?.color"/>

      </div>
      <p class="text-lg font-semibold mb-5 leading-[120%] tracking-[-0.05rem] lg:min-h-[44px]">{{lecture.name}}</p>
      <p class="text-sm text-[#727272] leading-[140%] mb-[30px]">Стоимость от {{lecture.price}}</p>
      <UIButton show_left_icon :primary="false" >
        <nuxt-link :to="`/lecture_hall/${lecture.slug}`">Приобрести билет</nuxt-link>

      </UIButton>
    </div>

  </div>
</template>

<style scoped>

</style>