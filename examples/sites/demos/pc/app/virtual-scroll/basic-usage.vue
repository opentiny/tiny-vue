<template>
  <div class="virtual-scroll-demo">
    <!-- Vue2的选项式API -->
    <p>虚拟滚动组件demo</p>
    <TinyVirtualScroll :data="showData" :itemSize="50" :viewSize="300" itemIndex="key" class="ho"
      direction="horizontal">
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
      showData: []
    }
  },
  created() {
    // 生成模拟数据
    this.showData = Array.from(Array(1000), (v, k) => {
      return {
        value: k,
        key: k
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

.ho {
  flex: auto 1 1;
}
</style>
