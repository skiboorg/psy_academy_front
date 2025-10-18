<script setup lang="ts">
const {$api} = useNuxtApp()

const {data:programs} = await useHttpRequest( useAsyncData(()=>$api.data.programs(true)))
const {data:users} = await useHttpRequest( useAsyncData(()=>$api.data.staff(false)))
const tab = ref('program')
import {Carousel, Pagination, Slide} from "vue3-carousel";
const carouselConfig = {
  itemsToShow: 3,
  wrapAround: false,
  gap:20,
  //autoplay: 3000,
  pauseAutoplayOnHover: true,
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
const slider1 = ref()

</script>

<template>
  <BlockSection title_text="Образовательные программы">

    <div class="flex flex-wrap items-end justify-between mb-10 gap-10">
      <div class="flex flex-wrap gap-4 ">
        <UIButton @click="tab='program'" :active="tab==='program'" >Факультеты и учебные центры</UIButton>
        <UIButton @click="tab='teacher'" :active="tab==='teacher'">Преподаватели Академии</UIButton>
      </div>
<!--        <UITextLinkWithArrow class="order-0 lg:order-1" text="Все программы обучения" to="/education_program"/>-->
      <div class="flex gap-3">
        <UIButton :primary="false" @click="slider.prev()">
          <template #icon>
            <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0.146446 3.64645C-0.0488157 3.84171 -0.0488157 4.15829 0.146446 4.35355L3.32843 7.53553C3.52369 7.7308 3.84027 7.7308 4.03553 7.53553C4.2308 7.34027 4.2308 7.02369 4.03553 6.82843L1.20711 4L4.03553 1.17157C4.2308 0.97631 4.2308 0.659728 4.03553 0.464465C3.84027 0.269203 3.52369 0.269203 3.32843 0.464465L0.146446 3.64645ZM11.5 4L11.5 3.5L0.5 3.5L0.5 4L0.5 4.5L11.5 4.5L11.5 4Z" fill="white"/>
            </svg>

          </template>
        </UIButton>
        <UIButton :primary="false" show_left_icon @click="slider.next()"></UIButton>
      </div>
    </div>
<!--    class="grid grid-cols-1 lg:grid-cols-3 gap-5"-->
    <div v-if="tab==='program'" >
      <Carousel ref="slider" v-bind="carouselConfig">
        <Slide v-for="program in programs" :key="program.id" >
        <CardPrice  :program="program" />
        </Slide>
      </Carousel>
    </div>
<!--    class="grid grid-cols-1 lg:grid-cols-3 gap-5"-->
    <div v-if="tab==='teacher'" >
      <Carousel ref="slider" v-bind="carouselConfig">
        <Slide v-for="item in users.filter(x=>x.is_teacher && x.show_at_index)" :key="item.id" >
          <CardTeacherVIndex  :item="item"/>
        </Slide>
      </Carousel>

    </div>



  </BlockSection>
</template>

<style scoped>

</style>