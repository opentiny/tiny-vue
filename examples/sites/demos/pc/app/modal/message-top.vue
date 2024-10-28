<template>
  <div>
    <div class="content">
      <tiny-button @click="btnClick">消息距离顶部500px</tiny-button>
    </div>
  </div>
</template>

<script>
import { Button, Modal } from '@opentiny/vue'

export default {
  components: {
    TinyButton: Button
  },
  methods: {
    btnClick() {
      Modal.message({
        status: 'info',
        message: '自定义消息的内容距离顶部500px',
        top: 500
      })
    }
  }
}
</script>

<style scoped>
.content {
  margin: 8px;
}
</style>
