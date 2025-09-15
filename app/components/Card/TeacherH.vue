<script setup lang="ts">
defineProps(['item'])


</script>

<template>
<CardBase variant="teacher">
  <div class="h-full flex flex-col items-start justify-between gap-10 lg:gap-0">
    <div class="order-1">
      <TypingText26 :text="item.full_name" extra_class="mb-3"/>
      <UIBadge :label="item.position"/>
    </div>
    <div class="order-2">
      <p class="text-[#727272] text-sm">E-mail</p>
      <a class="text-sm" href="mailto:gorlenko@academy.ru">{{item.email}}</a>
    </div>
    <UITextLinkWithArrow class="order-3" text="Изучить биографию" :to="`/management_team/${item.slug}`"/>
    <img class="order-0 lg:absolute h-full top-0 bottom-0 right-7 w-[320px]" :src="item.photo" alt="">

  </div>
</CardBase>
</template>

<style scoped>

</style>