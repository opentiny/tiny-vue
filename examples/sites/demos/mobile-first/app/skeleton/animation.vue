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

<script>
import { TinySkeleton, TinySkeletonItem, TinyButton } from '@opentiny/vue'

export default {
  components: {
    TinySkeleton,
    TinySkeletonItem,
    TinyButton
  },
  data() {
    return {
      animated: true
    }
  },
  methods: {
    handler() {
      this.animated = !this.animated
    }
  }
}
</script>
