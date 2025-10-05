<script setup>
import RoundedButton from "~/components/UI/RoundedButton.vue";
definePageMeta({
  layout: 'hero'
})

const {$api} = useNuxtApp()
const {slug} = useRoute().params
const {data:program} = await useHttpRequest( useAsyncData(()=>$api.data.program(slug)))
const visible = useState('callbackModalVisible')
const form_type = useState('callbackModalFormType')
const showCallBackModal = (formtype) => {
  visible.value = true
  form_type.value = {formtype,name:'Программа: ' + program.value.name}
}

</script>

<template>

  <BlockHeader/>
  <BlockSection extra_class="h-auto lg:h-[870px] bg-[url('/slug.png')] bg-cover bg-center relative overflow-hidden pt-[168px]
   pb-[30px] lg:pb-[100px]">
    <div class="h-full flex flex-col items-start justify-between">
      <BlockBreadcrumbs :not_use_container="true" :items="[
  { label: 'Все программы обучения',href:'/education_program', },
  { label: program.name,},
  ]"
      />
      <div>
        <h1 class="text-white text-[32px] lg:text-[40px] font-semibold leading-[105%] mb-5">{{program.name}}</h1>
        <p class="text-white text-lg leading-[120%] lg:max-w-[35%] mb-4 lg:mb-0">{{program.short_description}}</p>
      </div>
      <div class="grid grid-cols-2 lg:grid-cols-12 w-full gap-5 mb-4 lg:mb-0">
        <CardCourseInfoItem class="lg:col-span-2" title="Формат" :text="program.format?.name"/>
        <CardCourseInfoItem class="lg:col-span-2" title="Кол-во часов" :text="program.duration"/>
        <CardCourseInfoItem class="lg:col-span-2" title="Стоимость" :text="program.price"/>
        <CardCourseInfoItem class="lg:col-span-2" title="Дата курса" :text="program.start_date"/>
        <CardCourseInfoItem class="lg:col-span-2" title="Аттестат" text="Да"/>
      </div>
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full lg:w-[30%]">
        <RoundedButton is_hero @click="showCallBackModal('primary')">Подать заявление</RoundedButton>
        <RoundedButton outline is_hero>Задать вопрос</RoundedButton>
      </div>
