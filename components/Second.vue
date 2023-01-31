<script setup lang="ts">
import { EffectFade, Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css/effect-fade";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/virtual";
import Title from "./Title.vue";
import { useI18n } from "vue-i18n";
import {
  menusen,
  menus,
  swiperImgs,
  texts,
  enTexts,
  menus_hant,
  texts_hant,
} from "~~/constants/secondList";

const i18n = useI18n();
const route = useRoute();
const activeIndex = ref(1);
const language = route.params.language;
let swiperRef: any;
const data = reactive({
  swiperIndex: 1,
});

const onSwiper = (swiper) => {
  swiperRef = toRaw(swiper);
};

const pagination = {
  clickable: true,
  renderBullet: function (index, className) {
    return `<span class="${className} custom_bullet"></span>`;
  },
};
const onMouseEnter = () => {
  swiperRef.autoplay.stop();
};

const onMouseLeave = () => {
  swiperRef.autoplay.start();
};

const changeList = (value) => {
  activeIndex.value = value;
  data.swiperIndex = value;
  swiperRef.autoplay.run();
};

console.log(0, menusen);
</script>

<template>
  <div :class="$style.bageImgr">
    <CenterContent>
      <div
        v-if="language === 'zh' || language === 'hant'"
        :class="$style.container"
      >
        <div :class="$style.title">
          <Title>{{ $t("web.title") }}</Title>
        </div>

        <div :class="$style.top">
          <div
            @click="changeList(i.id)"
            :class="$style.menu_item"
            v-for="i in i18n.locale.value === 'hant' ? menus : menus_hant"
            :key="i.id"
          >
            <img
              v-if="i.id === activeIndex"
              :class="$style.reddot"
              src="/second/reddot.png"
              alt=""
            />
            {{ i.name }}
          </div>
        </div>

        <div :class="$style.bottom">
          <div :class="$style.left_swiper_wrap">
            <swiper
              effect="fade"
              :speed="2000"
              :autoplay="{
                delay: 2500,
                disableOnInteraction: false,
              }"
              loop
              centeredSlides
              :pagination="pagination"
              :modules="[Pagination, Autoplay, EffectFade]"
              :class="$style.swiper"
              :key="data.swiperIndex"
              :data-key="data.swiperIndex"
              @swiper="onSwiper"
            >
              <SwiperSlide
                v-for="i in swiperImgs[data.swiperIndex - 1]"
                :key="i.source"
              >
                <div :class="$style.item_wrap">
                  <img :class="$style.imgCss" :src="i.source" />
                  <span :class="$style.text" v-if="!i.isList">{{
                    i18n.locale.value !== "hant" ? i.name : i.name_hant
                  }}</span>
                  <div
                    v-else-if="i18n.locale.value !== 'hant'"
                    :class="$style.textBox"
                  >
                    <span :class="$style.text" v-for="n in i.name">{{
                      n
                    }}</span>
                  </div>
                  <div v-else :class="$style.textBox">
                    <span :class="$style.text" v-for="n in i.name_hant">{{
                      n
                    }}</span>
                  </div>
                </div>
              </SwiperSlide>
            </swiper>
          </div>
          <div
            v-for="value in i18n.locale.value !== 'hant'
              ? texts[data.swiperIndex - 1]
              : texts_hant[data.swiperIndex - 1]"
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
      </div>
      <div v-else :class="$style.container2">
        <div :class="$style.menu_list">
          <swiper
            :speed="3000"
            loopFillGroupWithBlank
            normalizeSlideIndex
            :slidesPerView="9"
            :spaceBetween="32"
            :modules="[Pagination, Autoplay]"
            class="mySwiper"
          >
            <swiper-slide :key="i.id" v-for="i in menusen">
              <div
                @click="changeList(i.id)"
                :class="[
                  $style.vetText,
                  activeIndex === i.id ? $style.active : '',
                ]"
              >
                {{ i.name }}
              </div>
            </swiper-slide>
          </swiper>
        </div>

        <div :class="$style.bottom">
          <div :class="$style.left_swiper_wrap">
            <swiper
              :speed="2000"
              effect="fade"
              :autoplay="{
                delay: 2500,
                disableOnInteraction: false,
              }"
              loop
              centeredSlides
              :pagination="pagination"
              :modules="[Pagination, Autoplay, EffectFade]"
              :class="$style.swiper"
              :key="data.swiperIndex"
              :data-key="data.swiperIndex"
              @swiper="onSwiper"
              @mouseenter="onMouseEnter"
              @mouseleave="onMouseLeave"
            >
              <SwiperSlide
                v-for="i in swiperImgs[data.swiperIndex - 1]"
                :key="i.id"
              >
                <div :class="$style.item_wrap">
                  <img :class="$style.imgCss" :src="i.source" />
                  <span :class="[$style.text]">{{ i.enname }}</span>
                </div>
              </SwiperSlide>
            </swiper>
          </div>
          <div
            v-for="i in enTexts[data.swiperIndex - 1]"
            :class="$style.right_wrap"
          >
            {{ i.text }}
          </div>
        </div>
      </div>
    </CenterContent>
  </div>
</template>

