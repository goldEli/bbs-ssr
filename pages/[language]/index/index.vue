<script setup lang="ts">
import useGlobalStore from "@/stores/global";
import { useI18n } from "vue-i18n";
const i18n = useI18n();

useHead({
  title: i18n.t("speName_home"),
  meta: [
    {
      name: "description",
      content:
        "59烧肉是新加坡規模最大、最知名的國際燒肉品牌，59烧肉的特色是「以合理的價格提供高品質的肉品」，提供單點&套餐＆任您吃等多種消費選擇。",
    },
  ],
});
const globalStore = useGlobalStore();
</script>

<template>
  <div>
    <Web v-if="globalStore.isBigScreen"></Web>
    <span v-else> <Phone></Phone></span>
  </div>
</template>

<style module lang="less"></style>
