<script setup lang="ts">
import useGlobalStore from "@/stores/global";
import { useI18n } from "vue-i18n";
const i18n = useI18n();

useHead({
  title: i18n.t("speName_about"),
});
const globalStore = useGlobalStore();
</script>

<template>
  <div>
    <WebAbout v-if="globalStore.isBigScreen"></WebAbout>
    <span v-else>
      <PhoneAbout></PhoneAbout>
    </span>
  </div>
</template>

<style module lang="less"></style>
