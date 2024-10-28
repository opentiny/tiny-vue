<template>
  <div>
    <h2>函数式调用</h2>
    <div class="content">
      <tiny-button @click="btnClick">自定义弹窗底部</tiny-button>
    </div>
    <h2>标签式调用</h2>
    <div class="content">
      <tiny-button @click="openModal">自定义弹窗底部</tiny-button>
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
    <h2>#foot 插槽</h2>
    <div class="content">
      <tiny-button @click="openModal_1">自定义弹窗底部</tiny-button>
      <tiny-modal v-model="show1" type="confirm" title="自定义弹窗标题" message="窗口内容" show-header show-footer>
        <template #footer>
          <tiny-link type="primary">返回</tiny-link>
          <tiny-link style="margin-left: 12px">保存</tiny-link>
        </template>
      </tiny-modal>
    </div>
  </div>
</template>

<script setup>
import { Button as TinyButton, Modal, Link as TinyLink } from '@opentiny/vue'
import { ref } from 'vue'

const TinyModal = Modal
const show = ref(false)
const show1 = ref(false)
const options = ref({
  confirmContent: 'Okk~~',
  cancelContent: 'No thanks!',
  confirmBtnProps: { type: 'info' },
  cancelBtnProps: { type: 'success' },
  footerDragable: true
})

function btnClick() {
  Modal.confirm({ message: '窗口内容', title: '自定义弹窗标题', showHeader: true, showFooter: true, ...options.value })
}
function openModal() {
  show.value = true
}
function openModal_1() {
  show1.value = true
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
