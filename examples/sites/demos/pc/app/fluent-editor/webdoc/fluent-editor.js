export default {
  column: '2',
  owner: '',
  metaData: {
    experimental: '3.17.0'
  },
  demos: [
    {
      demoId: 'basic-usage',
      name: {
        'zh-CN': '基本用法',
        'en-US': 'Basic Usage'
      },
      desc: {
        'zh-CN': '通过 <code>v-model</code> 设置绑定值，默认数据保存格式为 Delta 数据格式。',
        'en-US': 'You can refer to component label.'
      },
      codeFiles: ['basic-usage.vue']
    },
    {
      demoId: 'data-switch',
      name: {
        'zh-CN': '数据格式转换',
        'en-US': 'Vertical divider line'
      },
      desc: {
        'zh-CN':
          '<p>通过 <code>data-type</code> 指定富文本数据保存的格式。数据默认保存格式为 Delta 形式，若需要将数据保存格式设置为 HTML 形式，并关闭 HTML 格式自动转 Delta 格式，设置 <code>:data-type="false"</code>，<code>:data-upgrade="false"</code>。</p>',
        'en-US': '<p>The direction of the separator line can be set through the<code>direction</code>attribute.</p>'
      },
      codeFiles: ['data-switch.vue']
    },
    {
      demoId: 'disabled',
      name: {
        'zh-CN': '禁用态',
        'en-US': 'The position of the separator copy'
      },
      desc: {
        'zh-CN': '<p>通过属性 <code>disabled</code> 可设置编辑器为不可编辑状态。</p>',
        'en-US':
          '<p>The position of the separator text can be set through the<code>content position</code>attribute.</p>'
      },
      codeFiles: ['disabled.vue']
    }
  ]
}
