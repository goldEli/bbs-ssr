const swiperImgs = [
  [
    {
      id: 1,
      source: "/cross/cross_japanesewagyuA5_1.jpg",
      name: "日本A5和牛菲力",
      name_hant: "日本A5和牛菲力",
      enname: "A5 WAGYU FILET MIGNON",
      alt: "日本A5和牛菲力",
    },
    {
      id: 2,
      source: "/cross/cross_japanesewagyuA5_2.jpg",
      name: "日本A5和牛肋眼心",
      name_hant: "日本A5和牛肋眼心",
      enname: "A5 WAGYU RIBEYE ROLL",
      alt: "日本A5和牛肋眼心",
    },
    {
      id: 3,
      source: "/cross/cross_japanesewagyuA5_3.jpg",
      name: ["日本A5和牛","纽约客寿喜烧"],
      name_hant: ["日本A5和牛","紐約客壽喜燒"],
      enname: "A5 WAGYU SUKIYAKI",
      alt: "日本A5和牛紐約客壽喜燒",
      isList:true
    },
  ],
  [
    {
      id: 1,
      source: "/cross/cross_australanwagyu_1.jpg",
      name: "澳洲和牛DNA牛舌",
      name_hant: "澳洲和牛DNA牛舌",
      enname: "AUS WAGYU DNA TONGGUE",
      alt: "澳洲和牛DNA牛舌",
    },
    {
      id: 2,
      source: "/cross/cross_australanwagyu_2.jpg",
      name: "澳洲和牛辮子肉",
      name_hant: "澳洲和牛辮子肉",
      enname: "AUS WAGYU MS8 BRAIDED TRI TIP",
      alt: "澳洲和牛辮子肉",
    },
    {
      id: 3,
      source: "/cross/cross_australanwagyu_3.jpg",
      name: "澳洲和牛厚切牛舌",
      name_hant: "澳洲和牛厚切牛舌",
      enname: "AUS WAGYU THICK CUT TONGUE",
      alt: "澳洲和牛厚切牛舌",
    },
    {
      id: 4,
      source: "/cross/cross_australanwagyu_4.jpg",
      name: "澳洲和牛內橫隔膜",
      name_hant: "澳洲和牛內橫隔膜",
      enname: "AUS WAGYU MS8 INSIDE SKIRT",
      alt: "澳洲和牛內橫隔膜",
    },
    {
      id: 5,
      source: "/cross/cross_australanwagyu_5.jpg",
      name: "澳洲和牛舌",
      name_hant: "澳洲和牛舌",
      enname: "AUS WAGYU THIN CUT TONGUE",
      alt: "澳洲和牛舌",
    },
    {
      id: 6,
      source: "/cross/cross_australanwagyu_6.jpg",
      name: "澳洲和牛舌下肉",
      name_hant: "澳洲和牛舌下肉",
      enname: "AUS WAGYU LOWER PORTION OF TONGUE",
      alt: "澳洲和牛舌下肉",
    },
    {
      id: 7,
      source: "/cross/cross_australanwagyu_7.jpg",
      name: "澳洲和牛和牛菲力",
      name_hant: "澳洲和牛和牛菲力",
      enname: "AUS WAGYU FILI",
      alt: "澳洲和牛和牛菲力",
    },
    {
      id: 8,
      source: "/cross/cross_australanwagyu_8.jpg",
      name: "澳洲和牛和牛壺漬",
      name_hant: "澳洲和牛和牛壺漬",
      enname: "AUS WAGYU POT STAIN",
      alt: "澳洲和牛和牛壺漬",
    },
    {
      id: 9,
      source: "/cross/cross_australanwagyu_9.jpg",
      name: "澳洲和牛和牛牛小排",
      name_hant: "澳洲和牛和牛牛小排",
      enname: "AUS WAGYU BEEF SHORT STEAK",
      alt: "澳洲和牛和牛牛小排",
    },
  ],
  [
    {
      id: 1,
      source: "/cross/cross_americanbeff_1.jpg",
      name: "美国达拉斯 ",
      name_hant: "美國達拉斯",
      enname: "US PRIME DALLAS CUBE",
      alt: "美國達拉斯",
    },
    {
      id: 2,
      source: "/cross/cross_americanbeff_2.jpg",
      name: "美国顶级肋眼牛排",
      name_hant: "美國頂級肋眼牛排",
      enname: "US PRIME RIBEYE STEAK",
      alt: "美國頂級肋眼牛排",
    },
    {
      id: 3,
      source: "/cross/cross_americanbeff_3.jpg",
      name: "美国牛肋条",
      name_hant: "美國牛肋條",
      enname: "US CHOICE RIB STRIP",
      alt: "美國牛肋條",
    },
    {
      id: 4,
      source: "/cross/cross_americanbeff_4.jpg",
      name: "美国去骨牛小排 ",
      name_hant: "美國去骨牛小排",
      enname: "US PRIME BONELESS SHORT RIB",
      alt: "美國去骨牛小排",
    },
    {
      id: 5,
      source: "/cross/cross_americanbeff_5.jpg",
      name: "御作海胆炙牛肉 ",
      name_hant: "御作海膽炙牛肉",
      enname: "ABURI US BEFF WITH UNI NIGIRI",
      alt: "御作海膽炙牛肉",
    },
  ],
  [
    {
      id: 1,
      source: "/cross/cross_pork_1.jpg",
      name: "伊比利豬肩排",
      name_hant: "伊比利豬肩排",
      enname: "IBERICO PORK SHOULDER BLADE",
      alt: "伊比利豬肩排",
    },
  ],
  [
    {
      id: "1",
      source: "/cross/cross_chicken_1.jpg",
      name: "去骨土鸡腿肉",
      name_hant: "去骨土雞腿肉",
      enname: "BONELESS CHICKEN THIGH",
      alt: "去骨土雞腿肉",
    },
    {
      id: "2",
      source: "/cross/cross_chicken_2.jpg",
      name: "鸡软骨 ",
      name_hant: "雞軟骨",
      enname: "CHICKEN CARTILAGE SOFT BONE",
      alt: "雞軟骨",
    },
    {
      id: "3",
      source: "/cross/cross_chicken_3.jpg",
      name: "焱烤手羽先 ",
      name_hant: "焱烤手羽先",
      enname: "FRIST A HAND IS ROASTED",
      alt: "焱烤手羽先",
    },
  ],
  [
    {
      id: "1",
      source: "/cross/cross_mutton_1.jpg",
      name: "頂級法式羊小排",
      enname: "FRENCHED LAMB CHOP",
      alt: "頂級法式羊小排",
    },
  ],
  [
    {
      id: "1",
      source: "/cross/cross_seafood_1.jpg",
      name: "软丝 ",
      name_hant: "軟絲",
      enname: "NERITIC SQUID",
      alt: "軟絲",
    },
    {
      id: "2",
      source: "/cross/cross_seafood_2.jpg",
      name: "花枝",
      name_hant: "花枝",
      enname: "CUTTLEFISH",
      alt: "花枝",
    },
    {
      id: "3",
      source: "/cross/cross_seafood_3.jpg",
      name: "蟹膏生干贝",
      name_hant: "蟹膏生干貝",
      enname: "SCALLOP WITH RAW CRAB ROE SASHIMI",
      alt: "蟹膏生干貝",
    },
    {
      id: "4",
      source: "/cross/cross_seafood_4.jpg",
      name: "蟹味噌甲罗烧 ",
      name_hant: "蟹味噌甲羅燒",
      enname: "RAW CRAB ROE IN CRAB SHELL",
      alt: "蟹味噌甲羅燒",
    },
    {
      id: "5",
      source: "/cross/cross_seafood_5.jpg",
      name: "墨鱼香肠",
      name_hant: "墨魚香腸",
      enname: "CUTTLEFISH SAUSAGE",
      alt: "墨魚香腸",
    },
    {
      id: "6",
      source: "/cross/cross_seafood_6.jpg",
      name: "松叶蟹脚 ",
      name_hant: "松葉蟹腳",
      enname: "QUEEN SNOW CRAB LEG",
      alt: "松葉蟹腳",
    },
    {
      id: "7",
      source: "/cross/cross_seafood_7.jpg",
      name: "鳐鱼翅一夜干 ",
      name_hant: "鰩魚翅一夜干",
      enname: "SKATE FIN",
      alt: "鰩魚翅一夜干",
    },
    {
      id: "8",
      source: "/cross/cross_seafood_8.jpg",
      name: "草虾 ",
      name_hant: "草蝦",
      enname: "PRAWNS",
      alt: "草蝦",
    },
    {
      id: "9",
      source: "/cross/cross_seafood_9.jpg",
      name: "鲑鱼 ",
      name_hant: "鲑鱼",
      enname: "SALMON",
      alt: "鲑鱼",
    },
    {
      id: "10",
      source: "/cross/cross_seafood_10.jpg",
      name: "鯖魚 ",
      name_hant: "鯖魚",
      enname: "MACKEREL",
      alt: "鯖魚",
    },
    {
      id: "11",
      source: "/cross/cross_seafood_11.jpg",
      name: "三味珍寶鮮干貝 ",
      name_hant: "三味珍寶鮮干貝",
      enname: "SANWEI TREASURE SCALLOPS",
      alt: "三味珍寶鮮干貝",
    },
  ],
  [
    {
      id: 1,
      source: "/cross/cross_dessert_1.jpg",
      name: "自制地瓜起司",
      name_hant: "自制地瓜起司",
      enname: "HOMEMADE SWEET POTATO WITH CHEESE",
      alt: "自制地瓜起司",
    },
    {
      id: 2,
      source: "/cross/cross_dessert_2.jpg",
      name: "自制焦糖布丁",
      name_hant: "自制焦糖布丁",
      enname: "HOMEMADE CARAMEL PUDDING",
      alt: "自制焦糖布丁",
    },
  ],
  [
    {
      id: 1,
      source: "/cross/cross_sides_1.jpg",
      name: "毛豆",
      name_hant: "毛豆",
      enname: "EDAMAME",
      alt: "毛豆",
    },
    {
      id: 2,
      source: "/cross/cross_sides_2.jpg",
      name: "泡菜",
      name_hant: "泡菜",
      enname: "KIMCHI",
      alt: "泡菜",
    },
    {
      id: 3,
      source: "/cross/cross_sides_3.jpg",
      name: "和风芥子洋葱丝 ",
      name_hant: "和風芥子洋蔥絲",
      enname: "JAPANESE DRESSING ONION",
      alt: "和风芥子洋葱丝",
    },
    {
      id: 4,
      source: "/cross/cross_sides_4.jpg",
      name: "胡董招牌清燉牛肉湯 ",
      name_hant: "胡董招牌清燉牛肉湯",
      enname: "CONSOMME BEEF SOUP",
      alt: "胡董招牌清燉牛肉湯",
    },
  ],
  [
    {
      id: 1,
      source: "/cross/cross_mainmeals_1.jpg",
      name: "白饭",
      name_hant: "白飯",
      enname: "JAPANESE RICE",
      alt: "米饭",
    },
    {
      id: 2,
      source: "/cross/cross_mainmeals_2.jpg",
      name: "鲑鱼茶泡饭 ",
      name_hant: "鮭魚茶泡飯",
      enname: "OCHAZUKE JAPANESE RICE SOUP",
      alt: "鲑鱼茶泡饭",
    },
  ],
  [
    {
      id: 1,
      source: "/cross/cross_salad_1.jpg",
      name: "综合沙拉",
      name_hant: "綜合沙拉",
      enname: "HOUSE SPECIAL SALAD",
      alt: "综合沙拉",
    },
    {
      id: 2,
      source: "/cross/cross_salad_2.jpg",
      name: "鸡胸沙拉",
      name_hant: "鸡胸沙拉",
      enname: "CHICKEN SALAD",
      alt: "鸡胸沙拉",
    },
  ],
  [
    {
      id: 1,
      source: "/cross/cross_vegetables_1.jpg",
      name: "日本山药 ",
      name_hant: "日本山藥",
      enname: "JAPANESE YAM",
      alt: "日本山药",
    },
    {
      id: 2,
      source: "/cross/cross_vegetables_2.jpg",
      name: "玉米",
      name_hant: "玉米",
      enname: "CORN",
      alt: "玉米",
    },
    {
      id: 3,
      source: "/cross/cross_vegetables_3.jpg",
      name: "栉瓜 ",
      name_hant: "櫛瓜",
      enname: "ZUCCHINI",
      alt: "櫛瓜",
    },
    {
      id: 4,
      source: "/cross/cross_vegetables_4.jpg",
      name: "杏鲍菇 ",
      name_hant: "杏鮑菇",
      enname: "KING OYSTER MUSHROOM",
      alt: "杏鲍菇",
    },
    {
      id: 5,
      source: "/cross/cross_vegetables_5.jpg",
      name: "青椒",
      name_hant: "青椒",
      enname: "CAPSICUM",
      alt: "青椒",
    },
    {
      id: 6,
      source: "/cross/cross_vegetables_6.jpg",
      name: "生菜",
      name_hant: "生菜",
      enname: "LETTUCE",
      alt: "生菜",
    },
  ],
  [
    {
      id: "1",
      source: "/cross/cross_beverages_1.jpg",
      name: "姜汁汽水 ",
      name_hant: "薑汁汽水",
      enname: "GINGLE ALE",
      alt: "薑汁汽水",
    },
    {
      id: "2",
      source: "/cross/cross_beverages_2.jpg",
      name: "可尔必思 ",
      name_hant: "可爾必思",
      enname: "CALPIS SODA / WATER",
      alt: "可爾必思",
    },
    {
      id: "3",
      source: "/cross/cross_beverages_3.jpg",
      name: "可乐",
      name_hant: "可樂",
      enname: "COCA-COLA",
      alt: "可樂",
    },
    {
      id: "4",
      source: "/cross/cross_beverages_4.jpg",
      name: "柳橙汁",
      name_hant: "柳橙汁",
      enname: "ORANGE JUICE",
      alt: "柳橙汁",
    },
    {
      id: "5",
      source: "/cross/cross_beverages_5.jpg",
      name: "天然气泡矿泉水 ",
      name_hant: "天然氣泡礦泉水",
      enname: "SAN PELLEGRINO SPARKLING",
      alt: "天然氣泡礦泉水",
    },
    {
      id: "6",
      source: "/cross/cross_beverages_6.jpg",
      name: "文山包种 ",
      name_hant: "文山包種",
      enname: "OOLONG TEA - HOT/COLD(REFILLABLE)",
      alt: "文山包種",
    },
  ],
];

