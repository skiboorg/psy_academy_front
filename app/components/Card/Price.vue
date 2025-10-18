<script setup lang="ts">
defineProps(['program'])
</script>

<template>
  <CardBase class="h-full flex flex-col items-start justify-between ">
    <div class="">
      <div class="flex gap-[7px] flex-wrap mb-[30px]">

        <UIBadge v-for="tag in program.tags" :label="tag.label" />

      </div>
      <p class="font-semibold text-[24px] mb-5 leading-[100%]">{{program.name}}</p>
      <p class="text-lg text-[#727272] leading-[140%] mb-7">{{program.short_description}}</p>
    </div>


  <div class="">
    <div class="grid grid-cols-2 gap-5 mb-[30px]">
      <div class="">
        <p class=" text-[#727272] font-light leading-[120%] ">Стоимость:</p>
        <p class=" text-lg leading-[120%] mb-5">{{program.price}}</p>
      </div>
      <div class="">
        <p class=" text-[#727272] font-light leading-[120%] ">Форма обучения:</p>
        <p class=" text-lg leading-[120%] mb-5 font-medium">{{program.format?.name}}</p>
      </div>
    </div>
    <UIButton :primary="false" show_left_icon>
      <nuxt-link :to="`/education_program/${program.slug}`">Подробнее</nuxt-link>
      </UIButton>
    </div>
  </CardBase>

</template>

<style scoped>

</style>