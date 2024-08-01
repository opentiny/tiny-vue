<template>
  <div id="editor">
    <p>Hello <strong>FluentEditor</strong>!</p> 
  </div>
</template>

<script>
import FluentEditor from '@opentiny/fluent-editor'

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

export default {
  data() {
    return {
      content: '{"ops":[{"insert":"Hello "},{"attributes":{"bold":true},"insert":"FluentEditor"},{"insert":"!"}]}',
      editor: null,
    }
  },
  mounted() {
    this.editor = new FluentEditor('#editor', {
      theme: 'snow',
      modules: {
        toolbar: {
          container: TOOLBAR_CONFIG
        }
      }
    })
  }
}
</script>
