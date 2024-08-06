<script setup lang="ts">
import { onMounted } from 'vue'
import FluentEditor from '@opentiny/fluent-editor'

let editor

const TOOLBAR_CONFIG = [
  ['undo', 'redo', 'clean'],
  ['bold', 'italic', 'underline', 'strike'],
  [{ header: [] }],
  [{ font: [] }, { size: [] }],
  [{ color: [] }, { background: [] }],
  [{ align: [] }, { list: 'bullet' }, { list: 'ordered' }, { list: 'check' }],
  ['code', 'code-block', 'blockquote'],
  ['image', 'file', 'better-table', 'link', 'global-link'],
  ['fullscreen', 'emoji', 'help', 'screenshot'],
]

onMounted(() => {
  editor = new FluentEditor('#editor', {
    theme: 'snow',
    modules: {
      toolbar: {
        container: TOOLBAR_CONFIG
      }
    }
  })
})
</script>

<template>
  <div id="editor">
    <p>Hello <strong>FluentEditor</strong>!</p> 
  </div>
</template>

<style scoped>

</style>
