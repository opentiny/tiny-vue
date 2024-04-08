<template>
  <div class="demo-timeline">
    <p>
      (1)
      <code>autoColor</code>
      可选状态值：<code>success</code>：成功；<code>warning</code>：警告；<code>error</code>：失败。
    </p>
    <tiny-time-line :data="data1"></tiny-time-line>
    <br />

    <p>
      (2) 当<code>shape</code> = 'dot' 时，可以通过 <code>type</code> 属性指定节点类型，可选值有
      <code>primary</code>|<code>success</code> |<code>warning</code>|<code>danger</code>|<code>info</code>
    </p>
    <tiny-time-line :data="data2" vertical shape="dot"></tiny-time-line>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import { TimeLine as TinyTimeLine } from '@opentiny/vue'

const data1 = reactive([
  { name: '默认状态' },
  { name: '成功状态', autoColor: 'success' },
  { name: '警告状态', autoColor: 'warning' },
  { name: '异常状态', error: true }, // 也可以使用 autoColor: 'error'
  { name: '禁用状态', disabled: true }
])
const data2 = reactive([
  { name: '基本 / primary', time: '2019-11-10 00:00:00', type: 'primary' },
  { name: '成功 / success', time: '2019-11-11 00:01:30', type: 'success' },
  { name: '警告 / warning', time: '2019-11-12 14:20:15', type: 'warning' },
  { name: '危险 / danger', time: '2019-11-13 20:45:50', type: 'danger' },
  { name: '信息 / info', time: '2019-11-14 20:45:50', type: 'info' }
])
</script>

<style scoped>
code {
  color: #476582;
  padding: 4px 8px;
  margin: 0 4px;
  border-radius: 3px;
  background-color: rgba(27, 31, 35, 0.05);
}
</style>
