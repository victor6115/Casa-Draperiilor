<template>
  <div class="bg-gray-100 min-h-[calc(100vh-var(--header-height,0px)-var(--footer-height,0px))]">
    <main class="container mx-auto px-4 py-8 md:py-12">
      <h1 class="text-2xl md:text-3xl font-bold text-slate-700 mb-8">
        {{ $t('cartPage.pageTitle') }}
      </h1>

      <div v-if="cartItems.length > 0" class="flex flex-col lg:flex-row gap-8">
        <div class="lg:w-2/3">
          <div class="bg-white rounded-lg shadow-md overflow-x-auto">
            <table class="w-full">
              <thead class="bg-gray-50">
                <tr>
                  <th class="p-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">{{ $t('cartPage.table.product') }}</th>
                  <th class="p-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">{{ $t('cartPage.table.quantity') }}</th>
                  <th class="p-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider hidden sm:table-cell">{{ $t('cartPage.table.price') }}</th>
                  <th class="p-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">{{ $t('cartPage.table.total') }}</th>
                  <th class="p-4 text-right text-xs font-semibold text-gray-600 uppercase tracking-wider">{{ $t('cartPage.table.actions') }}</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-200">
                <tr v-for="(item, index) in cartItems" :key="item.id" class="hover:bg-gray-50 transition-colors">
                  <td class="p-4 whitespace-nowrap">
                    <div class="flex items-center gap-3">
                      <img :src="item.image" :alt="$t(item.nameKey)" class="w-20 h-16 object-cover rounded-md flex-shrink-0" />
                      <div>
                        <p class="text-sm font-medium text-slate-700">{{ $t(item.nameKey) }}</p>
                        <p class="text-xs text-gray-500 sm:hidden">{{ item.price.toFixed(2) }} {{ $t('cartPage.currency') }}</p>
                      </div>
                    </div>
                  </td>
                  <td class="p-4 whitespace-nowrap">
                    <div class="flex items-center gap-2">
                      <button @click="updateQuantity(item.id, item.quantity - 1)" class="p-1.5 w-7 h-7 border border-gray-300 rounded-md text-gray-600 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors disabled:opacity-50" :disabled="item.quantity <= 1">
                        <i class="fas fa-minus text-xs"></i>
                      </button>
                      <span class="text-sm font-medium w-6 text-center">{{ item.quantity }}</span>
                      <button @click="updateQuantity(item.id, item.quantity + 1)" class="p-1.5 w-7 h-7 border border-gray-300 rounded-md text-gray-600 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors">
                        <i class="fas fa-plus text-xs"></i>
                      </button>
                    </div>
                  </td>
                  <td class="p-4 whitespace-nowrap text-sm text-gray-700 hidden sm:table-cell">{{ item.price.toFixed(2) }} {{ $t('cartPage.currency') }}</td>
                  <td class="p-4 whitespace-nowrap text-sm font-semibold text-slate-700">{{ (item.price * item.quantity).toFixed(2) }} {{ $t('cartPage.currency') }}</td>
                  <td class="p-4 whitespace-nowrap text-right">
                    <button @click="removeItem(item.id)" class="text-red-500 hover:text-red-700 focus:outline-none">
                      <i class="fas fa-trash-alt text-base"></i>
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div class="mt-6 p-4 bg-white rounded-lg shadow-md flex flex-col sm:flex-row justify-between items-center gap-4">
            <router-link to="/products" class="text-sm font-medium text-blue-600 hover:text-blue-700 inline-flex items-center">
              {{ $t('cartPage.continueShopping') }}
            </router-link>
            <button @click="handleUpdateCart" class="px-4 py-2 bg-gray-200 text-sm font-medium text-gray-700 rounded-md hover:bg-gray-300 inline-flex items-center">
              {{ $t('cartPage.updateCart') }}
            </button>
          </div>
        </div>

        <div class="lg:w-1/3">
          <div class="bg-white p-6 rounded-lg shadow-md sticky top-24">
            <h2 class="text-xl font-semibold text-slate-700 mb-6">{{ $t('cartPage.summary.title') }}</h2>
            <div class="space-y-3 text-sm">
              <div class="flex justify-between">
                <span class="text-gray-600">{{ $t('cartPage.summary.subtotal') }}</span>
                <span class="font-medium text-slate-700">{{ subtotal.toFixed(2) }} {{ $t('cartPage.currency') }}</span>
              </div>
              <div class="flex justify-between">
                <span class="text-gray-600">{{ $t('cartPage.summary.shipping') }}</span>
                <span class="font-medium text-slate-700">{{ shippingCost > 0 ? shippingCost.toFixed(2) + ' ' + $t('cartPage.currency') : $t('cartPage.summary.freeShipping') }}</span>
              </div>
            </div>
            <div class="mt-6 pt-6 border-t border-gray-200 flex justify-between items-center">
              <span class="text-lg font-semibold text-slate-700">{{ $t('cartPage.summary.total') }}</span>
              <span class="text-lg font-bold text-slate-800">{{ total.toFixed(2) }} {{ $t('cartPage.currency') }}</span>
            </div>
            <div class="mt-6">
              <label for="promoCode" class="block text-sm font-medium text-gray-700 mb-1">{{ $t('cartPage.summary.promoCode') }}</label>
              <div class="flex gap-2">
                <input type="text" id="promoCode" v-model="promoCodeInput" :placeholder="$t('cartPage.summary.promoPlaceholder')" class="flex-grow px-3 py-2 border border-gray-300 rounded-md text-sm shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500">
                <button @click="applyPromoCode" class="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                  {{ $t('cartPage.summary.applyButton') }}
                </button>
              </div>
              <p v-if="promoMessage" class="mt-2 text-xs" :class="promoApplied ? 'text-green-600' : 'text-red-600'">{{ promoMessage }}</p>
            </div>
            <button @click="proceedToCheckout" class="mt-8 w-full bg-green-500 text-white py-3 px-4 rounded-md font-semibold hover:bg-green-600 transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50">
              {{ $t('cartPage.summary.checkoutButton') }}
            </button>
            <div class="mt-6 text-center">
              <p class="text-xs text-gray-500 mb-1">{{ $t('cartPage.summary.paymentMethodsTitle') }}</p>
              <div class="flex justify-center items-center gap-2">
                <i class="fab fa-cc-visa text-2xl text-gray-400"></i>
                <i class="fab fa-cc-mastercard text-2xl text-gray-400"></i>
                <i class="fab fa-cc-paypal text-2xl text-gray-400"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
       <div v-else class="text-center py-12">
            <i class="fas fa-shopping-cart text-6xl text-gray-300 mb-6"></i>
            <h2 class="text-2xl font-semibold text-slate-700 mb-3">{{ $t('cartPage.emptyCart.title') }}</h2>
            <p class="text-gray-500 mb-6">{{ $t('cartPage.emptyCart.message') }}</p>
            <router-link to="/products" class="px-6 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition-colors">
                {{ $t('cartPage.emptyCart.browseProducts') }}
            </router-link>
        </div>
    </main>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const LOCAL_STORAGE_CART_KEY = 'vueShopCart';

