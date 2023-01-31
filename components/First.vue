<script setup lang="ts">
import { EffectFade, Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css/effect-fade";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/virtual";

const swiperImgs = [
  {
    id: 1,
    source: "/banner/大屏轮播-1.jpg",
    alt: "大屏轮播-1",
  },
  {
    id: 2,
    source: "/banner/大屏轮播-2.jpg",
    alt: "大屏轮播-2",
  },
  {
    id: 3,
    source: "/banner/大屏轮播-3.jpg",
    alt: "大屏轮播-3",
  },
];
const pagination = {
  clickable: true,
  renderBullet: function (index, className) {
    return `<span class="${className} custom_bullet"></span>`;
  },
};

const carousel = reactive({
  currentIndex: 0,
});

const swiperChange = (e) => {
  carousel.currentIndex = e.activeIndex === 4 ? 1 : e.activeIndex;
};
</script>

<template>
  <div :class="$style.container">
    <Swiper
      effect="fade"
      :speed="3000"
      :autoplay="{
        delay: 5000,
        disableOnInteraction: false,
      }"
      loop
      centeredSlides
      :pagination="pagination"
      :modules="[Pagination, Autoplay, EffectFade]"
      :class="$style.swiper"
      @activeIndexChange="swiperChange"
    >
      <SwiperSlide v-for="(i, index) in swiperImgs" :key="i.id">
        <img
          :class="[
            $style.imgCss,
            carousel.currentIndex == i.id ? $style.active : $style.common,
          ]"
          :src="i.source"
          :alt="i.alt"
        />
      </SwiperSlide>
    </Swiper>
    <div :class="$style.content">
      <CenterContent>
        <div
          v-if="
            $route.params.language === 'zh' || $route.params.language === 'hant'
          "
          :class="$style.content_center"
        >
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
.active {
  transform: none;
  transition: all 8s linear;
}
.common {
  transform: scale(1.1);
  transition: all 8s linear;
}
.imgCss {
  width: 100vw;
  height: 100vh;
  object-fit: cover;
}
.container {
  position: relative;
  .swiper {
    width: 100vw;
    height: 100vh;
    :global {
      .swiper-pagination {
        bottom: 40ppx;
        // filter: contrast(30);
      }
      // swiper-pagination-bullet custom_bullet swiper-pagination-bullet-active
      .swiper-pagination-bullet-active {
        // animation: 3s moving linear infinite alternate-reverse;
      }
      .swiper-pagination-bullet {
        opacity: 1;
        transition: all ease-in-out 0.6s;
        // animation: 3s moving linear infinite alternate;
        // filter: blur(5px);
      }
    }
  }
  .right_wrap {
    z-index: 11;
    position: absolute;
    right: 260px;
    top: 248px;
    display: flex;
    margin-left: 161px;
    width: 110px;

    .menu_item {
      font-family: myFirstFont;
      color: #ffffff;
      width: 15px;
      margin: 0 auto;
      line-height: 46px;
      font-size: 32px;
      word-wrap: break-word;
    }
  }
  .right_wrap2 {
    z-index: 11;
    position: absolute;
    right: 320px;
    top: 425px;
    display: flex;
    margin-left: 161px;
    width: 110px;

    .menu_item {
      font-family: myFirstFont;
      color: #ffffff;
      width: 15px;
      margin: 0 auto;
      line-height: 46px;
      font-size: 32px;
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
  width: 1920px;
  height: 1080px;
}
</style>
