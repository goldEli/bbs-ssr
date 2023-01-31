<script setup lang="ts">
import { useI18n } from "vue-i18n";
const i18n = useI18n();
const route = useRoute();
const language = route.params.language;
const text2 = `Combined with Hutong's more than 10 years of Japanese yakitori experience in Taiwan,
Accurately master the baking weather, selection of ingredients and customer experience and other market insights,
Wu Jiu is specialized in the selection of data analysis,
Target customer group positioning and local market assessment. Taixing transnational resources integration,
To create a high quality and service-oriented barbecue experience brand in the Singapore market,
Stand out in the white-hot market competition.`;
const inners = [
  " 競爭中脫穎而出。",
  " 兼具高品質與服務型燒烤體驗品牌，於白熱化市場",
  " 地市場評估。 臺星跨國性資源整合，打造新加坡市場",
  " 伍玖則專精於選品數據 化分析、 目標客群定位與所在",
  " 精準掌握烘烤火侯、⻝材選用及顧客 體驗等市場洞悉",
  " 品牌結合胡同在臺耕耘十多年日式燒肉經驗",
];
const inners_zh = [
  " 竞争中脱颖而出。",
  " 兼具高品质与服务型烧烤体验品牌，于白热化市场",
  " 地市场评估。 台星跨国性资源整合，打造新加坡市场",
  " 伍玖则专精于选品数据 化分析、 目标客群定位与所在",
  " 精准掌握烘烤火侯、⻝材选用及顾客 体验等市场洞悉",
  " 品牌结合胡同在台耕耘十多年日式烧肉经验",
];
</script>

<template>
  <div :class="$style.inner2">
    <div v-if="language === 'zh' || language === 'hant'" :class="$style.right">
      <div :class="$style.title">{{ $t("web.shopTitle2") }}</div>
      <div :class="$style.inner_wrap">
        <div
          :key="value"
          v-for="value in i18n.locale.value == 'hant'
            ? inners.slice().reverse()
            : inners_zh.slice().reverse()"
          :class="$style.menu_item"
        >
          {{ value }}
        </div>
      </div>
    </div>
    <div v-else :class="$style.right_en">
      <div :class="$style.title">Integration of transnational resources</div>
      <div :class="$style.inner_wrap">
        {{ text2 }}
      </div>
    </div>
    <div :class="$style.left">
      <img src="/other/跨国资源整合1x.png" alt="" />
    </div>
  </div>
</template>

<style module lang="less">
.inner2 {
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
    position: relative;
    .title {
      position: absolute;
      left: 301ppx;
      top: 112ppx;
      width: 36ppx;
      margin: 0 auto;
      line-height: 42ppx;
      font-size: 36ppx;
      word-wrap: break-word;
    }
    .inner_wrap {
      position: absolute;
      right: 301ppx;
      top: 112ppx;
      display: flex;

      .menu_item {
        font-family: myFirstFont;
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
