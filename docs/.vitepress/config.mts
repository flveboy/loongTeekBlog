import { defineConfig } from "vitepress";
import { defineTeekConfig } from "vitepress-theme-teek/config";
import { version } from "vitepress-theme-teek/es/version";

import timeline from "vitepress-markdown-timeline"; // 导入时间线插件
import { groupIconMdPlugin, groupIconVitePlugin } from "vitepress-plugin-group-icons"; // 导入代码组图标插件
import { La51Plugin } from "vitepress-plugin-51la"; //导入 51la统计


const description = [
  "欢迎来到 vitepress-theme-teek 使用文档",
  "Teek 是一个基于 VitePress 构建的主题，是在默认主题的基础上进行拓展，支持 VitePress 的所有功能、配置",
  "Teek 拥有三种典型的知识管理形态：结构化、碎片化、体系化，可以轻松构建一个结构化知识库，适用个人博客、文档站、知识库等场景",
].toString();



const teekConfig = defineTeekConfig({
  author: { name: "One", link: "https://onedayxyy.cn/" },
  blogger: {
    avatar: "/img/xyy.webp",
    shape: "circle-rotate",
    name: "One",
    slogan: "明心静性，爱自己",
    
    circleBgImg: "/img/bg/14.webp",
    circleBgMask: false,
    color: "#fff",
  },    

  footerInfo: {
    // bottomMessage: ["初闻不知曲中意，再听已是曲中人"],
    topMessage: [
      `<span><img alt="VitePress" src="https://liuyuyang.net/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fanimals.65eaf6e3.webp&w=750&q=75"><span/>`,
  
      `<a target="_blank" href="https://vitepress.dev/" title="本站框架基于 VitePress_v1.6.3" ><img alt="VitePress" src="https://img.shields.io/badge/Frame-VitePress-4868C2?logo=vitepress&amp;logoColor=fff" ></a>
      <a target="_blank" href="https://twikoo.js.org/" title="本站评论系统使用 Twikoo" ><img alt="Twikoo" src="https://img.shields.io/badge/Comments-Twikoo-0072F9"></a>
  
      <a target="_blank" href="http://creativecommons.org/licenses/by-nc-sa/4.0/" title="本站内容采用 CC BY-NC-SA 4.0 国际许可协议进行许可"><img alt="Copyright" src="https://img.shields.io/badge/Copyright-BY--NC--SA%204.0-d42328?logo=coursera&amp;logoColor=fff"></a>
      <a target="_blank" href="https://www.algolia.com/" title="本站搜索服务使用 Algolia"><img alt="Algolia" src="https://img.shields.io/badge/Search-Algolia-3095FA?logo=Algolia"></a>
  
      <a target="_blank" href="https://www.aliyun.com/" title="本站部署服务使用 Aliyun"><img alt="Aliyun" src="https://img.shields.io/badge/Alibaba-Cloud?logo=alibabacloud&label=Server&color=%23FF6A00"></a>
      <a target="_blank" href="https://umami.is/" title="本站统计服务使用 Umami"><img alt="Umami" src="https://img.shields.io/badge/umami-000000?logo=umami&label=Count&color=%23000000"></a>
      <a target="_blank" href="https://nginx.org/" title="本站Nginx反向代理服务 Nginx"><img alt="Nginx" src="https://img.shields.io/badge/Nginx-Proxy?logo=Nginx&label=Proxy"></a>`,
    ],    
    theme: {
      name: `Theme By Teek@${version}-2025.5.23`,
    },
    // topMessage: ["初闻不知曲中意，再听已是曲中人"],
    bottomMessage: [
      `<script id="LA-DATA-WIDGET" crossorigin="anonymous" charset="UTF-8" src="https://v6-widget.51.la/v6/3LmZHLhDZIDpMaT0/quote.js?theme=#1690FF,#333333,#999999,#007BFF,#FFFFFF,#1690FF,12&f=12&display=0,0,1,1,1,1,1,1"></script>`,
      `<span style="margin: 0; display: inline;"> <span id="runtime"></span></span>`,// 搭配 ./theme/helper/useFooterRuntime.ts
      `<a href="https://51.la/" target="_blank" style="display:flex;align-items:center;justify-content:center;">本网站由51.LA <img src="https://51.la/favicon.ico" style="width:16px;height:16px;" alt="51.LA"> 提供数据统计服务</a>`,
      "初闻不知曲中意，再听已是曲中人",
    ],   

    copyright: {
      createYear: 2025,
      suffix: "Teek",
    },
    icpRecord: {
      name: "陇ICP备2023002645号",
      link: "http://beian.miit.gov.cn/",
    },
    // 网络安全备案信息配置
    securityRecord: {
      name: "甘公网安备62102702000211号",
      link: "https://beian.mps.gov.cn/",
    },    
    // customHtml: `<span id="runtime"></span>`, // 搭配 .vitepress/theme/helper/useRuntime.ts 使用
  },



  // 代码复制提示
  codeBlock: {
    copiedDone: TkMessage => TkMessage.success("复制成功！"),
  },
  // 返回顶部和到达评论区的提示
  backTopDone: (TKMessage) => {
    TKMessage.success("返回顶部成功");
  },
  toCommentDone: (TKMessage) => {
    TKMessage.success("已抵达评论区");
  },  


  // 封面图模式为 full。
  post: {
    showCapture: true,
  },

  //文章分享 功能
  articleShare: { enabled: true },
  vitePlugins: {
    autoFrontmatter: true, //添加自动格式formatter插件

    permalinkOption: {
      notFoundDelayLoad: 1000, // 404 页面的延迟加载时间  1s后加载
      ignoreList: ["private-data"], // 忽略扫描某些目录
    },

    // 自动格式formatter插件 添加文章封面图
    autoFrontmatterOption: {
      exclude: { title: true, date: true }, // 排除自动生成字段
      transform: frontmatter => {
       // 如果文件本身存在了 coverImg，则不生成
       if (frontmatter.coverImg) return;
        
       // 随机获取 coverImg
       const list = [
        "https://onedayxyy.cn/images/1.webp",
        "https://onedayxyy.cn/images/2.webp",
        "https://onedayxyy.cn/images/3.webp",
        "https://onedayxyy.cn/images/4.webp",
        "https://onedayxyy.cn/images/5.webp",
        "https://onedayxyy.cn/images/6.webp",
        "https://onedayxyy.cn/images/7.webp",
        "https://onedayxyy.cn/images/8.webp",
        "https://onedayxyy.cn/images/9.webp",
        "https://onedayxyy.cn/images/10.webp",
        "https://onedayxyy.cn/images/11.webp",
        "https://onedayxyy.cn/images/12.webp",
        "https://onedayxyy.cn/images/13.webp",
        "https://onedayxyy.cn/images/14.webp",
        "https://onedayxyy.cn/images/15.webp",
        "https://onedayxyy.cn/images/16.webp",
        "https://onedayxyy.cn/images/17.webp",
        "https://onedayxyy.cn/images/18.webp",
        "https://onedayxyy.cn/images/19.webp",
       ];
        
       const coverImg = list[Math.floor(Math.random() * list.length)];
        
       const transformResult = { ...frontmatter, coverImg };
        
       return Object.keys(transformResult).length ? transformResult : undefined;
      },
    },   

    sidebarOption: {
      // initItems: false, //这条命令注释后，才会让文档和目录的样式保持一致
      collapsed: true, //打开侧边栏自动收缩功能
    },
  },  

  markdown: {
    config: md => {
      md.use(timeline);
      md.use(groupIconMdPlugin);
    },
    
    demo: {
      githubUrl: "https://github.com/Kele-Bingtang/vitepress-theme-teek/blob/master/docs",
    },
  },


  topArticle: {
    enabled: true, // 是否启用精选文章卡片
    limit: 4, // 一页显示的数量
    autoPage: false, // 是否自动翻页
    pageSpeed: 4000, // 翻页间隔时间，单位：毫秒。autoPage 为 true 时生效
    dateFormat: "yyyy-MM-dd", // 精选文章的日期格式
    // dateFormat: "yyyy-MM-dd hh:mm:ss", // 精选文章的日期格式
  },

  // 布蒜子统计分析
  docAnalysis: {
    createTime: "2021-10-19",
    statistics: {
      provider: "busuanzi",
    },
    wordCount: true,
    readingTime: true,
    // overrideInfo: [
    //   { key: "lastActiveTime", value: (_, currentValue) => `${currentValue}前` },
    //   { key: "totalPosts", label: "文章总数目" },
    // ],
    appendInfo: [{ key: "index", label: "序号", value: "One" }],
  },


  //站点统计
  // siteAnalytics: {
  //   provider: "umami", //Umami 统计
  //   options: {
  //     id: "c1f1daec-868c-4b7a-963b-93d99a0a959b",
  //     src: "http://106.75.214.199:3000/script.js",
  //   },
  // },  
  
  //站点统计
  siteAnalytics: [
  {
    provider: "baidu",
    options: {
      id: "你id",
    },
  },  
  {
    provider: "google",
    options: {
      id: "G-K5GNDW3L7K",
    },
  },  
  ],



  themeEnhance: {
    spotlight: {
      defaultValue: false,
    },
    themeColor: {
      defaultColor: "vp-green",
    },
    layoutSwitch: {
      defaultMode: "bothWidthAdjustable",
      defaultPageMaxWidth: 90,
      defaultDocMaxWidth: 95,
    },
  },

  themeSize: "large",


  

  
  // 登录页
  private: {
    enabled: true,
    expire: "1d",
    session: true,
    siteLogin: false,
    site: [
      { username: "teek-site-1", password: "teek", role: "common", expire: "1d", session: true, strategy: "once" },
      { username: "teek-site-2", password: "teek", role: "admin", expire: "1d", session: false, strategy: "always" },
    ],
    pages: [
      { username: "teek-pages-1", password: "teek", expire: "1d", session: true, strategy: "once" },
      { username: "teek-pages-2", password: "teek", expire: "1d", session: false, strategy: "always" },
    ],
    realm: {
      blog: [
        { username: "teek-blog-1", password: "teek", expire: "1d", session: true, strategy: "once" },
        { username: "teek-blog-2", password: "teek", expire: "1d", session: false, strategy: "always" },
      ],
      comment: [
        { username: "teek-comment-1", password: "teek", expire: "1d", session: true, strategy: "always" },
        { username: "teek-comment-2", password: "teek", expire: "1d", session: false, strategy: "always" },
      ],
    },
    // onFocus: (value, formName) => {},
    // onBlur: (value, formName) => {},
    // doLogin: (loginInfo, type, nativeExecLogin) => true,
    // doValidate: (type, frontmatter, nativeExecLogin) => true,
    // encrypt: (value, frontmatter) => value,
    // decrypt: (value, frontmatter) => value,
  },

  // 风险链接提示页
  riskLink: {
    enabled: true,
    whitelist: ["http://vp.teek.top", "https://onedayxyy.cn/", /https:\/\/github.com/],
    // blacklist: [],
  },
});





