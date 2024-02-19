<template>
  <div class="content">
    <tiny-button @click="baseClick" :reset-time="0">默认4500 ms后自动关闭提示框</tiny-button>
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
    baseClick() {
      Notify({
        type: 'info',
        title: (h, params) => <h4>通知消息的标题</h4>,
        message: '默认4500 ms后自动关闭提示框',
        position: 'top-right'
      })
    },
    successClick() {
      Notify({
        type: 'success',
        title: (h, params) => <h4>通知消息的标题</h4>,
        message: '500ms后自动关闭提示框',
        position: 'top-right',
        duration: 500
      })
    },
    errorClick() {
      Notify({
        type: 'error',
        title: (h, params) => <h4>通知消息的标题</h4>,
        message: '5000ms后自动关闭提示框',
        position: 'top-right',
        duration: 5000
      })
    }
  }
}
</script>
