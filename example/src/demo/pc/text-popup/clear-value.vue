<template>
  <div>
    <div>value 值：{{ value }}</div>
    <br />
    <tiny-button @click="click">点击清除</tiny-button>
    <tiny-text-popup v-model="value"></tiny-text-popup>
  </div>
</template>

<script>
import { TextPopup, Button } from '@opentiny/vue'

export default {
  components: {
    TinyTextPopup: TextPopup,
    TinyButton: Button
  },
  data() {
    return {
      value: ''
    }
  },
  methods: {
    click() {
      this.value = ''
    }
  }
}
</script>
