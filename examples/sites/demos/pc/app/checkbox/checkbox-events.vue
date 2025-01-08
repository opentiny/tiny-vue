<template>
  <tiny-checkbox-group v-model="checked" @change="valueChange">
    <tiny-checkbox-button label="复选框 1"></tiny-checkbox-button>
    <tiny-checkbox-button label="复选框 2"></tiny-checkbox-button>
  </tiny-checkbox-group>
</template>

<script>
import { TinyCheckboxButton, TinyCheckboxGroup, TinyModal } from '@opentiny/vue'

export default {
  components: {
    TinyCheckboxButton,
    TinyCheckboxGroup
  },
  data() {
    return {
      checked: ['复选框 1']
    }
  },
  methods: {
    valueChange(val) {
      TinyModal.message({ message: `change 事件触发了，选中值为：${val}`, status: 'info' })
    }
  }
}
</script>
