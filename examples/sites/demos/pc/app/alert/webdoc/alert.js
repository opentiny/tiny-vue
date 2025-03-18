export default {
  column: '2',
  owner: '',
  show: true,
  cloud: true,
  demos: [
    {
      demoId: 'basic-usage',
      name: {
        'zh-CN': '基本用法',
        'en-US': 'Basic Usage'
      },
      desc: {
        'zh-CN':
          '<p>通过 <code>description</code> 属性或者 <code>description</code> 插槽来设置提示内容。<br> 通过 <code>type</code> 属性，设置不同的类型。</p>',
        'en-US':
          '<p>Set the prompt content through the <code>description</code> attribute or <code>description</code> slot, and set different types through <code>type</code> . </p>'
      },
      codeFiles: ['basic-usage.vue']
    },
    {
      demoId: 'size',
      name: {
        'zh-CN': '尺寸模式',
        'en-US': 'Size Mode'
      },
      desc: {
        'zh-CN': `
          通过 <code>size</code> 设置不同的尺寸模式，可选值： <code>normal</code> 、<code>large</code> 。<br>
          <div class="tip custom-block">
            <p class="custom-block-title"> 尺寸模式区别 </p>
            <ul>
              <li> normal 模式下，不会显示标题和交互操作的区域，相当于简单模式。</li> 
              <li> large 模式下，显示全部元素，相当于完整模式。</li> 
            </ul>
          </div>
        `,
        'en-US': `
          Use <code>size</code> to set different size modes, optional values: <code>normal</code>, <code>large</code>. <br>
          <div class="tip custom-block">
          <p class="custom-block-title"> Size pattern difference </p>
          <ul>
            <li> normal mode, the header and interactive areas are not displayed, which is equivalent to simple mode. </li>
            <li> large mode, all elements are displayed, equivalent to the full mode. </li>
          </ul>
          </div>
        `
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
        'zh-CN': `当 <code>size</code> 为 <code>large</code> 时，通过 <code>title </code>属性或 <code>title </code>插槽，可以自定义组件的标题 ，通过 <code> show-title </code>属性控制标题是否显示<br>
           如果未自定义标题，会根据对应的 <code>type</code> 显示相应的默认标题。`,
        'en-US':
          '<p>When <code>size</code> is set to large, the title is displayed. You can set <code>title</code> or <code>slot</code> to customize the title. <br>The default title is displayed according to the set <code>type</code> . </p>'
      },
      codeFiles: ['title.vue']
    },
    {
      demoId: 'center',
      name: {
        'zh-CN': '内容居中',
        'en-US': 'Center content'
      },
      desc: {
        'zh-CN': '<p>通过 <code>center</code> 设置内容显示居中。</p>',
        'en-US': '<p>You can use the <code>center</code> property to center the text. </p>'
      },
      codeFiles: ['center.vue']
    },
    {
      demoId: 'icon',
      name: {
        'zh-CN': '自定义警告图标',
        'en-US': 'Customized alert icon'
      },
      desc: {
        'zh-CN':
          '通过 <code>icon </code> 属性设置自定义图标，如果未自定义图标，默认会根据不同的 <code>type</code> 的值自动使用对应图标。',
        'en-US':
          'You can use the <code>icon </code> property to set a custom icon. If no custom icon is specified, the icon is automatically used according to the <code>type</code> value.'
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
        'zh-CN':
          '<p>当 <code>size</code> 为 <code>large</code> 时，通过默认插槽自定义交互操作区域，显示在  <code>description</code> 值的下方。</p>',
        'en-US':
          '<p>When <code>size</code> is <code>large</code> , set the default slot custom interaction operation,displayed below the <code>description</code> value </p>'
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
        'zh-CN': '通过 <code>show-icon</code> 属性，设置左侧图标是否显示。',
        'en-US': 'Use the <code>show-icon</code> property to set whether the icon on the left is displayed.'
      },
      codeFiles: ['show-icon.vue']
    },
    {
      demoId: 'custom-close',
      name: {
        'zh-CN': '自定义关闭按钮',
        'en-US': 'custom close button'
      },
      desc: {
        'zh-CN': `
          通过 <code>closable</code> 属性，启用内置的关闭图标，默认值为 <code>true</code>。<br />
          通过 <code>close-text</code> 设置关闭按钮显示为文本，仅当<code>closable</code>为<code>true</code>时生效。<br />
          将 <code>closable</code> 设置为 <code>false</code> 时，取消内置的关闭功能。此时可通过 <code>close</code> 插槽，完全自定义关闭按钮区域的展示。
          <div class="tip custom-block">
            <p class="custom-block-title"> 组件关闭或隐藏时，会有渐隐动画，详见示例！ </p>
          </div>
        `,
        'en-US': `
          Enable the built-in close icon with the <code>closable</code> property, which defaults to <code>true</code>. <br />
          Set the close button text by <code>close-text</code> instead of the close icon, effective only if <code>closable</code> is <code>true</code>. <br />
          Unblock the built-in closing function when <code>closable</code> is set to <code>false</code>. At this point, you can completely customize the presentation of the close button area via the <code>close</code> slot.
          <div class="tip custom-block">
            <p class="custom-block-title"> 
              When the component is closed or hidden, there will be a fade animation, see the example! 
            </p>
          </div>
        `
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
  ],
  features: [
    {
      id: 'type',
      name: '类型',
      support: {
        value: true
      },
      description: '通过 type 属性设置不同的提示类型。',
      cloud: {
        value: true
      },
      apis: ['type'],
      demos: ['basic-usage']
    },
    {
      id: 'size',
      name: '尺寸模式',
      support: {
        value: true
      },
      description: '通过 size 设置不同的尺寸模式，可选值：normal（简单模式）、large（完整模式）。',
      cloud: {
        value: true
      },
      apis: ['size'],
      demos: ['size']
    },
    {
      id: 'title',
      name: '标题设置',
      support: {
        value: true
      },
      description: '当 size 为 large 时，通过 title 属性或 title 插槽自定义组件标题，通过 show-title 控制标题显示。',
      cloud: {
        value: true
      },
      apis: ['title', 'show-title'],
      demos: ['title']
    },
    {
      id: 'description',
      name: '内容设置',
      support: {
        value: true
      },
      description: '通过 description 属性或 description 插槽设置提示内容。',
      cloud: {
        value: true
      },
      apis: ['description'],
      demos: ['basic-usage']
    },
    {
      id: 'center',
      name: '内容居中',
      support: {
        value: true
      },
      description: '通过 center 属性设置内容显示居中。',
      cloud: {
        value: true
      },
      apis: ['center'],
      demos: ['center']
    },
    {
      id: 'icon',
      name: '图标设置',
      support: {
        value: true
      },
      description: '通过 icon 属性设置自定义图标，未设置时根据 type 自动使用对应图标。',
      cloud: {
        value: true
      },
      apis: ['icon'],
      demos: ['icon']
    },
    {
      id: 'show-icon',
      name: '图标显示控制',
      support: {
        value: true
      },
      description: '通过 show-icon 属性控制左侧图标是否显示。',
      cloud: {
        value: true
      },
      apis: ['show-icon'],
      demos: ['show-icon']
    },
    {
      id: 'closable',
      name: '关闭功能',
      support: {
        value: true
      },
      description:
        '通过 closable 属性启用内置关闭图标，通过 close-text 设置关闭按钮文本，支持通过 close 插槽自定义关闭按钮。',
      cloud: {
        value: true
      },
      apis: ['closable', 'close-text'],
      demos: ['custom-close']
    },
    {
      id: 'custom-class',
      name: '自定义类名',
      support: {
        value: true
      },
      description: '通过 custom-class 设置自定义类名。',
      cloud: {
        value: true
      },
      apis: ['custom-class'],
      demos: ['custom-class']
    },
    {
      id: 'slot',
      name: '插槽功能',
      support: {
        value: true
      },
      description: '支持通过默认插槽自定义交互操作区域，通过 title 插槽自定义标题，通过 close 插槽自定义关闭按钮。',
      cloud: {
        value: true
      },
      apis: ['slot-default', 'slot-title', 'slot-close'],
      demos: ['slot-default', 'custom-close']
    }
  ]
}
