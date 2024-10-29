<template>
  <tiny-currency v-model="value" placeholder="请选择" set-default></tiny-currency>
</template>

<script>
import { TinyCurrency } from '@opentiny/vue'

export default {
  components: {
    TinyCurrency
  },
  data() {
    return {
      value: ''
    }
  }
}
</script>
