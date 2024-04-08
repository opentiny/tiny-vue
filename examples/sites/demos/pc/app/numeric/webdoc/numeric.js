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
        'zh-CN': '可通过<code>v-model</code>属性设置绑定输入值。',
        'en-US': 'Bind input value through <code>v-model</code> attribute'
      },
      codeFiles: ['basic-usage.vue']
    },
    {
      demoId: 'max-min',
      name: {
        'zh-CN': '最值与数值循环',
        'en-US': 'Extremum and loop'
      },
      desc: {
        'zh-CN':
          '可通过<code>max</code>属性设置计数器允许的最大值，<code>min</code>属性设置计数器允许的最小值，<code>circulate</code>属性设置当计数器的数值为最大值，继续计数，是否从最小值开始计数。',
        'en-US':
          'By setting the maximum value allowed by the<code>max</code>attribute counter, setting the minimum value allowed by the<code>min</code>attribute counter, and setting the<code>cycle</code>attribute, when the counter value reaches the maximum value, continue counting, whether to start counting from the minimum value.'
      },
      codeFiles: ['max-min.vue']
    },
    {
      demoId: 'about-step',
      name: {
        'zh-CN': '步长',
        'en-US': 'Step'
      },
      desc: {
        'zh-CN': '可通过<code>step</code>属性设置计数器的加减数值。',
        'en-US': 'Set the addition and subtraction values of the counter through the<code>step</code>attribute.'
      },
      codeFiles: ['about-step.vue']
    },
    {
      demoId: 'precision',
      name: {
        'zh-CN': '数值精度及格式',
        'en-US': 'Numerical precision and format'
      },
      desc: {
        'zh-CN': '可通过<code>precision</code>属性设置计数器的精度值，<code>format</code>属性设置数字显示格式。',
        'en-US':
          'Set the precision value of the counter through the<code>precision</code>attribute,<code>format</code> property sets the numeric display format.'
      },
      codeFiles: ['precision.vue']
    },
    {
      demoId: 'dynamic-disabled',
      name: {
        'zh-CN': '禁用',
        'en-US': 'Disabled'
      },
      desc: {
        'zh-CN': '可通过<code>disabled</code>属性设置是否禁用计数器。',
        'en-US': 'Disable the counter by setting <code>disabled</code>.'
      },
      codeFiles: ['dynamic-disabled.vue']
    },
    {
      demoId: 'allow-empty',
      name: {
        'zh-CN': '可清空',
        'en-US': 'Clearable'
      },
      desc: {
        'zh-CN':
          '可通过<code>allow-empty</code>属性设置计数器内容的可清空特性，默认为 <code>false</code>，表示不可清空。',
        'en-US':
          'You can use the <code>allow-empty</code> property to set the clearability of counter contents. The default value is <code>false</code>, indicating that the data cannot be cleared. '
      },
      codeFiles: ['allow-empty.vue']
    },
    {
      demoId: 'empty-value',
      name: {
        'zh-CN': '设定清空输入后的绑定值',
        'en-US': 'Sets the binding value after the input is cleared'
      },
      desc: {
        'zh-CN':
          '可通过 <code>empty-value</code> 属性设置计数器在可清空下，清空后组件的绑定值。默认为 <code>undefined</code>。示例中将清空后组件绑定值改为<code>null</code>',
        'en-US':
          'You can use the <code>empty-value</code> attribute to set the binding value of the cleared component when the counter can be cleared. The default value is <code>undefined</code>. In the example, the component binding value is changed to <code>null</code>.'
      },
      codeFiles: ['empty-value.vue']
    },
    {
      demoId: 'numeric-size',
      name: {
        'zh-CN': '尺寸',
        'en-US': 'Size'
      },
      desc: {
        'zh-CN':
          '可通过<code>size</code> 属性设置计数器尺寸，可选值有<code>medium</code><code>small</code><code>mini</code>。',
        'en-US':
          'You can set the counter size through the<code>size</code>attribute.The value can be <code>medium</code><code>small</code><code>mini</code>. '
      },
      codeFiles: ['numeric-size.vue']
    },
    {
      demoId: 'controls',
      name: {
        'zh-CN': '加减按钮',
        'en-US': 'Control Button'
      },
      desc: {
        'zh-CN':
          '可通过<code>controls</code> 属性设置计数器是否显示加减按钮，<code>controls-position</code> 属性设置加减按钮显示的位置。加减按钮默认分列两侧显示，<code>show-left</code> 属性设置左对齐。',
        'en-US':
          'By setting whether the<code>controls</code>attribute counter displays add/subtract buttons, set the position where the<code>controls position</code>attribute add/subtract buttons are displayed. The addition and subtraction buttons are displayed on both sides of the column by default,<code>show-left</code> property set to left'
      },
      codeFiles: ['controls.vue']
    },
    {
      demoId: 'mouse-wheel',
      name: {
        'zh-CN': '鼠标滚轮滚动改变值',
        'en-US': 'Mouse wheel scrolling change value'
      },
      desc: {
        'zh-CN': '可通过<code>mouse-wheel</code>属性设置控制鼠标滚动滑轮的数值。',
        'en-US':
          'You can use the <code>mouse-wheel</code> attribute to control whether the scroll wheel can change the value. '
      },
      codeFiles: ['mouse-wheel.vue']
    },
    {
      demoId: 'unit',
      name: {
        'zh-CN': '单位',
        'en-US': 'Unit'
      },
      desc: {
        'zh-CN': '可通过<code>unit</code>属性设置计数器的单位，设置单位后，加减按钮将不可用。',
        'en-US':
          'Set the unit of the counter by using the <code>unit</code>property. After setting the unit, the increase and decrease buttons will be disabled.'
      },
      codeFiles: ['unit.vue']
    },
    {
      demoId: 'change-event',
      name: {
        'zh-CN': '值改变事件',
        'en-US': 'Value change event'
      },
      desc: {
        'zh-CN':
          '可通过<code>@change</code>设置监听数值改变事件。当<code>change-compat</code>为false时，仅当加减按钮及直接输入数值时会触发<code>change</code>事件。',
        'en-US':
          'The <code>@change</code> event is triggered when the value of the text box is changed. When the<code>change compat</code>is false, the <code>change</code> event will be triggered when only the add and subtract buttons and directly entering numerical values are used.</p>\n'
      },
      codeFiles: ['change-event.vue']
    },
    {
      demoId: 'focus-event',
      name: {
        'zh-CN': '聚焦事件',
        'en-US': 'Focus Event'
      },
      desc: {
        'zh-CN': '可通过<code>@focus</code>设置监听输入框获得焦点事件。',
        'en-US': 'The <code>@focus</code> event is triggered when the text box is focused. '
      },
      codeFiles: ['focus-event.vue']
    },
    {
      demoId: 'blur-event',
      name: {
        'zh-CN': '失焦事件',
        'en-US': 'Out of Focus Event'
      },
      desc: {
        'zh-CN': '可通过<code>@blur</code>设置监听输入框失去焦点事件。',
        'en-US': 'The<code>@blur</code>event is triggered when the text box loses focus. '
      },
      codeFiles: ['blur-event.vue']
    },
    {
      demoId: 'string-mode',
      name: {
        'zh-CN': '高精度',
        'en-US': 'Out of Focus Event'
      },
      desc: {
        'zh-CN': '可通过 <code>string-mode</code> 设置高精度模式，当 JS 默认的 Number 不满足数字的长度与精度需求时。',
        'en-US': 'The<code>@blur</code>event is triggered when the text box loses focus. '
      },
      codeFiles: ['string-mode.vue']
    },
    {
      demoId: 'filter-mode',
      name: {
        'zh-CN': '过滤器模式',
        'en-US': 'Filter Mode'
      },
      desc: {
        'zh-CN':
          '通过<code> shape="filter" </code>属性设置切换过滤器模式，过滤器模式下可传入<code>title</code>显示标题，<code>tip</code>显示提示信息，<code>clearable</code>是否显示清除按钮，默认值为<code>true</code>。<code>blank</code>属性将过滤器背景设置为透明。',
        'en-US':
          'Set the <code>shape="filter"</code> attribute to switch the filter mode. In the filter mode, you can transfer the <code>title</code> to display the title and <code>tip</code> to display the prompt. <code>clearable</code>Indicates whether to display the Clear button. The default value is <code>true</code>.<code>blank</code> property sets the filter background to transparent.'
      },
      codeFiles: ['filter-mode.vue']
    },
    {
      demoId: 'filter-mode-change',
      name: {
        'zh-CN': '过滤器模式change事件',
        'en-US': 'Filter Mode'
      },
      desc: {
        'zh-CN':
          '通过<code>filter</code>属性展示筛选框，<code>filter-change</code>事件筛选框选择触发，过滤器模式下点击关闭图标，触发<code>clear</code>事件。',
        'en-US':
          'The <code>filter</code> attribute is used to display the filter box. Select Trigger in the <code>filter-change</code> event filter box. In filter mode, click the close icon to trigger the <code>clear</code> event.'
      },
      codeFiles: ['filter-mode-change.vue']
    }
  ]
}