const menus = [
  { id: 1, name: "日本和牛" },
  { id: 2, name: "澳洲和牛" },
  { id: 3, name: "美國牛肉" },
  { id: 4, name: "豬肉" },
  { id: 5, name: "雞肉" },
  { id: 6, name: "羊肉" },
  { id: 7, name: "海鮮" },
  { id: 8, name: "甜點" },
  { id: 9, name: "小菜" },
  { id: 10, name: "主食" },
  { id: 11, name: "沙拉" },
  { id: 12, name: "蔬菜" },
  { id: 13, name: "飲料" },
];
const menus_hant = [
  { id: 1, name: "日本和牛" },
  { id: 2, name: "澳洲和牛" },
  { id: 3, name: "美国牛肉" },
  { id: 4, name: "猪肉" },
  { id: 5, name: "鸡肉" },
  { id: 6, name: "羊肉" },
  { id: 7, name: "海鲜" },
  { id: 8, name: "甜点" },
  { id: 9, name: "小菜" },
  { id: 10, name: "主食" },
  { id: 11, name: "沙拉" },
  { id: 12, name: "蔬菜" },
  { id: 13, name: "饮料" },
];
const menusen = [
  { id: 1, name: "AUSTRALIAN WAGYU" },
  { id: 2, name: "AMERICAN BEEF" },
  { id: 3, name: "JAPANESE WAGYU A5" },
  { id: 4, name: "PORK" },
  { id: 5, name: "CHICKEN" },
  { id: 6, name: "MUTTON" },
  { id: 7, name: "SEAFOOD" },
  { id: 8, name: "DESSERT" },
  { id: 9, name: "SIDES" },
  { id: 10, name: "MAIN MEALS" },
  { id: 11, name: "SALAD" },
  { id: 12, name: "VEGETABLES" },
  { id: 13, name: "BEVERAGE" },
];
const texts = [
  [
    {
      id: 1,
      text: [
        "有别于日本和牛，细选和牛特色部位",
        "配以精心烹灼，初尝的是甜香牛油，口齿皆香",
        "轻咬一口，口感滑嫩多汁",
        "让您感受到极致和牛的鲜香美味",
        "最美味的烧肉，在此间绽放于您的口中",
      ],
    },
  ],
  [
    {
      id: 2,
      text: [
        "严选安美国达拉斯牛肉",
        "细嫩又紧实的肌肉层叠交融",
        "醇厚多汁且甘甜",
        "配以着重酱烧调味工艺",
        "让简单的石紋牛小排却藏着人间最好的美味。",
      ],
    },
  ],
  [
    {
      id: 3,
      text: [
        "仅选用顶级A5和牛，选以最精致的部位",
        "著以些许调味，雪花般的纹理和独有的香气",
        "在嘴中肆意的冲击着您的味蕾",
        "犹如“无声细下飞碎雪，放著未觉全盘空”。",
      ],
    },
  ],
  [
    {
      id: 4,
      text: [
        "特选西班牙伊比利猪肩排",
        "肉质纯净且带有淡淡核果香味",
        "单纯加入盐之花",
        "炭火烧制，凸显原始风味",
        "每口的肩排都口感香嫩，脂香恰到好处",
        "沉浸式享受此间美味。",
      ],
    },
  ],
  [
    {
      id: 5,
      text: [
        "精选每只鸡的鸡胸软骨和鸡腿",
        "配以独家研制酱料",
        "配以炭火烤烧，口感绝美",
        "每块软骨和无骨鸡腿肉搭配一口清酒",
        "美酒佳肴具兼得。",
      ],
    },
  ],

  [
    {
      id: 6,
      text: [
        "细选优质羊排骨中肋骨瘦小的部分羊小排，肉层厚实，有软骨",
        "肥瘦结合，质地松软，肉质鲜美柔嫩",
        "古医有云“羊肉能暖中补虚,补中益气,开胃健身",
        "益肾气,养胆明目,治虚劳寒冷,五劳七伤",
        "满满一口羊小排，让、您身、心皆怡。",
      ],
    },
  ],
  [
    {
      id: 7,
      text: [
        "挑选优质海域海鲜",
        "从海里到碗里，全程冷链",
        "极致的保鲜，就像厨房在海边",
        "海中珍馐，59与您共享。",
      ],
    },
  ],
  [
    {
      id: 8,
      text: [
        "美味多汁的烧肉配以甘甜细腻的甜品",
        "两种浑然不同的风格和滋味感受",
        "刷新您的触觉感官。",
      ],
    },
  ],
  [
    {
      id: 9,
      text: [
        "饱满清香的毛豆",
        "酱香鲜艳的泡菜",
        "清脆爽口的洋葱丝",
        "都是您开胃伴饭的不二首选。",
      ],
    },
  ],
  [
    {
      id: 10,
      text: [
        "选用优质特等大米，轻柔搓洗，浸泡2小时",
        "让米粒充分吸收水分，颗颗饱满如珠",
        "精准的科学米水比例蒸煮、闷蒸方法",
        "每一粒米粒都透露出淳淳的米香，让您欲先一品。",
      ],
    },
  ],
  [
    {
      id: 11,
      text: [
        "配以新鲜青嫩的包菜、甘蓝和海带",
        "着上些许芝麻，最后淋上清爽酸甜的青柠汁水",
        "简单的搅拌均匀，每口都清脆爽口",
        "淡淡的酸甜充斥着口腔，是最为美妙的开胃前菜。",
      ],
    },
  ],
  [
    {
      id: 12,
      text: [
        "荤，有鱼有肉，却也有得有失",
        "素，无滋无味，却也有欢有乐",
        "我们选以新鲜青嫩的蔬菜",
        "让这份清新的绿色食材间中流动",
        "流进您的眼睛",
        "融入您的腹中。",
      ],
    },
  ],
  [
    {
      id: 13,
      text: [
        "美肴与美酒",
        "其他皆具有",
        "我们为不喝酒的您提供了多款独家特色饮料",
        "吃与喝“不离不弃”",
      ],
    },
  ],
];
const texts_hant = [
  [
    {
      id: 1,
      text: [
        "有別於日本和牛，細選和牛特色部位",
        "配以精心烹灼，初嘗的是甜香牛油，口齒皆香",
        "輕咬一口，口感滑嫩多汁",
        "讓您感受到極致和牛的鮮香美味",
        "最美味的燒肉，在此間綻放於您的口中",
      ],
    },
  ],
  [
    {
      id: 2,
      text: [
        "嚴選安美國達拉斯牛肉",
        "細嫩又緊實的肌肉層疊交融",
        "醇厚多汁且甘甜",
        "配以着重醬燒調味工藝",
        "讓簡單的石紋牛小排卻藏着人間最好的美味",
      ],
    },
  ],
  [
    {
      id: 3,
      text: [
        "僅選用頂級A5和牛，選以最精緻的部位",
        "著以些許調味，雪花般的紋理和獨有的香氣",
        "在嘴中肆意的衝擊着您的味蕾",
        "猶如“無聲細下飛碎雪，放著未覺全盤空”。",
      ],
    },
  ],
  [
    {
      id: 4,
      text: [
        "特選西班牙伊比利豬肩排",
        "肉質純淨且帶有淡淡核果香味",
        "單純加入鹽之花",
        "炭火燒製，凸顯原始風味",
        "每口的肩排都口感香嫩，脂香恰到好處",
        "沉浸式享受此間美味",
      ],
    },
  ],
  [
    {
      id: 5,
      text: [
        "精選每隻雞的雞胸軟骨和雞腿",
        "配以獨家研製醬料",
        "配以炭火烤燒，口感絕美",
        "每塊軟骨和無骨雞腿肉搭配一口清酒",
        "美酒佳餚具兼得",
      ],
    },
  ],

  [
    {
      id: 6,
      text: [
        "细选优质羊排骨中肋骨瘦小的部分羊小排，肉层厚实，有软骨",
        "肥瘦结合，质地松软，肉质鲜美柔嫩",
        "古医有云“羊肉能暖中补虚,补中益气,开胃健身",
        "益肾气,养胆明目,治虚劳寒冷,五劳七伤",
        "满满一口羊小排，让、您身、心皆怡",
      ],
    },
  ],
  [
    {
      id: 7,
      text: [
        "挑選優質海域海鮮",
        "從海里到碗裏，全程冷鏈",
        "極致的保鮮，就像廚房在海邊",
        "海中珍饈，59與您共享",
      ],
    },
  ],
  [
    {
      id: 8,
      text: [
        "美味多汁的燒肉配以甘甜細膩的甜品",
        "兩種渾然不同的風格和滋味感受",
        "刷新您的觸覺感官",
      ],
    },
  ],
  [
    {
      id: 9,
      text: [
        "飽滿清香的毛豆",
        "醬香鮮豔的泡菜",
        "清脆爽口的洋蔥絲",
        "都是您開胃伴飯的不二首選",
      ],
    },
  ],
  [
    {
      id: 10,
      text: [
        "選用優質特等大米，輕柔搓洗，浸泡2小時",
        "讓米粒充分吸收水分，顆顆飽滿如珠",
        "精準的科學米水比例蒸煮、悶蒸方法",
        "每一粒米粒都透露出淳淳的米香，讓您欲先一品。",
      ],
    },
  ],
  [
    {
      id: 11,
      text: [
        "配以新鮮青嫩的包菜、甘藍和海帶",
        "着上些許芝麻，最後淋上清爽酸甜的青檸汁水",
        "簡單的攪拌均勻，每口都清脆爽口",
        "淡淡的酸甜充斥着口腔，是最爲美妙的開胃前菜。",
      ],
    },
  ],
  [
    {
      id: 12,
      text: [
        "葷，有魚有肉，卻也有得有失",
        "素，無滋無味，卻也有歡有樂",
        "我們選以新鮮青嫩的蔬菜",
        "讓這份清新的綠色食材間中流動",
        "流進您的眼睛",
        "融入您的腹中。",
      ],
    },
  ],
  [
    {
      id: 13,
      text: [
        "美餚與美酒",
        "其他皆具有",
        "我們爲不喝酒的您提供了多款獨家特色飲料",
        "吃與喝“不離不棄”",
      ],
    },
  ],
];
const enTexts = [
  [
    {
      id: 1,
      text: `
      A great juxtaposition against Japanese Wagyu beef, 
      the Australian beef is fairly varied in terms of flavour due to the country’s way of producing Wagyu. 
      The country’s open farmlands and grass-fed cattles yields its delightfully unique flavour profile. 
      `,
    },
  ],
  [
    {
      id: 2,
      text: `
      Hearty and sublimely beefy, 
      American beef is characterised by its meaty and juicy texture, 
      enveloping the entire palate everytime you sink your teeth into it.
      `,
    },
  ],
  [
    {
      id: 3,
      text: `
      Indulge in the wonderful flavours of wagyu beef with our curation of exclusive premium A5-grade Wagyu beef.
      Wagyu Beef, 
      widely recognised as the tenderest variant of beef, 
      has earned its exclusivity with its abundance of marbling and richness. 
      Each mouthful of this widely celebrated meat ignites a burst of beefy flavours within the palate.
      `,
    },
  ],
  [
    {
      id: 4,
      text: `
      As a result of its predominantly acorn diet and genetics, 
      Iberico Pork is distinctively more flavourful than regular pork, 
      and it is the richest of pork variants you can find. 
      Select the shoulder blade or loin cuts to experience its gastronomical wonderment. 
      `,
    },
  ],
  [
    {
      id: 5,
      text: `
      Dexterously clipped out parts of top-grade chicken such as 
      the cartilage of chicken breast meat and chicken thigh are marinated in our special sauce, 
      and gets a delightful enhancement through grilling, 
      amalgamating the smokiness of the grill with tenderised meats. 
      Maximise the enjoyment by pairing the poultry with our wide range of Sakes. 
      `,
    },
  ],
  [
    {
      id: 6,
      text: `
      Savour the unique flavour of mutton with our French lamb chop. 
      Saturating the smokiness of the grill gives its distinctive flavour 
      a boost while its firm texture enables pleasurable bites. 
      `,
    },
  ],
  [
    {
      id: 7,
      text: `
      With the partnership with Hutong, 
      an established brand of more than 10 years, 
      we are able to leverage on the vast network of seafood supplies, 
      accessing some of the rarest and premium ingredients from the seas. 
      A highlight not to be missed is the raw crab roe in crab shell and crab roe in scallops. 
      leverage
      `,
    },
  ],
  [
    {
      id: 8,
      text: `
      Succulent roast meat with sweet and delicate desserts,.  
      Two totally different styles and tastes,  
      Refresh your sense of touch , 
      `,
    },
  ],
  [
    {
      id: 9,
      text: `
      Rich and fragrant edamame,
      Bright pickles, 
      Crisp, crisp onion, 
      Are your first choice for appetizer and meal,
      `,
    },
  ],
  [
    {
      id: 10,
      text: `
      Traditional Taiwanese delicacies with 
      a luxurious twist using high quality rice. 
      The most notable dish not to be missed is the Wagyu Beef Japanese Rice, 
      a reimagination of the signature Taiwanese delicacy, braised pork rice. 
      `,
    },
  ],
  [
    {
      id: 11,
      text: `
      With fresh and tender cabbage, kale and kelp,
      With some sesame seeds, and then a drizzle of fresh, sweet and sour lime juice,  
      It's a simple mix, every bite is crisp, 
      A touch of sweet and sour filling the mouth is the most wonderful appetize . 
      `,
    },
  ],
  [
    {
      id: 12,
      text: `
      Embrace the produce from nature and 
      the natural sweetness of fresh vegetables with each smoky bite. 
      `,
    },
  ],
  [
    {
      id: 13,
      text: `
      Fine dishes and fine wine,
      Everything else has, ,  
      For those of you who don't drink, we have a number of exclusive specialty drinks,  
    Never give up eating and drinking , 
      `,
    },
  ],
];
export { menusen, menus, swiperImgs, texts, enTexts, menus_hant, texts_hant };
