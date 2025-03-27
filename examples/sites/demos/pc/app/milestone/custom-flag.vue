<template>
  <div class="demo-milestone">
    <tiny-milestone :data="milestoneData" :milestones-status="statusMap">
      <template #flag="data">
        <span style="font-size: 12px">{{ data.slotScope.content }}</span>
      </template>
    </tiny-milestone>
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
      statusMap: {
        completed: '#1890ff',
        doing: '#86edff',
        back: '#93fda6',
        end: '#faad18',
        cancel: '#f230305A'
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
  }
}
</script>

<style scoped>
.demo-milestone ::v-deep .tiny-milestone__description-status {
  margin-top: 4px;
}
</style>
