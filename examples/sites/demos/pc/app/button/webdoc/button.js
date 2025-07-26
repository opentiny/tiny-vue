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
          '通过 <code>type</code> 设置按钮类型， <code>plain</code> 设置是否为朴素按钮，<code>round</code> 设置是否为圆角按钮， <code>circle</code> 设置是否为圆形按钮。',
        'en-US':
          'Run the <code>type</code> command to set the button type. The <code>plain</code> command is used to set whether it is a plain button, <code>round</code> command is used to set whether it is a rounded button, and <code>circle</code> command is used to set whether it is a round button.'
      },
      codeFiles: ['basic-usage.vue']
    },
    {
      demoId: 'ghost',
      name: {
        'zh-CN': '幽灵按钮',
        'en-US': 'Ghost button'
      },
      desc: {
        'zh-CN': '<p>通过 <code>ghost</code> 设置幽灵按钮。</p>',
        'en-US': '<p>Set up ghost buttons via <code>ghost</code>.</p>'
      },
      codeFiles: ['ghost.vue']
    },
    {
      demoId: 'dynamic-disabled',
      name: {
        'zh-CN': '动态禁用按钮',
        'en-US': 'Dynamic Disable Button'
      },
      desc: {
        'zh-CN': '<p>通过 <code>disabled</code> 设置是否禁用按钮。</p>',
        'en-US': '<p>Set whether to disable the button through <code>disabled</code> . </p>'
      },
      codeFiles: ['dynamic-disabled.vue']
    },
    {
      demoId: 'icon',
      name: {
        'zh-CN': '图标按钮',
        'en-US': 'Icon Button'
      },
      desc: {
        'zh-CN': '通过 <code>icon</code> 属性，设置按钮展示图标。<code>custom-style</code>属性设置按钮样式。',
        'en-US':
          'Display icons and receive an icon component through the <code>icon</code> settings button. The <code>custom-style</code> property sets the button style.'
      },
      codeFiles: ['icon.vue']
    },
    {
      demoId: 'text',
      name: {
        'zh-CN': '文字按钮',
        'en-US': 'Text button'
      },
      desc: {
        'zh-CN':
          '<p>将 <code>type</code> 属性设置为 <code>text</code> 后展示形式为文字按钮，可通过 <code>text</code> 设置按钮文本。</p>',
        'en-US':
          '<p>Set the <code>type</code> attribute to <code>text</code> and display it as a text button. The button text can be set through <code>text</code> .</p>'
      },
      codeFiles: ['text.vue']
    },
    {
      demoId: 'image',
      name: {
        'zh-CN': '图片按钮',
        'en-US': 'Picture button'
      },
      desc: {
        'zh-CN': '<p>通过默认插槽自定义按钮内容，例如引入图片。</p>',
        'en-US': '<p>Customize button content through default slots, such as introducing images.</p>'
      },
      codeFiles: ['image.vue']
    },
    {
      demoId: 'loading',
      name: {
        'zh-CN': '显示加载中',
        'en-US': 'Display Loading'
      },
      desc: {
        'zh-CN': '<p>通过 <code>loading</code> 设置按钮是否为加载中的样式。</p>',
        'en-US': '<p>Set whether the button is in the loading style by <code>loading</code> . </p>'
      },
      codeFiles: ['loading.vue']
    },
    {
      demoId: 'size',
      name: {
        'zh-CN': '尺寸',
        'en-US': 'Dimension'
      },
      desc: {
        'zh-CN':
          '<p>通过 <code>size</code> 设置按钮尺寸，可选值为 <code>large</code> 、<code>medium</code> 、<code>small</code> 、<code>mini</code> 。不设置时为默认尺寸。</p>',
        'en-US':
          '<p>Set the button size through <code>size</code> , with optional values of <code>large</code> , <code>medium</code> , <code>small</code> , <code>mini</code> . Default size when not set.</p>'
      },
      codeFiles: ['size.vue']
    },
    {
      demoId: 'reset-time',
      name: {
        'zh-CN': '防止重复点击',
        'en-US': 'Prevent duplicate clicks'
      },
      desc: {
        'zh-CN':
          '<p>通过 <code>reset-time</code> 设置单击后按钮禁用的时长，默认禁用时长为 1000 毫秒，可用于防止按钮连续点击出现表单重复提交的问题。</p>',
        'en-US':
          '<p>You can use the <code>reset-time</code> to set the duration for which the button is disabled. The default duration is 1000 ms. This parameter can be used to prevent repeated submission of the form when you click the button continuously. </p>'
      },
      codeFiles: ['reset-time.vue']
    },
    {
      demoId: 'autofocus',
      name: {
        'zh-CN': '默认聚焦',
        'en-US': 'Default Focus'
      },
      desc: {
        'zh-CN': '<p>通过 <code>autofocus</code> 设置按钮原生属性，是否默认为聚焦状态。</p>',
        'en-US':
          '<p>Set the button native properties to default to the focused state through <code>autofocus</code> .</p>'
      },
      codeFiles: ['autofocus.vue']
    },
    {
      demoId: 'click',
      name: {
        'zh-CN': '点击事件',
        'en-US': 'Event'
      },
      desc: {
        'zh-CN': '<p>当点击按钮后会触发 <code>click</code> 事件。</p>',
        'en-US': '<p>When the button is clicked, the <code>click</code> event will be triggered. </p>'
      },
      codeFiles: ['click.vue']
    }
  ],
  show: true,
  cloud: true,
  features: [
    {
      id: 'type',
      name: '按钮类型',
      support: {
        value: true
      },
      description: '支持主要按钮、次要按钮、成功按钮、警告按钮、危险按钮、信息按钮、文字按钮7种类型。',
      cloud: {
        value: true,
        remark: '规范只支持主要按钮、次要按钮、危险按钮、文本按钮4种，不支持成功按钮、警告按钮、信息按钮。'
      },
      'e2e-test': true,
      'unit-test': true,
      apis: ['type'],
      demos: ['basic-usage']
    },
    {
      id: 'round',
      name: '圆角按钮',
      support: {
        value: true
      },
      description: '按钮两边都是半圆形。',
      cloud: {
        value: true
      },
      'e2e-test': true,
      'unit-test': true,
      apis: ['round'],
      demos: ['round']
    },
    {
      id: 'circle',
      name: '圆形按钮',
      support: {
        value: true
      },
      description: '整个按钮是圆形，一般在里面放一个图标。',
      cloud: {
        value: false
      },
      'e2e-test': true,
      'unit-test': true,
      apis: ['circle'],
      demos: ['circle']
    },
    {
      id: 'ghost',
      name: '幽灵按钮',
      support: {
        value: true
      },
      description: '幽灵按钮的背景色跟随背景变化。',
      cloud: {
        value: true
      },
      'e2e-test': true,
      'unit-test': false,
      apis: ['ghost'],
      demos: ['ghost']
    },
    {
      id: 'disabled',
      name: '禁用状态',
      support: {
        value: true
      },
      description: '禁用状态下的按钮不可点击。',
      cloud: {
        value: true
      },
      'e2e-test': true,
      'unit-test': true,
      apis: ['disabled'],
      demos: ['dynamic-disabled']
    },
    {
      id: 'icon',
      name: '图标按钮',
      support: {
        value: true
      },
      description: '给按钮加个小图标。',
      cloud: {
        value: true
      },
      'e2e-test': true,
      'unit-test': true,
      apis: ['icon'],
      demos: ['icon']
    },
    {
      id: 'loading',
      name: '加载中状态',
      support: {
        value: true
      },
      description: '禁用状态和图标按钮的组合特性。',
      cloud: {
        value: true
      },
      'e2e-test': true,
      'unit-test': true,
      apis: ['loading'],
      demos: ['loading']
    },
    {
      id: 'size',
      name: '尺寸',
      support: {
        value: true
      },
      description: '支持超大、大、常规(默认)、小、迷你5种尺寸。',
      cloud: {
        value: true
      },
      'e2e-test': true,
      'unit-test': true,
      apis: ['size'],
      demos: ['size']
    },
    {
      id: 'prevent-duplicate-click',
      name: '防止重复点击',
      support: {
        value: true
      },
      description: '点击之后按钮变成禁用态，无法连续点击，可以设置点击之后按钮禁用的时长',
      cloud: {
        value: false
      },
      'e2e-test': true,
      'unit-test': false,
      apis: ['reset-time'],
      demos: ['reset-time']
    }
  ]
}
