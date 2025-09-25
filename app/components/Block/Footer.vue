<script setup lang="ts">
const visible = useState('callbackModalVisible')
const form_type = useState('callbackModalFormType')
const links = [
  {label:'Главная',to:'/'},
  {label:'Программы',to:'/education_program'},
  {label:'Лекторий',to:'/lecture_hall'},
  {label:'Медиа',to:'/news'},
  {label:'Об академии',to:'/about'},
  {label:'Преподаватели',to:'/management_team'},

]

const showCallBackModal = (formtype) => {
  visible.value = true
  form_type.value = formtype
}
</script>

<template>
  <footer>
    <div class="container">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-5 lg:gap-36  ">
        <div class="bg-primary p-3 flex flex-col items-start justify-between rounded-md h-[150px] lg:h-[300px]">
          <p class="text-white text-xl">Написать нам на почту</p>
          <div class="w-full flex items-center justify-between">
            <a class="text-sm opacity-50 text-white " href="mailto:info@ipb-academy.ru">info@ipb-academy.ru</a>
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M39.4999 19.9999C39.4999 30.7695 30.7695 39.4999 19.9999 39.4999C9.23042 39.4999 0.5 30.7695 0.5 19.9999C0.5 9.23042 9.23042 0.5 19.9999 0.5C30.7695 0.5 39.4999 9.23042 39.4999 19.9999Z" stroke="white"/>
              <path d="M12.667 27.3334L27.3336 12.6667M27.3336 12.6667V27.3334M27.3336 12.6667H12.667" stroke="white" stroke-linecap="square"/>
            </svg>

          </div>

        </div>
        <div class="">
          <p class="text-sm text-[#727272] mb-3 lg:mb-6">КАРТА САЙТА</p>
          <div class="flex flex-col">
            <nuxt-link class="opacity-80 text-sm" :to="link.to" v-for="(link,index) in links" :key="index">{{link.label}}</nuxt-link>
          </div>
        </div>
        <div class="flex flex-col items-start justify-between">
          <div class="flex flex-col items-start mb-3 lg:mb-0">
            <p class="text-sm text-[#727272] mb-3 lg:mb-6">СВЯЗАТЬСЯ С НАМИ</p>
            <a class="text-xl font-semibold"  href="tel:+79932682717">+7 (993) 268 27-17</a>
            <a class="text-xl font-semibold"  href="mailto:info@ipb-academy.ru">info@ipb-academy.ru</a>
          </div>
<!--          <div class="">-->
<!--            <p class="text-sm text-[#727272] mb-3 lg:mb-6">АДРЕС</p>-->
<!--            <p class="text-sm text-[#727272] ">Lorem ipsum dolor.<br>Lorem ipsum dolor.</p>-->
<!--          </div>-->
        </div>
<!--        <div class="flex flex-col items-start justify-between gap-2 lg:gap-0 w-full">-->
<!--          <div class="">-->
<!--            <p class="text-sm text-[#727272] mb-3 lg:mb-6">ВРЕМЯ РАБОТЫ</p>-->
<!--            <p class="text-xl font-semibold" >с 10:00 - до 19:00</p>-->
<!--          </div>-->
<!--          <UIButton @click="showCallBackModal('primary')">Связаться с нами</UIButton>-->
<!--        </div>-->
      </div>
      <div class="flex flex-col lg:flex-row lg:items-center border-b gap-0 lg:gap-10 py-6 ">

        <p class="text-[#727272]">Политика конфиденциальности</p>
        <p  class="text-[#727272]">Публичная оферта</p>
      </div>
      <div class="flex items-center justify-between py-6 flex-wrap">

        <p class="text-[#727272]">© 2010 - 2025 Lorem ipsum dolor.</p>
        <p  class="text-[#727272]"><a href="https://www.instagram.com/vkryaz/" target="_blank">Разработка сайта</a></p>
      </div>

    </div>
  </footer>
</template>

<style scoped>

</style>