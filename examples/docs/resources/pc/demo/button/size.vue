<template>
  <div>
    <tiny-button>默认按钮</tiny-button>
    <tiny-button size="large">超大按钮</tiny-button>
    <tiny-button size="medium">中等按钮</tiny-button>
    <tiny-button size="small">小型按钮</tiny-button>
    <tiny-button size="mini">超小按钮</tiny-button>
  </div>
</template>

<script lang="jsx">
import { Button } from '@opentiny/vue'

export default {
  components: {
    TinyButton: Button
  }
}
</script>
