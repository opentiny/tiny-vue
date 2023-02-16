<template>
  <tiny-wizard :data="dataSet" vertical></tiny-wizard>
</template>

<script>
import { Wizard } from '@opentiny/vue'

export default {
  components: {
    TinyWizard: Wizard
  },
  data() {
    return {
      dataSet: [
        {
          name: '提交',
          status: 'ready',
          showNode: true,
          content: '提交'
        },
        {
          name: '直接主管审批',
          status: 'ready',
          showNode: true,
          content: '通过'
        },
        {
          name: '二级主管审批',
          status: 'ready',
          showNode: true,
          date: '2013-12-11 9:50',
          content: '同意'
        },
        {
          name: '一级审批',
          status: 'wait',
          showNode: true
        },
        {
          name: '完成',
          status: 'doing',
          showNode: true,
          content: '完成'
        }
      ]
    }
  }
}
</script>
