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
  dark: 'bg-[#5D6062] text-white p-[30px]'
}

</script>

<template>
  <div
      class="base-card h-full rounded-[5px]  relative z-10 overflow-hidden"
      :class="[variantClasses[variant],extra_class]"
  >


    <slot/>
    <slot name="image"/>
  </div>
</template>
<style lang="sass">
.base-card
  div
    z-index: -1

</style>