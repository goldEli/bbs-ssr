import { createI18n } from "vue-i18n";
import en from "../locales/en.json";
import zh from "../locales/zh-HK.json";
import hant from "../locales/zh-HANT.json";

export default defineNuxtPlugin(({ vueApp }) => {
  const i18n = createI18n({
    legacy: false,
    globalInjection: true,
    locale: "zh",
    fallbackLocale: "zh",
    messages: { en, zh, hant },
  });

  vueApp.use(i18n);
});
