<script setup lang="ts">
type Visible = { sm: boolean; md: boolean; lg: boolean };
type Card = { title: string; text: string; to: string; visible: Visible };

const cards: Card[] = [
  {
    title: 'Об академии',
    text: 'Академия психологии и бизнеса — пространство, где образование становится двигателем будущего',
    to: '/',
    visible: { sm: true, md: true, lg: true }
  },
  {
    title: 'Стратегические цели - 2030',
    text: 'Стратегические цели Академии психологии и бизнеса, наша миссия и цели',
    to: '/',
    visible: { sm: false, md: true, lg: true }
  },
  {
    title: 'Руководящий состав',
    text: 'Руководящий состав Академии, регалии и опыт работы',
    to: '/',
    visible: { sm: false, md: true, lg: true }
  },
  {
    title: 'Научная деятельность',
    text: 'Совместные проекты с научными центрами России и мира превращают обучение в практику мирового уровня',
    to: '/',
    visible: { sm: false, md: false, lg: true }
  },
  {
    title: 'Медиа',
    text: 'Статьи и новости Академии психологии и бизнеса',
    to: '/',
    visible: { sm: false, md: false, lg: true }
  }
];

function classesFor(card: Card) {
  // базовые стили карточки (flex и т.д.)
  const base = 'flex flex-col items-start justify-between  px-4 first:pl-0  h-full';

  const parts: string[] = [base];

  // если не видим на mobile (по твоей структуре - visible.sm отвечает за mobile)
  if (!card.visible.sm) {
    parts.push('hidden'); // прячем по умолчанию (mobile)
  }

  // md: если true — показываем как flex с md+, иначе явно скрываем с md+
  parts.push(card.visible.md ? 'md:flex' : 'md:hidden');

  // lg: аналогично
  parts.push(card.visible.lg ? 'lg:flex' : 'lg:hidden');

  return parts.join(' ');
}

function isLastVisible(index: number) {
  const w = window.innerWidth;
  const visibleCards = cards.filter((card) => {
    if (w < 768) return card.visible.sm;
    if (w < 1024) return card.visible.md;
    return card.visible.lg;
  });
  return visibleCards[visibleCards.length - 1] === cards[index];
}
</script>

<template>
  <BlockSection extra_class="h-[820px] lg:h-[870px] bg-[url('/images/offer.jpg')] bg-cover bg-center relative overflow-hidden">
    <div class="flex flex-col items-start justify-center h-full">
      <h1 class="text-white text-[32px] lg:text-[55px] font-semibold leading-[105%] lg:max-w-[70%]">
        Соединяем науку, бизнес<br />и личность, формируем лидеров экономики будущего
      </h1>
    </div>

    <template #extra>
      <div class="absolute bottom-0 w-full ">
        <div>
          <div class="filter bg-white/10 border-t border-[#636363] backdrop-blur-md">
            <div class="container h-full">
              <div class="h-full relative z-10 grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-0 text-white">

                <template v-for="(item, index) in cards" :key="index">
                  <div :class="classesFor(item)">

                    <CardOffer
                        :title="item.title"
                        :text="item.text"
                        :to="item.to"
                        :is-last="isLastVisible(index)"
                    />
                  </div>
                </template>
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>
  </BlockSection>
</template>

<style scoped>
/* если нужно — добавляй дополнительные стили */
</style>
