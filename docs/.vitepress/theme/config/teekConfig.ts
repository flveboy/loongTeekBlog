import type { TeekConfig } from "vitepress-theme-teek/config";

// 文档风格 配置
export const teekDocConfig: TeekConfig = {
  themeEnhance: {
    layoutSwitch: {
      defaultMode: "bothWidthAdjustable",
    },
  },
  //公告栏
  notice: {
    enabled: true,
    position: "center",
  },   
};

// 博客公共部分 配置
const teekBlogCommonConfig: TeekConfig = {
  teekHome: true,
  vpHome: false,
  wallpaper: {
    enabled: true,
  },
  // footerInfo: {
  //   customHtml: `<span id="runtime"></span>`, // 需要搭配 .vitepress/theme/helper/useRuntime.ts 使用
  // },
  blogger: {
    avatar: "/img/xyy.webp",
    shape: "circle-rotate",
    name: "One",
    slogan: "明心静性，爱自己",
    
    circleBgImg: "/img/bg/14.webp",
    circleBgMask: false,
    color: "#fff",
  },

  //公告栏
  notice: {
    enabled: true,
    position: "center",
  },



  footerGroup: [
    {
      title: "首页",
      links: [
        { name: "首页", link: "/" },
      ],
    },
    {
      title: "开源项目",
      links: [
        { name: "Teek-One", link: "/teek" },
        { name: "Typora-One", link: "/typora-theme-one" },
      ],
    },
    {
      title: "娱乐",
      links: [
        { name: "相册", link: "https://photo.onedayxyy.cn/" },
        { name: "电影", link: "/movie" },
      ],
    }, 
    {
      title: "友链",
      links: [
        { name: "Teeker", link: "https://vp.teek.top" },
        { name: "Hyde", link: "https://seasir.top/" },
      ],
    },   
    {
      title: "联系我",
      links: [
        { name: "微信", link: "https://onedayxyy.cn/images/image-20230107215114763-1694437284994-1-1697348761221-1-1697407921190-1-1697636582091-3-1698965093137-1.png" },
        { name: "qq", link: "https://onedayxyy.cn/images/image-20240102205824.png" },
      ],
    },        
  ], 

  // 文章
  // article: {
  //   showIcon: true, // 作者、日期、分类、标签、字数、阅读时长、浏览量等文章信息的图标是否显示
  //   // dateFormat: "yyyy-MM-dd hh:mm:ss", // 文章日期格式，首页和文章页解析日期时使用
  //   dateFormat: "yyyy-MM-dd", // 文章日期格式，首页和文章页解析日期时使用
  //   showInfo: true, // 是否展示作者、日期、分类、标签、字数、阅读时长、浏览量等文章信息，分别作用于首页和文章页
  //   showAuthor: true, // 是否展示作者
  //   showCreateDate: true, // 是否展示创建日期
  //   showUpdateDate: true, // 是否展示更新日期，是否展示更新时间，仅在文章页显示
  //   showCategory: true, // 是否展示分类
  //   showTag: true, // 是否展示标签
  //   topTip: frontmatter => {
  //     const tip: Record<string, string> = {
  //       type: "warning",
  //       title: "注意",
  //       text: "文章发布较早，内容可能过时，阅读注意甄别。",
  //     };

  //     // frontmatter.long 为 true，则添加提示
  //     if (frontmatter.long) return tip;

  //     // frontmatter.date 大于半年，则添加提示
  //     const longTime = 6 * 30 * 24 * 60 * 60 * 1000;
  //     if (frontmatter.date && Date.now() - new Date(frontmatter.date).getTime() > longTime) return tip;
  //   },

  //   // imageViewer: {
  //   //   hideOnClickModal: true,
  //   // },    
  // }, 

  // 赞赏在文章下方
  appreciation: {
    position: "doc-after",
    options: {
      icon: "weChatPay", // 赞赏图标，内置 weChatPay 和 alipay
      expandTitle: "打赏支持", // 展开标题，支持 HTML
      collapseTitle: "下次一定", // 折叠标题，支持 HTML
      // content: `<img src='/img/alipay/1.png'>`, // 赞赏内容，支持 HTML
      content: `<img src='/img/alipay/1.png'><img src='/img/alipay/2.png'>`, // 赞赏内容，支持 HTML
      expand: false, // 是否默认展开，默认 false
    },
  },

  docAnalysis: {
    createTime: "2025-03-23",
    statistics: {
      provider: "busuanzi",
    },
  },
  friendLink: {
    list: [
      {
        avatar: "/teeker-logo-large.png",
        name: "vitepress-theme-teek",
        desc: "Teek官网",
        link: "https://vp.teek.top/",
      },  
      {
        name: "Teeker",
        desc: "朝圣的使徒，正在走向编程的至高殿堂！",
        link: "http://notes.teek.top/",
        avatar: "https://testingcf.jsdelivr.net/gh/Kele-Bingtang/static/user/avatar2.png",
      },     
      {
        avatar: "/img/website/hyde.ico",
        name: "Hyde Blog",
        desc: "人心中的成见是一座大山",
        link: "https://teek.seasir.top/",
      },
      {
        avatar: "https://wiki.eryajf.net/img/logo.png",
        name: "二丫讲梵",
        desc: "💻学习📝记录🔗分享",
        link: "https://wiki.eryajf.net/",
      },
      {
        avatar: "/img/website/sugarat.top-logo.jpeg",
        name: "粥里有勺糖",
        desc: "大佬，新颖，不错的VitePress主题",
        link: "https://sugarat.top/",
      },
      {
        name: "VitePress 快速上手中文教程",
        desc: "如果你也想搭建它，那跟我一起做吧",
        link: "https://vitepress.yiov.top/",
        avatar: "https://avatars.githubusercontent.com/u/90893790?v=4",
      },
      {
        avatar: "https://onedayxyy.cn/images/POETIZE-logo.jpg",
        name: "POETIZE",
        desc: "最美博客",
        link: "https://poetize.cn/",
      },
      {
        avatar: "https://onedayxyy.cn/images/image-20250220073534772.png",
        name: "宇阳",
        desc: "记录所学知识，缩短和大神的差距！",
        link: "https://liuyuyang.net",
      },
    ],
    // autoScroll: true,
    autoPage: true,
    titleClick: router => router.go("/friends"), // 查看更多友链
  },

  // 社交链接
  social: [
    {
      icon: "mdi:github",
      name: "GitHub",
      link: "https://github.com/OnlyOnexl",
    },
    {
      icon: "simple-icons:gitee",
      name: "Gitee",
      link: "https://gitee.com/onlyonexl/vitepress-theme-teek-one-public",
    },
    {
      icon: "icon-qq",
      iconType: "iconfont",
      name: "QQ",
      link: "http://wpa.qq.com/msgrd?v=3&uin=2675263825&site=qq&menu=yes",
    },
    {
      icon: "icon-mobile",
      iconType: "iconfont",
      name: "联系我",
      link: "https://onedayxyy.cn/?contact=true",
    },
  ],

  comment: {
    // provider: "giscus",
    provider: "twikoo",
    options: {
      // twikoo 配置，官网：https://twikoo.js.org/
      envId: "https://twikoo.onedayxyy.cn/",

      // waline 配置，官网：https://waline.js.org/
      // serverURL: "https://tk.waline.youngkbt.cn/",
      // jsLink: "https://unpkg.com/@waline/client@v3/dist/waline.js",
      // cssLink: "https://unpkg.com/@waline/client@v3/dist/waline.css",

      // giscus 配置，官网：https://giscus.app/zh-CN
      // repo: "Kele-Bingtang/vitepress-theme-kt",
      // repoId: "R_kgDONpVfBA",
      // category: "Announcements",
      // categoryId: "DIC_kwDONpVfBM4Cm3v9",

      // artalk 配置，官网：https://artalk.js.org/
      // server: "",
      // site: "",
    },
  },
 
};

