<template>
  <tiny-layout>
    <tiny-row>
      <tiny-button @click="disabled = !disabled">
        {{ disabled ? '点击启用按钮' : '点击禁用按钮' }}
      </tiny-button>
    </tiny-row>
    <tiny-row>
      <tiny-button :disabled="disabled">
        默认按钮
      </tiny-button>
      <tiny-button type="primary" :disabled="disabled">
        主要按钮
      </tiny-button>
      <tiny-button type="success" :disabled="disabled">
        成功按钮
      </tiny-button>
      <tiny-button type="info" :disabled="disabled">
        信息按钮
      </tiny-button>
      <tiny-button type="warning" :disabled="disabled">
        警告按钮
      </tiny-button>
      <tiny-button type="danger" :disabled="disabled">
        危险按钮
      </tiny-button>
    </tiny-row>
  </tiny-layout>
</template>

<script>
import { Button, Layout, Row } from '@opentiny/vue'

export default {
  components: {
    TinyButton: Button,
    TinyLayout: Layout,
    TinyRow: Row
  },
  data() {
    return {
      disabled: false
    }
  }
}
</script>

<style scoped>
button {
  margin: 0 16px 16px 0;
}
</style>
