<script setup lang="ts">
definePageMeta({
  layout: 'default',
})
const {$api} = useNuxtApp()

const {data:users} = await useHttpRequest( useAsyncData(()=>$api.data.staff(false)))

</script>

<template>
  <BlockBreadcrumbs :items="[
  { label: 'Руководящий состав' }
  ]"
  />
  <BlockSection title_text="Руководящий состав" extra_class="!mb-20">

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-5 h-auto lg:h-[350px]">
      <CardTeacherH v-for="item in users.filter(x=>x.is_manager)" :item="item" />

    </div>
  </BlockSection>
  <BlockSection>
    <BlockQuote text="Соединяем науку, бизнес<br><span class=text-[#727272]>и личность,
    формируем лидеров экономики будущего формируем лидеров
    будущего формируем лидеров экономики будущего</span>"/>
  </BlockSection>
  <BlockSection title_text="Преподаватели">
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-5">
      <CardTeacherV v-for="item in users.filter(x=>x.is_teacher)" :item="item"/>
    </div>
  </BlockSection>
  <BlockSection title_text="Сотрудники академии">
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-5">
      <CardTeacherV v-for="item in users.filter(x=>x.is_staff)" :item="item"/>
    </div>
  </BlockSection>

</template>

<style scoped>

</style>