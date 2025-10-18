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
    <div class="grid grid-cols-1 lg:grid-cols-4 gap-5">
      <CardBase extra_class="lg:!h-[140px]" variant="primary">
        <div class="flex flex-col items-start justify-end h-full !z-10">
          <div class="flex items-end justify-between w-full !z-10">
            <TypingText20 text="Миссия<br> и ценности" />
            <UIArrowButton to="/"/>
          </div>

        </div>
        <template #image>
          <div class="absolute bottom-0  right-0 !z-[-100]">
            <svg width="325" height="141" viewBox="0 0 325 141" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g opacity="0.2">
                <path d="M666.918 245.106L298.459 -60L-70.0003 245.106L298.459 550.212L666.918 245.106Z" stroke="white" stroke-width="8"/>
                <path d="M687.906 271.536L319.447 -33.5703L-49.012 271.536L319.447 576.642L687.906 271.536Z" stroke="white" stroke-width="8"/>
                <path d="M719 293.301L350.152 -11.8047L-18.6956 293.301L350.152 598.407L719 293.301Z" stroke="white" stroke-width="8"/>
              </g>
            </svg>

          </div>
        </template>
      </CardBase>
      <CardBase >
        <div class="flex flex-col items-start justify-end h-full !z-10">
          <div class="flex items-end justify-between w-full !z-10">
            <TypingText20 text="Стратегические<br>цели - 2030" />
            <UIArrowButton is-dark to="/"/>
          </div>

        </div>

      </CardBase>
      <CardBase  variant="dark">
        <div class="flex flex-col items-start justify-end h-full !z-10">
          <div class="flex items-end justify-between w-full !z-10">
            <TypingText20 text="Руководящий состав" />
            <UIArrowButton to="/management_team"/>
          </div>

        </div>
        <template #image>
          <div class="absolute bottom-0  right-0 !z-[-100]">
            <svg width="307" height="111" viewBox="0 0 307 111" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g opacity="0.2">
                <g filter="url(#filter0_d_872_2787)">
                  <path d="M177.596 11L10 213.483L177.596 415.966L345.192 213.483L177.596 11Z" stroke="white" stroke-width="8" shape-rendering="crispEdges"/>
                </g>
                <g filter="url(#filter1_d_872_2787)">
                  <path d="M296.114 11L128.518 213.483L296.114 415.966L463.71 213.483L296.114 11Z" stroke="white" stroke-width="8" shape-rendering="crispEdges"/>
                </g>
                <g filter="url(#filter2_d_872_2787)">
                  <path d="M236.854 11L69.2578 213.483L236.854 415.966L404.45 213.483L236.854 11Z" stroke="white" stroke-width="8" shape-rendering="crispEdges"/>
                </g>
                <g filter="url(#filter3_d_872_2787)">
                  <path d="M355.369 11L187.773 213.483L355.369 415.966L522.965 213.483L355.369 11Z" stroke="white" stroke-width="8" shape-rendering="crispEdges"/>
                </g>
              </g>
              <defs>
                <filter id="filter0_d_872_2787" x="0.806641" y="0.726562" width="353.578" height="425.513" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                  <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                  <feOffset/>
                  <feGaussianBlur stdDeviation="2"/>
                  <feComposite in2="hardAlpha" operator="out"/>
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_872_2787"/>
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_872_2787" result="shape"/>
                </filter>
                <filter id="filter1_d_872_2787" x="119.324" y="0.726562" width="353.578" height="425.513" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                  <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                  <feOffset/>
                  <feGaussianBlur stdDeviation="2"/>
                  <feComposite in2="hardAlpha" operator="out"/>
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_872_2787"/>
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_872_2787" result="shape"/>
                </filter>
                <filter id="filter2_d_872_2787" x="60.0645" y="0.726562" width="353.578" height="425.513" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                  <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                  <feOffset/>
                  <feGaussianBlur stdDeviation="2"/>
                  <feComposite in2="hardAlpha" operator="out"/>
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_872_2787"/>
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_872_2787" result="shape"/>
                </filter>
                <filter id="filter3_d_872_2787" x="178.58" y="0.726562" width="353.578" height="425.513" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                  <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                  <feOffset/>
                  <feGaussianBlur stdDeviation="2"/>
                  <feComposite in2="hardAlpha" operator="out"/>
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_872_2787"/>
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_872_2787" result="shape"/>
                </filter>
              </defs>
            </svg>


          </div>
        </template>
      </CardBase>
      <CardBase variant="primary">
        <div class="flex flex-col items-start justify-end h-full !z-10">
          <div class="flex items-end justify-between w-full !z-10">
            <TypingText20 text="Экосистема академии" />
            <UIArrowButton to="/"/>
          </div>

        </div>

      </CardBase>
      <CardBase extra_class="lg:!h-[140px]" variant="dark">
        <div class="flex flex-col items-start justify-end h-full !z-10">
          <div class="flex items-end justify-between w-full !z-10">
            <TypingText20 text="Состав преподавателей" />
            <UIArrowButton to="/management_team"/>
          </div>

        </div>

      </CardBase>
      <CardBase variant="primary">
        <div class="flex flex-col items-start justify-end h-full !z-10">
          <div class="flex items-end justify-between w-full !z-10">
            <TypingText20 text="Сведения об образовательной организации" />
            <UIArrowButton to="/"/>
          </div>

        </div>

      </CardBase>
      <CardBase >
        <div class="flex flex-col items-start justify-end h-full !z-10">
          <div class="flex items-end justify-between w-full !z-10">
            <TypingText20 text="Научная деятельность" />
            <UIArrowButton is-dark to="/"/>
          </div>

        </div>

      </CardBase>
      <CardBase  variant="dark">
        <div class="flex flex-col items-start justify-end h-full !z-10">
          <div class="flex items-end justify-between w-full !z-10">
            <TypingText20 text="Медиа" />
            <UIArrowButton to="/news"/>
          </div>
        </div>
        <template #image>
          <div class="absolute bottom-0  right-0 !z-[-100]">
            <svg width="183" height="141" viewBox="0 0 183 141" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g opacity="0.2">
                <g filter="url(#filter0_d_872_2804)">
                  <path d="M177.596 -131L10 71.4832L177.596 273.966L345.192 71.4832L177.596 -131Z" stroke="white" stroke-width="8" shape-rendering="crispEdges"/>
                </g>
                <g filter="url(#filter1_d_872_2804)">
                  <path d="M296.114 -131L128.518 71.4832L296.114 273.966L463.71 71.4832L296.114 -131Z" stroke="white" stroke-width="8" shape-rendering="crispEdges"/>
                </g>
                <g filter="url(#filter2_d_872_2804)">
                  <path d="M236.854 -131L69.2578 71.4832L236.854 273.966L404.45 71.4832L236.854 -131Z" stroke="white" stroke-width="8" shape-rendering="crispEdges"/>
                </g>
                <g filter="url(#filter3_d_872_2804)">
                  <path d="M355.369 -131L187.773 71.4832L355.369 273.966L522.965 71.4832L355.369 -131Z" stroke="white" stroke-width="8" shape-rendering="crispEdges"/>
                </g>
                <path d="M12.0488 72.5225H189.864" stroke="white" stroke-width="8"/>
              </g>
              <defs>
                <filter id="filter0_d_872_2804" x="0.806641" y="-141.273" width="353.578" height="425.514" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                  <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                  <feOffset/>
                  <feGaussianBlur stdDeviation="2"/>
                  <feComposite in2="hardAlpha" operator="out"/>
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_872_2804"/>
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_872_2804" result="shape"/>
                </filter>
                <filter id="filter1_d_872_2804" x="119.324" y="-141.273" width="353.578" height="425.514" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                  <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                  <feOffset/>
                  <feGaussianBlur stdDeviation="2"/>
                  <feComposite in2="hardAlpha" operator="out"/>
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_872_2804"/>
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_872_2804" result="shape"/>
                </filter>
                <filter id="filter2_d_872_2804" x="60.0645" y="-141.273" width="353.578" height="425.514" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                  <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                  <feOffset/>
                  <feGaussianBlur stdDeviation="2"/>
                  <feComposite in2="hardAlpha" operator="out"/>
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_872_2804"/>
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_872_2804" result="shape"/>
                </filter>
                <filter id="filter3_d_872_2804" x="178.58" y="-141.273" width="353.578" height="425.514" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                  <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                  <feOffset/>
                  <feGaussianBlur stdDeviation="2"/>
                  <feComposite in2="hardAlpha" operator="out"/>
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_872_2804"/>
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_872_2804" result="shape"/>
                </filter>
              </defs>
            </svg>



          </div>
        </template>
      </CardBase>
    </div>
  </BlockSection>
  <BlockSection>
    <div class="grid grid-cols-12 gap-5 h-[430px]">
      <div class="col-span-12 lg:col-span-5">
        <CardBase >
          <TypingText26 text="Миссия и ценности" extra_class="mb-5"/>
          <p class="text-lg leading-[140%] max-w-[80%]">Мы создаем пространство, где образование становится двигателем будущего:
            соединяя науку, бизнес и личностное развитие, мы воспитываем экспертов, транслирующих знания в реальные продукты. В о
            снове — академическая глубина, результативность и технологическая адаптация.</p>
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
  <PageBlockStrategyTarget class="mt-40"/>
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
