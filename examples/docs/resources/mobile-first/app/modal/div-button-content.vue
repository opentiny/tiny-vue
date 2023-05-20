<template>
  <div class="content">
    <tiny-button @click="baseClick" :reset-time="0">基本提示框</tiny-button>
    <tiny-button @click="successClick" :reset-time="0">成功提示框</tiny-button>
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
      Modal.alert({
        message: '基本提示框',
        title: '基本标题',
        confirmContent: '自定义确认',
        cancelContent: '自定义取消'
      })
    },
    successClick() {
      Modal.alert({
        message: '密码已经修改成功，为保障信息安全，建议每30天修改1次密码。',
        title: '成功提示',
        status: 'success'
      })
    }
  }
}
</script>
