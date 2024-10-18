<template>
  <div>
    <h2>需要为body添加滚动条之后，再验证锁定功能</h2>
    <div class="content">
      <tiny-button @click="addBodyScroll">添加滚动条</tiny-button>
      <tiny-button @click="removeBodyScroll">还原滚动条</tiny-button>
    </div>
    <h2>函数式调用</h2>
    <div class="content">
      <tiny-button @click="btnClick('scroll')">仅锁定滚动条</tiny-button>
      <tiny-button @click="btnClick('view')">仅锁定住页面</tiny-button>
    </div>
    <h2>标签式调用</h2>
    <div class="content">
      <tiny-button @click="openModal('scroll')">仅锁定滚动条</tiny-button>
      <tiny-button @click="openModal('view')">仅锁定住页面</tiny-button>
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
  lockScroll: false,
  lockView: false
})
function addBodyScroll() {
  document.body.style.height = '200vh'
  document.body.classList.remove('of-hidden')
}
function removeBodyScroll() {
  document.body.style.height = '100vh'
  document.body.classList.add('of-hidden')
}
function btnClick() {
  options.value.lockScroll = lockType === 'scroll'
  options.value.lockView = lockType === 'view'

  Modal.confirm({
    message: '窗口内容',
    title: '自定义弹窗标题',
    showHeader: true,
    showFooter: true,
    ...options.value
  })
}

function openModal() {
  options.value.lockScroll = lockType === 'scroll'
  options.value.lockView = lockType === 'view'
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
