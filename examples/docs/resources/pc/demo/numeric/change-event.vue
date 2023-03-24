<template>
  <tiny-numeric v-model="value" @change="Echange"></tiny-numeric>
</template>

<script lang="jsx">
import { Numeric, Modal } from '@opentiny/vue'

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
    Echange(newVal, oldVal) {
      Modal.message({
        message: '新值：' + newVal + '，旧值：' + oldVal,
        status: 'info'
      })
    }
  }
}
</script>
