export default {
  column: '1',
  owner: '',
  demos: [
    {
      demoId: 'basic-usage',
      name: {
        'zh-CN': '基本用法',
        'en-US': 'Basic Usage'
      },
      desc: {
        'zh-CN': '从 <code>@opentiny/vue-icon</code> 图标库中引入图标函数，并执行，生成相应的图标。',
        'en-US':
          'Introduce icon functions from the <code>@opentiny/vue-icon</code> icon library, execute them, and generate corresponding icons.'
      },
      codeFiles: ['basic-usage.vue']
    },
    {
      demoId: 'list',
      name: {
        'zh-CN': '图标集合',
        'en-US': 'Icon Set'
      },
      desc: {
        'zh-CN': '输入图标名称进行搜索，点击图标即可快速复制名称。',
        'en-US': 'Enter the icon name for search, Click on the icon to quickly copy the name.'
      },
      codeFiles: ['list.vue']
    }
  ]
}
