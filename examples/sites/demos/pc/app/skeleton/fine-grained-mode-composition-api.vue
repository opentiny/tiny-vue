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

<script setup>
import {
  Skeleton as TinySkeleton,
  Radio as TinyRadio,
  SkeletonItem as TinySkeletonItem,
  Switch as TinySwitch
} from '@opentiny/vue'
import { ref } from 'vue'

const size = ref('medium')
const active = ref(true)
</script>
