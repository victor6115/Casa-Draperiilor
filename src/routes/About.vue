<template>
  <div class="bg-white">
    <main class="container mx-auto px-4 py-8 md:py-12">
      <h1 class="text-3xl md:text-4xl font-bold text-slate-700 mb-8 md:mb-12">
        {{ $t('aboutPage.pageTitle') }}
      </h1>

      <section class="flex flex-col md:flex-row items-center gap-8 md:gap-12 mb-12 md:mb-16">
        <div class="md:w-1/2 order-2 md:order-1">
          <h2 class="text-2xl md:text-3xl font-semibold text-slate-700 mb-4">
            {{ $t('aboutPage.mainSection.title') }}
          </h2>
          <p class="text-gray-600 mb-4 leading-relaxed">{{ $t('aboutPage.mainSection.p1') }}</p>
          <p class="text-gray-600 mb-4 leading-relaxed">{{ $t('aboutPage.mainSection.p2') }}</p>
          <p class="text-gray-600 leading-relaxed">{{ $t('aboutPage.mainSection.p3') }}</p>
        </div>
        <div class="md:w-1/2 order-1 md:order-2">
          <img
            src="https://1001case.ro/upload/articles/118/big-draperii.jpg"
            alt="Interior cu draperii elegante"
            class="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </section>

      <section class="py-12 md:py-16 bg-gray-50 rounded-lg">
        <div class="container mx-auto px-4 text-center">
          <h2 class="text-2xl md:text-3xl font-semibold text-slate-700 mb-10">
            {{ $t('aboutPage.valuesSection.title') }}
          </h2>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <div
              v-for="value in values"
              :key="value.id"
              class="bg-white p-6 rounded-lg shadow-md text-left hover:shadow-xl transition-shadow duration-300"
            >
              <div class="text-4xl mb-4">{{ $t(value.iconKey) }}</div>
              <h3 class="text-xl font-semibold text-slate-700 mb-2">{{ $t(value.titleKey) }}</h3>
              <p class="text-sm text-gray-600 leading-relaxed">{{ $t(value.descriptionKey) }}</p>
            </div>
          </div>
        </div>
      </section>

      <section class="my-12 md:my-16">
        <h2 class="text-2xl md:text-3xl font-semibold text-slate-700 mb-6 text-center md:text-left">
          {{ $t('aboutPage.storySection.title') }}
        </h2>
        <div class="space-y-4 text-gray-600 leading-relaxed">
          <p>{{ $t('aboutPage.storySection.p1') }}</p>
          <p>{{ $t('aboutPage.storySection.p2') }}</p>
          <p>{{ $t('aboutPage.storySection.p3') }}</p>
        </div>
      </section>

      <section class="py-12 md:py-16 bg-gray-50 rounded-lg">
        <div class="container mx-auto px-4 text-center">
          <h2 class="text-2xl md:text-3xl font-semibold text-slate-700 mb-10">
            {{ $t('aboutPage.teamSection.title') }}
          </h2>
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div v-for="member in teamMembers" :key="member.id" class="text-center">
              <img
                :src="member.image"
                :alt="$t(member.nameKey)"
                class="w-32 h-32 md:w-36 md:h-36 rounded-full mx-auto mb-4 object-cover shadow-md"
              />
              <h3 class="text-lg font-medium text-slate-700">{{ $t(member.nameKey) }}</h3>
              <p class="text-sm text-gray-500">{{ $t(member.roleKey) }}</p>
            </div>
          </div>
        </div>
      </section>

      <section class="my-12 md:my-16">
        <h2 class="text-2xl md:text-3xl font-semibold text-slate-700 mb-10 text-center">
          {{ $t('aboutPage.testimonialsSection.title') }}
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          <div
            v-for="testimonial in testimonials"
            :key="testimonial.id"
            class="bg-white p-6 rounded-lg shadow-md border border-gray-200"
          >
            <div class="text-yellow-500 text-lg mb-3">{{ $t(testimonial.starsKey) }}</div>
            <p class="text-gray-600 italic mb-4 text-sm leading-relaxed">"{{ $t(testimonial.textKey) }}"</p>
            <div class="flex items-center">
              <img
                :src="testimonial.authorImage"
                :alt="$t(testimonial.authorNameKey)"
                class="w-10 h-10 rounded-full mr-3 object-cover"
              />
              <div>
                <p class="font-semibold text-sm text-slate-700">{{ $t(testimonial.authorNameKey) }}</p>
                <p class="text-xs text-gray-500">{{ $t(testimonial.authorDetailKey) }}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const values = ref([
  { id: 'quality', iconKey: 'aboutPage.valuesSection.value1.icon', titleKey: 'aboutPage.valuesSection.value1.title', descriptionKey: 'aboutPage.valuesSection.value1.description' },
  { id: 'services', iconKey: 'aboutPage.valuesSection.value2.icon', titleKey: 'aboutPage.valuesSection.value2.title', descriptionKey: 'aboutPage.valuesSection.value2.description' },
  { id: 'innovation', iconKey: 'aboutPage.valuesSection.value3.icon', titleKey: 'aboutPage.valuesSection.value3.title', descriptionKey: 'aboutPage.valuesSection.value3.description' },
]);

