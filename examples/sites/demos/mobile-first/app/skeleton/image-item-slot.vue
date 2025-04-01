<template>
  <div>
    <tiny-skeleton :animated="false">
      <template #placeholder>
        <tiny-skeleton-item variant="image" style="width: 1036px; height: 352px">
          <icon-statistics style="width: 112px; height: 112px"></icon-statistics>
        </tiny-skeleton-item>
      </template>
    </tiny-skeleton>
  </div>
</template>

<script>
import { TinySkeleton, TinySkeletonItem } from '@opentiny/vue'
import { iconStatistics } from '@opentiny/vue-icon'

export default {
  components: {
    TinySkeleton,
    TinySkeletonItem,
    IconStatistics: iconStatistics()
  }
}
</script>
