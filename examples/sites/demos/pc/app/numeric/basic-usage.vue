<template>
  <tiny-numeric v-model="value" placeholder="请输入非空数值"></tiny-numeric>
</template>

<script lang="ts">
import { TinyNumeric } from '@opentiny/vue'

export default {
  components: {
    TinyNumeric
  },
  data() {
    return {
      value: 1
    }
  }
}
</script>
