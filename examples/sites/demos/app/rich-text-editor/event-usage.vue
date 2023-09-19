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
      Notify({
        type: 'info',
        message: 'beforeCreate',
        position: 'top',
        duration: 3000,
      })
    },
    create(editor) {
      Notify({
        type: 'info',
        message: 'create',
        position: 'top',
        duration: 3000,
      })
    },
    focus(editor) {
      Notify({
        type: 'info',
        message: 'focus',
        position: 'top',
        duration: 3000,
      })
    },
    blur(editor) {
      Notify({
        type: 'info',
        message: 'blur',
        position: 'top',
        duration: 3000,
      })
    },
    selectionUpdate(editor) {
      Notify({
        type: 'info',
        message: 'selectionUpdate',
        position: 'top',
        duration: 3000,
      })
    },
    transaction(editor) {
      Notify({
        type: 'info',
        message: 'transaction',
        position: 'top',
        duration: 3000,
      })
    },
    destroy(editor) {
      Notify({
        type: 'info',
        message: 'destroy',
        position: 'top',
        duration: 3000,
      })
    },
    update(editor) {
      Notify({
        type: 'info',
        message: 'update',
        position: 'top',
        duration: 3000,
      })
    },
  },
}
</script>
