<script setup lang="ts">
definePageMeta({
  layout: 'default',
})
const {$api} = useNuxtApp()

const {data:users} = await useHttpRequest( useAsyncData(()=>$api.data.staff(false)))
const  modules = [
  {
    "name": "Подраздел «Основные сведения»",
    "description": `
<ul>
<li>Основы туристской деятельности</li>
<li>Государственное регулирование и надзор в сфере туристской деятельности</li>
<li>Понятие туристского продукта. Экскурсия: виды, признаки и функции</li>
<li>Специальные профессиональные знания и навыки специалиста по туризму</li>
</ul>`,

  },
  {
    "name": "Подраздел «Структура и органы управления образовательной организацией»",
    "description": `
<ul>
<li>123213</li>
<li>213</li>
<li>21</li>
<li>321</li>
</ul>`,

  },

]
</script>

<template>
  <BlockBreadcrumbs :items="[
  { label: 'Об Академии' }
  ]"
  />
  <BlockSection title_text="Об Академии" >
    <div class="grid grid-cols-12 gap-5">
      <div class="col-span-12 lg:col-span-6">

        <CardBase extra_class="lg:!h-[240px]" variant="dark">
          <TypingText20 text="Свой научный центр" extra_class="mb-3"/>
          <p class=" text-sm leading-[120%] ">
            Каждый студент Академии публикуется<br>
            в научных изданиях и становится<br>специалистом,
            который продвигает<br>вперёд и бизнес, и науку.
          </p>
          <template #image>
            <div class="absolute bottom-0 top-0 right-[50px]">
              <svg width="233" height="100%"  viewBox="0 0 233 241" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path opacity="0.1" d="M0.4868 0H232.513C239.214 53.8218 174.507 66.7635 174.507 121C174.507 175.237 239.214 188.178 232.513 242H0.4868C-6.21481 188.178 58.493 175.237 58.493 121C58.493 66.7635 -6.21481 53.8218 0.4868 0Z" fill="black"/>
              </svg>
            </div>
          </template>
        </CardBase>
      </div>
      <div class="col-span-12 lg:col-span-3">
        <CardBase >
          <TypingText20 text="Медиа" extra_class="mb-3"/>
          <p class=" text-sm leading-[120%] ">Факультеты<br>и подробное<br>описание программ</p>
        </CardBase>
      </div>
      <div class="col-span-12 lg:col-span-3">
        <CardBase variant="dark">
          <TypingText20 text="Научный центр" extra_class="mb-3"/>
          <p class=" text-sm leading-[120%] ">Факультеты<br>и подробное<br>описание программ</p>
          <template #image>
            <div class="absolute w-full bottom-0 top-0 left-0 right-0 z-[-1]">
              <img class="w-full h-full object-cover" src="/images/f_bg_1.png" alt="">
            </div>
          </template>
        </CardBase>
      </div>
      <div class="col-span-12 lg:col-span-3">
        <CardBase variant="dark">
          <TypingText20 text="Программы" extra_class="mb-3"/>
          <p class=" text-sm leading-[120%] ">Факультеты<br>и подробное<br>описание программ</p>
          <template #image>
            <div class="absolute w-full bottom-0 top-0 left-0 right-0 z-[-1]">
              <img class="w-full h-full object-cover" src="/images/f_bg_2.png" alt="">
            </div>
          </template>
        </CardBase>
      </div>
      <div class="col-span-12 lg:col-span-3">
        <CardBase >
          <TypingText20 text="Об Академии" extra_class="mb-3"/>
          <p class=" text-sm leading-[120%] ">Факультеты<br>и подробное<br>описание программ</p>
        </CardBase>
      </div>
      <div class="col-span-12 lg:col-span-6">
        <CardBase extra_class="lg:!h-[210px]" variant="primary">
          <TypingText20 text="Об Академии" extra_class="mb-3"/>
          <p class=" text-sm leading-[120%] ">
            Каждый студент Академии публикуется<br>
            в научных изданиях и становится<br>специалистом,
            который продвигает<br>вперёд и бизнес, и науку.
          </p>
          <template #image>
            <div class="absolute bottom-0 top-0 right-[50px]">
              <svg width="206" height="100%" viewBox="0 0 206 210" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path opacity="0.1" fill-rule="evenodd" clip-rule="evenodd" d="M104.102 110.446C101.276 165.501 55.8546 209.36 0 210V0C55.8546 0.640989 101.276 44.4983 104.102 99.5535C106.89 45.224 151.159 1.79927 206 0.0480335V209.953C151.159 208.201 106.89 164.777 104.102 110.446Z" fill="white"/>
              </svg>
            </div>
          </template>
        </CardBase>
      </div>
    </div>
  </BlockSection>
  <BlockSection>
    <div class="grid grid-cols-12 gap-5 h-[430px]">
      <div class="col-span-12 lg:col-span-5">
        <CardBase >
          <TypingText26 text="Миссия и ценности" extra_class="mb-5"/>
          <p class="text-sm leading-[140%] max-w-[80%]">Мы создаем пространство, где образование становится двигателем будущего: соединяя науку, бизнес и личностное развитие, мы воспитываем экспертов, транслирующих знания в реальные продукты. В основе — академическая глубина, результативность и технологическая адаптация.</p>
          <template  #image>
            <div class="absolute right-0 bottom-0" >
              <svg width="379" height="333" viewBox="0 0 379 333" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g opacity="0.05">
                  <g filter="url(#filter0_d_554_2625)">
                    <path d="M544 230.808L277.227 9.99974L10.4544 230.808L277.227 451.617L544 230.808Z" stroke="#2C2C2C" stroke-width="8" shape-rendering="crispEdges"/>
                  </g>
                  <g filter="url(#filter1_d_554_2625)">
                    <path d="M544 386.959L277.227 166.15L10.4544 386.959L277.227 607.768L544 386.959Z" stroke="#2C2C2C" stroke-width="8" shape-rendering="crispEdges"/>
                  </g>
                  <g filter="url(#filter2_d_554_2625)">
                    <path d="M544 308.881L277.227 88.0723L10.4544 308.881L277.227 529.69L544 308.881Z" stroke="#2C2C2C" stroke-width="8" shape-rendering="crispEdges"/>
                  </g>
                  <g filter="url(#filter3_d_554_2625)">
                    <path d="M544 465.024L277.227 244.215L10.4544 465.024L277.227 685.832L544 465.024Z" stroke="#2C2C2C" stroke-width="8" shape-rendering="crispEdges"/>
                  </g>
                  <path d="M275.859 12.6973L275.859 246.97" stroke="#2C2C2C" stroke-width="8"/>
                  <path d="M5 230.768L4.99999 465.04" stroke="#2C2C2C" stroke-width="8"/>
                </g>
                <defs>
                  <filter id="filter0_d_554_2625" x="0.179688" y="0.807373" width="554.094" height="460.002" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset/>
                    <feGaussianBlur stdDeviation="2"/>
                    <feComposite in2="hardAlpha" operator="out"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_554_2625"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_554_2625" result="shape"/>
                  </filter>
                  <filter id="filter1_d_554_2625" x="0.179688" y="156.958" width="554.094" height="460.002" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset/>
                    <feGaussianBlur stdDeviation="2"/>
                    <feComposite in2="hardAlpha" operator="out"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_554_2625"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_554_2625" result="shape"/>
                  </filter>
                  <filter id="filter2_d_554_2625" x="0.179688" y="78.8799" width="554.094" height="460.002" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset/>
                    <feGaussianBlur stdDeviation="2"/>
                    <feComposite in2="hardAlpha" operator="out"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_554_2625"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_554_2625" result="shape"/>
                  </filter>
                  <filter id="filter3_d_554_2625" x="0.179688" y="235.022" width="554.094" height="460.002" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset/>
                    <feGaussianBlur stdDeviation="2"/>
                    <feComposite in2="hardAlpha" operator="out"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_554_2625"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_554_2625" result="shape"/>
                  </filter>
                </defs>
              </svg>


            </div>
          </template>
        </CardBase>
      </div>
      <div class="col-span-12 lg:col-span-7">
        <video
            class="h-full w-full rounded-[5px] object-cover"
            controls
            poster="~assets/images/video.png"
        >
<!--          <source src="program.video" type="video/mp4">-->
        </video>
      </div>
    </div>
  </BlockSection>
  <PageBlockStrategyTarget/>
  <BlockSection title_text="Руководящий состав">

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-5 h-auto lg:h-[350px]">
      <CardTeacherH v-for="item in users.filter(x=>x.is_manager)" :item="item" />

    </div>
  </BlockSection>
<!--  <PageBlockPartners/>-->
  <PageBlockNews/>
  <BlockSection title_text="Сведения об образовательной организации">
  <BlockCourseInfoPanel :show_index="false" :items="modules"/>
  </BlockSection>
</template>
