<template>
  <div class="content">
    <tiny-button @click="baseClick" :reset-time="0">基本提示框</tiny-button>
    <tiny-button @click="successClick" :reset-time="0">成功提示框</tiny-button>
    <tiny-button @click="errorClick" :reset-time="0">失败提示框</tiny-button>
    <tiny-button @click="confirmClick" :reset-time="0">确认提示框</tiny-button>
  </div>
</template>

<script>
import { Button, Modal } from '@opentiny/vue'

export default {
  components: {
    TinyButton: Button
  },
  methods: {
    baseClick() {
      Modal.alert('基本提示框', '标题')
    },
    successClick() {
      Modal.alert({ message: '成功提示框', status: 'success' })
    },
    errorClick() {
      Modal.alert({ message: '失败提示框', title: '错误提示', status: 'error' })
    },
    confirmClick() {
      Modal.confirm('您确定要删除吗？')
    }
  }
}
</script>
