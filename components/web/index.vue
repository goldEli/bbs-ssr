<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import { Mousewheel } from "swiper";
import "swiper/css";
const baseUrl = 'https://cdn.staryuntech.com';
</script>

<template>
  <div :class="$style.wrap">
    <Swiper
      :speed="1600"
      mousewheel
      direction="vertical"
      :initial-slide="0"
      :modules="[Mousewheel]"
      :class="$style.mySwiper"
    >
      <swiper-slide><First /></swiper-slide>
      <swiper-slide><Second /></swiper-slide>
      <swiper-slide><Third /></swiper-slide>
      <swiper-slide><Four /></swiper-slide>
      <swiper-slide><Five /></swiper-slide>
      <swiper-slide><Six /></swiper-slide>
    </Swiper>
    <div :class="$style.fixed">
      <a
        :class="$style.order"
        href="https://inline.app/booking/-NANj0Lg2ePAbIhYzrRF:inline-live-1/-NANj0_wpVUizJlihopD?fbclid=https://bit.ly/59hutongyakiniku"
      >
        <img :class="$style.orderImg" :src="`${baseUrl}/cms/3af2fd7817a9d99c52b273811c92984b19ab3ba9.png?updated_at=2022-10-18T10:33:54.663Z`" />
        <span :class="$style.orderText">Book Now</span>
      </a>
      <a
        :class="$style.order"
        href="https://api.whatsapp.com/send?phone=+6591113007&text=Contact Us"
      >
        <img :class="$style.orderImg" :src="`${baseUrl}/cms/038ab82e6924eaf4bf3979cf77a07ef5fe421b0a.png?updated_at=2022-10-19T03:12:56.874Z`" />
        <span :class="$style.orderText">WhatsApp</span>
      </a>
    </div>
  </div>
</template>

<style module lang="less">
.fixed {
  position: fixed;
  bottom: 124px;
  right: 100px;
  z-index: 999;
  display: flex;
  flex-direction: column;
}
.order {
  width: 222px;
  height: 56px;
  background: #ED1C24;
  border-radius: 100px 100px 100px 100px;
  box-shadow: 0 6px 30px 0 rgba(240,3,3,0.2);
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  .orderImg {
    width: 32px;
    height: 32px;
  }
  .orderText{
    margin-left: 12px;
    font-size: 20px;
    font-family: myFirstFont;
    font-weight: 500;
    color: #FFFFFF;
    line-height: 28px;
  }
}
.order:nth-of-type(2) {
  margin-top: 32px;
  box-shadow: 0 6px 30px 0 rgba(3, 240, 41, 0.2);
  background: #25cf43;
}
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
