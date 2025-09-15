<script setup lang="ts">

const props = defineProps(['text','extra_class'])

</script>

<template>
  <p class="font-semibold text-[26px] leading-[100%] tracking-[-0.04rem]" :class="extra_class" v-html="text"></p>
</template>

<style scoped>

</style>