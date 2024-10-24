<template>
  <div>
    <tiny-button @click="boxVisibility = true">无标题</tiny-button>
    <tiny-dialog-box :show-header="false" v-model:visible="boxVisibility" title="消息" width="30%">
      <div class="body-class">隐藏弹窗的标题部分</div>
      <template #footer>
        <tiny-button type="primary" @click="boxVisibility = false">确 定</tiny-button>
      </template>
    </tiny-dialog-box>
  </div>
</template>

<script lang="jsx">
import { Button, DialogBox } from '@opentiny/vue'

export default {
  components: {
    TinyButton: Button,
    TinyDialogBox: DialogBox
  },
  data() {
    return {
      boxVisibility: false
    }
  }
}
</script>

<style scoped>
.body-class {
  margin-top: 32px;
}
</style>
