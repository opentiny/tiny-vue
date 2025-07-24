<template>
  <div class="demo-milestone">
    <tiny-button @click="handleClick(!isBefore)" style="max-width: unset"
      >设置 flag-before 值为 {{ !isBefore }}</tiny-button
    >
    <tiny-milestone :data="milestoneData" :milestones-status="statusMap" :flag-before="isBefore"></tiny-milestone>
  </div>
</template>

<script lang="jsx">
import { TinyMilestone, TinyButton } from '@opentiny/vue'

export default {
  components: {
    TinyMilestone,
    TinyButton
  },
  data() {
    return {
      isBefore: false,
      statusMap: {
        completed: 'var(--tv-color-bg-disabled-control-active)', // 组件库基础变量
        doing: '#9edb58',
        back: '#c2c2c2',
        end: '#edf7df',
        cancel: '#f23030'
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
              content: '欢迎使用 vui',
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

<style scoped>
.demo-milestone ::v-deep .tiny-milestone__description-status {
  margin-top: 4px;
}
</style>
