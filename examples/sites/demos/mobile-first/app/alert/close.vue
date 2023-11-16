<template>
  <tiny-alert description="自定义的 close 事件" @close="close"></tiny-alert>
</template>

<script>
import { Alert, Modal } from '@opentiny/vue'

export default {
  components: {
    TinyAlert: Alert
  },
  methods: {
    close() {
      Modal.message('关闭了')
    }
  }
}
</script>