const teamMembers = ref([
  { id: 'member1', image: 'https://i.pinimg.com/736x/c7/9a/37/c79a37e13ef14be556b51143bcbb1b01.jpg', nameKey: 'aboutPage.teamSection.member1.name', roleKey: 'aboutPage.teamSection.member1.role' },
  { id: 'member2', image: 'https://i.pinimg.com/736x/a8/0a/cf/a80acf16d26543b5192e88dc6d862e0e.jpg', nameKey: 'aboutPage.teamSection.member2.name', roleKey: 'aboutPage.teamSection.member2.role' },
  { id: 'member3', image: 'https://i.pinimg.com/736x/6b/24/c5/6b24c534715dce4fbf14f8d4d5b5f41d.jpg', nameKey: 'aboutPage.teamSection.member3.name', roleKey: 'aboutPage.teamSection.member3.role' },
  { id: 'member4', image: 'https://i.pinimg.com/736x/7a/1e/4c/7a1e4c890c618df4132d895c1fc45f2a.jpg', nameKey: 'aboutPage.teamSection.member4.name', roleKey: 'aboutPage.teamSection.member4.role' },
]);

const testimonials = ref([
  {
    id: 'testimonial1',
    starsKey: 'aboutPage.testimonialsSection.testimonial1.stars',
    textKey: 'aboutPage.testimonialsSection.testimonial1.text',
    authorImage: 'https://i.pinimg.com/736x/a4/20/e3/a420e3f87bafa4012c001c748f2f422f.jpg',
    authorNameKey: 'aboutPage.testimonialsSection.testimonial1.authorName',
    authorDetailKey: 'aboutPage.testimonialsSection.testimonial1.authorDetail',
  },
  {
    id: 'testimonial2',
    starsKey: 'aboutPage.testimonialsSection.testimonial2.stars',
    textKey: 'aboutPage.testimonialsSection.testimonial2.text',
    authorImage: 'https://i.pinimg.com/736x/6b/d0/ce/6bd0ce454838e36445c39d964f06d10e.jpg',
    authorNameKey: 'aboutPage.testimonialsSection.testimonial2.authorName',
    authorDetailKey: 'aboutPage.testimonialsSection.testimonial2.authorDetail',
  },
  {
    id: 'testimonial3',
    starsKey: 'aboutPage.testimonialsSection.testimonial3.stars',
    textKey: 'aboutPage.testimonialsSection.testimonial3.text',
    authorImage: 'https://i.pinimg.com/736x/26/db/04/26db0470ba55d869fb84ea19afbb3b88.jpg',
    authorNameKey: 'aboutPage.testimonialsSection.testimonial3.authorName',
    authorDetailKey: 'aboutPage.testimonialsSection.testimonial3.authorDetail',
  },
]);

</script>

<style scoped>
</style>