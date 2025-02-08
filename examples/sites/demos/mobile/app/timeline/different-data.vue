<template>
  <tiny-time-line :data="data" name-field="statusText" :active="active" @click="click"></tiny-time-line>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { TinyTimeLine } from '@opentiny/vue-mobile'

const active = ref(1)
const data = ref([
  {
    status: 'current',
    statusText: '企业资料',
    personInfo: '张三',
    cycle: '周期：2天',
    overdue: '已超期 1 天'
  },
  {
    status: 'success',
    statusText: '法人资料',
    personInfo: '张三',
    cycle: '周期：2天',
    overdue: '已超期 1 天'
  },
  {
    status: 'complete',
    statusText: '校验身份',
    personInfo: '张三',
    cycle: '周期：2天',
    overdue: '已超期 1 天'
  },
  {
    status: 'complete',
    statusText: '提交资料',
    personInfo: '张三',
    cycle: '周期：2天',
    overdue: '已超期 1 天'
  }
])

function click(index, node) {
  active.value = index
}
</script>

<style scoped>
.tiny-mobile-timeline__date-time {
  padding: 15px 22px 15px 4px !important;
}
.tiny-mobile-timeline__content {
  padding: 15px 16px 14px 22px !important;
}
</style>
