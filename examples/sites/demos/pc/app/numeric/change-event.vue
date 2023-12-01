<template>
  <tiny-numeric v-model="value" @change="onChange"></tiny-numeric>
</template>

<script lang="ts">
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
    onChange(newVal: number, oldVal: number) {
      Modal.message({
        message: '新值：' + newVal + '，旧值：' + oldVal,
        status: 'info'
      })
    }
  }
}
</script>
