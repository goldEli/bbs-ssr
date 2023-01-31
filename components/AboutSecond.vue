<script setup lang="ts">
import { useSwiper } from "swiper/vue";
const route = useRoute();
const language = route.params.language;
const swiper = useSwiper();
import { useI18n } from "vue-i18n";
const i18n = useI18n();
const onToTop = () => swiper.value?.slideTo(0, 400);
const inners = [
  {
    name: "匠心工藝",
    texts: [
      "揭開聲色香味展演",
      "極致烘烤工法",
      "著用前半部肉質細膩絕美油花",
      "細拆肉品部位",
    ],
  },
  {
    name: "賓至如歸",
    texts: [
      "融入品味生活的時光",
      "如同在家用餐情景",
      "蘊含溫婉人情味服務",
      "近距離桌邊互動",
    ],
  },
  {
    name: "數據思維",
    texts: [
      "賦予星級美味生命",
      "重新定義和牛珍饌",
      "嚴守頂級品質絕不妥協",
      "細拆肉品部位",
    ],
  },
];
const inners_hant = [
  {
    name: "匠心工艺",
    texts: [
      "揭开声色香味展演",
      "极致烘烤工法",
      "著用前半部肉质细腻绝美油花",
      "细拆肉品部位",
    ],
  },
  {
    name: "宾至如归",
    texts: [
      "融入品味生活的时光",
      "如同在家用餐情景",
      "蕴含温婉人情味服务",
      "近距离桌边互动",
    ],
  },
  {
    name: "数据思维",
    texts: [
      "赋予星级美味生命",
      "重新定义和牛珍馔",
      "严守顶级品质绝不妥协",
      "细拆肉品部位",
    ],
  },
];
</script>

<template>
  <div :class="$style.bg">
    <CenterContent>
      <div :class="$style.container">
        <div v-if="language === 'zh' || language === 'hant'" :class="$style.center">
          <div
            v-for="value in i18n.locale.value === 'hant' ? inners : inners_hant"
            :class="$style.show_hover"
          >
            <div :class="$style.left">
              <div v-for="item in value.texts.slice().reverse()" :class="$style.menu_item">
                {{ item }}
              </div>
            </div>
            <div :class="$style.right">{{ value.name }}</div>
          </div>
        </div>
        <div v-else :class="$style.en_center">
          <div :class="$style.item">
            <span :class="$style.title">Craftsmanship</span>
            <span :class="$style.line"></span>
            <span :class="$style.des">
              {{
                `Carefully disassemble meat parts
The first half of the meat is delicate and 
beautiful with oily flowers
Extreme baking method
Unveil the sound, color, fragrance and 
performance`
              }}
            </span>
          </div>
          <div :class="$style.item">
            <span :class="$style.title">Feel at home</span>
            <span :class="$style.line"></span>
            <span :class="$style.des">
              {{
                `Close desk interaction
Service with gentle humanity
It's like eating at home
A time to enjoy life`
              }}
            </span>
          </div>
          <div :class="$style.item">
            <span :class="$style.title">Data thinking</span>
            <span :class="$style.line"></span>
            <span :class="$style.des">
              {{
                `Accurate and scientific analysis
Strictly adhere to top quality and 
never compromise
Redefine and beef delicacies
Give star delicious life`
              }}
            </span>
          </div>
        </div>
      </div>
    </CenterContent>
    <div :class="$style.footer">
      <div :class="$style.to_top" @click="onToTop">
        <Icon id="top" />
      </div>
      <div :class="$style.contact">
        <div>{{ $t("address") }}：35 BOAT QUAY, SINGAPORE 049824</div>
        <div>{{ $t("telephone") }}：6235 3818</div>
        <div>{{ $t("mailbox") }}：CONTACT@59.COm</div>
      </div>
      <NuxtLink :class="$style.foot_logo" :to="`/${$route.params.language}/`">
        <img @click="onToTop" src="/logo/logo_mb.png" alt="logo" />
      </NuxtLink>
    </div>
  </div>
</template>

<style module lang="less">
.bg {
  width: 100vw;
  height: 100vh;
  background: url("/other/bg_11x.png");
  background-size: cover;
}
.container {
  position: relative;
  width: 1920px;
  height: 1080px;

  .en_center {
    width: 100%;
    position: absolute;
    left: 0px;
    top: 220px;
    display: flex;
    box-sizing: border-box;
    justify-content: space-between;
    padding: 0 213px;
    .item {
      width: 471px;
      display: flex;
      flex-direction: column;
      // justify-content: center;
      align-items: center;
      .title {
        font-size: 36px;
        font-family: myFirstFont;
        font-weight: 400;
        color: #ffffff;
      }
      .line {
        width: 218px;
        height: 1px;
        background-color: #ffffff;
        margin: 64px 0 56px 0;
      }
      .des {
        width: 400px;
        font-size: 20px;
        font-family: myFirstFont;
        font-weight: 400;
        color: #ffffff;
        line-height: 40px;
        text-align: center;
        white-space: pre-wrap;
      }
    }
  }
  .center {
    width: 100%;
    position: absolute;
    left: 0px;
    top: 220px;
    display: flex;
    box-sizing: border-box;
    justify-content: space-between;
    padding: 0 213px;
    .show_hover {
      box-sizing: border-box;

      width: 220px;

      display: flex;

      .left {
        display: flex;

        width: 210px;
        height: 500px;
        border-right: 2px solid #ffffff;
        box-sizing: border-box;
        padding-right: 24px;
        margin-right: 48px;

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
      .right {
        align-self: start;
        color: #ffffff;
        width: 37px;
        // margin: 0 auto;
        line-height: 54px;
        font-size: 36px;
        word-wrap: break-word;
        font-family: myFirstFont;
      }
    }
  }
}
.footer {
  .to_top {
    width: 80px;
    height: 80px;
    background: rgba(0, 0, 0, 0.5);
    opacity: 1;
    z-index: 100;
    border-radius: 50%;
    position: absolute;
    top: -40px;
    left: 50%;
    transform: translate(-50%);
    cursor: pointer;
    font-size: 28px;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  position: absolute;
  bottom: 0px;
  width: 100vw;
  height: 148px;
  margin-top: 76px;
  background: #030002;
  display: flex;
  box-sizing: border-box;
  padding-left: 160px;
  padding-right: 160px;
  align-items: center;
  justify-content: space-between;
  .contact {
    display: flex;
    flex-direction: column;
    div {
      line-height: 39px;
      font-size: 16px;
      color: #ffffff;
    }
  }
  .foot_logo {
    // margin: 24px 360px 24px auto;
    img {
      display: block;
      width: 296px;
      height: 84px;
    }
  }
}
</style>
