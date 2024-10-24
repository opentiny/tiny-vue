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
        'zh-CN': `
          从 <code>@opentiny/vue-icon</code> 图标库中引入图标变量。该变量为一个函数，执行后生成一个有效的 <code> Vue </code> 图标组件，可以在模板中使用。<br>
          通过修改图标的 <code>font-size</code> 样式，指定图标的大小，通过修改<code>fill</code> 指定图标的颜色。
          <div class="tip custom-block">
            <p class="custom block title"> 常见的图标使用方式 </p>
            以 <code>Shared</code>图标组件为例：<br>
            1、在模板中通过标签式引入。比如 <code> &lt;tiny-shared /&gt; </code> <br>
            2、在模板中通过<code> &lt;component&gt; </code> 组件引入。比如 <code> &lt;component :is="tinyShared" /&gt; </code> <br>
            3、当做组件属性传入。比如 <code> &lt;tiny-button :icon="tinyShared" &gt; </code> <br>
          </div>
        `,
        'en-US':
          'Introduce icon functions from the <code>@opentiny/vue-icon</code> icon library, execute them, and generate corresponding icons.'
      },
      codeFiles: ['basic-usage.vue']
    },
    {
      demoId: 'show-title',
      name: {
        'zh-CN': '显示 Title',
        'en-US': 'Display Title'
      },
      desc: {
        'zh-CN': '通过其父元素的 <code>title</code> 属性，实现给图标增加 <code>Title</code> 的功能。',
        'en-US':
          'By using the <code>title</code> attribute of its parent element, the function of adding <code>Title</code> to the icon is implemented.'
      },
      codeFiles: ['show-title.vue']
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
