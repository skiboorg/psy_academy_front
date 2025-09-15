<script setup lang="ts">
definePageMeta({
  layout: 'default',
})
const {$api} = useNuxtApp()

const {data:programs} = await useHttpRequest( useAsyncData(()=>$api.data.programs(false)))

</script>

<template>
  <BlockBreadcrumbs :items="[
  { label: 'Все программы обучения' }
  ]"
  />
  <BlockSection title_text="Все программы обучения" extra_class="!mb-20">

    <div class="grid grid-cols-1 lg:grid-cols-3 gap-5">
      <CardPrice v-for="program in programs" :program="program" />
    </div>
  </BlockSection>

</template>

<style scoped>

</style>