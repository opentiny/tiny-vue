<template>
  <div class="content">
    <tiny-button @click="baseClick" :reset-time="0">默认3000ms后自动关闭提示框</tiny-button>
    <tiny-button @click="successClick" :reset-time="0">500ms后自动关闭提示框</tiny-button>
    <tiny-button @click="errorClick" :reset-time="0">5000ms后自动关闭提示框</tiny-button>
  </div>
</template>

<script setup>
import { Button as TinyButton, Modal } from '@opentiny/vue'

function baseClick() {
  Modal.message({ message: '默认3000ms后自动关闭提示框' })
}

function successClick() {
  Modal.message({
    message: '500ms后自动关闭提示框',
    duration: '500'
  })
}

function errorClick() {
  Modal.message({
    message: '5000ms后自动关闭提示框',
    duration: '5000'
  })
}
</script>
