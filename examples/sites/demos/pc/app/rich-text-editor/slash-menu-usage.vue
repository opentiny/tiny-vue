<template>
  <div>
    <tiny-rich-text-editor v-model="value" slashMenuView></tiny-rich-text-editor>
    <div class="result">
      <hr />
      <pre>{{ value }}</pre>
    </div>
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
      value: '你好 Opentiny!'
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
