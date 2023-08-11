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
      'demoId': 'custom-transition',
      'name': { 'zh-CN': '自定义渐变动画', 'en-US': 'Customized Gradient Animation' },
      'desc': {
        'zh-CN': '<p>通过 <code>transition</code> 定义渐变动画,默认选值为 <code>tiny-fade-in-linear</code></p>\n',
        'en-US':
          '<p>Defines the gradient animation through <code>transition</code>. The default value is <code>tiny-fade-in-linear</code></p>\n'
      },
      'codeFiles': ['custom-transition.vue']
    },
    {
      'demoId': 'dynamic-disable',
      'name': { 'zh-CN': '禁用', 'en-US': 'Disabled' },
      'desc': { 'zh-CN': '<p>通过 <code>diabled</code> 设置禁用</p>\n', 'en-US': '<p>Disabled</code></p>\n' },
      'codeFiles': ['dynamic-disable.vue']
    },
    {
      'demoId': 'manual-control-tip',
      'name': { 'zh-CN': '手动控制', 'en-US': 'Manual Control' },
      'desc': {
        'zh-CN':
          '<p>手动控制模式，通过设置 <code>manual</code> 属性为 true 后，mouseenter 和 mouseleave 事件将不会生效,然后可以通过设置 <code>v-model</code> 动态控制显示和隐藏</p>\n',
        'en-US':
          '<p>Manual control mode. After the <code>manual</code> attribute is set to true, the mouseenter and mouseleave events do not take effect. You can then dynamically display and hide </p>\n by setting <code>v-model</code>'
      },
      'codeFiles': ['manual-control-tip.vue']
    },
    {
      'demoId': 'visible-show',
      'name': { 'zh-CN': '智能出现控制', 'en-US': 'Intelligent Appearance Control' },
      'desc': {
        'zh-CN': '<p>提示的智能出现的模式，设置为 <code>auto</code> 时，tooltip只有在文本超长时，才显示出来。</p>\n',
        'en-US':
          '<p>Smart display mode of the prompt. When this parameter is set to <code>auto</code>, the tooltip is displayed only when the text is too long. </p>\n'
      },
      'codeFiles': ['visible-show.vue']
    },
    {
      'demoId': 'tooltip-theme',
      'name': { 'zh-CN': '主题', 'en-US': 'Subject' },
      'desc': {
        'zh-CN': '<p>通过 <code>effect</code> 属性设置主题,可选值 dark/light 两种主题,默认值为 dark</p>\n',
        'en-US': '<p>Use the <code>effect</code> attribute to set the theme. The options are dark and light. </p>\n'
      },
      'codeFiles': ['tooltip-theme.vue']
    },
    {
      'demoId': 'open-delay',
      'name': { 'zh-CN': '自动隐藏和延迟时间', 'en-US': 'Auto hide and delay time' },
      'desc': {
        'zh-CN':
          '<p>通过 <code>hide-after</code> 属性设置 Tooltip 组件出现后自动隐藏延时，单位毫秒，为 0 则不会自动隐藏。通过 <code>open-delay</code> 属性设置 Tooltip 组件延迟出现的时间，单位毫秒。</p>\n',
        'en-US':
          '<p>Use the <code>hide-after</code> attribute to set the automatic hiding delay after the Tooltip component appears, in milliseconds. If the value is 0, the Tooltip component is not automatically hidden. The <code>open-delay</code> attribute is used to set the delay for the Tooltip component to appear, in milliseconds. </p>\n'
      },
      'codeFiles': ['open-delay.vue']
    },
    {
      'demoId': 'tooltip-offset',
      'name': { 'zh-CN': '偏移量', 'en-US': 'Offset' },
      'desc': {
        'zh-CN': '<p>通过 <code>offset</code> 属性设置 Tooltip 组件出现位置的偏移量。</p>\n',
        'en-US':
          '<p>Use the <code>offset</code> attribute to set the offset of the position where the Tooltip component appears. </p>\n'
      },
      'codeFiles': ['tooltip-offset.vue']
    },
    {
      'demoId': 'enterable',
      'name': { 'zh-CN': '鼠标是否可进入', 'en-US': 'Whether the mouse can be accessed' },
      'desc': {
        'zh-CN': '<p>通过 <code>enterable</code> 属性设置鼠标是否可进入到 tooltip 中。</p>\n',
        'en-US':
          '<p>The <code>enterable</code> attribute is used to set whether the mouse can access the tooltip. </p>\n'
      },
      'codeFiles': ['enterable.vue']
    },
    {
      'demoId': 'visible-arrow',
      'name': { 'zh-CN': '是否显示箭头', 'en-US': 'Display arrow' },
      'desc': {
        'zh-CN': '<p>通过 <code>visible-arrow</code> 属性设置是否显示 Tooltip 箭头。</p>\n',
        'en-US':
          '<p>The <code>visible-arrow</code> attribute is used to set whether to display the Tooltip arrow. </p>\n'
      },
      'codeFiles': ['visible-arrow.vue']
    },
    {
      'demoId': 'popper-class',
      'name': { 'zh-CN': '添加样式类名', 'en-US': 'Add Style Class Name' },
      'desc': {
        'zh-CN': '<p>通过 <code>popper-class</code> 属性为 Tooltip 的 popper 添加类名。</p>\n',
        'en-US':
          '<p>Add the class name for the popper of the Tooltip using the <code>popper-class</code> attribute. </p>\n'
      },
      'codeFiles': ['popper-class.vue']
    },
    {
      'demoId': 'tooltip-render-content',
      'name': { 'zh-CN': '自定义渲染函数', 'en-US': 'Slot' },
      'desc': {
        'zh-CN':
          '<p>通过 <code>renderContent</code> 自定义渲染函数,返回需要渲染的节点内容 arg1:Vue的渲染函数h arg2:传递给组件的content文本。</p>\n',
        'en-US': '<p>Add custom content through the <code>content</code> slot. </p>\n'
      },
      'codeFiles': ['tooltip-render-content.vue']
    },
    {
      'demoId': 'tooltip-content',
      'name': { 'zh-CN': '插槽', 'en-US': 'popper configuration' },
      'desc': {
        'zh-CN': '<p>通过 <code>content</code> 插槽添加自定义内容。</p>\n',
        'en-US':
          '<p> uses the <code>popper-options</code> attribute to configure the popper parameter of the Tooltip. For details, see <a href="https://popper.js.org/">popper.js</a></p>\n'
      },
      'codeFiles': ['tooltip-content.vue']
    },
    {
      'demoId': 'popper-options',
      'name': { 'zh-CN': 'popper配置', 'en-US': 'tabindex configuration' },
      'desc': {
        'zh-CN':
          '<p>通过 <code>popper-options</code> 属性为 Tooltip 的 popper 配置参数,具体可参考<a href="https://popper.js.org/">popper.js</a></p>\n',
        'en-US':
          '<p>By configuring <code>tabindex</code>, the configured attributes are automatically added to the trigger source of the component. </p>\n'
      },
      'codeFiles': ['popper-options.vue']
    },
    {
      'demoId': 'tabindex',
      'name': { 'zh-CN': 'tabindex 配置', 'en-US': '' },
      'desc': {
        'zh-CN': '<p>通过配置 <code>tabindex</code>， 配置的属性会自动添加到该组件的触发原上。</p>\n',
        'en-US': ''
      },
      'codeFiles': ['tabindex.vue']
    }
  ],
  apis: [
    {
      'name': 'tooltip',
      'type': 'component',
      'properties': [
        {
          'name': 'effect',
          'type': 'String',
          'defaultValue': '该属性的默认值为 dark',
          'desc': {
            'zh-CN': '默认提供的主题;该属性的可选值为 dark/light',
            'en-US': 'Default theme; The value of this attribute can be dark or light'
          },
          'demoId': 'tooltip-theme'
        },
        {
          'name': 'type',
          'type': 'String',
          'defaultValue': '',
          'desc': {
            'zh-CN': '默认提供的类型;该属性的可选值为 normal/warning/error/info/success 。type的优先级大于effect',
            'en-US':
              'The default type is provided. The options for this attribute are normal, warning, error, information, and success. The priority of type is higher than that of effect.'
          },
          'demoId': 'tooltip-theme'
        },
        {
          'name': 'content',
          'type': 'String',
          'defaultValue': '',
          'desc': {
            'zh-CN': '显示的内容，也可以通过 slot#content 传入 DOM',
            'en-US': 'Displayed content. You can also use slot#content to transfer the content to the DOM.'
          },
          'demoId': 'basic-usage'
        },
        {
          'name': 'append-to-body',
          'type': 'Boolean',
          'defaultValue': '该属性的默认值为 true',
          'desc': { 'zh-CN': '是否添加到body上', 'en-US': 'Whether to add to body' },
          'demoId': ''
        },
        {
          'name': 'placement',
          'type': 'String',
          'defaultValue': '该属性的默认值为 bottom',
          'desc': {
            'zh-CN':
              'Tooltip 的出现位置;该属性的可选值为 top/top-start/top-end/bottom/bottom-start/bottom-end/left/left-start/left-end/right/right-start/right-end',
            'en-US':
              'Location where the tooltip appears; The optional value of this attribute is top/top-start/top-end/bottom/bottom-start/bottom-end/left/left-start/left-end/right/right-start/right-end'
          },
          'demoId': 'basic-usage'
        },
        {
          'name': 'modelValue / v-model',
          'type': 'Boolean',
          'defaultValue': '该属性的默认值为 false',
          'desc': { 'zh-CN': '状态是否可见', 'en-US': 'Whether the status is visible' },
          'demoId': 'manual-control-tip'
        },
        {
          'name': 'disabled',
          'type': 'Boolean',
          'defaultValue': '该属性的默认值为 false',
          'desc': { 'zh-CN': 'Tooltip 是否可用', 'en-US': 'Whether Tooltip is available' },
          'demoId': 'dynamic-disable'
        },
        {
          'name': 'offset',
          'type': 'Number',
          'defaultValue': '该属性的默认值为 0',
          'desc': { 'zh-CN': '出现位置的偏移量', 'en-US': 'Offset of the occurrence position' },
          'demoId': 'tooltip-offset'
        },
        {
          'name': 'transition',
          'type': 'String',
          'defaultValue': '该属性的默认值为 tiny-fade-in-linear',
          'desc': { 'zh-CN': '定义渐变动画', 'en-US': 'Define gradient animation' },
          'demoId': 'custom-transition'
        },
        {
          'name': 'visible-arrow',
          'type': 'Boolean',
          'defaultValue': '该属性的默认值为 true',
          'desc': {
            'zh-CN': '是否显示 Tooltip 箭头，popper.js 的参数',
            'en-US': 'Indicates whether to display the tooltip arrow. This parameter is a parameter in popper.js.'
          },
          'demoId': 'visible-arrow'
        },
        {
          'name': 'popper-options',
          'type': 'Object',
          'defaultValue': "该属性的默认值为 { boundariesCBG XUI: 'body', gpuAcceleration: false }",
          'desc': {
            'zh-CN': 'popper.js 的参数;该属性的可选值为 参考 popper.js 文档',
            'en-US':
              'Parameters of popper.js; The optional value of this property is a reference to the popper.js document'
          },
          'demoId': 'popper-options'
        },
        {
          'name': 'open-delay',
          'type': 'Number',
          'defaultValue': '该属性的默认值为 0',
          'desc': { 'zh-CN': '延迟出现，单位毫秒', 'en-US': 'Delay, in milliseconds.' },
          'demoId': 'open-delay'
        },
        {
          'name': 'manual',
          'type': 'Boolean',
          'defaultValue': '该属性的默认值为 false',
          'desc': {
            'zh-CN': '手动控制模式，设置为 true 后，mouseenter 和 mouseleave 事件将不会生效',
            'en-US':
              'Manual control mode. If this parameter is set to true, the mouseenter and mouseleave events do not take effect.'
          },
          'demoId': 'manual-control-tip'
        },
        {
          'name': 'visible',
          'type': 'String',
          'defaultValue': '该属性的默认值为 always',
          'desc': {
            'zh-CN': '提示的智能出现的模式；该属性的可选值为 auto/always',
            'en-US': 'Indicated intelligent display mode; The value of this attribute can be auto or always'
          },
          'demoId': 'visible-show'
        },
        {
          'name': 'popper-class',
          'type': 'String',
          'defaultValue': '',
          'desc': { 'zh-CN': '为 Tooltip 的 popper 添加类名', 'en-US': 'Add a class name for the tooltip popper.' },
          'demoId': 'popper-class'
        },
        {
          'name': 'enterable',
          'type': 'Boolean',
          'defaultValue': '该属性的默认值为 true',
          'desc': { 'zh-CN': '鼠标是否可进入到 tooltip 中', 'en-US': 'Whether the mouse can go to the tooltip' },
          'demoId': 'enterable'
        },
        {
          'name': 'hide-after',
          'type': 'Number',
          'defaultValue': '该属性的默认值为 0',
          'desc': {
            'zh-CN': 'Tooltip 出现后自动隐藏延时，单位毫秒，为 0 则不会自动隐藏',
            'en-US':
              'Delay for automatically hiding the tooltip, in milliseconds. If the value is 0, the tooltip is not automatically hidden.'
          },
          'demoId': 'open-delay'
        },
        {
          'name': 'tabindex',
          'type': 'Number',
          'defaultValue': '',
          'desc': {
            'zh-CN': '配置该元素，配置的属性会自动添加到该组件的触发原上',
            'en-US':
              'Configure this element. The configured attributes will be automatically added to the trigger source of this component.'
          },
          'demoId': 'tabindex'
        },
        {
          'name': 'renderContent',
          'type': 'Function(arg1,arg2)',
          'defaultValue': '',
          'desc': {
            'zh-CN': '自定义渲染函数,返回需要渲染的节点内容 arg1:Vue的渲染函数h arg2:传递给组件的content文本',
            'en-US': ''
          },
          'demoId': 'tooltip-render-content'
        }
      ],
      'events': [],
      'slots': [
        {
          'name': 'default',
          'type': '',
          'defaultValue': '',
          'desc': { 'zh-CN': '默认插槽', 'en-US': 'Default slot' },
          'demoId': 'tooltip-content'
        },
        {
          'name': 'content',
          'type': '',
          'defaultValue': '',
          'desc': { 'zh-CN': '内容', 'en-US': 'Content' },
          'demoId': 'tooltip-content'
        }
      ]
    }
  ]
}
