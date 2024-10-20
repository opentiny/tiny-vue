<template>
  <div>
    <tiny-rich-text-editor v-model="value" bubbleMenuView></tiny-rich-text-editor>
    <div class="result">
      <hr />
      <pre>{{ value }}</pre>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { RichTextEditor as TinyRichTextEditor } from '@opentiny/vue'
import { ref } from 'vue'

const bubbleMenuView = ref(true)

const value = ref('你好 Opentiny!')
</script>

<style scoped>
.result {
  margin-top: 16px;
  font-size: 14px;
  line-height: 1.3;
  word-break: break-all;
}
</style>
