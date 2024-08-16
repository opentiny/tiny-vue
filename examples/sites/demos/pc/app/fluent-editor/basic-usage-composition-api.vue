<template>
  <div>
    <tiny-fluent-editor v-model="content"></tiny-fluent-editor>
    内容：<br />
    {{ content }}
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { TinyFluentEditor } from '@opentiny/vue'

const content = ref('{"ops":[{"insert":"Hello "},{"attributes":{"bold":true},"insert":"FluentEditor"},{"insert":"!"}]}')
</script>
