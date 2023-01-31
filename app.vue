<script setup lang="ts">
import useGlobalStore from "@/stores/global";
const globalStore = useGlobalStore();

onMounted(() => {
  console.log(_VERSION_);
  window.addEventListener("resize", globalStore.checkScreen);
  globalStore.checkScreen();
});

useHead({
  meta: [
    {
      name: "facebook-domain-verification",
      content: "g4ux8mc3n615kr0bgfb1wqy76cur3n",
    },
  ],

  link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.svg" }],
  script: [
    {
      src: "https://lf1-cdn-tos.bytegoofy.com/obj/iconpark/svg_17892_10.c17b29db9b72a714c233b1d7ca77e813.js",
    },
    {
      children: `!function(f,b,e,v,n,t,s)
        {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
        n.callMethod.apply(n,arguments):n.queue.push(arguments)};
        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
        n.queue=[];t=b.createElement(e);t.async=!0;
        t.src=v;s=b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t,s)}(window, document,'script',
        'https://connect.facebook.net/en_US/fbevents.js');
        fbq('init', '5503623943086293');
        fbq('track', 'PageView');`,
    },
  ],
  noscript: [
    {
      children:
        '<img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=5503623943086293&ev=PageView&noscript=1"/>',
    },
  ],
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
