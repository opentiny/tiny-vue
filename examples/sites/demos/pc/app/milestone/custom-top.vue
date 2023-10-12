<template>
  <tiny-milestone :data="milestoneData" :milestones-status="statusMap">
    <template #top="data">
      <span style="margin-left: 50px">{{ data.slotScope.status }}</span>
    </template>
  </tiny-milestone>
</template>

<script lang="jsx">
import { Milestone } from '@opentiny/vue'

export default {
  components: {
    TinyMilestone: Milestone
  },
  data() {
    return {
      timeActive1: 1,
      normalActive: 2,
      advancedActive: 2,
      statusMap: {
        completed: 'var(--ti-common-color-line-active)',
        doing: '#7ED321',
        back: '#f5222d',
        end: '#faad14',
        cancel: '#d9d9d9'
      },
      milestoneData: [
        {
          name: 'POR1',
          time: '2018-9-7',
          status: 'completed'
        },
        {
          name: 'POR2',
          time: '2018-9-8',
          status: 'completed'
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
      ]
    }
  }
}
</script>
