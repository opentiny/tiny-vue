<template>
  <div>
    <div class="m-20">style 类型</div>
    <tiny-skeleton>
      <template #placeholder>
        <tiny-skeleton-item style="width: 200px; height: 100px"></tiny-skeleton-item>
      </template>
    </tiny-skeleton>

    <div class="m-20">class 类型</div>
    <tiny-skeleton>
      <template #placeholder>
        <tiny-skeleton-item class="tiny-skeleton-class"></tiny-skeleton-item>
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

<style scoped>
.tiny-skeleton-class {
  width: 200px;
  height: 100px;
}
.m-20 {
  margin: 20px 0;
}
</style>
