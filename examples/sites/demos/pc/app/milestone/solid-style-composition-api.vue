<template>
  <div>
    <tiny-button @click="handleClick(!isSolid)" style="max-width: cancel">设置 solid 值为 {{ !isSolid }}</tiny-button>
    <tiny-milestone :data="milestoneData" :milestones-status="statusMap" :solid="isSolid"></tiny-milestone>
  </div>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { Milestone as TinyMilestone, Button as TinyButton } from '@opentiny/vue'

const isSolid = ref(false)
const statusMap = ref({
  completed: 'var(--ti-common-color-line-active)',
  doing: '#7ED321',
  back: '#f5222d',
  end: '#faad14',
  xxx: '#d9d9d9'
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
])

function handleClick(value) {
  isSolid.value = value
}
</script>
