<template>
  <div>
    <tiny-fluent-editor v-model="content" :options="options" ref="editorRef"></tiny-fluent-editor>
    内容：<br />
    {{ content }}
  </div>
</template>

<script>
import { TinyFluentEditor } from '@opentiny/vue'

// 引入 mathlive 模块和样式
import 'mathlive'
import 'mathlive/static.css'
import 'mathlive/fonts.css'

export default {
  components: {
    TinyFluentEditor
  },
  data() {
    return {
      content: '{"ops":[{"insert":{"mathlive":{"value":"\\sum_{i=1}^{n} i^2","mode":"dialog"}}},{"insert":"\n"}]}',
      options: {
        modules: {
          // 工具栏
          toolbar: ['formula'],
          // 可编辑公式
          mathlive: true
        }
      }
    }
  },
  mounted() {
    this.$refs.editorRef.state.quill.setContents({
      'ops': [{ 'insert': { 'mathlive': { 'value': '\\sum_{i=1}^{n} i^2', 'mode': 'dialog' } } }, { 'insert': '\n' }]
    })
  }
}
</script>
