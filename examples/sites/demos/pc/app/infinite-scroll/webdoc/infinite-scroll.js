export default {
  column: '2',
  owner: '',
  demos: [
    {
      demoId: 'basic-usage',
      name: {
        'zh-CN': '基本用法',
        'en-US': 'Basic Usage'
      },
      desc: {
        'zh-CN':
          '<p>要实现滚动加载，需要在列表上添加指令 <code>v-infinite-scroll</code> 并指定加载方法，参考示例。</p>\n',
        'en-US':
          '<p>To implement rolling loading, you need to add the directive <code>v-infinite-scroll</code> to the list and specify the loading method. For details, see the example. </p>\n'
      },
      codeFiles: ['basic-usage.vue']
    },
    {
      demoId: 'disabled',
      name: {
        'zh-CN': '禁用加载',
        'en-US': 'Disabling loading'
      },
      desc: {
        'zh-CN': '<p>在滚动加载列表上添加属性 <code>infinite-scroll-disabled</code> 控制是否禁用加载，参考示例。</p>\n',
        'en-US':
          '<p>Adds the property <code>infinite-scroll-disabled</code> to the scrolling load list to control whether loading is disabled. For details, see the example. </p>\n'
      },
      codeFiles: ['disabled.vue']
    }
  ]
}
