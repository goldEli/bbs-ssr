<script setup lang="ts">
import { navigation } from "@/constants";
const props = defineProps({ visible: Boolean });
const emit = defineEmits(["update:visible"]);
const onClose = () => {
  emit("update:visible", false);
};
</script>

<template>
  <div :class="[$style.float, props.visible && $style.visible]">
    <div v-if="$route.params.language === 'zh' ||$route.params.language === 'hant'" key="1" :class="$style.head">
      <NuxtLink
        v-for="i in navigation"
        :class="[
          $style.text,
          i.id ===
            ($route.path.replace(`/${$route.params.language}`, '') || '/') &&
            $style.active,
        ]"
        :key="i.id"
        :to="`/${$route.params.language}${i.to}`"
        @click="onClose()"
      >
        {{ $t(i.key) }}
      </NuxtLink>
    </div>
    <div
      v-if="$route.params.language === 'en'"
      key="2"
      :class="$style.enghtWrap"
    >
      <NuxtLink
        @click="onClose()"
        v-for="i in navigation"
        :class="[
          $style.text2,
          i.id ===
            ($route.path.replace(`/${$route.params.language}`, '') || '/') &&
            $style.active,
        ]"
        :key="i.id"
        :to="`/${$route.params.language}${i.to}`"
      >
        {{ $t(i.key) }}
      </NuxtLink>
    </div>
  </div>
</template>

<style module lang="less">
.float {
  backdrop-filter: blur(3px);
  // filter: blur(5px);
  position: fixed;
  z-index: 101;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  flex-direction: column;
  transition: all 0.8s;
  transform: translate3d(100%, 0, 0);

  &.visible {
    transform: translate3d(0, 0, 0);
  }
  .head {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 400mpx;
    .text {
      width: 40mpx;
      height: 128mpx;
      font-size: 40mpx;

      color: #ffffff;
      line-height: 64mpx;
    }
    .active {
      color: #ed1c24;
    }
  }
  .enghtWrap {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);

    height: 550mpx;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .text2 {
      text-align: center;
      font-size: 40mpx;
      font-weight: 500;
      color: #ffffff;
      line-height: 64px;
    }
    .active {
      color: #ed1c24;
    }
  }
}
</style>
