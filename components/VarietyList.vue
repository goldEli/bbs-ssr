<script setup lang="ts">
import { menus, EnMenus, menus_hant } from "~~/constants/dishesList";
import { useI18n } from "vue-i18n";
const props = defineProps({
  visible: Boolean,
});

const i18n = useI18n();
const emit = defineEmits(["toP"]);
function send() {
  emit("toP");
}

const route = useRoute();
const language = route.params.language;

const router = useRouter();

function selected(lang, data) {
  router.push({
    path: `/${lang}/variety?`,
    query: {
      dishes: data.id,
    },
  });
}
</script>

<template>
  <div v-if="props.visible" @click="send" :class="$style.container">
    <div
      v-if="
        $route.params.language === 'zh' || $route.params.language === 'hant'
      "
      :class="$style.top"
    >
      <div
        :class="$style.menu_item"
        v-for="i in i18n.locale.value == 'hant' ? menus : menus_hant"
        :key="i.id"
        @click="selected('zh', i)"
      >
        {{ i.name }}
      </div>
    </div>
    <div v-else :class="$style.en_top">
      <div
        :class="$style.menu_item"
        v-for="i in EnMenus"
        :key="i.id"
        @click="selected('en', i)"
      >
        {{ i.name }}
      </div>
    </div>
  </div>
</template>

<style module lang="less">
.container {
  backdrop-filter: blur(3px);
  position: absolute;
  left: 0px;
  top: 0px;
  width: 1920ppx;
  height: 100vh;
  background: rgba(4, 4, 4, 0.8);
  z-index: 9000;
  box-sizing: border-box;
  padding: 160ppx 0 60ppx;
  overflow: auto;
  .top {
    margin: 0 auto;
    margin-top: 100ppx;
    width: 1080ppx;
    display: flex;
    justify-content: space-between;
    .menu_item {
      font-family: myFirstFont;
      color: white;
      width: 15ppx;
      margin: 0 auto;
      line-height: 24ppx;
      font-size: 20ppx;
      word-wrap: break-word;
      position: relative;
      cursor: pointer;
      &:hover {
        color: #ed1c24;
      }
    }
  }
  .en_top {
    width: 300ppx;
    height: 808ppx;
    margin: 0 auto;
    margin-top: 30ppx;
    display: flex;
    font-size: 20ppx;
    flex-direction: column;
    justify-content: space-between;
    .menu_item {
      color: #ffffff;
      cursor: pointer;
      &:hover {
        color: #ed1c24;
      }
    }
  }
}
</style>
