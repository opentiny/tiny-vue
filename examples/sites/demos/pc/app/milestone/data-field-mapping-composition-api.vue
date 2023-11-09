<template>
  <tiny-milestone
    :data="milestoneData"
    :milestones-status="statusMap"
    time-field="date"
    name-field="name"
    status-field="progress"
    flag-status-field="progress"
    flag-name-field="title"
    completed-field="completed"
    flag-content-field="describe"
    flag-field="flags"
  ></tiny-milestone>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { Milestone as TinyMilestone } from '@opentiny/vue'

const statusMap = ref({
  completed: 'var(--ti-common-color-line-active)',
  doing: '#7ED321',
  back: '#f5222d',
  end: '#faad14',
  cancel: '#d9d9d9'
})
const milestoneData = ref([
  {
    name: 'POR1', // name-field设置的键名
    date: '2018-9-7', // time-field设置的键名
    progress: 'completed', // status-field设置的键名，completed-field设置的键值
    // flag-field设置的键名
    flags: [
      {
        progress: 'completed', // flag-status-field设置的键名
        title: '第一阶段', // flag-name-field设置的键名
        describe: 'flag-content-field' // flag-content-field设置的键名
      }
    ]
  },
  {
    name: 'POR2',
    date: '2018-9-8',
    progress: 'completed',
    flags: [
      {
        progress: 'back',
        title: '第二阶段',
        describe: 'flag-content-field'
      }
    ]
  },
  {
    name: 'POR3',
    date: '2018-9-10',
    progress: 'doing',
    content: null
  },
  {
    name: 'POR4',
    date: '2018-9-9',
    progress: 'cancel',
    flags: [
      {
        progress: 'back',
        describe: 'flag-content-field',
        title: '第四阶段1'
      },
      {
        progress: 'doing',
        describe: 'flag-content-field',
        title: '第四阶段2'
      }
    ]
  },
  {
    name: 'POR5',
    date: '2018-9-11',
    progress: 'back',
    flags: [
      {
        progress: 'completed',
        describe: 'flag-content-field',
        title: '第五阶段'
      }
    ]
  }
])
</script>