// 博客风格 配置（不推荐）
export const teekBlogConfig: TeekConfig = {
  ...teekBlogCommonConfig,
  banner: {
    name: "🎉 Teek Blog",
    description: "故事由我书写，旅程由你见证，传奇由她聆听 —— 来自 Young Kbt",
  },
};

// 博客半图 配置（不推荐）
export const teekBlogParkConfig: TeekConfig = {
  ...teekBlogCommonConfig,
  banner: {
    name: "🎉 Teek Blog",
    bgStyle: "partImg",
    imgSrc: ["/img/blog/banner-bg1.webp", "/img/blog/banner-bg2.webp"],
    description: [
      "故事由我书写，旅程由你见证，传奇由她聆听 —— 来自 Young Kbt",
      "积跬步以至千里，致敬每个爱学习的你 —— 来自 Evan Xu",
      "这一生波澜壮阔或是不惊都没问题 —— 来自 Weibw",
    ],
    descStyle: "switch",
  },
};

// 博客大图 配置（推荐1）（列表风格）
export const teekBlogFullConfig: TeekConfig = {
  ...teekBlogCommonConfig,
  homeCardListPosition: "left",
  post: {
    imageViewer: { hideOnClickModal: true },
    coverImgMode: "full",
    postStyle: "list", // 文章列表风格
  },
  banner: {
    name: "🎉 One Blog",
    bgStyle: "fullImg",
    imgSrc: [
      "/img/bg/1.webp", 
      "/img/bg/2.webp", 
      "/img/bg/3.webp", 
      "/img/bg/4.webp", 
      "/img/bg/5.webp", 
      "/img/bg/6.webp", 
      "/img/bg/7.webp", 
      "/img/bg/8.webp", 
      "/img/bg/9.webp", 
      "/img/bg/10.webp", 
      "/img/bg/11.webp", 
      "/img/bg/12.webp", 
      "/img/bg/13.webp", 
      "/img/bg/14.webp", 
      "/img/bg/15.webp", 
      "/img/bg/16.webp",
      "/img/bg/17.webp",
      "/img/bg/18.webp",
      "/img/bg/19.webp",
      // "/img/bg/20.webp",
    ],
    description: [
      "故事由我书写，旅程由你见证，传奇由她聆听 —— 来自 Young Kbt",
      "积跬步以至千里，致敬每个爱学习的你 —— 来自 Evan Xu",
      "这一生波澜壮阔或是不惊都没问题 —— 来自 Weibw",
    ],
    descStyle: "types",
  },
};

