<template>
  <tiny-rich-text-editor :customToolBar="customToolBar"></tiny-rich-text-editor>
</template>

<script lang="ts">
import { TinyRichTextEditor } from '@opentiny/vue'

export default {
  components: {
    TinyRichTextEditor
  },
  data() {
    return {
      customToolBar: ['bold', 'italic']
    }
  }
}
</script>
