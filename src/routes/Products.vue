<template>
  <main class="flex-grow bg-gray-100">
    <div class="container mx-auto px-4 py-6 md:py-8">
      <h1 class="text-2xl md:text-3xl font-bold text-gray-800 mb-6">{{ $t('productsPage.title') }}</h1>

      <!-- Search bar -->
      <div class="mb-6 flex items-center">
        <input
          v-model="searchQuery"
          type="text"
          class="w-full md:w-1/3 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          :placeholder="$t('productsPage.searchPlaceholder', 'Caută produse...')"
        />
        <button
          @click="searchQuery = ''"
          v-if="searchQuery"
          class="ml-2 px-3 py-2 bg-gray-200 rounded hover:bg-gray-300"
          title="Șterge căutarea"
        >
          <i class="fas fa-times"></i>
        </button>
      </div>

      <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
        <div class="relative">
          <button
            @click="showFilterPanel = !showFilterPanel"
            class="filter-button flex items-center gap-2 bg-white hover:bg-gray-50 border border-gray-300 px-4 py-2 rounded-md font-medium text-gray-700 shadow-sm"
          >
            <i class="fas fa-filter"></i>
            <span>{{ $t('productsPage.filter') }}</span>
            <span v-if="activeFilterCount > 0" class="ml-1 bg-blue-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">{{ activeFilterCount }}</span>
          </button>

          <div
            v-if="showFilterPanel"
            ref="filterPanelRef"
            class="filter-panel absolute z-20 mt-2 w-72 bg-white border border-gray-300 rounded-md shadow-lg p-4"
          >
            <h3 class="text-lg font-semibold mb-3 text-gray-800">{{ $t('productsPage.filterOptions', 'Filter Options') }}</h3>
            <div class="mb-4">
              <h4 class="font-medium text-gray-700 mb-2">{{ $t('productsPage.categories', 'Categories') }}</h4>
              <div v-if="availableCategories.length > 0" class="max-h-48 overflow-y-auto">
                <div v-for="category in availableCategories" :key="category.key" class="flex items-center mb-1">
                  <input
                    type="checkbox"
                    :id="'cat-' + category.key"
                    :value="category.key"
                    v-model="selectedCategories"
                    class="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                  />
                  <label :for="'cat-' + category.key" class="ml-2 text-sm text-gray-600">{{ $t(category.name) }}</label>
                </div>
              </div>
              <div v-else class="text-sm text-gray-500">{{ $t('productsPage.noCategoriesAvailable', 'No categories available.') }}</div>
            </div>
            <div class="flex justify-end gap-2 mt-4 border-t pt-3">
              <button @click="resetFilters" class="px-3 py-1.5 text-sm bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-md transition-colors">
                {{ $t('productsPage.reset', 'Reset') }}
              </button>
              <button @click="applyAndCloseFilters" class="px-3 py-1.5 text-sm bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors">
                {{ $t('productsPage.apply', 'Apply') }}
              </button>
            </div>
          </div>
        </div>

        <div class="view-options flex items-center gap-3">
          <span class="hidden sm:inline text-gray-600 text-sm">{{ $t('productsPage.view') }}</span>
          <div class="view-buttons flex gap-1">
            <button
              @click="activeView = 'grid'"
              :class="['w-9 h-9 flex items-center justify-center rounded-md cursor-pointer text-gray-600 hover:bg-gray-200', activeView === 'grid' ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-white border border-gray-300']">
              <i class="fas fa-th"></i>
            </button>
            <button
              @click="activeView = 'list'"
              :class="['w-9 h-9 flex items-center justify-center rounded-md cursor-pointer text-gray-600 hover:bg-gray-200', activeView === 'list' ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-white border border-gray-300']">
              <i class="fas fa-list"></i>
            </button>
          </div>
        </div>
      </div>

      <div v-if="filteredProducts.length > 0">
        <div v-if="activeView === 'grid'" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 md:gap-6 mb-8">
          <div
            v-for="product in paginatedProducts"
            :key="product.id"
            class="product-card bg-white rounded-lg overflow-hidden shadow-lg transition-transform duration-300 ease-in-out hover:-translate-y-1 hover:shadow-xl flex flex-col group"
          >
            <div @click="openProductModal(product)" class="cursor-pointer">
              <div class="product-image relative h-52 sm:h-56 bg-cover bg-center" :style="{ backgroundImage: `url(${product.image})` }"></div>
              <div class="product-content p-4 flex flex-col justify-between flex-grow">
                <div>
                  <div class="product-category text-xs text-gray-500 mb-1">{{ $t(product.categoryKey) }}</div>
                  <h3 class="product-title text-base font-semibold text-gray-800 mb-2 h-12 overflow-hidden group-hover:text-blue-600 transition-colors">
                    {{ $t(product.titleKey) }}
                  </h3>
                  <div class="product-price text-lg font-bold text-blue-600 mb-3">{{ product.price }} {{ $t('productsPage.ron') }}</div>
                </div>
              </div>
            </div>
             <div class="p-4 pt-0 mt-auto">
                <button
                  @click.stop="handleAddToCart(product)"
                  class="w-full bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded-md transition-colors text-sm flex items-center justify-center"
                  :aria-label="$t('productsPage.addToCartFor', { item: $t(product.titleKey) })"
                >
                  <i class="fas fa-cart-plus mr-2"></i>
                  <span>{{ $t('productsPage.addToCart', 'Add to Cart') }}</span>
                </button>
              </div>
          </div>
        </div>
        <div v-else-if="activeView === 'list'" class="space-y-4 mb-8">
            <div v-for="product in paginatedProducts" :key="product.id + '-list'" class="product-list-item flex bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div @click="openProductModal(product)" class="w-1/3 sm:w-1/4 md:w-1/5 flex-shrink-0 cursor-pointer">
                    <div class="product-image h-full bg-cover bg-center" :style="{ backgroundImage: `url(${product.image})` }"></div>
                </div>
                <div class="p-4 flex flex-col justify-between flex-grow w-2/3 sm:w-3/4 md:w-4/5">
                    <div @click="openProductModal(product)" class="cursor-pointer">
                        <div class="text-xs text-gray-500 mb-1">{{ $t(product.categoryKey) }}</div>
                        <h3 class="text-lg font-semibold text-gray-800 mb-2 hover:text-blue-600 transition-colors">{{ $t(product.titleKey) }}</h3>
                    </div>
                    <div class="flex flex-col sm:flex-row items-start sm:items-center sm:justify-between mt-auto pt-3 border-t border-gray-200 gap-3 sm:gap-2">
                        <div class="product-price text-xl font-bold text-blue-600">{{ product.price }} {{ $t('productsPage.ron') }}</div>
                        <div class="flex gap-2 w-full sm:w-auto">
                            <button
                              @click.stop="handleAddToCart(product)"
                              class="flex-grow sm:flex-grow-0 bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-3 rounded-md transition-colors text-sm flex items-center justify-center"
                              :title="$t('productsPage.addToCart', 'Add to Cart')"
                              :aria-label="$t('productsPage.addToCartFor', { item: $t(product.titleKey) })"
                            >
                              <i class="fas fa-cart-plus mr-1 sm:mr-2"></i>
                              <span class="hidden sm:inline">{{ $t('productsPage.addToCart', 'Add to Cart') }}</span>
                              <span class="sm:hidden">{{ $t('productsPage.add', 'Add') }}</span>
                            </button>
                            <button @click="openProductModal(product)" class="flex-grow sm:flex-grow-0 px-3 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 flex items-center justify-center">
                                {{ $t('productsPage.viewDetails', 'View Details') }}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div v-if="totalPages > 1" class="pagination flex justify-center items-center gap-1 sm:gap-2 mb-8">
          <button @click="changePage(currentPage - 1)" :disabled="currentPage === 1" class="w-9 h-9 flex items-center justify-center rounded-md bg-white text-gray-700 border border-gray-300 hover:bg-gray-100 transition-all disabled:opacity-50 disabled:cursor-not-allowed" :aria-label="$t('productsPage.prev')">
            <i class="fas fa-chevron-left text-sm"></i>
          </button>
          <button v-for="pageNumber in pageNumbers" :key="pageNumber" @click="changePage(pageNumber)" :class="['w-9 h-9 flex items-center justify-center rounded-md border transition-all text-sm', pageNumber === '...' ? 'cursor-default px-1' : 'hover:bg-gray-100', currentPage === pageNumber ? 'bg-blue-600 text-white border-blue-600 font-medium' : 'bg-white text-gray-700 border-gray-300']" :disabled="pageNumber === '...'">
            {{ pageNumber }}
          </button>
          <button @click="changePage(currentPage + 1)" :disabled="currentPage === totalPages" class="w-9 h-9 flex items-center justify-center rounded-md bg-white text-gray-700 border border-gray-300 hover:bg-gray-100 transition-all disabled:opacity-50 disabled:cursor-not-allowed" :aria-label="$t('productsPage.next')">
            <i class="fas fa-chevron-right text-sm"></i>
          </button>
        </div>
      </div>
      <div v-else-if="allProducts.length > 0 && filteredProducts.length === 0" class="text-center py-10 text-gray-500">
        <p>{{ $t('productsPage.noProductsMatchFilters', 'No products match your current filters.') }}</p>
      </div>
      <div v-else-if="allProducts.length === 0" class="text-center py-10 text-gray-500">
        <p>{{ $t('productsPage.noProductsFound') }}</p>
      </div>
    </div>

    <ProductModal
      :product="selectedProductForModal"
      @close="closeProductModal"
      @addToCart="handleAddToCartFromModal"
    />
  </main>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted, watch } from 'vue';
