<template>
  <tiny-rich-text-editor :options="options"></tiny-rich-text-editor>
</template>

<script lang="ts">
import { RichTextEditor } from '@opentiny/vue'

export default {
  components: {
    TinyRichTextEditor: RichTextEditor
  },
  data() {
    return {
      options: {
        content: '自定义options，覆盖默认options',
        autofocus: true,
        editable: true,
      }
    }
  },
}
</script>
