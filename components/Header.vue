<script setup lang="ts">
import { navigation } from "@/constants";
import { useI18n } from "vue-i18n";
const route = useRoute();
const language = route.params.language;
const i18n = useI18n();
const languageMode = ref(
  route.params.language === "en"
    ? "english"
    : route.params.language === "zh"
    ? "simple"
    : route.params.language === "hant"
    ? "manifold"
    : ""
);

const router = useRouter();
const visible = ref(false);

onBeforeMount(() => {
  if (route.params.language === "en") {
    i18n.locale.value = "en";
  }
});

const changeIndex = (index: string) => {
  if (index === "dishes") {
    visible.value = true;
    return;
  }
  visible.value = false;
};
const changeVisible = (index: string) => {
  visible.value = false;
};
const closeList = (index) => {
  if (index == "dishes") visible.value = false;
};
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
  console.log(i18n.locale.value, "改变值");
};
</script>

<template>
  <div :class="$style.page">
    <div :class="$style.header">
      <div
        @click="
          $router.push({
            path: `/${$route.params.language}/`,
          })
        "
        :class="$style.left"
      >
        <img :class="$style.logo_css" src="/logo/logo_mb.png" alt="logo" />
      </div>

      <div :class="$style.center">
        <NuxtLink
          @click="changeIndex(i.key)"
          v-for="i in navigation"
          :data-a="$route.path.replace(`/${$route.params.language}`, '')"
          :class="[
            $style.lab_item,
            i.id ===
              ($route.path.replace(`/${$route.params.language}`, '') || '/') &&
              $style.active,
          ]"
          :key="i.id"
          :to="`/${$route.params.language}${i.to}`"
        >
          {{ $t(i.key) }}
        </NuxtLink>
      </div>
      <NuxtLink :class="$style.right" @click="changeLanguage">
        <Icon
          :class="$style.language"
          :data-a="languageMode"
          :id="languageMode"
        />
      </NuxtLink>
    </div>
    <VarietyList :visible="visible" @toP="changeVisible"></VarietyList>
  </div>
</template>

<style module lang="less">
.language {
  font-size: 42px;
  cursor: pointer;
}
.page {
  position: relative;
}

.header {
  position: relative;
  width: 100vw;
  position: fixed;
  top: 0px;
  z-index: 9999;
  height: 100px;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 0px 0px 0px 0px;
  box-sizing: border-box;
  padding: 0 70px;
  display: flex;
  justify-content: space-between;
  .left {
    width: 219px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    .logo_css {
      width: 219px;
      height: 62px;
    }
  }
  .center {
    width: 684px;
    display: flex;
    justify-content: space-between;
    .lab_item {
      width: 88px;

      display: flex;
      align-items: center;
      justify-content: center;
      color: #ffffff;
      &:hover {
        background: #ed1c24;
      }
    }
    .active {
      background: #ed1c24;
    }
  }
  .right {
    width: 128px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #ffffff;
  }
}
</style>
