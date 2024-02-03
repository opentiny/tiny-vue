<template>
  <div>
    <tiny-button @click="btnClick1">方法调用</tiny-button>
    <tiny-button @click="btnClick2">组件形式使用</tiny-button>

    <tiny-modal
      v-model="showModal"
      type="confirm"
      show-footer
      :confirm-content="confirmContent2"
      :cancel-content="cancelContent2"
    >
      <div>设置确定按钮和取消按钮文本</div>
    </tiny-modal>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Button as TinyButton, Modal as TinyModal } from '@opentiny/vue'

const showModal = ref(false)
const confirmContent1 = ref('好的')
const cancelContent1 = ref('返回')
const confirmContent2 = ref('确定')
const cancelContent2 = ref('再想想')

function btnClick1() {
  TinyModal.confirm({
    message: '自定义确定按钮和取消按钮文本',
    confirmContent: confirmContent1.value,
    cancelContent: cancelContent1.value
  })
}

function btnClick2() {
  showModal.value = true
}
</script>
