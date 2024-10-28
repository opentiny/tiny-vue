<template>
  <tiny-amount v-model="value" @change="change" :date="date" placeholder="请输入值"></tiny-amount>
</template>

<script lang="jsx">
import { TinyAmount, TinyModal } from '@opentiny/vue'

export default {
  components: {
    TinyAmount
  },
  data() {
    return {
      value: 88.88,
      date: new Date()
    }
  },
  methods: {
    change(val) {
      TinyModal.message({
        message: `改变后的值：${JSON.stringify(val)}`,
        status: 'info'
      })
    }
  }
}
</script>
