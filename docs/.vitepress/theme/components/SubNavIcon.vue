<!-- .vitepress/theme/components/SubNavIcon.vue -->
<script setup lang="ts">
import type { TkIconProps } from "vitepress-theme-teek";
import { TkIcon } from "vitepress-theme-teek";

defineProps<{ title: string; iconProps?: TkIconProps }>();
</script>

<template>
  <div class="sub-nav-icon">
    <TkIcon v-if="iconProps?.icon" v-bind="iconProps" />
    <span class="title">{{ title }}</span>
  </div>
</template>

<style scoped>
.sub-nav-icon {
  display: flex;
  align-items: center;
  gap: 4px;
}

.sub-nav-icon .title {
  font-size: 14px;
}
</style>