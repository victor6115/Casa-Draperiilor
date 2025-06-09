<template>
  <div class="bg-gray-50">
    <main class="container mx-auto px-4 py-8 md:py-12">
      <h1 class="text-2xl md:text-3xl font-bold text-slate-700 mb-8">
        {{ $t('categoriesPage.pageTitle') }}
      </h1>

      <div class="space-y-8 md:space-y-10">
        <div
          v-for="category in mainCategories"
          :key="category.id"
          class="bg-white rounded-lg shadow-md overflow-hidden flex flex-col md:flex-row"
        >
          <div class="md:w-2/5 h-64 md:h-auto">
            <img :src="category.image" :alt="$t(category.nameKey)" class="w-full h-full object-cover" />
          </div>
          <div class="md:w-3/5 p-5 md:p-8 flex flex-col">
            <h2 class="text-xl md:text-2xl font-semibold text-slate-700 mb-3">
              {{ $t(category.nameKey) }}
            </h2>
            <p class="text-sm text-gray-600 mb-4 leading-relaxed">
              {{ $t(category.descriptionKey) }}
            </p>

            <div v-if="category.subcategories && category.subcategories.length" class="mb-5">
              <h3 class="text-sm font-semibold text-gray-700 mb-2">
                {{ $t('categoriesPage.subcategoriesTitle') }}
              </h3>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1">
                <div
                  v-for="subcategory in $t(category.subcategoriesKey, { returnObjects: true })"
                  :key="subcategory.key"
                  class="flex items-center"
                >
                  <i class="fas fa-plus text-blue-500 text-xs mr-2"></i>
                  <a href="/products" class="text-sm text-blue-600 hover:underline">
                    {{ subcategory.name }}
                  </a>
                </div>
              </div>
            </div>

            <a
              href="/products"
              class="mt-auto self-start inline-block bg-blue-600 text-white px-5 py-2.5 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors"
            >
              {{ $t('categoriesPage.viewAllProducts') }}
            </a>
          </div>
        </div>
      </div>

      <section class="mt-12 md:mt-16">
        <h2 class="text-xl md:text-2xl font-bold text-slate-700 mb-6">
          {{ $t('categoriesPage.popularSubcategoriesTitle') }}
        </h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          <div
            v-for="popularSub in popularSubcategories"
            :key="popularSub.id"
            class="relative rounded-lg overflow-hidden shadow-sm group"
          >
            <img
              :src="popularSub.image"
              :alt="$t(popularSub.titleKey)"
              class="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-300"
            />
            <div class="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-30 transition-opacity duration-300"></div>
            <div
              class="absolute top-3 right-3 bg-blue-600 text-white px-2 py-1 rounded-md text-xs font-semibold"
            >
              {{ $t('categoriesPage.productsCount', { count: popularSub.productCount }) }}
            </div>
            <h3
              class="absolute bottom-4 left-4 text-white text-base font-semibold drop-shadow-md"
            >
              {{ $t(popularSub.titleKey) }}
            </h3>
             <a href="/products" class="absolute inset-0" :aria-label="$t(popularSub.titleKey)"></a>
          </div>
        </div>
      </section>

      <section class="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
        <div
          v-for="collection in collections"
          :key="collection.id"
          class="relative rounded-lg overflow-hidden shadow-sm h-60 group"
        >
          <img
            :src="collection.image"
            :alt="$t(collection.titleKey)"
            class="w-full h-full object-cover filter brightness-75 group-hover:brightness-60 transition-all duration-300"
          />
          <div class="absolute inset-0 flex flex-col justify-center items-start p-6 md:p-8">
            <h3 class="text-xl md:text-2xl font-bold text-white mb-2 drop-shadow-lg">
              {{ $t(collection.titleKey) }}
            </h3>
            <p class="text-sm text-gray-100 mb-4 drop-shadow-sm">
              {{ $t(collection.descriptionKey) }}
            </p>
            <a
              href="/products"
              class="inline-block bg-white text-blue-600 px-5 py-2.5 rounded-md text-sm font-medium hover:bg-gray-100 transition-colors"
            >
              {{ $t(collection.buttonTextKey) }}
            </a>
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

