<script setup lang="ts">
import { EffectFade, Pagination, Navigation, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css/effect-fade";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { DishesList } from "~~/constants/dishesList";
import { useI18n } from "vue-i18n";
const i18n = useI18n();
const renderCustom = (swiper: any, current: number, total: number) => {
  let customPaginationHtml = "";
  for (let i = 0; i < total; i++) {
    if (i === current - 1) {
      customPaginationHtml += `<span  class="page" index="${i}" ></span>`;
    } else {
      customPaginationHtml += `<span class="page2" index="${i}" ></span>`;
    }
  }
  return customPaginationHtml;
};

const route = useRoute();
const language = route.params.language;
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
      :speed="1000"
      :autoplay="{
        delay: 2500,
        disableOnInteraction: false,
      }"
      loop
      :class="$style.swiper"
      :slidesPerView="3"
      centeredSlides
      :pagination="pagination"
      navigation
      :modules="[Pagination, Navigation, Autoplay, EffectFade]"
    >
      <SwiperSlide
        v-for="i in DishesList[Number($route.query.dishes - 1) || 0]"
        :key="i.source"
      >
        <div :class="$style.item_wrap">
          <!-- <div
            v-if="
              (i.des.length > 1 && language === 'zh') || language === 'hant'
            "
            :class="$style.show_hover"
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
          <div v-else :class="$style.item"> 
            <span v-if="i.des.length > 1" :class="$style.title">{{
              i.enname
            }}</span>
            <span v-if="i.des.length > 1" :class="$style.line"></span>
            <span v-if="i.des.length > 1" :class="$style.des">
              {{ i?.endes }}
            </span>
          </div>-->
          <img :class="$style.imgCss" :src="i.source" alt="" />
          <span
            v-if="language === 'zh' || language === 'hant'"
            :class="$style.text"
          >
            {{ i18n.locale.value !== "hant" ? i.name : i.name_hant }}
          </span>
          <span v-else :class="$style.text2">
            {{ i.enname }}
          </span>
        </div>
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<style module lang="less">
.swiper {
  width: 100vw;
  height: 100vh;
  :global {
    .swiper-button-prev {
      z-index: 99;
      position: absolute;
      left: 0;
      top: 50%;
      transform: translate(0, -50%);
      width: 50ppx;
      height: 250ppx;
      background: url(/third/next.png) center / contain;
      &::after {
        display: none;
      }
    }
    .swiper-button-next {
      z-index: 99;
      position: absolute;
      right: 0;
      top: 50%;
      transform: translate(0, -50%);
      width: 50ppx;
      height: 250ppx;
      background: url(/third/prev.png) center / contain;
      &::after {
        display: none;
      }
    }
    .swiper-pagination-bullet {
      opacity: 1;
      transition: all ease-in-out 0.6s;
    }
    .swiper-pagination {
      bottom: 40ppx;
    }
  }
}
.item_wrap {
  position: relative;
  &:hover .show_hover {
    opacity: 1;
    background: rgba(7, 5, 8, 0.6);
    transition: all 1s;
  }
  &:hover .item {
    opacity: 1;
    transition: all 1s;
  }
  &:hover .text {
    // opacity: 0;
    // transition: all 1s;
  }
  &:hover .text2 {
    opacity: 0;
  }
  .show_hover {
    box-sizing: border-box;
    padding-top: 250ppx;
    opacity: 0;
    // transition: all 1s;
    position: absolute;
    left: 0;
    top: 0;
    width: 640ppx;
    height: 100vh;
    background: none;
    display: flex;

    .left {
      display: flex;
      margin-left: 161ppx;
      width: 210ppx;
      height: 500ppx;
      border-right: 2ppx solid #ffffff;
      box-sizing: border-box;
      padding-right: 24ppx;
      margin-right: 24ppx;

      .menu_item {
        color: #ffffff;
        width: 20ppx;
        margin: 0 auto;
        line-height: 30ppx;
        font-size: 20ppx;
        word-wrap: break-word;
        font-family: myFirstFont;
      }
    }
    .right {
      align-self: start;
      color: #ffffff;
      width: 37ppx;
      // margin: 0 auto;
      line-height: 54ppx;
      font-size: 36ppx;
      word-wrap: break-word;
      font-family: myFirstFont;
    }
  }
  .item {
    box-sizing: border-box;
    padding-top: 280ppx;
    opacity: 0;
    transition: all 1s;
    position: absolute;
    left: 0;
    top: 0;
    width: 471ppx;
    width: 640ppx;
    height: 100vh;
    background: rgba(7, 5, 8, 0.6);
    display: flex;
    flex-direction: column;
    // justify-content: center;
    align-items: center;
    .title {
      font-size: 36ppx;
      font-family: myFirstFont;
      font-weight: 400;
      color: #ffffff;
      text-align: center;
    }
    .line {
      width: 218ppx;
      height: 2ppx;
      background-color: #ffffff;
      margin: 64ppx 0 16ppx 0;
    }
    .des {
      width: 400ppx;
      font-size: 20ppx;
      font-family: myFirstFont;
      font-weight: 400;
      color: #ffffff;
      line-height: 40ppx;
      text-align: center;
      white-space: pre-line;
      word-wrap: break-word;
    }
  }
  .imgCss {
    width: 640ppx;
    height: 100vh;
    object-fit: cover;
  }
  .text {
    width: 15ppx;
    margin: 0 auto;
    line-height: 52ppx;
    font-size: 36ppx;
    word-wrap: break-word;
    position: absolute;
    right: 80ppx;
    bottom: 40ppx;
    font-family: myFirstFont;
    color: #ffffff;
    opacity: 1;
    transition: all 1s;
  }
  .text2 {
    // background-color: #ed1c24;
    margin: 0 auto;
    line-height: 52ppx;
    font-size: 36ppx;
    word-wrap: break-word;
    position: absolute;
    left: 50%;
    text-align: center;
    transform: translate(-50%);
    bottom: 80ppx;
    font-family: myFirstFont;
    color: #ffffff;
  }
}

.container {
  position: relative;
  width: 100vw;
  height: 100vh;
  .swiper_button_next2 {
    z-index: 99;
    position: absolute;
    right: 0;
    width: 50ppx;
    height: 250ppx;
    top: 50%;
    transform: translate(0, -50%);

    img {
      width: 50ppx;
      height: 250ppx;
    }
  }

  .swiper_button_prev2 {
    z-index: 99;
    width: 50ppx;
    height: 250ppx;
    position: absolute;
    left: 0;
    top: 50%;
    transform: translate(0, -50%);

    img {
      width: 50ppx;
      height: 250ppx;
    }
  }
  .swiper_pagination {
    position: absolute;
    right: 22%;
    bottom: 5%;
    display: flex;
    justify-content: center;
    z-index: 10;
    :global {
      .page2 {
        width: 10ppx;
        height: 10ppx;
        background: #ffffff;
        border-radius: 24ppx 24ppx 24ppx 24ppx;
        margin: 0 10ppx;
      }
      .page {
        width: 48ppx;
        height: 10ppx;
        background: #ed1c24;
        border-radius: 24ppx 24ppx 24ppx 24ppx;
      }
    }
  }
}
</style>
