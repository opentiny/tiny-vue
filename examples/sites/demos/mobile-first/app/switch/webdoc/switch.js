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
        'zh-CN': '<p></p>',
        'en-US': '<p>button type</p>'
      },
      codeFiles: ['basic-usage.vue']
    },
    {
      demoId: 'mini-mode',
      name: {
        'zh-CN': '迷你尺寸',
        'en-US': 'events'
      },
      desc: {
        'zh-CN':
          '<p>设置是否为 mini 模式，默认为 false。当设置 `mini` 为 `true` 且处于移动端时，开关会变为 mini 尺寸。<p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['mini-mode.vue']
    },
    {
      demoId: 'icon-mode',
      name: {
        'zh-CN': '图标开关',
        'en-US': 'events'
      },
      desc: {
        'zh-CN': '<p>设置是否显示为图标模式。当设置 `types` 为 `icon` 时，显示为带图标的开关。<p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['icon-mode.vue']
    },
    {
      demoId: 'word-mode',
      name: {
        'zh-CN': '文本模式',
        'en-US': 'events'
      },
      desc: {
        'zh-CN': '<p>设置是否显示为文字模式。当设置 `types` 为 `word` 时，显示为带文字的开关。<p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['word-mode.vue']
    },
    {
      demoId: 'loading-mode',
      name: {
        'zh-CN': '加载状态开关',
        'en-US': 'events'
      },
      desc: {
        'zh-CN': '<p>设置是否显示为加载模式。当设置 `types` 为 `loading` 时，显示为加载态的开关。<p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['loading-mode.vue']
    },
    {
      demoId: 'dynamic-disable',
      name: {
        'zh-CN': '禁用状态',
        'en-US': 'events'
      },
      desc: {
        'zh-CN': '<p>`disable` 属性表示的是当前状态是无法被使用的，默认值为 false(true/false)。<p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['dynamic-disable.vue']
    },
    {
      demoId: 'custom-open-close',
      name: {
        'zh-CN': '自定义开关显示',
        'en-US': 'events'
      },
      desc: {
        'zh-CN': '<p>在文字模式中，通过具名插槽 open 和 close 自定义 Switch 显示。<p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['custom-open-close.vue']
    },
    {
      demoId: 'custom-true-false-value',
      name: {
        'zh-CN': '自定义开关取值',
        'en-US': 'events'
      },
      desc: {
        'zh-CN':
          '<p>`通过 true-value 和 false-value 属性设置 Switch 在开和关状态下的不同取值。<br>false-value`：开关处于关闭状态时的取值; `true-value`：开关处于开启状态时的取值；<br/>当 v-model 中定义的属性名为`value`时，可以通过`false-value`和`true-value`自定义关闭和开启状态下的取值<p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['custom-true-false-value.vue']
    }
  ]
}
