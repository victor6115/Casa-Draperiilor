<template>
  <footer class="bg-gray-900 text-white">
    <div class="container mx-auto px-4 py-12">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <div class="mb-6 bg-gray-300 flex items-center justify-center">
            <img src="/assets/Images/LogoCD.png" alt="Casa Draperiilor Logo" />
          </div>
          <p class="text-gray-400 mb-6">{{ $t('footer.description') }}</p>
          <div class="flex space-x-4">
            <a
              href="#"
              class="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-blue-600 transition-colors"
            >
              <i class="fab fa-facebook-f"></i>
            </a>
            <a
              href="#"
              class="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-blue-600 transition-colors"
            >
              <i class="fab fa-instagram"></i>
            </a>
            <a
              href="#"
              class="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-blue-600 transition-colors"
            >
              <i class="fab fa-twitter"></i>
            </a>
            <a
              href="#"
              class="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-blue-600 transition-colors"
            >
              <i class="fab fa-youtube"></i>
            </a>
          </div>
        </div>

        <!-- Column 2 -->
        <div>
          <h3 class="text-lg font-semibold mb-4">{{ $t('footer.quickLinks.title') }}</h3>
          <ul class="space-y-2 text-gray-400">
            <li>
              <router-link
                to="/"
                class="hover:text-blue-600 transition-colors"
              >{{ $t('footer.quickLinks.home') }}</router-link>
            </li>
            <li>
              <router-link
                to="/products"
                class="hover:text-blue-600 transition-colors"
              >{{ $t('footer.quickLinks.products') }}</router-link>
            </li>
            <li>
              <router-link
                to="/categories"
                class="hover:text-blue-600 transition-colors"
              >{{ $t('footer.quickLinks.categories') }}</router-link>
            </li>
            <li>
              <router-link
                to="/about"
                class="hover:text-blue-600 transition-colors"
              >{{ $t('footer.quickLinks.aboutUs') }}</router-link>
            </li>
            <li>
              <router-link
                to="/contact"
                class="hover:text-blue-600 transition-colors"
              >{{ $t('footer.quickLinks.contact') }}</router-link>
            </li>
            <li>
              <router-link
                to="/blog"
                class="hover:text-blue-600 transition-colors"
              >{{ $t('footer.quickLinks.blog') }}</router-link>
            </li>
            <li>
              <router-link
                to="/faq"
                class="hover:text-blue-600 transition-colors"
              >{{ $t('footer.quickLinks.faq') }}</router-link>
            </li>
          </ul>
        </div>

        <!-- Column 3 -->
        <div>
          <h3 class="text-lg font-semibold mb-4">{{ $t('footer.categories.title') }}</h3>
          <ul class="space-y-2 text-gray-400">
            <li>
              <router-link
                to="/products?category=blinds"
                class="hover:text-blue-600 transition-colors"
              >{{ $t('footer.categories.blinds') }}</router-link>
            </li>
            <li>
              <router-link
                to="/products?category=curtains"
                class="hover:text-blue-600 transition-colors"
              >{{ $t('footer.categories.curtains') }}</router-link>
            </li>
            <li>
              <router-link
                to="/products?category=accessories"
                class="hover:text-blue-600 transition-colors"
              >{{ $t('footer.categories.accessories') }}</router-link>
            </li>
            <li>
              <router-link
                to="/products?category=gallery"
                class="hover:text-blue-600 transition-colors"
              >{{ $t('footer.categories.materialGallery') }}</router-link>
            </li>
            <li>
              <router-link
                to="/products?special=offers"
                class="hover:text-blue-600 transition-colors"
              >{{ $t('footer.categories.specialOffers') }}</router-link>
            </li>
          </ul>
        </div>

        <!-- Column 4 -->
        <div>
          <h3 class="text-lg font-semibold mb-4">{{ $t('footer.contact.title') }}</h3>
          <ul class="space-y-4 text-gray-400">
            <li class="flex">
              <span class="mr-3 text-blue-600">
                <i class="fas fa-map-marker-alt"></i>
              </span>
              <span>{{ $t('footer.contact.address') }}</span>
            </li>
            <li class="flex">
              <span class="mr-3 text-blue-600">
                <i class="fas fa-phone"></i>
              </span>
              <span>{{ $t('footer.contact.phone') }}</span>
            </li>
            <li class="flex">
              <span class="mr-3 text-blue-600">
                <i class="fas fa-envelope"></i>
              </span>
              <span>{{ $t('footer.contact.email') }}</span>
            </li>
            <li class="flex">
              <span class="mr-3 text-blue-600">
                <i class="fas fa-clock"></i>
              </span>
              <span>
                {{ $t('footer.contact.hours.monFri') }}
                <br />
                {{ $t('footer.contact.hours.sat') }}
              </span>
            </li>
          </ul>
        </div>
      </div>

      <!-- Bottom footer -->
      <div
        class="border-t border-gray-800 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center"
      >
        <p
          class="text-gray-400 text-sm"
        >&copy; {{ new Date().getFullYear() }} Casa Draperiilor. {{ $t('footer.copyright') }}</p>
        <div class="flex space-x-6 mt-4 md:mt-0">
          <a
            href="#terms"
            class="text-gray-400 hover:text-blue-600 text-sm transition-colors"
          >{{ $t('footer.terms') }}</a>
          <a
            href="#privacy"
            class="text-gray-400 hover:text-blue-600 text-sm transition-colors"
          >{{ $t('footer.privacy') }}</a>
          <a
            href="#cookies"
            class="text-gray-400 hover:text-blue-600 text-sm transition-colors"
          >{{ $t('footer.cookies') }}</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>