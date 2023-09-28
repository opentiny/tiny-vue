<template>
  <tiny-milestone :data="milestoneData" :milestones-status="statusMap" line-style="#f00"></tiny-milestone>
</template>

<script lang="jsx">
import { Milestone } from '@opentiny/vue'

export default {
  components: {
    TinyMilestone: Milestone
  },
  data() {
    return {
      statusMap: {
        completed: 'var(--ti-common-color-line-active)',
        doing: '#7ED321',
        back: '#f5222d',
        end: '#faad14',
        cancel: '#d9d9d9'
      },
      milestoneData: [
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
      ]
    }
  }
}
</script>
