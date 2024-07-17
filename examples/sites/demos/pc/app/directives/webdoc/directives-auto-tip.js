export default {
  column: '2',
  owner: '',
  metaData: {
    stable: '3.17.0'
  },
  versionTipOption: {
    stages: ['stable']
  },
  demos: [
    {
      demoId: 'auto-tip-basic-usage',
      name: {
        'zh-CN': '基本用法',
        'en-US': 'Basic Usage'
      },
      desc: {
        'zh-CN':
          '通过配置 <code>v-auto-tip</code> 自定义指令可以在鼠标移入时自动添加tip提示，注意：需要用户自己写超出省略隐藏相关样式。',
        'en-US':
          'You can configure the <code>v-auto-tip</code> custom command to automatically add a tip when you move the cursor. Note: You need to write the style beyond or omit to hide the style.'
      },
      codeFiles: ['auto-tip/basic-usage.vue']
    },
    {
      demoId: 'auto-tip-always-show',
      name: {
        'zh-CN': '自定义提示内容',
        'en-US': 'Constantly Displaying Prompts'
      },
      desc: {
        'zh-CN': `
        通过配置 <code>v-auto-tip</code> 自定义指令的值可以分为以下两种情况： 
        <p>如果配置为 <code>{ always: true, content: '自定义内容', effect: 'dark' }</code> ，<code>always: true</code> 可以正常触发提示无论是否超出隐藏省略；<code>content</code> 可以定义提示内容；<code>effect</code> 可以配置主题，可选值有： <code>light</code> 和 <code>dark</code> ，默认是亮色主题。</p>
        <p>如果配置为 <code>false</code> 则不处理任何 <code>tip</code> 相关逻辑。</p>
        `,
        'en-US': `
        You can configure <code>v-auto-tip</code> to customize the command value to:
        <p>If this parameter is set to {always: true, content:'customized content'}</code> ,<code>always: true</code>, the prompt is displayed long regardless of whether the value exceeds the threshold or not. <code>content</code> can define the prompt content. </p>
        <p>If this parameter is set to <code>false</code>, no <code>tip</code> logic is processed. </p>
        `
      },
      codeFiles: ['auto-tip/always-show.vue']
    }
  ]
}
