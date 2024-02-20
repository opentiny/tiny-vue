<template>
  <tiny-amount v-model="value" @change="change" :date="date" placeholder="请输入值"></tiny-amount>
</template>

<script>
import { Amount, Modal } from '@opentiny/vue'

export default {
  components: {
    TinyAmount: Amount
  },
  data() {
    return {
      value: 88.88,
      date: new Date()
    }
  },
  methods: {
    change(val) {
      Modal.message({
        message: `改变后的值：${JSON.stringify(val)}`,
        status: 'info'
      })
    }
  }
}
</script>
