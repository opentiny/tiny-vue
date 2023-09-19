<template>
  <tiny-rich-text-editor :options="options"></tiny-rich-text-editor>
</template>


<script setup lang="jsx">
import { ref } from 'vue'
import { RichTextEditor as TinyRichTextEditor } from '@opentiny/vue'

const options = ref({
  content: '自定义options，覆盖默认options',
  autofocus: true,
  editable: true,
})
</script>