<template>
  <tiny-wizard
    :data="dataSet"
    page-guide
    @btn-prev="handlePrev"
    @btn-next="handleNext"
    @btn-save="handleSave"
    @btn-submit="handleSubmit"
  ></tiny-wizard>
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

const handlePrev = (datas) => {
  console.log('handlePrev：上一步，', datas)
}

const handleNext = (datas) => {
  console.log('handleNext：下一步，', datas)
}

const handleSave = (datas) => {
  console.log('handleSave：保存，', datas)
}

const handleSubmit = (datas) => {
  console.log('handleSubmit：提交，', datas)
}
</script>
