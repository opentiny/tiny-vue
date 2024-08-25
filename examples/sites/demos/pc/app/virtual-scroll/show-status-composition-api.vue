<template>
  <div class="scrollTo-demo">
    <div class="check">
      <tiny-button type="primary" plain @click="showScroll = !showScroll">切换可见性</tiny-button>
    </div>
    <div class="context" v-show="showScroll">
      <TinyVirtualScroll ref="scroller" :data="showData" :itemSize="50" itemIndex="key" class="tiny-virtual-scroll"
        direction="vertical">
        <template #default="props">
          <div class="tiny-virtual-scroll-item">
            {{ props.item.value }}
          </div>
        </template>
      </TinyVirtualScroll>
    </div>
  </div>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { Button as TinyButton, VirtualScroll as TinyVirtualScroll } from '@opentiny/vue'

const showScroll = ref(true)
const showData = ref([])
// 生成模拟数据
showData.value = Array.from(Array(1000), (v, k) => {
  return {
    value: `第${k + 1}项`,
    key: k
  }
})
</script>

<style scoped>
.scrollTo-demo {
  text-align: center;
  height: 100%;
  overflow: hidden;
}

.scrollTo-demo .check {
  justify-content: flex-start;
  margin-bottom: 10px;
}

.scrollTo-demo .check .tiny-button {
  display: block;
  width: 150px;

  text-align: center;
}

.scrollTo-demo .context .tiny-virtual-scroll {
  height: 300px;
}

.scrollTo-demo .context .tiny-virtual-scroll .tiny-virtual-scroll-item {
  padding: 10px;
  border-bottom: 2px solid #ddd;
  width: 100%;
  align-content: center;
}
</style>
