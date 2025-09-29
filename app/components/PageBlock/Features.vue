<script setup lang="ts">

</script>

<template>
  <BlockSection title_text="Больше, чем академия">
    <div class="grid grid-cols-12 gap-5">
      <div class="order-1 col-span-12 lg:col-span-6">

        <CardBase extra_class="lg:!h-[240px]" variant="dark">
          <TypingText20 text="Свой научный центр" extra_class="mb-3"/>
          <p class=" text-sm leading-[120%] ">
            Каждый студент Академии публикуется в научных изданиях и становится специалистом, который продвигает вперёд и бизнес, и науку.

          </p>
          <template #image>
            <div class="absolute bottom-0 top-0 right-[50px]">
              <svg width="233" height="100%"  viewBox="0 0 233 241" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path opacity="0.1" d="M0.4868 0H232.513C239.214 53.8218 174.507 66.7635 174.507 121C174.507 175.237 239.214 188.178 232.513 242H0.4868C-6.21481 188.178 58.493 175.237 58.493 121C58.493 66.7635 -6.21481 53.8218 0.4868 0Z" fill="black"/>
              </svg>
            </div>
          </template>
        </CardBase>
      </div>
      <div class="order-2 col-span-12 lg:col-span-3">
        <CardBase >
          <TypingText20 text="Синтез науки, бизнеса и личности" extra_class="mb-3"/>
          <p class=" text-sm leading-[120%] ">Наши программы соединяют технологии и менеджмент, формируя
            мета-компетенции студентов, уверенных и в науке, и в бизнесе.</p>
        </CardBase>
      </div>
      <div class="order-3 col-span-12 lg:col-span-3">
        <CardBase variant="dark">
          <TypingText20 text="Образование = результат, а не теория" extra_class="mb-3"/>
          <p class=" text-sm leading-[120%] ">Вы получаете не только диплом — AI-платформа выстраивает персональный
            путь и интегрирует знания в ваш карьерный рост.</p>
          <template #image>
            <div class="absolute w-full bottom-0 top-0 left-0 right-0 z-[-1]">
              <img class="w-full h-full object-cover" src="/images/f2.jpg" alt="">
            </div>
          </template>
        </CardBase>
      </div>
      <div class="order-5 lg:order-4 col-span-12 lg:col-span-3">
        <CardBase variant="dark">
          <TypingText20 text="Консервативность + технологичность" extra_class="mb-3"/>
          <p class=" text-sm leading-[120%] ">Мы соединяем традиции мировых университетов с современными технологиями:
            AI-треками, выбором курсов и практическими проектами.</p>
          <template #image>
            <div class="absolute w-full bottom-0 top-0 left-0 right-0 z-[-1]">
              <img class="w-full h-full object-cover" src="/images/f1.jpg" alt="">
            </div>
          </template>
        </CardBase>
      </div>
      <div class="order-4 lg:order-5 col-span-12 lg:col-span-3">
        <CardBase >
          <TypingText20 text="Ориентация в будущее" extra_class="mb-3"/>
          <p class=" text-sm leading-[120%] ">
            Мы готовим программы будущего: выпускники не догоняют рынок, а становятся лидерами и формируют его повестку.
          </p>
        </CardBase>
      </div>
      <div class="order-6 col-span-12 lg:col-span-6">
        <CardBase extra_class="lg:!h-[210px]" variant="primary">
          <TypingText20 text="Международное сообщество и связи" extra_class="mb-3"/>
          <p class=" text-sm leading-[120%] ">
            Каждый студент получает бессрочный доступ к сообществу предпринимателей, международным проектам и карьерным возможностям.
          </p>
          <template #image>
            <div class="absolute bottom-0 top-0 right-[50px]">
              <svg width="206" height="100%" viewBox="0 0 206 210" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path opacity="0.1" fill-rule="evenodd" clip-rule="evenodd" d="M104.102 110.446C101.276 165.501 55.8546 209.36 0 210V0C55.8546 0.640989 101.276 44.4983 104.102 99.5535C106.89 45.224 151.159 1.79927 206 0.0480335V209.953C151.159 208.201 106.89 164.777 104.102 110.446Z" fill="white"/>
              </svg>
            </div>
          </template>
        </CardBase>
      </div>
    </div>
  </BlockSection>
</template>

<style scoped>

</style>