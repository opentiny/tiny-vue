<template>
  <tiny-wizard :data="dataSet" @node-click="nodeClick"></tiny-wizard>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { Wizard as TinyWizard } from '@opentiny/vue'

const dataSet = ref([
  {
    name: '出差信息填写',
    status: 'ready'
  },
  {
    name: '项目信息填写',
    status: 'doing'
  },
  {
    name: '主管审批',
    status: 'wait'
  },
  {
    name: '权签人审批',
    status: 'wait'
  },
  {
    name: '完成申请',
    status: 'wait'
  }
])

const nodeClick = (node, index, event) => {
  console.log('nodeClick', node, index, event)
}
</script>
