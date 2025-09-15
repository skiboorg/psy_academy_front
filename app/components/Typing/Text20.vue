<script setup lang="ts">

const props = defineProps(['text','extra_class'])

</script>

<template>
  <p class="font-semibold text-[20px] leading-[100%]" :class="extra_class" v-html="text"></p>
</template>

<style scoped>

</style>