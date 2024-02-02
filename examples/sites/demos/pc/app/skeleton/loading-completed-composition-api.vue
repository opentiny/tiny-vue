<template>
  <div>
    <tiny-button @click="handler">显示/隐藏</tiny-button>
    <br /><br />
    <tiny-skeleton :loading="loading">
      <template #default>
        <tiny-user-head type="icon" round></tiny-user-head>
        <p class="paragraph">内容比较短的一段文字</p>
        <tiny-button>一个按钮</tiny-button>
      </template>
      <template #placeholder>
        <tiny-skeleton-item variant="circle" style="width: 72px; height: 72px"></tiny-skeleton-item>
        <br /><br />
        <tiny-skeleton-item style="width: 180px"></tiny-skeleton-item>
        <tiny-skeleton-item style="width: 92px; height: 28px"></tiny-skeleton-item>
      </template>
    </tiny-skeleton>
  </div>
</template>

<script setup>
import {
  Skeleton as TinySkeleton,
  Button as TinyButton,
  SkeletonItem as TinySkeletonItem,
  UserHead as TinyUserHead
} from '@opentiny/vue'
import { ref } from 'vue'

const loading = ref(true)

const handler = () => {
  loading.value = !loading.value
}
</script>
