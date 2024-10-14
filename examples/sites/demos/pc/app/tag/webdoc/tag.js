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
      demoId: 'color-border',
      name: {
        'zh-CN': '颜色与边框',
        'en-US': 'Color and border'
      },
      desc: {
        'zh-CN': `
        通过 <code>hit</code> 设置边框；<br>
        通过 <code>color</code> 设置颜色，可使用预设值，也可自定义颜色值；当自定义颜色值为字符串则只能设置背景色；若为数组则第一个值为背景色，第二个为文本色。<br>
        <div class="tip custom-block">
          避免同时使用  <code>color</code> 和  <code>type</code> 属性！
        </div>
        `,
        'en-US': `
          Set the border by <code>hit</code>; <br>
          Use <code>color</code> to set the color. You can use the preset value or customize the color value. When the custom color value is a string, only the background color can be set; If it is an array, the first value is the background color, and the second value is the text color. <br>
          <div class="tip custom-block">
            Avoid using both <code>color</code> and <code>type</code> properties!
          </div>
        `
      },
      codeFiles: ['color-border.vue']
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
      demoId: 'slot-default',
      name: {
        'zh-CN': '默认插槽',
        'en-US': 'Default slot'
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
