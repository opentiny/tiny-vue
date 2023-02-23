<template>
  <div>
    <tiny-button @click="handleClick(!isSolid)" style="max-width: cancel">设置solid值为{{ !isSolid }}</tiny-button>
    <tiny-milestone :data="milestoneData" :milestones-status="statusMap" :solid="isSolid"></tiny-milestone>
  </div>
</template>

<script>
import { Milestone, Button } from '@opentiny/vue'

export default {
  components: {
    TinyMilestone: Milestone,
    TinyButton: Button
  },
  data() {
    return {
      isSolid: false,
      statusMap: {
        completed: 'var(--ti-common-color-line-active)',
        doing: '#7ED321',
        back: '#f5222d',
        end: '#faad14',
        xxx: '#d9d9d9'
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
          name: '未完成状态，状态值:xxx',
          time: '2018-9-9',
          status: 'xxx'
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
  },
  methods: {
    handleClick(value) {
      this.isSolid = value
    }
  }
}
</script>
