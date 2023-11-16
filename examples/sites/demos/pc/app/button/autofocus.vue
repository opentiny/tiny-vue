<template>
  <div>
    <tiny-button>默认按钮</tiny-button>
    <tiny-button autofocus>默认聚焦</tiny-button>
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
