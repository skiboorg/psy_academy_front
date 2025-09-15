<script setup lang="ts">
defineProps(['item'])
</script>

<template>
<div class="grid grid-cols-1 lg:grid-cols-2 gap-5 w-full">
  <div class="order-0 lg:order-1 grid grid-cols-12 bg-white rounded-[5px] p-[30px] ">
    <div class="col-span-2 lg:col-span-1">
      <svg width="37" height="31" viewBox="0 0 37 31" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M19.8017 0L10.0192 15.5L19.8017 31H9.86141L0 15.5L9.86141 0H19.8017ZM37 0L27.2175 15.5L37 31H27.0597L17.1983 15.5L27.0597 0H37Z" fill="#B71D31"/>
      </svg>

    </div>
    <div class="col-span-8 lg:col-span-10">
      <p class="text-[18px] lg:text-[26px] leading-[140%]">{{item.text}}</p>
    </div>
    <div class="col-span-2 lg:col-span-1 content-end justify-self-end">
      <svg width="37" height="31" viewBox="0 0 37 31" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M17.1983 31L26.9808 15.5L17.1983 -1.73112e-06L27.1386 -8.62112e-07L37 15.5L27.1386 31L17.1983 31ZM0 31L9.78252 15.5L2.71011e-06 -3.23464e-06L9.9403 -2.36563e-06L19.8017 15.5L9.9403 31L0 31Z" fill="#B71D31"/>
      </svg>

    </div>
    <div class="col-start-2 col-end-10  pt-[70px]">
      <p class="text-primary text-lg font-semibold mb-2 ">{{item.author}}</p>
      <p class="text-sm text-#727272">{{item.text1}}</p>
    </div>
  </div>
  <div class="">
    <img class="order-1 lg:order-0 w-full h-full object-cover" :src="item.image" alt="">
  </div>
</div>
</template>

<style scoped>

</style>