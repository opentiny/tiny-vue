<template>
  <div class="content">
    <tiny-button @click="infoClick" :reset-time="0">info类型</tiny-button>
    <tiny-button @click="successClick" :reset-time="0">success类型</tiny-button>
    <tiny-button @click="errorClick" :reset-time="0">error类型</tiny-button>
    <tiny-button @click="warningClick" :reset-time="0">warning类型</tiny-button>
  </div>
</template>

<script setup lang="jsx">
import { Notify, Button as TinyButton } from '@opentiny/vue'

function infoClick() {
  Notify({
    type: 'info',
    title: (h, params) => <h4>通知消息的标题</h4>,
    message: '通知消息的正文，通知消息的正文，通知消息的正文，通知消息的正文，通知消息的正文，通知消息的正文',
    position: 'top-right',
    duration: 500000,
    customClass: 'my-custom-cls'
  })
}

function successClick() {
  Notify({
    type: 'success',
    message: '通知消息的正文，通知消息的正文，通知消息的正文，通知消息的正文，通知消息的正文，通知消息的正文',
    position: 'top-right'
  })
}

function errorClick() {
  Notify({
    type: 'error',
    message: '通知消息的正文，通知消息的正文，通知消息的正文，通知消息的正文，通知消息的正文，通知消息的正文',
    position: 'top-right'
  })
}

function warningClick() {
  Notify({
    type: 'warning',
    message: '通知消息的正文，通知消息的正文，通知消息的正文，通知消息的正文，通知消息的正文，通知消息的正文',
    position: 'top-right'
  })
}
</script>
