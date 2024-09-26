<template>
  <div class="virtual-scroll-demo">
    <TinyVirtualScroll
      :data="showData"
      :item-size="50"
      item-index="key"
      :visible-size="300"
      class="tiny-virtual-scroll"
    >
      <template #default="props">
        <div class="tiny-virtual-scroll-item">
          {{ props.item.value }}
        </div>
      </template>
    </TinyVirtualScroll>
  </div>
</template>

<script lang="jsx">
import { VirtualScroll } from '@opentiny/vue'

export default {
  components: {
    TinyVirtualScroll: VirtualScroll
  },
  data() {
    return {
      showData: []
    }
  },
  created() {
    // 生成模拟数据
    this.showData = Array.from(Array(1000), (v, k) => {
      return {
        value: `第${k + 1}项`,
        key: k + 1
      }
    })
  }
}
</script>

<style scoped>
.virtual-scroll-demo {
  height: 100%;
  overflow: hidden;
}

.virtual-scroll-demo .tiny-virtual-scroll-item {
  padding: 10px;
  border-bottom: 2px solid #ddd;
  align-content: center;
}
</style>
