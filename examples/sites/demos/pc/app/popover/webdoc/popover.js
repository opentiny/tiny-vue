export default {
  column: '2',
  owner: '',
  demos: [
    {
      'demoId': 'basic-usage',
      'name': { 'zh-CN': '基本用法', 'en-US': 'Basic Usage' },
      'desc': { 'zh-CN': '详细用法参考如下示例', 'en-US': 'For details, see the following example.' },
      'codeFiles': ['basic-usage.vue']
    },
    {
      'demoId': 'popover-content',
      'name': { 'zh-CN': '添加内容', 'en-US': 'Add Content' },
      'desc': {
        'zh-CN': '<p><code>content</code> 设置要显示的内容。</p>\n',
        'en-US': '<p><code>content</code> Sets what to display. </p>\n'
      },
      'codeFiles': ['popover-content.vue']
    },
    {
      'demoId': 'arrow-offset',
      'name': { 'zh-CN': '箭头偏移', 'en-US': 'Arrow Offset' },
      'desc': {
        'zh-CN':
          '<p><code>arrow-offset</code> 设置箭头的在弹窗层上的偏移量。箭头默认至少会保留8px的空间， 以保证箭头不会贴在弹窗层两边。</p>\n',
        'en-US':
          '<p><code>arrow-offset</code> Sets the offset of the arrow to change the position of the arrow.By default, the arrow retains at least 8px of space to ensure that the arrow does not stick to the left. </p>\n'
      },
      'codeFiles': ['arrow-offset.vue']
    },
    {
      'demoId': 'frame-offset',
      'name': { 'zh-CN': '弹出框偏移', 'en-US': 'Popup Box Offset' },
      'desc': {
        'zh-CN': '<p><code>offset</code> 设置弹框的偏移量，来改变弹框的位置。</p>\n',
        'en-US':
          '<p><code>offset</code> Sets the offset of the dialog box to change the position of the dialog box. </p>\n'
      },
      'codeFiles': ['frame-offset.vue']
    },
    {
      'demoId': 'close-delay',
      'name': { 'zh-CN': '延迟隐藏', 'en-US': 'Delay Hiding' },
      'desc': {
        'zh-CN': '<p><code>close-delay</code> 弹出框延迟隐藏单位为毫秒(number)</p>\n',
        'en-US':
          '<p><code>close-delay</code> The delay for hiding the pop-up dialog box is in milliseconds (number)</p>\n'
      },
      'codeFiles': ['close-delay.vue']
    },
    {
      'demoId': 'dynamic-disable',
      'name': { 'zh-CN': '禁用', 'en-US': 'Disabled' },
      'desc': {
        'zh-CN': '<p><code>disabled</code> 设置是否禁用弹出框。</p>\n',
        'en-US': '<p><code>disabled</code> Sets whether to disable pop-up boxes. </p>\n'
      },
      'codeFiles': ['dynamic-disable.vue']
    },
    {
      'demoId': 'open-delay',
      'name': { 'zh-CN': '延迟显示', 'en-US': 'Delay Display' },
      'desc': {
        'zh-CN': '<p><code>open-delay</code>，设置延迟时间 ( type:number,单位毫秒 )</p>\n',
        'en-US': '<p><code>open-delay</code>, Set the delay time (type: number, unit: ms)</p>\n'
      },
      'codeFiles': ['open-delay.vue']
    },
    {
      'demoId': 'popover-placement',
      'name': { 'zh-CN': '显示位置', 'en-US': 'Display position' },
      'desc': {
        'zh-CN':
          '<p><code>placement</code> 设置弹出框的的位置,可选值为（top/top-start/top-end/bottom/bottom-start/bottom-end/left/left-start/left-end/right/right-start/right-end）</p>\n',
        'en-US':
          '<p><code>placement</code>: indicates the position of the dialog box that is displayed. The value can be (top/top-start/top-end/bottom/bottom-start/bottom-end/left/left-start/left-end/right/right-start/right-end) </p>\n'
      },
      'codeFiles': ['popover-placement.vue']
    },
    {
      'demoId': 'popper-class',
      'name': { 'zh-CN': '自定义样式', 'en-US': 'Custom Style' },
      'desc': {
        'zh-CN': '<p><code>popper-class</code> 可配置单个或多个 class</p>\n',
        'en-US': '<p><code>popper-class</code> You can configure one or more classes</p>\n'
      },
      'codeFiles': ['popper-class.vue']
    },
    {
      'demoId': 'custom-transition',
      'name': { 'zh-CN': '自定义渐变动画', 'en-US': 'Customized Gradient Animation' },
      'desc': {
        'zh-CN':
          '<p><code>transition</code> 设置弹框的显示隐藏淡入淡出动画，默认取值 fade-in-linear，fade-in ( 无动画效果 )</p>\n',
        'en-US':
          '<p><code>transition</code> Sets the display-hide-in-fade-out animation of the dialog box. The default values are fade-in-linear and fade-in (no animation effect).</p>\n'
      },
      'codeFiles': ['custom-transition.vue']
    },
    {
      'demoId': 'trigger-mode',
      'name': { 'zh-CN': '触发方式', 'en-US': 'Trigger Mode' },
      'desc': {
        'zh-CN':
          '<p><code>trigger</code>设定弹出框的触发方式  <code>click</code> 点击触发  <code>focus</code> 鼠标长按触发  <code>hover</code> 鼠标悬浮触发  <code>manual</code> 点击触发，再次点击隐藏</p>\n',
        'en-US':
          '<p><code>trigger</code> Set the triggering mode of the pop-up dialog box. <code>click</code>Click to trigger <code>focus</code>Hover</code>Hover</code>Click to trigger <code>manual</code>. Click Hide</p>\n again'
      },
      'codeFiles': ['trigger-mode.vue']
    },
    {
      'demoId': 'hidden-arrow',
      'name': { 'zh-CN': '隐藏提示框箭头', 'en-US': 'Hide the arrow in the dialog box' },
      'desc': {
        'zh-CN': '<p><code>visible-arrow</code> 设定是否显示提示框的箭头</p>\n',
        'en-US': '<p><code>visible-arrow</code> Sets whether to display the arrow of the prompt box.</p>\n'
      },
      'codeFiles': ['hidden-arrow.vue']
    },
    {
      'demoId': 'popover-width',
      'name': { 'zh-CN': '宽度', 'en-US': 'Width' },
      'desc': {
        'zh-CN':
          '<p><code>width</code> 弹出框的宽度，<code>height</code> 弹出框的高度。两者默认值为auto,由子内容撑开。</p>\n',
        'en-US': 'Width of the <p><code>width</code> pop-up box</p>\n'
      },
      'codeFiles': ['popover-width.vue']
    },
    {
      'demoId': 'popper-options',
      'name': { 'zh-CN': '弹出框选项', 'en-US': 'Pop-up Options' },
      'desc': {
        'zh-CN': '<p><code>popper-options</code> 配置弹出框选项</p>\n',
        'en-US': '<p><code>popper-options</code> Configuration pop-up options</p>\n'
      },
      'codeFiles': ['popper-options.vue']
    },
    {
      'demoId': 'trigger-reference',
      'name': { 'zh-CN': '触发源', 'en-US': 'Trigger Source' },
      'desc': {
        'zh-CN': '<p><code>slot</code> 设置弹出框的触发源</p>\n',
        'en-US': '<p><code>slot</code> Set the trigger source of the pop-up dialog box</p>\n'
      },
      'codeFiles': ['trigger-reference.vue']
    },
    {
      'demoId': 'custom-tip-text',
      'name': { 'zh-CN': '自定义提示文本', 'en-US': 'Custom Prompt Text' },
      'desc': {
        'zh-CN': '<p><code>content</code> 设置自定义文本，也可在标签内直接嵌套默认插槽为自定义文本</p>\n',
        'en-US':
          '<p><code>content</code> Set the custom text. You can also nest the default slot in the label as the custom text</p>\n'
      },
      'codeFiles': ['custom-tip-text.vue']
    },
    {
      'demoId': 'popover-events',
      'name': { 'zh-CN': '事件', 'en-US': 'Event' },
      'desc': {
        'zh-CN':
          '<p><code>input</code> 加载完触发回调\n\n<code>hide</code> 隐藏时触发回调\n\n<code>show</code> 显示时触发回调\n\n<code>after-leave</code> 显示时触发回调\n\n<code>after-enter</code> 显示动画播放完毕后触发回调</p>\n',
        'en-US':
          'Callback triggered after <p><code>input</code> loading\n\n<code>hide</code>Hide</code>Hide</code>Callback triggered during display\n\n<code>show</code> \n\n<code>after-leave</code> displayCallback triggered during display \n\n<code>after-enter</code> displayCallback triggered after animation playing is complete</p> \n'
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
          'defaultValue': '该属性的默认值为 click',
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
          'defaultValue': '该属性的默认值为auto，最小宽度 150px',
          'desc': { 'zh-CN': '宽度', 'en-US': 'Width' },
          'demoId': 'popover-width'
        },
        {
          'name': 'height',
          'type': 'string , number',
          'defaultValue': '该属性的默认值为auto',
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
          'defaultValue': '该属性的默认值为 bottom',
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
          'defaultValue': '该属性的默认值为 false',
          'desc': { 'zh-CN': 'Popover 是否可用', 'en-US': 'Whether the status is visible' },
          'demoId': 'dynamic-disable'
        },
        {
          'name': 'modelValue / v-model',
          'type': 'boolean',
          'defaultValue': '该属性的默认值为 false',
          'desc': {
            'zh-CN': '状态是否可见，仅在<a href="#trigger-mode">trigger="manual"</a>时有效',
            'en-US': 'Whether the status is visible is only valid when<a href="#trigger-mode">trigger="manual"</a>'
          },
          'demoId': 'trigger-mode'
        },
        {
          'name': 'offset',
          'type': 'number',
          'defaultValue': '该属性的默认值为 0',
          'desc': { 'zh-CN': '出现位置的偏移量', 'en-US': 'Arrow position offset' },
          'demoId': 'frame-offset'
        },
        {
          'name': 'arrow-offset',
          'type': 'number',
          'defaultValue': '该属性的默认值为 0',
          'desc': { 'zh-CN': '箭头的位置偏移', 'en-US': 'The rotation center of the component' },
          'demoId': 'arrow-offset'
        },
        {
          'name': 'append-to-body',
          'type': 'boolean',
          'defaultValue': '该属性的默认值为 true',
          'desc': { 'zh-CN': '是否添加到body上', 'en-US': 'Define gradient animation' },
          'demoId': 'basic-usage'
        },
        {
          'name': 'transition',
          'type': 'string',
          'defaultValue': '该属性的默认值为 fade-in-linear',
          'desc': { 'zh-CN': '定义渐变动画', 'en-US': 'Whether to display the Tooltip arrow.' },
          'demoId': 'custom-transition'
        },
        {
          'name': 'visible-arrow',
          'type': 'boolean',
          'defaultValue': '该属性的默认值为 true',
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
          'defaultValue': "该属性的默认值为 { boundariesElement: 'body', gpuAcceleration: false }",
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
          'defaultValue': '该属性的默认值为 0',
          'desc': {
            'zh-CN': '触发方式为 hover 时的显示延迟，单位为毫秒',
            'en-US': 'Hide delay when the trigger mode is hover, in milliseconds.'
          },
          'demoId': 'open-delay'
        },
        {
          'name': 'close-delay',
          'type': 'number',
          'defaultValue': '该属性的默认值为 200',
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
  ]
}
