<template>
  <div>
    <tiny-button @click="btnClick1">方法调用</tiny-button>
    <tiny-button @click="btnClick2">组件形式使用</tiny-button>

    <tiny-modal
      v-model="showModal"
      type="confirm"
      show-footer
      :confirm-btn-props="confirmBtnProps2"
      :cancel-btn-props="cancelBtnProps2"
    >
      <div>自定义确定按钮和取消按钮Props</div>
    </tiny-modal>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Button as TinyButton, Modal as TinyModal } from '@opentiny/vue'

const showModal = ref(false)
const confirmBtnProps1 = ref({ disabled: true, text: 'OK' })
const cancelBtnProps1 = ref({ plain: true, text: '返回' })
const confirmBtnProps2 = ref({ autoFocus: true })
const cancelBtnProps2 = ref({ type: 'warning' })

function btnClick1() {
  TinyModal.confirm({
    message: '自定义确定按钮和取消按钮props',
    confirmBtnProps: confirmBtnProps1.value,
    cancelBtnProps: cancelBtnProps1.value
  })
}

function btnClick2() {
  showModal.value = true
}
</script>
