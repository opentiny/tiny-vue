<template>
  <div>
    <p>大小</p>
    <tiny-radio v-model="size" label="small">Small</tiny-radio>
    <tiny-radio v-model="size" label="medium">Middle</tiny-radio>
    <tiny-radio v-model="size" label="large">Large</tiny-radio>
    <br /><br />

    <p>动画</p>
    <tiny-switch v-model="active"></tiny-switch>
    <br /><br />
    <tiny-skeleton :active="active">
      <template #placeholder>
        <tiny-skeleton-item></tiny-skeleton-item>
        <br />
        <tiny-skeleton-item variant="image" :size="size"></tiny-skeleton-item>
        <br /><br />
        <tiny-skeleton-item variant="circle" :size="size"></tiny-skeleton-item>
      </template>
    </tiny-skeleton>
  </div>
</template>

<script>
import { Skeleton, Radio, SkeletonItem, Switch } from '@opentiny/vue'

export default {
  components: {
    TinySkeleton: Skeleton,
    TinyRadio: Radio,
    TinySkeletonItem: SkeletonItem,
    TinySwitch: Switch
  },
  data() {
    return {
      size: 'medium',
      active: true
    }
  }
}
</script>
