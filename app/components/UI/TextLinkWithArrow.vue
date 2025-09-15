<script setup lang="ts">
const props = defineProps({
  to: { type: String, default: '/' },
  text: { ype: String, default: '' },
})
</script>

<template>
  <nuxt-link class="flex gap-2" :to="to">
    <p>{{text}}</p>
    <svg width="36" height="20" viewBox="0 0 36 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="36" height="20" rx="10" fill="#B71D31"/>
      <path d="M26.3536 10.3536C26.5488 10.1583 26.5488 9.84171 26.3536 9.64645L23.1716 6.46447C22.9763 6.2692 22.6597 6.2692 22.4645 6.46447C22.2692 6.65973 22.2692 6.97631 22.4645 7.17157L25.2929 10L22.4645 12.8284C22.2692 13.0237 22.2692 13.3403 22.4645 13.5355C22.6597 13.7308 22.9763 13.7308 23.1716 13.5355L26.3536 10.3536ZM10 10V10.5H26V10V9.5H10V10Z" fill="white"/>
    </svg>
  </nuxt-link>

</template>

<style scoped>

</style>