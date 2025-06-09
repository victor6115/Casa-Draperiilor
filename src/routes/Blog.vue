<template>
  <div class="bg-gray-50">
    <section class="py-8 md:py-10 bg-white border-b border-gray-200">
      <div class="container mx-auto px-4">
        <h1 class="text-3xl md:text-4xl font-semibold text-slate-700">{{ $t('blogPage.title') }}</h1>
      </div>
    </section>

    <section class="py-8 md:py-12">
      <div class="container mx-auto px-4 flex flex-col lg:flex-row gap-8">
        <div class="lg:w-2/3">
          <article
            v-for="post in displayedPosts"
            :key="post.id"
            class="bg-white p-5 md:p-6 rounded-lg shadow-sm mb-6 md:mb-8 flex flex-col sm:flex-row gap-5"
          >
            <div class="sm:w-1/3 lg:w-2/5 flex-shrink-0">
              <img
                :src="post.image"
                :alt="$t(post.titleKey)"
                class="w-full h-48 sm:h-full object-cover rounded-md"
              />
            </div>
            <div class="flex-1 flex flex-col">
              <div class="text-xs text-gray-500 mb-2 flex flex-wrap gap-x-4 gap-y-1">
                <span><i class="fas fa-calendar-alt mr-1.5"></i>{{ $t(post.dateKey) }}</span>
                <span><i class="fas fa-user mr-1.5"></i>{{ $t('blogPage.by') }} {{ $t(post.authorKey) }}</span>
              </div>
              <h2 class="text-xl md:text-2xl font-semibold text-slate-700 mb-2">
                <a href="#" class="hover:text-blue-600 transition-colors">{{ $t(post.titleKey) }}</a>
              </h2>
              <p class="text-sm text-gray-600 mb-4 leading-relaxed flex-grow">
                {{ $t(post.excerptKey) }}
              </p>
              <a 
                @click.prevent="openModal(post)" 
                href="#" 
                class="text-sm font-medium text-blue-600 hover:text-blue-700 inline-flex items-center self-start"
              >
                {{ $t('blogPage.readMore') }}
                <i class="fas fa-arrow-right ml-1.5 text-xs"></i>
              </a>
            </div>
          </article>

          <nav v-if="totalPages > 1" class="mt-8 flex justify-center items-center space-x-1">
            <button
              @click="changePage(currentPage - 1)"
              :disabled="currentPage === 1"
              class="px-3 py-2 rounded-md text-sm font-medium text-gray-600 hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {{ $t('blogPage.pagination.previous') }}
            </button>
            <button
              v-for="pageNumber in totalPages"
              :key="pageNumber"
              @click="changePage(pageNumber)"
              :class="[
                'px-3 py-2 rounded-md text-sm font-medium',
                currentPage === pageNumber
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-600 hover:bg-gray-200',
              ]"
            >
              {{ pageNumber }}
            </button>
            <button
              @click="changePage(currentPage + 1)"
              :disabled="currentPage === totalPages"
              class="px-3 py-2 rounded-md text-sm font-medium text-gray-600 hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {{ $t('blogPage.pagination.next') }}
            </button>
          </nav>
        </div>

        <aside class="lg:w-1/3 space-y-8">
          <div class="bg-white p-5 md:p-6 rounded-lg shadow-sm">
            <h3 class="text-lg font-semibold text-slate-700 mb-4 pb-3 border-b border-gray-200">
              {{ $t('blogPage.sidebar.searchTitle') }}
            </h3>
            <form @submit.prevent="performSearch" class="flex gap-2">
              <input
                type="text"
                v-model="searchQuery"
                :placeholder="$t('blogPage.sidebar.searchPlaceholder')"
                class="flex-1 px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-blue-500 focus:border-blue-500"
              />
              <button
                type="submit"
                class="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
              >
                <i class="fas fa-search sm:hidden"></i>
                <span class="hidden sm:inline">{{ $t('blogPage.sidebar.searchButton') }}</span>
              </button>
            </form>
          </div>

          <div class="bg-white p-5 md:p-6 rounded-lg shadow-sm">
            <h3 class="text-lg font-semibold text-slate-700 mb-4 pb-3 border-b border-gray-200">
              {{ $t('blogPage.sidebar.recentPostsTitle') }}
            </h3>
            <div class="space-y-4">
              <div
                v-for="post in recentPosts"
                :key="'recent-' + post.id"
                class="flex items-center gap-3"
              >
                <img
                  :src="post.image"
                  :alt="$t(post.titleKey)"
                  class="w-16 h-16 object-cover rounded-md flex-shrink-0"
                />
                <div>
                  <h4 class="text-sm font-medium text-slate-700 mb-0.5">
                    <a href="#" class="hover:text-blue-600 transition-colors">{{ $t(post.titleKey) }}</a>
                  </h4>
                  <p class="text-xs text-gray-500">{{ $t(post.dateKey) }}</p>
                </div>
              </div>
            </div>
          </div>
          
        </aside>
      </div>
    </section>

    <!-- Add the modal component -->
    <BlogPostModal 
      :show="selectedPost !== null"
      :post="selectedPost"
      @close="closeModal"
    />
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useI18n } from 'vue-i18n';
import BlogPostModal from '../components/BlogPostModal.vue';

