<template>
  <tiny-rich-text-editor :customToolBar="customToolBar"></tiny-rich-text-editor>
</template>

<script lang="ts">
import { RichTextEditor } from '@opentiny/vue'

export default {
  components: {
    TinyRichTextEditor: RichTextEditor
  },
  data() {
    return {
      customToolBar: ['bold', 'italic']
    }
  },
}
</script>
