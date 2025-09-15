<script setup lang="ts">
definePageMeta({
  layout: 'default',
})

const selected_tag = ref('all')
const options = [
  { label: 'Все', value: 'all' },
]
const {$api} = useNuxtApp()

const {data:news} = await useHttpRequest( useAsyncData(()=>$api.data.news(false)))
const {data:tags} = await useHttpRequest( useAsyncData(()=>$api.data.news_tags()))

const ttt = tags.value.map((tag, index) => ({ label: tag.name, value: tag.slug }))

</script>

<template>
  <BlockBreadcrumbs :items="[
  { label: 'Медиа' }
  ]"
  />
  <BlockSection title_text="Медиа" >
    <p class="text-lg leading-[140%] lg:max-w-[65%] mb-10">Публичное образовательное мероприятие или серия образовательных встреч, доступных широкой
      аудитории без отбора, отбора по академическим требованиям или ограничений по количеству мест,
      где эксперты, ученые, деятели культуры и бизнеса делятся своими знаниями, опытом и мнениями по актуальным темам
    </p>
    <div class="mb-10">

      <UIRadio
          v-model="selected_tag"
          :options="options.concat(ttt)"/>

    </div>
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-5">
      <CardNews v-for="item in news" :key="item.id" :item="item"/>
    </div>
  </BlockSection>
  <BlockSection>
    <BlockQuote text="Соединяем науку, бизнес и личность, формируем лидеров экономики будущего формируем лидеров будущего формируем лидеров экономики"/>
  </BlockSection>
  <BlockSection>
    <div class="grid grid-cols-12 gap-5 h-auto lg:h-[430px] mb-5">
      <div class="col-span-12 lg:col-span-8">

        <CardBase >
          <div class="h-full flex flex-col items-start justify-between">
            <div class="">
              <div class="flex flex-wrap gap-[7px] mb-[30px]">
                <UIBadge label="Промт-инжиниринг" variant="primary"/>
                <UIBadge label="Пизайн-мышление" variant="primary"/>
                <UIBadge label="Анализ данных" variant="primary"/>
              </div>
              <TypingText26 text="День открытых дверей<br>в Академии бизнеса и<br>психологии" extra_class="mb-5"/>
              <p class="text-sm leading-[140%] mb-5 max-w-[60%]">
                Этот факультет направлен на науку о связи работы мозга и психики человека, изучающая, как структура и функции мозга влияют на высшие психические функции и поведение.
              </p>
            </div>
            <UIButton :primary="false" show_left_icon >Читать</UIButton>
          </div>
          <template #image>
            <div class="absolute right-0 bottom-0">
              <svg width="374" height="357" viewBox="0 0 374 357" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g opacity="0.05">
                  <g filter="url(#filter0_d_406_1432)">
                    <path d="M225.52 10.3604L10 270.743L225.52 531.126L441.04 270.743L225.52 10.3604Z" stroke="#2C2C2C" stroke-width="8" shape-rendering="crispEdges"/>
                  </g>
                  <g filter="url(#filter1_d_406_1432)">
                    <path d="M377.93 10.3604L162.41 270.743L377.93 531.126L593.45 270.743L377.93 10.3604Z" stroke="#2C2C2C" stroke-width="8" shape-rendering="crispEdges"/>
                  </g>
                  <g filter="url(#filter2_d_406_1432)">
                    <path d="M301.723 10.3604L86.2031 270.743L301.723 531.126L517.243 270.743L301.723 10.3604Z" stroke="#2C2C2C" stroke-width="8" shape-rendering="crispEdges"/>
                  </g>
                  <g filter="url(#filter3_d_406_1432)">
                    <path d="M454.125 10.3604L238.605 270.743L454.125 531.126L669.645 270.743L454.125 10.3604Z" stroke="#2C2C2C" stroke-width="8" shape-rendering="crispEdges"/>
                  </g>
                  <path d="M12.6328 272.08H241.294" stroke="#2C2C2C" stroke-width="8"/>
                  <path d="M225.48 9H454.142" stroke="#2C2C2C" stroke-width="8"/>
                </g>
                <defs>
                  <filter id="filter0_d_406_1432" x="0.807617" y="0.0870361" width="449.425" height="541.313" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset/>
                    <feGaussianBlur stdDeviation="2"/>
                    <feComposite in2="hardAlpha" operator="out"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_406_1432"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_406_1432" result="shape"/>
                  </filter>
                  <filter id="filter1_d_406_1432" x="153.218" y="0.0870361" width="449.425" height="541.313" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset/>
                    <feGaussianBlur stdDeviation="2"/>
                    <feComposite in2="hardAlpha" operator="out"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_406_1432"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_406_1432" result="shape"/>
                  </filter>
                  <filter id="filter2_d_406_1432" x="77.0107" y="0.0870361" width="449.425" height="541.313" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset/>
                    <feGaussianBlur stdDeviation="2"/>
                    <feComposite in2="hardAlpha" operator="out"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_406_1432"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_406_1432" result="shape"/>
                  </filter>
                  <filter id="filter3_d_406_1432" x="229.413" y="0.0870361" width="449.425" height="541.313" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset/>
                    <feGaussianBlur stdDeviation="2"/>
                    <feComposite in2="hardAlpha" operator="out"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_406_1432"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_406_1432" result="shape"/>
                  </filter>
                </defs>
              </svg>

            </div>
          </template>
        </CardBase>
      </div>
      <div class="col-span-12 lg:col-span-4">
       <CardSubscribe/>
      </div>
    </div>
    <div class="grid  grid-cols-1 lg:grid-cols-3 gap-5">
<!--      <CardNews v-for="i in 3"/>-->
    </div>
  </BlockSection>
</template>

<style scoped>

</style>