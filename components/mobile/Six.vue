<script setup lang="ts">
import { useI18n } from "vue-i18n";
const i18n = useI18n();
const state = reactive({
  currentPage: 1,
});
const inner = reactive({
  news: null,
});
const changeVisible = () => {
  inner.news = null;
};

const showVisible = (value) => {
  console.log(value);

  inner.news = value;
};
const news = [
  {
    id: "1",
    date: "2022-08-01",
    title: "顶级食材，肉食爱好者无法拒绝的美味",
    content: `我们精选顶级食材，以精准的刀工切割，配以考究的烹饪手法，最后予以您温暖细致的服务呈现出这令人无法拒绝珍馐美味。
日本的和牛
日本和牛是当今世界公认的品质最优秀的良种肉牛，从高到低共分为五个等级，即A1-A5,其中A5级的和牛是最顶级的，其肉大理石花纹明显，又称“雪花肉”。由于日本和牛的肉多汁细嫩、风味独特，因为皮下脂肪分布均匀成雪花状，所以吃起来有入口即化的感觉。


澳洲和牛
澳洲和牛以黑毛和种为主，其肉质细嫩多汁，其雪花较其他普通品种的牛更多、更密且平均细腻，肉色红润，脂肪纹路分布迷人。从出生之后便以牛乳、优质稻草混合富蛋白饲料进行饲养。通过简单的煎烤之后，一股甜香的牛油味道油然而生。澳洲和牛其牛肉结构肥瘦相间，没有筋膜，咬下去肉中均分布的大理石油脂开始融化，嘴里溢出香浓的汁水，口感嫩滑，入口即化就如同雪花落入口中。

安格斯牛肉 
起源于苏格兰东北部，外貌特征是黑色无角，体躯矮而结实，肉质好，出肉率高，其肉细嫩又紧实的肌肉层叠交融，深刻、流畅、繁多而均匀，高质量的肉质特色成就了安格斯牛肉鲜嫩爽滑的上佳口感。肌理紧致均匀，雪花纹分布均匀，口味醇厚多汁甘甜，醇香又富有嚼劲。无论如何烹饪，都阻挡不住入口的惊艳，做牛排多汁风味浓郁，做炖煮肉质绵软口味独特。
源之于品质优良的高端食材，匠之于细致的处理与精心的烹调，始终秉持着味道能延续，记忆就会一直都在初衷都未曾改变。`,
  },
  {
    id: "2",
    date: "2022-08-01",
    title: "七夕之恋，与您邀约",
    content: `”浪漫银河,流淌真情浪花;翩翩鹊桥,融通心灵大门;火红玫瑰,酝酿甜美爱情;痴心表白,传递真心爱恋”在中国，农历七月初七的夜晚，天气温暖，草木飘香，这就是人们俗称的七夕节，也有人称之为“乞巧节”。相传，在每年的这个夜晚，是天上织女与牛郎在鹊桥相会之时。传说抬头可以看到牛郎侄女的银河相会，或在瓜果架下可偷听到两人在天上相会时的脉脉情话。引申到现在，特别是近些年来，七夕情人节已成为当代时尚男女追崇时尚表达爱意的一个特殊节日，和二月十四日情人节有异曲同工之妙。
在此情此节之际，伍玖烧肉为此精心准备了诸多活动，邀您与所爱之人共同赴约在此，让甜蜜的爱情滋味与美妙的烧肉相互缠绕，品尝珍馐美食，见证爱情路程。`,
  },
  {
    id: "3",
    date: "2022-08-01",
    title: "“伍玖烧肉”——开业盛典",
    content: `“烧蕴百味香，美味无可挡”
今日迎来了伍玖烧肉新加坡的盛大开启。伍玖烧肉一直秉承着盛情、好客、分享的華人美好文化記憶，将餐食当作生命中不可获取的舌尖精粹和精神享受。
“结束一日公事，邀上三五好友，大啖佳餚美酒
如厝边邻居般温暖的轻声问候，惬意自得的休憩其中 
有我有你，有肉有酒。 
一生悬命，此生如一。”
伍玖烧肉透过供应顶级日本 A 5和牛、澳洲草饲和牛及严选美国安格斯黑牛，区隔化产品价格定位，紧抓各消费区间带群众眼球，全面满足受众需求展现绝美肉品滋味。
此外，我们独家研制了蟹味噌甲罗烧、墨鱼香肠及鳐鱼翅等全新专属产品线，丰富未来产品线沟通渠道，时刻带给消费者味蕾惊艳。
世间万物，沧海一粟，唯有美食和你不可辜负！
伍玖烧肉，欢迎您的到来！
     `,
  },
  {
    id: "4",
    date: "2022-08-01",
    title: "品牌历史",
    content:
      "本店盛大開業，歡迎親朋好友前來照顧生意，凡是今天到店的朋友，均打折給與優惠，走過路過不要錯過。機不可失時不再來，機不可失時不再來機不可失時不再來機不可失時不再來，機不可失時不再來機不可失時不再來機不可失時不再來，機不可失時不再來機不可失時不再來",
  },
];
const nesw_zh = [
  {
    id: "1",
    date: "2022-08-01",
    title: "顶级食材，肉食爱好者无法拒绝的美味",
    content: `我们精选顶级食材，以精准的刀工切割，配以考究的烹饪手法，最后予以您温暖细致的服务呈现出这令人无法拒绝珍馐美味。  
日本的和牛  
日本和牛是当今世界公认的品质最优秀的良种肉牛，从高到低共分为五个等级，即A1-A5,其中A5级的和牛是最顶级的，其肉大理石花纹明显，又称“雪花肉”。 由于日本和牛的肉多汁细嫩、风味独特，因为皮下脂肪分布均匀成雪花状，所以吃起来有入口即化的感觉。  
 
 
澳洲和牛  
澳洲和牛以黑毛和种为主，其肉质细嫩多汁，其雪花较其他普通品种的牛更多、更密且平均细腻，肉色红润，脂肪纹路分布迷人。 从出生之后便以牛乳、优质稻草混合富蛋白饲料进行饲养。 通过简单的煎烤之后，一股甜香的牛油味道油然而生。 澳洲和牛其牛肉结构肥瘦相间，没有筋膜，咬下去肉中均分布的大理石油脂开始融化，嘴里溢出香浓的汁水，口感嫩滑，入口即化就如同雪花落入口中。  
 
安格斯牛肉  
起源于苏格兰东北部，外貌特征是黑色无角，体躯矮而结实，肉质好，出肉率高，其肉细嫩又紧实的肌肉层叠交融，深刻、流畅、繁多而均匀，高质量的肉质特色成就了安格斯牛肉鲜嫩爽滑的上佳口感。 肌理紧致均匀，雪花纹分布均匀，口味醇厚多汁甘甜，醇香又富有嚼劲。 无论如何烹饪，都阻挡不住入口的惊艳，做牛排多汁风味浓郁，做炖煮肉质绵软口味独特。  
源之于品质优良的高端食材，匠之于细致的处理与精心的烹调，始终秉持着味道能延续，记忆就会一直都在初衷都未曾改变。 `,
  },
  {
    id: "2",
    date: "2022-08-01",
    title: "七夕之恋，与您邀约",
    content: `”浪漫银河,流淌真情浪花; 翩翩鹊桥,融通心灵大门; 火红玫瑰,酝酿甜美爱情; 痴心表白,传递真心爱恋”在中国，农历七月初七的夜晚，天气温暖，草木飘香，这就是人们俗称的七夕节，也有人称之为“乞巧节”。 相传，在每年的这个夜晚，是天上织女与牛郎在鹊桥相会之时。 传说抬头可以看到牛郎侄女的银河相会，或在瓜果架下可偷听到两人在天上相会时的脉脉情话。 引申到现在，特别是近些年来，七夕情人节已成为当代时尚男女追崇时尚表达爱意的一个特殊节日，和二月十四日情人节有异曲同工之妙。  
在此情此节之际，伍玖烧肉为此精心准备了诸多活动，邀您与所爱之人共同赴约在此，让甜蜜的爱情滋味与美妙的烧肉相互缠绕，品尝珍馐美食，见证爱情路程。 `,
  },
  {
    id: "3",
    date: "2022-08-01",
    title: "“伍玖烧肉”——开业盛典",
    content: `“烧蕴百味香，美味无可挡”  
今日迎来了伍玖烧肉新加坡的盛大开启。 伍玖烧肉一直秉承着盛情、好客、分享的华人美好文化记忆，将餐食当作生命中不可获取的舌尖精粹和精神享受。  
“结束一日公事，邀上三五好友，大啖佳肴美酒  
如厝边邻居般温暖的轻声问候，惬意自得的休憩其中  
有我有你，有肉有酒。  
一生悬命，此生如一。”  
伍玖烧肉透过供应顶级日本 A 5和牛、澳洲草饲和牛及严选美国安格斯黑牛，区隔化产品价格定位，紧抓各消费区间带群众眼球，全面满足受众需求展现绝美肉品滋味。  
此外，我们独家研制了蟹味噌甲罗烧、墨鱼香肠及鳐鱼翅等全新专属产品线，丰富未来产品线沟通渠道，时刻带给消费者味蕾惊艳。  
世间万物，沧海一粟，唯有美食和你不可辜负！  
伍玖烧肉，欢迎您的到来！  
`,
  },
  {
    id: "4",
    date: "2022-08-01",
    title: "品牌历史",
    content:
      "本店盛大开业，欢迎亲朋好友前来照顾生意，凡是今天到店的朋友，均打折给与优惠，走过路过不要错过。 机不可失时不再来，机不可失时不再来机不可失时不再来机不可失时不再来，机不可失时不再来机不可失时不再来机不可失时不再来，机不可失时不再来机不可失时不再来",
  },
];
const news_en = [
  {
    id: "1",
    date: "2022-08-01",
    title: "Top ingredients, meat lovers can't refuse.",
    content: `We select top-grade ingredients, cut with precision knife, match with exquisite cooking techniques, and finally give you warm and meticulous service to present this irresistible delicacy.
Japanese beef
Japanese beef cattle is recognized as the most excellent beef cattle in the world today. It is divided into five grades from high to low, namely A1-A5. Among them, A5 beef cattle is the top one. Its meat has obvious marble pattern, also known as "snow meat". Because the meat of Japanese and beef is juicy and tender and has a unique flavor, the subcutaneous fat is evenly distributed into snowflakes, so it tastes like melting in the mouth.
Australia and cattle
Australia and cattle are mainly black haired and breed. Their meat is tender and juicy. Their snowflakes are more dense and delicate than those of other ordinary cattle. The meat color is ruddy and the distribution of fat lines is charming. After birth, they were fed with milk, high-quality rice straw and protein rich feed. After simple frying and baking, a sweet and fragrant flavor of butter arises spontaneously. The beef of Australia and cattle is fat and thin with no fascia. The marble grease distributed in the meat starts to melt after biting. The mouth overflows with fragrant juice, and the taste is tender and smooth. It melts in the mouth, just like snowflakes falling in the mouth.
Angus Beef
Originating in the northeast of Scotland, the appearance is characterized by black and hornless, short and solid body, good meat quality, high meat yield, delicate and compact meat, deep, smooth, diverse and uniform. The high-quality meat characteristics make Angus Beef fresh, tender and smooth. The texture is tight and uniform, and the snowflake pattern is evenly distributed. The taste is mellow, juicy and sweet, mellow and chewy. No matter how you cook, you can't stop the amazing entrance. The steak is juicy and rich in flavor, and the stew is soft and unique in taste.
From the high-end food materials with excellent quality, the craftsman's meticulous processing and careful cooking, always insists that the taste can continue, and the memory will never change.`,
  },
  {
    id: "2",
    date: "2022-08-01",
    title: "Qixi love, invite you",
    content: `”Romantic Milky way, flowing the waves of true feelings; The flying magpie bridge is the gate to the soul; Fiery red rose, brewing sweet love; In China, on the night of the seventh day of the seventh lunar month, the weather is warm and the grass and trees are fragrant. This is commonly known as the Qixi Festival and also known as the "Qiqiao Festival". It is said that on this night of each year, the weaver girl and the cowherd meet at the magpie bridge. It is said that when you look up, you can see the Milky way meeting of Niulang's niece, or you can overhear the love words of two people when they meet in the sky under the melon and fruit rack. Now, especially in recent years, Qixi Valentine's day has become a special festival for fashionable men and women to pursue fashion and express their love. It is similar to Valentine's day on February 14.
On the occasion of this festival, Wu Jiu Shaorou has carefully prepared many activities for this purpose, inviting you and your loved ones to come here together to make sweet love taste and wonderful Shaorou intertwine, taste delicacies and witness the love journey.`,
  },
  {
    id: "3",
    date: "2022-08-01",
    title: `"Wujiu roast meat" -- Opening Ceremony`,
    content: `"Shaoyun has all kinds of flavors, and the taste is unstoppable"
Today, we welcome the grand opening of Wujiu roast meat Singapore. Wujiu roast meat has always adhered to the good cultural memory of the Chinese people, which is warm, hospitable and shared. It treats meals as the essence of the tongue and spiritual enjoyment that can not be obtained in life.
"At the end of the day's business, I invited three or five friends to enjoy delicious food and wine
Warm and gentle greetings like neighbors near the house, and a pleasant rest
I have you, meat and wine.
My life is hanging over my head, and this life is like one. "
By supplying top-grade Japanese a 5 and cattle, Australian grass fed and cattle and strictly selected American Angus black cattle, Wujiu roast meat has differentiated the price positioning of the products, focused on various consumer segments and attracted the attention of the masses, fully meeting the needs of the audience and showing the taste of excellent meat.
In addition, we have developed new and exclusive product lines such as crab miso Jialuo, cuttlefish sausage and ray shark fin, which enrich the communication channels of future product lines and constantly surprise consumers' taste buds.
Everything in the world is a drop in the ocean. Only food and you can live up to it!
Welcome to Wujiu roast meat!`,
  },
  {
    id: "4",
    date: "2022-08-01",
    title: "Brand history",
    content: `"Shaoyun has all kinds of flavors, and the taste is unstoppable"
Today, we welcome the grand opening of Wujiu roast meat Singapore. Wujiu roast meat has always adhered to the good cultural memory of the Chinese people, which is warm, hospitable and shared. It treats meals as the essence of the tongue and spiritual enjoyment that can not be obtained in life.
"At the end of the day's business, I invited three or five friends to enjoy delicious food and wine
Warm and gentle greetings like neighbors near the house, and a pleasant rest
I have you, meat and wine.
My life is hanging over my head, and this life is like one. "
By supplying top-grade Japanese a 5 and cattle, Australian grass fed and cattle and strictly selected American Angus black cattle, Wujiu roast meat has differentiated the price positioning of the products, focused on various consumer segments and attracted the attention of the masses, fully meeting the needs of the audience and showing the taste of excellent meat.
In addition, we have developed new and exclusive product lines such as crab miso Jialuo, cuttlefish sausage and ray shark fin, which enrich the communication channels of future product lines and constantly surprise consumers' taste buds.
Everything in the world is a drop in the ocean. Only food and you can live up to it!
Welcome to Wujiu roast meat!`,
  },
];

