<template>
  <div class="scrollTo-demo">
    <div class="footer">
      <tiny-button type="primary" plain @click="$refs.scroller.scrollToItem(scrollto)">滚动到</tiny-button>
      <tiny-input type="number" v-model.number="scrollto" :min="1" :max="showData.length"></tiny-input>
    </div>
    <div class="main">
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

<script lang="jsx">
import { Button, Input, VirtualScroll } from '@opentiny/vue'

export default {
  components: {
    TinyButton: Button,
    TinyInput: Input,
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

.footer {
  margin-bottom: 10px;
}

.scrollTo-demo .footer.tiny-button {
  display: inline-block;
  width: 60px;
}

.scrollTo-demo .footer .tiny-input {
  width: 250px;
}

.scrollTo-demo .main .tiny-virtual-scroll {
  height: 300px;
}

.scrollTo-demo .main .tiny-virtual-scroll .tiny-virtual-scroll-item {
  padding: 10px;
  border-bottom: 2px solid #ddd;
  width: 100%;
  align-content: center;
}
</style>
