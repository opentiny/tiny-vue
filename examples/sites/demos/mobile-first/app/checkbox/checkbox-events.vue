<template>
  <tiny-checkbox-group v-model="checked" @change="valueChange">
    <tiny-checkbox label="复选框1"></tiny-checkbox>
    <tiny-checkbox label="复选框2"></tiny-checkbox>
  </tiny-checkbox-group>
</template>

<script>
import { TinyCheckbox, TinyCheckboxGroup, TinyModal } from '@opentiny/vue'

export default {
  components: {
    TinyCheckbox,
    TinyCheckboxGroup
  },
  data() {
    return {
      checked: ['复选框1']
    }
  },
  methods: {
    valueChange(val) {
      TinyModal.message({ message: `change 事件触发了，选中值为：${val}`, status: 'info' })
    }
  }
}
</script>