const total = news.length;
</script>

<template>
  <div :class="$style.container">
    <div v-if="!!inner.news">
      <MobileDetail :detail="inner.news" @hide="changeVisible"></MobileDetail>
    </div>
    <div :class="$style.title">{{ $t("newsTitle") }}</div>
    <div :class="$style.news">
      <div
        @click="showVisible(i)"
        :class="$style.news_box"
        v-if="
          $route.params.language == 'zh' || $route.params.language == 'hant'
        "
        v-for="i in i18n.locale.value == 'hant' ? news : nesw_zh"
        :key="i.id"
      >
        <div :class="$style.news_time">{{ i.date }}</div>
        <div :class="$style.news_title">{{ i.title }}</div>
        <div :class="$style.news_content">{{ i.content }}</div>
      </div>
      <div
        @click="showVisible(i)"
        :class="$style.news_box"
        v-else
        v-for="i in news_en"
      >
        <div :class="$style.news_time">{{ i.date }}</div>
        <div :class="$style.news_title">{{ i.title }}</div>
        <div :class="$style.news_content">{{ i.content }}</div>
      </div>
    </div>

    <!-- <div :class="$style.pagination">
      <div :class="$style.pagination_button">
        <Icon :class="$style.pagination_icon" id="left" />
      </div>
      <div v-for="i in 1" :class="$style.pagination_button">{{ i }}</div>
      <div :class="$style.pagination_button">
        <Icon :class="$style.pagination_icon" id="right" />
      </div>
    </div> -->

    <div :class="$style.footer">
      <NuxtLink :to="$route.path" :class="$style.to_top">
        <Icon id="top" />
      </NuxtLink>
      <NuxtLink :class="$style.foot_logo" :to="`/${$route.params.language}/`">
        <img src="/logo/logo_mb.png" alt="logo" />
      </NuxtLink>
      <div :class="$style.contact">
        <div>{{ $t("address") }}：35 BOAT QUAY, SINGAPORE 049824</div>
        <div>{{ $t("telephone") }}：6235 3818</div>
        <div>{{ $t("mailbox") }}：CONTACT@59.COM</div>
      </div>
    </div>
  </div>
