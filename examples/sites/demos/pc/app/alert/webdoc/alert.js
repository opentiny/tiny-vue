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
        'zh-CN':
          '<p>通过 <code>description</code> 属性或者 <code>description</code> 插槽来设置提示内容，通过 <code>type</code> 设置不同的类型。</p>',
        'en-US':
          '<p>Set the prompt content through the <code>description</code> attribute or <code>description</code> slot, and set different types through <code>type</code> . </p>'
      },
      codeFiles: ['basic-usage.vue']
    },
    {
      demoId: 'size',
      name: {
        'zh-CN': '尺寸',
        'en-US': 'Size'
      },
      desc: {
        'zh-CN': '<p>通过 <code>size</code> 设置不同的尺寸，可选值： <code>normal</code> 、<code>large</code> 。</p>',
        'en-US':
          '<p>Set different sizes through <code>size</code> , with optional values: <code>normal, large</code> . </p>'
      },
      codeFiles: ['size.vue']
    },
    {
      demoId: 'title',
      name: {
        'zh-CN': '自定义标题',
        'en-US': 'Custom Title'
      },
      desc: {
        'zh-CN':
          '<p>当 <code>size</code> 为 <code>large</code> 时，通过 <code>title</code> 属性 或 <code>title</code> 插槽自定义标题。如不设置，默认标题根据对应的 <code>type</code> 显示。</p>',
        'en-US':
          '<p>When <code>size</code> is set to large, the title is displayed. You can set <code>title</code> or <code>slot</code> to customize the title. The default title is displayed according to the set <code>type</code> . </p>'
      },
      codeFiles: ['title.vue']
    },
    {
      demoId: 'center',
      name: {
        'zh-CN': '文字居中',
        'en-US': 'Center text'
      },
      desc: {
        'zh-CN': '<p>通过 <code>center</code> 设置文字显示居中。</p>',
        'en-US': '<p>You can use the <code>center</code> property to center the text. </p>'
      },
      codeFiles: ['center.vue']
    },
    {
      demoId: 'icon',
      name: {
        'zh-CN': '自定义警告图标',
        'en-US': 'Customized warning icon'
      },
      desc: {
        'zh-CN':
          '<p>通过 <code>icon</code> 设置自定义图标，默认会根据不同的 <code>type</code> 的值自动使用对应图标。</p>',
        'en-US':
          '<p>By setting custom icons through <code>icon</code> , the corresponding icons will be automatically used by default based on different <code>type</code> values.</p>'
      },
      codeFiles: ['icon.vue']
    },
    {
      demoId: 'slot-default',
      name: {
        'zh-CN': '自定义交互操作',
        'en-US': 'Customized Interaction'
      },
      desc: {
        'zh-CN': '<p>当 <code>size</code> 为 <code>large</code> 时，通过默认插槽自定义交互操作。</p>',
        'en-US':
          '<p>When <code>size</code> is <code>large</code> , set the default slot custom interaction operation. </p>'
      },
      codeFiles: ['slot-default.vue']
    },
    {
      demoId: 'show-icon',
      name: {
        'zh-CN': '是否显示图标',
        'en-US': 'Display icon'
      },
      desc: {
        'zh-CN': '<p>通过 <code>show-icon</code> 设置左侧图标是否显示。</p>',
        'en-US': '<p>Set whether the left icon is displayed by <code>show icon</code> .</p>'
      },
      codeFiles: ['show-icon.vue']
    },
    {
      demoId: 'custom-close',
      name: {
        'zh-CN': '关闭按钮',
        'en-US': 'custom close button'
      },
      desc: {
        'zh-CN':
          '<p>通过 <code>close-text</code> 设置关闭按钮文本，关闭告警后会触发 <code>close</code> 事件。<br />通过 <code>closable</code> 设置是否显示关闭按钮，没有关闭按钮，警告框将不可关闭。<br/>通过 <code>close</code> 插槽自定义关闭按钮，仅当 <code>closable</code> 为 <code>false</code> 时插槽有效，可自定义逻辑控制组件的显示、隐藏。</p>',
        'en-US':
          'Set the close button text through <code>close text</code> < Br/>Set whether to display the close button through <code>close</code> . If there is no close button, the warning box will not be able to be closed< By customizing the close button through the <code>close</code> slot, the slot is only valid when the <code>close</code> is <code>false</code> , and the display and hiding of logic control components can be customized.'
      },
      codeFiles: ['custom-close.vue']
    },
    {
      demoId: 'custom-class',
      name: {
        'zh-CN': '自定义类名',
        'en-US': 'custom close button'
      },
      desc: {
        'zh-CN': '<p>通过 <code>custom-class</code> 设置自定义类名。</p>',
        'en-US': 'Set the user-defined class name through <code>custom-class</code>.'
      },
      codeFiles: ['custom-class.vue']
    }
  ]
}
