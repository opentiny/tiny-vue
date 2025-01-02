<template>
  <div class="demo-milestone">
    <div>场景 1：默认</div>
    <br />
    <tiny-milestone :data="milestoneData"></tiny-milestone>
    <br />
    <br />
    <div>场景 2：自定义状态色</div>
    <br />
    <tiny-milestone :data="milestoneData" :milestones-status="statusMap"></tiny-milestone>
    <br />
    <br />
    <div>场景 3：自定义状态色 + 实心显示</div>
    <br />
    <tiny-milestone :data="milestoneData" :milestones-status="statusMap" solid></tiny-milestone>
  </div>
</template>

<script lang="jsx">
import { TinyMilestone } from '@opentiny/vue'

export default {
  components: {
    TinyMilestone
  },
  data() {
    return {
      // statusMap 对应 milestoneData 的 status；显示的背景色样式（可以是旗，可以是步骤条）
      statusMap: {
        // 对应 status = completed
        completed: '#1890ff',
        // 对应 status = doing
        doing: '#e8faff',
        // 对应 status = back
        back: '#edf7df',
        // 对应 status = end
        end: '#faad14',
        // 对应 status = cancel
        cancel: '#f230301A'
      },
      // 数据源
      milestoneData: [
        {
          name: 'completed 状态',
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
          name: 'completed 状态',
          time: '2018-9-8',
          status: 'completed',
          flags: [
            {
              status: 'back',
              content: '引导用户按照流程完成任务'
            }
          ]
        },
        { name: 'doing 状态', time: '2018-9-10', status: 'doing', content: null },
        {
          name: 'cancel 状态',
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
        { name: 'back 状态', time: '2018-9-11', status: 'back' },
        {
          name: 'end 状态',
          time: '2018-9-9',
          status: 'end',
          flags: [
            {
              status: 'cancel',
              content: 'test6'
            }
          ]
        }
      ]
    }
  }
}
</script>
