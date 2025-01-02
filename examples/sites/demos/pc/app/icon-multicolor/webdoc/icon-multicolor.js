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
        'zh-CN': `通过 <code>first-color</code> 自定义图标第一层颜色，通过 <code>second-color</code> 自定义图标第二层颜色。
          <div class="tip custom-block">
            <p>图标颜色规则：共三层颜色，其中一二层颜色可独立配置，第三层颜色为第二层颜色透明度的 50%</p>
            <p>第一层默认颜色：rgba(0,103,209,1)</p>
            <p>第二层默认颜色：rgba(0,103,209,0.7) （默认为第一层的 70%）</p>
            <p>第三层默认颜色：rgba(0,103,209,0.35)（第二层的 50%）</p>
          </div>
          `,
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
