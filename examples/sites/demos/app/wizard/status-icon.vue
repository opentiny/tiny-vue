<template>
  <tiny-wizard :data="dataSet" :status-icon="IconMarkOn"></tiny-wizard>
</template>

<script lang="jsx">
import { Wizard } from '@opentiny/vue'
import { IconMarkOn } from '@opentiny/vue-icon'

export default {
  components: {
    TinyWizard: Wizard
  },
  data() {
    return {
      IconMarkOn: IconMarkOn(),
      dataSet: [
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
      ]
    }
  }
}
</script>
