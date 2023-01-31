<script setup lang="ts">
const minRatio = ref(0);

const onResize = () => {
  const widthRatio = window.innerWidth / 1920;
  const heightRatio = window.innerHeight / 1080;
  minRatio.value = Math.min(widthRatio, heightRatio);
};

onMounted(() => {
  if (process.client) {
    window.addEventListener("resize", onResize);
    onResize();
  }
});

onUnmounted(() => {
  if (process.client) {
    window.removeEventListener("resize", onResize);
  }
});
</script>

<template>
  <div :class="$style.wrap">
    <div :class="$style.wrap_item" :style="{ transform: `scale(${minRatio})` }">
      <slot />
    </div>
  </div>
</template>

<style module>
.wrap {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}
.wrap_item {
  width: 1920px;
  height: 1080px;
}
</style>
