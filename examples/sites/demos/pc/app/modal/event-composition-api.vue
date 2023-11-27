<template>
  <div class="content">
    <tiny-button @click="value1 = !value1" :reset-time="0">显示、关闭事件</tiny-button>
    <tiny-button @click="value2 = !value2" :reset-time="0">确认、取消事件</tiny-button>
    <tiny-button @click="value3 = !value3" :reset-time="0">关闭点击事件</tiny-button>
    <tiny-button @click="value4 = !value4" :reset-time="0">缩放事件</tiny-button>

    <tiny-modal v-model="value1" type="confirm" show-footer @show="handleShow" @hide="handleHide">
      <p>显示、关闭事件</p>
    </tiny-modal>
    <tiny-modal v-model="value2" type="confirm" show-footer @confirm="handleConfirm" @cancel="handleCancel">
      <p>确认、取消事件</p>
    </tiny-modal>
    <tiny-modal v-model="value3" type="confirm" show-footer @close="handleClose">
      <p>关闭点击事件</p>
    </tiny-modal>
    <tiny-modal v-model="value4" type="confirm" show-footer resize @zoom="handleZoom">
      <p>缩放事件</p>
    </tiny-modal>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Button as TinyButton, Modal as TinyModal } from '@opentiny/vue'

const value1 = ref(false)
const value2 = ref(false)
const value3 = ref(false)
const value4 = ref(false)

function handleShow() {
  TinyModal.message({ message: 'show 事件触发了' })
}

function handleHide() {
  TinyModal.message({ message: 'hide 事件触发了' })
}

function handleConfirm() {
  TinyModal.message({ message: 'confirm 事件触发了' })
}

function handleCancel() {
  TinyModal.message({ message: 'cancel 事件触发了' })
}

function handleClose() {
  TinyModal.message({ message: 'close 事件触发了' })
}

function handleZoom() {
  TinyModal.message({ message: 'zoom 事件触发了' })
}
</script>
