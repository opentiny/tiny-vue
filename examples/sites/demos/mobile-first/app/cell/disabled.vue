<template>
  <div>
    <tiny-cell :data="data" disabled></tiny-cell>
  </div>
</template>

<script>
import { TinyCell } from '@opentiny/vue'

export default {
  components: {
    TinyCell
  },
  data() {
    return {
      data: '进行中'
    }
  }
}
</script>
