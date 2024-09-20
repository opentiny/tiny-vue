<template>
  <div>
    <tiny-fluent-editor v-model="content" :options="options"></tiny-fluent-editor>
    内容：<br />
    {{ content }}
  </div>
</template>

<script>
import { TinyFluentEditor } from '@opentiny/vue'

export default {
  components: {
    TinyFluentEditor
  },
  data() {
    return {
      content: '',
      options: {
        placeholder: '请输入内容',
        modules: {
          // 工具栏
          toolbar: [
            ['undo', 'redo', 'clean', 'format-painter'],
            ['bold', 'italic', 'underline', 'strike'],
            [{ list: 'bullet' }, { list: 'ordered' }],
            [{ align: '' }, { align: 'center' }, { align: 'right' }],
            ['better-table'],
            ['fullscreen']
          ],
          // 字数统计
          counter: true,
          // 表格
          'better-table': {
            operationMenu: {
              color: {
                text: '主题色',
                colors: [
                  '#ffffff',
                  '#f2f2f2',
                  '#dddddd',
                  '#a6a6a6',
                  '#666666',
                  '#000000',
                  '#c00000',
                  '#ff0000',
                  '#ffc8d3',
                  '#ffc000',
                  '#ffff00',
                  '#fff4cb',
                  '#92d050',
                  '#00b050',
                  '#dff3d2',
                  '#00b0f0',
                  '#0070c0',
                  '#d4f1f5',
                  '#002060',
                  '#7030a0',
                  '#7b69ee',
                  '#1476ff',
                  '#ec66ab',
                  '#42b883'
                ]
              }
            }
          }
        }
      }
    }
  }
}
</script>
