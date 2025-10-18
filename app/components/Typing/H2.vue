<script setup lang="ts">
const props = defineProps(['text','extra_class'])
</script>

<template>
<h2 class="font-semibold text-[26px] lg:text-[48px] leading-[100%]" :class="extra_class" v-html="text"></h2>
</template>

<style scoped>

</style>