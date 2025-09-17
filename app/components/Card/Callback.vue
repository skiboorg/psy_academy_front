<script setup lang="ts">
const email = ref()
const agreed = ref(false)
defineProps(['variant'])
</script>

<template>
  <CardBase :variant="variant">

    <TypingText26 text="Узнать подробности или задать вопрос"
                  extra_class="leading-[120%] tracking-[-0.05rem] mb-[30px]"/>
    <div class="space-y-3 mb-[30px]">
      <UIInput v-model="email" placeholder="ФИО"/>
      <UIInput v-model="email" placeholder="Ваш email"/>
      <UIInput v-model="email" placeholder="Ваш вопрос"/>
      <button class="flex items-center justify-between w-full text-[#2c2c2c] text-sm px-4 py-[18px] rounded-[5px] bg-white">
        Подписаться на рассылку
        <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M11.3536 4.35355C11.5488 4.15829 11.5488 3.84171 11.3536 3.64645L8.17157 0.464466C7.97631 0.269204 7.65973 0.269204 7.46447 0.464466C7.2692 0.659728 7.2692 0.976311 7.46447 1.17157L10.2929 4L7.46447 6.82843C7.2692 7.02369 7.2692 7.34027 7.46447 7.53553C7.65973 7.7308 7.97631 7.7308 8.17157 7.53553L11.3536 4.35355ZM0 4V4.5H11V4V3.5H0V4Z" fill="#2C2C2C"/>
        </svg>
      </button>
    </div>
    <div class="">
      <UICheckbox v-model="agreed"
                  contract
                  label="Нажимая кнопку «Подписаться на рассылку» я подтверждаю,
                  что ознакомился с Политикой конфиденциальности и Правилами обработки персональных данных" />


    </div>
    <template #image>
      <div class="absolute bottom-0 right-0 z-[-1]">
        <svg width="372" height="317" viewBox="0 0 372 317" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g opacity="0.05">
            <g filter="url(#filter0_d_498_1767)">
              <path d="M505 214.422L258.025 9.99999L11.0496 214.422L258.025 418.844L505 214.422Z" stroke="white" stroke-width="8" shape-rendering="crispEdges"/>
            </g>
            <g filter="url(#filter1_d_498_1767)">
              <path d="M505 358.984L258.025 154.562L11.0496 358.984L258.025 563.406L505 358.984Z" stroke="white" stroke-width="8" shape-rendering="crispEdges"/>
            </g>
            <g filter="url(#filter2_d_498_1767)">
              <path d="M505 286.701L258.025 82.279L11.0496 286.701L258.025 491.123L505 286.701Z" stroke="white" stroke-width="8" shape-rendering="crispEdges"/>
            </g>
            <g filter="url(#filter3_d_498_1767)">
              <path d="M505 431.256L258.025 226.834L11.0496 431.256L258.025 635.678L505 431.256Z" stroke="white" stroke-width="8" shape-rendering="crispEdges"/>
            </g>
            <path d="M256.758 12.4971L256.758 229.384" stroke="white" stroke-width="8"/>
            <path d="M6 214.385L5.99999 431.272" stroke="white" stroke-width="8"/>
          </g>
          <defs>
            <filter id="filter0_d_498_1767" x="0.775391" y="0.807617" width="514.498" height="427.229" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix"/>
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
              <feOffset/>
              <feGaussianBlur stdDeviation="2"/>
              <feComposite in2="hardAlpha" operator="out"/>
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_498_1767"/>
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_498_1767" result="shape"/>
            </filter>
            <filter id="filter1_d_498_1767" x="0.775391" y="145.37" width="514.498" height="427.229" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix"/>
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
              <feOffset/>
              <feGaussianBlur stdDeviation="2"/>
              <feComposite in2="hardAlpha" operator="out"/>
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_498_1767"/>
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_498_1767" result="shape"/>
            </filter>
            <filter id="filter2_d_498_1767" x="0.775391" y="73.0867" width="514.498" height="427.229" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix"/>
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
              <feOffset/>
              <feGaussianBlur stdDeviation="2"/>
              <feComposite in2="hardAlpha" operator="out"/>
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_498_1767"/>
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_498_1767" result="shape"/>
            </filter>
            <filter id="filter3_d_498_1767" x="0.775391" y="217.641" width="514.498" height="427.229" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix"/>
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
              <feOffset/>
              <feGaussianBlur stdDeviation="2"/>
              <feComposite in2="hardAlpha" operator="out"/>
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_498_1767"/>
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_498_1767" result="shape"/>
            </filter>
          </defs>
        </svg>

      </div>

    </template>
  </CardBase>
</template>

<style scoped>

</style>