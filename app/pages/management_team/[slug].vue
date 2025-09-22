<script setup lang="ts">
import {Carousel, Pagination, Slide} from "vue3-carousel";
const carouselConfig = {

  wrapAround: true,
  //autoplay: 3000,
  pauseAutoplayOnHover: true,
  gap:10,
  //slideEffect:'fade'
  breakpoints: {
    // 300px and up
    300: {
      itemsToShow: 1,
      snapAlign: 'center',
    },
    // 400px and up
    630: {
      itemsToShow: 2,
      snapAlign: 'start',
    },
    900: {
      itemsToShow: 3,
      snapAlign: 'start',
    },
  }
}
const slider = ref()
const {$api} = useNuxtApp()
const {slug} = useRoute().params
const {data:user} = await useHttpRequest( useAsyncData(()=>$api.data.staff_by_slug(slug)))
const {data:news} = await useHttpRequest( useAsyncData(()=>$api.data.news(false,3)))
</script>

<template>
  <BlockBreadcrumbs :items="[
  { label: 'Руководящий состав', href: '/management_team' },
  {label:user.full_name}
  ]"
  />
  <BlockSection :title_text="user.full_name" >
    <div class="grid grid-cols-12 gap-5">
      <div class="col-span-12 lg:col-span-8">
        <CardBase extra_class="space-y-7">
          <UIBadge :label="user.position"/>
          <p class="text-sm lg:max-w-[70%] leading-[140%] ">{{user.short_description}}</p>
          <div class="grid grid-cols-12 gap-5">
            <div class="col-span-2"><p class="text-primary font-semibold">Стаж работы</p></div>
            <div class="col-span-10"><p>{{user.work_time}}</p></div>
            <div class="col-span-2"><p class="text-primary font-semibold">Должность</p></div>
            <div class="col-span-10"><p>{{user.position}}</p></div>
            <div class="col-span-2"><p class="text-primary font-semibold">Квалификация</p></div>
            <div class="col-span-10"><p>{{user.quality}}</p></div>

          </div>
        </CardBase>
      </div>
      <div class="col-span-12 lg:col-span-4">
        <CardBase>
          <template #image>
            <img class="lg:absolute w-full h-auto object-cover lg:w-auto lg:h-auto bottom-0 lg:left-1/2 lg:-translate-x-1/2" :src="user.photo" alt="">
          </template>
        </CardBase>
      </div>

    </div>
  </BlockSection>
  <BlockSection title_text="Профессиональное образование,<br>переподготовка, повышение квалификации" >
    <div class="grid grid-cols-12 gap-5">
      <div class="col-span-12 lg:col-span-8">
        <div class="grid grid-cols-1 gap-5">
          <CardBase v-for="item in user.biography_items">
            <div class="grid grid-cols-12 items-center gap-4 lg:gap-0">
              <div class="col-span-12 lg:col-span-2">
                <TypingText26 :text="item.title" extra_class="text-primary"/>

                </div>
              <div class="col-span-12 lg:col-span-10">
                <p class="text-sm">{{item.text}}</p>
              </div>
            </div>
          </CardBase>
        </div>
      </div>
      <div class="col-span-12 lg:col-span-4">
        <CardBase>
          <p class="font-semibold text-lg mb-7">Область научных интересов:</p>
          <div class="flex flex-wrap gap-2">
            <UIBadge variant="primary" :label="tag.label" v-for="tag in user?.tags"/>
          </div>


        </CardBase>
      </div>
    </div>
  </BlockSection>
  <BlockSection v-if="user.publications.length>0" title_text="Научные публикации" :extra_buttons="true">
    <template #extra_buttons>
      <div class="flex gap-3">
        <UIButton :primary="false" @click="slider.prev()">
          <template #icon>
            <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0.146446 3.64645C-0.0488157 3.84171 -0.0488157 4.15829 0.146446 4.35355L3.32843 7.53553C3.52369 7.7308 3.84027 7.7308 4.03553 7.53553C4.2308 7.34027 4.2308 7.02369 4.03553 6.82843L1.20711 4L4.03553 1.17157C4.2308 0.97631 4.2308 0.659728 4.03553 0.464465C3.84027 0.269203 3.52369 0.269203 3.32843 0.464465L0.146446 3.64645ZM11.5 4L11.5 3.5L0.5 3.5L0.5 4L0.5 4.5L11.5 4.5L11.5 4Z" fill="white"/>
            </svg>

          </template>
        </UIButton>
        <UIButton :primary="false" show_left_icon @click="slider.next()">Следующий слайд</UIButton>
      </div>

    </template>
    <Carousel ref="slider" v-bind="carouselConfig" >
      <Slide v-for="item in user.publications" :key="item.id" >
        <div class="bg-white w-full">
          <div class="p-[30px]">
            <div class="flex items-center justify-between mb-[30px]">
              <UIBadge  :label="user.full_name" variant="primary"/>
              <span class="text-xs text-[#727272]">{{item.date}}</span>
            </div>
            <p class="text-lg font-semibold mb-5 leading-[120%] tracking-[-0.05rem]">{{item.text}}</p>
            <p class="text-sm text-[#727272] leading-[140%] mb-[30px]">{{item.text1}}</p>

              <a class="border-[#2c2c2c] inline-block mt-10 lg:mt-0 px-4 py-2 border  rounded-full hover:bg-white/10 hover:text-black transition" :href="item.link" target="_blank">
                <svg  width="21" height="8" viewBox="0 0 21 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.3536 4.35355C20.5488 4.15829 20.5488 3.84171 20.3536 3.64645L17.1716 0.464466C16.9763 0.269204 16.6597 0.269204 16.4645 0.464466C16.2692 0.659728 16.2692 0.976311 16.4645 1.17157L19.2929 4L16.4645 6.82843C16.2692 7.02369 16.2692 7.34027 16.4645 7.53553C16.6597 7.7308 16.9763 7.7308 17.1716 7.53553L20.3536 4.35355ZM0 4V4.5H20V4V3.5H0V4Z" fill="#2C2C2C"/>
                </svg>
              </a>

          </div>

        </div>

      </Slide>
    </Carousel>
  </BlockSection>
  <BlockSection v-if="user.posts.length>0" title_text="Статьи преподавателя" link_text="Все новости и статьи" link_to="/news">
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-5">
      <CardNews v-for="post in user.posts" :key="post.id" :item="post"/>
    </div>
  </BlockSection>
</template>

<style scoped>

</style>