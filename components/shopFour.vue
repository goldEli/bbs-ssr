<script setup lang="ts">
import { useI18n } from "vue-i18n";
const i18n = useI18n();
const route = useRoute();
const language = route.params.language;
const text3 = `At the beginning, the brand will focus on the elite section of the metropolitan center to carry out the middle and high section roast meat brand.
It is expected to build a central kitchen after expanding 3-5 stores.
Establish a systematic supply chain to master the quality of food materials and logistics precision.
In the middle stage, we will gradually expand to the suburbs and Wei Xing city with the middle and low price brands.
To provide consumers with an excellent meat feast and detailed service experience.`;
const inners =[
  " 為各區域間消費者提供絕佳肉品 饗宴與細致服務體驗",
  " 中期逐步以中低價位品牌拓展至市郊與衛 星都市",
  " 建立系統性供應鏈掌握⻝材品質 與物流精準度",
  " 燒肉品牌，預期拓展 3-5間門市後打造中央廚房",
  " 品牌初期鎖定都會中心精華地段開展中高端",
]
const inners_zh = [
  " 为各区域间消费者提供绝佳肉品 飨宴与细致服务体验",
  " 中期逐步以中低价位品牌拓展至市郊与卫 星都市",
  " 建立系统性供应链掌握⻝材品质 与物流精准度",
  " 烧肉品牌，预期拓展 3-5间门市后打造中央厨房",
  " 品牌初期锁定都会中心精华地段开展中高端",
];
</script>

<template>
  <div :class="$style.inner3">
    <div :class="$style.left">
      <img src="/other/精准市场策略1x.png" alt="" />
    </div>
    <div v-if="language === 'zh' || language === 'hant'" :class="$style.right">
      <div :class="$style.title">{{ $t("web.shopTitle3") }}</div>
      <div :class="$style.inner_wrap">
        <div
          :key="value"
          v-for="value in i18n.locale.value == 'hant' ? inners : inners_zh"
          :class="$style.menu_item"
        >
          {{ value }}
        </div>
      </div>
    </div>
    <div v-else :class="$style.right_en">
      <div :class="$style.title">Precise marketing strategy</div>
      <div :class="$style.inner_wrap">
        {{ text3 }}
      </div>
    </div>
  </div>
</template>

<style module lang="less">
.inner3 {
  height: 100vh;
  display: flex;
  .left {
    width: 960ppx;
    height: 100vh;
    img {
      width: 960ppx;
      height: 100vh;
      object-fit: cover;
    }
  }
  .right_en {
    background: url("/second/manybg.png");
    width: 960ppx;
    position: relative;
    display: flex;
    flex-direction: column;
    .title {
      position: absolute;
      left: 190ppx;
      top: 204ppx;

      margin: 0 auto;
      line-height: 42ppx;
      font-size: 36ppx;
      word-wrap: break-word;
    }
    .inner_wrap {
      width: 580ppx;
      height: 480ppx;
      position: absolute;
      left: 190ppx;
      top: 322ppx;
      white-space: pre-wrap;
      line-height: 28ppx;
      font-size: 15ppx;
    }
  }
  .right {
    background: url("/second/manybg.png");
    width: 960ppx;
    height: 100vh;
    position: relative;
    .title {
      position: absolute;
      right: 320ppx;
      top: 112ppx;
      width: 36ppx;
      margin: 0 auto;
      line-height: 42ppx;
      font-size: 36ppx;
      word-wrap: break-word;
    }
    .inner_wrap {
      position: absolute;
      left: 321ppx;
      top: 112ppx;
      display: flex;

      .menu_item {
        width: 39ppx;
        margin: 0 auto;
        line-height: 30ppx;
        font-size: 20ppx;
        word-wrap: break-word;
      }
    }
  }
}
</style>
