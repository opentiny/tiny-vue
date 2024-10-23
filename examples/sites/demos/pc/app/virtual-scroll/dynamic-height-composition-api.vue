<template>
  <div class="virtual-scroll-demo">
    <TinyVirtualScroll
      :data="showData"
      :estimatedItemSize="50"
      itemIndex="id"
      :visibleSize="300"
      class="tiny-virtual-scroll"
      direction="vertical"
      :buffer="0.5"
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

// 创建动态数据
const showData = ref([])

for (let i = 1; i <= 10000; i++) {
  showData.value.push({
    id: i,
    value: `${i}字符内容`.repeat(Math.ceil(Math.random() * 30)) // 动态文本内容
  })
}
</script>

<style>
.virtual-scroll-demo {
  height: 100%;
  overflow: hidden;
  /* width: 600px; */
}

.tiny-virtual-scroll {
  width: 100%;
}

.tiny-virtual-scroll-item {
  padding: 10px;
  border-bottom: 2px solid #ddd;
}
</style>
