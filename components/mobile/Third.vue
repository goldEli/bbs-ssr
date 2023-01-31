<script setup lang="ts">
import { EffectFade, Pagination, Navigation, Autoplay, FreeMode } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import {
  DishesList,
  menus,
  EnMenus,
  menus_hant,
} from "~~/constants/dishesList";
const route = useRoute();
const language = route.params.language;
const activeIndex = ref(1);
let visibleState = ref<any>(false);
const changeList = (value) => {
  activeIndex.value = value;
  visibleState.value = !visibleState.value;
};
import { useI18n } from "vue-i18n";
const i18n = useI18n();
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
      :autoplay="{
        delay: 2500,
        disableOnInteraction: false,
      }"
      loop
      :class="$style.swiper"
      :slidesPerView="1"
      centeredSlides
      :modules="[Pagination, Navigation, Autoplay, EffectFade]"
    >
      <SwiperSlide
        v-for="i in DishesList[Number(activeIndex - 1) || 0]"
        :key="i.source"
      >
        <div @click="visibleState = !visibleState" :class="$style.item_wrap">
          <div
            :class="[
              $style.show_hover,
              visibleState && (language === 'zh' || language === 'hant')
                ? $style.show
                : $style.hide,
            ]"
          >
            <div :class="$style.left">
              <div
                :class="$style.menu_item"
                v-for="value in i18n.locale.value !== 'hant'
                  ? i.des.slice().reverse()
                  : i.des_hant.slice().reverse()"
              >
                {{ value }}
              </div>
            </div>
            <div :class="$style.right">
              {{ i18n.locale.value !== "hant" ? i.name : i.name_hant }}
            </div>
          </div>
          <div v-if="visibleState && language === 'en'" :class="$style.item">
            <span :class="$style.title">{{ i.enname }}</span>
            <span :class="$style.line"></span>
            <span :class="$style.des">
              {{ i?.endes }}
            </span>
          </div>
          <div
            :class="$style.textBanner"
            v-if="(language === 'zh' || language === 'hant') && !visibleState"
          >
            {{ i18n.locale.value !== "hant" ? i.name : i.name_hant }}
          </div>
          <div
            :class="$style.textBanner_en"
            v-else-if="language === 'en' && !visibleState"
          >
            {{ i.enname }}
          </div>

          <img :class="$style.imgCss" :src="i.source" alt="" />
        </div>
      </SwiperSlide>
    </Swiper>
    <div
      v-if="!visibleState && (language === 'zh' || language === 'hant')"
      :class="$style.top"
    >
      <div :class="$style.wrap">
        <swiper
          loop
          :speed="3000"
          :autoplay="{
            delay: 500,
            disableOnInteraction: false,
          }"
          :slidesPerView="9"
          :spaceBetween="10"
          :freeMode="true"
          :modules="[FreeMode, Pagination, Autoplay]"
          class="mySwiper"
        >
          <swiper-slide
            :key="value.id"
            v-for="value in i18n.locale.value == 'hant' ? menus : menus_hant"
          >
            <div
              @click="changeList(value.id)"
              :class="[
                $style.vetText,
                activeIndex === value.id ? $style.active : '',
              ]"
            >
              {{ value.name }}
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </div>
    <div v-if="!visibleState && language === 'en'" :class="$style.top">
      <div :class="$style.wrap">
        <swiper
          :speed="3000"
          :autoplay="{
            delay: 1500,
            disableOnInteraction: false,
          }"
          loop
          :slidesPerView="3"
          :spaceBetween="10"
          :freeMode="true"
          :modules="[FreeMode, Pagination, Autoplay]"
          class="mySwiper"
        >
          <swiper-slide :key="value.id" v-for="value in EnMenus">
            <div
              @click.self="changeList(value.id)"
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
    </div>
  </div>
</template>

<style module lang="less">
.container {
  position: relative;
  width: 100vw;
  height: 100vh;
  :global {
    .swiper-slide-active {
      opacity: 1 !important;
    }
  }
  .imgCss {
    width: 100vw;
    height: 100vh;
  }
  .item_wrap {
    position: relative;
    .show {
      opacity: 1;
      transition: opacity 1s;
    }
    .hide {
      opacity: 0;
      transition: opacity 1s;
    }

    .show_hover {
      box-sizing: border-box;
      padding-top: 305mpx;
      position: absolute;
      left: 0px;
      top: 0px;

      width: 100vw;
      height: 100vh;
      background: rgba(7, 5, 8, 0.5);
      display: flex;
      //   justify-content: center;

      .left {
        display: flex;
        margin-left: 200mpx;
        // width: 210mpx;
        height: 550mpx;
        border-right: 2mpx solid #ffffff;
        box-sizing: border-box;
        padding-right: 48mpx;
        margin-right: 48mpx;

        .menu_item {
          color: #ffffff;
          width: 30mpx;
          margin: 0 3px;
          line-height: 39mpx;
          font-size: 26mpx;
          word-wrap: break-word;
          font-family: myFirstFont;
          cursor: pointer;
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
      width: 100vw;
      height: 100vh;
      box-sizing: border-box;
      justify-content: center;
      position: absolute;
      left: 0;
      top: 0;
      background: rgba(7, 5, 8, 0.2);
      display: flex;
      flex-direction: column;

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
      .des {
        width: 400mpx;
        font-size: 28mpx;
        font-family: myFirstFont;
        font-weight: 400;
        color: #ffffff;
        line-height: 40mpx;
        text-align: center;
        white-space: pre-line;
        word-wrap: break-word;
      }
    }
    .textBanner {
      position: absolute;
      right: 40mpx;
      top: 236mpx;
      width: 37mpx;
      font-size: 36mpx;
      font-weight: 400;
      color: #ffffff;
      line-height: 54mpx;
    }
    .textBanner_en {
      position: absolute;
      left: 50%;
      top: 236mpx;
      transform: translate(-50%);
      width: 100vw;
      font-size: 36mpx;
      font-weight: 400;
      color: #ffffff;
      line-height: 54mpx;
      text-align: center;
    }
  }
  .top {
    position: absolute;
    bottom: 0px;
    top: 0px;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.1);
    z-index: 999;
    display: flex;
    flex-direction: column-reverse;
    box-sizing: border-box;
    padding: 0 10px;

    .wrap {
      backdrop-filter: blur(3px);
      // background: rgba(0, 0, 0, 0.6);
      margin-bottom: 64mpx;
      .vetText {
        width: 24mpx;
        font-size: 32mpx;
        font-weight: 500;
        color: #ffffff;
        line-height: 46mpx;
        &.active {
          color: #ed1c24;
        }
      }
      .vetText_2 {
        font-size: 32mpx;
        font-weight: 500;
        color: #ffffff;
        text-align: center;
        cursor: pointer;
        &.active {
          color: #ed1c24;
        }
      }
    }
  }
}
</style>
