export default {
  column: '2',
  owner: '',
  demos: [
    {
      demoId: 'text',
      name: {
        'zh-CN': '文字按钮',
        'en-US': 'basic usage'
      },
      desc: {
        'zh-CN':
          '<p>设置<code>type</code> 属性为 <code>text</code> 即为文字按钮，可在标签子级或者通过 <code>text</code> 属性设置显示内容。</p>',
        'en-US': '<p>button type</p>'
      },
      codeFiles: ['text.vue']
    },
    {
      demoId: 'button-class',
      name: {
        'zh-CN': '定制样式类',
        'en-US': 'button round'
      },
      desc: {
        'zh-CN': '<p>设置 <code>button-class</code>  属性定制按钮样式</p>',
        'en-US': '<p>button round</p>'
      },
      codeFiles: ['button-class.vue']
    },
    {
      demoId: 'plain',
      name: {
        'zh-CN': '线性按钮',
        'en-US': 'events'
      },
      desc: {
        'zh-CN': '<p>配置 <code>plain</code> 属性为 true，即可展示为线性按钮的形式。<p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['plain.vue']
    },
    {
      demoId: 'link',
      name: {
        'zh-CN': '超链接按钮',
        'en-US': 'events'
      },
      desc: {
        'zh-CN': '<p>通过设置<code>href</code> 属性可跳转到指定页面。<p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['link.vue']
    },
    {
      demoId: 'type',
      name: {
        'zh-CN': '主题样式',
        'en-US': 'events'
      },
      desc: {
        'zh-CN':
          '<p>通过 <code>type</code> 属性可以设置不同的主题样式，主要包括 primary、success、info、warning、danger、text。<p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['type.vue']
    },
    {
      demoId: 'size',
      name: {
        'zh-CN': '尺寸',
        'en-US': 'events'
      },
      desc: {
        'zh-CN':
          '<p>通过 <code>size</code>  属性设置按钮不同的大小尺寸，包括 medium、small、mini 三种不同大小。不设置时为默认尺寸。<p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['size.vue']
    },
    {
      demoId: 'autofocus',
      name: {
        'zh-CN': '聚焦',
        'en-US': 'events'
      },
      desc: {
        'zh-CN': '<p>通过 <code>autofocus</code> 属性设置是否默认聚焦。<p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['autofocus.vue']
    },
    {
      demoId: 'reset-time',
      name: {
        'zh-CN': '防止表单重复提交',
        'en-US': 'events'
      },
      desc: {
        'zh-CN':
          '<p>通过 <code>reset-time</code> 属性可设置单击后按钮禁用的时长，默认的禁用时长为 1000 毫秒。<br/>可用于防止按钮连续点击出现表单重复提交的问题。<p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['reset-time.vue']
    },
    {
      demoId: 'click',
      name: {
        'zh-CN': '事件',
        'en-US': 'events'
      },
      desc: {
        'zh-CN': '<p>按钮的单击事件，该示例中单击按钮将会出现提示信息。<p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['click.vue']
    },
    {
      demoId: 'dynamic-disabled',
      name: {
        'zh-CN': '动态禁用按钮',
        'en-US': 'events'
      },
      desc: {
        'zh-CN': '<p>设置  <code>disabled</code>属性为 true 后，可以禁用按钮。<p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['dynamic-disabled.vue']
    },
    {
      demoId: 'banner',
      name: {
        'zh-CN': '通知栏按钮',
        'en-US': 'events'
      },
      desc: {
        'zh-CN': '<p>通过添加<code>banner</code>属性设置通栏按钮<p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['banner.vue']
    }
  ],
  apis: []
}
