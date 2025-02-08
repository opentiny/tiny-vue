<template>
  <div class="content">
    <tiny-button @click="alertClick" :reset-time="0">alert 弹框</tiny-button>
    <tiny-button @click="messageClick" :reset-time="0">message 提示框</tiny-button>
    <tiny-button @click="confirmClick" :reset-time="0">confirm 确认提示框</tiny-button>
  </div>
</template>

<script setup lang="jsx">
import { TinyButton, TinyModal } from '@opentiny/vue-mobile'

function alertClick() {
  TinyModal.alert({ message: 'alert 弹框', title: '弹框', tiny_mode: 'mobile' })
}

function messageClick() {
  TinyModal.message({ message: 'message 提示框', title: '弹框', tiny_mode: 'mobile' })
}

function confirmClick() {
  TinyModal.confirm({ message: '您确定要删除吗？', title: '确定框', tiny_mode: 'mobile' }).then((res) => {})
}
</script>
