<script setup lang="ts">
definePageMeta({
  layout: 'default',
})
const selected = ref<String | number | null>(null)
const selected1 = ref('yes')
const selected2 = ref()
const agreed = ref(false)

const options = [
  { label: 'Москва', value: 'msk' },
  { label: 'Санкт-Петербург', value: 'spb' },
  { label: 'Новосибирск', value: 'nsk' }
]
</script>

<template>
  <UISelect v-model="selected" :options="options" />
  <UISelect v-model="selected" variant="primary" :options="options" />
  <UIRadio
      v-model="selected1"
      :options="[
    { label: 'Только бесплатные', value: 'yes' },
    { label: 'Нет', value: 'no' },

  ]"/>
  <UIRadio
      v-model="selected2"
      :options="[

    { label: 'Нет1', value: 'no1' },
    { label: 'Нет2', value: 'no2' },
  ]"
  multiple
  />
  <p>Выбрано: {{ selected }}</p>
  <p>Выбрано1: {{ selected1 }}</p>
  <p>Выбрано2: {{ selected2 }}</p>
  <div class="w-[50%]">
    <UICheckbox v-model="agreed" label="Нажимая кнопку «Подписаться на рассылку» я подтверждаю, что ознакомился с Политикой конфиденциальности и Правилами обработки персональных данных" />

  </div>
 <p class="mt-2">Статус: {{ agreed }}</p>
</template>
