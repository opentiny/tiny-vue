<template>
  <div class="tiny-space" :class="[direction, wrap && 'wrap']" :style="spaceStyle">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { useSpace } from './index'

const props = defineProps({
  size: [String, Number, Array],
  align: String,
  justify: String,
  direction: String,
  wrap: Boolean,
  order: Array
})

const { spaceStyle } = useSpace(props)
</script>

<style scoped>
.tiny-space {
  display: flex;
  gap: var(--space-gap, 8px);
}
.row {
  flex-direction: row;
}
.column {
  flex-direction: column;
}
.wrap {
  flex-wrap: wrap;
}
</style>
