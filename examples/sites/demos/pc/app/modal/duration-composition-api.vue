<template>
  <div class="content">
    <tiny-button @click="baseClick" :reset-time="0">默认 3000ms 后自动关闭提示框</tiny-button>
    <tiny-button @click="successClick" :reset-time="0">500ms 后自动关闭提示框</tiny-button>
    <tiny-button @click="errorClick" :reset-time="0">5000ms 后自动关闭提示框</tiny-button>
    <tiny-button @click="warnClick" :reset-time="0">不自动关闭</tiny-button>
  </div>
</template>

<script setup>
import { Button as TinyButton, Modal } from '@opentiny/vue'

function baseClick() {
  Modal.message({ status: 'info', message: '默认 3000ms 后自动关闭提示框' })
}

function successClick() {
  Modal.message({
    status: 'success',
    message: '500ms 后自动关闭提示框',
    duration: '500'
  })
}

function errorClick() {
  Modal.message({
    status: 'error',
    message: '5000ms 后自动关闭提示框',
    duration: '5000'
  })
}

function warnClick() {
  Modal.message({
    status: 'warning',
    message: `不自动关闭提示框`,
    duration: '0',
    messageClosable: true
  })
}
</script>
