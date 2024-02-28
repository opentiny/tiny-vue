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
        'zh-CN': '<p>配置 <code>local</code> 属性后，不会自动调用服务，仅用做当前语言切换，不会刷新页面。</p>\n',
        'en-US':
          '<p>After the <code>local</code> attribute is configured, the service is not automatically invoked. It is only used to switch the current language and does not refresh the page. </p>\n'
      },
      codeFiles: ['basic-usage.vue']
    },
    {
      demoId: 'custom-service',
      name: {
        'zh-CN': '自定义服务',
        'en-US': 'Custom Service'
      },
      desc: {
        'zh-CN':
          '<p><code>get-locale</code> 可用于自定义获取所有语言。<code>get-current-locale</code> 用于获取当前语言。<code>get-change-locale-url</code> 用于获取改变语言后的 URL，参数为切换后的语言。</p>\n',
        'en-US':
          '<p><code>get-locale</code> can be used to customize all languages. <code>get-current-locale</code> is used to obtain the current language. <code>get-change-locale-url</code> is used to obtain the URL after the language is changed. The parameter is the language after the language is changed. </p>\n'
      },
      codeFiles: ['custom-service.vue']
    },
    {
      demoId: 'change-lang',
      name: {
        'zh-CN': '语言切换',
        'en-US': 'Switch Language'
      },
      desc: {
        'zh-CN': '<p>提供 <code>change-lang</code> 函数用于自定义语言切换的逻辑，不设置则使用内置的切换方法。</p>\n',
        'en-US':
          '<p>Provides the <code>change-lang</code> function to customize the language switching logic. If this function is not set, the built-in switching method is used. </p>\n'
      },
      codeFiles: ['change-lang.vue']
    }
  ]
}
