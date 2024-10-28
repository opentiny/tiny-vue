<template>
  <div>
    <h2>函数式调用</h2>
    <div class="content">
      <tiny-button @click="btnClick">弹窗遮罩层</tiny-button>
    </div>
    <h2>标签式调用</h2>
    <div class="content">
      <tiny-button @click="openModal">弹窗遮罩层</tiny-button>
      <tiny-modal
        v-model="show"
        type="confirm"
        title="自定义弹窗标题"
        message="窗口内容"
        show-header
        show-footer
        v-bind="options"
      >
      </tiny-modal>
    </div>
  </div>
</template>

<script setup>
import { Button as TinyButton, Modal } from '@opentiny/vue'
import { ref } from 'vue'

const TinyModal = Modal
const show = ref(false)
const options = ref({
  mask: true,
  maskClosable: true
})

function btnClick() {
  Modal.confirm({
    message: '窗口内容',
    title: '自定义弹窗标题',
    showHeader: true,
    showFooter: true,
    ...options.value
  })
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
