<script setup lang="ts">
const props = defineProps(['text','extra_class'])
</script>

<template>
<h1 class="font-semibold text-[40px] leading-[100%]" :class="extra_class" v-html="text"></h1>
</template>

<style scoped>

</style>