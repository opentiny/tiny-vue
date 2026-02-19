<template>
  <div>
    <tiny-button @click="boxVisibility = true" title="弹出 Dialog">弹出 Dialog（复现 ColorPicker 定位 Bug）</tiny-button>
    <tiny-dialog-box 
      v-model:visible="boxVisibility" 
      title="ColorPicker 定位 Bug 复现" 
      width="500px"
      :dialog-class="'dialog-box-with-limited-height'"
      append-to-body
    >
      <div class="dialog-content">
      <p>测试</p>
      <p>测试</p>
      <p>测试</p>
      <p>测试</p>
      <p>测试</p>
      <p>测试</p>
        <div class="color-picker-wrapper">
          <label>选择颜色：</label>
          <tiny-color-picker v-model="color" placement="bottom"/>
        </div>
      </div>
    </tiny-dialog-box>
  </div>
</template>
 
<script>
import { TinyButton, TinyDialogBox, TinyColorPicker } from '@opentiny/vue'
 
export default {
  components: {
    TinyButton,
    TinyDialogBox,
    TinyColorPicker
  },
  data() {
    return {
      boxVisibility: false,
      color: '#66ccff'
    }
  }
}
</script>
 
<style scoped>
.dialog-content {
  padding: 10px 0;
}
 
.dialog-content p {
  margin: 15px 0;
}
 
.color-picker-wrapper {
  margin-top: 20px;
  display: flex;
  align-items: center;
  gap: 10px;
}
 
.hint {
  margin-top: 20px;
  color: #ff6600;
  font-size: 12px;
  line-height: 1.5;
}

</style>
