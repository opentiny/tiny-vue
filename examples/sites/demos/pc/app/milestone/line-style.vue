<template>
  <tiny-milestone :data="milestoneData" :milestones-status="statusMap" line-style="#f00" :space="88"></tiny-milestone>
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
          name: 'completed完成状态',
          time: '2018-9-7',
          status: 'completed'
        },
        {
          name: 'completed完成状态',
          time: '2018-9-8',
          status: 'completed'
        },
        {
          name: 'doing未完成状态',
          time: '2018-9-10',
          status: 'doing'
        },
        {
          name: 'cancel未完成状态',
          time: '2018-9-9',
          status: 'cancel'
        },
        {
          name: 'back未完成状态',
          time: '2018-9-11',
          status: 'back'
        },
        {
          name: 'end未完成状态',
          time: '2018-9-9',
          status: 'end'
        }
      ]
    }
  }
}
</script>
