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

<script lang="jsx">
import { Button, Modal } from '@opentiny/vue'

export default {
  components: {
    TinyButton: Button,
    TinyModal: Modal
  },
  data() {
    return {
      value1: false,
      value2: false,
      value3: false,
      value4: false
    }
  },
  methods: {
    handleShow() {
      Modal.message({ status: 'info', message: 'show 事件触发了' })
    },
    handleHide() {
      Modal.message({ status: 'info', message: 'hide 事件触发了' })
    },
    handleConfirm() {
      Modal.message({ status: 'info', message: 'confirm 事件触发了' })
    },
    handleCancel() {
      Modal.message({ status: 'info', message: 'cancel 事件触发了' })
    },
    handleClose() {
      Modal.message({ status: 'info', message: 'close 事件触发了' })
    },
    handleZoom() {
      Modal.message({ status: 'info', message: 'zoom 事件触发了' })
    }
  }
}
</script>
