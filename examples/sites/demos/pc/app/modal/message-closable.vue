<template>
  <div class="content">
    <tiny-button @click="showModal" :reset-time="0">关闭按钮示例</tiny-button>
  </div>
</template>

<script>
import { Button, Modal } from '@opentiny/vue'

export default {
  components: {
    TinyButton: Button
  },
  methods: {
    showModal() {
      Modal.message({ message: '右侧显示关闭按钮', status: 'info', messageClosable: true })
    }
  }
}
</script>
