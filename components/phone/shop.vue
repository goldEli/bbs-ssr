<script setup lang="ts">
import { useI18n } from "vue-i18n";
const i18n = useI18n();
const route = useRoute();
const language = route.params.language;

const text = `Wu Jiu Yakitori through the supply of top Japanese A5 Wagyu, Australian grass-fed Wagyu and Yan Choose American Angus black cattle, differentiated product price positioning, tightly grasp each consumption Interval with mass eye ball, fully meet the needs of the audience to show the taste of beautiful meat.
In addition, the company has developed all-star exclusive product lines such as crab miso Krabiyaki, cuttlefish sausage and ray fin.
Enrich the communication channels of future product lines, and bring amazing taste buds to consumers at all times.`;
const text2 = `Combined with Hutong's more than 10 years of Japanese yakitori experience in Taiwan, Accurately master the baking weather, selection of ingredients and customer experience and other market insights, Wu Jiu is specialized in the selection of data analysis, Target customer group positioning and local market assessment. Taixing transnational resources integration,
To create a high quality and service-oriented barbecue experience brand in the Singapore market, Stand out in the white-hot market competition.`;
const text3 = `At the beginning, the brand will focus on the elite section of the metropolitan center to carry out the middle and high section roast meat brand.
It is expected to build a central kitchen after expanding 3-5 stores.
Establish a systematic supply chain to master the quality of food materials and logistics precision.
In the middle stage, we will gradually expand to the suburbs and Wei Xing city with the middle and low price brands.
To provide consumers with an excellent meat feast and detailed service experience.`;
const inners = [
  "      豐富未來產品線 溝通渠道，時刻帶給消費者味蕾驚艷。",
  "    此外，開發蟹味噌甲羅燒、",
  "   墨魚香腸及鰩 魚翅等全星獨家產品線，",
  "    區間帶群眾眼 球，全面滿足受眾需求展現絕美肉品滋味。",
  "   選美國安格斯黑牛，區隔化 產品價格定位，緊抓各消費",
  " 伍玖燒肉透過供應頂級日本A5和牛、澳洲 草飼和牛及嚴",
];

const inners_zh = [
  " 丰富未来产品线 沟通渠道，时刻带给消费者味蕾惊艳。",
  " 此外，开发蟹味噌甲罗烧、",
  " 墨鱼香肠及鳐 鱼翅等全星独家产品线，",
  " 区间带群众眼 球，全面满足受众需求展现绝美肉品滋味。",
  " 选美国安格斯黑牛，区隔化 产品价格定位，紧抓各消费",
  " 伍玖烧肉透过供应顶级日本A5和牛、澳洲 草饲和牛及严",
];
const inners2 = [
  "    於白熱 化市場競爭中脫穎而出。",
  "   打造新加坡市場兼 具高品質與服務型燒烤體驗品牌，",
  "   目標客群定位與在地市場評估。台星跨國性資源整合，",
  " 伍玖則專精於選品數據 化分析、",
  "   精準掌握烘烤火侯、⻝材選用及顧客 體驗等市場洞悉，",
  "    品牌結合胡同在台耕耘十多年日式燒肉經 驗，",
];
const inners_zh2 = [
  " 于白热 化市场竞争中脱颖而出。",
  " 打造新加坡市场兼 具高品质与服务型烧烤体验品牌，",
  " 目标客群定位与在地市场评估。 台星跨国性资源整合，",
  " 伍玖则专精于选品数据 化分析、",
  " 精准掌握烘烤火侯、⻝材选用及顾客 体验等市场洞悉，",
  " 品牌结合胡同在台耕耘十多年日式烧肉经 验，",
];
const inners3 = [
  "  為各區域間消費者提供絕佳肉品 饗宴與細緻服務體驗。",
  "      中期逐步以中低價位品牌拓點至市郊與衛 星都市，",
  "      建立系統性供應鏈掌握⻝材品質 與物流精準度。",
  "  預期拓展   3-5間門市後打造中 央廚房，",
  "  品牌初期鎖定都會中心精華地段開展中高 段燒肉品牌，",
];
const inners_zh3 = [
  " 为各区域间消费者提供绝佳肉品 飨宴与细致服务体验。",
  " 中期逐步以中低价位品牌拓点至市郊与卫 星都市，",
  " 建立系统性供应链掌握⻝材品质 与物流精准度。",
  " 预期拓展 3-5间门市后打造中 央厨房，",
  " 品牌初期锁定都会中心精华地段开展中高 段烧肉品牌，",
];
</script>

