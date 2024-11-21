<template>
  <tiny-rich-text-editor :customToolBar="customToolBar"></tiny-rich-text-editor>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { TinyRichTextEditor } from '@opentiny/vue'

const customToolBar = ref(['bold', 'italic'])
</script>
