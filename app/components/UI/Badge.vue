<script setup lang="ts">
const props = defineProps({
  label: { type: String, default: '' },
  dot_color: { type: String, default: '#B71D31' },
  with_dot: { type: Boolean, default: false },
  variant: {
    type: String as () => 'default' | 'primary' | 'contrast',
    default: 'default'
  },
  size: {
    type: String as () => 'xs' | 'sm' | 'md',
    default: 'xs'
  }
})

const variantClasses = {
  default: 'bg-[#F1F1F1] text-gray-800',
  primary: 'bg-primary text-white',
  contrast: 'bg-white text-[#2c2c2c]'
}

const sizeClasses = {
  xs: 'text-xs px-[10px] py-[6px]',
  sm: 'text-sm px-3 py-1.5',
  md: 'text-base px-4 py-2'
}
</script>

<template>
  <span
      class="rounded-[60px] font-medium inline-flex items-center gap-2"
      :class="[variantClasses[variant], sizeClasses[size]]"
  >
    <svg v-if="with_dot" width="8" height="9" viewBox="0 0 8 9" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="4" cy="4.5" r="4" :fill="dot_color"/>
</svg>

    {{ label }}
  </span>
</template>
