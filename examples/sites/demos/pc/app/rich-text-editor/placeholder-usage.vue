<template>
  <tiny-rich-text-editor :placeholder="placeholder"></tiny-rich-text-editor>
</template>

<script lang="ts">
import { RichTextEditor } from '@opentiny/vue'

export default {
  components: {
    TinyRichTextEditor: RichTextEditor
  },
  data() {
    return {
      placeholder: '自定义placeholder',
    }
  },
}
</script>
