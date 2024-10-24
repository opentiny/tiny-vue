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
        @change="$refs.scroller.scrollToItem(scrollto)"
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

<script lang="jsx">
import { Numeric, VirtualScroll } from '@opentiny/vue'

export default {
  components: {
    TinyNumeric: Numeric,
    TinyVirtualScroll: VirtualScroll
  },
  data() {
    return {
      scrollto: 1,
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
  },
  methods: {}
}
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
