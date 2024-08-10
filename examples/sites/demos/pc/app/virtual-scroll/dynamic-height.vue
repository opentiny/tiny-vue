<template>
  <div class="virtual-scroll-demo">
    <!-- Vue2的选项式API -->
    <p>虚拟滚动组件demo</p>
    <TinyVirtualScroll
      :data="showData"
      :estimatedItemSize="50"
      :viewSize="600"
      itemIndex="id"
      class="ho"
      direction="vertical"
      :buffer="200"
    >
      <template #default="props">
        <div class="scroll-item">
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
    for (let i = 1; i <= 10000; i++) {
      this.showData.push({
        id: i,
        value: `${i}字符内容`.repeat(Math.ceil(Math.random() * 30)) // 动态文本内容
      })
    }
  }
}
</script>

<style>
.virtual-scroll-demo {
  height: 100%;
  overflow: hidden;
  /* width: 600px; */
}

.scroll-item {
  padding: 10px;
  border-bottom: 2px solid #ddd;
}
</style>
