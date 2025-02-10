<template>
  <div class="tiny-mobile-dialog-box-demo">
    <tiny-button @click="boxVisibility1 = true">弹出Dialog {{ boxVisibility1 }}</tiny-button>
    <tiny-dialog-box
      :visible="boxVisibility1"
      @update:visible="boxVisibility1 = $event"
      :modal-append-to-body="false"
      title="标题"
      :show-header="false"
    >
      <span>单行文本单行文本单行文本</span>
    </tiny-dialog-box>
  </div>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { TinyButton, TinyDialogBox } from '@opentiny/vue-mobile'

const boxVisibility1 = ref(false)
</script>