// 博客全图 配置（不推荐）
export const teekBlogBodyConfig: TeekConfig = {
  ...teekBlogCommonConfig,
  pageStyle: "segment-nav",
  bodyBgImg: {
    imgSrc: ["/img/blog/banner-bg1.webp", "/img/blog/banner-bg2.webp"],
  },
};

// 博客卡片 配置（推荐2）（卡片风格）
export const teekBlogCardConfig: TeekConfig = {
  ...teekBlogCommonConfig,
  pageStyle: "segment",

  post: {
    imageViewer: { hideOnClickModal: true },
    postStyle: "card", // 文章列表风格
  },

  //侧边栏在左边
  homeCardListPosition: "left",

  //壁纸
  banner: {
    name: "🎉 One Blog",
    bgStyle: "fullImg", 
    mask: false,//关闭遮罩
    imgInterval: 8000,
    imgShuffle: true,  // 当多张大图时（imgSrc 为数组），设置切换时间，单位：毫秒   
    imgSrc: [
      "/img/bg/1.webp", 
      "/img/bg/2.webp", 
      "/img/bg/3.webp", 
      "/img/bg/4.webp", 
      "/img/bg/5.webp", 
      "/img/bg/6.webp", 
      "/img/bg/7.webp", 
      "/img/bg/8.webp", 
      "/img/bg/9.webp", 
      "/img/bg/10.webp", 
      "/img/bg/11.webp", 
      "/img/bg/12.webp", 
      "/img/bg/13.webp", 
      "/img/bg/14.webp", 
      "/img/bg/15.webp", 
      "/img/bg/16.webp",
      "/img/bg/17.webp",
      "/img/bg/18.webp",
      "/img/bg/19.webp",
      // "/img/bg/20.webp",
    ],
    description: [
      //lonely
      "初闻不知曲中意，再听已是曲中人",

      // 原有内容保留
      "万般努力只为出人头地，低头弯腰只为爬的更高",

      // 动漫经典语录
      "无论你在哪里，我一定会找到你 —— 星际牛仔",
      "重要的不是你长得漂亮与否，而是你的心灵是否美丽 —— 千与千寻",
      "我们仰望着同一片天空，却看着不同的地方 —— 秒速五厘米",
      "比自己的生命更重要的东西永远存在着 —— fate",
      "正因为生来什么都没有，因此我们能拥有一切 —— 游戏人生",

      // 爱情感悟
      "喜欢一个人就是在对方的一切都合理化",
      "爱，其实很简单，困难的是接受这份简单",
      "最好的爱情是互相成就，而不是互相禁锢",
      "缘分就是，遇见了可以让你笑的人",
      "爱情不是占有，而是彼此成就",

      // 人生哲理
      "生命中最困难的时刻，恰是转机的开始",
      "没有人可以回到过去，但每个人都可以从现在开始",
      "与其等待机会，不如创造机会",
      "生活不会因为你的懦弱而停止脚步",
      "成长的过程总是孤独的，但结果是美好的",

      // 更多动漫台词
      "即使是在最深的黑暗里，也要保持希望 —— 进击的巨人",
      "不要为了别人而活，要为了自己而活 —— 火影忍者",
      "比起悲伤，无法分享快乐才是真的寂寞 —— 四月是你的谎言",
      "梦想是不会结束的，只要还活着就要继续追逐 —— 海贼王",

      // ... 继续添加更多句子直到100个
      "生命的意义不在于活了多久，而在于经历了什么",
      "最珍贵的不是拥有的回忆，而是正在创造的回忆",
      "不要因为走得太远，而忘记了为什么出发",
      "有时候，坚持了你最不想干的事情，却等来了你最想要的结果",
      "与其用泪水悔恨昨天，不如用汗水拼搏今天",

      // 添加更多正能量句子...
      "每个人都是自己人生的主角",
      "不要被周围的声音干扰，坚持自己认定的道路",
      "成功不是终点，失败也不是终结",
      "时间会证明一切，耐心是最好的答案",
      "活在当下，珍惜现在，期待未来",      
    ], // 描述信息
    descStyle: "types",
    maskBg: "rgba(0, 0, 0, 0.4)", // Banner 大图遮罩颜色，如果为数字，则是 rgba(0, 0, 0, ${maskBg})，如果为字符串，则作为背景色
    textColor: "#ffffff", // Banner 字体颜色，bgStyle 为 default 时为 '#000000'，其他为 '#ffffff'
    titleFontSize: "3.2rem", // 标题字体大小
    descFontSize: "1.4rem", // 描述字体大小
    switchTime: 4000, // 描述信息切换间隔时间，单位：毫秒。descStyle 为 switch 时生效
    switchShuffle: false, // 描述信息是否随机切换，为 false 时按顺序切换。descStyle 为 switch 时生效
    typesInTime: 200, // 输出一个文字的时间，单位：毫秒。descStyle 为 types 时生效
    typesOutTime: 100, // 删除一个文字的时间，单位：毫秒。descStyle 为 types 时生效
    typesNextTime: 800, // 打字与删字的间隔时间，单位：毫秒。descStyle 为 types 时生效
    typesShuffle: false, // 描述信息是否随机打字，为 false 时按顺序打字，descStyle 为 types 时生效
  },  
};