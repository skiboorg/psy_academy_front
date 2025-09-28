<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'

const props = defineProps({
  options: {
    type: Array as () => { label: string; value: string | number }[],
    required: true
  },
  variant: {
    type: String as () => 'default' | 'primary' | 'contrast',
    default: 'default'
  },
  modelValue: {
    type: [String, Number] as () => string | number | null,
    default: null
  },
  placeholder: {
    type: String,
    default: 'Выберите значение'
  }
})

const emit = defineEmits(['update:modelValue'])

const isOpen = ref(false)
const root = ref<HTMLElement | null>(null)

const toggle = () => (isOpen.value = !isOpen.value)
const select = (option: { label: string; value: string | number }) => {
  emit('update:modelValue', option.value)
  isOpen.value = false
}

const variantClasses: Record<string, string> = {
  default: 'bg-white text-black',
  primary: 'bg-[#B71D31] text-white',
  contrast: 'bg-[#F1F1F1] text-[#2C2C2C]'
}

// Закрытие при клике вне
const handleClickOutside = (e: MouseEvent) => {
  if (root.value && !root.value.contains(e.target as Node)) {
    isOpen.value = false
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})
onBeforeUnmount(() => {
  document.removeEventListener('click', handleClickOutside)
})
</script>

<template>
  <div class="relative" ref="root">
    <!-- Заголовок -->
    <div
        class="rounded-[40px] px-4 py-2 flex wrap justify-between items-center cursor-pointer gap-5"
        :class="variantClasses[props.variant]"
        @click="toggle"
    >
      <span class="text-sm truncate max-w-[100%]">
        {{ props.options.find(o => o.value === props.modelValue)?.label || props.placeholder }}
      </span>
      <svg
          class="w-4 h-4 transform transition-transform"
          :class="{ 'rotate-180': isOpen }"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          viewBox="0 0 24 24"
      >
        <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7"/>
      </svg>
    </div>

    <!-- Список -->
    <ul
        v-if="isOpen"
        class="absolute z-10 mt-1 w-full border rounded-lg bg-white shadow-md max-h-60 overflow-auto min-w-[200px]"
    >
      <li
          v-for="option in props.options"
          :key="option.value"
          @click="select(option)"
          class="text-sm px-4 py-2 cursor-pointer hover:bg-gray-100"
          :class="{ 'bg-gray-200': option.value === props.modelValue }"
      >
        {{ option.label }}
      </li>
    </ul>
  </div>
</template>
