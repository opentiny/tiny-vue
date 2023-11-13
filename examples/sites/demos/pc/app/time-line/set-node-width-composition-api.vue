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

<script setup>
import { ref } from 'vue'
import { TimeLine as TinyTimeLine } from '@opentiny/vue'

const active1 = ref(0)
const active2 = ref(1)

const data = ref([
  { name: '已下单', time: '2019-11-11 00:01:30' },
  { name: '运输中', time: '2019-11-12 14:20:15' },
  { name: '已签收', time: '2019-11-14 20:45:50' }
])

function normalClick1(index) {
  active1.value = index
}

function normalClick2(index) {
  active2.value = index
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
