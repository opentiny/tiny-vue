export default {
  column: '2',
  owner: '',
  demos: [
    {
      'demoId': 'basic-usage',
      'name': { 'zh-CN': '基本用法', 'en-US': 'Basic Usage' },
      'desc': {
        'zh-CN': '<p>通过 <code>type</code> 设置按钮类型， <code>shape</code>设置按钮的形状</p>',
        'en-US': '<p>The type of the button is set by type, and the shape of the button is set by shape.</p>'
      },
      'codeFiles': ['basic-usage.vue']
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
      'demoId': 'trigger',
      'name': { 'zh-CN': '菜单模式', 'en-US': 'Menu mode' },
      'desc': {
        'zh-CN':
          '<p>设置<code>trigger</code> 属性即可开启菜单模式。设置<code>open</code>为<code>true</code>即可手动打开菜单.</p>',
        'en-US':
          '<p>Set the trigger property to turn on the menu mode.Set <code>open</code> to <code>true</code> to manually open the menu.</p>'
      },
      'codeFiles': ['trigger.vue']
    },
    {
      'demoId': 'backTop',
      'name': { 'zh-CN': '回到顶部', 'en-US': 'Back to top' },
      'desc': {
        'zh-CN': '<p>设置<code>backtop</code> 属性即可实现页面滚回顶部。<code>element</code>赋值为滚动元素。</p>',
        'en-US':
          '<p>Set the backtop attribute to roll the page back to the top. element is assigned as a scrolling element.</p>'
      },
      'codeFiles': ['backTop.vue']
    },

    {
      'demoId': 'jump',
      'name': { 'zh-CN': '跳转页面', 'en-US': 'Jump to the page' },
      'desc': {
        'zh-CN': '<p>可以设置<code>href</code>和<code>target</code>两个属性，按钮点击跳转页面。</p>',
        'en-US': '<p>You can set the two properties of href and target, and click the button to jump to the page.</p>'
      },
      'codeFiles': ['jump.vue']
    }
  ],
  apis: [
    {
      'name': 'button',
      'type': 'component',
      'props': [
        {
          'name': 'type',
          'type': 'IButtonType',
          'typeAnchorName': 'IButtonType',
          'defaultValue': '--',
          'desc': {
            'zh-CN': '展示按钮不同的状态，设置为text则展示为文本按钮',
            'en-US': 'Display different states of buttons, set to text to display as text buttons'
          },
          'demoId': 'basic-usage'
        },
        {
          'name': 'description',
          'type': 'string',
          'defaultValue': '--',
          'desc': {
            'zh-CN': '按钮显示的文本',
            'en-US': 'Set the text displayed by the button'
          },
          'demoId': 'basic-usage'
        },
        {
          'name': 'icon',
          'type': 'Component',
          'defaultValue': '--',
          'desc': {
            'zh-CN': '按钮展示的图标，接收为Icon组件',
            'en-US': 'The icon displayed by the button is received as an Icon component'
          },
          'demoId': 'icon'
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
          'name': 'trigger',
          'type': 'string',
          'defaultValue': 'click',
          'desc': {
            'zh-CN': '设置菜单触发模式。',
            'en-US': 'Set the menu trigger mode.'
          },
          'demoId': 'trigger'
        },
        {
          'name': 'open',
          'type': 'boolean',
          'defaultValue': false,
          'desc': {
            'zh-CN': '设置菜单是否打开。',
            'en-US': 'Whether the settings menu opens.'
          },
          'demoId': 'trigger'
        },
        {
          'name': 'shape',
          'type': "'circle'|'square'",
          'defaultValue': 'circle',
          'desc': {
            'zh-CN': '设置按钮形状。',
            'en-US': 'Set Button shape.'
          },
          'demoId': 'basic-usage'
        },
        {
          'name': 'backTop',
          'type': 'boolean',
          'defaultValue': false,
          'desc': {
            'zh-CN': '设置是否是回到顶部按钮。',
            'en-US': 'Set whether it is a back-to-top button.'
          },
          'demoId': 'backTop'
        },

        {
          'name': 'element',
          'type': 'HTMLElement',
          'defaultValue': 'document.body',
          'desc': {
            'zh-CN': '当backTop设置为true时，此属性设置滚动元素。',
            'en-US': 'When backTop is set to true, this property sets the scrolling element.'
          },
          'demoId': 'backTop'
        },
        {
          'name': 'top',
          'type': 'string',
          'defaultValue': '',
          'desc': {
            'zh-CN': '按钮与顶部的距离。',
            'en-US': 'The distance of the button from the top.'
          },
          'demoId': 'basic-usage'
        },
        {
          'name': 'bottom',
          'type': 'string',
          'defaultValue': '20px',
          'desc': {
            'zh-CN': '按钮与底部的距离。',
            'en-US': 'The distance of the button from the bottom.'
          },
          'demoId': 'basic-usage'
        },
        {
          'name': 'left',
          'type': 'string',
          'defaultValue': '',
          'desc': {
            'zh-CN': '按钮与左边的距离。',
            'en-US': 'The distance of the button from the left.'
          },
          'demoId': 'basic-usage'
        },
        {
          'name': 'right',
          'type': 'string',
          'defaultValue': '20px',
          'desc': {
            'zh-CN': '按钮与右边的距离。',
            'en-US': 'The distance of the button from the right.'
          },
          'demoId': 'basic-usage'
        },
        {
          'name': 'href',
          'type': 'string',
          'defaultValue': '',
          'desc': {
            'zh-CN': '按钮点击后跳转的页面。',
            'en-US': 'button to jump to the page.'
          },
          'demoId': 'jump'
        },
        {
          'name': 'target',
          'type': 'string',
          'defaultValue': '',
          'desc': {
            'zh-CN': '相当于<code>a</code> 标签的 <code>target</code> 属性，<code>href</code> 存在时生效。',
            'en-US': 'The target attribute equivalent to the A tag, which takes effect when the href exists.'
          },
          'demoId': 'jump'
        }
      ],
      'events': [
        {
          'name': 'click',
          'type': '(event: PointEvent) => void',
          'defaultValue': '--',
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
          'defaultValue': '--',
          'desc': {
            'zh-CN': '默认插槽，自定义按钮展开时的内容',
            'en-US': 'Default slot, customize what the button is when expanded'
          },
          'demoId': 'open'
        }
      ]
    }
  ],
  types: [
    {
      name: 'IButtonType',
      type: 'interface',
      code: `type IButtonType = 'primary' | 'success' | 'warning' | 'danger' | 'info' | 'text'`
    }
  ]
}
