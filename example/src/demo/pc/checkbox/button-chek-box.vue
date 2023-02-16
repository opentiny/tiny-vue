<template>
  <div>
    <tiny-checkbox-button
      v-model="checked"
      text="复选框"
      true-label="真文本"
      false-label="假文本"
    ></tiny-checkbox-button>
    <button @click="getValue">获取文本</button>
  </div>
</template>

<script>
import { CheckboxButton, Modal } from '@opentiny/vue'

export default {
  components: {
    TinyCheckboxButton: CheckboxButton
  },
  data() {
    return {
      checked: ''
    }
  },
  methods: {
    getValue() {
      Modal.message({
        message: 'change 事件，当前选中的值为:' + this.checked,
        status: 'info'
      })
    }
  }
}
</script>
