<template>
  <tiny-rich-text-editor :placeholder="placeholder"></tiny-rich-text-editor>
</template>

<script lang="ts">
import { TinyRichTextEditor } from '@opentiny/vue'

export default {
  components: {
    TinyRichTextEditor
  },
  data() {
    return {
      placeholder: '自定义placeholder'
    }
  }
}
</script>
