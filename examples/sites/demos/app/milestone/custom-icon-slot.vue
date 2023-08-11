<template>
  <tiny-milestone :data="milestoneData" :milestones-status="statusMap">
    <template #icon="data">
      <component :is="data.slotScope.icon" class="custom"> </component>
    </template>
  </tiny-milestone>
</template>

<script lang="jsx">
import { Milestone } from '@opentiny/vue'
import { IconShare, IconYes, IconDel, IconAscending, IconWriting } from '@opentiny/vue-icon'

export default {
  components: {
    TinyMilestone: Milestone,
    IconShare: IconShare(),
    IconYes: IconYes(),
    IconDel: IconDel(),
    IconWriting: IconWriting(),
    IconAscending: IconAscending()
  },
  data() {
    return {
      // 里程碑样式
      statusMap: {
        completed: '#5938b9',
        doing: '#7ED321',
        back: '#f5222d',
        end: '#faad14',
        cancel: '#d9d9d9'
      },
      // 数据源
      milestoneData: [
        {
          name: '自定义数据1',
          time: '2018-9-7',
          status: 'completed',
          icon: IconShare()
        },
        {
          name: '自定义数据2',
          time: '2018-9-8',
          status: 'completed',
          icon: IconYes()
        },
        {
          name: '自定义数据3',
          time: '2018-9-10',
          status: 'doing',
          content: null,
          icon: IconDel()
        },
        {
          name: '自定义数据4',
          time: '2018-9-9',
          status: 'cancel',
          icon: IconWriting()
        },
        {
          name: '自定义数据5',
          time: '2018-9-11',
          status: 'back',
          icon: IconAscending()
        },
        {
          name: '自定义数据6',
          time: '2018-9-9',
          status: 'end',
          icon: IconShare()
        }
      ]
    }
  }
}
</script>

<style>
.custom {
  width: 16px;
  height: 16px;
  line-height: 16px;
  position: relative;
  font-size: 12px;
  text-align: center;
  left: 0;
  top: -2px;
  border-radius: 50%;
  color: #000;
  cursor: pointer;
  z-index: 15;
}
</style>
