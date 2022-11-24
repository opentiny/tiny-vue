<template>
  <div class="content">
    <tiny-button @click="value1 = !value1" :reset-time="0"
      >在窗口关闭时会触发事件</tiny-button
    >
    <tiny-modal v-model="value1" type="confirm" show-footer @hide="hideClick">
      <template #default>
        <p>test</p>
      </template>
    </tiny-modal>
  </div>
</template>

<script>
import { Button, Modal } from '@opentiny/vue'

export default {
  components: {
    TinyButton: Button,
    TinyModal: Modal
  },
  data() {
    return {
      value1: false
    }
  },
  methods: {
    hideClick() {
      Modal.message({ message: '在窗口关闭时会触发事件' })
    }
  }
}
</script>
