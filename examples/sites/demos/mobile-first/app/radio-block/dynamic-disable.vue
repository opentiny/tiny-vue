<template>
  <div>
    <div style="margin-top: 20px">
      <tiny-radio-group v-model="radio2">
        <tiny-radio-button label="1">日度</tiny-radio-button>
        <tiny-radio-button disabled label="2">月度</tiny-radio-button>
        <tiny-radio-button label="3">年度</tiny-radio-button>
      </tiny-radio-group>
    </div>
    <div style="margin-top: 20px">
      <tiny-radio-group v-model="radio2" disabled>
        <tiny-radio-button label="1">日度</tiny-radio-button>
        <tiny-radio-button label="2">月度</tiny-radio-button>
        <tiny-radio-button label="3">年度</tiny-radio-button>
      </tiny-radio-group>
    </div>
  </div>
</template>

<script>
import { TinyRadioButton, TinyRadioGroup } from '@opentiny/vue'

export default {
  components: {
    TinyRadioButton,
    TinyRadioGroup
  },
  data() {
    return {
      radio: '禁用',
      radio1: '3',
      radio2: '1'
    }
  }
}
</script>
