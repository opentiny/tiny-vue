<template>
  <p>Tiptap 云服务</p>
  <div class="editor-container">
    <tiny-rich-text-editor collaboration></tiny-rich-text-editor>
    <tiny-rich-text-editor collaboration></tiny-rich-text-editor>
  </div>

  <p>使用本示例需要在本地启动服务，可通过 exapmles/sites/server下运行 npm run collaboration 启动一个测试服务</p>
  <div class="editor-container">
    <tiny-rich-text-editor :collaboration="collaboration"></tiny-rich-text-editor>
    <tiny-rich-text-editor :collaboration="collaboration"></tiny-rich-text-editor>
  </div>
</template>

<script lang="ts">
import { RichTextEditor } from '@opentiny/vue'

const roomName = `room.${new Date().getFullYear().toString().slice(-2)}${
  new Date().getMonth() + 1
}${new Date().getDate()}`

export default {
  components: {
    TinyRichTextEditor: RichTextEditor
  },
  data() {
    return {
      collaboration: {
        baseUrl: 'ws://127.0.0.1:1234',
        name: roomName
      }
    }
  }
}
</script>

<style scoped>
.editor-container {
  display: flex;
}
</style>
