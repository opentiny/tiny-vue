<template>
  <div>
    <tiny-button @click="Switchover" style="margin-bottom: 10px">启用/禁用</tiny-button>
    <br />
    <tiny-currency v-model="value" placeholder="请选择" @change="change" :disabled="disabled"></tiny-currency>
  </div>
</template>

<script lang="jsx">
import { Currency, Button, Modal } from '@opentiny/vue'

export default {
  components: {
    TinyCurrency: Currency,
    TinyButton: Button
  },
  data() {
    return {
      value: 'VUV',
      disabled: false
    }
  },
  methods: {
    change(val) {
      Modal.message({ message: '当前选择值：' + val, status: 'info' })
    },
    Switchover() {
      this.disabled = !this.disabled
    }
  }
}
</script>
