<template>
  <div>
    <p>默认气泡菜单 UI</p>
    <tiny-rich-text-editor v-model="value" bubbleMenuView></tiny-rich-text-editor>

    <p>自定义气泡菜单 UI，修改了背景颜色</p>
    <tiny-rich-text-editor v-model="value" :bubbleMenuView="bubbleMenu"></tiny-rich-text-editor>
    <div class="result">
      <hr />
      <pre>{{ value }}</pre>
    </div>
  </div>
</template>

<script lang="ts">
import { RichTextEditor } from '@opentiny/vue'
import BubbleMenu from './view-demo/bubble-menu'

export default {
  components: {
    TinyRichTextEditor: RichTextEditor
  },
  data() {
    return {
      value: '你好 Opentiny!',
      bubbleMenu: BubbleMenu
    }
  }
}
</script>

<style scoped>
.result {
  margin-top: 16px;
  font-size: 14px;
  line-height: 1.3;
  word-break: break-all;
}
</style>