const cartItems = ref([]);
const promoCodeInput = ref('');
const appliedPromoCode = ref(null);
const promoMessage = ref('');
const promoApplied = ref(false);

onMounted(() => {
  loadCartFromLocalStorage();
});

const loadCartFromLocalStorage = () => {
  try {
    const storedCart = localStorage.getItem(LOCAL_STORAGE_CART_KEY);
    if (storedCart) {
      const parsedCart = JSON.parse(storedCart);
      if (Array.isArray(parsedCart)) {
        cartItems.value = parsedCart.map(item => ({
          ...item,
          price: parseFloat(item.price)
        }));
      } else {
        console.warn("Stored cart data is not an array. Defaulting to empty cart.");
        cartItems.value = [];
        localStorage.removeItem(LOCAL_STORAGE_CART_KEY);
      }
    } else {
      cartItems.value = [];
    }
  } catch (error) {
    console.error("Error loading cart from localStorage:", error);
    cartItems.value = [];
  }
};

const saveCartToLocalStorage = () => {
  try {
    if (Array.isArray(cartItems.value)) {
        localStorage.setItem(LOCAL_STORAGE_CART_KEY, JSON.stringify(cartItems.value));
    }
  } catch (error) {
    console.error("Error saving cart to localStorage:", error);
  }
};

