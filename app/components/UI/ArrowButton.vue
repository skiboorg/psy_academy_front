<script setup lang="ts">

const props = defineProps({
  to: { type: String, default: '/' },
  extra_class: { type: String, default: '' },
  isDark: { type: Boolean, default: false },
})
</script>

<template>
  <nuxt-link :to="to"
             :class="[isDark ? 'border-[#2c2c2c]' : 'border-white',extra_class]"
             class="inline-block mt-10 lg:mt-0 px-4 py-2 border  rounded-full hover:bg-white/10 hover:text-black transition">
    <svg v-if="isDark" width="21" height="8" viewBox="0 0 21 8" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M20.3536 4.35355C20.5488 4.15829 20.5488 3.84171 20.3536 3.64645L17.1716 0.464466C16.9763 0.269204 16.6597 0.269204 16.4645 0.464466C16.2692 0.659728 16.2692 0.976311 16.4645 1.17157L19.2929 4L16.4645 6.82843C16.2692 7.02369 16.2692 7.34027 16.4645 7.53553C16.6597 7.7308 16.9763 7.7308 17.1716 7.53553L20.3536 4.35355ZM0 4V4.5H20V4V3.5H0V4Z" fill="#2C2C2C"/>
    </svg>

    <svg v-else width="27" height="8" viewBox="0 0 27 8" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M26.3536 4.35355C26.5488 4.15829 26.5488 3.84171 26.3536 3.64645L23.1716 0.464466C22.9763 0.269204 22.6597 0.269204 22.4645 0.464466C22.2692 0.659728 22.2692 0.976311 22.4645 1.17157L25.2929 4L22.4645 6.82843C22.2692 7.02369 22.2692 7.34027 22.4645 7.53553C22.6597 7.7308 22.9763 7.7308 23.1716 7.53553L26.3536 4.35355ZM0 4V4.5H26V4V3.5H0V4Z" fill="white"/>
    </svg>
  </nuxt-link>
</template>

<style scoped>

</style>