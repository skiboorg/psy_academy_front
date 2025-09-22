<script setup lang="ts">
defineProps(['item'])

</script>

<template>
  <div class="grid grid-cols-1 gap-[10px]">
    <CardBase extra_class="!h-[390px]">
      <img class="absolute bottom-0 right-1/2 translate-x-1/2 w-[320px] h-auto" :src="item.photo" alt="">
    </CardBase>
    <CardBase >

          <TypingText26 :text="item.full_name" extra_class="mb-3"/>
          <UIBadge class="mb-4" :label="item.position"/>

<!--        <div class="">-->
<!--          <p class="text-[#727272] text-sm">E-mail</p>-->
<!--          <a class="text-sm" href="mailto:gorlenko@academy.ru">gorlenko@academy.ru</a>-->
<!--        </div>-->
        <p class="text-sm leading-[140%] mb-[50px]">{{item.short_description}}</p>
        <UITextLinkWithArrow text="Изучить биографию" :to="`/management_team/${item.slug}`"/>

    </CardBase>
  </div>

</template>

<style scoped>

</style>