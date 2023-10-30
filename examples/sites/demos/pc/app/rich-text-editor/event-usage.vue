<template>
  <tiny-rich-text-editor @beforeCreate="beforeCreate" @create="create" @focus="focus" @blur="blur"
    @selectionUpdate="selectionUpdate" @transaction="transaction" @destroy="destroy"
    @update="update"></tiny-rich-text-editor>
</template>

<script lang="ts">
import { RichTextEditor, Notify } from '@opentiny/vue'

export default {
  components: {
    TinyRichTextEditor: RichTextEditor
  },
  methods: {
    beforeCreate(editor) {
      console.log('beforeCreate')
    },
    create(editor) {
      console.log('create')
    },
    focus(editor) {
      console.log('focus')
    },
    blur(editor) {
      console.log('blur')
    },
    selectionUpdate(editor) {
      console.log('selectionUpdate')
    },
    transaction(editor) {
      console.log('transaction')
    },
    destroy(editor) {
      console.log('destroy')
    },
    update(editor) {
      console.log('update')
    },
  },
}
</script>
