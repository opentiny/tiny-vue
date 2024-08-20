<template>
  <div class="editor-container">
    <tiny-rich-text-editor :collaboration="collaboration"></tiny-rich-text-editor>
    <tiny-rich-text-editor :collaboration="collaboration"></tiny-rich-text-editor>
  </div>
</template>

<script lang="ts">
import { RichTextEditor } from '@opentiny/vue'

export default {
  components: {
    TinyRichTextEditor: RichTextEditor
  },
  data() {
    return {
      collaboration: true
    }
  }
}
</script>

<style scoped>
.editor-container {
  display: flex;
}
</style>
