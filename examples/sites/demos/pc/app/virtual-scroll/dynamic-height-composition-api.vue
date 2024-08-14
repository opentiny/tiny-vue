<template>
  <div class="virtual-scroll-demo">
    <p>虚拟滚动组件demo</p>
    <TinyVirtualScroll :data="showData" :estimatedItemSize="50" :viewSize="600" itemIndex="id" class="ho"
      direction="vertical">
      <template #default="props">
        <div class="scroll-item">
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

for (let i = 1; i <= 1000; i++) {
  showData.value.push({
    id: i,
    value: `${i}字符内容`.repeat(Math.ceil(Math.random() * 20)) // 动态文本内容
  })
}
</script>

<style>
.virtual-scroll-demo {
  height: 100%;
  overflow: hidden;
  /* display: flex; */
}

.scroll-item {
  padding: 10px;
  border-bottom: 10px solid #ddd;
}
</style>
