export default {
  column: '2',
  owner: '',
  demos: [
    {
      'demoId': 'basic-usage',
      'name': { 'zh-CN': '基本用法', 'en-US': 'Basic Usage' },
      'desc': {
        'zh-CN': `<p>
          通过 <code>content</code> 属性指定提示的内容<br>
          通过 <code>placement</code> 属性指定提示的显示位置，支持12个显示位置<br>
          通过 <code>effect</code> 属性指定提示的效果<br>
        </p>`,
        'en-US': `<p>
          Specify the content of the prompt via the <code>content</code> attribute <br>
          Use the <code>placement</code> property to specify the display location of the prompt. 12 display locations are supported <br>
          Specify the effect of the prompt with the <code>effect</code> property <br>
        </p>`
      },
      'codeFiles': ['basic-usage.vue']
    },
    {
      'demoId': 'theme',
      'name': { 'zh-CN': '主题', 'en-US': 'Theme' },
      'desc': {
        'zh-CN': `<p>
          通过 <code>effect</code> 属性设置明暗效果,可选值 dark/light 两种效果,默认值为 dark，通常使用<code>effect</code>设置效果<br>
          通过 <code>type</code> 属性设置主题,它的优先级大于 <code>effect</code>; 可选值 'normal', 'warning', 'error', 'info', 'success', 。
        </p>
        `,
        'en-US': `<p>
          The <code>effect</code> property is used to set the light and dark effect. The optional dark/light effect is dark by default. The effect< br> is usually set by <code>effect</code>.
          Set the theme with the <code>type</code> property, which has a higher priority than the <code>effect</code>; Optional values 'normal', 'warning', 'error', 'info', 'success',.
         </p>`
      },
      'codeFiles': ['theme.vue']
    },
    {
      'demoId': 'control',
      'name': { 'zh-CN': '控制/禁用提示', 'en-US': 'Control/disable' },
      'desc': {
        'zh-CN': `<p>
            提示组件默认是监听鼠标移入/移出事件来触发，手动控制提示的出现，有以下方法：<br>
            1.通过 <code>visible</code> 属性设置是否智能识别溢出后提示,属性取值为 <code> always / auto </code>。当取值为<code>auto</code>时，智能提示是自动识别文字是否有长度溢出，动态的显示提示。<br>
            2.通过 <code>manual</code> 属性为 true 后,就可以通过设置 <code>v-model</code> 属性，动态控制显示和隐藏<br>
            3.通过 <code>diabled</code> 属性，直接禁用提示。<br>
          </p>`,
        'en-US': `<p>
            The Tooltip component is triggered by listening for mouse move in/out events by default, and manually controls the appearance of the prompt in the following ways: <br>
            1. Use the <code>visible</code> property to set whether the overflow prompt is intelligently recognized. The property value is <code> always/auto </code>. If the value is <code>auto</code>, the smart prompt automatically identifies whether the text length overruns and dynamically displays the prompt. <br>
            2. After the <code>manual</code> property is true, you can dynamically control the display and hiding of <br> by setting the <code>v-model</code> property.
            3. Use the <code>diabled</code> property to disable the tooltip. <br>
          </p>`
      },
      'codeFiles': ['control.vue']
    },
    {
      'demoId': 'content',
      'name': { 'zh-CN': '弹出层内容', 'en-US': 'Tooltip content' },
      'desc': {
        'zh-CN': `<p>
            通过 <code>content</code> 属性指定弹出的文本。<br>
            通过 <code>renderContent</code> 自定义渲染函数,返回需要渲染的节点内容，函数声明为： (h, content)=>vnode。<br>
            通过 <code>content</code> 插槽，自定义内容，当弹出复杂的内容结构时，推荐使用插槽的方式。<br>
          </p>`,
        'en-US': `<p>
            Specify the pop-up text via the <code>content</code> property. <br>
            A custom rendering function with <code>renderContent</code> returns the node content to be rendered. The function is declared as (h, content)=>vnode. <br>
            The <code>content</code> slot is used to customize content. It is recommended to use the slot when a complex content structure pops up. <br>
         </p>`
      },
      'codeFiles': ['content.vue']
    },
    {
      'demoId': 'offset',
      'name': { 'zh-CN': '弹出层的偏移', 'en-US': 'Offset' },
      'desc': {
        'zh-CN': `<p>通过 <code>offset</code> 属性设置 Tooltip 组件出现位置的偏移量。</p>`,
        'en-US':
          '<p>Use the <code>offset</code> property to set the offset of the position where the Tooltip component appears. </p>\n'
      },
      'codeFiles': ['offset.vue']
    },
    {
      'demoId': 'custom-popper',
      'name': { 'zh-CN': '弹出层的特性', 'en-US': 'Features of the popper layer' },
      'desc': {
        'zh-CN': `<p>
          通过 <code> visible-arrow </code> 属性设置是否显示小箭头。<br>
          通过 <code> enterable </code> 属性设置鼠标是否可进入到 tooltip 中。<br>
          通过 <code> popper-class </code> 属性设置弹出dom的类名，便于用户定制弹出层的样式。<br>
        </p>`,
        'en-US': `<p>
            The <code> visible-arrow </code> property sets whether the small arrow is displayed. <br>
            Use the <code> enterable </code> property to set whether the mouse can enter the tooltip. <br>
            You can use the <code> popper-class </code> property to set the class name of the eject dom to customize the style of the eject layer. <br>
          </p>`
      },
      'codeFiles': ['custom-popper.vue']
    },
    {
      'demoId': 'delay',
      'name': { 'zh-CN': '延迟控制', 'en-US': 'Delay control' },
      'desc': {
        'zh-CN': `<p>
            通过 <code>open-delay</code> 属性设置 Tooltip 组件延迟出现的时间，单位毫秒,默认值为 0。<br>
            通过 <code>close-delay</code> 属性设置 Tooltip 组件延迟关闭的时间，单位毫秒,默认值为 300。<br>
            通过 <code>hide-after</code> 属性设置 Tooltip 组件出现后自动隐藏的时间，单位毫秒，为 0 则不会自动隐藏,默认值为 0。<br>
          </p>`,
        'en-US': `<p>
            Use the <code>open-delay</code> property to set the delay in milliseconds for the Tooltip component to appear. The default value is 0. <br>
            Use the <code>close-delay</code> property to set the delay in closing the Tooltip component, in milliseconds. The default value is 300. <br>
            Run the <code>hide-after</code> property to set the time for the Tooltip component to be automatically hidden after it appears, in milliseconds. If it is 0, it will not be automatically hidden. The default value is 0. <br>
          </p>`
      },
      'codeFiles': ['delay.vue']
    },
    {
      'demoId': 'popper-options',
      'name': { 'zh-CN': '高级配置', 'en-US': 'Advanced configuration' },
      'desc': {
        'zh-CN':
          '<p>通过 <code>popper-options</code> 属性为 Tooltip 的 popper 配置参数,请参考下面的PopperOption文档</p>',
        'en-US':
          '<p>Use the <code>popper-options</code> property to configure popper parameters for Tooltip. Refer to the PopperOption documentation below </p>\n'
      },
      'codeFiles': ['popper-options.vue']
    },
    {
      'demoId': 'transition',
      'name': { 'zh-CN': '自定义渐变动画', 'en-US': 'Customized Animation' },
      'desc': {
        'zh-CN': '<p>通过 <code>transition</code> 定义渐变动画,默认选值为 <code>tiny-fade-in-linear</code></p>\n',
        'en-US':
          '<p>Define a gradient animation using <code>transition</code>. The default value is <code>tiny-fade-in-linear</code></p>'
      },
      'codeFiles': ['transition.vue']
    }
  ],
  apis: [
    {
      'name': 'tooltip',
      'type': 'component',
      'properties': [
        {
          'name': 'effect',
          'type': 'string',
          'defaultValue': 'dark',
          'desc': {
            'zh-CN': '默认提供的主题;该属性的可选值为 dark/light',
            'en-US': 'Default theme; The value of this attribute can be dark or light'
          },
          'demoId': 'theme'
        },
        {
          'name': 'type',
          'type': 'string',
          'defaultValue': '',
          'desc': {
            'zh-CN': '默认提供的类型;该属性的可选值为 normal/warning/error/info/success 。type的优先级大于effect',
            'en-US':
              'The default type is provided. The options for this attribute are normal, warning, error, information, and success. The priority of type is higher than that of effect.'
          },
          'demoId': 'theme'
        },
        {
          'name': 'content',
          'type': 'string',
          'defaultValue': '',
          'desc': {
            'zh-CN': '显示的内容',
            'en-US': 'Displayed content.'
          },
          'demoId': 'content'
        },
        {
          'name': 'placement',
          'type': 'string',
          'defaultValue': ' bottom',
          'desc': {
            'zh-CN':
              'Tooltip 的出现位置;该属性的可选值为 top/top-start/top-end/bottom/bottom-start/bottom-end/left/left-start/left-end/right/right-start/right-end',
            'en-US':
              'Location where the tooltip appears; The optional value of this attribute is top/top-start/top-end/bottom/bottom-start/bottom-end/left/left-start/left-end/right/right-start/right-end'
          },
          'demoId': 'basic-usage'
        },

        {
          'name': 'disabled',
          'type': 'boolean',
          'defaultValue': 'false',
          'desc': { 'zh-CN': 'Tooltip 是否禁用', 'en-US': 'Whether Tooltip is disable' },
          'demoId': 'control'
        },
        {
          'name': 'manual',
          'type': 'boolean',
          'defaultValue': 'false',
          'desc': {
            'zh-CN': '手动控制模式，设置为 true 后，mouseenter 和 mouseleave 事件将不会生效',
            'en-US':
              'Manual control mode. If this parameter is set to true, the mouseenter and mouseleave events do not take effect.'
          },
          'demoId': 'control'
        },
        {
          'name': 'modelValue / v-model',
          'type': 'boolean',
          'defaultValue': 'false',
          'desc': {
            'zh-CN': '配置 manual = true时，控制弹出状态',
            'en-US': 'If manual is set to true, the pop-up status is controlled'
          },
          'demoId': 'control'
        },
        {
          'name': 'offset',
          'type': 'number',
          'defaultValue': '0',
          'desc': { 'zh-CN': '弹出层出现位置的偏移量', 'en-US': 'Offset of the occurrence position' },
          'demoId': 'offset'
        },

        {
          'name': 'visible-arrow',
          'type': 'boolean',
          'defaultValue': 'true',
          'desc': {
            'zh-CN': '是否显示箭头',
            'en-US': 'Indicates whether to display the tooltip arrow.'
          },
          'demoId': 'custom-popper'
        },
        {
          'name': 'open-delay',
          'type': 'number',
          'defaultValue': '0',
          'desc': { 'zh-CN': '延迟出现的时长，单位毫秒', 'en-US': 'Open delay time, in milliseconds.' },
          'demoId': 'delay'
        },
        {
          'name': 'close-delay',
          'type': 'number',
          'defaultValue': '300',
          'desc': { 'zh-CN': '延迟关闭的时长，单位毫秒', 'en-US': 'Close Delay time, in milliseconds.' },
          'demoId': 'delay'
        },
        {
          'name': 'hide-after',
          'type': 'number',
          'defaultValue': ' 0',
          'desc': {
            'zh-CN': '出现后自动隐藏的时长，单位毫秒，为 0 则不会自动隐藏',
            'en-US':
              'Duration of automatic hiding after appearing, in milliseconds. If 0, it will not be automatically hidden'
          },
          'demoId': 'delay'
        },

        {
          'name': 'visible',
          'type': 'string',
          'defaultValue': 'always',
          'desc': {
            'zh-CN': '提示的智能出现的模式；该属性的可选值为 auto/always',
            'en-US':
              'The pattern of intelligent emergence of hints; The optional value for this property is auto/always'
          },
          'demoId': 'control'
        },
        {
          'name': 'enterable',
          'type': 'boolean',
          'defaultValue': ' true',
          'desc': {
            'zh-CN': '鼠标是否可进入到 tooltip 的弹出层中',
            'en-US': 'Whether the mouse can enter the pop-up layer of the tooltip'
          },
          'demoId': 'custom-popper'
        },
        {
          'name': 'popper-options',
          'type': 'object',
          'defaultValue': ' { }',
          'desc': {
            'zh-CN': '高级参数;请参考PopperOption的说明',
            'en-US': 'Advanced parameters; Refer to the description of PopperOption'
          },
          'demoId': 'popper-options'
        },
        {
          'name': 'popper-class',
          'type': 'string',
          'defaultValue': '',
          'desc': {
            'zh-CN': '为 Tooltip 的弹出层添加类名',
            'en-US': 'Add a class name to the pop-up layer of Tooltip'
          },
          'demoId': 'custom-popper'
        },
        {
          'name': 'append-to-body',
          'type': 'boolean',
          'defaultValue': ' true',
          'desc': { 'zh-CN': '是否将弹出层的元素添加到body上', 'en-US': 'Whether to append to body' },
          'demoId': ''
        },
        {
          'name': 'transition',
          'type': 'string',
          'defaultValue': 'tiny-fade-in-linear',
          'desc': { 'zh-CN': '定义渐变动画的类名', 'en-US': 'Define the class name of the gradient animation' },
          'demoId': 'transition'
        },
        {
          'name': 'tabindex',
          'type': 'number',
          'defaultValue': '',
          'desc': {
            'zh-CN': '设置组件的触发原的tabindex',
            'en-US': 'Sets the trigger original tabindex of the component'
          },
          'demoId': ''
        },
        {
          'name': 'renderContent',
          'type': '(h, content)=> vnode',
          'defaultValue': '',
          'desc': {
            'zh-CN': '自定义渲染函数,返回需要渲染的节点内容',
            'en-US': 'A custom rendering function that returns the contents of the node to be rendered'
          },
          'demoId': 'content'
        }
      ],
      'slots': [
        {
          'name': 'default',
          'type': '',
          'defaultValue': '',
          'desc': { 'zh-CN': '默认插槽', 'en-US': 'Default slot' },
          'demoId': 'basic-usage'
        },
        {
          'name': 'content',
          'type': '',
          'defaultValue': '',
          'desc': { 'zh-CN': '内容插槽', 'en-US': 'Content Slot' },
          'demoId': 'content'
        }
      ],
      'PopperOption': [
        {
          'name': 'bubbling',
          'type': 'Boolean',
          'defaultValue': 'false',
          'desc': {
            'zh-CN':
              '是否监听元素所有上级有滚动元素的scroll事件，监听到则更新popper的位置。用于解决某些弹出层位置在页面滚动时，位置不正确的场景！',
            'en-US':
              'Whether to monitor the scroll event of all elements with a scroll element in the upper level, and update the popper location if the scroll event is detected. Used to solve some pop-up layer position when the page scroll, the position is not correct scenario!'
          },
          'demoId': 'popper-options'
        },
        {
          'name': 'followReferenceHide',
          'type': '',
          'defaultValue': 'true',
          'desc': {
            'zh-CN': '当提示目标隐藏时，自动隐藏弹出层',
            'en-US': 'Automatically hides the pop-up layer when the target is prompted to hide'
          },
          'demoId': 'popper-options'
        },
        {
          'name': 'removeOnDestroy',
          'type': 'Boolean',
          'defaultValue': 'false',
          'desc': {
            'zh-CN': '弹出层消失后，是否移除弹出层的DOM元素',
            'en-US': 'Whether to remove DOM elements from the pop-up layer after the pop-up layer disappears'
          },
          'demoId': 'popper-options'
        }
      ]
    }
  ]
}
