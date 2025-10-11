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
  <BlockSection extra_class="!mb-20 h-auto lg:h-[870px] bg-[url('/slug.png')] bg-cover bg-center relative overflow-hidden pt-[168px]
   pb-[30px] lg:pb-[100px]">
    <div class="h-full flex flex-col items-start justify-between">
      <BlockBreadcrumbs :not_use_container="true" :items="[
  { label: 'Все программы обучения',href:'/education_program', },
  { label: program.name,},
  ]"
      />
      <div>
        <h1 class="text-white text-[32px] lg:text-[40px] font-semibold leading-[105%] mb-5">{{program.name}}</h1>

        <p class="text-white text-lg leading-[120%] lg:max-w-[70%] mb-4 lg:mb-0">{{program.short_description}}</p>
      </div>
      <div class="grid grid-cols-2 lg:grid-cols-12 w-full gap-5 mb-4 lg:mb-0">
        <CardCourseInfoItem class="lg:col-span-2" title="Формат" :text="program.format?.name"/>
        <CardCourseInfoItem class="lg:col-span-2" title="Кол-во часов" :text="program.duration"/>
        <CardCourseInfoItem class="lg:col-span-2" title="Стоимость" :text="program.price"/>
        <CardCourseInfoItem class="lg:col-span-2" title="Дата курса" :text="program.start_date"/>
        <CardCourseInfoItem class="lg:col-span-2" :title="program.attestat_title" :text="program.attestat_label"/>
      </div>
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full lg:w-[30%]">
        <RoundedButton is_hero @click="showCallBackModal('primary')">Подать заявление</RoundedButton>
        <RoundedButton outline is_hero>Задать вопрос</RoundedButton>
      </div>
</div>

  </BlockSection>
  <BlockSection extra_class="!mb-10"  v-if="program.video || program.video_url">
    <div class="grid grid-cols-12 gap-5 h-[430px]">
      <div class="col-span-12 lg:col-span-5">
        <CardBase variant="primary" >
<!--          <UIBadge class="mb-[30px]" label="Нейропсихология"/>-->
          <TypingText26 text="О программе обучения" extra_class="mb-5"/>
          <div class="text-sm leading-[140%] max-w-[80%]" v-html="program.video_text"></div>
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
<!--  title_text="О программе"-->
  <BlockSection  >
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
        <div class="flex flex-col items-start justify-between gap-5 lg:gap-8">

            <div class="order-1 ld:order-0">
              <p class="text-lg font-medium leading-[110%] mb-5">{{item.name}}</p>
              <p >{{item.text}}</p>
            </div>
            <img class="order-0 lg:order-1 lg:w-full" :src="item.image"></img>
          </div>




      </CardBase>
    </div>
  </BlockSection>
  <BlockSection :title_text="program.caiere_title || 'Карьера после выпуска'">
    <CardBase extra_class="mb-5">
      <UIBadge class="mb-10" variant="outline" :label="program.caiere_tag"/>
      <TypingText26 extra_class="lg:max-w-[40%]" :text="program.caiere_text"/>
      <template #image>
        <div class="absolute right-[-50%] lg:right-[10%] bottom-0">
          <svg width="517" height="226" viewBox="0 0 517 226" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g opacity="0.05">
              <g filter="url(#filter0_d_789_3818)">
                <path d="M172.524 -69.6602L10.0703 126.61L172.524 322.881L334.978 126.61L172.524 -69.6602Z" stroke="#2C2C2C" stroke-width="8" shape-rendering="crispEdges"/>
              </g>
              <g filter="url(#filter1_d_789_3818)">
                <path d="M287.407 -69.6602L124.953 126.61L287.407 322.881L449.861 126.61L287.407 -69.6602Z" stroke="#2C2C2C" stroke-width="8" shape-rendering="crispEdges"/>
              </g>
              <g filter="url(#filter2_d_789_3818)">
                <path d="M229.964 -69.6602L67.5098 126.61L229.964 322.881L392.417 126.61L229.964 -69.6602Z" stroke="#2C2C2C" stroke-width="8" shape-rendering="crispEdges"/>
              </g>
              <g filter="url(#filter3_d_789_3818)">
                <path d="M344.842 -69.6602L182.389 126.61L344.842 322.881L507.296 126.61L344.842 -69.6602Z" stroke="#2C2C2C" stroke-width="8" shape-rendering="crispEdges"/>
              </g>
              <path d="M12.0547 127.618H184.414" stroke="#2C2C2C" stroke-width="8"/>
              <path d="M335.01 127.618H507.369" stroke="#2C2C2C" stroke-width="8"/>
            </g>
            <defs>
              <filter id="filter0_d_789_3818" x="0.876953" y="-79.9336" width="343.293" height="413.088" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset/>
                <feGaussianBlur stdDeviation="2"/>
                <feComposite in2="hardAlpha" operator="out"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_789_3818"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_789_3818" result="shape"/>
              </filter>
              <filter id="filter1_d_789_3818" x="115.76" y="-79.9336" width="343.293" height="413.088" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset/>
                <feGaussianBlur stdDeviation="2"/>
                <feComposite in2="hardAlpha" operator="out"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_789_3818"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_789_3818" result="shape"/>
              </filter>
              <filter id="filter2_d_789_3818" x="58.3164" y="-79.9336" width="343.293" height="413.088" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset/>
                <feGaussianBlur stdDeviation="2"/>
                <feComposite in2="hardAlpha" operator="out"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_789_3818"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_789_3818" result="shape"/>
              </filter>
              <filter id="filter3_d_789_3818" x="173.195" y="-79.9336" width="343.293" height="413.088" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset/>
                <feGaussianBlur stdDeviation="2"/>
                <feComposite in2="hardAlpha" operator="out"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_789_3818"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_789_3818" result="shape"/>
              </filter>
            </defs>
          </svg>

        </div>
      </template>
    </CardBase>
    <div class="grid grid-cols-1 lg:grid-cols-4 gap-5 items-center mb-10">
      <CardBase :variant="item.block_type" v-for="(item,index) in program.caiere_items">
        <TypingText26 extra_class="mb-14"  :text="`0${index+1}`"/>
        <TypingText18 extra_class="lg:max-w-[70%] mb-5" :text="item.text"/>

      </CardBase>
    </div>

  </BlockSection>
  <BlockHowToApply/>
</template>

<style lang="sass">


</style>