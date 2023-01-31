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
  width: 101mpx;
  height: 412mpx;
  .title {
    width: 101mpx;
    height: 412mpx;
  }
  .menu_item {
    color: #6d4410;
    position: absolute;
    top: 109mpx;
    left: 32mpx;
    width: 24mpx;
    margin: 0 auto;
    line-height: 52mpx;
    font-size: 36mpx;
    word-wrap: break-word;
  }
}
</style>
