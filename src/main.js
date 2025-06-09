import { createApp } from "vue";
import { createI18n } from "vue-i18n";
import App from "./App.vue";
import "./style.css";

import '@fortawesome/fontawesome-free/css/all.css'



import router from "./routes";

import en from "./locales/en.json";
import ro from "./locales/ro.json";

const i18n = createI18n({
  locale: "en",
  fallbackLocale: "en",
  messages: {
    en,
    ro,
  },
});

const app = createApp(App);
app.use(i18n);
app.use(router);
app.mount("#app");
