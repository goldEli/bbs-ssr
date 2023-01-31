<script setup lang="ts">
import { useI18n } from "vue-i18n";
const i18n = useI18n();
const baseUrl = 'https://cdn.staryuntech.com';
</script>

<template>
  <div>
    <MobileFirst></MobileFirst>
    <MobileSecond></MobileSecond>
    <MobileThird></MobileThird>
    <MobileFour></MobileFour>
    <MobileFive></MobileFive>
    <MobileSix></MobileSix>
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
  bottom: 120mpx;
  right: 40mpx;
  z-index: 999;
  display: flex;
  flex-direction: column;
}
.order {
  width: 260mpx;
  height: 80mpx;
  // width: 88mpx;
  // height: 88mpx;
  background: #ed1c24;
  box-shadow: 0 6mpx 30mpx 0 rgba(240, 3, 3, 0.2);
  box-sizing: border-box;
  border-radius: 100mpx 100mpx 100mpx 100mpx;
  display: flex;
  align-items: center;
  justify-content: center;
  .orderImg {
    width: 47mpx;
    height: 47mpx;
  }
  .orderText {
    margin-left: 12mpx;
    font-size: 24mpx;
    font-family: myFirstFont;
    font-weight: 500;
    color: #ffffff;
    line-height: 28px;
  }
  // > p {
  //   font-size: 28mpx;
  //   font-weight: bold;
  //   color: #ffffff;
  //   line-height: 33mpx;
  //   font-family: myFirstFont;
  //   text-align: center;
  // }
}
.order:nth-of-type(2) {
  margin-top: 48mpx;
  box-shadow: 0 6mpx 30mpx 0 rgba(3, 240, 41, 0.2);
  background: #25cf43;
}
</style>
