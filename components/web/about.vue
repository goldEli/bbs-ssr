<script setup lang="ts">
import { Mousewheel } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import AboutFirst from "~~/components/AboutFirst.vue";
import AboutSecond from "@/components/AboutSecond.vue";

</script>

<template>
  <div>
    <Swiper
      :speed="1600"
      :direction="'vertical'"
      :slidesPerView="1"
      :spaceBetween="30"
      mousewheel
      :pagination="{
        clickable: true,
      }"
      :modules="[Mousewheel]"
      :class="$style.swiper"
    >
      <SwiperSlide><AboutFirst></AboutFirst></SwiperSlide>
      <SwiperSlide><AboutSecond></AboutSecond></SwiperSlide>
    </Swiper>
  </div>
</template>

<style module lang="less">
.swiper {
  width: 100vw;
  height: 100vh;
}
</style>
