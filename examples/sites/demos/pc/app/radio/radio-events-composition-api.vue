<template>
  <div>
    <tiny-radio v-model="value" label="1" @change="change">选项一</tiny-radio>
    <tiny-radio v-model="value" label="2" @change="change">选项二</tiny-radio>
    <div style="margin-top: 20px">
      <tiny-radio-group v-model="radio" @change="change">
        <tiny-radio-button label="1">日度</tiny-radio-button>
        <tiny-radio-button label="2">月度</tiny-radio-button>
        <tiny-radio-button label="3">年度</tiny-radio-button>
      </tiny-radio-group>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Radio as TinyRadio, RadioButton as TinyRadioButton, RadioGroup as TinyRadioGroup, Modal } from '@opentiny/vue'

const value = ref('1')
const radio = ref('1')

function change(label) {
  Modal.message({
    message: 'change 事件，选中的 Radio label 值为：' + label,
    status: 'info'
  })
}
</script>
