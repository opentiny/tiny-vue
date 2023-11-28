<template>
  <tiny-wizard :data="dataSet" page-guide>
    <template #base="data">
      <div>{{ data.slotScope.name }}</div>
    </template>
  </tiny-wizard>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { Wizard as TinyWizard, Modal } from '@opentiny/vue'

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
</script>
