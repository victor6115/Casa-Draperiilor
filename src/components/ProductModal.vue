<template>
  <transition name="modal-fade">
    <div
      v-if="product"
      class="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4"
      @click.self="closeModal"
      role="dialog"
      aria-modal="true"
      :aria-labelledby="'modal-title-' + product.id"
    >
      <div class="bg-white rounded-lg shadow-xl overflow-hidden max-w-2xl w-full transform transition-all" @click.stop>
        <div class="flex justify-between items-center p-4 sm:p-5 border-b border-gray-200">
          <h3 :id="'modal-title-' + product.id" class="text-lg sm:text-xl font-semibold text-gray-800">
            {{ $t(product.titleKey) }}
          </h3>
          <button @click="closeModal" class="text-gray-400 hover:text-gray-600 transition-colors" :aria-label="$t('productsPage.modal.close', 'Close modal')">
            <i class="fas fa-times text-xl"></i>
          </button>
        </div>

        <div class="p-4 sm:p-5 max-h-[calc(80vh-100px)] overflow-y-auto">
          <div class="flex flex-col md:flex-row gap-4 sm:gap-5">
            <div class="md:w-1/2 flex-shrink-0">
              <img :src="product.image" :alt="$t(product.titleKey)" class="w-full h-auto max-h-80 object-contain rounded-md">
            </div>

            <div class="md:w-1/2 flex flex-col">
              <div class="mb-3">
                <span class="text-xs text-gray-500 uppercase">{{ $t('productsPage.categoryLabel', 'Category') }}</span>
                <p class="text-sm text-gray-700">{{ $t(product.categoryKey) }}</p>
              </div>

              <div class="mb-4 flex-grow">
                  <span class="text-xs text-gray-500 uppercase">{{ $t('productsPage.modal.description', 'Description') }}</span>
                  <p v-if="product.descriptionKey" class="text-sm text-gray-600 leading-relaxed">
                      {{ $t(product.descriptionKey, 'No description available.') }}
                  </p>
                  <p v-else class="text-sm text-gray-500 italic">
                      {{ $t('productsPage.modal.noDescription', 'Detailed description not available for this product.') }}
                  </p>
              </div>


              <div class="mt-auto">
                <p class="text-2xl sm:text-3xl font-bold text-blue-600 mb-4">{{ product.price }} {{ $t('productsPage.ron') }}</p>
                <button
                  @click="handleAddToCartInModal"
                  class="w-full bg-green-500 hover:bg-green-600 text-white font-medium py-2.5 px-4 rounded-md transition-colors text-base flex items-center justify-center"
                >
                  <i class="fas fa-cart-plus mr-2"></i>
                  <span>{{ $t('productsPage.addToCart', 'Add to Cart') }}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const props = defineProps({
  product: {
    type: Object,
    default: null
  }
});

const emit = defineEmits(['close', 'addToCart']);

const closeModal = () => {
  emit('close');
};

const handleAddToCartInModal = () => {
  if (props.product) {
    emit('addToCart', props.product);
  }
};
</script>

<style scoped>
.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.3s ease;
}

.modal-fade-enter-from,
.modal-fade-leave-to {
  opacity: 0;
}

.modal-fade-enter-active .transform,
.modal-fade-leave-active .transform {
  transition: transform 0.3s ease;
}

.modal-fade-enter-from .transform {
  transform: scale(0.95) translateY(-20px);
}
.modal-fade-leave-to .transform {
  transform: scale(0.95) translateY(-20px);
}
</style>