<template>
  <div>
    <tiny-qr-code v-bind="params" @change="change"></tiny-qr-code>
    <tiny-radio-group v-model="params.level" size="small">
      <tiny-radio-button label="Low">Low</tiny-radio-button>
      <tiny-radio-button label="Medium">Medium</tiny-radio-button>
      <tiny-radio-button label="Quality">Quality</tiny-radio-button>
      <tiny-radio-button label="High">High</tiny-radio-button>
    </tiny-radio-group>
  </div>
</template>

<script>
import { TinyQrCode, TinyRadio, TinyRadioButton, TinyRadioGroup } from '@opentiny/vue'

export default {
  components: {
    TinyQrCode,
    TinyRadio,
    TinyRadioButton,
    TinyRadioGroup
  },
  data() {
    return {
      params: {
        value: '测试二维码数据',
        size: 250,
        level: 'High'
      }
    }
  },
  methods: {
    change() {
      console.log('qrcode change')
    }
  }
}
</script>
