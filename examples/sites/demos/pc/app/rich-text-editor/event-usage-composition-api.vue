<template>
  <tiny-rich-text-editor @beforeCreate="beforeCreate" @create="create" @focus="focus" @blur="blur"
    @selectionUpdate="selectionUpdate" @transaction="transaction" @destroy="destroy"
    @update="update"></tiny-rich-text-editor>
</template>

<script setup lang="jsx">
import { RichTextEditor as TinyRichTextEditor, Notify } from '@opentiny/vue'
const beforeCreate = function (editor) {
  Notify({
    type: 'info',
    message: 'beforeCreate',
    position: 'top',
    duration: 3000,
  })
}
const create = function (editor) {
  Notify({
    type: 'info',
    message: 'create',
    position: 'top',
    duration: 3000,
  })
}
const focus = function (editor) {
  Notify({
    type: 'info',
    message: 'focus',
    position: 'top',
    duration: 3000,
  })
}
const blur = function (editor) {
  Notify({
    type: 'info',
    message: 'blur',
    position: 'top',
    duration: 3000,
  })
}
const selectionUpdate = function (editor) {
  Notify({
    type: 'info',
    message: 'selectionUpdate',
    position: 'top',
    duration: 3000,
  })
}
const transaction = function (editor) {
  Notify({
    type: 'info',
    message: 'transaction',
    position: 'top',
    duration: 3000,
  })
}
const destroy = function (editor) {
  Notify({
    type: 'info',
    message: 'destroy',
    position: 'top',
    duration: 3000,
  })
}
const update = function (editor) {
  Notify({
    type: 'info',
    message: 'update',
    position: 'top',
    duration: 3000,
  })
}
</script>