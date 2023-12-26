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

<script lang="jsx">
import { Wizard, Modal } from '@opentiny/vue'

export default {
  components: {
    TinyWizard: Wizard
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
    handlePrev(datas) {
      Modal.message('btn-prev' + JSON.stringify(datas))
    },
    handleNext(datas) {
      Modal.message('btn-next' + JSON.stringify(datas))
    },
    handleSave(datas) {
      Modal.message('btn-save' + JSON.stringify(datas))
    },
    handleSubmit(datas) {
      Modal.message('btn-submit' + JSON.stringify(datas))
    }
  }
}
</script>
