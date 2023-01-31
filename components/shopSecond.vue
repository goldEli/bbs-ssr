<script setup lang="ts">
const route = useRoute();
import { useI18n } from "vue-i18n";
const i18n = useI18n();
const language = route.params.language;
const text = `Wu Jiu Yakitori through the supply of top Japanese A5 
Wagyu, Australian grass-fed Wagyu and Yan
Choose American Angus black cattle, differentiated product 
price positioning, tightly grasp each consumption
Interval with mass eye ball, fully meet the needs of the 
audience to show the taste of beautiful meat.
In addition, the company has developed all-star exclusive 
product lines such as crab miso Krabiyaki, cuttlefish 
sausage and ray fin.
Enrich the communication channels of future product 
lines, and bring amazing taste buds to consumers at all 
times.`;
const inners = [
  " 時刻帶給消費者味蕾驚艷。",
  " 鰩魚翅等全星獨家產品線，豐富自身菜品內容",
  " 肉品滋味。此外，開發蟹味噌甲羅燒、墨魚香腸及",
  " 各消費區間帶群眾眼 球，全面滿足受眾需求展現絕美",
  " 及嚴選美國安格斯黑牛，區隔化產品價格定位，緊抓",
  " 伍玖燒肉透過供應頂級日本A5和牛、澳洲 草飼和牛",
];

const inners_zh = [
  " 时刻带给消费者味蕾惊艳。",
  " 鳐鱼翅等全星独家产品线，丰富自身菜品内容",
  " 肉品滋味。此外，开发蟹味噌甲罗烧、墨鱼香肠及",
  " 各消费区间带群众眼 球，全面满足受众需求展现绝美",
  " 及严选美国安格斯黑牛，区隔化产品价格定位，紧抓",
  " 伍玖烧肉透过供应顶级日本A5和牛、澳洲 草饲和牛",
];
</script>

<template>
  <div :class="$style.inner">
    <div :class="$style.left">
      <img src="/other/产品差异性1x.png" alt="" />
    </div>

    <div v-if="language === 'zh' || language === 'hant'" :class="$style.right">
      <div :class="$style.title">{{ $t("web.shopTitle") }}</div>
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
      <div :class="$style.title">Product differentiation</div>
      <div :class="$style.inner_wrap">
        {{ text }}
      </div>
    </div>
  </div>
</template>

<style module lang="less">
.inner {
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
      left: 250ppx;
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
      right: 321ppx;
      top: 162ppx;
      width: 36ppx;
      margin: 0 auto;
      line-height: 42ppx;
      font-size: 36ppx;
      word-wrap: break-word;
    }
    .inner_wrap {
      position: absolute;
      left: 320ppx;
      top: 162ppx;
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