<template>
  <div :class="$style.container">
    <div :class="$style.bg">
      <img src="/mobile/bg/门店.jpg" alt="" />
      <div
        v-if="language === 'zh' || language === 'hant'"
        :class="$style.right_wrap"
      >
        <div :class="$style.menu_item">{{ $t("web.des3") }}</div>
      </div>
      <div
        v-if="language === 'zh' || language === 'hant'"
        :class="$style.right_wrap2"
      >
        <div :class="$style.menu_item">{{ $t("web.des4") }}</div>
      </div>
    </div>
    <div :class="$style.inner">
      <div :class="$style.left">
        <img src="/other/产品差异性1x.png" alt="" />
      </div>
      <div
        v-if="language === 'zh' || language === 'hant'"
        :class="$style.right"
      >
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
    <div :class="$style.inner">
      <div :class="$style.left">
        <img src="/other/跨国资源整合1x.png" alt="" />
      </div>
      <div
        v-if="language === 'zh' || language === 'hant'"
        :class="$style.right"
      >
        <div :class="$style.title_2">{{ $t("web.shopTitle2") }}</div>
        <div :class="$style.inner_wrap_2">
          <div
            :key="value"
            v-for="value in i18n.locale.value == 'hant'
              ? inners2.slice().reverse()
              : inners_zh2.slice().reverse()"
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
    </div>
    <div :class="$style.inner">
      <div :class="$style.left">
        <img src="/other/精准市场策略1x.png" alt="" />
      </div>
      <div
        v-if="language === 'zh' || language === 'hant'"
        :class="$style.right"
      >
        <div :class="$style.title">{{ $t("web.shopTitle3") }}</div>
        <div :class="$style.inner_wrap">
          <div
            :key="value"
            v-for="value in i18n.locale.value == 'hant' ? inners3 : inners_zh3"
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
    <MobileSix></MobileSix>
  </div>
</template>

<style module lang="less">
.container {
  .bg {
    img {
      width: 100vw;
      height: 100vh;
      vertical-align: middle;
    }
    .right_wrap {
      z-index: 11;
      position: absolute;
      right: 100mpx;
      top: 248mpx;
      display: flex;
      margin-left: 161mpx;
      width: 110mpx;

      .menu_item {
        font-family: myFirstFont;
        color: #ffffff;
        width: 15mpx;
        margin: 0 auto;
        margin: 0 2px;
        line-height: 46mpx;
        font-size: 32mpx;
        word-wrap: break-word;
      }
    }
    .right_wrap2 {
      z-index: 11;
      position: absolute;
      right: 200mpx;
      top: 425mpx;
      display: flex;
      margin-left: 161mpx;
      width: 110mpx;

      .menu_item {
        font-family: myFirstFont;
        color: #ffffff;
        width: 15mpx;
        margin: 0 auto;
        margin: 0 2px;
        line-height: 46mpx;
        font-size: 32mpx;
        word-wrap: break-word;
      }
    }
  }
  .inner {
    //  height: 1080mpx;

    .left {
      width: 750mpx;
      img {
        width: 100%;
        height: 100%;
        vertical-align: middle;
      }
    }
    .right_en {
      background: url("/other/bg_41x.png");
      width: 750mpx;
      height: 871mpx;
      position: relative;
      display: flex;
      flex-direction: column;
      padding: 118mpx 100mpx;
      box-sizing: border-box;
      .title {

        line-height: 42mpx;
        font-size: 36mpx;
        word-wrap: break-word;
        width: 580mpx;
      }
      .inner_wrap {
        width: 580mpx;
        height: 480mpx;
        white-space: pre-wrap;
        line-height: 1.5;
        font-size: 26mpx;
        margin-top: 64mpx;
      }
    }
    .right {
      background: url("/other/bg_41x.png");
      width: 750mpx;
      height: 871mpx;
      position: relative;
      .title {
        position: absolute;
        right: 150mpx;
        top: 66mpx;
        width: 36mpx;
        margin: 0 auto;
        line-height: 42mpx;
        font-size: 36mpx;
        word-wrap: break-word;
        letter-spacing: 7px;
      }
      .inner_wrap {
        position: absolute;
        left: 150mpx;
        top: 66mpx;
        display: flex;

        .menu_item {
          font-family: myFirstFont;
          width: 30mpx;
          margin: 0 5px;
          line-height: 30mpx;
          font-size: 20mpx;
          word-wrap: break-word;
        }
      }
      .title_2 {
        position: absolute;
        left: 188mpx;
        top: 68mpx;
        width: 36mpx;
        margin: 0 auto;
        line-height: 42mpx;
        font-size: 36mpx;
        word-wrap: break-word;
        letter-spacing: 7px;
      }
      .inner_wrap_2 {
        position: absolute;
        left: 288mpx;
        top: 68mpx;
        display: flex;

        .menu_item {
          font-family: myFirstFont;
          width: 30mpx;
          margin: 0 5px;
          line-height: 30mpx;
          font-size: 20mpx;
          word-wrap: break-word;
        }
      }
    }
  }
}
</style>
