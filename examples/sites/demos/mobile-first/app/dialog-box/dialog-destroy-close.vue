<template>
  <div style="height: 330px">
    <div>
      <tiny-radio v-model="value" :label="true">关闭时销毁</tiny-radio>
      <tiny-radio v-model="value" :label="false">关闭时不销毁</tiny-radio>
    </div>
    <br />
    <tiny-button @click="boxVisibility = true">打开弹框</tiny-button>
    <tiny-dialog-box
      :visible="boxVisibility"
      v-if="boxVisibility"
      :modal-append-to-body="false"
      @update:visible="boxVisibility = $event"
      :destroy-on-close="value"
    >
      <span>dialog-box内容</span>
      <template #footer>
        <tiny-button type="primary" @click="boxVisibility = false"> 确定 </tiny-button>
      </template>
    </tiny-dialog-box>
  </div>
</template>

<script>
import { Button, DialogBox, Radio } from '@opentiny/vue'

export default {
  components: {
    TinyButton: Button,
    TinyDialogBox: DialogBox,
    TinyRadio: Radio
  },
  data() {
    return {
      value: true,
      boxVisibility: false
    }
  }
}
</script>
