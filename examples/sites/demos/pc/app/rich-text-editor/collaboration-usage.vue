<template>
  <tiny-rich-text-editor :collaboration="collaboration"></tiny-rich-text-editor>
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
  },
}
</script>

