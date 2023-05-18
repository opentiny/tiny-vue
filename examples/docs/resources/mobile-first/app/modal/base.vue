<template>
  <div class="content">
    <tiny-button @click="successClick" :reset-time="0">成功提示框</tiny-button>
    <tiny-button @click="errorClick" :reset-time="0">失败提示框</tiny-button>
    <tiny-button @click="confirmClick" :reset-time="0">确认提示框</tiny-button>
    <tiny-button @click="warnningClick" :reset-time="0">警告提示框</tiny-button>
  </div>
</template>

<script>
import { Button, Modal } from '@opentiny/vue'

export default {
  components: {
    TinyButton: Button
  },
  methods: {
    successClick() {
      Modal.alert({
        message: '密码已经修改成功，为保障信息安全，建议每30天修改1次密码。',
        title: '成功提示',
        status: 'success'
      })
    },
    errorClick() {
      Modal.alert({ message: '共提交12张表单，成功10张，失败2张。', title: '未完成', status: 'error' })
    },
    confirmClick() {
      Modal.confirm({ message: '更新大约需要30分钟，确定立即开始吗？', title: '更新确认' })
    },
    warnningClick() {
      Modal.alert({ message: '删除后数据不可恢复，确定删除吗？', title: '删除确认', status: 'warning' })
    }
  }
}
</script>
