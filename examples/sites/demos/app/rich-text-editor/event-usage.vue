<template>
  <tiny-rich-text-editor @beforeCreate="beforeCreate" @create="create" @focus="focus" @blur="blur"
    @selectionUpdate="selectionUpdate" @transaction="transaction" @destroy="destroy"
    @update="update"></tiny-rich-text-editor>
</template>

<script lang="ts">
import { RichTextEditor } from '@opentiny/vue'

export default {
  components: {
    TinyRichTextEditor: RichTextEditor
  },
  methods: {
    beforeCreate(editor) {
      console.log('beforeCreate', editor);
    },
    create(editor) {
      console.log('create', editor);
    },
    focus(editor) {
      console.log('focus', editor);
    },
    blur(editor) {
      console.log('blur', editor);
    },
    selectionUpdate(editor) {
      console.log('selectionUpdate', editor);
    },
    transaction(editor) {
      console.log('transaction', editor);
    },
    destroy(editor) {
      console.log('destroy', editor);
    },
    update(editor) {
      console.log('update', editor);
    },
  },
}
</script>
