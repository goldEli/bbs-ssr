<script setup lang="ts">
import { EffectFade, Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css/effect-fade";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/virtual";
import Title from "./Title.vue";
const route = useRoute();
const language = route.params.language;
import { useI18n } from "vue-i18n";
const i18n = useI18n();
const pagination = {
  clickable: true,
  renderBullet: function (index, className) {
    return `<span class="${className} custom_bullet"></span>`;
  },
};
const swiperImgs = [
  {
    id: 1,
    source: "/environmentAndAbout/关于五九-1.jpg",
    alt: "关于五九-1",
  },
  {
    id: 2,
    source: "/environmentAndAbout/关于五九-2.jpg",
    alt: "关于五九-2",
  },
  {
    id: 3,
    source: "/environmentAndAbout/关于五九-3.jpg",
    alt: "关于五九-3",
  },
];
const text2 = `
From the ingenuity from the raw meat, straight fire against the clock."   
59 Hutong Yakiniku is a brand that marries the delectable experience of Yakiniku with warm Taiwanese service. The term “59”, a play on the Hokkien slang “Wu Jiu Wu Jio (五酒五揪)” which is loosely translated as “I’ll see you where there’s alcohol”, is a fun representation of the restaurant brand's mission to bring warmth, joy and merriment to their diners."  
`;
const inners = [
  "  源於匠心始於原肉，直火對決分秒必爭",
  "  源自華人的聚餐文化",
  "  樂於分享、活潑好客、親切歡樂",
  "  來到伍玖，不僅僅是品味佳餚",
  "  而是體會來自台灣的燒肉風情",
  "  我們貫徹帶有溫度的服務",
  "  我們堅持獨具匠心的選品",
  "  我們講究刀刀精準的工法",
  "  一口肉，一杯酒",
];
const inners_zh = [
  " 源于匠心始于原肉，直火对决分秒必争",
  " 源自华人的聚餐文化",
  " 乐于分享、活泼好客、亲切欢乐",
  " 来到伍玖，不仅仅是品味佳肴",
  " 而是体会来自台湾的烧肉风情",
  " 我们贯彻带有温度的服务",
  " 我们坚持独具匠心的选品",
  " 我们讲究刀刀精准的工法",
  " 一口肉，一杯酒",
];
</script>

<template>
  <div :class="$style.container">
    <div v-if="language === 'zh' || language === 'hant'" :class="$style.left">
      <div :class="$style.title">
        <Title>{{ $t("web.title2") }}</Title>
      </div>
      <div :class="$style.inner_wrap">
        <div
          :key="value"
          v-for="value in i18n.locale.value == 'hant' ? inners : inners_zh"
          :class="$style.menu_item"
        >
          {{ value }}
        </div>
      </div>
      <!-- <div :class="$style.learn">{{ $t("web.more") }}</div> -->
      <img :class="$style.bg" src="/other/bg_03.jpg" alt="" />
    </div>
    <div v-else :class="$style.left">
      <div :class="$style.right_en">
        <div :class="$style.title2">About Wu Jiu</div>
        <div :class="$style.inner_wrap">
          {{ text2 }}
        </div>
        <!-- <div :class="$style.learn_en">Learn more</div> -->
      </div>
      <img :class="$style.bg" src="/other/bg_03.jpg" alt="" />
    </div>
    <div :class="$style.right">
      <swiper
        effect="fade"
        :speed="2000"
        :autoplay="{
          delay: 2000,
          disableOnInteraction: false,
        }"
        loop
        centeredSlides
        :pagination="pagination"
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
  width: 960ppx;
  height: 100vh;
  object-fit: cover;
}
.container {
  width: 1920ppx;
  height: 100vh;
  display: flex;
  .left {
    width: 50%;
    .right_en {
      position: relative;
      display: flex;
      flex-direction: column;
      .learn_en {
        width: 204ppx;
        height: 46ppx;
        background: #ed1c24;
        position: absolute;
        left: 190ppx;
        top: 766ppx;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        color: #ffffff;
      }
      .title2 {
        position: absolute;
        left: 190ppx;
        top: 204ppx;

        margin: 0 auto;
        line-height: 42ppx;
        font-size: 36ppx;
        word-wrap: break-word;
      }
      .inner_wrap {
        width: 580ppx;
        height: 480ppx;
        position: absolute;
        left: 190ppx;
        top: 322ppx;
        white-space: pre-wrap;
        line-height: 28ppx;
        font-size: 15ppx;
      }
    }
    .inner_wrap {
      position: absolute;
      top: 184ppx;
      left: 418ppx;
      display: flex;
      width: 312ppx;
      height: 720ppx;
      .menu_item {
        font-family: myFirstFont;
        width: 39ppx;
        margin: 0 auto;
        line-height: 30ppx;
        font-size: 20ppx;
        word-wrap: break-word;
      }
    }
    .learn {
      color: #ffffff;
      width: 172ppx;
      height: 46ppx;
      background: #ed1c24;
      position: absolute;
      top: 973ppx;
      left: 360ppx;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
    }

    .title {
      position: absolute;
      left: 238ppx;
      top: 130ppx;
    }
    .bg {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .right {
    width: 50%;
    position: relative;
    .swiper {
      height: 100vh;
      :global {
        .swiper-pagination {
          text-align: left;
          bottom: 40ppx;
          box-sizing: border-box;
          padding-left: 40ppx;
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
