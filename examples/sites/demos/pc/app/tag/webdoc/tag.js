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
        'zh-CN': '通过 <code>size</code> 设置尺寸大小，可选值： <code>(medium / small / mini)</code> 。',
        'en-US': 'Set the size through <code>size</code> , with optional values: <code>(medium/small/mini)</code> .'
      },
      codeFiles: ['basic-usage.vue']
    },
    {
      demoId: 'content',
      name: {
        'zh-CN': '配置式',
        'en-US': 'Bind Value'
      },
      desc: {
        'zh-CN': '通过 <code>value</code> 设置标签值。',
        'en-US': 'Set label values through <code>value</code> . '
      },
      codeFiles: ['content.vue']
    },
    {
      demoId: 'color-border',
      name: {
        'zh-CN': '颜色与边框',
        'en-US': 'Color and border'
      },
      desc: {
        'zh-CN': `通过 <code>hit</code> 设置边框；<code>color</code> 设置颜色，可使用预设值，也可自定义颜色值；当自定义颜色值为字符串则只能设置背景色；若为数组则第一个值为背景色，第二个为文本色。`,
        'en-US': `Use <code>hit</code> to set the border. <code>color</code> Set the color. You can use the preset value or customize the color value. If the value of Custom Color is a character string, only the background color can be set. If it is an array, the first value is the background color and the second is the text color.`
      },
      codeFiles: ['color-border.vue']
    },
    {
      demoId: 'effect',
      name: {
        'zh-CN': '主题',
        'en-US': 'Subject'
      },
      desc: {
        'zh-CN':
          '通过 <code>effect</code> 设置主题，可选值： <code>(dark / light / plain)</code> ； <code>type</code> 设置类型，可选值： <code>(success / info / warning / danger)</code> 。',
        'en-US':
          'Set the theme through <code>effect</code> , with optional values: <code>(dark/light/plain)</code> ; <code>type</code> Set the type, optional values: <code>(success/info/warning/danger)</code> .'
      },
      codeFiles: ['effect.vue']
    },
    {
      demoId: 'disabled',
      name: {
        'zh-CN': '禁用',
        'en-US': 'Disabled'
      },
      desc: {
        'zh-CN': '通过 <code>disabled</code> 设置禁用。',
        'en-US': 'You can set <code>disabled</code> to disable. '
      },
      codeFiles: ['disabled.vue']
    },
    {
      demoId: 'delete',
      name: {
        'zh-CN': '删除操作',
        'en-US': 'Delete'
      },
      desc: {
        'zh-CN':
          '通过 <code>closable</code> 设置展示关闭按钮， <code>before-delete</code> 设置删除前的操作，可以在此钩子中做提示或确认；<code>close</code> 监听关闭按钮点击事件，做删除操作。',
        'en-US':
          'Set the display close button through<code>close</code>, and<code>before-delete</code>to set the operation before deletion, which can be prompted or confirmed in this hook< Code>close</code>Listen to the close button click event and perform the deletion operation.'
      },
      codeFiles: ['delete.vue']
    },
    {
      demoId: 'create',
      name: {
        'zh-CN': '动态编辑',
        'en-US': 'Dynamic Edit'
      },
      desc: {
        'zh-CN':
          '添加新标签：监听 <code>+ New Tag</code> 元素点击事件，打开 <code>input</code> 输入框，监听输入框事件做添加操作；<br />\n          修改旧标签：监听旧标签的双击事件，打开 <code>input</code> 输入框，监听输入框事件做修改操作。',
        'en-US':
          'Add a new tag: listen for <code>+New Tag</code> element click events, open the <code>input</code> input box, and listen for input box events to add<br/>\n        Modify old tags: listen for double click events on old tags, open the <code>input</code> input box, and listen for input box events to make modifications.'
      },
      codeFiles: ['create.vue']
    },
    {
      demoId: 'slot-default',
      name: {
        'zh-CN': '图标型',
        'en-US': 'Icon type'
      },
      desc: {
        'zh-CN': '通过 <code>default</code> 默认插槽自定义标签内容，生成图标标签。',
        'en-US':
          'Generate icon labels by customizing the label content for the default slot through <code>default</code> .'
      },
      codeFiles: ['slot-default.vue']
    },
    {
      demoId: 'tag-event-click',
      name: {
        'zh-CN': '点击事件',
        'en-US': 'Click Event'
      },
      desc: {
        'zh-CN': '通过 <code>click</code> 监听点击事件。',
        'en-US': 'Listen for click events through <code>click</code> .'
      },
      codeFiles: ['tag-event-click.vue']
    }
  ]
}
