<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import { useI18n } from "vue-i18n";
// Import Swiper styles
import "swiper/css";

import "swiper/css/free-mode";
import "swiper/css/pagination";
// import required modules
import { FreeMode, Pagination, Autoplay } from "swiper";
const route = useRoute();
const language = route.params.language;

const i18n = useI18n();

const inners = [
  " 源自華人的聚餐文化",
  " 樂於分享、活潑好客、親切歡樂",
  " 來到伍玖，不僅僅是品味佳餚",
  " 而是體會來自台灣的燒肉風情",
  " 我們貫徹帶有溫度的服務",
  " 我們堅持獨具匠心的選品",
  " 我們講究刀刀精準的工法",
  " 一口肉，一杯酒",
];
const inners_zh = [
  " 源自华人的聚餐文化",
  " 乐于分享、活泼好客、亲切欢乐",
  " 来到伍玖，不仅仅是品味佳肴",
  " 而是体会来自台湾的烧肉风情",
  " 我们贯彻带有温度的服务",
  " 我们坚持独具匠心的选品",
  " 我们讲究刀刀精准的工法",
  " 一口肉，一杯酒",
];
const inners2 = [
  {
    name: "匠心工藝",
    texts: [
      "揭開聲色香味展演",
      "極致烘烤工法",
      "著用前半部肉質細膩絕美油花",
      "細拆肉品部位",
    ],
  },
  {
    name: "賓至如歸",
    texts: [
      "融入品味生活的時光",
      "如同在家用餐情景",
      "蘊含溫婉人情味服務",
      "近距離桌邊互動",
    ],
  },
  {
    name: "數據思維",
    texts: [
      "賦予星級美味生命",
      "重新定義和牛珍饌",
      "嚴守頂級品質絕不妥協",
      "細拆肉品部位",
    ],
  },
];
const inners_hant = [
  {
    name: "匠心工艺",
    texts: [
      "揭开声色香味展演",
      "极致烘烤工法",
      "著用前半部肉质细腻绝美油花",
      "细拆肉品部位",
    ],
  },
  {
    name: "宾至如归",
    texts: [
      "融入品味生活的时光",
      "如同在家用餐情景",
      "蕴含温婉人情味服务",
      "近距离桌边互动",
    ],
  },
  {
    name: "数据思维",
    texts: [
      "赋予星级美味生命",
      "重新定义和牛珍馔",
      "严守顶级品质绝不妥协",
      "细拆肉品部位",
    ],
  },
];
</script>

<template>
  <div :class="$style.container">
    <div :class="$style.bg">
      <img :class="$style.bg_img" src="/mobile/bg/关于.jpg" alt="" />

      <div
        v-if="language === 'zh' || language === 'hant'"
        :class="$style.right_wrap"
      >
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
      <div v-else :class="$style.en_wrap">
        {{
          `59 Hutong Yakiniku is a brand that marries the delectable experience of Yakiniku with warm Taiwanese service. The term “59”, a play on the Hokkien slang “Wu Jiu Wu Jio (五酒五揪)” which is loosely translated as “I’ll see you where there’s alcohol”, is a fun representation of the restaurant brand's mission to bring warmth, joy and merriment to their diners.
  `
        }}
      </div>
      <div v-if="language === 'zh' || language === 'hant'" :class="$style.one">
        {{ $t("web.aboutTitle") }}
      </div>
      <div v-else :class="$style.en_wrap2">
        <!-- {{
          `
Originating from ingenuity and original meat, the direct fire fight 
is a race against time.
  `
        }} -->
      </div>
    </div>

    <div :class="$style.des">
      <img :class="$style.des_img" src="/mobile/bg/关于-2.jpg" alt="" />
      <div
        v-if="language === 'zh' || language === 'hant'"
        :class="$style.center"
      >
        <swiper
          :autoplay="{
            delay: 1000,
            disableOnInteraction: false,
          }"
          :speed="3000"
          loop
          :slidesPerView="1.8"
          :spaceBetween="10"
          :freeMode="true"
          :modules="[FreeMode, Pagination, Autoplay]"
          class="mySwiper"
        >
          <swiper-slide
            v-for="value in i18n.locale.value === 'hant'
              ? inners2
              : inners_hant"
          >
            <div :class="$style.show_hover">
              <div :class="$style.left">
                <div
                  v-for="item in value.texts.slice().reverse()"
                  :class="$style.menu_item"
                >
                  {{ item }}
                </div>
              </div>
              <div :class="$style.right">{{ value.name }}</div>
            </div>
          </swiper-slide>
        </swiper>
      </div>
      <div v-else :class="$style.center">
        <swiper
          :autoplay="{
            delay: 1000,
            disableOnInteraction: false,
          }"
          :speed="3000"
          loop
          :slidesPerView="1.8"
          :spaceBetween="10"
          :freeMode="true"
          :modules="[FreeMode, Pagination, Autoplay]"
          class="mySwiper"
        >
          <swiper-slide>
            <div :class="$style.item">
              <span :class="$style.title">Craftsmanship</span>
              <span :class="$style.line"></span>
              <span :class="$style.des_2">
                {{
                  `Carefully disassemble meat parts
The first half of the meat is delicate and 
beautiful with oily flowers
Extreme baking method
Unveil the sound, color, fragrance and 
performance`
                }}
              </span>
            </div>
          </swiper-slide>

          <swiper-slide>
            <div :class="$style.item">
              <span :class="$style.title">Feel at home</span>
              <span :class="$style.line"></span>
              <span :class="$style.des_2">
                {{
                  `Close desk interaction
Service with gentle humanity
It's like eating at home
A time to enjoy life`
                }}
              </span>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div :class="$style.item">
              <span :class="$style.title">Data thinking</span>
              <span :class="$style.line"></span>
              <span :class="$style.des_2">
                {{
                  `Accurate and scientific analysis
Strictly adhere to top quality and 
never compromise
Redefine and beef delicacies
Give star delicious life`
                }}
              </span>
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </div>
    <div :class="$style.footer">
      <NuxtLink :class="$style.foot_logo" :to="`/${$route.params.language}/`">
        <img src="/logo/logo_mb.png" alt="logo" />
      </NuxtLink>
      <div :class="$style.contact">
        <div>{{ $t("address") }}：35 BOAT QUAY, SINGAPORE 049824</div>
        <div>{{ $t("telephone") }}：6235 3818</div>
        <div>{{ $t("mailbox") }}：CONTACT@59.COM</div>
      </div>
    </div>
  </div>
