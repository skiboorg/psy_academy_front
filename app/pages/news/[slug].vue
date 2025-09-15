<script setup lang="ts">
const {$api} = useNuxtApp()
const {slug} = useRoute().params
const {data:news_item} = await useHttpRequest( useAsyncData(()=>$api.data.news_item(slug)))
const {data:news} = await useHttpRequest( useAsyncData(()=>$api.data.news(false,3)))
const {data:tags} = await useHttpRequest( useAsyncData(()=>$api.data.news_tags()))
const selected_tag = ref('all')
const options = [
  { label: 'Все', value: 'all' },
]
const ttt = tags.value.map((tag, index) => ({ label: tag.name, value: tag.slug }))
</script>

<template>
  <BlockBreadcrumbs :items="[
  { label: 'Новости', href: '/news' },
  {label:news_item.name}
  ]"
  />
  <div class="container">
    <p class="mb-5 text-[#727272]">{{news_item.created_at}}</p>
  </div>

  <BlockSection :title_text="news_item.name">
    <div class="grid grid-cols-12">
      <div class="col-start-1 col-span-8">
        <p class="mb-5">{{news_item.description}}</p>
        <img class="w-full h-auto object-cover mb-5" v-if="news_item.top_image" :src="news_item.top_image" alt="">
        <div class="news-content" v-html="news_item.content"></div>
      </div>
      <div class="col-start-10 col-end-13 col-span-3">
        <UIRadio
            v-model="selected_tag"
            :options="options.concat(ttt)"/>
      </div>
    </div>

  </BlockSection>
  <BlockSection title_text="Читайте также">
    <div class="grid grid-cols-3 gap-5">
      <CardNews v-for="item in news" :key="item.id" :item="item"/>
    </div>
  </BlockSection>
</template>

<style scoped>

</style>