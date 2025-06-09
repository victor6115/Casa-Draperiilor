<template>
  <header class="app-navbar bg-white shadow-md">
    <div class="container mx-auto px-4 py-3">
      <div class="flex justify-between items-center">
        <div class="logo">
          <router-link to="/">
            <img src="/assets/Images/LogoCD.png" alt="Casa Draperiilor Logo" class="h-10" />
          </router-link>
        </div>

        <nav class="hidden md:flex space-x-1">
          <router-link
            to="/"
            class="navbar-link font-medium text-gray-800 no-underline hover:text-blue-600 px-3 py-2 rounded-md"
          >{{ $t('navbar.home') }}</router-link>
          <router-link
            to="/products"
            class="navbar-link font-medium text-gray-800 no-underline hover:text-blue-600 px-3 py-2 rounded-md"
          >{{ $t('navbar.products') }}</router-link>
          <router-link
            to="/categories"
            class="navbar-link font-medium text-gray-800 no-underline hover:text-blue-600 px-3 py-2 rounded-md"
          >{{ $t('navbar.categories') }}</router-link>
          <router-link
            to="/about"
            class="navbar-link font-medium text-gray-800 no-underline hover:text-blue-600 px-3 py-2 rounded-md"
          >{{ $t('navbar.aboutUs') }}</router-link>
          <router-link
            to="/contact"
            class="navbar-link font-medium text-gray-800 no-underline hover:text-blue-600 px-3 py-2 rounded-md"
          >{{ $t('navbar.contact') }}</router-link>
          <router-link
            to="/blog"
            class="navbar-link font-medium text-gray-800 no-underline hover:text-blue-600 px-3 py-2 rounded-md"
          >{{ $t('navbar.blog') }}</router-link>
          <router-link
            to="/faq"
            class="navbar-link font-medium text-gray-800 no-underline hover:text-blue-600 px-3 py-2 rounded-md"
          >{{ $t('navbar.faq') }}</router-link>
        </nav>

        <div class="flex items-center space-x-4">
          <div class="hidden sm:flex space-x-2">
            <button
              @click="changeLanguage('ro')"
              :class="['px-2 py-1 text-sm rounded text-gray-700', { 'bg-blue-600 text-white': $i18n.locale === 'ro', 'hover:bg-gray-100': $i18n.locale !== 'ro' }]"
            >RO</button>
            <button
              @click="changeLanguage('en')"
              :class="['px-2 py-1 text-sm rounded text-gray-700', { 'bg-blue-600 text-white': $i18n.locale === 'en', 'hover:bg-gray-100': $i18n.locale !== 'en' }]"
            >EN</button>
          </div>
          
          <router-link to="/cart" class="text-gray-600 hover:text-blue-600">
            <i class="fas fa-shopping-cart"></i>
          </router-link>

          <button
            @click="mobileMenuOpen = !mobileMenuOpen"
            class="md:hidden text-gray-600 hover:text-blue-600"
          >
            <i :class="mobileMenuOpen ? 'fas fa-times' : 'fas fa-bars'"></i>
          </button>
        </div>
      </div>

      <!-- Mobile menu -->
      <div v-show="mobileMenuOpen" class="md:hidden mt-4 pb-4 border-t border-gray-200">
        <div class="flex flex-col space-y-1 pt-2">
          <router-link
            to="/"
            @click="mobileMenuOpen = false"
            class="navbar-link-mobile block px-3 py-2 rounded-md text-base font-medium text-gray-700 no-underline hover:text-blue-600 hover:bg-gray-50"
          >{{ $t('navbar.home') }}</router-link>
          <router-link
            to="/products"
            @click="mobileMenuOpen = false"
            class="navbar-link-mobile block px-3 py-2 rounded-md text-base font-medium text-gray-700 no-underline hover:text-blue-600 hover:bg-gray-50"
          >{{ $t('navbar.products') }}</router-link>
          <router-link
            to="/categories"
            @click="mobileMenuOpen = false"
            class="navbar-link-mobile block px-3 py-2 rounded-md text-base font-medium text-gray-700 no-underline hover:text-blue-600 hover:bg-gray-50"
          >{{ $t('navbar.categories') }}</router-link>
          <router-link
            to="/about"
            @click="mobileMenuOpen = false"
            class="navbar-link-mobile block px-3 py-2 rounded-md text-base font-medium text-gray-700 no-underline hover:text-blue-600 hover:bg-gray-50"
          >{{ $t('navbar.aboutUs') }}</router-link>
          <router-link
            to="/contact"
            @click="mobileMenuOpen = false"
            class="navbar-link-mobile block px-3 py-2 rounded-md text-base font-medium text-gray-700 no-underline hover:text-blue-600 hover:bg-gray-50"
          >{{ $t('navbar.contact') }}</router-link>
          <router-link
            to="/blog"
            @click="mobileMenuOpen = false"
            class="navbar-link-mobile block px-3 py-2 rounded-md text-base font-medium text-gray-700 no-underline hover:text-blue-600 hover:bg-gray-50"
          >{{ $t('navbar.blog') }}</router-link>
          <router-link
            to="/faq"
            @click="mobileMenuOpen = false"
            class="navbar-link-mobile block px-3 py-2 rounded-md text-base font-medium text-gray-700 no-underline hover:text-blue-600 hover:bg-gray-50"
          >{{ $t('navbar.faq') }}</router-link>

          <div class="mt-3 pt-3 border-t border-gray-200">
            <div class="mt-2 flex space-x-2 px-3">
              <button
                @click="changeLanguage('ro')"
                :class="['flex-1 text-center px-3 py-2 text-sm rounded font-medium', { 'bg-blue-600 text-white': $i18n.locale === 'ro' }, { 'bg-gray-100 text-gray-700 hover:bg-gray-200': $i18n.locale !== 'ro' }]"
              >RO</button>
              <button
                @click="changeLanguage('en')"
                :class="['flex-1 text-center px-3 py-2 text-sm rounded font-medium', { 'bg-blue-600 text-white': $i18n.locale === 'en' }, { 'bg-gray-100 text-gray-700 hover:bg-gray-200': $i18n.locale !== 'en' }]"
              >EN</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'AppNavbar',
  data() {
    return {
      mobileMenuOpen: false
    }
  },
  methods: {
    changeLanguage(lang) {
      this.$i18n.locale = lang;
      localStorage.setItem('userLanguage', lang);
      document.documentElement.lang = lang;
      if (this.mobileMenuOpen) {
        this.mobileMenuOpen = false;
      }
    },
  },
  created() {
    const savedLang = localStorage.getItem('userLanguage');
    if (savedLang && (savedLang === 'en' || savedLang === 'ro')) {
      this.$i18n.locale = savedLang;
      document.documentElement.lang = savedLang;
    } else {
      document.documentElement.lang = this.$i18n.locale;
    }
  }
}
</script>

<style scoped>
.app-navbar .navbar-link,
.app-navbar .navbar-link-mobile {
  color: #1f2937; /* Tailwind gray-800 */
  text-decoration: none;
}

.app-navbar .navbar-link:hover,
.app-navbar .navbar-link-mobile:hover {
  color: #2563eb; /* Tailwind blue-600 */
  text-decoration: none;
}

.app-navbar .navbar-link.router-link-exact-active {
  color: #2563eb;
}
.app-navbar .navbar-link-mobile.router-link-exact-active {
  color: #2563eb;
  background-color: #eff6ff;
}
</style>