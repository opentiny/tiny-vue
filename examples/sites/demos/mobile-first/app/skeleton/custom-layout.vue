<template>
  <div>
    <tiny-skeleton :animated="false">
      <template #placeholder>
        <h6>方形按钮</h6>
        <tiny-skeleton-item style="width: 64px; height: 24px"></tiny-skeleton-item>
        <tiny-skeleton-item style="width: 72px; height: 28px"></tiny-skeleton-item>
        <tiny-skeleton-item style="width: 88px; height: 32px"></tiny-skeleton-item>
        <h6>圆形按钮</h6>
        <tiny-skeleton-item style="width: 64px; height: 24px; border-radius: 2.5rem"></tiny-skeleton-item>
        <tiny-skeleton-item style="width: 72px; height: 28px; border-radius: 2.5rem"></tiny-skeleton-item>
        <tiny-skeleton-item style="width: 88px; height: 32px; border-radius: 2.5rem"></tiny-skeleton-item>
        <h6>输入框</h6>
        <tiny-skeleton-item style="width: 274px; height: 24px"></tiny-skeleton-item>
        <tiny-skeleton-item style="width: 274px; height: 28px"></tiny-skeleton-item>
        <tiny-skeleton-item style="width: 274px; height: 32px"></tiny-skeleton-item>
        <tiny-skeleton-item style="width: 274px; height: 72px"></tiny-skeleton-item>
        <h6>图片</h6>
        <tiny-skeleton-item variant="image" style="width: 100px; height: 100px"></tiny-skeleton-item>
        <h6>图表</h6>
        <tiny-skeleton-item variant="image" style="width: 100px; height: 100px">
          <icon-statistics style="width: 56px; height: 56px"></icon-statistics>
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
