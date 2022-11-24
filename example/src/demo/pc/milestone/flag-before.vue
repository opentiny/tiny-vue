<template>
  <div>
    <tiny-button @click="handleClick(!isBefore)" style="max-width: unset"
      >设置flag-before值为{{ !isBefore }}</tiny-button
    >
    <tiny-milestone
      :data="milestoneData"
      :milestones-status="statusMap"
      :flag-before="isBefore"
    ></tiny-milestone>
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
      isBefore: false,
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
          name: 'POR2',
          time: '2018-9-8',
          status: 'completed',
          flags: [
            {
              status: 'back',
              content: '引导用户按照流程完成任务'
            }
          ]
        },
        { name: 'POR3', time: '2018-9-10', status: 'doing', content: null },
        {
          name: 'POR4',
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
        { name: 'POR5', time: '2018-9-11', status: 'back' },
        {
          name: 'POR6',
          time: '2018-9-9',
          status: 'end',
          flags: [
            {
              status: 'completed',
              content: 'test6'
            }
          ]
        }
      ]
    }
  },
  methods: {
    handleClick(value) {
      this.isBefore = value
    }
  }
}
</script>
