export default {
  column: '2',
  owner: '',
  demos: [
    {
      'demoId': 'basic-usage',
      'name': { 'zh-CN': '基本用法', 'en-US': 'Basic Usage' },
      'desc': {
        'zh-CN': `
          通过 <code>reference</code>  插槽来指定一个触发源，通过 <code>content</code> 属性来指定提示内容，点击触发源会弹出内容面板。<br>
          通过 <code>title</code> 属性来指定标题。<br>
          通过 <code>width</code>  属性来指定一个弹出面板的宽度。<br>
        `,
        'en-US': 'For details, see the following example.'
      },
      'codeFiles': ['basic-usage.vue']
    },

    {
      'demoId': 'trigger',
      'name': { 'zh-CN': '触发方式', 'en-US': 'Trigger Mode' },
      'desc': {
        'zh-CN': `
          通过<code>trigger</code> 属性设定弹出框的触发方式，属性可选值为：  <code>click / hover / manual / focus</code>， 默认值为 <code> click </code>。<br>
          当触发方式为<code> manual</code>时，通过设置<code>v-model</code> 属性，动态控制显示和隐藏弹出框。
          `,
        'en-US':
          '<code>trigger</code> Set the triggering mode of the pop-up dialog box. <code>click</code>Click to trigger <code>focus</code>Hover</code>Hover</code>Click to trigger <code>manual</code>. Click Hide\n again'
      },
      'codeFiles': ['trigger.vue']
    },

    {
      'demoId': 'content',
      'name': { 'zh-CN': '弹出层内容', 'en-US': 'Add Content' },
      'desc': {
        'zh-CN': `
          通过 <code>content</code> 属性设置要显示的字符串内容。
          通过 <code>default</code> 插槽，支持自定义复杂的内容结构。
          `,
        'en-US': '<code>content</code> Sets what to display. \n'
      },
      'codeFiles': ['content.vue']
    },
    {
      'demoId': 'disable',
      'name': { 'zh-CN': '禁用', 'en-US': 'Disabled' },
      'desc': {
        'zh-CN': '<code>disabled</code> 设置是否禁用弹出框。\n',
        'en-US': '<code>disabled</code> Sets whether to disable pop-up boxes. \n'
      },
      'codeFiles': ['disable.vue']
    },

    {
      'demoId': 'offset',
      'name': { 'zh-CN': '自定义偏移', 'en-US': 'Arrow Offset' },
      'desc': {
        'zh-CN': `通过<code>arrow-offset</code> 设置箭头的在弹窗层上的偏移量。箭头默认至少会保留8px的空间， 以保证箭头不会贴在弹窗层两边。<br>
                  通过<code> offset</code> 设置弹框的偏移量，来改变弹框的位置`,
        'en-US':
          '<code>arrow-offset</code> Sets the offset of the arrow to change the position of the arrow.By default, the arrow retains at least 8px of space to ensure that the arrow does not stick to the left. \n'
      },
      'codeFiles': ['offset.vue']
    },

    {
      'demoId': 'custom-popper',
      'name': { 'zh-CN': '自定义弹出面板', 'en-US': 'Arrow Offset' },
      'desc': {
        'zh-CN': `
          通过<code>placement</code> 设置弹出框的的位置,可选值为（top/top-start/top-end/bottom/bottom-start/bottom-end/left/left-start/left-end/right/right-start/right-end）。<br>
          通过<code>visible-arrow</code> 设定是否显示提示框的箭头，默认值为 true。<br>
          通过<code>popper-class</code> 可配置单个或多个 class，通过类名可以控制弹窗样式。
        `,
        'en-US':
          '<code>arrow-offset</code> Sets the offset of the arrow to change the position of the arrow.By default, the arrow retains at least 8px of space to ensure that the arrow does not stick to the left. \n'
      },
      'codeFiles': ['custom-popper.vue']
    },
    {
      'demoId': 'delay',
      'name': { 'zh-CN': '延迟控制', 'en-US': 'Popup Box Offset' },
      'desc': {
        'zh-CN': `
          通过 <code>open-delay</code> 弹出框打开时延迟的时长，默认值为0，单位为毫秒<br>
          通过 <code>close-delay</code> 弹出框关闭时延迟的时长，默认值为200，单位为毫秒<br>
        `,
        'en-US': '<code>offset</code> Sets the offset of the dialog box to change the position of the dialog box. \n'
      },
      'codeFiles': ['delay.vue']
    },
    {
      'demoId': 'transition',
      'name': { 'zh-CN': '自定义渐变动画', 'en-US': 'Customized Gradient Animation' },
      'desc': {
        'zh-CN': `通过 <code>transition</code> 设置弹框的显示隐藏淡入淡出动画，默认取值 fade-in-linear。`,
        'en-US':
          '<code>transition</code> Sets the display-hide-in-fade-out animation of the dialog box. The default values are fade-in-linear and fade-in (no animation effect).\n'
      },
      'codeFiles': ['transition.vue']
    },

    {
      'demoId': 'popper-options',
      'name': { 'zh-CN': '高级选项', 'en-US': 'Pop-up Options' },
      'desc': {
        'zh-CN': '<code>popper-options</code> 配置弹出框选项\n',
        'en-US': '<code>popper-options</code> Configuration pop-up options\n'
      },
      'codeFiles': ['popper-options.vue']
    },
    {
      'demoId': 'popover-events',
      'name': { 'zh-CN': '事件', 'en-US': 'Event' },
      'desc': {
        'zh-CN':
          '<code>input</code> 加载完触发回调\n\n<code>hide</code> 隐藏时触发回调\n\n<code>show</code> 显示时触发回调\n\n<code>after-leave</code> 显示时触发回调\n\n<code>after-enter</code> 显示动画播放完毕后触发回调\n',
        'en-US':
          'Callback triggered after <code>input</code> loading\n\n<code>hide</code>Hide</code>Hide</code>Callback triggered during display\n\n<code>show</code> \n\n<code>after-leave</code> displayCallback triggered during display \n\n<code>after-enter</code> displayCallback triggered after animation playing is complete \n'
      },
      'codeFiles': ['popover-events.vue']
    }
  ],
  apis: [
    {
      'name': 'popover',
      'type': 'component',
      'properties': [
        {
          'name': 'trigger',
          'type': 'string',
          'defaultValue': 'click',
          'desc': {
            'zh-CN': '触发方式;该属性的可选值为 click / focus / hover / manual',
            'en-US': 'Trigger mode; The optional values of this attribute are click / focus / hover / manual'
          },
          'demoId': 'trigger-mode'
        },
        {
          'name': 'title',
          'type': 'string',
          'defaultValue': '',
          'desc': { 'zh-CN': '标题', 'en-US': 'Title' },
          'demoId': 'custom-tip-text'
        },
        {
          'name': 'content',
          'type': 'string',
          'defaultValue': '',
          'desc': {
            'zh-CN': '显示的内容，也可以通过 slot 传入 DOM',
            'en-US': 'Displayed content, which can also be transferred to the DOM through slot.'
          },
          'demoId': 'popover-content'
        },
        {
          'name': 'width',
          'type': 'string , number',
          'defaultValue': 'auto',
          'desc': { 'zh-CN': '宽度', 'en-US': 'Width' },
          'demoId': 'popover-width'
        },
        {
          'name': 'height',
          'type': 'string , number',
          'defaultValue': 'auto',
          'desc': {
            'zh-CN': '高度',
            'en-US':
              'Location; The optional value of this attribute is top/top-start/top-end/bottom/bottom-start/bottom-end/left/left-start/left-end/right/right-start/right-end'
          },
          'demoId': 'popover-width'
        },
        {
          'name': 'placement',
          'type': 'string',
          'defaultValue': 'bottom',
          'desc': {
            'zh-CN':
              '出现位置;该属性的可选值为 top/top-start/top-end/bottom/bottom-start/bottom-end/left/left-start/left-end/right/right-start/right-end',
            'en-US': 'Popover available'
          },
          'demoId': 'popover-placement'
        },
        {
          'name': 'disabled',
          'type': 'boolean',
          'defaultValue': 'false',
          'desc': { 'zh-CN': 'Popover 是否可用', 'en-US': 'Whether the status is visible' },
          'demoId': 'dynamic-disable'
        },
        {
          'name': 'modelValue / v-model',
          'type': 'boolean',
          'defaultValue': 'false',
          'desc': {
            'zh-CN': '状态是否可见，仅在<a href="#trigger-mode">trigger="manual"</a>时有效',
            'en-US': 'Whether the status is visible is only valid when<a href="#trigger-mode">trigger="manual"</a>'
          },
          'demoId': 'trigger-mode'
        },
        {
          'name': 'offset',
          'type': 'number',
          'defaultValue': '0',
          'desc': { 'zh-CN': '出现位置的偏移量', 'en-US': 'Arrow position offset' },
          'demoId': 'frame-offset'
        },
        {
          'name': 'arrow-offset',
          'type': 'number',
          'defaultValue': '0',
          'desc': { 'zh-CN': '箭头的位置偏移', 'en-US': 'The rotation center of the component' },
          'demoId': 'arrow-offset'
        },
        {
          'name': 'append-to-body',
          'type': 'boolean',
          'defaultValue': 'true',
          'desc': { 'zh-CN': '是否添加到body上', 'en-US': 'Define gradient animation' },
          'demoId': 'basic-usage'
        },
        {
          'name': 'transition',
          'type': 'string',
          'defaultValue': 'fade-in-linear',
          'desc': { 'zh-CN': '定义渐变动画', 'en-US': 'Whether to display the Tooltip arrow.' },
          'demoId': 'custom-transition'
        },
        {
          'name': 'visible-arrow',
          'type': 'boolean',
          'defaultValue': 'true',
          'desc': {
            'zh-CN': '是否显示 Tooltip 箭头',
            'en-US':
              "Parameters of popper.js; The optional value of this attribute is a reference to the <a href='https://popper.js.org/docs/v1/#new_Popper_new' target='_blank'>popper.js</a> document"
          },
          'demoId': 'hidden-arrow'
        },
        {
          'name': 'popper-options',
          'type': 'object',
          'defaultValue': "{ boundariesElement: 'body', gpuAcceleration: false }",
          'desc': {
            'zh-CN':
              "popper.js 的参数;该属性的可选值为 参考<a href='https://popper.js.org/docs/v1/#new_Popper_new' target='_blank'>popper.js</a>文档",
            'en-US': 'Add a class name for popper'
          },
          'demoId': 'popper-options'
        },
        {
          'name': 'popper-class',
          'type': 'string',
          'defaultValue': '',
          'desc': {
            'zh-CN': '为 popper 添加类名',
            'en-US': 'Display delay when the trigger mode is hover, in milliseconds.'
          },
          'demoId': 'popper-class'
        },
        {
          'name': 'open-delay',
          'type': 'number',
          'defaultValue': '0',
          'desc': {
            'zh-CN': '触发方式为 hover 时的显示延迟，单位为毫秒',
            'en-US': 'Hide delay when the trigger mode is hover, in milliseconds.'
          },
          'demoId': 'open-delay'
        },
        {
          'name': 'close-delay',
          'type': 'number',
          'defaultValue': '200',
          'desc': { 'zh-CN': '触发方式为 hover 时的隐藏延迟，单位为毫秒', 'en-US': '' },
          'demoId': 'close-delay'
        }
      ],
      'events': [
        {
          'name': 'show',
          'type': 'Function()',
          'defaultValue': '',
          'desc': { 'zh-CN': '显示时触发', 'en-US': 'Triggered upon display' },
          'demoId': 'popover-events'
        },
        {
          'name': 'hide',
          'type': 'Function()',
          'defaultValue': '',
          'desc': { 'zh-CN': '隐藏时触发', 'en-US': 'Triggered when hidden' },
          'demoId': 'popover-events'
        },
        {
          'name': 'after-enter',
          'type': 'Function',
          'defaultValue': '',
          'desc': {
            'zh-CN': '显示动画播放完毕后触发',
            'en-US': 'This event is triggered after the animation is played.'
          },
          'demoId': 'popover-events'
        },
        {
          'name': 'after-leave',
          'type': 'Function()',
          'defaultValue': '',
          'desc': { 'zh-CN': '隐藏动画播放完毕后触发', 'en-US': 'Triggered after the hidden animation is played.' },
          'demoId': 'popover-events'
        }
      ],
      'slots': [
        {
          'name': 'default',
          'type': '',
          'defaultValue': '',
          'desc': { 'zh-CN': 'Popover 内嵌 HTML 文本', 'en-US': 'Popover embedded HTML text' },
          'demoId': 'custom-tip-text'
        },
        {
          'name': 'reference',
          'type': '',
          'defaultValue': '',
          'desc': { 'zh-CN': '触发 Popover 显示的 HTML 元素', 'en-US': 'HTML element that triggers popover display' },
          'demoId': 'popover-events'
        }
      ]
    }
  ],
  types: [
    {
      name: 'IPopperOption',
      type: 'interface',
      code: `
interface IPopperOption {
  bubbling: boolean // 是否监听元素所有上级有滚动元素的scroll事件，监听到则更新popper的位置。用于解决某些弹出层位置在页面滚动时，位置不正确的场景，默认false
  followReferenceHide: boolean // 当触发源隐藏时，自动隐藏弹出层，默认true
  removeOnDestroy: boolean // 弹出层消失后，是否移除弹出层的DOM元素，布尔false
}
      `
    }
  ]
}
