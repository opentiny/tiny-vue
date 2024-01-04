<template>
  <tiny-checkbox-group v-model="checked" @change="valueChange">
    <tiny-checkbox-button label="复选框1"></tiny-checkbox-button>
    <tiny-checkbox-button label="复选框2"></tiny-checkbox-button>
  </tiny-checkbox-group>
</template>

<script>
import { CheckboxButton, CheckboxGroup, Modal } from '@opentiny/vue'

export default {
  components: {
    TinyCheckboxButton: CheckboxButton,
    TinyCheckboxGroup: CheckboxGroup
  },
  data() {
    return {
      checked: ['复选框1']
    }
  },
  methods: {
    valueChange(val) {
      Modal.message({ message: `change 事件触发了，选中值为：${val}`, status: 'info' })
    }
  }
}
</script>
