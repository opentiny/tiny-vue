<template>
  <div>
    <!-- vue3 -->
    <p>虚拟滚动组件demo</p>
    <TinyVirtualScroll :data="showData" :itemHeight="30" :viewHeight="180" itemIndex="key">
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

const showData = ref([])

// 生成模拟数据
showData.value = Array.from(Array(1000), (v, k) => {
  return {
    value: k,
    key: k
  }
})
</script>
