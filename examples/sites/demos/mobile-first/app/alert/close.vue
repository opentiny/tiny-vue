<template>
  <tiny-alert description="自定义的 close 事件" @close="close"></tiny-alert>
</template>

<script>
import { TinyAlert, TinyModal } from '@opentiny/vue'

export default {
  components: {
    TinyAlert
  },
  methods: {
    close() {
      TinyModal.message('关闭了')
    }
  }
}
</script>
