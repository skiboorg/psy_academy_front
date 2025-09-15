<script setup lang="ts">
const collapsed = ref(true)
defineProps(['item','index'])
</script>

<template>
  <Panel v-model:collapsed="collapsed" toggleable>
    <template #toggleicon>
      <svg v-if="collapsed" width="40" height="40" viewBox="0 0 40 40" fill="none">
        <circle cx="20" cy="20" r="20" fill="#B71D31"/>
        <path d="M28.7071 20.7071C29.0976 20.3166 29.0976 19.6834 28.7071 19.2929L22.3431 12.9289C21.9526 12.5384 21.3195 12.5384 20.9289 12.9289C20.5384 13.3195 20.5384 13.9526 20.9289 14.3431L26.5858 20L20.9289 25.6569C20.5384 26.0474 20.5384 26.6805 20.9289 27.0711C21.3195 27.4616 21.9526 27.4616 22.3431 27.0711L28.7071 20.7071ZM12 20L12 21L28 21L28 20L28 19L12 19L12 20Z" fill="white"/>
      </svg>
      <svg v-else width="40" height="40" viewBox="0 0 40 40" fill="none">
        <circle cx="20" cy="20" r="20" transform="rotate(90 20 20)" fill="#B71D31"/>
        <path d="M19.2929 28.7071C19.6834 29.0976 20.3166 29.0976 20.7071 28.7071L27.0711 22.3431C27.4616 21.9526 27.4616 21.3195 27.0711 20.9289C26.6805 20.5384 26.0474 20.5384 25.6569 20.9289L20 26.5858L14.3431 20.9289C13.9526 20.5384 13.3195 20.5384 12.9289 20.9289C12.5384 21.3195 12.5384 21.9526 12.9289 22.3431L19.2929 28.7071ZM20 12L19 12L19 28L20 28L21 28L21 12L20 12Z" fill="white"/>
      </svg>
    </template>

    <template #header>
      <div class="flex flex-col gap-5 items-start">
        <UIBadge :label="`Модуль ${index + 1}`"/>
        <p class="text-lg font-semibold">{{item.name}}</p>
      </div>
    </template>
    <div class="m-0" v-html="item.description"></div>
  </Panel>
</template>
