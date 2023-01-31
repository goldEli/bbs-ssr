<script setup lang="ts">
const route = useRoute();
const language = route.params.language;
import { useI18n } from "vue-i18n";
const i18n = useI18n();
const inners = [
  " 源自華人的聚餐文化",
  " 樂於分享、活潑好客、親切歡樂",
  " 來到伍玖，不僅僅是品味佳餚",
  " 而是體會來自台灣的燒肉風情",
  " 我們貫徹帶有溫度的服務",
  " 我們堅持獨具匠心的選品",
  " 我們講究刀刀精準的工法",
  " 一口肉，一杯酒",
];
const inners_zh = [
  " 源自华人的聚餐文化",
  " 乐于分享、活泼好客、亲切欢乐",
  " 来到伍玖，不仅仅是品味佳肴",
  " 而是体会来自台湾的烧肉风情",
  " 我们贯彻带有温度的服务",
  " 我们坚持独具匠心的选品",
  " 我们讲究刀刀精准的工法",
  " 一口肉，一杯酒",
];
</script>

<template>
  <div :class="$style.bg">
    <CenterContent>
      <div :class="$style.container">
        <img :class="$style.big_logo" src="/logo/big_logo.png" alt="" />
        <div
          v-if="language === 'zh' || language === 'hant'"
          :class="$style.right_wrap"
        >
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
        <div v-else :class="$style.en_wrap">
          {{
            `59 Hutong Yakiniku is a brand that marries the delectable experience of Yakiniku with warm Taiwanese service. The term “59”, a play on the Hokkien slang “Wu Jiu Wu Jio (五酒五揪)” which is loosely translated as “I’ll see you where there’s alcohol”, is a fun representation of the restaurant brand's mission to bring warmth, joy and merriment to their diners.
  `
          }}
        </div>
        <div
          v-if="language === 'zh' || language === 'hant'"
          :class="$style.one"
        >
          {{ $t("web.aboutTitle") }}
        </div>
        <div v-else :class="$style.en_wrap2">
          <!-- {{
            `
Originating from ingenuity and original meat, the direct fire fight 
is a race against time.
  `
          }} -->
        </div>
      </div>
    </CenterContent>
  </div>
</template>

<style module lang="less">
.bg {
  width: 100vw;
  height: 100vh;
  background: url("/other/dark.jpg");
  background-size: cover;
  // height: 100%;
}
.container {
  position: relative;
  width: 1920px;
  height: 100vh;

  .big_logo {
    position: absolute;
    left: 300px;
    top: 324px;
    width: 742px;
    height: 210px;
  }
  .right_wrap {
    position: absolute;
    right: 427px;
    top: 250px;
    display: flex;
    margin-left: 182px;
    // width: 210px;
    height: 600px;
    .menu_item {
      color: #ffffff;
      width: 39px;
      margin: 0 auto;
      line-height: 30px;
      font-size: 20px;
      word-wrap: break-word;
      font-family: myFirstFont;
    }
  }
  .one {
    position: absolute;
    right: 300px;
    top: 250px;
    color: #ffffff;
    width: 39px;
    margin: 0 auto;
    line-height: 30px;
    font-size: 20px;
    word-wrap: break-word;
    font-family: myFirstFont;
  }
  .en_wrap {
    position: absolute;
    right: 256px;
    top: 291px;
    width: 580px;
    height: 360px;
    font-size: 20px;
    font-family: myFirstFont;
    color: #ffffff;
    line-height: 40px;
    white-space: pre-wrap;
  }
  .en_wrap2 {
    position: absolute;
    right: 256px;
    top: 704px;
    width: 580px;
    height: 360px;
    font-size: 20px;
    font-family: myFirstFont;
    color: #ffffff;
    line-height: 40px;
    white-space: pre-wrap;
  }
}
</style>
