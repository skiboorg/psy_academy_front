<script setup lang="ts">
import {Carousel, Pagination, Slide} from "vue3-carousel";
const carouselConfig = {
  itemsToShow: 1,
  wrapAround: true,
  //autoplay: 3000,
  pauseAutoplayOnHover: true,
  //slideEffect:'fade'
}
const slider = ref()
const {$api} = useNuxtApp()
const {data:parters} = await useHttpRequest( useAsyncData(()=>$api.data.parnters()))

</script>

<template>
<BlockSection title_text="Наши партнеры" :extra_buttons="true">
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
  <Carousel ref="slider" v-bind="carouselConfig">
    <Slide v-for="item in parters" :key="item.id" >
      <CardPartner :item="item"/>
    </Slide>
  </Carousel>
</BlockSection>
</template>

<style scoped>

</style>