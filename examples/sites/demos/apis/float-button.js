export default {
  mode: ['pc'],

  apis: [
    {
      'name': 'float-button',
      'type': 'component',
      'props': [
        {
          'name': 'type',
          'type': 'IFloatButtonType',
          'defaultValue': '--',
          'desc': {
            'zh-CN': '展示按钮不同的状态，设置为text则展示为文本按钮',
            'en-US': 'Display different states of buttons, set to text to display as text buttons'
          },
          mode: ['pc'],
          'pcDemo': 'basic-usage'
        },
        {
          'name': 'description',
          'type': 'string',
          'defaultValue': '--',
          'desc': {
            'zh-CN': '按钮显示的文本',
            'en-US': 'Set the text displayed by the button'
          },
          mode: ['pc'],
          'pcDemo': 'basic-usage'
        },
        {
          'name': 'icon',
          'type': 'Component',
          'defaultValue': '--',
          'desc': {
            'zh-CN': '按钮展示的图标，接收为Icon组件',
            'en-US': 'The icon displayed by the button is received as an Icon component'
          },
          mode: ['pc'],
          'pcDemo': 'icon'
        },
        {
          'name': 'reset-time',
          'type': 'number',
          'defaultValue': '1000',
          'desc': {
            'zh-CN': '设置按钮禁用时间，防止重复提交，单位毫秒',
            'en-US': 'Set the button disable time, in milliseconds, to prevent repeated submission'
          },
          mode: ['pc'],
          'pcDemo': 'reset-time'
        },
        {
          'name': 'trigger',
          'type': 'string',
          'defaultValue': 'click',
          'desc': {
            'zh-CN': '设置菜单触发模式。',
            'en-US': 'Set the menu trigger mode.'
          },
          mode: ['pc'],
          'pcDemo': 'trigger'
        },
        {
          'name': 'open',
          'type': 'boolean',
          'defaultValue': false,
          'desc': {
            'zh-CN': '设置菜单是否打开。',
            'en-US': 'Whether the settings menu opens.'
          },
          mode: ['pc'],
          'pcDemo': 'trigger'
        },
        {
          'name': 'shape',
          'type': "'circle'|'square'",
          'defaultValue': 'circle',
          'desc': {
            'zh-CN': '设置按钮形状。',
            'en-US': 'Set Button shape.'
          },
          mode: ['pc'],
          'pcDemo': 'basic-usage'
        },
        {
          'name': 'backTop',
          'type': 'boolean',
          'defaultValue': false,
          'desc': {
            'zh-CN': '设置是否是回到顶部按钮。',
            'en-US': 'Set whether it is a back-to-top button.'
          },
          mode: ['pc'],
          'pcDemo': 'backTop'
        },

        {
          'name': 'element',
          'type': 'HTMLElement',
          'defaultValue': 'document.body',
          'desc': {
            'zh-CN': '当backTop设置为true时，此属性设置滚动元素。',
            'en-US': 'When backTop is set to true, this property sets the scrolling element.'
          },
          mode: ['pc'],
          'pcDemo': 'backTop'
        },
        {
          'name': 'top',
          'type': 'string',
          'defaultValue': '',
          'desc': {
            'zh-CN': '按钮与顶部的距离。',
            'en-US': 'The distance of the button from the top.'
          },
          mode: ['pc'],
          'pcDemo': 'basic-usage'
        },
        {
          'name': 'bottom',
          'type': 'string',
          'defaultValue': '20px',
          'desc': {
            'zh-CN': '按钮与底部的距离。',
            'en-US': 'The distance of the button from the bottom.'
          },
          mode: ['pc'],
          'pcDemo': 'basic-usage'
        },
        {
          'name': 'left',
          'type': 'string',
          'defaultValue': '',
          'desc': {
            'zh-CN': '按钮与左边的距离。',
            'en-US': 'The distance of the button from the left.'
          },
          mode: ['pc'],
          'pcDemo': 'basic-usage'
        },
        {
          'name': 'right',
          'type': 'string',
          'defaultValue': '20px',
          'desc': {
            'zh-CN': '按钮与右边的距离。',
            'en-US': 'The distance of the button from the right.'
          },
          mode: ['pc'],
          'pcDemo': 'basic-usage'
        },
        {
          'name': 'href',
          'type': 'string',
          'defaultValue': '',
          'desc': {
            'zh-CN': '按钮点击后跳转的页面。',
            'en-US': 'button to jump to the page.'
          },
          mode: ['pc'],
          'pcDemo': 'jump'
        },
        {
          'name': 'target',
          'type': 'string',
          'defaultValue': '',
          'desc': {
            'zh-CN': '相当于<code>a</code> 标签的 <code>target</code> 属性，<code>href</code> 存在时生效。',
            'en-US': 'The target attribute equivalent to the A tag, which takes effect when the href exists.'
          },
          mode: ['pc'],
          'pcDemo': 'jump'
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
          mode: ['pc'],
          'pcDemo': 'click'
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
          mode: ['pc'],
          'pcDemo': 'open'
        }
      ]
    }
  ],
  types: [
    {
      name: 'IFloatButtonType',
      type: 'interface',
      code: `type IFloatButtonType = 'primary' | 'success' | 'warning' | 'danger' | 'info' | 'text'`
    }
  ]
}
