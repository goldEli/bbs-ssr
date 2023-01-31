<script setup lang="ts"></script>

<template>
  <div :class="$style.container">
    <img :class="$style.title" src="/logo/title.png" alt="" />
    <span :class="$style.menu_item"> <slot></slot> </span>
  </div>
</template>

<style module lang="less">
.container {
  position: relative;
  width: 101ppx;
  height: 412ppx;
  .title {
    width: 101ppx;
    height: 412ppx;
  }
  .menu_item {
    color: #6d4410;
    position: absolute;
    top: 109ppx;
    left: 32ppx;
    width: 24ppx;
    margin: 0 auto;
    line-height: 52ppx;
    font-size: 36ppx;
    word-wrap: break-word;
  }
}
</style>
