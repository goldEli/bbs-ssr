<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import { useI18n } from "vue-i18n";
const i18n = useI18n();
// Import Swiper styles
import "swiper/css";

import "swiper/css/free-mode";
import "swiper/css/pagination";
// import required modules
import { FreeMode,EffectFade, Pagination, Autoplay } from "swiper";
import {
  swiperImgs,
  menus,
  menusen,
  texts,
  enTexts,
  menus_hant,
  texts_hant,
} from "@/constants/secondList";
const route = useRoute();
const language = route.params.language;
const pagination = {
  clickable: true,
  renderBullet: function (index, className) {
    return `<span class="${className} custom_bullet"></span>`;
  },
};
const activeIndex = ref(1);
const changeList = (value) => {
  activeIndex.value = value;
};
</script>

<template>
  <div :class="$style.wrap">
    <div :class="$style.top">
      <swiper
        v-if="language === 'zh' || language === 'hant'"
        loop
        :speed="3000"
        :autoplay="{
          delay: 500,
          disableOnInteraction: false,
        }"
        loopFillGroupWithBlank
        normalizeSlideIndex
        :slidesPerView="9"
        :spaceBetween="10"
        :freeMode="true"
        :modules="[FreeMode, Pagination, Autoplay]"
        class="mySwiper"
      >
        <swiper-slide
          :key="i.id"
          v-for="i in i18n.locale.value === 'hant' ? menus : menus_hant"
        >
          <div
            @click="changeList(i.id)"
            :class="[$style.vetText, activeIndex === i.id ? $style.active : '']"
          >
            {{ i.name }}
          </div>
        </swiper-slide>
      </swiper>
      <swiper
        v-else
        :autoplay="{
          delay: 2500,
          disableOnInteraction: false,
        }"
        :speed="3000"
        loop
        :slidesPerView="3"
        :spaceBetween="10"
        :freeMode="true"
        :modules="[FreeMode, Pagination, Autoplay]"
        class="mySwiper"
      >
        <swiper-slide :key="value.id" v-for="value in menusen">
          <div
            @click="changeList(value.id)"
            :class="[
              $style.vetText_2,
              activeIndex === value.id ? $style.active : '',
            ]"
          >
            {{ value.name }}
          </div>
        </swiper-slide>
      </swiper>
    </div>
    <div :class="$style.center">
      <div :class="$style.left_swiper_wrap">
        <swiper
         effect="fade"
        :speed="3000"
          :autoplay="{
            delay: 2500,
            disableOnInteraction: false,
          }"
          loop
          centeredSlides
          :modules="[Pagination, Autoplay, EffectFade]"
          :class="$style.swiper"
        >
          <SwiperSlide v-for="i in swiperImgs[activeIndex - 1]" :key="i.source">
            <div :class="$style.item_wrap">
              <img :class="$style.imgCss" :src="i.source" alt />
              <span v-if="language === 'zh' || language === 'hant'" :class="$style.text">{{ i18n.locale.value !== "hant" ? i.name : i.name_hant }}</span>
              <span v-else :class="$style.text_2">{{ i.enname }}</span>
            </div>
          </SwiperSlide>
        </swiper>
      </div>
    </div>

    <div v-if="language === 'zh' || language === 'hant'" :class="$style.bottom">
      <div :class="$style.title">
        <MobileTitle>伍玖菜品</MobileTitle>
      </div>
      <div
        v-for="value in i18n.locale.value !== 'hant'
          ? texts[activeIndex - 1]
          : texts_hant[activeIndex - 1]"
        :key="value.id"
        :class="$style.right_wrap"
      >
        <div
          v-for="item in value.text.slice().reverse()"
          :class="$style.menu_item"
        >
          {{ item }}
        </div>
      </div>
    </div>
    <div v-else :class="$style.bottom">
      <div :class="$style.title_2">Wu Jiu Menu</div>
      <div v-for="i in enTexts[activeIndex - 1]" :class="$style.des_en">
        {{ i.text }}
      </div>
    </div>
  </div>
</template>

<style module lang="less">
.wrap {
  .top {
    box-sizing: border-box;

    padding: 0 20px;
    padding-top: 64mpx;
    background: url("/other/bg_41x.png");
    height: 288mpx;
    .vetText {
      width: 24mpx;
      font-size: 32mpx;
      font-weight: 500;
      color: #333333;
      line-height: 46mpx;
      &.active {
        color: #ed1c24;
      }
    }
    .vetText_2 {
      font-size: 32mpx;
      font-weight: 500;
      color: #333333;
      &.active {
        color: #ed1c24;
      }
    }
  }
  .center {
    position: relative;
    height: 375mpx;

    .imgCss {
      width: 750mpx;
      height: 375mpx;
    }
    .text {
      width: 20mpx;
      line-height: 32mpx;
      font-size: 25mpx;
      word-wrap: break-word;
      position: absolute;
      right: 60mpx;
      top: 40mpx;
      font-family: myFirstFont;
      color: #ffffff;
    }
    .text_2 {
      // width: 40mpx;
      line-height: 40mpx;
      font-size: 26mpx;
      word-wrap: break-word;
      position: absolute;
      right: 40mpx;
      top: 40mpx;
      font-family: myFirstFont;
      color: #ffffff;
    }
  }
  .bottom {
    position: relative;
    background: url("/other/bg_41x.png");
    height: 725mpx;
    .des_en {
      //  background-color: #ed1c24;
      position: absolute;
      left: 100mpx;
      top: 150mpx;
      width: 600mpx;
      height: 484mpx;
      font-size: 26mpx;
      font-family: myFirstFont;
      font-weight: 400;
      color: #333333;
      line-height: 44mpx;
      word-wrap: break-word;
    }
    .title {
      position: absolute;
      right: 160mpx;
      top: 50mpx;
    }
    .title_2 {
      line-height: 54mpx;
      font-size: 36mpx;
      position: absolute;
      left: 100mpx;
      top: 50mpx;
    }
    .right_wrap {
      // background-color: #ed1c24;
      position: absolute;
      top: 50mpx;
      left: 100mpx;
      display: flex;
      width: 210mpx;
      height: 600mpx;
      .menu_item {
        color: #333333;
        width: 15mpx;
        margin: 0 6px;
        line-height: 30mpx;
        font-size: 20mpx;
        word-wrap: break-word;
        font-family: myFirstFont;
      }
    }
  }
}
</style>
