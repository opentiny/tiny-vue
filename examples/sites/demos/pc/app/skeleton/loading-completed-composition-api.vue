<template>
  <div>
    <tiny-button @click="handler">{{ loading ? '显示' : '隐藏' }}</tiny-button>
    <br /><br />
    <tiny-skeleton :loading="loading">
      <template #default>
        <p class="paragraph">内容比较短的一段文字</p>
      </template>
      <template #placeholder>
        <tiny-skeleton-item></tiny-skeleton-item>
      </template>
    </tiny-skeleton>
  </div>
</template>

<script setup>
import { Skeleton as TinySkeleton, Button as TinyButton, SkeletonItem as TinySkeletonItem } from '@opentiny/vue'
import { ref } from 'vue'

const loading = ref(true)

const handler = () => {
  loading.value = !loading.value
}
</script>
