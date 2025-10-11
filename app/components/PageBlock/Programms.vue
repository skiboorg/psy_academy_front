<script setup lang="ts">
const {$api} = useNuxtApp()

const {data:programs} = await useHttpRequest( useAsyncData(()=>$api.data.programs(true)))
const {data:users} = await useHttpRequest( useAsyncData(()=>$api.data.staff(false)))
const tab = ref('program')

</script>

<template>
  <BlockSection title_text="Образовательные программы">

    <div class="flex flex-wrap items-end justify-between mb-10 gap-10">
      <div class="flex flex-wrap gap-4 order-1 lg:order-0">
        <UIButton @click="tab='program'" :active="tab==='program'" >Факультеты и учебные центры</UIButton>
        <UIButton @click="tab='teacher'" :active="tab==='teacher'">Преподаватели Академии</UIButton>
      </div>
        <UITextLinkWithArrow class="order-0 lg:order-1" text="Все программы обучения" to="/education_program"/>
    </div>
    <div v-if="tab==='program'" class="grid grid-cols-1 lg:grid-cols-3 gap-5">
      <CardPrice v-for="program in programs" :program="program" />
    </div>

    <div v-if="tab==='teacher'" class="grid grid-cols-1 lg:grid-cols-3 gap-5">
      <CardTeacherVIndex v-for="item in users.filter(x=>x.is_teacher && x.show_at_index)" :item="item"/>
    </div>



  </BlockSection>
</template>

<style scoped>

</style>