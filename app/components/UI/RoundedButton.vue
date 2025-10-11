<template>
  <button
      :class="[
      'inline-flex rounded-[40px] items-center gap-2 px-[20px] py-[10px] font-medium transition-colors justify-center',
      buttonClasses
    ]"
  >


    <!-- Текст кнопки -->
    <span>
      <slot />
    </span>
    <!-- Иконка слева -->
    <span v-if="$slots.icon" class="flex items-center" :class="is_hero? 'icon':''">
      <slot name="icon" />
    </span>
  </button>
</template>

<script setup>
const props = defineProps({
  outline: { type: Boolean, default: false },
  primary: { type: Boolean, default: false },
  is_hero: { type: Boolean, default: false }
})


const buttonClasses = computed(() => {
  if (props.is_hero) {
    // hero-режим
    return props.outline
        ? ' text-white border border-white'
        : 'bg-white text-[#2C2C2C] border-none'
  } else {
    // обычная
    return props.outline
        ? props.primary ? 'text-primary border border-primary' : ' text-[#2C2C2C] border border-[#DCDCDC]'
        : 'bg-[#B71D31] text-white border-none'
  }

})
</script>

<style lang="sass">
.icon
  svg
    path
      stroke: white !important
      fill: white !important
</style>
