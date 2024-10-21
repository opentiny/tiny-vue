<template>
  <div>
    <h2>函数式调用</h2>
    <div class="content">
      <tiny-button @click="btnClick">自定义弹窗标题</tiny-button>
    </div>
    <h2>标签式调用</h2>
    <div class="content">
      <tiny-button @click="openModal">自定义弹窗标题</tiny-button>
      <tiny-modal v-model="show" title="自定义弹窗标题" message="窗口内容" show-header show-footer> </tiny-modal>
    </div>
  </div>
</template>

<script setup>
import { Button as TinyButton, Modal } from '@opentiny/vue'
import { ref } from 'vue'

const TinyModal = Modal
const show = ref(false)

function btnClick() {
  Modal.alert({ message: '窗口内容', title: '自定义弹窗标题', showHeader: true, showFooter: true })
}

function openModal() {
  show.value = true
}
</script>

<style scoped>
h2 {
  font-size: 16px;
  font-weight: bold;
  margin: 20px 0 12px;
}
.content {
  margin: 8px;
}
</style>