import { useI18n } from 'vue-i18n';
import productsData from '/src/products.json';
import ProductModal from '/src/components/ProductModal.vue';

const { t } = useI18n();

const searchQuery = ref('');
const activeView = ref('grid');
const currentPage = ref(1);
const itemsPerPage = ref(8);
const allProducts = ref(productsData);

const showFilterPanel = ref(false);
const filterPanelRef = ref(null);
const selectedCategories = ref([]);

const LOCAL_STORAGE_CART_KEY = 'vueShopCart';

const selectedProductForModal = ref(null);

const openProductModal = (product) => {
  selectedProductForModal.value = product;
  document.body.style.overflow = 'hidden';
};

const closeProductModal = () => {
  selectedProductForModal.value = null;
  document.body.style.overflow = '';
};

const handleEscKey = (event) => {
  if (event.key === 'Escape' && selectedProductForModal.value) {
    closeProductModal();
  }
};

onMounted(() => {
  handleClickOutsideListener = (event) => {
    const filterButtonElement = document.querySelector('.filter-button');
    if (showFilterPanel.value && filterPanelRef.value && !filterPanelRef.value.contains(event.target) && filterButtonElement && !filterButtonElement.contains(event.target)) {
      applyAndCloseFilters();
    }
  };
  document.addEventListener('mousedown', handleClickOutsideListener);
  document.addEventListener('keydown', handleEscKey);
});

