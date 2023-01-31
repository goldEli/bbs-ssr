<script setup lang="ts">
const props = defineProps({
  id: String,
});
</script>

<template>
  <svg :class="$style.wrap"><use :href="`#${props.id}`"></use></svg>
</template>

<style module>
.wrap {
  width: 1em;
  height: 1em;
  vertical-align: top;
  transform: translateY(0.02em);
  color: inherit;
}
</style>
