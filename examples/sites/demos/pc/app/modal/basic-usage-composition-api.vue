<template>
  <div class="content">
    <tiny-button @click="baseClick" :reset-time="0"> 基本提示框 </tiny-button>
    <tiny-button @click="successClick" :reset-time="0"> 成功提示框 </tiny-button>
    <tiny-button @click="errorClick" :reset-time="0"> 失败提示框 </tiny-button>
    <tiny-button @click="confirmClick" :reset-time="0"> 确认提示框 </tiny-button>
    <tiny-button @click="jsxClick" :reset-time="0"> 支持传入 jsx 提示框 </tiny-button>
  </div>
</template>

<script setup lang="jsx">
import { Button as TinyButton, Modal, Notify } from '@opentiny/vue'

function baseClick() {
  const modal = Modal.alert('基本提示框', '标题')
  setTimeout(() => modal.vm.close(), 3000)
}

function successClick() {
  Modal.alert({ message: '成功提示框', status: 'success' })
}

function errorClick() {
  Modal.alert({ message: '失败提示框', title: '错误提示', status: 'error' })
}

function confirmClick() {
  Modal.confirm('您确定要删除吗？').then((res) => {
    Notify({
      type: 'info',
      title: '触发回调事件',
      message: `点击${res}按钮`
    })
  })
}
function jsxClick() {
  Modal.alert({
    message: (
      <div>
        <button> some button </button>
        <b> some text </b>
      </div>
    ),
    status: 'success'
  })
}
</script>