</template>

<style module lang="less">
.container {
  display: flex;
  flex-direction: column;
  width: 750mpx;
  background-image: url("/other/bg_21x.png");
  .title {
    padding: 50mpx 0 0;
    height: 52mpx;
    line-height: 42mpx;
    font-size: 36mpx;
    letter-spacing: 10mpx;
    font-family: myFirstFont;
    color: #ffffff;
    text-align: center;
    margin-bottom: 32mpx;
  }
  .news {
    box-sizing: border-box;
    padding: 0 50mpx;
    .news_box {
      margin-bottom: 64mpx;
      .news_time {
        height: 23mpx;
        font-size: 24mpx;
        font-family: myFirstFont;
        color: #999999;
        line-height: 28mpx;
        letter-spacing: 3mpx;
      }
      .news_title {
        padding: 4mpx 0 12mpx;
        min-height: 40mpx;
        font-size: 32mpx;
        font-family: myFirstFont;
        font-weight: 500;
        color: #ffffff;
        line-height: 38mpx;
        letter-spacing: 4mpx;
        border-bottom: 2mpx solid #fff;
        margin: 15mpx 0 16mpx 0;
      }
      .news_content {
        height: 120mpx;
        font-size: 20mpx;
        font-family: myFirstFont;
        color: #e6e6e6;
        line-height: 40mpx;
        letter-spacing: 2mpx;
        word-break: break-all;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: pre-line;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 3;
      }
    }
  }
  .pagination {
    font-size: 18mpx;
    font-family: myFirstFont;
    font-weight: 500;
    color: #ffffff;
    display: flex;
    justify-content: center;
  }
  .pagination_button {
    width: 40mpx;
    font-size: 18mpx;
    line-height: 18mpx;
    height: 40mpx;
    border: 1mpx solid #ffffff;
    margin: 0 16mpx;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    user-select: none;
  }

  .footer {
    margin-top: 64px;
    .to_top {
      width: 50px;
      height: 50px;
      background: rgba(0, 0, 0, 0.5);
      opacity: 1;
      z-index: 100;
      border-radius: 50%;
      position: absolute;
      top: -30px;
      left: 50%;
      transform: translate(-50%);
      cursor: pointer;
      font-size: 28px;
      color: #fff;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    display: flex;
    justify-content: center;
    flex-direction: column;

    background: #030002;
    position: relative;
    padding: 56mpx 0 40mpx 0;

    .contact {
      display: flex;
      flex-direction: column;
      div {
        text-align: center;
        line-height: 38mpx;
        font-size: 24mpx;
        color: #ffffff;
        letter-spacing: 4mpx;
        margin-bottom: 10mpx;
      }
    }
    .foot_logo {
      margin: 0 auto;
      margin-bottom: 20mpx;
      img {
        display: block;
        width: 304mpx;
        height: 86mpx;
      }
    }
  }
}
</style>
