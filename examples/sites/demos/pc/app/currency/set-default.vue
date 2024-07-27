<template>
  <tiny-currency v-model="value" placeholder="请选择" set-default></tiny-currency>
</template>

<script>
import { Currency } from '@opentiny/vue'

export default {
  components: {
    TinyCurrency: Currency
  },
  data() {
    return {
      value: ''
    }
  }
}
</script>
