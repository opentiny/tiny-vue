<template>
  <div>
    <tiny-skeleton>
      <template #placeholder>
        <tiny-skeleton-item variant="image" style="width: 200px"></tiny-skeleton-item>
        <br /><br />
        <tiny-skeleton-item variant="circle" size="small"></tiny-skeleton-item>
      </template>
    </tiny-skeleton>
  </div>
</template>

<script>
import { Skeleton, SkeletonItem } from '@opentiny/vue'

export default {
  components: {
    TinySkeleton: Skeleton,
    TinySkeletonItem: SkeletonItem
  }
}
</script>
