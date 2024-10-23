<template>
  <div class="virtual-scroll-demo">
    <!-- Vue2的选项式API -->
    <TinyVirtualScroll :data="showData" :itemSize="50" itemIndex="key" :visibleSize="300" class="tiny-virtual-scroll">
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

<style>
.virtual-scroll-demo {
  height: 100%;
  overflow: hidden;
  /* display: flex; */
}

/* .tiny-virtual-scroll {
  height: 300px;
} */

.tiny-virtual-scroll-item {
  padding: 10px;
  border-bottom: 2px solid #ddd;
  align-content: center;
}
</style>
