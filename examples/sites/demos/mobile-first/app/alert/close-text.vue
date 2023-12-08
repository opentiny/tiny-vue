<template>
  <div>
    <tiny-alert description="默认关闭按钮"></tiny-alert>
    <tiny-alert description="关闭按钮自定义文本" close-text="关闭" @close="close"></tiny-alert>
  </div>
</template>

<script>
import { Alert, Modal } from '@opentiny/vue'

export default {
  components: {
    TinyAlert: Alert
  },
  methods: {
    close() {
      Modal('关闭了')
    }
  }
}
</script>
