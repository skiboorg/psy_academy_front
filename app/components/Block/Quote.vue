<script setup lang="ts">
defineProps(['text','show_marks','show_arrows'])
</script>

<template>

<div class="grid grid-cols-12">
  <div class="col-span-12 ">
    <div class="flex gap-5 items-start">
      <div v-if="show_marks" class="">
        <svg width="37" height="31" viewBox="0 0 37 31" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M19.8017 0L10.0192 15.5L19.8017 31H9.86141L0 15.5L9.86141 0H19.8017ZM37 0L27.2175 15.5L37 31H27.0597L17.1983 15.5L27.0597 0H37Z" fill="#B71D31"/>
        </svg>
      </div>
      <div v-if="show_arrows" class="">
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="50" viewBox="0 0 40 50" fill="none">
          <g clip-path="url(#clip0_109_86)">
            <rect x="2.5" y="12.5" width="35" height="35" stroke="#B71D31" stroke-width="5"/>
            <path d="M23 13L35.7574 25.7574C38.1005 28.1005 38.1005 31.8995 35.7574 34.2426L23 47" stroke="#B71D31" stroke-width="5" stroke-linecap="round"/>
            <path d="M10 13L25.6907 27.819C26.9442 29.0028 26.9442 30.9972 25.6907 32.181L10 47" stroke="#B71D31" stroke-width="5" stroke-linecap="round"/>
          </g>
          <defs>
            <clipPath id="clip0_109_86">
              <rect width="40" height="50" fill="white"/>
            </clipPath>
          </defs>
        </svg>


      </div>
      <div class="">
        <p class="text-[22px] lg:text-[48px] font-semibold leading-[105%] tracking-[-0.06rem]" v-html="text"></p>
      </div>
      <div  v-if="show_marks" class="content-end">
        <svg width="37" height="31" viewBox="0 0 37 31" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.1983 31L26.9808 15.5L17.1983 -1.73112e-06L27.1386 -8.62112e-07L37 15.5L27.1386 31L17.1983 31ZM0 31L9.78252 15.5L2.71011e-06 -3.23464e-06L9.9403 -2.36563e-06L19.8017 15.5L9.9403 31L0 31Z" fill="#B71D31"/>
        </svg>

      </div>

    </div>
  </div>
</div>

</template>

<style scoped>

</style>