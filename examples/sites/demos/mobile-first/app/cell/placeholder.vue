<template>
  <div>
    <tiny-cell :data="data" placeholder="请选择日期"></tiny-cell>
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
      data: ''
    }
  }
}
</script>
