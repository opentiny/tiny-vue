export default {
  column: '2',
  owner: '',
  demos: [
    {
      demoId: 'click',
      name: {
        'zh-CN': '默认按钮',
        'en-US': 'basic usage'
      },
      desc: {
        'zh-CN': '<p>按钮的单击事件，该示例中单击按钮将会出现提示信息</p>',
        'en-US': '<p>Click event of a button. In this example, a message is displayed when a button is clicked.</p>'
      },
      codeFiles: ['click.vue']
    },
    {
      demoId: 'text',
      name: {
        'zh-CN': '文字按钮',
        'en-US': 'basic usage'
      },
      desc: {
        'zh-CN':
          '<p>设置<code>type</code> 属性为 <code>text</code> 即为文字按钮，可在标签子级或者通过 <code>text</code> 属性设置显示内容。</p>',
        'en-US':
          '<p>Set the <code>type</code> attribute to <code>text</code>, which is a text button. You can set the content to be displayed at the tag child level or through the <code>text</code> attribute.</p>'
      },
      codeFiles: ['text.vue']
    },
    {
      demoId: 'button-class',
      name: {
        'zh-CN': '定制样式类',
        'en-US': 'Customized style class'
      },
      desc: {
        'zh-CN': '<p>设置 <code>button-class</code>  属性定制按钮样式</p>',
        'en-US': '<p>Set the <code>button-class</code> attribute to customize the button style</p>'
      },
      codeFiles: ['button-class.vue']
    },
    {
      demoId: 'plain',
      name: {
        'zh-CN': '线性按钮',
        'en-US': 'linearity'
      },
      desc: {
        'zh-CN': '<p>配置 <code>plain</code> 属性为 true，即可展示为线性按钮的形式。<p>',
        'en-US': '<p>If <code>plain</code> is set to true, the button is displayed as a linear button</p>'
      },
      codeFiles: ['plain.vue']
    },
    {
      demoId: 'link',
      name: {
        'zh-CN': '超链接按钮',
        'en-US': 'Hyperlink'
      },
      desc: {
        'zh-CN': '<p>通过设置<code>href</code> 属性可跳转到指定页面。<p>',
        'en-US': '<p>You can set the <code>href</code> attribute to go to a specified page</p>'
      },
      codeFiles: ['link.vue']
    },
    {
      demoId: 'type',
      name: {
        'zh-CN': '主题样式',
        'en-US': 'type'
      },
      desc: {
        'zh-CN':
          '<p>通过 <code>type</code> 属性可以设置不同的主题样式，主要包括 primary、success、info、warning、danger、text。<p>',
        'en-US':
          '<p>You can use the <code>type</code> attribute to set different theme styles, including primary, success, info, warning, danger, and text.</p>'
      },
      codeFiles: ['type.vue']
    },
    {
      demoId: 'size',
      name: {
        'zh-CN': '尺寸',
        'en-US': 'size'
      },
      desc: {
        'zh-CN':
          '<p>通过 <code>size</code>  属性设置按钮不同的大小尺寸，包括 medium、small、mini 三种不同大小。不设置时为默认尺寸。<p>',
        'en-US':
          '<p>Use the <code>size</code> attribute to set the button size, including medium, small, and mini. If this parameter is not set, the default size is used.</p>'
      },
      codeFiles: ['size.vue']
    },
    {
      demoId: 'autofocus',
      name: {
        'zh-CN': '聚焦',
        'en-US': 'Focusing on'
      },
      desc: {
        'zh-CN': '<p>通过 <code>autofocus</code> 属性设置是否默认聚焦。<p>',
        'en-US': '<p>Set the <code>autofocus</code> attribute to determine whether to focus by default.</p>'
      },
      codeFiles: ['autofocus.vue']
    },
    {
      demoId: 'reset-time',
      name: {
        'zh-CN': '防止表单重复提交',
        'en-US': 'Prevent repeated submission of forms'
      },
      desc: {
        'zh-CN':
          '<p>通过 <code>reset-time</code> 属性可设置单击后按钮禁用的时长，默认的禁用时长为 1000 毫秒。<br/>可用于防止按钮连续点击出现表单重复提交的问题。<p>',
        'en-US':
          '<p>You can use the <code>reset-time</code> attribute to set the duration for which the button is disabled after you click the button. The default duration is 1000 ms. <br/> It can be used to prevent repeated submission of forms when buttons are clicked continuously.</p>'
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
        'en-US': '<p>Click event of a button. In this example, a message is displayed when a button is clicked</p>'
      },
      codeFiles: ['click.vue']
    },
    {
      demoId: 'dynamic-disabled',
      name: {
        'zh-CN': '动态禁用按钮',
        'en-US': 'Dynamically disabled'
      },
      desc: {
        'zh-CN': '<p>设置  <code>disabled</code>属性为 true 后，可以禁用按钮。<p>',
        'en-US': '<p>If the <code>disabled</code> attribute is set to true, the button can be disabled.</p>'
      },
      codeFiles: ['dynamic-disabled.vue']
    },
    {
      demoId: 'banner',
      name: {
        'zh-CN': '通知栏按钮',
        'en-US': 'Notification bar'
      },
      desc: {
        'zh-CN': '<p>通过添加<code>banner</code>属性设置通栏按钮<p>',
        'en-US': '<p>Set the bar button by adding the <code>banner</code> attribute.</p>'
      },
      codeFiles: ['banner.vue']
    },
    {
      demoId: 'image',
      name: {
        'zh-CN': '图片按钮',
        'en-US': 'image'
      },
      desc: {
        'zh-CN': '<p>以默认插槽的用法嵌入<code>img</code>标签，并引入图片<p>',
        'en-US': '<p>Embed the <code>img</code> tag with the usage of the default slot and introduce the image</p>'
      },
      codeFiles: ['image.vue']
    },
    {
      demoId: 'icon',
      name: {
        'zh-CN': '图标按钮',
        'en-US': 'icon'
      },
      desc: {
        'zh-CN': '<p>指定 <code>icon</code>为需要的 Icon 图标即可展示为图标按钮<p>',
        'en-US': '<p>Specify <code>icon</code> as the required icon to display it as an icon button.</p>'
      },
      codeFiles: ['icon.vue']
    },
    {
      demoId: 'loading',
      name: {
        'zh-CN': '加载按钮',
        'en-US': 'icon'
      },
      desc: {
        'zh-CN': '<p>配置  <code>loading</code>属性为 true，即可展示为加载中的样式<p>',
        'en-US': '<p>Set <code>loading</code> to true to display the style being loaded.</p>'
      },
      codeFiles: ['loading.vue']
    },
    {
      demoId: 'round',
      name: {
        'zh-CN': '圆角按钮',
        'en-US': 'icon'
      },
      desc: {
        'zh-CN': '<p>配置 <code>round</code>属性属性设置是否圆角按钮。<p>',
        'en-US': '<p>Configure the <code>round</code> attribute to set whether to round the button.</p>'
      },
      codeFiles: ['round.vue']
    }
  ],
  apis: [
    {
      'name': 'Button',
      'type': 'component',
      'props': [
        {
          'name': 'banner ',
          'type': 'Boolean',
          'defaultValue': '',
          'desc': { 'zh-CN': '设置通栏按钮', 'en-US': 'Setting the bar button' },
          'demoId': 'banner'
        },
        {
          'name': 'custom-class',
          'type': 'String',
          'defaultValue': '',
          'desc': {
            'zh-CN': '设置 custom-class 属性定制按钮样式',
            'en-US': 'Set the custom-class attribute to customize the button style'
          },
          'demoId': 'button-class'
        },
        {
          'name': 'href',
          'type': 'String',
          'defaultValue': '',
          'desc': {
            'zh-CN': '通过设置 href 属性可跳转到指定页面',
            'en-US': 'Set the href attribute to jump to a specified page'
          },
          'demoId': 'link'
        }
      ]
    }
  ]
}
