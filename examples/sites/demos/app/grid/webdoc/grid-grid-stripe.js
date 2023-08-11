export default {
  column: '1',
  owner: '',
  demos: [
    {
      'demoId': 'stripe-stripe',
      'name': { 'zh-CN': '基本用法', 'en-US': 'Basic Usage' },
      'desc': {
        'zh-CN':
          '<p><code>stripe</code> 是否带有斑马纹 默认不开启。设置 <code>:stripe="true" </code>时开启(注:需要注意的是，在可编辑表格场景下，临时插入的数据不会有斑马纹样式)</p>\n',
        'en-US':
          'Whether the <p><code>stripe</code> has zebra prints is disabled by default. Enabled when <code>:stripe="true" </code> is set. (Note: In the editable table scenario, the data inserted temporarily does not have the zebra pattern.) </p>\n'
      },
      'codeFiles': ['stripe/stripe.vue']
    }
  ],
  apis: [{ 'name': 'grid-grid-stripe', 'type': 'component', 'properties': [], 'events': [], 'slots': [] }]
}
