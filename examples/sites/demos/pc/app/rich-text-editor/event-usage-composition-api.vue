<template>
  <tiny-rich-text-editor @beforeCreate="beforeCreate" @create="create" @focus="focus" @blur="blur"
    @selectionUpdate="selectionUpdate" @transaction="transaction" @destroy="destroy"
    @update="update"></tiny-rich-text-editor>
</template>

<script setup lang="jsx">
import { RichTextEditor as TinyRichTextEditor, Notify } from '@opentiny/vue'
const beforeCreate = function (editor) {
  console.log('beforeCreate')
}
const create = function (editor) {
  console.log('create')
}
const focus = function (editor) {
  console.log('focus')
}
const blur = function (editor) {
  console.log('blur')
}
const selectionUpdate = function (editor) {
  console.log('selectionUpdate')
}
const transaction = function (editor) {
  console.log('transaction')
}
const destroy = function (editor) {
  console.log('destroy')
}
const update = function (editor) {
  console.log('update')
}
</script>