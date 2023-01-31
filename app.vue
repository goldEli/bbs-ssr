<script setup lang="ts">
import useGlobalStore from "@/stores/global";
const globalStore = useGlobalStore();

onMounted(() => {
  console.log(_VERSION_);
  window.addEventListener("resize", globalStore.checkScreen);
  globalStore.checkScreen();
});
</script>

<template>
  <div>
    <Header v-if="globalStore.isBigScreen"></Header>
    <span v-else><MobileNavBar></MobileNavBar></span>

    <NuxtPage :key="$route.fullPath" />
    <MobileToTop v-if="!globalStore.isBigScreen"></MobileToTop>
  </div>
</template>
<style lang="less">
@font-face {
  font-family: myFirstFont;
  font-display: swap;
  src: url("/assets/SourceHanSerifCN-Regular.eot.otf");
}
a,
div,
span,
p,
ul,
li {
  -webkit-touch-callout: none;
  user-select: none;
}
#app {
  font-family: myFirstFont;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

img {
  border: 0;
}

body {
  padding: 0;
  margin: 0;
  -webkit-tap-highlight-color: transparent;
  overflow-x: hidden;
  font-family: myFirstFont;
}

a {
  color: inherit;
  text-decoration: none;
}

ul,
ol,
li,
div,
p {
  padding: 0;
  margin: 0;
  list-style: none;
}

::-webkit-scrollbar {
  width: 4px;
  height: 4px;
}
::-webkit-scrollbar-thumb {
  border-radius: 5px;
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
  background: rgba(0, 0, 0, 0.2);
}
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
  border-radius: 0;
  background: rgba(0, 0, 0, 0.1);
}

.swiper-pagination.swiper-pagination-bullets.swiper-pagination-horizontal
  .custom_bullet {
  width: 10px;
  height: 10px;
  background: #fff;
  border-radius: 24px;
  margin: 0 10px;
  &.swiper-pagination-bullet-active {
    width: 48px;
    height: 10px;
    background: #ed1c24;
    border-radius: 10px;
  }
}
</style>
