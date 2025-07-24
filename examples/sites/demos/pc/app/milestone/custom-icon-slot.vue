<template>
  <div class="demo-milestone">
    <tiny-milestone :data="milestoneData" :milestones-status="statusMap">
      <template #icon="data">
        <component :is="data.slotScope.icon" class="custom-milestone"> </component>
      </template>
    </tiny-milestone>
  </div>
</template>

<script lang="jsx">
import { TinyMilestone } from '@opentiny/vue'
import { IconShare, IconYes, IconDel, IconAscending, IconWriting } from '@opentiny/vue-icon'

export default {
  components: {
    TinyMilestone,
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
          name: '自定义数据 1',
          time: '2018-9-7',
          status: 'completed',
          icon: IconShare()
        },
        {
          name: '自定义数据 2',
          time: '2018-9-8',
          status: 'completed',
          icon: IconYes()
        },
        {
          name: '自定义数据 3',
          time: '2018-9-10',
          status: 'doing',
          content: null,
          icon: IconDel()
        },
        {
          name: '自定义数据 4',
          time: '2018-9-9',
          status: 'cancel',
          icon: IconWriting()
        },
        {
          name: '自定义数据 5',
          time: '2018-9-11',
          status: 'back',
          icon: IconAscending()
        },
        {
          name: '自定义数据 6',
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
.custom-milestone {
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

<style scoped>
.demo-milestone ::v-deep .tiny-milestone__description-status {
  margin-top: 4px;
}
</style>