const mainCategories = ref([
  {
    id: 'perdele',
    image: 'https://www.smart.md/image/cache/data/results-photos/homeyou/perdea-draperie-higgisio-140x250cm-536x536.webp',
    nameKey: 'categoriesPage.categoryPerdele.name',
    descriptionKey: 'categoriesPage.categoryPerdele.description',
    subcategoriesKey: 'categoriesPage.categoryPerdele.subcategories',
  },
  {
    id: 'draperii',
    image: 'https://www.smart.md/image/cache/data/results-photos/homeyou/draperie-mercier-140x250cm-536x536.webp',
    nameKey: 'categoriesPage.categoryDraperii.name',
    descriptionKey: 'categoriesPage.categoryDraperii.description',
    subcategoriesKey: 'categoriesPage.categoryDraperii.subcategories',
  },
  {
    id: 'accesorii',
    image: 'https://draperii.md/wp-content/uploads/2024/06/img_1167-555x740.jpeg',
    nameKey: 'categoriesPage.categoryAccesorii.name',
    descriptionKey: 'categoriesPage.categoryAccesorii.description',
    subcategoriesKey: 'categoriesPage.categoryAccesorii.subcategories',
  },
  {
    id: 'jaluzele',
    image: 'https://magazin.dekora.md/wp-content/uploads/2022/01/Zi-Noapte-BH-3003-Gri-Natur--scaled-e1641468556308.jpeg',
    nameKey: 'categoriesPage.categoryJaluzele.name',
    descriptionKey: 'categoriesPage.categoryJaluzele.description',
    subcategoriesKey: 'categoriesPage.categoryJaluzele.subcategories',
  },
]);

const popularSubcategories = ref([
  {
    id: 'pop-voile',
    image: 'https://shoptextile.ro/wp-content/uploads/2020/10/perdea-voal-alb.png',
    titleKey: 'categoriesPage.popular.voileCurtains',
    productCount: 5,
  },
  {
    id: 'pop-blackout-drapes',
    image: 'https://trufi.ro/wp-content/uploads/2022/12/draperie-blackout-catifea-beige-maro-deschis.jpg',
    titleKey: 'categoriesPage.popular.blackoutDrapes',
    productCount: 8,
  },
  {
    id: 'pop-metal-rods',
    image: 'https://sndeco.ro/image/cache/catalog/Galerii-Metal/Ahile19-bronz%20antic/Duble/Galerie-Ahile-bronz-antic-consola-dubla-rotunda-perdea-600x600.jpg',
    titleKey: 'categoriesPage.popular.metalRods',
    productCount: 10,
  },
  {
    id: 'pop-velvet-drapes',
    image: 'https://draperii.md/wp-content/uploads/2024/06/catifea-lenta-de-bara.jpg',
    titleKey: 'categoriesPage.popular.velvetDrapes',
    productCount: 6,
  },
  {
    id: 'pop-vertical-blinds',
    image: 'https://www.jaluzelemd.md/upfiles/menu/m/6dc637f7c014a910d26dada66cdc8dfc37761110.jpg',
    titleKey: 'categoriesPage.popular.verticalBlinds',
    productCount: 7,
  },
  {
    id: 'pop-kids-curtains',
    image: 'https://perdelecopii.ro/wp-content/uploads/2019/09/Perdele-Mesi.jpg',
    titleKey: 'categoriesPage.popular.kidsCurtains',
    productCount: 12,
  },
]);

const collections = ref([
  {
    id: 'luxury',
    image: 'https://draperii.md/wp-content/uploads/2024/06/catifea-pe-lenta-simpla-2-1-scaled.jpg',
    titleKey: 'categoriesPage.luxuryCollectionTitle',
    descriptionKey: 'categoriesPage.luxuryCollectionDescription',
    buttonTextKey: 'categoriesPage.discoverCollection',
  },
  {
    id: 'promotions',
    image: 'https://c.cdnmp.net/170830191/p/m/9/perdea-din-voal-alb-made-in-germania-hiko-ana-cu-rejansa~8989.jpg',
    titleKey: 'categoriesPage.promotionsCollectionTitle',
    descriptionKey: 'categoriesPage.promotionsCollectionDescription',
    buttonTextKey: 'categoriesPage.viewDetails',
  },
]);

</script>

<style scoped>
</style>