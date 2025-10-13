<script setup lang="ts">
const props = defineProps({
  modelValue: {
    type: String,
    default: ''
  },
  placeholder: {
    type: String,
    default: ''
  },
  type: {
    type: String,
    default: 'text'
  }
})

const emit = defineEmits(['update:modelValue'])
</script>

<template>
  <input
      v-if="props.type !== 'textarea'"
      :type="props.type"
      :value="props.modelValue"
      :placeholder="props.placeholder"

      @input="emit('update:modelValue', ($event.target as HTMLInputElement).value)"
      class="w-full rounded-[5px] text-sm px-4 py-[18px] text-white placeholder-white/70 focus:outline-none"
      style="background-color: #C95665"
  />
  <textarea v-else
            :value="props.modelValue"
            :placeholder="props.placeholder"
            rows="5"
            @input="emit('update:modelValue', ($event.target as HTMLInputElement).value)"
            class="w-full rounded-[5px] text-sm px-4 py-[18px] text-white placeholder-white/70 focus:outline-none"
            style="background-color: #C95665"
  ></textarea>
</template>
