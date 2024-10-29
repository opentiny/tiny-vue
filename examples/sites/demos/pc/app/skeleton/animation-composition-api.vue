<template>
  <div>
    <tiny-button @click="handler">{{ animated ? '关闭' : '开启' }}</tiny-button>
    <br /><br />
    <tiny-skeleton :animated="animated">
      <template #placeholder>
        <tiny-skeleton-item></tiny-skeleton-item>
        <br />
        <br />
        <tiny-skeleton-item variant="image"></tiny-skeleton-item>
      </template>
    </tiny-skeleton>
  </div>
</template>

<script setup>
import { TinySkeleton, TinyButton, TinySkeletonItem } from '@opentiny/vue'
import { ref } from 'vue'

const animated = ref(true)

const handler = () => {
  animated.value = !animated.value
}
</script>
