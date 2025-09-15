<script setup lang="ts">
const props = defineProps({
  title: { type: String, default: '' },
  bg: String,
  isGrey: { type: Boolean, default: false },
  paddingY: { type: String, default: 'py-7' },
  paddingX: { type: String, default: 'px-5' },
  height: { type: String, default: 'h-[240px]' },
  textColor: { type: String, default: '' }
})
</script>

<template>
  <div
      class="rounded-[10px] relative"
      :class="[
      paddingY,
      paddingX,
      height,
      isGrey ? 'bg-[#E0E0E0]' : !bg ? 'bg-primary' : '',
      textColor || (isGrey ? 'text-black' : 'text-white')
    ]"
      :style="bg
      ? {
          backgroundColor: '#2C2C2C', // тёмный фон под изображением
          backgroundImage: `url(${bg})`,
          backgroundSize: 'contain',
          backgroundPosition: 'left',
          backgroundRepeat: 'no-repeat',
        }
      : {}"
  >
    <TypingText20 v-if="title" :text="title" />
    <slot name="text_col"/>
    <slot name="text_row"/>
    <slot name="img-r"/>
    <slot name="img-l"/>

  </div>
</template>
