<template>
  <div>
    <tiny-button @click="boxVisibility1 = true" type="info">宽度 30% 最大高度 200px</tiny-button>
    <tiny-button @click="boxVisibility2 = true">宽度 60%</tiny-button>
    <tiny-dialog-box v-model:visible="boxVisibility1" title="消息" width="30%" max-height="200px">
      <div>
        <tiny-radio-group>
          <tiny-radio :label="0">产品</tiny-radio>
        </tiny-radio-group>
      </div>
      <div>
        <tiny-radio-group>
          <tiny-radio :label="0">研发</tiny-radio>
        </tiny-radio-group>
      </div>
      <template #footer>
        <tiny-button type="primary" @click="boxVisibility1 = false">确 定</tiny-button>
      </template>
    </tiny-dialog-box>
    <tiny-dialog-box v-model:visible="boxVisibility2" title="消息" width="60%">
      <span>dialog-box 内容</span>
      <template #footer>
        <tiny-button type="primary" @click="boxVisibility2 = false">确 定</tiny-button>
      </template>
    </tiny-dialog-box>
  </div>
</template>

<script lang="jsx">
import { TinyButton, TinyDialogBox, TinyRadio, TinyRadioGroup } from '@opentiny/vue'

export default {
  components: {
    TinyButton,
    TinyDialogBox,
    TinyRadio,
    TinyRadioGroup
  },
  data() {
    return {
      boxVisibility1: false,
      boxVisibility2: false
    }
  }
}
</script>

<style scoped>
.mydialogBox {
  background: rgba(150, 137, 137, 0.8);
}
.demo-class {
  height: 300px;
}
</style>
