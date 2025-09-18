<script setup lang="ts">
const props = defineProps({
  primary: { type: Boolean, default: true },
  active: { type: Boolean, default: true },
  small: { type: Boolean, default: false },
  is_hero: { type: Boolean, default: false },
  show_left_icon: { type: Boolean, default: false }
})
const buttonClasses = computed(() => {
  if (props.primary) {
    // primary-режим
    const classes = 'rounded-[60px] py-[12px] px-5 font-semibold'
    return props.active
        ? classes+' text-white bg-primary '
        : classes+' bg-[#F1F1F1] text-[#969696]'
  } else {
    // обычная
    const classes = 'rounded-[60px] py-[10px] px-4 font-medium text-sm'
    return props.active
        ? classes+ ' text-white bg-[#2C2C2C]'
        : 'bg-[#B71D31] text-white border-none'
  }
})

</script>

<template>

<button
    :class="[
      'inline-flex  lg:w-auto rounded-[40px] items-center justify-center gap-2 px-[20px] py-[10px] font-medium transition-colors',
      small?'text-sm':'',
      buttonClasses
    ]"
>
    <span v-if="$slots.default">
      <slot />
    </span>

   <span v-if="$slots.icon" class="flex items-center justify-center" :class="is_hero? 'icon':''">
      <slot name="icon" />
    </span>

  <svg v-if="show_left_icon" width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M11.3536 4.35355C11.5488 4.15829 11.5488 3.84171 11.3536 3.64645L8.17157 0.464466C7.97631 0.269204 7.65973 0.269204 7.46447 0.464466C7.2692 0.659728 7.2692 0.976311 7.46447 1.17157L10.2929 4L7.46447 6.82843C7.2692 7.02369 7.2692 7.34027 7.46447 7.53553C7.65973 7.7308 7.97631 7.7308 8.17157 7.53553L11.3536 4.35355ZM0 4V4.5H11V4V3.5H0V4Z" fill="white"/>
  </svg>



</button>
</template>

<style scoped>

</style>