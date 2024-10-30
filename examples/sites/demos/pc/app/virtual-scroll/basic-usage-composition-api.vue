<template>
  <div class="virtual-scroll-demo">
    <TinyVirtualScroll
      :data="showData"
      :item-size="50"
      item-index="key"
      class="tiny-virtual-scroll"
      :visible-size="400"
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

<style scoped>
.virtual-scroll-demo {
  height: 100%;
  overflow: hidden;
  text-align: center;
}

.virtual-scroll-demo .tiny-virtual-scroll {
  width: 1000px;
  border: solid 1px #c2c2c2;
}

.virtual-scroll-demo .tiny-virtual-scroll .tiny-virtual-scroll-item {
  width: 100%;
  padding: 10px;
  border-bottom: 2px solid #c2c2c2;
  font-size: 15px;
}
</style>
