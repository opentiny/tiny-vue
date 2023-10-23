<template>
  <tiny-numeric v-model="value" @focus="Efocus" @blur="Eblur" @change="Echange"></tiny-numeric>
</template>

<script lang="jsx">
import { Numeric } from '@opentiny/vue'

export default {
  components: {
    TinyNumeric: Numeric
  },
  data() {
    return {
      value: 1
    }
  },
  methods: {
    Efocus() {
      console.log('focus事件')
    },
    Eblur() {
      console.log('blur事件')
    },
    Echange(newVal, oldVal) {
      console.log('新值：', newVal, '旧值', oldVal)
    }
  }
}
</script>
