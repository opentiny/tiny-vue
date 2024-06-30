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
import { Skeleton, SkeletonItem, Button } from '@opentiny/vue'

export default {
  components: {
    TinySkeleton: Skeleton,
    TinySkeletonItem: SkeletonItem,
    TinyButton: Button
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