const { t } = useI18n();

const searchQuery = ref('');
const currentPage = ref(1);
const postsPerPage = ref(3);

const allBlogPosts = ref([
  {
    id: 'post1',
    image: 'https://img.wall-street.ro/pr/img/cache-1690879581/articles/0/5/3/5359/image-5359-750x0-00-85.jpg',
    dateKey: 'blogPage.post1.date',
    authorKey: 'blogPage.post1.author',
    titleKey: 'blogPage.post1.title',
    excerptKey: 'blogPage.post1.excerpt',
  },
  {
    id: 'post2',
    image: 'https://jifinteriors.ro/wp-content/uploads/2023/06/coperta-1.jpg',
    dateKey: 'blogPage.post2.date',
    authorKey: 'blogPage.post2.author',
    titleKey: 'blogPage.post2.title',
    excerptKey: 'blogPage.post2.excerpt',
  },
  {
    id: 'post3',
    image: 'https://femininefresh.ru/public/dyrsmallqal.jpg',
    dateKey: 'blogPage.post3.date',
    authorKey: 'blogPage.post3.author',
    titleKey: 'blogPage.post3.title',
    excerptKey: 'blogPage.post3.excerpt',
  },
  {
    id: 'post4',
    image: 'https://somnart.ro/wp-content/uploads/2024/03/draperii-blackout-1024x607.jpg',
    dateKey: 'blogPage.post4.date',
    authorKey: 'blogPage.post4.author',
    titleKey: 'blogPage.post4.title',
    excerptKey: 'blogPage.post4.excerpt',
  },
  {
    id: 'post5',
    image: 'https://www.somfy.ro/common/img/library///1262x600/Perdele_si_draperii.jpg',
    dateKey: 'blogPage.post5.date',
    authorKey: 'blogPage.post5.author',
    titleKey: 'blogPage.post5.title',
    excerptKey: 'blogPage.post5.excerpt',
  },
]);

const recentPosts = computed(() => {
  return allBlogPosts.value.slice(0, 3).map(post => ({
      ...post,
      image: post.recentImage || 'https://www.smart.md/image/cache/data/results-photos/emag1/res_f2e93f5edd5e7b46e65bc17489f3b7e2_1-536x536.webp'
  }));
});

const totalPages = computed(() => {
  return Math.ceil(allBlogPosts.value.length / postsPerPage.value);
});

const displayedPosts = computed(() => {
  const start = (currentPage.value - 1) * postsPerPage.value;
  const end = start + postsPerPage.value;
  return allBlogPosts.value.slice(start, end);
});

const changePage = (page) => {
  if (page >= 1 && page <= totalPages.value) {
    currentPage.value = page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
};

const performSearch = () => {
  console.log('Searching for:', searchQuery.value);
};

const selectedPost = ref(null);

const openModal = (post) => {
  selectedPost.value = post;
};

const closeModal = () => {
  selectedPost.value = null;
};
</script>