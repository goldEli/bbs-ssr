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
  <div :class="$style.title">这是首页</div>
</template>

<style module lang="less">
.title {
  background: red;
  font-size: 30px;
  width: 375px;
  color: white;
}
</style>

