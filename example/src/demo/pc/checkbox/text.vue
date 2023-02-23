<template>
  <div>
    <tiny-checkbox v-model="checked" text="复选框" true-label="真文本" false-label="假文本"></tiny-checkbox>
    <tiny-button @click="getValue">获取文本</tiny-button>
  </div>
</template>

<script>
import { Checkbox, Modal, Button } from '@opentiny/vue'

export default {
  components: {
    TinyCheckbox: Checkbox,
    TinyButton: Button
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
