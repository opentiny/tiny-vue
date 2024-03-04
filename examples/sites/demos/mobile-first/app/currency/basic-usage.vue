<template>
  <div>
    <tiny-button @click="choose">选择币种</tiny-button>
    <tiny-currency
      v-model="value"
      :visible="visible"
      @update:visible="visible = $event"
      placeholder="请选择"
      @change="change"
    ></tiny-currency>
    <p>当前选中值：{{ value }}</p>
  </div>
</template>

<script>
import { Currency, Modal, Button } from '@opentiny/vue'

export default {
  components: {
    TinyCurrency: Currency,
    TinyButton: Button
  },
  data() {
    return {
      visible: false,
      value: 'VUV'
    }
  },
  methods: {
    choose() {
      this.visible = true
    },
    change(value) {
      Modal.message({ message: `当前值为 ${value}`, status: 'info' })
    }
  }
}
</script>
