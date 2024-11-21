<template>
  <div>
    <div style="margin-top: 20px">
      <tiny-radio-group v-model="radio" @change="change">
        <tiny-radio-button label="1">日度</tiny-radio-button>
        <tiny-radio-button label="2">月度</tiny-radio-button>
        <tiny-radio-button label="3">年度</tiny-radio-button>
      </tiny-radio-group>
    </div>
  </div>
</template>

<script>
import { TinyRadioButton, TinyRadioGroup, TinyModal } from '@opentiny/vue'

export default {
  components: {
    TinyRadioButton,
    TinyRadioGroup
  },
  data() {
    return {
      value: '1',
      radio: '1'
    }
  },
  methods: {
    change(label) {
      TinyModal.message({
        message: 'change 事件，选中的 Radio label 值为：' + label,
        status: 'info'
      })
    }
  }
}
</script>
