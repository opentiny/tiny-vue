<template>
  <div>
    <p>1. <code>space</code>取值可以是带尺寸单位的具体数值。以下示例设置节点宽度为200px：</p>
    <div class="timeline-box">
      <tiny-time-line :data="data" :active="active1" space="200" @click="normalClick1"> </tiny-time-line>
    </div>

    <p>2. <code>space</code>取值也可以是百分比数值，基准为组件父元素的宽度。以下示例设置引导线长度为20%：</p>
    <div class="timeline-box">
      <tiny-time-line
        :data="data"
        :active="active2"
        text-position="right"
        space="20%"
        @click="normalClick2"
      ></tiny-time-line>
    </div>
  </div>
</template>

<script lang="ts">
import { TimeLine } from '@opentiny/vue'

export default {
  components: {
    TinyTimeLine: TimeLine
  },
  data() {
    return {
      active1: 0,
      active2: 1,
      data: [
        { name: '已下单', time: '2019-11-11 00:01:30' },
        { name: '运输中', time: '2019-11-12 14:20:15' },
        { name: '已签收', time: '2019-11-14 20:45:50' }
      ]
    }
  },
  methods: {
    normalClick1(index) {
      this.active1 = index
    },
    normalClick2(index) {
      this.active2 = index
    }
  }
}
</script>

<style lang="less" scoped>
code {
  padding: 4px;
  background-color: var(--lightless);
}

.timeline-box {
  width: 800px;
  height: 100px;
}
</style>
