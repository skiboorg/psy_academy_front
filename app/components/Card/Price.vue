<script setup lang="ts">
defineProps(['program'])
</script>

<template>
  <CardBase>
    <div class="flex gap-[7px] flex-wrap mb-[30px]">

      <UIBadge v-for="tag in program.tags" :label="tag.label" />

    </div>
    <p class="font-semibold text-lg mb-5">{{program.name}}</p>
    <p class="text-sm text-[#727272] leading-[140%] mb-5">{{program.short_description}}</p>
    <div class="grid grid-cols-2 gap-5 mb-[30px]">
      <div class="">
        <p class="text-sm text-[#727272] leading-[120%] ">Стоимость</p>
        <p class="text-sm  leading-[120%] mb-5">{{program.price}}</p>
      </div>
      <div class="">
        <p class="text-sm text-[#727272] leading-[120%] ">Форма обучения</p>
        <p class="text-sm  leading-[120%] mb-5 font-medium">{{program.format?.name}}</p>
      </div>
    </div>
    <UIButton :primary="false" show_left_icon>
      <nuxt-link :to="`/education_program/${program.slug}`">Подробнее</nuxt-link>
      </UIButton>
  </CardBase>

</template>

<style scoped>

</style>