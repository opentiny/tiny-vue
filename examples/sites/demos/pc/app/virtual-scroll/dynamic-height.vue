<template>
  <div class="virtual-scroll-demo">
    <!-- Vue2的选项式API -->
    <TinyVirtualScroll :data="showData" :estimatedItemSize="50" itemIndex="id" class="tiny-virtual-scroll"
      direction="vertical" :buffer="0.5">
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
      showData: [] // 用于存储生成的动态数据
    }
  },
  created() {
    // 生成动态高度的数据
    this.showData = Array.from({ length: 10000 }, (_, i) => ({
      id: i + 1,
      value: `${i + 1}字符内容`.repeat(Math.ceil(Math.random() * 30)) // 动态文本内容
    }))
  }
}
</script>

<style>
.virtual-scroll-demo {
  height: 100%;
  overflow: hidden;
  /* width: 600px; */
}

.tiny-virtual-scroll {
  height: 400px;
}

.tiny-virtual-scroll-item {
  padding: 10px;
  border-bottom: 2px solid #ddd;
}
</style>
