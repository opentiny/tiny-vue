export default {
  column: '1',
  owner: '',
  demos: [
    {
      'demoId': 'appearance-settings-grid-border',
      'name': { 'zh-CN': '边框设置', 'en-US': 'Basic Usage' },
      'desc': {
        'zh-CN': '<p>表格属性设置 <code>border</code> 给表格加上边框。</p>\n',
        'en-US': '<p>Table property setting <code>border</code>Adds a border to the table. </p>\n'
      },
      'codeFiles': ['appearance-settings/grid-border.vue']
    },
    {
      'demoId': 'appearance-settings-stripe',
      'name': { 'zh-CN': '斑马条纹', 'en-US': 'Basic Usage' },
      'desc': {
        'zh-CN':
          '<p> <code>stripe</code> 是否带有斑马纹 默认不开启。设置 <code>:stripe="true" </code>时开启(注:需要注意的是，在可编辑表格场景下，临时插入的数据不会有斑马纹样式)</p>\n',
        'en-US':
          'Whether the <p> <code>stripe</code> has zebra prints is disabled by default. Enabled when <code>:stripe="true" </code> is set. (Note: In the editable table scenario, the data inserted temporarily does not have the zebra pattern.) </p>\n'
      },
      'codeFiles': ['appearance-settings/stripe.vue']
    }
  ],
  apis: [{ 'name': 'grid-appearance-settings', 'type': 'component', 'properties': [], 'events': [], 'slots': [] }]
}
