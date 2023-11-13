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
import { Wizard } from '@opentiny/vue'

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
      console.log('handlePrev：上一步，', datas)
    },
    handleNext(datas) {
      console.log('handleNext：下一步，', datas)
    },
    handleSave(datas) {
      console.log('handleSave：保存，', datas)
    },
    handleSubmit(datas) {
      console.log('handleSubmit：提交，', datas)
    }
  }
}
</script>
