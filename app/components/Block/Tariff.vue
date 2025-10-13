<script setup lang="ts">
defineProps(['item'])
const visible = useState('callbackModalVisible')
const form_type = useState('callbackModalFormType')

const route = useRoute()
const showCallBackModal = (formtype) => {
  visible.value = true
  form_type.value = {formtype,name:'Блок тариф. Страница: ' + route.fullPath}
}
</script>

<template>
  <div class="grid grid-cols-12 gap-5">
    <div class="col-span-12 lg:col-span-8">
      <CardBase>
        <div class="flex flex-col items-start justify-between h-full">
          <div class="">
            <div class="flex items-center gap-5 border-b pb-[30px] mb-[30px]">
              <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 0H34C34 9.38924 26.389 17 17 17C7.61103 17 0 9.38924 0 0Z" fill="#B71D31"/>
                <path d="M0 34C0 24.6107 7.61103 17 17 17C26.389 17 34 24.6107 34 34H0Z" fill="#B71D31"/>
              </svg>
              <TypingText26 :text="item.name"/>
            </div>
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 border-b pb-[30px] mb-[30px]">
              <div class="space-y-3">
                <div class="grid grid-cols-12 gap-5 items-start" v-for="(i,index) in item.tariff_items">
                  <div class="col-span-1">
                    <p class="text-[10px] text-[#ADADAD]">{{`(0${index+1})`}}</p>
                  </div>
                  <div class="col-span-11"><p>{{i.name}}</p></div>
                </div>
              </div>
              <div class="" v-html="item.description"></div>
            </div>
          </div>

          <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 w-full">
            <p ><span class="text-[36px]">{{item.price}}₽</span><span class="text-[#ADADAD]">{{item.price_text}}</span></p>
            <UIRoundedButton @click="showCallBackModal('question')">Приобрести запись</UIRoundedButton>
          </div>
        </div>

      </CardBase>
    </div>
    <div class="col-span-12 lg:col-span-4">
    <CardCallback variant="primary"/>
    </div>
  </div>
</template>

<style scoped>

</style>