</div>

  </BlockSection>
  <BlockSection v-if="program.video || program.video_url">
    <div class="grid grid-cols-12 gap-5 h-[430px]">
      <div class="col-span-12 lg:col-span-5">
        <CardBase variant="primary" >
          <UIBadge class="mb-[30px]" label="Нейропсихология"/>
          <TypingText26 text="Посмотрите видео о программе обучения" extra_class="mb-5"/>
          <p class="text-sm leading-[140%] max-w-[80%]">{{program.video_text}}</p>
          <template  #image>
            <div class="absolute right-0 bottom-0" >
              <svg width="424" height="358" viewBox="0 0 424 358" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g opacity="0.05">
                  <g filter="url(#filter0_d_406_2083)">
                    <path d="M628 265.63L319.157 9.99986L10.3146 265.63L319.157 521.26L628 265.63Z" stroke="white" stroke-width="8" shape-rendering="crispEdges"/>
                  </g>
                  <g filter="url(#filter1_d_406_2083)">
                    <path d="M628 446.405L319.157 190.775L10.3146 446.405L319.157 702.035L628 446.405Z" stroke="white" stroke-width="8" shape-rendering="crispEdges"/>
                  </g>
                  <g filter="url(#filter2_d_406_2083)">
                    <path d="M628 356.015L319.157 100.385L10.3146 356.015L319.157 611.645L628 356.015Z" stroke="white" stroke-width="8" shape-rendering="crispEdges"/>
                  </g>
                  <g filter="url(#filter3_d_406_2083)">
                    <path d="M628 536.781L319.157 281.151L10.3146 536.781L319.157 792.411L628 536.781Z" stroke="white" stroke-width="8" shape-rendering="crispEdges"/>
                  </g>
                  <path d="M317.573 13.1227L317.573 284.34" stroke="white" stroke-width="8"/>
                  <path d="M4 265.583L3.99999 536.801" stroke="white" stroke-width="8"/>
                </g>
                <defs>
                  <filter id="filter0_d_406_2083" x="0.0412598" y="0.807373" width="638.232" height="529.645" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset/>
                    <feGaussianBlur stdDeviation="2"/>
                    <feComposite in2="hardAlpha" operator="out"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_406_2083"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_406_2083" result="shape"/>
                  </filter>
                  <filter id="filter1_d_406_2083" x="0.0412598" y="181.582" width="638.232" height="529.645" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset/>
                    <feGaussianBlur stdDeviation="2"/>
                    <feComposite in2="hardAlpha" operator="out"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_406_2083"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_406_2083" result="shape"/>
                  </filter>
                  <filter id="filter2_d_406_2083" x="0.0412598" y="91.1926" width="638.232" height="529.645" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset/>
                    <feGaussianBlur stdDeviation="2"/>
                    <feComposite in2="hardAlpha" operator="out"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_406_2083"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_406_2083" result="shape"/>
                  </filter>
                  <filter id="filter3_d_406_2083" x="0.0412598" y="271.958" width="638.232" height="529.645" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset/>
                    <feGaussianBlur stdDeviation="2"/>
                    <feComposite in2="hardAlpha" operator="out"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_406_2083"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_406_2083" result="shape"/>
                  </filter>
                </defs>
              </svg>

            </div>
          </template>
        </CardBase>
      </div>
      <div class="col-span-12 lg:col-span-7">
        <video
            v-if="program.video"
            class="h-full w-full rounded-[5px] object-cover"
            controls
            poster="~assets/images/video.png"
        >
          <source :src="program.video " type="video/mp4">
        </video>
        <div class="" v-if="program.video_url" v-html="program.video_url"></div>
      </div>
    </div>
  </BlockSection>
  <BlockSection  title_text="О программе">
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-5">
      <CardBase v-for="card in program.about_items" :variant="card.block_type" extra_class="lg:!min-h-[320px]">
        <TypingText26 :text="card.name" extra_class="mb-5"/>
        <div class="text-sm leading-[140%] max-w-[80%]" v-html="card.text"></div>

        <template v-if="card.svg" #image>
          <div class="absolute right-0 bottom-0" v-html="card.svg"></div>
        </template>
      </CardBase>

    </div>

  </BlockSection>
  <BlockQuote class="mb-10 lg:mb-20" v-if="program.quote_text" :text="program.quote_text"/>
  <BlockSection title_text="Программа обучения" link_text="Подробный учебный план программы"
                :file="program.study_plan ? program.study_plan : null">
  <BlockCourseInfoPanel :show_index="true" :items="program.modules"/>
  </BlockSection>
  <BlockSection title_text="Преимущества программы">

    <div class="grid grid-cols-1 lg:grid-cols-3 gap-5">
      <CardBase v-for="item in program.p_features">
        <UIBadge class="mb-7" variant="primary" :label="item.tag"/>
        <p class="text-lg font-semibold mb-5">{{item.name}}</p>
        <p>{{item.text}}</p>
      </CardBase>
    </div>

  </BlockSection>
  <BlockSection title_text="Кому подойдет программа">
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-5">
      <CardBase v-for="item in program.p_for_items">
        <div class="grid grid-cols-2 lg:grid-cols-1">
          <div class="order-1 ld:order-0">
            <p class="text-lg font-semibold mb-5">{{item.name}}</p>
            <p class="mb-8">{{item.text}}</p>
          </div>
          <p class="order-0 lg:order-1 svg" v-html="item.svg"></p>
        </div>


      </CardBase>
    </div>
  </BlockSection>

</template>

<style lang="sass">


</style>