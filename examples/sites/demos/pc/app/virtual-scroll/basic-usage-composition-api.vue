<template>
  <div>
    <!-- vue3 -->
    <TinyVirtualScroll
      :data="showData"
      :itemSize="50"
      itemIndex="key"
      class="tiny-virtual-scroll"
      :visibleSize="300"
      direction="vertical"
    >
      <template #default="props">
        <div class="tiny-virtual-scroll-item">
          {{ props.item.value }}
        </div>
      </template>
    </TinyVirtualScroll>
  </div>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { VirtualScroll as TinyVirtualScroll } from '@opentiny/vue'

const showData = ref([])

// 生成模拟数据
showData.value = Array.from(Array(1000), (v, k) => {
  return {
    value: `第${k + 1}项`,
    key: k + 1
  }
})
</script>

<style>
.virtual-scroll-demo {
  height: 100%;
  overflow: hidden;
  /* display: flex; */
}

.tiny-virtual-scroll-item {
  padding: 10px;
  border-bottom: 2px solid #ddd;
  align-content: center;
}
</style>
