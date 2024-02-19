<template>
  <tiny-wizard :data="dataSet" page-guide>
    <template #stepbutton>
      <tiny-button @click="btnClick(1)">第一步</tiny-button>
      <tiny-button @click="btnClick(2)">第二步</tiny-button>
      <tiny-button @click="btnClick(3)">第三步</tiny-button>
    </template>
  </tiny-wizard>
</template>

<script lang="jsx">
import { Wizard, Button, Modal } from '@opentiny/vue'

export default {
  components: {
    TinyWizard: Wizard,
    TinyButton: Button
  },
  data() {
    return {
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
  },
  methods: {
    btnClick(arg) {
      Modal.message(`步骤${arg}`)
    }
  }
}
</script>
