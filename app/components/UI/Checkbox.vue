<script setup lang="ts">
const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false
  },
  contract: {
    type: Boolean,
    default: false
  },
  label: {
    type: String,
    default: ''
  }
})

const emit = defineEmits(['update:modelValue'])

const toggle = () => {
  emit('update:modelValue', !props.modelValue)
}
</script>

<template>
  <label class="grid grid-cols-12 items-start gap-5 cursor-pointer select-none"  >
    <!-- кастомная "коробка" -->
    <span
        class="col-span-1 w-5 h-5 flex items-center justify-center transition"
        style="background-color: #C95665"
        @click.stop="toggle"
    >
      <svg
          v-if="props.modelValue"
          width="11"
          height="11"
          viewBox="0 0 11 11"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M1 5.70588L4.15479 9L10 1" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
      </svg>
    </span>
    <!-- подпись -->
    <span class="col-span-11 text-sm " :class="contract ? 'text-white': 'text-[#2c2c2c]'" @click.stop="toggle">{{ label }}</span>
  </label>
</template>
