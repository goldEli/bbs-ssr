<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import { Mousewheel } from "swiper";
import "swiper/css";

</script>

<template>
  <div :class="$style.wrap">
    <Swiper
      mousewheel
      direction="vertical"
      :initial-slide="0"
      :modules="[Mousewheel]"
      :class="$style.mySwiper"
    >
      <swiper-slide><Third /></swiper-slide>
    </Swiper>
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
