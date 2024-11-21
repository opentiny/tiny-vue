<template>
  <tiny-rich-text-editor :collaboration="collaboration"></tiny-rich-text-editor>
</template>

<script lang="ts">
import { TinyRichTextEditor } from '@opentiny/vue'

export default {
  components: {
    TinyRichTextEditor
  },
  data() {
    return {
      collaboration: true
    }
  }
}
</script>
