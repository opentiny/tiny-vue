<template>
  <div class="content">
    <tiny-button @click="infoClick" :reset-time="0">info 类型</tiny-button>
    <tiny-button @click="successClick" :reset-time="0">success 类型</tiny-button>
    <tiny-button @click="errorClick" :reset-time="0">error 类型</tiny-button>
    <tiny-button @click="warningClick" :reset-time="0">warning 类型</tiny-button>
  </div>
</template>

<script lang="jsx">
import { Notify, Button } from '@opentiny/vue'

export default {
  components: {
    TinyButton: Button
  },
  methods: {
    infoClick() {
      Notify({
        type: 'info',
        title: '通知消息的标题',
        message: '通知消息的正文，通知消息的正文，通知消息的正文，通知消息的正文，通知消息的正文，通知消息的正文',
        position: 'top-right',
        customClass: 'my-custom-cls'
      })
    },
    successClick() {
      Notify({
        type: 'success',
        message: '通知消息的正文，通知消息的正文，通知消息的正文，通知消息的正文，通知消息的正文，通知消息的正文',
        position: 'top-right'
      })
    },
    errorClick() {
      Notify({
        type: 'error',
        message: '通知消息的正文，通知消息的正文，通知消息的正文，通知消息的正文，通知消息的正文，通知消息的正文',
        position: 'top-right'
      })
    },
    warningClick() {
      Notify({
        type: 'warning',
        message: '通知消息的正文，通知消息的正文，通知消息的正文，通知消息的正文，通知消息的正文，通知消息的正文',
        position: 'top-right'
      })
    }
  }
}
</script>
