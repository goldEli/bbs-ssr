<script setup lang="ts">
import { onMounted, onUnmounted, reactive } from "vue";

// import useGlobalStore from '@/stores/global'

const data = reactive({
  visible: false,
});
var timeout;
const checkVisible = () => {
  timeout ? clearTimeout(timeout) : null;

  data.visible = true;

  timeout = setTimeout(() => {
    data.visible = false;
  }, 2000);
};

onMounted(() => window.addEventListener("scroll", checkVisible));
onUnmounted(() => window.removeEventListener("scroll", checkVisible));

const goTop = () =>
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });

// const globalStore = useGlobalStore()
</script>

<template>
  <img
    v-show="data.visible"
    @click="goTop"
    :class="$style.wrap"
    src="/logo/top@2x.png"
    alt=""
  />
</template>

<style module lang="less">
.wrap {
  position: fixed;
  z-index: 9990;
  bottom: 50%;
  right: 0px;
  width: 50mpx;
  height: 210mpx;

  cursor: pointer;
}

.pcWrap {
  bottom: 108ppx;
  right: 39ppx;
  width: 70ppx;
  height: 70ppx;
}
</style>
