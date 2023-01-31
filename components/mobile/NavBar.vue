<script setup lang="ts">
import { useI18n } from "vue-i18n";
import { reactive } from "vue";
import FloatMenus from "./FloatMenus.vue";
const i18n = useI18n();
const route = useRoute();

const router = useRouter();
const languageMode = ref(
  route.params.language === "en"
    ? "english"
    : route.params.language === "zh"
    ? "simple"
    : route.params.language === "hant"
    ? "manifold"
    : ""
);

const state = reactive({ isMenusExpanded: false });

onBeforeMount(() => {
  if (route.params.language === "en") {
    i18n.locale.value = "en";
  }
});

let num = 0;
const changeLanguage = () => {
  num++;
  if (num % 3 === 0) {
    i18n.locale.value = "zh";
    languageMode.value = "simple";
    router.replace({
      params: {
        language: "zh",
      },
    });
  } else if (num % 3 === 1) {
    i18n.locale.value = "en";
    languageMode.value = "english";
    router.replace({
      params: {
        language: "en",
      },
    });
  } else if (num % 3 === 2) {
    i18n.locale.value = "hant";
    languageMode.value = "manifold";
    router.replace({
      params: {
        language: "hant",
      },
    });
  }
};
</script>

<template>
  <div :class="$style.wrap">
    <NuxtLink :to="`/${$route.params.language}/`">
      <img :class="$style.logo_css" src="/logo/logo_mb.png" alt="logo" />
    </NuxtLink>
    <div :class="$style.btn_area">
      <NuxtLink :class="$style.right" @click="changeLanguage">
        <Icon :class="$style.language" :id="languageMode" />
      </NuxtLink>
      <MobileMenuButton
        :class="$style.button"
        v-model:active="state.isMenusExpanded"
      />
    </div>
    <FloatMenus v-model:visible="state.isMenusExpanded" />
  </div>
</template>

<style module lang="less">
.button {
  position: relative;
  z-index: 200;
  width: 56mpx;
  height: 56mpx;
  font-size: 56mpx;
  cursor: pointer;
  // margin-right: 37.6mpx;
}
.language {
  font-size: 56mpx;
  cursor: pointer;
}
.wrap {
  position: fixed;
  left: 0px;
  top: 0px;
  z-index: 9999;
  width: 750mpx;
  height: 88mpx;
  background: rgba(0, 0, 0, 0.3);
  box-sizing: border-box;
  padding: 14mpx 40mpx;
  display: flex;
  justify-content: space-between;
  // backdrop-filter: blur(6px);
  .logo_css {
    width: 226mpx;
    height: 70mpx;
  }
  .btn_area {
    display: flex;

    .right {
      width: 56mpx;
      height: 56mpx;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #ffffff;
      margin-right: 40mpx;
    }
  }
}
</style>
