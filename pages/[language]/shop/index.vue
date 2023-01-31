<script setup lang="ts">
import useGlobalStore from "@/stores/global";

import { useI18n } from "vue-i18n";
const globalStore = useGlobalStore();

const i18n = useI18n();
useHead({
  title: i18n.t("speName_shop"),
  meta: [
    {
      name: "author",
      content: "59燒肉專門店",
    },
  ],
});
</script>

<template>
  <div>
    <WebShop v-if="globalStore.isBigScreen"></WebShop>
    <span v-else>
      <PhoneShop></PhoneShop>
    </span>
  </div>
</template>

<style module lang="less"></style>
