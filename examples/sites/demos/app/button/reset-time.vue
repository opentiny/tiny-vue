<template>
  <div>
    <tiny-button>默认禁用</tiny-button>
    <tiny-button :reset-time="0">无禁用</tiny-button>
    <tiny-button :reset-time="5000">禁用 5 秒</tiny-button>
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
