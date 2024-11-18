<template>
  <tiny-numeric v-model="value" @change="Echange"></tiny-numeric>
</template>

<script>
import { TinyNumeric, TinyModal } from '@opentiny/vue'

export default {
  components: {
    TinyNumeric
  },
  data() {
    return {
      value: 1
    }
  },
  methods: {
    Echange(newVal, oldVal) {
      TinyModal.message({
        message: '新值：' + newVal + '，旧值：' + oldVal,
        status: 'info'
      })
    }
  }
}
</script>
