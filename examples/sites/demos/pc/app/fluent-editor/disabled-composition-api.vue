<template>
  <tiny-fluent-editor v-model="content" disabled></tiny-fluent-editor>
</template>

<script setup>
import { ref } from 'vue'
import { TinyFluentEditor } from '@opentiny/vue'

const content = ref('{"ops":[{"insert":"Hello "},{"attributes":{"bold":true},"insert":"FluentEditor"},{"insert":"!"}]}')
</script>
