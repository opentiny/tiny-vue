export default {
  column: '1',
  owner: '',
  metaData: {
    experimental: '3.11.0'
  },
  demos: [
    {
      demoId: 'basic-usage',
      name: {
        'zh-CN': '基本用法',
        'en-US': 'Basic Usage'
      },
      desc: {
        'zh-CN': '详细用法参考如下示例',
        'en-US': 'For details, see the following example.'
      },
      codeFiles: ['basic-usage.vue']
    },
    {
      demoId: 'slash-menu-usage',
      name: {
        'zh-CN': '斜杠菜单',
        'en-US': 'Slash Menu Usage'
      },
      desc: {
        'zh-CN':
          '<p>可通过 <code>slashMenuView</code> 属性设置斜杠菜单，可选值：<code>true</code> / <code>false</code> / <code>Component</code>。</p>\n',
        'en-US':
          '<p>The slash menu can be set via the <code>slashMenuView</code> property, with available options: <code>true</code> / <code>false</code> / <code>Component</code>.</p>.\n'
      },
      codeFiles: ['slash-menu-usage.vue']
    },
    {
      demoId: 'custom-bar-usage',
      name: {
        'zh-CN': '自定义工具栏用法',
        'en-US': 'Basic Usage'
      },
      desc: {
        'zh-CN': '详细用法参考如下示例',
        'en-US': 'For details, see the following example.'
      },
      codeFiles: ['custom-bar-usage.vue']
    },
    {
      demoId: 'event-usage',
      name: {
        'zh-CN': '事件用法',
        'en-US': 'Basic Usage'
      },
      desc: {
        'zh-CN': '详细用法参考如下示例',
        'en-US': 'For details, see the following example.'
      },
      codeFiles: ['event-usage.vue']
    },
    {
      demoId: 'options-usage',
      name: {
        'zh-CN': 'options选项用法',
        'en-US': 'Basic Usage'
      },
      desc: {
        'zh-CN': '详细用法参考如下示例',
        'en-US': 'For details, see the following example.'
      },
      codeFiles: ['options-usage.vue']
    },
    {
      demoId: 'placeholder-usage',
      name: {
        'zh-CN': 'placeholder选项用法',
        'en-US': 'Basic Usage'
      },
      desc: {
        'zh-CN': '详细用法参考如下示例',
        'en-US': 'For details, see the following example.'
      },
      codeFiles: ['placeholder-usage.vue']
    },
    {
      demoId: 'collaboration-usage',
      name: {
        'zh-CN': 'collaboration选项用法',
        'en-US': 'Collaboration Usage'
      },
      desc: {
        'zh-CN': `<p>可通过 <code>collaboration</code> 属性开启协同编辑，可选值：<code>true</code> / <code>false</code> / <code>ProviderConfigure</code>。
          <p>实际功能使用需要结合云服务或者后端服务，本示例使用的是 tiptap 提供的云服务</p>
          <p>参数具体配置可参考 <a href="https://tiptap.dev/docs/collaboration/provider/integration" target="_blank">provider</a></p>
        </p>\n`,
        'en-US': `<p>The collaboration can be set via the <code>collaboration</code> property, with available options: <code>true</code> / <code>false</code> / <code>Object</code>.
          <p>The actual function use needs to be combined with cloud services or back-end services.This example uses the cloud service provided by tiptap</p>
          <p>For specific configuration, please refer to <a href="https://tiptap.dev/docs/collaboration/provider/integration" target="_blank">provider</a></p>
        </p>.\n`
      },
      codeFiles: ['collaboration-usage.vue']
    }
  ]
}
