<template>
  <div>
    <tiny-button @click="boxVisibility = true"> 右侧弹窗 </tiny-button>
    <tiny-dialog-box right-slide v-model:visible="boxVisibility" title="消息" modal-append-to-body>
      <template #title>
        <div class="header">
          <span class="title">标题区</span>
          <tiny-icon-help-circle class="icon"></tiny-icon-help-circle>
        </div>
      </template>
      <span>半屏弹窗内容</span>
      <template #footer>
        <tiny-button type="primary" @click="boxVisibility = false"> 确 定 </tiny-button>
        <tiny-button plain @click="boxVisibility = false"> 取消 </tiny-button>
      </template>
    </tiny-dialog-box>
  </div>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { Button as TinyButton, DialogBox as TinyDialogBox } from '@opentiny/vue'
import { iconHelpCircle } from '@opentiny/vue-icon'

const boxVisibility = ref(false)

const TinyIconHelpCircle = iconHelpCircle()
</script>

<style scoped>
.header {
  display: flex;
  align-items: center;
}
.header .title {
  font-size: 20px;
  font-weight: 600;
  line-height: 1.5;
  margin-right: 8px;
}

.header .icon {
  margin-top: 2px;
  font-size: 16px;
}
</style>
