<template>
  <tiny-rich-text-editor @beforeCreate="beforeCreate" @create="create" @focus="focus" @blur="blur"
    @selectionUpdate="selectionUpdate" @transaction="transaction" @destroy="destroy"
    @update="update"></tiny-rich-text-editor>
</template>

<script setup lang="jsx">
import { RichTextEditor as TinyRichTextEditor } from '@opentiny/vue'
const beforeCreate = function (editor) {
  console.log('beforeCreate', editor);
}
const create = function (editor) {
  console.log('create', editor);
}
const focus = function (editor) {
  console.log('focus', editor);
}
const blur = function (editor) {
  console.log('blur', editor);
}
const selectionUpdate = function (editor) {
  console.log('selectionUpdate', editor);
}
const transaction = function (editor) {
  console.log('transaction', editor);
}
const destroy = function (editor) {
  console.log('destroy', editor);
}
const update = function (editor) {
  console.log('update', editor);
}
</script>