<script lang="ts" setup>
const props = defineProps({ active: Boolean });
const emit = defineEmits(["update:active"]);
const centerPath = "M13 22H38";

const onClick = () => emit("update:active", !props.active);
</script>

<template>
  <Icon
    v-if="!props.active"
    @click="onClick"
    :class="$style.language"
    id="drawer"
  />
  <Icon
    v-else
    v-if="props.active"
    @click="onClick"
    :class="$style.language2"
    id="close"
  />
  <!-- <svg
    v-else
    @click="onClick"
    :class="[$style.svg, 1 && $style.active]"
    width="50"
    height="50"
    viewBox="0 0 50 45"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="50" height="45" rx="10" />
    <path :d="props.active ? centerPath : 'M13 14H38'" />
    <path :d="centerPath" />
    <path :d="props.active ? centerPath : 'M13 30H38'" />
  </svg> -->
</template>

<style module lang="less">
.language {
  font-size: 56mpx;
  cursor: pointer;
  color: #fff;
  // background-color: #fff;
}
.language2 {
  z-index: 999;
  font-size: 56mpx;
  cursor: pointer;
  color: #fff;
  // background-color: #fff;
}
.svg {
  // fill: rgb(86, 79, 79);
  &.active rect {
    fill-opacity: 0.1;
    transition: all 1s;
  }

  path {
    stroke: #fff;
    transition: all 0.4s;
    stroke-width: 4;
    stroke-linecap: round;
    transform-origin: 50% 50%;
  }

  &.active {
    rect {
      // fill: #fff;
      fill-opacity: 0.2;
    }

    path {
      stroke: #fff;
    }

    path:nth-child(2) {
      transform: rotate(45deg);
    }

    path:nth-child(3) {
      transform: scaleX(0);
      opacity: 0;
    }

    path:nth-child(4) {
      transform: rotate(-45deg);
    }
  }
}
</style>
