export default {
  column: '2',
  owner: '',
  demos: [
    {
      demoId: 'base',
      name: {
        'zh-CN': '基本用法',
        'en-US': 'Basic Usage'
      },
      desc: {
        'zh-CN':
          '<p>通过 <code>data</code> 设置公告牌公告信息数据，<code>tab-title</code> 属性设置每个公告牌标题。</p>\n',
        'en-US':
          '<p>The <code>data</code> attribute must be set to set the bulletin information data, and the <code>tab-title</code> attribute must be set to set the title of each bulletin board. </p>\n'
      },
      codeFiles: ['base.vue']
    },
    {
      demoId: 'title',
      name: {
        'zh-CN': '公告牌标题',
        'en-US': 'Billboard Title'
      },
      desc: {
        'zh-CN': '<p>通过 <code>title</code> 设置公告牌标题。</p>\n',
        'en-US': '<p>You can use <code>title</code> to set the bulletin board title. </p>\n'
      },
      codeFiles: ['title.vue']
    },
    {
      demoId: 'active-name',
      name: {
        'zh-CN': '默认激活的选项卡',
        'en-US': 'Default Activated Tab'
      },
      desc: {
        'zh-CN': '<p>通过 <code>active-name</code> 设置默认激活的选项卡，从 <code>1</code> 开始计算。</p>\n',
        'en-US':
          '<p>You can set the default active tab by <code>active-name</code>, starting from <code>1</code>. </p>\n'
      },
      codeFiles: ['active-name.vue']
    },
    {
      demoId: 'tab-title',
      name: {
        'zh-CN': '选项卡标题',
        'en-US': 'Tab Title'
      },
      desc: {
        'zh-CN': '<p>通过 <code>tab-title</code> 设置自定义选项卡标题。</p>\n',
        'en-US': '<p>You can customize the tab title by using the <code>tab-title</code> attribute. </p>\n'
      },
      codeFiles: ['tab-title.vue']
    },
    {
      demoId: 'url',
      name: {
        'zh-CN': '基于Url的跳转',
        'en-US': 'URL-based redirection'
      },
      desc: {
        'zh-CN':
          '<p>基于 <code>Url</code> 的跳转是通过数据中的 <code>url</code> 和 <code>target</code> 字段进行设置的。</p>\n',
        'en-US':
          '<p>The URL-based redirection is based on the <code>url</code> and <code>target</code> fields in the data. </p>\n'
      },
      codeFiles: ['url.vue']
    },
    {
      demoId: 'route',
      name: {
        'zh-CN': '基于Route的跳转',
        'en-US': 'Route-based redirection'
      },
      desc: {
        'zh-CN': '<p>基于  <code>Route</code> 的跳转是通过数据中的 <code>route</code> 字段进行设置的的。</p>\n',
        'en-US': '<p>Route-based redirection is performed based on the <code>route</code> field in the data. </p>\n'
      },
      codeFiles: ['route.vue']
    },
    {
      demoId: 'more-link',
      name: {
        'zh-CN': '显示 “更多” 链接',
        'en-US': 'Show More links'
      },
      desc: {
        'zh-CN':
          '<p>通过 <code>more-link</code> 显示并设置更多链接。 <code>show-more</code> 设置是否显示更多按钮，默认为 true。</p>\n',
        'en-US':
          '<p>You can use <code>more-link</code> to display and set more links. <code>show-more</code> Sets whether to display the More button. The default value is true. </p>\n'
      },
      codeFiles: ['more-link.vue']
    },
    {
      demoId: 'icon',
      name: {
        'zh-CN': '自定义新公告前缀',
        'en-US': 'User-defined bulletin prefix'
      },
      desc: {
        'zh-CN': '<p>通过 <code>icon</code> 自定义新公告前缀图标。</p>\n',
        'en-US': '<p>You can use <code>icon</code> to customize the new bulletin prefix icon. </p>\n'
      },
      codeFiles: ['icon.vue']
    }
  ]
}
