<script setup lang="ts">
definePageMeta({
  layout: 'default',
})

const val1 = ref()
const val2 = ref()
const options = [
  { label: 'На этой неделе', value: 'msk' },
  { label: 'В этом месяце', value: 'spb' },
  { label: 'В этом году', value: 'nsk' }
]
const {$api} = useNuxtApp()
const {slug} = useRoute().params
const {data:lectures} = await useHttpRequest( useAsyncData(()=>$api.data.lectures()))

</script>

<template>
  <BlockBreadcrumbs :items="[
  { label: 'Лекторий' }
  ]"
  />
  <BlockSection title_text="Лекторий" >
    <p class="text-lg leading-[140%] lg:max-w-[65%] mb-10">
      Здесь вы можете слушать лекции и практикумы в онлайн и офлайн-формате, участвовать в мастер-классах и авторских воркшопах, знакомиться с новыми идеями и получать практические инструменты, находить контакты и возможности для профессионального роста.

    </p>
    <div class="w-full  mb-10 pb-3 lg:pb-0">
      <div class="flex gap-2   ">
        <UISelect
            :options="options"
            v-model="val1"
            variant="primary"
            placeholder="Даты проведения"
        />
        <UIRadio
            v-model="val2"
            :options="[
    { label: 'Онлайн', value: 'yes' },
    { label: 'Оффлайн', value: 'no' },

  ]"/>

      </div>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-3 gap-5">
      <template v-for="(lecture,index) in lectures" :key="index">
        <CardLecture :lecture="lecture"/>
<!--        <CardLecture v-if="index !== 3" :lecture="lecture"/>-->
<!--        <CardSubscribe v-else />-->
      </template>
    </div>
  </BlockSection>
</template>

<style scoped>

</style>