// 组件导入
import Teek from "vitepress-theme-teek";
import TeekLayoutProvider from "./components/TeekLayoutProvider.vue";
import { defineComponent, h } from "vue";
import { useData } from "vitepress";

import NoticeContent from "./components/NoticeContent.vue";
import BannerImgArrow from "./components/BannerImgArrow.vue";
import confetti from "./components/Confetti.vue"; //导入五彩纸屑组件
import NotFound from "./components/NotFound.vue"; // 导入404组件
import SubNavIcon from "./components/SubNavIcon.vue";
import NavIcon from "./components/NavIcon.vue";


// 样式导入
import "vitepress-theme-teek/index.css";
import "vitepress-theme-teek/theme-chalk/tk-code-block-mobile.css";
import "vitepress-theme-teek/theme-chalk/tk-sidebar.css";
import "vitepress-theme-teek/theme-chalk/tk-nav.css";
import "vitepress-theme-teek/theme-chalk/tk-aside.css";
import "vitepress-theme-teek/theme-chalk/tk-doc-h1-gradient.css";
import "vitepress-theme-teek/theme-chalk/tk-table.css";
import "vitepress-theme-teek/theme-chalk/tk-mark.css";
import "vitepress-theme-teek/theme-chalk/tk-blockquote.css";
import "vitepress-theme-teek/theme-chalk/tk-index-rainbow.css";
import "vitepress-theme-teek/theme-chalk/tk-doc-fade-in.css";
import "vitepress-theme-teek/theme-chalk/tk-banner-desc-gradient.css";

import "virtual:group-icons.css"; //代码组图标样式
import "vitepress-markdown-timeline/dist/theme/index.css"; // 引入时间线样式

// 导入自定义css
import "./styles/code-bg.css";
import "./styles/index.scss";

import "vitepress-theme-teek/vp-plus/code-block-mobile.scss"; // 移动端代码块样式加 padding
import "vitepress-theme-teek/vp-plus/sidebar.scss"; // 侧边栏字体样式
import "vitepress-theme-teek/vp-plus/nav.scss"; // 导航栏样式
import "vitepress-theme-teek/vp-plus/nav-blur.scss"; // 导航栏毛玻璃样式
import "vitepress-theme-teek/vp-plus/aside.scss"; // 文章目录样式
import "vitepress-theme-teek/vp-plus/doc-h1-gradient.scss"; // 文档以及标题样式
import "vitepress-theme-teek/vp-plus/mark.scss"; // 文章 mark 标签样式
import "vitepress-theme-teek/vp-plus/container.scss"; // Markdown 容器样式
import "vitepress-theme-teek/vp-plus/container-left.scss"; // Markdown 容器左框样式
// import "vitepress-theme-teek/vp-plus/container-flow.scss"; // Markdown 容器流体样式
import "vitepress-theme-teek/vp-plus/blockquote.scss"; // 引用样式
// import "vitepress-theme-teek/vp-plus/blockquote-one.scss"; // 引用样式-增强
import "vitepress-theme-teek/vp-plus/index-rainbow.scss"; // Vitepress 首页彩虹渐变样式
import "vitepress-theme-teek/tk-plus/banner-desc-gradient.scss"; // Banner 描述渐变样式
import "vitepress-theme-teek/tk-plus/banner-full-img-scale.scss"; // Banner 全屏图片放大样式



export default {
  extends: Teek,
  enhanceApp({ app }) {
    // 注册组件
    app.component("confetti", confetti); //五彩纸屑  
    // app.component("SubNavIcon", SubNavIcon);
    app.component("NavIcon", NavIcon);    
  },
  Layout: defineComponent({
    name: "LayoutProvider",
    setup() {
      const props: Record<string, any> = {};
      const { frontmatter } = useData();

      // 添加自定义 class 逻辑
      if (frontmatter.value?.layoutClass) {
        props.class = frontmatter.value.layoutClass;
      }


      return () =>
        h(TeekLayoutProvider, props, {
          // "layout-top": () => h(notice), // 使用layout-top插槽
          confetti: () => h(confetti), // 使用confetti插槽
          "teek-notice-content": () => h(NoticeContent),
          "teek-home-banner-feature-after": () => h(BannerImgArrow),
          "not-found": () => h(NotFound),// 自定义404页面内容
        });
    },
  }),  
};