// https://vitepress.dev/reference/site-config
export default defineConfig({
  extends: teekConfig,
  title: "One",
  description: description,
  cleanUrls: true,
  lastUpdated: true,
  lang: "zh-CN",
  head: [
    ["meta",{name:"referrer",content:"no-referrer-when-downgrade"}], 
    ["link", { rel: "icon", href: "/favicon.ico", type: "image/png" }],
    // ["link", { rel: "icon", type: "image/svg+xml", href: "/teek-logo-mini.svg" }],
    // ["link", { rel: "icon", type: "image/png", href: "/teek-logo-mini.png" }],
    ["meta", { property: "og:type", content: "website" }],
    ["meta", { property: "og:locale", content: "zh-CN" }],
    ["meta", { property: "og:title", content: "Teek | VitePress Theme" }],
    ["meta", { property: "og:site_name", content: "Teek" }],
    ["meta", { property: "og:image", content: "" }],
    ["meta", { property: "og:url", content: "" }],
    ["meta", { property: "og:description", description }],
    ["meta", { name: "description", description }],
    ["meta", { name: "author", content: "Teek" }],
    [
      "meta",
      {
        name: "viewport",
        content: "width=device-width,initial-scale=1,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no",
      },
    ],
    [
      "meta",
      {
        name: "description",
        description,
      },
    ],
    ["meta", { name: "keywords", description }],

    ["meta", { name: "baidu-site-verification", content: "codeva-GdK2q9MO1i" }], // 百度收录
    ["meta", { name: "msvalidate.01", content: "48CABE70F538B8D117567176ABF325AF" }], // Bing 收录验证


    ["script", { charset: "UTF-8", id: "LA_COLLECT", src: "//sdk.51.la/js-sdk-pro.min.js" }], // 51.la

    [
      "script",
      {},
      `typeof LA !== 'undefined' && LA.init({ id: "3LmZHLhDZIDpMaT0", ck: "3LmZHLhDZIDpMaT0", hashMode: true, src: "https://v6-widget.51.la/v6/3LmZHLhDZIDpMaT0/quote.js?theme=0&col=true&f=12&badge=icon_0&icon=center" })`,
    ], // 51.la



    ["link", { rel: "stylesheet", href: "//at.alicdn.com/t/font_2989306_w303erbip9.css" }], // 阿里在线矢量库

    // //添加看板娘
    // ['script', { src: 'https://fastly.jsdelivr.net/gh/stevenjoezhang/live2d-widget@latest/autoload.js' }],    

    // 阿里图标库symbol 引用
    ["script",{src: "https://at.alicdn.com/t/c/font_4686603_33kna2v5qcm.js",defer: "defer",},],

    //免费的音乐播放器
    [
      "script",
      {
        type: "text/javascript",
        src: "https://cdn.bootcdn.net/ajax/libs/jquery/3.7.1/jquery.min.js",
        // src: "https://myhkw.cn/player/js/jquery.min.js",
      },
    ], 
    [
      "script",
      {
        type: "text/javascript",
        id: "myhk",
        src: "https://myhkw.cn/api/player/1741345067120",
        key: "1741345067120",
        m: "1",
        lr: "r",
        defer: "defer",  // 添加defer属性，确保脚本在DOM加载完成后执行
      },
    ],


    //Umami 统计
    [
      "script",
      {
        src: "https://umami.onedayxyy.cn/script.js",
        "data-website-id": "你id",
        defer: "defer",
      },
    ],

    // 仅当页面包含特定 class 时加载字体
    [
      "link",
      {
        rel: "stylesheet",
        href: "../theme/styles/font.scss",
        media: "print",
        onload: "this.media='all'",
      },
    ],

    // 鼠标爆炸效果
    // [
    //   'script',
    //   {
    //     type: 'text/javascript',
    //     src: 'https://lf6-cdn-tos.bytecdntp.com/cdn/expire-1-M/animejs/3.2.1/anime.min.js', //字节cdn
    //     id: 'anime.min.js-js',
    //     defer: 'defer',
    //   },
    // ],
    // [
    //   'script',
    //   {
    //     // src: "https://cpython666.github.io/js/clickjs/fireworks.js",
    //     src: 'https://live2d-hyde.netlify.app/Clickfireworks.js',
    //     defer: 'defer',
    //   },
    // ],    
  ],

  markdown: {
    // 开启行号
    lineNumbers: true,
    image: {
      // 默认禁用；设置为 true 可为所有图片启用懒加载。
      lazyLoading: true,
    },
    // 更改容器默认值标题
    container: {
      tipLabel: "提示",
      warningLabel: "警告",
      dangerLabel: "危险",
      infoLabel: "信息",
      detailsLabel: "详细信息",
    },
  },


  sitemap: {
    hostname: "https://vp.teek.top",
    transformItems: items => {
      const permalinkItemBak: typeof items = [];
      // 使用永久链接生成 sitemap
      const permalinks = (globalThis as any).VITEPRESS_CONFIG.site.themeConfig.permalinks;
      items.forEach(item => {
        const permalink = permalinks?.map[item.url];
        if (permalink) permalinkItemBak.push({ url: permalink, lastmod: item.lastmod });
      });
      return [...items, ...permalinkItemBak];
    },
  },

  

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: "/favicon.ico",
    darkModeSwitchLabel: "主题",
    sidebarMenuLabel: "菜单",
    returnToTopLabel: "返回顶部",
    lastUpdatedText: "上次更新时间",
    outline: {
      level: [2, 4],
      label: "本页导航",
    },
    docFooter: {
      prev: "上一页",
      next: "下一页",
    },

    nav: [
      { text: "🏡首页", link: "/" },

      // 笔记
      {
        text: '🗃️笔记',
        items: [
          {
            // 分组标题1
            text: '运维',
            items: [
              {
                text: `
                  <div style="display: flex; align-items: center; gap: 4px;">
                    <img src="/img/nav/linux.svg" alt="" style="width: 16px; height: 16px;">
                    <span>Linux</span>
                  </div>
                  `,
                link: '/linux',
              },
              {
                text: `
                  <div style="display: flex; align-items: center; gap: 4px;">
                    <img src="/img/nav/nginx.png" alt="" style="width: 16px; height: 16px;">
                    <span>Nginx</span>
                  </div>
                  `,
                link: '/nginx',
              },
            ],
          },
          {
            // 分组标题2
            text: '前端',
            items: [
              {
                text: `
                  <div style="display: flex; align-items: center; gap: 4px;">
                    <img src="/img/nav/html.png" alt="" style="width: 16px; height: 16px;">
                    <span>Html</span>
                  </div>
                  `,
                link: '/html',
              },
              {
                text: `
                  <div style="display: flex; align-items: center; gap: 4px;">
                    <img src="/img/nav/css.png" alt="" style="width: 16px; height: 16px;">
                    <span>Css</span>
                  </div>
                  `,
                link: '/css',
              },
            ],
          },
          {
            // 分组标题3
            text: '编程',
            items: [
              {
                text: `
                  <div style="display: flex; align-items: center; gap: 4px;">
                    <img src="/img/nav/python.png" alt="" style="width: 16px; height: 16px;">
                    <span>Python</span>
                  </div>
                  `,
                link: '/python',
              },
              {
                text: `
                  <div style="display: flex; align-items: center; gap: 4px;">
                    <img src="/img/nav/go.svg" alt="" style="width: 16px; height: 16px;">
                    <span>Go</span>
                  </div>
                  `,
                link: '/go',
              },
            ],
          },
          {
            text: '专题',
            items: [
              {
                text: `
                  <div style="display: flex; align-items: center; gap: 4px;">
                    <img src="/img/nav/博客.svg" alt="" style="width: 16px; height: 16px;">
                    <span>博客搭建</span>
                  </div>
                  `,
                link: '/blog',
              },
              {
                text: `
                  <div style="display: flex; align-items: center; gap: 4px;">
                    <img src="/img/nav/前端demo.svg" alt="" style="width: 16px; height: 16px;">
                    <span>前端demo</span>
                  </div>
                  `,
                link: '/qianduan-demo',
              },
              {
                text: `
                  <div style="display: flex; align-items: center; gap: 4px;">
                    <img src="/img/nav/Git.svg" alt="" style="width: 16px; height: 16px;">
                    <span>Git</span>
                  </div>
                  `,
                link: '/git',
              },
              {
                text: `
                  <div style="display: flex; align-items: center; gap: 4px;">
                    <img src="/img/nav/面试.svg" alt="" style="width: 16px; height: 16px;">
                    <span>面试</span>
                  </div>
                  `,
                link: '/mianshi',
              },
              {
                text: `
                  <div style="display: flex; align-items: center; gap: 4px;">
                    <img src="/img/nav/NAS.svg" alt="" style="width: 16px; height: 16px;">
                    <span>NAS</span>
                  </div>
                  `,
                link: '/NAS',
              },
              {
                text: `
                  <div style="display: flex; align-items: center; gap: 4px;">
                    <img src="/img/nav/脚本.svg" alt="" style="width: 16px; height: 16px;">
                    <span>脚本</span>
                  </div>
                  `,
                link: '/jiaoben',
              },
              {
                text: `
                  <div style="display: flex; align-items: center; gap: 4px;">
                    <img src="/img/nav/工具.svg" alt="" style="width: 16px; height: 16px;">
                    <span>工具</span>
                  </div>
                  `,
                link: '/tools',
              },
            ],
          },
          {
            text: '开源项目',
            items: [
              {
                text: `
                  <div style="display: flex; align-items: center; gap: 4px;">
                    <img src="/img/nav/teek.svg" alt="" style="width: 16px; height: 16px;">
                    <span>Teek-one</span>
                  </div>
                  `,
                link: '/teek',
              },
              {
                text: `
                  <div style="display: flex; align-items: center; gap: 4px;">
                    <img src="/img/nav/Typora.svg" alt="" style="width: 16px; height: 16px;">
                    <span>Typora-one</span>
                  </div>
                  `,
                link: '/typora-theme-one',
              },
              
            ],
          },
        ],
      },  

      // 生活
      {
        text: '🏓生活',
        items: [
          {
            // 分组标题1
            text: '娱乐',
            items: [
              {
                text: `
                  <div style="display: flex; align-items: center; gap: 4px;">
                    <img src="/img/nav/相册.svg" alt="" style="width: 16px; height: 16px;">
                    <span>相册</span>
                  </div>
                  `,
                link: 'https://photo.onedayxyy.cn/',
              },
              {
                text: `
                  <div style="display: flex; align-items: center; gap: 4px;">
                    <img src="/img/nav/电影.svg" alt="" style="width: 16px; height: 16px;">
                    <span>电影</span>
                  </div>
                  `,
                link: '/movie',
              },
              {
                text: `
                  <div style="display: flex; align-items: center; gap: 4px;">
                    <img src="/img/nav/音乐.svg" alt="" style="width: 16px; height: 16px;">
                    <span>音乐</span>
                  </div>
                  `,
                link: '/music',
              },
            ],
          },
          {
            // 分组标题2
            text: '小屋',
            items: [
              {
                text: `
                  <div style="display: flex; align-items: center; gap: 4px;">
                    <img src="/img/nav/精神小屋.svg" alt="" style="width: 16px; height: 16px;">
                    <span>精神小屋</span>
                  </div>
                  `,
                link: '/love',
              },
              {
                text: `
                  <div style="display: flex; align-items: center; gap: 4px;">
                    <img src="/img/nav/时间管理.svg" alt="" style="width: 16px; height: 16px;">
                    <span>时间管理</span>
                  </div>
                  `,
                link: '/time-plan',
              },
            ],
          },
        ],
      },  

      // 索引
      {
        text: '👏索引',
        items: [
          { text: '📃分类页', link: '/categories' },
          { text: '🔖标签页', link: '/tags' },
          {
            text: `
              <div style="display: flex; align-items: center; gap: 4px;">
                <img src="/img/nav/归档.svg" alt="" style="width: 16px; height: 16px;">
                <span>归档页</span>
              </div>
              `,
            link: '/archives',
          },
          {
            text: `
              <div style="display: flex; align-items: center; gap: 4px;">
                <img src="/img/nav/清单.svg" alt="" style="width: 16px; height: 16px;">
                <span>清单页</span>
              </div>
              `,
            link: '/articleOverview',
          },
          {
            text: `
              <div style="display: flex; align-items: center; gap: 4px;">
                <img src="/img/nav/登录.svg" alt="" style="width: 16px; height: 16px;">
                <span>登录页</span>
              </div>
              `,
            link: '/login',
          },
          {
            text: `
              <div style="display: flex; align-items: center; gap: 4px;">
                <img src="/img/nav/风险提示.svg" alt="" style="width: 16px; height: 16px;">
                <span>风险链接提示页</span>
              </div>
              `,
            link: '/risk-link?target=https://onedayxyy.cn/',
          },
        ],
      },  

      // 关于
      {
        text: '🍷关于',
        items: [
          { text: '👋关于我', link: '/about-me' },
          { text: '🎉关于本站', link: '/about-website' },
          { text: '🌐网站导航', link: '/websites' },          
          { text: "👂留言区", link: "/liuyanqu" },
          { text: "💡思考", link: "/thinking" },
          {
            text: `
              <div style="display: flex; align-items: center; gap: 4px;">
                <img src="/img/nav/时间轴.svg" alt="" style="width: 16px; height: 16px;">
                <span>时间轴</span>
              </div>
              `,
            link: 'https://onedayxyy.cn/time-line/',
          },
          {
            text: `
              <div style="display: flex; align-items: center; gap: 4px;">
                <img src="/img/nav/网站统计.svg" alt="" style="width: 16px; height: 16px;">
                <span>网站统计</span>
              </div>
              `,
            link: 'https://umami.onedayxyy.cn/share/DzS4g85V8JkxsNRk/onedayxyy.cn',
          },
          {
            text: `
              <div style="display: flex; align-items: center; gap: 4px;">
                <img src="/img/nav/站点监控.svg" alt="" style="width: 16px; height: 16px;">
                <span>站点监控</span>
              </div>
              `,
            link: 'https://status.onedayxyy.cn/status/monitor',
          },

        ],
      },       
    ],

    socialLinks: [{ icon: "gitee", link: "https://gitee.com/onlyonexl/vitepress-theme-teek-one-public" }],

    search: {
      provider: "local",
    },
    editLink: {
      text: "在 GitHub 上编辑此页",
      pattern: "https://github.com/Kele-Bingtang/vitepress-theme-teek/edit/master/docs/:path",
    },
  },

  // 运行后自动打开网页
  vite: {
    server: {
      open: true
    },
    plugins: [
      groupIconVitePlugin(), //代码组图标

      La51Plugin({
        id: "你id",
        ck: "你ck",
        apply: "build", //（默认）：仅在 生产环境（用户访问正式网站）时加载统计代码。
      }),      
    ],
    //其他配置项 
    build: {
      assetsInlineLimit: 4096, // 小于 4KB 的字体转为 base64
      chunkSizeWarningLimit: 35000, // 限制警告的块大小   
      rollupOptions: {
        external: ['**/_*.md'], // 忽略所有以下划线开头的 Markdown 文件
      },      
    },
  },    
});
