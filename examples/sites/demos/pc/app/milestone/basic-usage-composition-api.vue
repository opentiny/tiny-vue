<template>
  <tiny-milestone :data="milestoneData" :milestones-status="statusMap"></tiny-milestone>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { Milestone as TinyMilestone } from '@opentiny/vue'

// statusMap 对应 milestoneData的status；显示的背景色样式（可以是旗，可以是步骤条）
const statusMap = ref({
  // 对应 status = completed
  completed: 'var(--ti-common-color-line-active)',
  // 对应 status = doing
  doing: '#7ED321',
  // 对应 status = back
  back: '#f5222d',
  // 对应 status = end
  end: '#faad14',
  // 对应 status = cancel
  cancel: '#d9d9d9'
})
// 数据源
const milestoneData = ref([
  {
    name: 'completed状态',
    time: '2018-9-7',
    status: 'completed',
    flags: [
      {
        status: 'completed',
        name: 'test1',
        content: '已完成'
      }
    ]
  },
  {
    name: 'completed状态',
    time: '2018-9-8',
    status: 'completed',
    flags: [
      {
        status: 'back',
        content: '引导用户按照流程完成任务'
      }
    ]
  },
  { name: 'doing状态', time: '2018-9-10', status: 'doing', content: null },
  {
    name: 'cancel状态',
    time: '2018-9-9',
    status: 'cancel',
    flags: [
      {
        status: 'back',
        content: '欢迎使用vui',
        name: 'test7'
      },
      {
        status: 'doing',
        content: 'test8'
      }
    ]
  },
  { name: 'back状态', time: '2018-9-11', status: 'back' },
  {
    name: 'end状态',
    time: '2018-9-9',
    status: 'end',
    flags: [
      {
        status: 'completed',
        content: 'test6'
      }
    ]
  }
])
</script>
