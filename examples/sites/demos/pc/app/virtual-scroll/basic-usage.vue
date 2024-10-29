<template>
  <div class="virtual-scroll-demo">
    <TinyVirtualScroll :data="showData" :item-size="50" item-index="key" :visible-size="400"
      class="tiny-virtual-scroll">
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
  display: flex;
  justify-content: center;
  align-items: center;
}

.virtual-scroll-demo .tiny-virtual-scroll {
  width: 1000px;
  border: solid 1px #c2c2c2;
}

.virtual-scroll-demo .tiny-virtual-scroll .tiny-virtual-scroll-item {
  width: 100%;
  padding: 10px;
  border-bottom: 2px solid #c2c2c2;
}
</style>
