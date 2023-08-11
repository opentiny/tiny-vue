<template>
  <tiny-milestone :data="milestoneData" :milestones-status="statusMap" :start="1"></tiny-milestone>
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
    name: 'POR1',
    time: '2018-9-7',
    status: 'doing'
  },
  {
    name: 'POR2',
    time: '2018-9-8',
    status: 'doing'
  },
  { name: 'POR3', time: '2018-9-10', status: 'doing', content: null },
  {
    name: 'POR4',
    time: '2018-9-9',
    status: 'cancel'
  },
  { name: 'POR5', time: '2018-9-11', status: 'back' },
  {
    name: 'POR6',
    time: '2018-9-9',
    status: 'end'
  }
])
</script>
