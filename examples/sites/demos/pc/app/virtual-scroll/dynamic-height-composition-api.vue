<template>
  <div class="virtual-scroll-demo">
    <TinyVirtualScroll
      :data="showData"
      :estimated-item-size="50"
      item-index="id"
      :visible-size="400"
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
    value: `${i}字符内容`.repeat(Math.ceil(Math.random() * 30))
  })
}
</script>

<style>
.virtual-scroll-demo {
  height: 100%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
}

.virtual-scroll-demo .tiny-virtual-scroll {
  width: 1000px;
  border: solid 1px #c2c2c2;
}

.virtual-scroll-demo .tiny-virtual-scroll .tiny-virtual-scroll-item {
  padding: 10px;
  border-bottom: 2px solid #ddd;
}
</style>
