<template>
  <div>
    <tiny-button plain>朴素按钮</tiny-button>
    <tiny-button type="primary" plain>主要按钮</tiny-button>
    <tiny-button type="success" plain>成功按钮</tiny-button>
    <tiny-button type="info" plain>信息按钮</tiny-button>
    <tiny-button type="warning" plain>警告按钮</tiny-button>
    <tiny-button type="danger" plain>危险按钮</tiny-button>
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
