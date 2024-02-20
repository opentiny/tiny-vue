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
        'zh-CN': '<p>通过 <code>v-model</code> 绑定变量，变量值对应 <code>label</code> 属性的值。</p>\n',
        'en-US':
          '<p>Bind variables through <code>v-model</code> , and the variable value corresponds to the value of the <code>label</code> attribute.</p>\n'
      },
      codeFiles: ['basic-usage.vue']
    },
    {
      demoId: 'radio-group',
      name: {
        'zh-CN': '单选框组',
        'en-US': 'Radio group'
      },
      desc: {
        'zh-CN':
          '<p> <code>radio-group</code> 可以将 <code>radio</code> 或者 <code>radio-button</code> 组合起来，通过 <code>v-modal</code> 绑定选中的值。</p>\n',
        'en-US': '<p>You can set the <code>border</code> attribute to add a border to an option button. </p>\n'
      },
      codeFiles: ['radio-group.vue']
    },
    {
      demoId: 'group-options',
      name: {
        'zh-CN': '单选组',
        'en-US': 'Profile Radio Group'
      },
      desc: {
        'zh-CN':
          '<p>通过 <code>options</code> 配置式渲染单选组。另外还提供 <code>type</code> 属性，配合 <code>options</code> 属性一起使用，默认值为 <code>radio</code> 。可以配置为 <code>button</code> ，配置后单选组将以按钮的形式展示。</p>\n',
        'en-US':
          '<p>Rendaer radio groups with <code>options</code> profile. In addition, the <code>type</code> attribute is provided, which is used together with the <code>options</code> attribute. The default value is <code>radio</code>. The option gooup is displayed as a <code>button</code>. </p>\n'
      },
      codeFiles: ['group-options.vue']
    },
    {
      demoId: 'with-border',
      name: {
        'zh-CN': '带有边框',
        'en-US': 'With borders'
      },
      desc: {
        'zh-CN': '<p>可通过设置 <code>border</code> 属性，给单选框增加边框。</p>\n',
        'en-US': '<p>You can set the <code>border</code> attribute to add a border to an option button. </p>\n'
      },
      codeFiles: ['with-border.vue']
    },
    {
      demoId: 'dynamic-disable',
      name: {
        'zh-CN': '禁用状态',
        'en-US': 'Disabled'
      },
      desc: {
        'zh-CN': '<p>通过 <code>disabled</code> 设置是否禁用单选框 。</p>\n',
        'en-US':
          '<p>Set the <code>disabled</code> attribute to enable the disabled state. The default value is false. </p>\n'
      },
      codeFiles: ['dynamic-disable.vue']
    },
    {
      demoId: 'vertical',
      name: {
        'zh-CN': '垂直布局',
        'en-US': 'vertical layout'
      },
      desc: {
        'zh-CN': '<p>可在 <code>radio-group</code> 组件上设置 <code>vertical</code> 属性，使单选框垂直布局。</p>\n',
        'en-US':
          '<p>You can set the <code>vertical</code> attribute on the  <code>radio-group</code> component to enable the vertical layout of the option buttons. </p>\n'
      },
      codeFiles: ['vertical.vue']
    },
    {
      demoId: 'active-color',
      name: {
        'zh-CN': '自定义颜色',
        'en-US': 'Custom color'
      },
      desc: {
        'zh-CN':
          '<p>通过 <code>text-color</code> 设置单选按钮组激活时的文本颜色，通过 <code>fill</code> 设置填充色和边框色。</p>\n',
        'en-US':
          'Set the text color when the radio button group is activated through <code>text color</code> , and set the fill color and border color through <code>fill</code> .</p>\n'
      },
      codeFiles: ['active-color.vue']
    },
    {
      demoId: 'radio-text',
      name: {
        'zh-CN': '文字内容',
        'en-US': 'Text Content'
      },
      desc: {
        'zh-CN':
          '<p>通过 <code>text</code> 属性或者默认插槽设置文字内容，插槽优先级大于 <code>text</code> 属性。若两者都没有，则使用 <code>label</code> 值作为文字内容。</p>\n',
        'en-US':
          '<pBy setting the text content through the <code>text</code> attribute or default slot, the slot priority is greater than the <code>text</code> attribute. If neither is present, use the <code>label</code> value as the text content. </p>\n'
      },
      codeFiles: ['radio-text.vue']
    },
    {
      demoId: 'radio-size',
      name: {
        'zh-CN': '尺寸',
        'en-US': 'Size Settings'
      },
      desc: {
        'zh-CN':
          '<p>可对按钮形式的 <code>radio</code> 或带有边框的 <code>radio</code> 设置 <code>size</code> 属性，以改变其尺寸，可选值有： <code>medium</code>  、<code>small</code>  、<code>mini</code> 。</p>\n',
        'en-US':
          '<p>You can set the <code>size</code> attribute for a radio with a button or a radio with a border to change its size. The options include medium, small, and mini. </p>\n'
      },
      codeFiles: ['radio-size.vue']
    },
    {
      demoId: 'default-slot',
      name: {
        'zh-CN': '默认插槽',
        'en-US': 'Default slot'
      },
      desc: {
        'zh-CN': '<p>通过 <code>default</code> 默认插槽自定义描述内容。</p>\n',
        'en-US': '<p>by <code>default</code> default slot list. </p>\n'
      },
      codeFiles: ['default-slot.vue']
    },
    {
      demoId: 'radio-events',
      name: {
        'zh-CN': '单选框事件',
        'en-US': 'Option button event'
      },
      desc: {
        'zh-CN':
          '<p>可在 <code>radio</code> 、 <code>radio-group</code> 组件上监听 <code>change</code> 事件，当绑定值变化时触发。</p>\n',
        'en-US':
          '<p>You can set the <code>change</code> event on the Radio and  <code>radio-group</code> components. The event is triggered when the bound value changes. The callback function is the selected radio label value. </p>\n'
      },
      codeFiles: ['radio-events.vue']
    },
    {
      demoId: 'display-only',
      name: {
        'zh-CN': '只读',
        'en-US': 'Display only'
      },
      desc: {
        'zh-CN':
          '<p>通过给 <code>radio</code> 或者 <code>radio-group</code> 组件添加 <code>display-only</code> 属性实现只读态。</p>',
        'en-US': '<p></p>'
      },
      codeFiles: ['display-only.vue']
    }
  ]
}
