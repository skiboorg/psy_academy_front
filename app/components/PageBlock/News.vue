<script setup lang="ts">
const {$api} = useNuxtApp()

const {data:news} = await useHttpRequest( useAsyncData(()=>$api.data.news(true)))

</script>

<template>
  <BlockSection title_text="Медиа Академии" link_text="Все новости и статьи" link_to="/news">
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-5">
      <CardNews v-for="item in news" :key="item.id" :item="item"/>
    </div>
  </BlockSection>
</template>

<style scoped>

</style>