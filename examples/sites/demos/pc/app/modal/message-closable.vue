<template>
  <div class="content">
    <tiny-button @click="showModal" :reset-time="0">关闭按钮示例</tiny-button>
  </div>
</template>

<script>
import { TinyButton, TinyModal, TinyNotify } from '@opentiny/vue'

export default {
  components: {
    TinyButton
  },
  methods: {
    showModal() {
      TinyModal.message({
        message: '右侧显示关闭按钮',
        status: 'info',
        messageClosable: true,
        events: {
          hide: () => {
            TinyNotify({
              type: 'info',
              title: '触发hide回调事件',
              position: 'top-right'
            })
          },
          close: () => {
            TinyNotify({
              type: 'info',
              title: '触发close回调事件',
              position: 'top-right'
            })
          }
        }
      })
    }
  }
}
</script>
