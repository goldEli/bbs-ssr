<script setup lang="ts">
import {  EffectFade,Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css/effect-fade";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/virtual";
const route = useRoute();
const language = route.params.language;
const swiperImgs = [
  {
    id: 1,
    source: "/banner/1.jpg",
    alt: "大屏轮播-1",
  },
  {
    id: 2,
    source: "/banner/2.jpg",
    alt: "大屏轮播-2",
  },
  {
    id: 3,
    source: "/banner/3.jpg",
    alt: "大屏轮播-3",
  },
];
const pagination = {
  clickable: true,
  renderBullet: function (index, className) {
    return `<span class="${className} custom_bullet"></span>`;
  },
};
</script>

<template>
  <div :class="$style.container">
    <Swiper
     effect="fade"
      :autoplay="{
        delay: 3000,
        disableOnInteraction: false,
      }"
      :speed="2000"
      loop
      centeredSlides
      :modules="[Pagination, Autoplay, EffectFade]"
      :class="$style.swiper"
    >
      <SwiperSlide v-for="i in swiperImgs" :key="i.id">
        <img :class="$style.imgCss" :src="i.source" :alt="i.alt" />
      </SwiperSlide>
    </Swiper>

    <div :class="$style.content">
      <CenterContent>
        <div v-if="language !== 'en'" :class="$style.content_center">
          <div :class="$style.right_wrap">
            <div :class="$style.menu_item">{{ $t("web.des") }}</div>
          </div>
          <div :class="$style.right_wrap2">
            <div :class="$style.menu_item">{{ $t("web.des2") }}</div>
          </div>
        </div>
      </CenterContent>
    </div>
  </div>
</template>

<style module lang="less">
.imgCss {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.container {
  width: 100vw;
  height: 100vh;

  position: relative;
  .swiper {
    width: 100%;
    height: 100%;
    :global {
      .swiper-pagination {
        bottom: 40mpx;
      }
      .swiper-pagination-bullet {
        opacity: 1;
        transition: all ease-in-out 0.6s;
      }
    }
  }
  .right_wrap {
    z-index: 11;
    position: absolute;
    right: -250px;
    top: -548px;
    display: flex;
    margin-left: 161px;
    width: 110px;

    .menu_item {
      font-family: myFirstFont;
      color: #ffffff;
      width: 15px;
      margin: 0 auto;
      line-height: 150px;
      font-size: 100px;
      word-wrap: break-word;
    }
  }
  .right_wrap2 {
    z-index: 11;
    position: absolute;
    right: -10px;
    top: -125px;
    display: flex;
    margin-left: 161px;
    width: 110px;

    .menu_item {
      font-family: myFirstFont;
      color: #ffffff;
      width: 15px;
      margin: 0 auto;
      line-height: 150px;
      font-size: 100px;
      word-wrap: break-word;
    }
  }
}
.content {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 200;
  pointer-events: none;
}
.content_center {
  width: 750px;
  height: 1080px;
}
</style>
