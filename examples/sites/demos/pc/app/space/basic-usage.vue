<template>
  <tiny-space :size="16">
    <tiny-button type="primary">按钮1</tiny-button>
    <tiny-button type="success">按钮2</tiny-button>
    <tiny-button type="danger">按钮3</tiny-button>
  </tiny-space>
</template>

<script>
import { TinyButton, TinySpace } from '@opentiny/vue'

export default {
  components: {
    TinySpace,
    TinyButton
  }
}
</script>
