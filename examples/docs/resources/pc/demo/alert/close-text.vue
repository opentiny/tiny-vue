<template>
  <div>
    <tiny-alert description="默认关闭按钮"></tiny-alert>
    <tiny-alert description="关闭按钮自定义文本" close-text="关闭" @close="close"></tiny-alert>
  </div>
</template>

<script lang="jsx">
import { Alert } from '@opentiny/vue'
import { alert } from '@opentiny/vue-modal'

export default {
  components: {
    TinyAlert: Alert
  },
  methods: {
    close() {
      alert('关闭了')
    }
  }
}
</script>