<style module lang="less">
.bageImgr {
  position: relative;
  width: 100vw;
  height: 100vh;
  background: url("/second/manybg.png");
}
.container {
  position: relative;
  background: url("/second/manybg.png");
  box-sizing: border-box;
  padding-top: 116px;
  padding-bottom: 109px;
  width: 1920px;
  height: 1080px;
  background-color: #efefef;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .item_wrap {
    position: relative;
    .imgCss {
      width: 1200px;
      height: 600px;
    }
    .text {
      width: 15px;
      margin: 0 auto;
      line-height: 52px;
      font-size: 36px;
      word-wrap: break-word;
      position: absolute;
      right: 80px;
      top: 40px;
      font-family: myFirstFont;
      color: #ffffff;
    }
  }
  .title {
    position: absolute;
    right: 160px;
    top: 154px;
  }
  .right_wrap {
    display: flex;
    margin-left: 161px;
    width: 210px;
    height: 600px;
    .menu_item {
      color: #333333;
      width: 15px;
      margin: 0 auto;
      line-height: 30px;
      font-size: 20px;
      word-wrap: break-word;
      font-family: myFirstFont;
    }
  }
  .top {
    margin: 0 auto;
    margin-top: 100px;
    width: 1080px;
    display: flex;
    justify-content: space-between;
    .menu_item {
      width: 15px;
      margin: 0 auto;
      line-height: 24px;
      font-size: 20px;
      word-wrap: break-word;
      position: relative;
      cursor: pointer;
      .reddot {
        width: 38px;
        height: 38px;
        position: absolute;
        top: -40px;
        left: -10px;
      }
      &:hover {
        color: #ed1c24;
      }
    }
  }
  .bottom {
    display: flex;
    .left_swiper_wrap {
      position: relative;
      background-color: rgb(9, 10, 10);
      width: 1200px;
      height: 600px;

      overflow: hidden;
      .swiper {
        :global {
          .swiper-pagination {
            text-align: right;
            box-sizing: border-box;
            padding-right: 40px;
            bottom: 40px;
          }
          .swiper-pagination-bullet {
            opacity: 1;
            transition: all ease-in-out 0.6s;
          }
        }
      }
    }
    .right_wrap {
      display: flex;
      margin-left: 94px;
      width: 210px;
      height: 600px;
      .menu_item {
        color: #333333;
        width: 15px;
        margin: 0 auto;
        line-height: 30px;
        font-size: 20px;
        word-wrap: break-word;
        font-family: myFirstFont;
      }
    }
  }
}
.container2 {
  position: relative;
  background: url("/second/manybg.png");
  box-sizing: border-box;
  padding-top: 120px;
  padding-bottom: 109px;
  width: 1920px;
  height: 1080px;
  background-color: #efefef;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .item_wrap {
    position: relative;
    .imgCss {
      width: 1200px;
      height: 600px;
    }
    .text {
      line-height: 52px;
      font-size: 36px;
      word-wrap: break-word;
      position: absolute;
      right: 40px;
      top: 40px;
      font-family: myFirstFont;
      color: #ffffff;
    }
  }
  .right_menu_list {
    width: 300px;
    height: 904px;
    position: absolute;
    top: 120px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .menu_item {
      line-height: 40px;
      font-size: 28px;
      cursor: pointer;
      &:hover {
      }
    }
    .color {
      color: #ed1c24;
    }
  }
  .des_en {
    //  background-color: #ed1c24;
    position: absolute;
    left: 190px;
    top: 120px;
    width: 1002px;
    height: 280px;
    font-size: 20px;
    font-family: myFirstFont;
    font-weight: 500;
    color: #333333;
    line-height: 40px;
    white-space: pre-line;
    // word-spacing: 2rem;
    //  background-color: red;
  }
  .menu_list {
    margin-top: 30px;
  }
  .bottom {
    display: flex;
    .left_swiper_wrap {
      position: relative;
      background-color: rgb(9, 10, 10);
      width: 1200px;
      height: 600px;

      overflow: hidden;
      .swiper {
        :global {
          .swiper-pagination {
            text-align: right;
            box-sizing: border-box;
            padding-right: 40px;
            bottom: 40px;
          }
          .swiper-pagination-bullet {
            opacity: 1;
            transition: all ease-in-out 0.6s;
          }
        }
      }
    }
    .right_wrap {
      display: flex;
      margin-left: 161px;
      width: 506px;
      height: 400px;
      font-size: 20px;
      font-family: myFirstFont;
      font-weight: 500;
      color: #333333;
      line-height: 40px;
    }
  }

  .left_swiper_wrap {
    position: absolute;
    bottom: 0px;
    left: 0px;
    background-color: rgb(9, 10, 10);
    width: 1200px;
    height: 600px;
    margin-bottom: 50px;
    overflow: hidden;
    .swiper {
      :global {
        .swiper-pagination {
          text-align: right;
          bottom: 40px;
          box-sizing: border-box;
          padding-right: 40px;
        }
        .swiper-pagination-bullet {
          opacity: 1;
          transition: all ease-in-out 0.6s;
        }
      }
    }
  }
  .vetText {
    font-size: 28px;
    font-family: myFirstFont;
    font-weight: 500;
    color: #333333;
    line-height: 40px;
  }
  .active {
    color: #ed1c24;
  }
  :global {
    .swiper {
      width: 100vw;
    }
  }
}

.item_wrap {
  .textBox {
    .text:nth-of-type(2) {
      margin-right: 50px;
      margin-top: 100px;
    }
  }
}
</style>
