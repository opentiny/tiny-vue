export default {
  column: '1',
  owner: '',
  demos: [
    {
      'demoId': 'empty-empty-data-tip',
      'name': { 'zh-CN': '自定义提示', 'en-US': 'Custom Prompt' },
      'desc': {
        'zh-CN':
          '<p>空数据时默认显示 <code>图标 + 文字</code> 提示，用户也可通过设置插槽 <code>v-slot:empty</code> 或者 属性 <code>render-empty</code> 来自定义提示内容。</p>\n',
        'en-US':
          '<p>When the data is empty, the <code> icon + text </code> prompt is displayed by default. You can also set the slot <code>v-slot:empty</code> or the <code>render-empty</code> attribute to define the prompt content. </p>\n'
      },
      'codeFiles': ['empty/empty-data-tip.vue']
    },
    {
      'demoId': 'empty-empty-data-default-tip',
      'name': { 'zh-CN': '默认提示', 'en-US': 'Default Prompt' },
      'desc': { 'zh-CN': '详细用法参考如下示例', 'en-US': 'For details, see the following example.' },
      'codeFiles': ['empty/empty-data-default-tip.vue']
    },
    {
      'demoId': 'empty-empty-data-iscenter',
      'name': { 'zh-CN': '固定居中', 'en-US': 'Fix Center' },
      'desc': {
        'zh-CN':
          '<p>配置 <code>is-center-empty</code> 为 <code>true</code> 时，拖动横向滚动条可以保持空数据提示使终相对表格宽度居中显示</p>\n',
        'en-US':
          '<p>When <code>is-center-empty</code> is set to <code>true</code>, drag the horizontal scroll bar to keep the empty data prompt so that the final data is displayed in the center of the table width</p>\n'
      },
      'codeFiles': ['empty/empty-data-iscenter.vue']
    }
  ],
  apis: [{ 'name': 'grid-empty', 'type': 'component', 'properties': [], 'events': [], 'slots': [] }]
}
