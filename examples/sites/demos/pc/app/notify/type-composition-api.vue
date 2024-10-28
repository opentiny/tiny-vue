<template>
  <div class="content">
    <tiny-button @click="infoClick" :reset-time="0">info 类型</tiny-button>
    <tiny-button @click="successClick" :reset-time="0">success 类型</tiny-button>
    <tiny-button @click="errorClick" :reset-time="0">error 类型</tiny-button>
    <tiny-button @click="warningClick" :reset-time="0">warning 类型</tiny-button>
  </div>
</template>

<script setup lang="jsx">
import { TinyNotify, TinyButton } from '@opentiny/vue'

function infoClick() {
  TinyNotify({
    type: 'info',
    title: '通知消息的标题',
    message: '通知消息的正文，通知消息的正文，通知消息的正文，通知消息的正文，通知消息的正文，通知消息的正文',
    position: 'top-right',
    customClass: 'my-custom-cls'
  })
}

function successClick() {
  TinyNotify({
    type: 'success',
    message: '通知消息的正文，通知消息的正文，通知消息的正文，通知消息的正文，通知消息的正文，通知消息的正文',
    position: 'top-right'
  })
}

function errorClick() {
  TinyNotify({
    type: 'error',
    message: '通知消息的正文，通知消息的正文，通知消息的正文，通知消息的正文，通知消息的正文，通知消息的正文',
    position: 'top-right'
  })
}

function warningClick() {
  TinyNotify({
    type: 'warning',
    message: '通知消息的正文，通知消息的正文，通知消息的正文，通知消息的正文，通知消息的正文，通知消息的正文',
    position: 'top-right'
  })
}
</script>