</template>

<style module lang="less">
.container {
  .bg {
    position: relative;
    width: 100vw;
    height: 100vh;
    .bg_img {
      width: 100%;
      height: 100%;
      vertical-align: middle;
    }

    .right_wrap {
      position: absolute;
      left: 168mpx;
      top: 362mpx;
      display: flex;
      //   margin-left: 161mpx;
      // width: 210mpx;
      //   height: 600mpx;
      .menu_item {
        color: #ffffff;
        width: 32mpx;
        margin: 0 3px;
        line-height: 30mpx;
        font-size: 20mpx;
        word-wrap: break-word;
        font-family: myFirstFont;
      }
    }
    .one {
      position: absolute;
      right: 167mpx;
      top: 360mpx;
      color: #ffffff;
      width: 39mpx;
      margin: 0 auto;
      line-height: 30mpx;
      font-size: 20mpx;
      word-wrap: break-word;
      font-family: myFirstFont;
    }
    .en_wrap {
      position: absolute;
      left: 100mpx;
      top: 291mpx;
      width: 580mpx;
      height: 360mpx;
      font-size: 26mpx;
      font-family: myFirstFont;
      color: #ffffff;
      line-height: 40mpx;
      white-space: pre-wrap;
    }
    .en_wrap2 {
      position: absolute;
      left: 100mpx;
      top: 804mpx;
      width: 580mpx;
      height: 360mpx;
      font-size: 15mpx;
      font-family: myFirstFont;
      color: #ffffff;
      line-height: 40mpx;
      white-space: pre-wrap;
    }
  }
  .des {
    position: relative;
    width: 100vw;
    height: 100vh;
    .des_img {
      width: 100%;
      height: 100%;
      vertical-align: middle;
    }
    .center {
      width: 100%;
      position: absolute;
      left: 0mpx;
      top: 40%;
      display: flex;
      box-sizing: border-box;
      justify-content: space-between;
      .show_hover {
        box-sizing: border-box;

        width: 220mpx;

        display: flex;

        .left {
          display: flex;

          width: 210mpx;
          height: 500mpx;
          border-right: 2mpx solid #ffffff;
          box-sizing: border-box;
          padding-right: 24mpx;
          margin-right: 48mpx;

          .menu_item {
            color: #ffffff;
            width: 30mpx;
            margin: 0 3px;
            line-height: 30mpx;
            font-size: 20mpx;
            word-wrap: break-word;
            font-family: myFirstFont;
          }
        }
        .right {
          align-self: start;
          color: #ffffff;
          width: 37mpx;
          // margin: 0 auto;
          line-height: 54mpx;
          font-size: 36mpx;
          word-wrap: break-word;
          font-family: myFirstFont;
        }
      }
      .item {
        width: 471mpx;
        display: flex;
        flex-direction: column;
        // justify-content: center;
        align-items: center;
        .title {
          font-size: 36mpx;
          font-family: myFirstFont;
          font-weight: 400;
          color: #ffffff;
        }
        .line {
          width: 218mpx;
          height: 2mpx;
          background-color: #ffffff;
          margin: 64mpx 0 56mpx 0;
        }
        .des_2 {
          width: 400mpx;
          font-size: 20mpx;
          font-family: myFirstFont;
          font-weight: 400;
          color: #ffffff;
          line-height: 40mpx;
          text-align: center;
          white-space: pre-wrap;
        }
      }
    }
  }
  .footer {
    display: flex;
    justify-content: center;
    flex-direction: column;

    background: #030002;

    padding: 56mpx 0 40mpx 0;

    .contact {
      display: flex;
      flex-direction: column;
      div {
        text-align: center;
        line-height: 28mpx;
        font-size: 24mpx;
        color: #ffffff;
        letter-spacing: 4mpx;
        margin-bottom: 10mpx;
      }
    }
    .foot_logo {
      margin: 0 auto;
      margin-bottom: 20mpx;
      img {
        display: block;
        width: 304mpx;
        height: 86mpx;
      }
    }
  }
}
</style>
