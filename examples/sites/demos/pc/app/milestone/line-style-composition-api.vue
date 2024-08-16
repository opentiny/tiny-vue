<template>
  <div class="demo-milestone">
    <tiny-milestone
      :data="milestoneData"
      :milestones-status="statusMap"
      line-style="#f00"
      :space="150"
    ></tiny-milestone>
  </div>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { Milestone as TinyMilestone } from '@opentiny/vue'

const statusMap = ref({
  completed: 'var(--ti-common-color-line-active)',
  doing: '#7ED321',
  back: '#f5222d',
  end: '#faad14',
  cancel: '#d9d9d9'
})
const milestoneData = ref([
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
    name: 'cancel 未完成状态',
    time: '2018-9-9',
    status: 'cancel'
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
])
</script>

<style scoped>
.demo-milestone ::v-deep .tiny-milestone__description-status {
  margin-top: 4px;
}
</style>
