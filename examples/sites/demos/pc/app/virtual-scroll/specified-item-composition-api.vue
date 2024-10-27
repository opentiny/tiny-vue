<template>
  <div class="scrollTo-demo">
    <div class="footer">
      <span> 滚动到：</span>
      <tiny-numeric
        v-model="scrollto"
        :step="step"
        :min="1"
        :max="showData.length"
        circulate
        size="mini"
        @change="scrollToItem"
      ></tiny-numeric>
    </div>
    <div class="main">
      <TinyVirtualScroll
        ref="scroller"
        :data="showData"
        :item-size="50"
        item-index="key"
        :visible-size="300"
        class="tiny-virtual-scroll"
        direction="vertical"
      >
        <template #default="props">
          <div class="tiny-virtual-scroll-item">
            {{ props.item.value }}
          </div>
        </template>
      </TinyVirtualScroll>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Numeric as TinyNumeric, VirtualScroll as TinyVirtualScroll } from '@opentiny/vue'

const showData = ref([])
const scrollto = ref(1)
const scroller = ref(null)
const scrollToItem = () => {
  if (scroller.value) {
    scroller.value.scrollToItem(scrollto.value)
  }
}

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

.scrollTo-demo .footer {
  margin-bottom: 20px;
  text-align: left;
  display: flex;
  align-items: center;
  gap: 10px;
}

.scrollTo-demo .footer .tiny-numeric {
  width: 200px;
}

.scrollTo-demo .main .tiny-virtual-scroll .tiny-virtual-scroll-item {
  padding: 10px;
  border-bottom: 2px solid #ddd;
  width: 100%;
  align-content: center;
}
</style>
