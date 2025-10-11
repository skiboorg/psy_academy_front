<script setup lang="ts">
defineProps(['item'])

</script>

<template>


    <CardBase >
      <div class="grid grid-cols-2 mb-9 items-center gap-5">
        <img class="w-[100px] h-[100px] lg:w-[150px] lg:h-[150px] object-cover rounded-full" :src="item.avatar" alt="">
        <TypingText26 :text="item.full_name" extra_class="mb-3"/>
      </div>



<!--          <UIBadge class="mb-4" :label="item.position"/>-->

<!--        <div class="">-->
<!--          <p class="text-[#727272] text-sm">E-mail</p>-->
<!--          <a class="text-sm" href="mailto:gorlenko@academy.ru">gorlenko@academy.ru</a>-->
<!--        </div>-->
        <p class="text-sm leading-[140%] mb-[50px]">{{item.short_description}}</p>
      <nuxt-link :to="`/management_team/${item.slug}`">
         <UIRoundedButton>Изучить биографию
           <template #icon>
             <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path d="M11.3536 4.35355C11.5488 4.15829 11.5488 3.84171 11.3536 3.64645L8.17157 0.464466C7.97631 0.269204 7.65973 0.269204 7.46447 0.464466C7.2692 0.659728 7.2692 0.976311 7.46447 1.17157L10.2929 4L7.46447 6.82843C7.2692 7.02369 7.2692 7.34027 7.46447 7.53553C7.65973 7.7308 7.97631 7.7308 8.17157 7.53553L11.3536 4.35355ZM0 4V4.5H11V4V3.5H0V4Z" fill="white"/>
             </svg>

           </template>
         </UIRoundedButton>
      </nuxt-link>



    </CardBase>


</template>

<style scoped>

</style>