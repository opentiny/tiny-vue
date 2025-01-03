<template>
  <tiny-rich-text-editor :options="options"></tiny-rich-text-editor>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { TinyRichTextEditor } from '@opentiny/vue'

const options = ref({
  content: '自定义 options，覆盖默认 options',
  autofocus: true,
  editable: true
})
</script>
