<template>
  <div>
    <tiny-button @click="handleClick(!isSolid)" style="max-width: cancel">设置 solid 值为 {{ !isSolid }}</tiny-button>
    <tiny-milestone :data="milestoneData" :milestones-status="statusMap" :solid="isSolid"></tiny-milestone>
  </div>
</template>

<script lang="jsx">
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
          name: 'completed 完成状态',
          time: '2018-9-7',
          status: 'completed'
        },
        {
          name: 'completed 完成状态',
          time: '2018-9-8',
          status: 'completed'
        },
        {
          name: 'doing 未完成状态',
          time: '2018-9-10',
          status: 'doing'
        },
        {
          name: 'xxx 未完成状态',
          time: '2018-9-9',
          status: 'xxx'
        },
        {
          name: 'back 未完成状态',
          time: '2018-9-11',
          status: 'back'
        },
        {
          name: 'end 未完成状态',
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
