<template>
  <tiny-milestone :data="milestoneData" :milestones-status="statusMap" line-style="#f00"></tiny-milestone>
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
    name: '完成状态，状态值:completed',
    time: '2018-9-7',
    status: 'completed'
  },
  {
    name: '完成状态，状态值:completed',
    time: '2018-9-8',
    status: 'completed'
  },
  {
    name: '未完成状态, 状态值:doing',
    time: '2018-9-10',
    status: 'doing'
  },
  {
    name: '未完成状态，状态值:cancel',
    time: '2018-9-9',
    status: 'cancel'
  },
  {
    name: '未完成状态，状态值:back',
    time: '2018-9-11',
    status: 'back'
  },
  {
    name: '未完成状态，状态值:end',
    time: '2018-9-9',
    status: 'end'
  }
])
</script>
