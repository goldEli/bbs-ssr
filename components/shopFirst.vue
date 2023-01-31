<script setup lang="ts">
const route = useRoute();
const language = route.params.language;
</script>

<template>
  <div :class="$style.banner">
    <img :class="$style.banner_img" src="/other/banner1x.png" alt="" />
    <div v-if="language === 'zh' || language === 'hant'" :class="$style.right_wrap">
      <div :class="$style.menu_item">{{$t('web.des3')}}</div>
    </div>
    <div v-if="language === 'zh' || language === 'hant'" :class="$style.right_wrap2">
      <div :class="$style.menu_item">{{$t('web.des4')}}</div>
    </div>
  </div>
</template>

<style module lang="less">
.banner {
  position: relative;
  width: 1920ppx;
  height: 100vh;
  .right_wrap {
    z-index: 11;
    position: absolute;
    right: 260ppx;
    top: 248ppx;
    display: flex;
    margin-left: 161ppx;
    width: 110ppx;

    .menu_item {
      font-family: myFirstFont;
      color: #ffffff;
      width: 15ppx;
      margin: 0 auto;
      line-height: 46ppx;
      font-size: 32ppx;
      word-wrap: break-word;
    }
  }
  .right_wrap2 {
    z-index: 11;
    position: absolute;
    right: 320ppx;
    top: 425ppx;
    display: flex;
    margin-left: 161ppx;
    width: 110ppx;

    .menu_item {
      font-family: myFirstFont;
      color: #ffffff;
      width: 15ppx;
      margin: 0 auto;
      line-height: 46ppx;
      font-size: 32ppx;
      word-wrap: break-word;
    }
  }
  .banner_img {
    width:100vw;
    height:100vh;
    object-fit: cover;
  }
}
</style>