onUnmounted(() => {
  if (handleClickOutsideListener) document.removeEventListener('mousedown', handleClickOutsideListener);
  document.removeEventListener('keydown', handleEscKey);
  document.body.style.overflow = '';
});


const availableCategories = computed(() => {
  if (!allProducts.value) return [];
  const categoriesMap = new Map();
  allProducts.value.forEach(product => {
    if (!categoriesMap.has(product.categoryKey)) {
      categoriesMap.set(product.categoryKey, { key: product.categoryKey, name: product.categoryKey });
    }
  });
  return Array.from(categoriesMap.values()).sort((a,b) => t(a.name).localeCompare(t(b.name)));
});

// Înlocuiește filteredProducts cu filtrare și după search:
const filteredProducts = computed(() => {
  let products = [...allProducts.value];
  if (selectedCategories.value.length > 0) {
    products = products.filter(product => selectedCategories.value.includes(product.categoryKey));
  }
  if (searchQuery.value.trim()) {
    const q = searchQuery.value.trim().toLowerCase();
    products = products.filter(product =>
      t(product.titleKey).toLowerCase().includes(q) ||
      t(product.categoryKey).toLowerCase().includes(q)
    );
  }
  return products;
});

const activeFilterCount = computed(() => {
    let count = 0;
    if (selectedCategories.value.length > 0) count++;
    return count;
});

const totalPages = computed(() => Math.ceil(filteredProducts.value.length / itemsPerPage.value));

