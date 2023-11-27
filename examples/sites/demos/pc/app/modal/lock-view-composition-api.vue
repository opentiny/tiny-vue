<template>
  <tiny-button @click="btnClick" :reset-time="0">不锁界面 且 隐藏遮罩层</tiny-button>
</template>

<script setup>
import { Button as TinyButton, Modal } from '@opentiny/vue'

function btnClick() {
  Modal.alert({
    message: '设置为不锁界面 且 隐藏遮罩层',
    lockView: false, // 设置不锁界面
    mask: false // 设置隐藏遮罩层
  })
}
</script>
