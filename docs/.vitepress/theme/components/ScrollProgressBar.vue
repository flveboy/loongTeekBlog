<template>
    <div ref="progressBar" class="progress-bar" :style="{ width: progress + '%' }"></div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const progressBar = ref(null);
const progress = ref(0);

const handleScroll = () => {
    const totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    progress.value = (scrollTop / totalHeight) * 100;
};

onMounted(() => {
    window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
});
</script>

<style scoped>
.progress-bar {
    position: fixed;
    top: 0;
    left: 0;
    height: 2px;
    background: linear-gradient(114.2deg,
            rgba(184, 215, 21, 1) -15.3%,
            rgba(148, 187, 233, 1) 14.5%,
            rgba(21, 215, 182, 1) 38.7%,
            rgba(129, 189, 240, 1) 58.8%,
            rgba(219, 108, 205, 1) 77.3%,
            rgba(240, 129, 129, 1) 88.5%);
    z-index: 9999;
}
</style>