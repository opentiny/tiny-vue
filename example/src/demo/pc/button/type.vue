<template>
  <div>
    <tiny-button>默认按钮</tiny-button>
    <tiny-button type="primary">主要按钮</tiny-button>
    <tiny-button type="success">成功按钮</tiny-button>
    <tiny-button type="info">信息按钮</tiny-button>
    <tiny-button type="warning">警告按钮</tiny-button>
    <tiny-button type="danger">危险按钮</tiny-button>
    <tiny-button type="text">文本按钮</tiny-button>
  </div>
</template>

<script>
import { Button } from '@opentiny/vue'

export default {
  components: {
    TinyButton: Button
  }
}
</script>
