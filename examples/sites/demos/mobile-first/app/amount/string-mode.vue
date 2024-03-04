<template>
  <div>
    <div>
      {{ value }}
      <tiny-amount v-model="value" :max-len="40" string-mode></tiny-amount>
    </div>
    <br />

    <div>
      负值高精度： {{ value1 }}
      <tiny-amount v-model="value1" :max-len="40" string-mode></tiny-amount>
    </div>
    <br />
    <div>
      通过negative设置不支持负值： {{ value2 }}
      <tiny-amount :negative="false" v-model="value2" :max-len="40" string-mode></tiny-amount>
    </div>
  </div>
</template>

<script>
import { Amount } from '@opentiny/vue'

export default {
  components: {
    TinyAmount: Amount
  },
  data() {
    return {
      value: '123456789123456789123456789.22',
      value1: '-123456789123456789123456789.22',
      value2: '-123456789123456789123456789.22'
    }
  }
}
</script>
