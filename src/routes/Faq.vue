<template>
  <main class="bg-white py-8 md:py-12">
    <div class="container mx-auto px-4">
      <h1 class="text-2xl md:text-3xl font-bold text-gray-800 mb-8 text-center md:text-left">
        {{ $t('faqPage.title') }}
      </h1>

      <div class="mb-6 md:mb-8 max-w-2xl mx-auto">
        <div class="relative">
          <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <i class="fas fa-search text-gray-400"></i>
          </div>
          <input
            type="text"
            v-model="searchQuery"
            :placeholder="$t('faqPage.searchPlaceholder')"
            class="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-full leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>
      </div>

      <div class="mb-8 md:mb-10 flex flex-wrap justify-center gap-2 md:gap-3">
        <button
          v-for="tab in filterTabs"
          :key="tab.id"
          @click="activeFilter = tab.id"
          :class="[
            'px-4 py-2 rounded-full text-sm font-medium transition-colors duration-150 focus:outline-none',
            activeFilter === tab.id
              ? 'bg-blue-600 text-white shadow-md'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200',
          ]"
        >
          {{ $t(tab.labelKey) }}
        </button>
      </div>

      <div class="max-w-3xl mx-auto">
        <div v-if="filteredFaqs.length > 0">
            <div
            v-for="faq in filteredFaqs"
            :key="faq.id"
            class="border-b border-gray-200 last:border-b-0"
            >
            <button
                @click="toggleFaq(faq.id)"
                class="w-full flex justify-between items-center py-4 px-1 text-left hover:bg-gray-50 focus:outline-none"
            >
                <span class="text-base md:text-lg font-medium text-gray-800">{{ $t(faq.questionKey) }}</span>
                <i
                class="fas fa-chevron-down text-gray-500 transition-transform duration-300 ease-in-out"
                :class="{ 'transform rotate-180': openFaqIds.includes(faq.id) }"
                ></i>
            </button>
            <div
                v-show="openFaqIds.includes(faq.id)"
                class="pb-4 px-1 text-gray-600 text-sm md:text-base leading-relaxed"
                v-html="$t(faq.answerKey)"
            >
            </div>
            </div>
        </div>
        <div v-else class="text-center text-gray-500 py-8">
            <p>{{ $t('faqPage.noResults', { query: searchQuery }) }}</p>
        </div>
      </div>

      <div class="mt-12 md:mt-16 bg-gray-100 p-6 md:p-10 rounded-lg text-center max-w-3xl mx-auto">
        <h2 class="text-xl md:text-2xl font-semibold text-gray-800 mb-3">
          {{ $t('faqPage.ctaTitle') }}
        </h2>
        <p class="text-gray-600 mb-6">
          {{ $t('faqPage.ctaText') }}
        </p>
        <div class="flex flex-col sm:flex-row justify-center items-center gap-4">
          <a
            :href="'tel:' + $t('footer.phone')"
            class="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 rounded-md font-medium bg-white text-blue-600 border border-blue-600 hover:bg-blue-50 transition-colors shadow-sm"
          >
            <i class="fas fa-phone"></i>
            <span>{{ $t('+373 22 123 456') }}</span>
          </a>
          <a
            :href="'mailto:' + $t('footer.email')"
            class="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 rounded-md font-medium bg-blue-600 text-white hover:bg-blue-700 transition-colors shadow-sm"
          >
            <i class="fas fa-envelope"></i>
            <span>{{ $t('contact@casadraperiilor.md') }}</span>
          </a>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const searchQuery = ref('');
const activeFilter = ref('all');
const openFaqIds = ref([]);

const allFaqs = ref([
  { id: 'faq1', category: 'orders', questionKey: 'faqPage.q1', answerKey: 'faqPage.a1' },
  { id: 'faq2', category: 'payment', questionKey: 'faqPage.q2', answerKey: 'faqPage.a2' },
  { id: 'faq3', category: 'delivery', questionKey: 'faqPage.q3', answerKey: 'faqPage.a3' },
  { id: 'faq4', category: 'delivery', questionKey: 'faqPage.q4', answerKey: 'faqPage.a4' },
  { id: 'faq5', category: 'returns', questionKey: 'faqPage.q5', answerKey: 'faqPage.a5' },
  { id: 'faq6', category: 'products', questionKey: 'faqPage.q6', answerKey: 'faqPage.a6' },
  { id: 'faq7', category: 'products', questionKey: 'faqPage.q7', answerKey: 'faqPage.a7' },
  { id: 'faq8', category: 'products', questionKey: 'faqPage.q8', answerKey: 'faqPage.a8' },
  { id: 'faq9', category: 'orders', questionKey: 'faqPage.q9', answerKey: 'faqPage.a9' },
  { id: 'faq10', category: 'orders', questionKey: 'faqPage.q10', answerKey: 'faqPage.a10' },
  { id: 'faq11', category: 'products', questionKey: 'faqPage.q11', answerKey: 'faqPage.a11' },
  { id: 'faq12', category: 'orders', questionKey: 'faqPage.q12', answerKey: 'faqPage.a12' },
]);

const filterTabs = ref([
  { id: 'all', labelKey: 'faqPage.all' },
  { id: 'orders', labelKey: 'faqPage.orders' },
  { id: 'delivery', labelKey: 'faqPage.delivery' },
  { id: 'returns', labelKey: 'faqPage.returns' },
  { id: 'products', labelKey: 'faqPage.products' },
  { id: 'payment', labelKey: 'faqPage.payment' },
]);

const filteredFaqs = computed(() => {
  return allFaqs.value.filter(faq => {
    const matchesCategory = activeFilter.value === 'all' || faq.category === activeFilter.value;
    const matchesSearch =
      t(faq.questionKey).toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      t(faq.answerKey).toLowerCase().includes(searchQuery.value.toLowerCase());
    return matchesCategory && matchesSearch;
  });
});

const toggleFaq = (id) => {
  const index = openFaqIds.value.indexOf(id);
  if (index === -1) {
     openFaqIds.value.push(id);
  } else {
    openFaqIds.value.splice(index, 1);
  }
};

</script>

<style scoped>
</style>