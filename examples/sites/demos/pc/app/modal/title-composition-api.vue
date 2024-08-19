<template>
  <tiny-button @click="customClick" :reset-time="0">自定义标题</tiny-button>
  <tiny-button @click="noTitleClick" :reset-time="0">无标题</tiny-button>
</template>

<script setup>
import { Button as TinyButton, Modal } from '@opentiny/vue'

function customClick() {
  Modal.alert({ message: '自定义标题', title: '自定义标题' })
}

function noTitleClick() {
  Modal.alert({ message: '无标题', title: '' })
}
</script>
