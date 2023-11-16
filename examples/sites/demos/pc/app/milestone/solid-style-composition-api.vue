<template>
  <div>
    <tiny-button @click="handleClick(!isSolid)" style="max-width: cancel">设置solid值为{{ !isSolid }}</tiny-button>
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
    name: 'completed完成状态',
    time: '2018-9-7',
    status: 'completed'
  },
  {
    name: 'completed完成状态',
    time: '2018-9-8',
    status: 'completed'
  },
  {
    name: 'doing未完成状态',
    time: '2018-9-10',
    status: 'doing'
  },
  {
    name: 'xxx未完成状态',
    time: '2018-9-9',
    status: 'xxx'
  },
  {
    name: 'back未完成状态',
    time: '2018-9-11',
    status: 'back'
  },
  {
    name: 'end未完成状态',
    time: '2018-9-9',
    status: 'end'
  }
])

function handleClick(value) {
  isSolid.value = value
}
</script>
