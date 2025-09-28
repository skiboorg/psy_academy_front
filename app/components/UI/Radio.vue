<script setup lang="ts">
import { isRef } from 'vue'

const props = defineProps({
  options: {
    type: Array as () => { label: string; value: string | number }[],
    required: true
  },
  modelValue: {
    type: [String, Number, Array] as () => string | number | (string | number)[],
    required: true
  },
  multiple: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['update:modelValue'])

const select = (value: string | number) => {
  if (props.multiple) {
    const arr = Array.isArray(props.modelValue) ? [...props.modelValue] : []
    const index = arr.indexOf(value)
    if (index >= 0) {
      arr.splice(index, 1) // убрать если выбран
    } else {
      arr.push(value) // добавить
    }
    emit('update:modelValue', arr)
  } else {
    emit('update:modelValue', value)
  }
}

const isSelected = (value: string | number) => {
  return props.multiple
      ? Array.isArray(props.modelValue) && props.modelValue.includes(value)
      : props.modelValue === value
}
</script>

<template>
  <div class="flex  gap-3 ">
    <button
        v-for="option in props.options"
        :key="option.value"
        type="button"
        class="px-4 py-2 text-sm font-medium transition rounded-[40px] truncate max-w-[100%]"
        :class="[
        isSelected(option.value)
          ? 'bg-[#B71D31] text-white'
          : 'bg-white text-black'
      ]"
        @click="select(option.value)"
    >
      {{ option.label }}
    </button>
  </div>
</template>
