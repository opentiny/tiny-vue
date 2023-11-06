<template>
  <div class="checkbox-demo">
    <tiny-checkbox v-model="checked" text="复选框1" true-label="真文本" false-label="假文本"></tiny-checkbox>
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
      checked: '假文本'
    }
  },
  methods: {
    getValue() {
      Modal.message({
        message: '当前状态对应的值为:' + this.checked,
        top: 200
      })
    }
  }
}
</script>

<style scoped>
.checkbox-demo {
  display: flex;
  gap: 10px;
}
</style>
