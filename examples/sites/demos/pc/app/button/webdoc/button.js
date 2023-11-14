export default {
  column: '2',
  owner: '',
  demos: [
    {
      'demoId': 'basic-usage',
      'name': { 'zh-CN': '基本用法', 'en-US': 'Basic Usage' },
      'desc': {
        'zh-CN':
          '<p>通过 <code>type</code> 设置按钮类型， <code>plain</code> 设置是否为朴素按钮， <code>round</code> 设置是否为圆角按钮， <code>circle</code> 设置是否为圆形按钮。</p>',
        'en-US':
          '<p>Set the button type through <code>type</code> , whether it is a plain button, whether it is a rounded button, and whether it is a circular button.</p>'
      },
      'codeFiles': ['basic-usage.vue']
    },
    {
      'demoId': 'dynamic-disabled',
      'name': { 'zh-CN': '动态禁用按钮', 'en-US': 'Dynamic Disable Button' },
      'desc': {
        'zh-CN': '<p>通过 <code>disabled</code> 设置是否禁用按钮。</p>',
        'en-US': '<p>Set whether to disable the button through <code>disabled</code> . </p>'
      },
      'codeFiles': ['dynamic-disabled.vue']
    },
    {
      'demoId': 'icon',
      'name': { 'zh-CN': '图标按钮', 'en-US': 'Icon Button' },
      'desc': {
        'zh-CN':
          '<p>通过 <code>icon</code> 设置按钮展示图标， 接收一个图标组件。</p><div class="tip custom-block"><p class="custom-block-title">Icon 图标用法</p><p>先从 <code>@opentiny/vue-icon</code> 中导入需要的 Icon，执行Icon函数得到Icon组件。然后在模板中通过 <code>icon</code> 属性进行引用。</p>',
        'en-US':
          '<p>Display icons and receive an icon component through the <code>icon</code> settings button</ p> <div class="tip custom block"><p class="custom block title">Icon icon usage</p><p>First, import the required Icon from <code>@ opentiny/vue icon</code> , and execute the Icon function to obtain the Icon component. Then refer to it in the template through the <code>icon</code> attribute.</p>'
      },
      'codeFiles': ['icon.vue']
    },
    {
      'demoId': 'text',
      'name': { 'zh-CN': '文字按钮', 'en-US': 'Text button' },
      'desc': {
        'zh-CN':
          '<p>将 <code>type</code> 属性设置为 <code>text</code> 后展示形式为文字按钮，可通过 <code>text</code> 设置按钮文本。</p>',
        'en-US':
          '<p>Set the <code>type</code> attribute to <code>text</code> and display it as a text button. The button text can be set through <code>text</code> .</p>'
      },
      'codeFiles': ['text.vue']
    },
    {
      'demoId': 'image',
      'name': { 'zh-CN': '图片按钮', 'en-US': 'Picture button' },
      'desc': {
        'zh-CN': '<p>通过默认插槽自定义按钮内容，例如引入图片。</p>',
        'en-US': '<p>Customize button content through default slots, such as introducing images.</p>'
      },
      'codeFiles': ['image.vue']
    },
    {
      'demoId': 'loading',
      'name': { 'zh-CN': '显示加载中', 'en-US': 'Display Loading' },
      'desc': {
        'zh-CN': '<p>通过 <code>loading</code> 设置按钮是否为加载中的样式。</p>',
        'en-US': '<p>Set whether the button is in the loading style by <code>loading</code> . </p>'
      },
      'codeFiles': ['loading.vue']
    },
    {
      'demoId': 'size',
      'name': { 'zh-CN': '尺寸', 'en-US': 'Dimension' },
      'desc': {
        'zh-CN':
          '<p>通过 <code>size</code> 设置按钮尺寸，可选值为 <code>large</code> 、 <code>medium</code> 、 <code>small</code> 、 <code>mini</code> 。不设置时为默认尺寸。</p>',
        'en-US':
          '<p>Set the button size through <code>size</code> , with optional values of <code>large</code> , <code>medium</code> , <code>small</code> , <code>mini</code> . Default size when not set.</p>'
      },
      'codeFiles': ['size.vue']
    },
    {
      'demoId': 'reset-time',
      'name': { 'zh-CN': '防止重复点击', 'en-US': 'Prevent duplicate clicks' },
      'desc': {
        'zh-CN':
          '<p>通过 <code>reset-time</code> 设置单击后按钮禁用的时长，默认禁用时长为 1000 毫秒，可用于防止按钮连续点击出现表单重复提交的问题。</p>',
        'en-US':
          '<p>You can use the <code>reset-time</code> to set the duration for which the button is disabled. The default duration is 1000 ms. This parameter can be used to prevent repeated submission of the form when you click the button continuously. </p>'
      },
      'codeFiles': ['reset-time.vue']
    },
    {
      'demoId': 'autofocus',
      'name': { 'zh-CN': '默认聚焦', 'en-US': 'Default Focus' },
      'desc': {
        'zh-CN': '<p>通过 <code>autofocus</code> 设置按钮原生属性，是否默认为聚焦状态。</p>',
        'en-US':
          '<p>Set the button native properties to default to the focused state through <code>autofocus</code> .</p>'
      },
      'codeFiles': ['autofocus.vue']
    },
    {
      'demoId': 'click',
      'name': { 'zh-CN': '点击事件', 'en-US': 'Event' },
      'desc': {
        'zh-CN': '<p>当点击按钮后会触发 <code>click</code> 事件。</p>',
        'en-US': '<p>When the button is clicked, the <code>click</code> event will be triggered. </p>'
      },
      'codeFiles': ['click.vue']
    }
  ],
  apis: [
    {
      'name': 'button',
      'type': 'component',
      'props': [
        {
          'name': 'autofocus',
          'type': 'boolean',
          'defaultValue': 'false',
          'desc': {
            'zh-CN': '是否默认聚焦',
            'en-US': 'Whether to focus by default'
          },
          'demoId': 'autofocus'
        },
        {
          'name': 'circle',
          'type': 'boolean',
          'defaultValue': 'false',
          'desc': {
            'zh-CN': '是否圆形按钮',
            'en-US': 'Round button'
          },
          'demoId': 'basic-usage'
        },
        {
          'name': 'disabled',
          'type': 'boolean',
          'defaultValue': 'false',
          'desc': {
            'zh-CN': '按钮是否被禁用',
            'en-US': 'Sets whether the button is disabled'
          },
          'demoId': 'dynamic-disabled'
        },
        {
          'name': 'icon',
          'type': 'Component',
          'defaultValue': '',
          'desc': {
            'zh-CN': '按钮展示的图标，接收为Icon组件',
            'en-US': 'The icon displayed by the button is received as an Icon component'
          },
          'demoId': 'icon'
        },
        {
          'name': 'loading',
          'type': 'boolean',
          'defaultValue': 'false',
          'desc': {
            'zh-CN': '是否加载中状态',
            'en-US': 'Loading status'
          },
          'demoId': 'loading'
        },
        {
          'name': 'native-type',
          'type': 'button | submit | reset',
          'defaultValue': 'button',
          'desc': {
            'zh-CN': '对应按钮原生 type 属性',
            'en-US': 'Set the button native type attribute'
          },
          'demoId': ''
        },
        {
          'name': 'plain',
          'type': 'boolean',
          'defaultValue': 'false',
          'desc': {
            'zh-CN': '是否朴素按钮',
            'en-US': 'Simple button'
          },
          'demoId': 'basic-usage'
        },
        {
          'name': 'reset-time',
          'type': 'number',
          'defaultValue': '1000',
          'desc': {
            'zh-CN': '设置按钮禁用时间，防止重复提交，单位毫秒',
            'en-US': 'Set the button disable time, in milliseconds, to prevent repeated submission'
          },
          'demoId': 'reset-time'
        },
        {
          'name': 'round',
          'type': 'boolean',
          'defaultValue': 'false',
          'desc': {
            'zh-CN': '是否圆角按钮',
            'en-US': 'Whether to round the corner button'
          },
          'demoId': 'basic-usage'
        },
        {
          'name': 'size',
          'type': 'large | medium | small | mini',
          'defaultValue': '',
          'desc': {
            'zh-CN': '定义按钮尺寸',
            'en-US': 'Define the button size'
          },
          'demoId': 'size'
        },
        {
          'name': 'text',
          'type': 'string',
          'defaultValue': '',
          'desc': {
            'zh-CN': '设置按钮显示的文本',
            'en-US': 'Set the text displayed by the button'
          },
          'demoId': 'text'
        },
        {
          'name': 'type',
          'type': 'primary | success | warning | danger | info | text',
          'defaultValue': '',
          'desc': {
            'zh-CN': '展示按钮不同的状态，设置为text则展示为文本按钮',
            'en-US': 'Display different states of buttons, set to text to display as text buttons'
          },
          'demoId': 'basic-usage'
        }
      ],
      'events': [
        {
          'name': 'click',
          'type': '(event: PointEvent) => void',
          'defaultValue': '',
          'desc': {
            'zh-CN': '当按钮被点击时触发的回调函数',
            'en-US': 'Sets the callback function triggered when a button is clicked'
          },
          'demoId': 'click'
        }
      ],
      'slots': [
        {
          'name': 'default',
          'type': '',
          'defaultValue': '',
          'desc': {
            'zh-CN': '默认插槽',
            'en-US': 'Default slot'
          },
          'demoId': 'image'
        }
      ]
    }
  ]
}
