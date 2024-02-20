<template>
  <div class="demo-timeline">
    <tiny-time-line :data="data1"></tiny-time-line>
    <br />

    <p>
      竖式时间线可以通过 <code>type</code> 属性指定节点类型，可选值有 <code>primary</code>|<code>success</code>
      |<code>warning</code>|<code>danger</code>|<code>info</code>
    </p>
    <tiny-time-line :data="data2" vertical shape="dot"></tiny-time-line>
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
      data1: [{ name: '默认状态' }, { name: '异常状态', error: true }, { name: '禁用状态', disabled: true }],
      data2: [
        { name: '基本 / primary', time: '2019-11-10 00:00:00', type: 'primary' },
        { name: '成功 / success', time: '2019-11-11 00:01:30', type: 'success' },
        { name: '警告 / warning', time: '2019-11-12 14:20:15', type: 'warning' },
        { name: '危险 / danger', time: '2019-11-13 20:45:50', type: 'danger' },
        { name: '信息 / info', time: '2019-11-14 20:45:50', type: 'info' }
      ]
    }
  }
}
</script>

<style>
code {
  color: #476582;
  padding: 2px 8px;
  margin: 0 4px;
  background-color: rgba(27, 31, 35, 0.05);
  border-radius: 3px;
}
</style>
