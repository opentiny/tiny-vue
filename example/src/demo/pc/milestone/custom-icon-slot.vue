<template>
  <tiny-milestone :data="milestoneData" :milestones-status="statusMap">
    <template #icon="data">
      <component :is="data.slotScope.icon" class="custom"> </component>
    </template>
  </tiny-milestone>
</template>

<script>
import { Milestone } from '@opentiny/vue'
import {
  iconShare,
  iconYes,
  iconDel,
  iconAscending,
  iconWriting
} from '@opentiny/vue-icon'

export default {
  components: {
    TinyMilestone: Milestone,
    IconShare: iconShare(),
    IconYes: iconYes(),
    IconDel: iconDel(),
    IconWriting: iconWriting(),
    IconAscending: iconAscending()
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
          icon: iconShare()
        },
        {
          name: '自定义数据2',
          time: '2018-9-8',
          status: 'completed',
          icon: iconYes()
        },
        {
          name: '自定义数据3',
          time: '2018-9-10',
          status: 'doing',
          content: null,
          icon: iconDel()
        },
        {
          name: '自定义数据4',
          time: '2018-9-9',
          status: 'cancel',
          icon: iconWriting()
        },
        {
          name: '自定义数据5',
          time: '2018-9-11',
          status: 'back',
          icon: iconAscending()
        },
        {
          name: '自定义数据6',
          time: '2018-9-9',
          status: 'end',
          icon: iconShare()
        }
      ]
    }
  }
}
</script>

<style>
.custom {
  background: rgb(245, 236, 236);
  width: 20px;
  height: 20px;
  line-height: 20px;
  position: relative;
  font-size: 12px;
  text-align: center;
  left: calc(50% - 10px);
  top: 4px;
  border-radius: 50%;
  color: #000;
  cursor: pointer;
  z-index: 15;
}
</style>
