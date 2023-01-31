<script setup lang="ts">
import useGlobalStore from "@/stores/global";
import { useI18n } from "vue-i18n";
const globalStore = useGlobalStore();

const i18n = useI18n();
useHead({
  title: i18n.t("speName_dishes"),
  meta: [
    {
      name: "keywords",
      content:
        "燒肉,吃到飽,燒肉吃到飽,59烧肉,日式炭火燒肉,包廂式,燒肉店,分店資訊,菜單,最新消息,啤酒",
    },
  ],
});
</script>

<template>
  <div>
    <WebVariety v-if="globalStore.isBigScreen"></WebVariety>
    <span v-else>
      <PhoneVariety></PhoneVariety>
    </span>
  </div>
</template>

<style module lang="less"></style>
