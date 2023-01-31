<script setup lang="ts">
import { EffectFade, Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/virtual";
import { useI18n } from "vue-i18n";
const i18n = useI18n();
const route = useRoute();
const language = route.params.language;
const pagination = {
  clickable: true,
  renderBullet: function (index, className) {
    return `<span class="${className} custom_bullet"></span>`;
  },
};
const swiperImgs = [
  {
    id: 1,
    source: "/environmentAndAbout/店内环境-1.jpg",
    alt: "店内环境-1",
  },
  {
    id: 2,
    source: "/environmentAndAbout/店内环境-2.jpg",
    alt: "店内环境-2",
  },
  {
    id: 3,
    source: "/environmentAndAbout/店内环境-3.jpg",
    alt: "店内环境-3",
  },
];
const text2 = `"Surround the warm atmosphere of the island country and become a  brand with temperature."
Not only to provide top-level materials, baking technology and modulation.
Flavor, insist on using each baking net only once, highlight each the original flavor of Daozhen cuisine.
Whisper greetings through the table and share different famous products.`
// How to taste and enjoy the parts, and share interesting things and consumers can chat freely, making them feel like eating at home. Easy without burden.`;
const inners = [
  " 「環繞島國熱情氛圍，成為有溫度的品牌」 ",
  " 不僅僅於提供頂級⻝材、烘烤技術與調制風味",
  " 堅持每張烤網只使用壹次，彰顯每 道珍饌原始",
  " 味道。透過桌邊低聲問候、細細分享不同名品",
  " 品味享用各色菜品，再不時分享趣味小事與",
  " 消費者自在暢聊，讓其感受如同在家用餐般",
  " 輕松無負擔。",
];
const inners_zh = [
  " 「环绕岛国热情氛围，成为有温度的品牌」 ",
  " 不仅仅于提供顶级⻝材、烘烤技术与调制风味",
  " 坚持每张烤网只使用一次，彰显每 道珍馔原始",
  " 味道。透过桌边低声问候、细细分享不同名品",
  " 品味享用各色菜品，再不时分享趣味小事与",
  " 消费者自在畅聊，让其感受如同在家用餐般",
  " 轻松无负担。",
];
</script>

<template>
  <div :class="$style.container">
    <div v-if="language === 'zh' || language === 'hant'" :class="$style.left">
      <div :class="$style.title">
        <MobileTitle>{{ $t("web.title3") }}</MobileTitle>
      </div>
      <div :class="$style.inner_wrap">
        <div
          :key="value"
          v-for="value in i18n.locale.value == 'hant'
            ? inners.slice().reverse()
            : inners_zh.slice().reverse()"
          :class="$style.menu_item"
        >
          {{ value }}
        </div>
      </div>
      <img :class="$style.bg" src="/other/bg_03.jpg" alt="" />
    </div>
    <div v-else :class="$style.left">
      <div :class="$style.right_en">
        <div :class="$style.title2">In store environment</div>
        <div :class="$style.inner_wrap">
          {{ text2 }}
        </div>
      </div>
      <img :class="$style.bg" src="/other/bg_03.jpg" alt="" />
    </div>
    <div :class="$style.right">
      <swiper
        :speed="2000"
        loop
        centeredSlides
        effect="fade"
        :autoplay="{
          delay: 3000,
          disableOnInteraction: false,
        }"
        :modules="[Pagination, Autoplay, EffectFade]"
        :class="$style.swiper"
      >
        <SwiperSlide v-for="i in swiperImgs">
          <img :class="$style.imgCss" :src="i.source" :alt="i.alt" />
        </SwiperSlide>
      </swiper>
      <div :class="$style.swiper_pagination" />
    </div>
  </div>
</template>

<style module lang="less">
.imgCss {
  width: 750mpx;
  vertical-align: middle;
  height: 844mpx;
}
.container {
  width: 750mpx;
  .left {
    position: relative;
    .right_en {
      position: relative;
      display: flex;
      flex-direction: column;
      .learn_en {
        width: 204mpx;
        height: 46mpx;
        background: #ed1c24;
        position: absolute;
        left: 190mpx;
        top: 766mpx;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        color: #ffffff;
      }
      .title2 {
        position: absolute;
        left: 100mpx;
        top: 104mpx;

        margin: 0 auto;
        line-height: 42mpx;
        font-size: 36mpx;
        word-wrap: break-word;
      }
      .inner_wrap {
        width: 580mpx;
        height: 480mpx;
        position: absolute;
        left: 100mpx;
        top: 222mpx;
        white-space: pre-wrap;
        line-height: 44mpx;
        font-size: 26mpx;
      }
    }
    .inner_wrap {
      position: absolute;
      top: 50mpx;
      right: 310mpx;
      display: flex;
      width: 312mpx;
      height: 720mpx;
      .menu_item {
        font-family: myFirstFont;
        width: 30mpx;
        margin: 0 auto;
        line-height: 36mpx;
        font-size: 20mpx;
        word-wrap: break-word;
      }
    }
    .title {
      position: absolute;
      right: 138mpx;
      top: 15mpx;
    }
    .bg {
      width: 100%;
      height: 100%;
      vertical-align: middle;
    }
  }
  .right {
    position: relative;
    .swiper {
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
  }
}
</style>