const paginatedProducts = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage.value;
  const end = start + itemsPerPage.value;
  return filteredProducts.value.slice(start, end);
});

const scrollToProductList = () => {
    const productListingElement = document.querySelector('.grid, .space-y-4');
    if (productListingElement) {
        window.scrollTo({ top: productListingElement.offsetTop - 100, behavior: 'smooth' });
    } else if (filteredProducts.value.length > 0) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
};

watch([selectedCategories, itemsPerPage], () => {
  if (currentPage.value !== 1) currentPage.value = 1;
  scrollToProductList();
}, { deep: true });

watch(totalPages, (newTotalPages) => {
    let pageChanged = false;
    if (currentPage.value > newTotalPages && newTotalPages > 0) {
        currentPage.value = newTotalPages;
        pageChanged = true;
    } else if (newTotalPages === 1 && currentPage.value !== 1) {
        currentPage.value = 1;
        pageChanged = true;
    } else if (newTotalPages === 0 && currentPage.value !== 1) {
        currentPage.value = 1;
    }
    if (pageChanged) scrollToProductList();
});

const changePage = (page) => {
  if (page >= 1 && page <= totalPages.value && page !== '...') {
    currentPage.value = page;
    scrollToProductList();
  }
};

const pageNumbers = computed(() => {
  const pages = [];
  const maxPagesToShow = 5;
  const halfMax = Math.floor(maxPagesToShow / 2);
  if (totalPages.value <= 1) return [];
  if (totalPages.value <= maxPagesToShow) {
    for (let i = 1; i <= totalPages.value; i++) pages.push(i);
  } else {
    pages.push(1);
    if (currentPage.value > halfMax + 1 && totalPages.value > maxPagesToShow -1) pages.push('...');
    let startPage = Math.max(2, currentPage.value - (halfMax -1));
    let endPage = Math.min(totalPages.value - 1, currentPage.value + (halfMax-1));
    if (currentPage.value <= halfMax +1) {
        startPage = 2; endPage = Math.min(totalPages.value - 1, maxPagesToShow - 2);
    }
    if (currentPage.value >= totalPages.value - halfMax) {
        startPage = Math.max(2, totalPages.value - (maxPagesToShow - 3) ) ; endPage = totalPages.value - 1;
    }
    if (startPage > endPage) { if (currentPage.value < totalPages.value / 2) endPage = startPage; else startPage = endPage; }
    for (let i = startPage; i <= endPage; i++) if (i > 0 && i < totalPages.value) pages.push(i);
    const lastNumericPage = pages[pages.length - 1];
    if (typeof lastNumericPage === 'number' && lastNumericPage < totalPages.value - 1 && totalPages.value > maxPagesToShow -1 ) pages.push('...');
    if (totalPages.value > 1) pages.push(totalPages.value);
  }
  return pages.filter((page, index, self) => page !== '...' || (page === '...' && self[index - 1] !== '...'));
});

const applyAndCloseFilters = () => {
  showFilterPanel.value = false;
};

const resetFilters = () => {
  selectedCategories.value = [];
};

const handleAddToCart = (product) => {
  try {
    let cart = JSON.parse(localStorage.getItem(LOCAL_STORAGE_CART_KEY)) || [];
    const existingItemIndex = cart.findIndex(item => item.id === product.id);

    if (existingItemIndex > -1) {
      cart[existingItemIndex].quantity += 1;
    } else {
      cart.push({
        id: product.id,
        nameKey: product.titleKey,
        image: product.image,
        price: parseFloat(product.price),
        quantity: 1,
      });
    }
    localStorage.setItem(LOCAL_STORAGE_CART_KEY, JSON.stringify(cart));
    alert(`${t(product.titleKey)} ${t('productsPage.addedToCartAlertSuffix', 'added to cart!')}`);
  } catch (error) {
    console.error("Error handling cart in localStorage:", error);
    alert(t('productsPage.cartError', 'Could not add item to cart. Please try again.'));
  }
};

const handleAddToCartFromModal = (product) => {
    handleAddToCart(product);
};

let handleClickOutsideListener = null;

</script>

<style scoped>
.product-image {
  background-repeat: no-repeat;
}
</style>