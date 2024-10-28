<template>
  <div>
    <p>默认斜杠菜单 UI</p>
    <tiny-rich-text-editor v-model="value" slashMenuView></tiny-rich-text-editor>

    <p>自定义斜杠菜单 UI 文字和图标的位置进行了调换，且修改了背景颜色</p>
    <tiny-rich-text-editor v-model="value" :slashMenuView="slashMenu"></tiny-rich-text-editor>
    <div class="result">
      <hr />
      <pre>{{ value }}</pre>
    </div>
  </div>
</template>

<script lang="ts">
import { RichTextEditor } from '@opentiny/vue'
import SlashMenu from './view-demo/slash-menu'

export default {
  components: {
    TinyRichTextEditor: RichTextEditor
  },
  data() {
    return {
      value: '你好 Opentiny!',
      slashMenu: SlashMenu
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
