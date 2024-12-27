<template>
  <tiny-fluent-editor v-model="content"></tiny-fluent-editor>
  <div class="fluent-editor-demo__basic-usage__content">
    内容：<br />
    {{ content }}
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { TinyFluentEditor } from '@opentiny/vue'

const content = ref('{"ops":[{"insert":"Hello "},{"attributes":{"bold":true},"insert":"FluentEditor"},{"insert":"!"}]}')
</script>

<style scoped>
.fluent-editor-demo__basic-usage__content {
  margin: 16px 0;
  line-height: 1.5;
  word-break: break-word;
}
</style>