const subtotal = computed(() => {
  if (!Array.isArray(cartItems.value)) return 0;
  return cartItems.value.reduce((sum, item) => sum + (item.price || 0) * (item.quantity || 0), 0);
});

const shippingCost = ref(0);

const discountAmount = computed(() => {
    if (appliedPromoCode.value && subtotal.value > 0) {
        if (appliedPromoCode.value.type === 'percentage') {
            return subtotal.value * appliedPromoCode.value.discount;
        } else if (appliedPromoCode.value.type === 'fixed') {
            return Math.min(subtotal.value, appliedPromoCode.value.discount);
        }
    }
    return 0;
});

const total = computed(() => {
  let currentTotal = subtotal.value + shippingCost.value;
  if (discountAmount.value > 0) {
      currentTotal -= discountAmount.value;
  }
  return Math.max(0, currentTotal);
});

const updateQuantity = (itemId, newQuantity) => {
  const item = cartItems.value.find(i => i.id === itemId);
  if (item && newQuantity >= 1) {
    item.quantity = newQuantity;
    saveCartToLocalStorage();
  }
};

const removeItem = (itemId) => {
  cartItems.value = cartItems.value.filter(i => i.id !== itemId);
  if (subtotal.value === 0 || cartItems.value.length === 0) {
      appliedPromoCode.value = null;
      promoMessage.value = '';
      promoApplied.value = false;
  }
  saveCartToLocalStorage();
};

const handleUpdateCart = () => {
  saveCartToLocalStorage();
  console.log('Cart explicitly updated and saved:', cartItems.value);
  alert(t('cartPage.cartUpdatedMessage', 'Cart has been updated!'));
};

const applyPromoCode = () => {
  const validPromoCodes = {
    'SALE10': { discount: 0.1, type: 'percentage', messageKey: 'cartPage.promo.sale10' },
    'FREE50': { discount: 50, type: 'fixed', messageKey: 'cartPage.promo.free50' }
  };

  const code = promoCodeInput.value.trim().toUpperCase();
  if (validPromoCodes[code]) {
    if (subtotal.value <= 0) {
        appliedPromoCode.value = null;
        promoMessage.value = t('cartPage.promo.emptyCartCannotApply', 'Cannot apply promo code to an empty or zero-value cart.');
        promoApplied.value = false;
        promoCodeInput.value = '';
        return;
    }
    appliedPromoCode.value = validPromoCodes[code];
    promoMessage.value = t(validPromoCodes[code].messageKey);
    promoApplied.value = true;
  } else {
    appliedPromoCode.value = null;
    promoMessage.value = t('cartPage.promo.invalidCode', 'Invalid promo code.');
    promoApplied.value = false;
  }
  promoCodeInput.value = '';
};

const clearCart = () => {
  cartItems.value = [];
  localStorage.removeItem(LOCAL_STORAGE_CART_KEY);
  appliedPromoCode.value = null;
  promoMessage.value = '';
  promoApplied.value = false;
  promoCodeInput.value = '';
  console.log('Cart has been cleared.');
};

const proceedToCheckout = () => {
  if (!cartItems.value || cartItems.value.length === 0) {
    alert(t('cartPage.cannotCheckoutEmptyCart', "Your cart is empty. Please add items before proceeding to checkout."));
    return;
  }

  console.log('Proceeding to checkout with items:', cartItems.value, 'Total:', total.value);

  alert(t('cartPage.checkoutSuccessfulMessage', 'Checkout successful! Your order has been placed.'));

  clearCart();

};

</script>