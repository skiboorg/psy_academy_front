<script setup lang="ts">
const props = defineProps({
  variant: {
    type: String as () => 'default' | 'primary' | 'dark'| 'teacher',
    default: 'default'
  },
  extra_class:{
    type: String,
    default:''
  }
})

const variantClasses = {
  default: 'bg-white p-[30px]',
  primary: 'bg-primary text-white p-[30px]',
  teacher: 'bg-white px-7 py-7 ',
  dark: 'bg-[#2c2c2c] text-white p-[30px]'
}

</script>

<template>
  <div
      class="h-full rounded-[5px]  relative z-10 overflow-hidden"
      :class="[variantClasses[variant],extra_class]"
  >


    <slot/>
    <slot name="image"/>
  </div>
</template>
