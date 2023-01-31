<script setup lang="ts">
import { Mousewheel } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";

</script>

<template>
  <div :class="$style.wrap">
    <swiper
      :speed="1600"
      :direction="'vertical'"
      :slidesPerView="1"
      :spaceBetween="30"
      mousewheel
      :pagination="{
        clickable: true,
      }"
      :modules="[Mousewheel]"
      :class="$style.mySwiper"
    >
      <swiper-slide>
        <ShopFirst />
      </swiper-slide>
      <swiper-slide>
        <ShopSecond />
      </swiper-slide>
      <swiper-slide>
        <ShopThird />
      </swiper-slide>
      <swiper-slide>
        <ShopFour />
      </swiper-slide>
      <swiper-slide><Six /></swiper-slide>
    </swiper>
  </div>
</template>

<style module lang="less">
.wrap {
  width: 100vw;
  height: 100vh;

  .mySwiper {
    width: 100vw;
    height: 100vh;
    .swiper-slide {
      text-align: center;
      font-size: 18ppx;
      background: #fff;

      /* Center slide text vertically */
      display: -webkit-box;
      display: -ms-flexbox;
      display: -webkit-flex;
      display: flex;
      -webkit-box-pack: center;
      -ms-flex-pack: center;
      -webkit-justify-content: center;
      justify-content: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      -webkit-align-items: center;
      align-items: center;
    }
  }
}
</style>
