<template>
  <div class="virtual-scroll-demo">
    <TinyVirtualScroll
      :data="showData"
      :item-size="120"
      item-index="key"
      :visible-size="600"
      direction="horizontal"
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
  width: 600px;
  overflow: hidden;
}

.virtual-scroll-demo .tiny-virtual-scroll {
  height: 50px;
}

.virtual-scroll-demo .tiny-virtual-scroll .tiny-virtual-scroll-item {
  border-right: 1px solid #e1e1e1;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 21px;
  height: 100%;
}
</style>
