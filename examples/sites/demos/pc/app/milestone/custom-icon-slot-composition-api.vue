<template>
  <div class="demo-milestone">
    <tiny-milestone :data="milestoneData" :milestones-status="statusMap">
      <template #icon="data">
        <component :is="data.slotScope.icon" class="custom"> </component>
      </template>
    </tiny-milestone>
  </div>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { Milestone as TinyMilestone } from '@opentiny/vue'
import { iconShare, iconYes, iconDel, iconAscending, iconWriting } from '@opentiny/vue-icon'

// 里程碑样式
const statusMap = ref({
  completed: '#5938b9',
  doing: '#7ED321',
  back: '#f5222d',
  end: '#faad14',
  cancel: '#d9d9d9'
})
// 数据源
const milestoneData = ref([
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
])
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

<style scoped>
.demo-milestone ::v-deep .tiny-milestone__description-status {
  margin-top: 4px;
}
</style>
