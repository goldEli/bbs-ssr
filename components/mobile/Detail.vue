<script setup lang="ts">
const emit = defineEmits(["hide"]);
const props = defineProps({
  detail: Object,
});

const changep = () => {
  emit("hide");
};
console.log(props,'--');

</script>

<template>
  <div v-if="!!props.detail" @click.stop="changep" :class="$style.container">
    <div :class="$style.time">{{ props.detail.date }}</div>
    <div :class="$style.title">{{ props.detail.title }}</div>
    <div :class="$style.inner">
      {{ props.detail.content }}
    </div>
  </div>
</template>

<style module lang="less">
.container {
  backdrop-filter: blur(3px);
  width: 100vw;
  height: 100vh;
  position: fixed;
  z-index: 9999;
  left: 0;
  top: 0;
  background: rgba(0, 0, 0, 0.8);
  box-sizing: border-box;
  padding: 164mpx 100mpx 0 100mpx;
  overflow: scroll;
  .time {
    height: 23mpx;
    font-size: 16mpx;
    font-family: myFirstFont;
margin-bottom: 10px;
    color: #999999;
    line-height: 19mpx;
  }
  .title {
    min-height: 40mpx;
    font-size: 28mpx;
    font-family: myFirstFont;
    font-weight: 500;
    color: #ffffff;
    line-height: 33mpx;
margin-bottom: 15mpx;
    color: #ffffff;
  }
  .inner {
    border-top: 2mpx solid white;
    padding-top: 20mpx;
    // width: 1200mpx;

    line-height: 40mpx;
    color: #e6e6e6;
    font-size: 20mpx;
  }
}
</style>
