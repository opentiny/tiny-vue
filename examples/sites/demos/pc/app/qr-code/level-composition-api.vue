<template>
  <tiny-qr-code v-bind="params" @change="change"></tiny-qr-code>
  <tiny-radio-group v-model="params.level" size="small">
    <tiny-radio-button label="Low">Low</tiny-radio-button>
    <tiny-radio-button label="Medium">Medium</tiny-radio-button>
    <tiny-radio-button label="Quality">Quality</tiny-radio-button>
    <tiny-radio-button label="High">High</tiny-radio-button>
  </tiny-radio-group>
</template>

<script setup>
import {
  QrCode as TinyQrCode,
  Radio as TinyRadio,
  RadioButton as TinyRadioButton,
  RadioGroup as TinyRadioGroup
} from '@opentiny/vue'

const params = {
  value: '测试二维码数据',
  size: 250,
  level: 'High'
}

function change() {
  console.log('qrcode change')
}
</script>
