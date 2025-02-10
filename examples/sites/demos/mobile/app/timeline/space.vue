<template>
  <tiny-time-line :data="data" :space="100"></tiny-time-line>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { TinyTimeLine } from '@opentiny/vue-mobile'

const active = ref(1)
const data = ref([
  {
    status: 'current',
    time: '2019-11-12 14:20:15',
    name: '筛选中',
    personInfo: '张三',
    cycle: '周期：2天',
    overdue: '已超期 1 天'
  },
  {
    status: 'success',
    time: '2019-11-12 14:20:15',
    name: '筛选中',
    personInfo: '张三',
    cycle: '周期：2天',
    overdue: '已超期 1 天'
  },
  {
    status: 'fail',
    time: '2019-11-12 14:20:15',
    name: '筛选中',
    personInfo: '张三',
    cycle: '周期：2天',
    overdue: '已超期 1 天'
  },
  {
    status: 'complete',
    time: '2019-11-12 14:20:15',
    name: '筛选中',
    personInfo: '张三',
    cycle: '周期：2天',
    overdue: '已超期 1 天'
  },
  {
    status: 'complete',
    time: '2019-11-12 14:20:15',
    name: '筛选中',
    personInfo: '张三',
    cycle: '周期：2天',
    overdue: '已超期 1 天'
  },
  {
    status: 'complete',
    time: '2019-11-11 00:01:30',
    name: '筛选中',
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
