<script setup lang="ts">
import { computed } from 'vue'

interface Crumb {
  label: string
  href?: string

}

const props = defineProps<{
  items: Crumb[],
  not_use_container?: boolean
}>()

// Всегда добавляем "Главная" в начало
const crumbs = computed(() => [
  { label: 'Главная', href: '/' },
  ...props.items
])
</script>

<template>
  <div class="mb-[50px]">
    <div :class=" not_use_container ? '' : 'container'">
      <nav class="flex flex-wrap items-center text-[14px]  gap-2">
        <template v-for="(crumb, index) in crumbs" :key="index">
          <!-- Ссылка или текст -->
          <template v-if="crumb.href">
            <nuxt-link :href="crumb.href" :class=" not_use_container ? 'text-white' : 'text-[#727272]'"  >{{ crumb.label }}</nuxt-link>
          </template>
          <template v-else>
            <span :class=" not_use_container ? 'text-white' : 'text-[#727272]'" class="text-[14px] ">{{ crumb.label }}</span>
          </template>
          <!-- Разделитель -->
          <span v-if="index < crumbs.length - 1" class="text-gray-400">-</span>
        </template>
      </nav>
    </div>
  </div>


</template>
