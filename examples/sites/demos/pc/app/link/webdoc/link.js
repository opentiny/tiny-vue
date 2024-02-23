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
        'zh-CN': '<p>通过 <code>value</code> 或者默认插槽设置链接显示内容。</p>',
        'en-US': '<p>Set the link to display content via <code>value</code> or the default slot. </p></p>'
      },
      codeFiles: ['basic-usage.vue']
    },
    {
      demoId: 'link-style',
      name: {
        'zh-CN': '主题样式',
        'en-US': 'Theme Style'
      },
      desc: {
        'zh-CN': '<p>通过 <code>type</code> 设置链接的主题类型。</p>',
        'en-US': '<p>Set the topic type of the link through the <code>type</code> attribute. </p>'
      },
      codeFiles: ['link-style.vue']
    },
    {
      demoId: 'dynamic-disable',
      name: {
        'zh-CN': '禁用链接',
        'en-US': 'Disable links'
      },
      desc: {
        'zh-CN': '<p>通过 <code>disabled</code> 设置是否禁用链接。</p>',
        'en-US': '<p>You can use the <code>disabled</code> attribute to specify whether to disable links. </p>'
      },
      codeFiles: ['dynamic-disable.vue']
    },
    {
      demoId: 'focus-no-underline',
      name: {
        'zh-CN': '聚焦时不显示下划线',
        'en-US': 'Do not display underscores when focusing.'
      },
      desc: {
        'zh-CN': '<p>通过 <code>underline</code> 设置鼠标悬浮是否显示下划线。</p>',
        'en-US':
          '<p>When you hover the cursor over a link, the underline is displayed by default. If <code>underline</code> is set to false, the underline is not displayed when you focus. </p>'
      },
      codeFiles: ['focus-no-underline.vue']
    },
    {
      demoId: 'custom-icon',
      name: {
        'zh-CN': '自定义图标',
        'en-US': 'Custom Icon'
      },
      desc: {
        'zh-CN': '<p>通过属性 <code>icon</code>、默认插槽、<code>icon</code> 插槽都可以自定义图标。</p>',
        'en-US':
          '<p>Icon can be customized by attribute <code>icon</code>, default slot, and <code>icon</code> slot. </p>'
      },
      codeFiles: ['custom-icon.vue']
    },
    {
      demoId: 'config-href',
      name: {
        'zh-CN': '链接地址',
        'en-US': 'Link'
      },
      desc: {
        'zh-CN': '<p>通过 <code>href</code> 设置跳转连接，可配合原生属性 <code>target</code> 一起使用。</p>',
        'en-US':
          '<p>Use the <code>href</code> attribute to specify the URL to be redirected to. This attribute can be used together with the native attribute <code>target</code>. </p>'
      },
      codeFiles: ['config-href.vue']
    }
  ],
  hiddenDemo: {
    demoId: 'size',
    name: {
      'zh-CN': '尺寸',
      'en-US': 'Size'
    },
    desc: {
      'zh-CN': '<p>通过 <code>size</code> 属性设置尺寸，仅支持 <code>medium</code> 尺寸</p>',
      'en-US': '<p></p>'
    },
    codeFiles: ['size.vue']
  }
}
