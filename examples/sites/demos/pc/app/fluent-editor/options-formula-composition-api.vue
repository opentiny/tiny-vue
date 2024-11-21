<template>
  <div>
    <tiny-fluent-editor v-model="content" :options="options" ref="editorRef"></tiny-fluent-editor>
    内容：<br />
    {{ content }}
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { TinyFluentEditor } from '@opentiny/vue'

// 引入 mathlive 模块和样式
import 'mathlive'
import 'mathlive/static.css'
import 'mathlive/fonts.css'

const editorRef = ref()

const content = ref('{"ops":[{"insert":{"mathlive":{"value":"\\sum_{i=1}^{n} i^2","mode":"dialog"}}},{"insert":"\n"}]}')

const options = ref({
  modules: {
    // 工具栏
    toolbar: ['formula'],
    // 可编辑公式
    mathlive: true
  }
})

onMounted(() => {
  editorRef.value.state.quill.setContents({
    'ops': [{ 'insert': { 'mathlive': { 'value': '\\sum_{i=1}^{n} i^2', 'mode': 'dialog' } } }, { 'insert': '\n' }]
  })
})
</script>
