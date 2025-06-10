<script setup lang="ts" name="TeekLayoutProvider">
import Teek, { teekConfigContext, clockIcon } from "vitepress-theme-teek";
import { useData } from "vitepress";
import { watch, nextTick, useTemplateRef, ref, provide } from "vue";
import { useRibbon } from "../hooks/useRibbon";
import { teekDocConfig } from "../config/teekConfig";
import { useRuntime } from "../hooks/useRuntime";

// import MusicPlayer from "./MusicPlayer.vue"; // 引入音乐播放器组件
import TitleChange from "./TitleChange.vue"; //导入网页标题变化
import OhMyLive2D from "./OhMyLive2D.vue"; //导入看板娘组件
import ScrollProgressBar from "./ScrollProgressBar.vue"; //导入顶部滚动条组件
import ContributeChart from "./ContributeChart.vue"; //导入贡献图表 
import GlobalGreet from "./GlobalGreet.vue"; //导入全局问候组件
import BackToTop from "./BackToTop.vue"; //导入 返回顶部小猫挂件
import ConfigSwitch from "./ConfigSwitch.vue"; //导入配置切换组件





const ns = "layout-provider";
const { frontmatter } = useData();

const teekConfig = ref(teekDocConfig);
provide(teekConfigContext, teekConfig);

const configSwitchRef = useTemplateRef("configSwitchRef");
// 页脚运行时间
const { start, stop } = useRuntime("2021-10-19 00:00:00", {
  prefix: `<span style="width: 16px; display: inline-block; vertical-align: -3px; margin-right: 3px;">${clockIcon}</span>小破站已运行 `,
});

const watchRuntime = async (condition: boolean) => {
  await nextTick();
  if (condition) start();
  else stop();
};

watch(frontmatter, async newVal => watchRuntime(newVal.layout === "home"), { immediate: true });

watch(
  () => configSwitchRef.value?.themeStyle,
  async newVal => watchRuntime(newVal === "blog"),
  { immediate: true }
);

watch(
 () => configSwitchRef.value?.teekConfig,
 async newVal => {
  if (newVal) teekConfig.value = newVal;
 }
);

// 彩带背景
const { start: startRibbon, stop: stopRibbon } = useRibbon({ clickReRender: true });
</script>




<template>
  <!-- 返回顶部小猫挂件 -->
  <BackToTop />

  <!--网页标题变化组件  -->
  <TitleChange />

  <!-- 看板娘组件 -->
  <OhMyLive2D />

  <!-- 顶部滚动条组件 -->
  <ScrollProgressBar /> 

  <!-- 全局问候 -->
  <GlobalGreet />

  <Teek.Layout>
    <template #teek-archives-top-before>
      <!-- 贡献图表 -->
      <ContributeChart />
    </template>

    <template #teek-theme-enhance-bottom>
      <div :class="[ns, 'flx-align-center']">
        <ConfigSwitch ref="configSwitchRef" />
      </div>
    </template>

    <template v-for="(_, name) in $slots" :key="name" #[name]>
      <slot :name="name" />
    </template>
  </Teek.Layout>
</template>