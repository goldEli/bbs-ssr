<script setup lang="ts">
const emit = defineEmits(["hide"]);
const props = defineProps({
  detail: Object,
});

const changep = () => {
  emit("hide");
};
console.log(props, "--");
</script>

<template>
  <teleport to="body">
    <div v-if="!!props.detail" @click.stop="changep" :class="$style.container">
      <div :class="$style.time">{{ props.detail.date }}</div>
      <div :class="$style.title">{{ props.detail.title }}</div>
      <div :class="$style.inner">
        {{ props.detail.content }}
      </div>
    </div>
  </teleport>
</template>

<style module lang="less">
.container {
  backdrop-filter: blur(3px);
  width: 100vw;
  height: 100vh;
  position: fixed;
  z-index: 99990;
  left: 0;
  top: 0;
  background: rgba(0, 0, 0, 0.9);
  box-sizing: border-box;
  padding: 164ppx 360ppx 0 360ppx;
  .time {
    height: 23ppx;
    font-size: 16ppx;
    font-family: myFirstFont;
margin-bottom: 20px;
    color: #999999;
    line-height: 19ppx;
  }
  .title {
    height: 40ppx;
    font-size: 28ppx;
    font-family: myFirstFont;
    font-weight: 500;
    color: #ffffff;
    line-height: 33ppx;

    color: #ffffff;
  }
  .inner {
    border-top: 1ppx solid white;
    padding-top: 16ppx;
    width: 1200ppx;

    line-height: 40ppx;
    color: #e6e6e6;
    font-size: 20ppx;
  }
}
</style>
