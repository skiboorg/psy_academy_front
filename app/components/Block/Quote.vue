<script setup lang="ts">
defineProps(['text','show_marks','show_arrows'])
</script>

<template>
  <div class="container">
<div class="grid grid-cols-12">
  <div class="col-span-12 lg:col-start-3 lg:col-end-13">
    <div class="flex gap-5 ">
      <div v-if="show_marks" class="">
        <svg width="37" height="31" viewBox="0 0 37 31" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M19.8017 0L10.0192 15.5L19.8017 31H9.86141L0 15.5L9.86141 0H19.8017ZM37 0L27.2175 15.5L37 31H27.0597L17.1983 15.5L27.0597 0H37Z" fill="#B71D31"/>
        </svg>
      </div>
      <div v-if="show_arrows" class="">
        <svg width="76" height="50" viewBox="0 0 76 50" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M25.3333 25L0 -3.05176e-05V50L25.3333 25Z" fill="#B71D31"/>
          <path d="M48.5303 25L26.833 46.4121V3.58688L48.5303 25Z" stroke="#B71D31" stroke-width="3"/>
          <path d="M73.8643 25L52.167 46.4121V3.58688L73.8643 25Z" stroke="#B71D31" stroke-width="3"/>
        </svg>

      </div>
      <div class="">
        <p class="text-[22px] lg:text-[40px] font-semibold leading-[110%] tracking-[-0.06rem]" v-html="text"></p>
      </div>
      <div  v-if="show_marks" class="content-end">
        <svg width="37" height="31" viewBox="0 0 37 31" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.1983 31L26.9808 15.5L17.1983 -1.73112e-06L27.1386 -8.62112e-07L37 15.5L27.1386 31L17.1983 31ZM0 31L9.78252 15.5L2.71011e-06 -3.23464e-06L9.9403 -2.36563e-06L19.8017 15.5L9.9403 31L0 31Z" fill="#B71D31"/>
        </svg>

      </div>

    </div>
  </div>
</div>
  </div>
</template>

<style scoped>

</style>