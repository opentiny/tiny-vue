<template>
  <div class="demo-checkbox-group">
    <tiny-checkbox-group v-model="checked" fill="#409EFF">
      <tiny-checkbox-button label="复选框1" checked true-label="真文本" false-label="假文本"></tiny-checkbox-button>
    </tiny-checkbox-group>
    <tiny-button class="btn" @click="getValue">获取文本</tiny-button>
  </div>
</template>

<script>
import { CheckboxButton, CheckboxGroup, Modal, Button } from '@opentiny/vue'

export default {
  components: {
    TinyCheckboxButton: CheckboxButton,
    TinyCheckboxGroup: CheckboxGroup,
    TinyButton: Button
  },
  data() {
    return {
      checked: '假文本'
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
