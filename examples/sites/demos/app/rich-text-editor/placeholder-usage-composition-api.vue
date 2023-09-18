<template>
  <tiny-rich-text-editor :placeholder="placeholder"></tiny-rich-text-editor>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { RichTextEditor as TinyRichTextEditor } from '@opentiny/vue'

const placeholder = ref('自定义placeholder')
</script>