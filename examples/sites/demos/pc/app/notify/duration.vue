<template>
  <div class="content">
    <tiny-button @click="successClick" :reset-time="0">500ms后自动关闭提示框</tiny-button>
    <tiny-button @click="errorClick" :reset-time="0">5000ms后自动关闭提示框</tiny-button>
  </div>
</template>

<script lang="jsx">
import { Button, Notify } from '@opentiny/vue'

export default {
  components: {
    TinyButton: Button
  },
  methods: {
    successClick() {
      Notify({
        type: 'success',
        title: '通知消息的标题',
        message: '500ms 后自动关闭提示框',
        position: 'top-right',
        duration: 500
      })
    },
    errorClick() {
      Notify({
        type: 'error',
        title: '通知消息的标题',
        message: '5000ms 后自动关闭提示框',
        position: 'top-right',
        duration: 5000
      })
    }
  }
}
</script>
