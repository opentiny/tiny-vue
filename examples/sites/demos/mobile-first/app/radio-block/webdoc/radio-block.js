export default {
  column: '2',
  owner: '',
  demos: [
    {
      demoId: 'basic-usage',
      name: {
        'zh-CN': '基本用法',
        'en-US': 'basic usage'
      },
      desc: {
        'zh-CN': `通过 <code>v-model</code> 绑定变量，设置的变量值为默认选中的 Radio，变量值对应 <code>label</code> 属性的值。<br>
        通过 <code>text</code> 也可以配置显示文本，与默认插槽配置纯文本的结果一致<br>
        <code>label</code> 可以是 <code>String、Number 或 Boolean</code>。</p>`,
        'en-US': '<p>button type</p>'
      },
      codeFiles: ['basic-usage.vue']
    },

    {
      demoId: 'dynamic-disable',
      name: {
        'zh-CN': '禁用状态',
        'en-US': 'events'
      },
      desc: {
        'zh-CN': `<p>设置 <code>disabled</code> 属性即可启动禁用状态，默认为 false 。<p>`,
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['dynamic-disable.vue']
    },
    {
      demoId: 'radio-button',
      name: {
        'zh-CN': '按钮内容',
        'en-US': 'events'
      },
      desc: {
        'zh-CN': '<p>通过 <code>label</code> 属性可以设置 Radio 的内容<p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['radio-button.vue']
    },
    {
      demoId: 'name',
      name: {
        'zh-CN': 'name',
        'en-US': 'events'
      },
      desc: {
        'zh-CN': '<p>通过 <code>name</code> 属性可以设置原生 name 属性。<p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['radio-button.vue']
    },
    {
      demoId: 'radio-size',
      name: {
        'zh-CN': '单选块尺寸设置',
        'en-US': 'events'
      },
      desc: {
        'zh-CN':
          '<p>在 <code>radio-group</code> 组件上配置 <code>size</code> 属性设置单选块尺寸，可选值：<code>medium(默认)、small</code><p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['radio-size.vue']
    },
    {
      demoId: 'radio-events',
      name: {
        'zh-CN': '单选框事件',
        'en-US': 'events'
      },
      desc: {
        'zh-CN':
          '<p>可在 Radio、RadioGroup 组件上设置 `change` 事件，当绑定值变化时触发，回调函数为选中的 Radio label 值。<p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['radio-events.vue']
    },
    {
      demoId: 'radio-tips',
      name: {
        'zh-CN': '配置 Tips',
        'en-US': 'events'
      },
      desc: {
        'zh-CN': `<p>通过添加<code>show-tips</code>属性设置是否展示 tips 提示图标，通过添加<code>tip-content</code>属性设置 tips 内容<br>
        仅支持通过 <code>label</code> 属性可以设置 <code>Radio</code> 的内容时生效，自定义插槽下不生效<p>`,
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['radio-tips.vue']
    }
  ],
  apis: []
}
