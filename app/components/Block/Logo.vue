<script setup lang="ts">
import { useRoute } from 'vue-router'

const route = useRoute()
const isHero = computed(() => route.meta.layout === 'hero')
</script>

<template>
  <nuxt-link to="/">
    <div v-if="isHero" class="">
      <img src="~assets/images/white.svg" alt="">
    </div>
    <div v-else class="">
      <img src="~assets/images/red.svg" alt="">
    </div>
  </nuxt-link>
</template>
