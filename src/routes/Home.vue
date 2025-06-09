<template>
  <div>
    <section
      class="relative bg-cover bg-center min-h-[500px] flex items-center"
      :style="{ backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(/assets/Images/home/HOME-HERO.jpg)' }"
    >
      <div class="container mx-auto px-4 py-16 text-white">
        <div class="max-w-2xl">
          <h1 class="text-4xl md:text-5xl font-bold mb-6">{{ $t('home.hero.title') }}</h1>
          <p class="text-lg md:text-xl mb-8 leading-relaxed">{{ $t('home.hero.subtitle') }}</p>
          <div class="flex flex-wrap gap-4">
            <a
              href="/products"
              class="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium inline-flex items-center transition-colors"
            >
              <i class="fas fa-shopping-cart mr-2"></i>
              {{ $t('home.hero.buyNow') }}
            </a>
            <a
              href="#categories"
              class="bg-white hover:bg-gray-100 text-gray-900 px-6 py-3 rounded-md font-medium inline-flex items-center transition-colors"
            >
              {{ $t('home.hero.viewCategories') }}
              <i class="fas fa-arrow-right ml-2"></i>
            </a>
          </div>
        </div>
      </div>
    </section>

    <section class="py-16 bg-gray-50">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div class="flex items-start">
            <div class="bg-blue-50 text-blue-600 p-4 rounded-full mr-4">
              <i class="fas fa-truck text-xl"></i>
            </div>
            <div>
              <h4 class="font-bold text-lg mb-1">{{ $t('home.features.freeShipping.title') }}</h4>
              <p class="text-gray-600">{{ $t('home.features.freeShipping.description') }}</p>
            </div>
          </div>
          <div class="flex items-start">
            <div class="bg-blue-50 text-blue-600 p-4 rounded-full mr-4">
              <i class="fas fa-headset text-xl"></i>
            </div>
            <div>
              <h4 class="font-bold text-lg mb-1">{{ $t('home.features.support.title') }}</h4>
              <p class="text-gray-600">{{ $t('home.features.support.description') }}</p>
            </div>
          </div>
          <div class="flex items-start">
            <div class="bg-blue-50 text-blue-600 p-4 rounded-full mr-4">
              <i class="fas fa-shield-alt text-xl"></i>
            </div>
            <div>
              <h4 class="font-bold text-lg mb-1">{{ $t('home.features.warranty.title') }}</h4>
              <p class="text-gray-600">{{ $t('home.features.warranty.description') }}</p>
            </div>
          </div>
          <div class="flex items-start">
            <div class="bg-blue-50 text-blue-600 p-4 rounded-full mr-4">
              <i class="fas fa-undo text-xl"></i>
            </div>
            <div>
              <h4 class="font-bold text-lg mb-1">{{ $t('home.features.return.title') }}</h4>
              <p class="text-gray-600">{{ $t('home.features.return.description') }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="categories" class="py-16">
      <div class="container mx-auto px-4">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold mb-4">{{ $t('home.categories.title') }}</h2>
          <p class="text-gray-600 max-w-2xl mx-auto">{{ $t('home.categories.subtitle') }}</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div
            class="overflow-hidden rounded-lg shadow-lg transform transition duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            <div
              class="h-64 bg-cover bg-center relative"
              style="background-image: url('https://www.smart.md/image/cache/data/results-photos/homeyou/perdea-rosie-536x536.webp ');"
            >
              <div class="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-80"></div>
              <div class="absolute bottom-0 left-0 p-6 text-white">
                <h3 class="text-2xl font-bold mb-1">{{ $t('home.categories.blinds') }}</h3>
                <p class="text-sm mb-4">42 {{ $t('home.categories.products') }}</p>
                <a
                  href="#blinds"
                  class="inline-block text-white font-medium hover:text-blue-200 transition-colors"
                >
                  {{ $t('home.categories.viewCollection') }}
                  <i class="fas fa-arrow-right ml-1"></i>
                </a>
              </div>
            </div>
          </div>

          <div
            class="overflow-hidden rounded-lg shadow-lg transform transition duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            <div
              class="h-64 bg-cover bg-center relative"
              style="background-image: url('https://www.smart.md/image/cache/data/results-photos/emag1/res_e55a6bc2b4e5be6b587352f4fb1195e9_1-536x536.webp ');"
            >
              <div class="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-80"></div>
              <div class="absolute bottom-0 left-0 p-6 text-white">
                <h3 class="text-2xl font-bold mb-1">{{ $t('home.categories.curtains') }}</h3>
                <p class="text-sm mb-4">38 {{ $t('home.categories.products') }}</p>
                <a
                  href="#curtains"
                  class="inline-block text-white font-medium hover:text-blue-200 transition-colors"
                >
                  {{ $t('home.categories.viewCollection') }}
                  <i class="fas fa-arrow-right ml-1"></i>
                </a>
              </div>
            </div>
          </div>

          <div
            class="overflow-hidden rounded-lg shadow-lg transform transition duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            <div
              class="h-64 bg-cover bg-center relative"
              style="background-image: url('https://draperii.md/wp-content/uploads/2024/06/img_1167-555x740.jpeg ');"
            >
              <div class="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-80"></div>
              <div class="absolute bottom-0 left-0 p-6 text-white">
                <h3 class="text-2xl font-bold mb-1">{{ $t('home.categories.accessories') }}</h3>
                <p class="text-sm mb-4">25 {{ $t('home.categories.products') }}</p>
                <a
                  href="#accessories"
                  class="inline-block text-white font-medium hover:text-blue-200 transition-colors"
                >
                  {{ $t('home.categories.viewCollection') }}
                  <i class="fas fa-arrow-right ml-1"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="products" class="py-16 bg-gray-50">
      <div class="container mx-auto px-4">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold mb-4">{{ $t('home.products.recommended') }}</h2>
          <p class="text-gray-600 max-w-2xl mx-auto">{{ $t('home.products.subtitle') }}</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div
            class="bg-white rounded-lg overflow-hidden shadow-lg transform transition duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            <div class="relative">
              <span
                class="absolute top-3 left-3 bg-red-500 text-white text-xs px-2 py-1 rounded font-bold"
              >-15%</span>
              <img
                src="https://cdn-v1.harnicuta.ro/images/virtuemart/product/CTFD002-33.jpg"
                alt="Draperie catifea albastră"
                class="w-full h-60 object-cover"
              />
            </div>
            <div class="p-4">
              <h3 class="text-lg font-semibold mb-2">{{ $t('home.products.blueVelvetCurtain') }}</h3>
              <div class="flex items-center">
                <span class="text-blue-600 font-bold text-lg">199.99 RON</span>
                <span class="ml-2 text-gray-500 line-through">234.99 RON</span>
              </div>
            </div>
          </div>

          <div
            class="bg-white rounded-lg overflow-hidden shadow-lg transform transition duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            <div class="relative">
              <img
                src="https://www.smart.md/image/cache/data/results-photos/emag2702/Perdea-Voal-Alb-230-x-400-352x352.jpg "
                alt="Perdea voal alb"
                class="w-full h-60 object-cover"
              />
            </div>
            <div class="p-4">
              <h3 class="text-lg font-semibold mb-2">{{ $t('home.products.whiteSheerCurtain') }}</h3>
              <div class="flex items-center">
                <span class="text-blue-600 font-bold text-lg">149.99 RON</span>
              </div>
            </div>
          </div>

          <div
            class="bg-white rounded-lg overflow-hidden shadow-lg transform transition duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            <div class="relative">
              <span
                class="absolute top-3 left-3 bg-red-500 text-white text-xs px-2 py-1 rounded font-bold"
              >-20%</span>
              <img
                src="https://c.cdnmp.net/727675789/p/l/8/set-draperie-blackout-gri-inchis-casa-deco-logistics-cu-inele-capse~18168.jpg "
                alt="Draperie blackout gri"
                class="w-full h-60 object-cover"
              />
            </div>
            <div class="p-4">
              <h3 class="text-lg font-semibold mb-2">{{ $t('home.products.grayBlackoutCurtain') }}</h3>
              <div class="flex items-center">
                <span class="text-blue-600 font-bold text-lg">249.99 RON</span>
                <span class="ml-2 text-gray-500 line-through">312.99 RON</span>
              </div>
            </div>
          </div>

          <div
            class="bg-white rounded-lg overflow-hidden shadow-lg transform transition duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            <div class="relative">
              <img
                src="https://eperdeledraperii.ro/files/Dolores_LG237XZ_E.jpg "
                alt="Perdea dantelă"
                class="w-full h-60 object-cover"
              />
            </div>
            <div class="p-4">
              <h3 class="text-lg font-semibold mb-2">{{ $t('home.products.laceCurtain') }}</h3>
              <div class="flex items-center">
                <span class="text-blue-600 font-bold text-lg">179.99 RON</span>
              </div>
            </div>
          </div>
        </div>

        <div class="text-center mt-12">
          <a
            href="/products"
            class="inline-flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors"
          >
            {{ $t('home.products.seeMore') }}
            <i class="fas fa-arrow-right ml-1"></i>
          </a>
        </div>
      </div>
    </section>

    <section class="py-16 bg-blue-600">
      <div class="container mx-auto px-4">
        <div class="max-w-3xl mx-auto text-center">
          <h2
            class="text-2xl md:text-3xl font-bold text-white mb-4"
          >{{ $t('home.newsletter.title') }}</h2>
          <p class="text-blue-100 mb-8">{{ $t('home.newsletter.subtitle') }}</p>
          <form @submit.prevent="subscribeToNewsletter" class="flex flex-col md:flex-row gap-4">
            <input
              v-model="email"
              type="email"
              placeholder="Email"
              class="flex-grow px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              required
            />
            <button
              type="submit"
              class="bg-gray-900 hover:bg-gray-800 text-white px-6 py-3 rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-700"
            >{{ $t('home.newsletter.subscribe') }}</button>
          </form>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      email: ''
    }
  },
  methods: {
    subscribeToNewsletter() {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!this.email || !emailRegex.test(this.email)) {
        alert(this.$t('home.newsletter.validationError'));
      } else {
        console.log('Newsletter subscription:', this.email);
        this.email = '';
        alert(this.$t('home.newsletter.successMessage'));
      }
    }
  }
}
</script>