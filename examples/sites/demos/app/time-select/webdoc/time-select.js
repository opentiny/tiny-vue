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
      'demoId': 'range-placeholder',
      'name': { 'zh-CN': '固定时间范围', 'en-US': 'Fixed Time Range' },
      'desc': { 'zh-CN': '详细用法参考如下示例', 'en-US': 'For details, see the following example.' },
      'codeFiles': ['range-placeholder.vue']
    },
    {
      'demoId': 'default-value',
      'name': { 'zh-CN': '选择器打开时默认时间设置', 'en-US': 'Default time setting when the selector is enabled' },
      'desc': {
        'zh-CN': '<p>通过 <code>default-value</code> 设置选择器打开显示默认时间</p>\n',
        'en-US': '<p>Use <code>default-value</code> to set the selector to open the default display time</p>\n'
      },
      'codeFiles': ['default-value.vue']
    },
    {
      'demoId': 'picker-options',
      'name': { 'zh-CN': '指定时间点', 'en-US': 'Specified time point' },
      'desc': { 'zh-CN': '<p>picker-options 设置时间点</p>\n', 'en-US': '<p>picker-options Set Time</p>\n' },
      'codeFiles': ['picker-options.vue']
    },
    {
      'demoId': 'suffix-icon',
      'name': { 'zh-CN': '后置图标', 'en-US': 'Rear icon' },
      'desc': {
        'zh-CN':
          '<p>通过 <code>suffix-icon</code> 属性设置日期输入框后置图标，从 <code>@opentiny/vue-icon</code> 中导入一个图标并进行初始化后传给 <code>suffix-icon</code>。</p>\n',
        'en-US':
          '<p> uses the <code>suffix-icon</code> attribute to set the icon behind the date text box. An icon is imported from the <code>@opentiny/vue-icon</code>, initialized, and transferred to the <code>suffix-icon</code>. </p>\n'
      },
      'codeFiles': ['suffix-icon.vue']
    },
    {
      'demoId': 'clear-icon',
      'name': { 'zh-CN': '自定义清空图标', 'en-US': 'Customized Clear Icon' },
      'desc': {
        'zh-CN': '<p>通过 <code>clear-icon</code> 自定义清空图标</p>\n',
        'en-US': '<p>Clear the icon by <code>clear-icon</code></p>\n'
      },
      'codeFiles': ['clear-icon.vue']
    },
    {
      'demoId': 'clearable',
      'name': { 'zh-CN': '显示清除按钮', 'en-US': 'Display the Clear button' },
      'desc': { 'zh-CN': '详细用法参考如下示例', 'en-US': 'For details, see the following example.' },
      'codeFiles': ['clear-icon.vue']
    },
    {
      'demoId': 'name',
      'name': { 'zh-CN': '原生属性', 'en-US': 'Native Attribute' },
      'desc': { 'zh-CN': '详细用法参考如下示例', 'en-US': 'For details, see the following example.' },
      'codeFiles': ['clear-icon.vue']
    },
    {
      'demoId': 'event-blur',
      'name': { 'zh-CN': '事件', 'en-US': 'Event' },
      'desc': {
        'zh-CN': '<p><code>focus</code> input 框聚焦时触发，<code>blur</code> input 框失焦时触发</p>\n',
        'en-US':
          'Triggered when the <p><code>focus</code> input frame is focused and when the input frame is out of focus</p>\n'
      },
      'codeFiles': ['event-blur.vue']
    },
    {
      'demoId': 'editable',
      'name': { 'zh-CN': '文本框不可编辑', 'en-US': 'The text box cannot be edited.' },
      'desc': {
        'zh-CN': '<p>日期输入框默认可以输入日期，设置 <code>editable</code> 为 false 后，将不能输入。</p>\n',
        'en-US':
          'By default, you can enter a date in the <p>Date text box. If you set <code>editable</code> to false, you cannot enter a date in the <p>Date text box. </p>\n'
      },
      'codeFiles': ['editable.vue']
    },
    {
      'demoId': 'disabled',
      'name': { 'zh-CN': '禁用', 'en-US': 'Disabled' },
      'desc': { 'zh-CN': '详细用法参考如下示例', 'en-US': 'For details, see the following example.' },
      'codeFiles': ['disabled.vue']
    },
    {
      'demoId': 'popper-class',
      'name': { 'zh-CN': '自定义类名', 'en-US': 'Customized class name' },
      'desc': { 'zh-CN': '详细用法参考如下示例', 'en-US': 'For details, see the following example.' },
      'codeFiles': ['popper-class.vue']
    },
    {
      'demoId': 'size-mini',
      'name': { 'zh-CN': 'mini 尺寸', 'en-US': 'mini size' },
      'desc': { 'zh-CN': '详细用法参考如下示例', 'en-US': 'For details, see the following example.' },
      'codeFiles': ['size-mini.vue']
    },
    {
      'demoId': 'size-small',
      'name': { 'zh-CN': 'small 尺寸', 'en-US': 'small size' },
      'desc': { 'zh-CN': '详细用法参考如下示例', 'en-US': 'For details, see the following example.' },
      'codeFiles': ['size-small.vue']
    },
    {
      'demoId': 'size-medium',
      'name': { 'zh-CN': 'medium 尺寸', 'en-US': 'medium Size' },
      'desc': { 'zh-CN': '详细用法参考如下示例', 'en-US': 'For details, see the following example.' },
      'codeFiles': ['size-medium.vue']
    },
    {
      'demoId': 'focus',
      'name': { 'zh-CN': '手动获取焦点', 'en-US': 'Manually obtaining the focus' },
      'desc': { 'zh-CN': '详细用法参考如下示例', 'en-US': 'For details, see the following example.' },
      'codeFiles': ['focus.vue']
    }
  ],
  apis: [
    {
      'name': 'time-select',
      'type': 'component',
      'properties': [
        {
          'name': 'modelValue / v-model',
          'type': 'date(DatePicker) / array(DateRangePicker)',
          'defaultValue': '日期选择器选中的日期值，可设置选择器的初始值',
          'desc': {
            'zh-CN': '绑定值',
            'en-US': 'Date value selected by the date selector. You can set the initial value of the selector.'
          },
          'demoId': 'basic-usage'
        },
        {
          'name': 'disabled',
          'type': 'boolean',
          'defaultValue': '该属性的默认值为 false',
          'desc': { 'zh-CN': '禁用', 'en-US': 'Disabled' },
          'demoId': 'disabled'
        },
        {
          'name': 'editable',
          'type': 'boolean',
          'defaultValue': '该属性的默认值为 true',
          'desc': { 'zh-CN': '文本框可输入', 'en-US': 'The text box can be entered.' },
          'demoId': 'basic-usage'
        },
        {
          'name': 'clearable',
          'type': 'boolean',
          'defaultValue': '该属性的默认值为 true',
          'desc': { 'zh-CN': '是否显示清除按钮', 'en-US': 'Display Clear Button' },
          'demoId': 'clear-icon'
        },
        {
          'name': 'size',
          'type': 'string',
          'defaultValue': '',
          'desc': {
            'zh-CN': '输入框尺寸;该属性的可选值为 medium,small, mini',
            'en-US': 'Text box size; The values of this attribute are medium, small, and mini'
          },
          'demoId': 'size-mini'
        },
        {
          'name': 'placeholder',
          'type': 'string',
          'defaultValue': '该属性的默认值为空',
          'desc': { 'zh-CN': '非范围选择时的占位内容', 'en-US': 'Placeholder content for non-range selection' },
          'demoId': 'basic-usage'
        },
        {
          'name': 'popper-class',
          'type': 'string',
          'defaultValue': '',
          'desc': {
            'zh-CN': 'TimePicker 下拉框的 class 类名',
            'en-US': 'Class name of the TimePicker drop-down list box'
          },
          'demoId': 'popper-class'
        },
        {
          'name': 'picker-options',
          'type': 'object',
          'defaultValue': '该属性的默认值为 {}',
          'desc': {
            'zh-CN': '当前时间日期选择器特有的选项参考下表',
            'en-US': 'The following table lists the options of the current time and date selector.'
          },
          'demoId': 'picker-options'
        },
        {
          'name': 'default-value',
          'type': 'Date',
          'defaultValue': '',
          'desc': {
            'zh-CN': '可选，当选中的日期值为空时，选择器面板打开时默认显示的时间，需设置为可被new Date()解析的值',
            'en-US':
              'Optional. When the selected date is empty, the time displayed by default when the selector panel is opened. Set it to a value that can be parsed by new Date().'
          },
          'demoId': 'default-value'
        },
        {
          'name': 'name',
          'type': 'string',
          'defaultValue': '',
          'desc': { 'zh-CN': '原生属性', 'en-US': 'Native attribute' },
          'demoId': 'name'
        },
        {
          'name': 'suffix-icon',
          'type': 'string',
          'defaultValue': '该自定后置图标，该属性的默认值为 IconCalendar',
          'desc': { 'zh-CN': '自定义头部图标', 'en-US': 'Custom header icon' },
          'demoId': 'suffix-icon'
        },
        {
          'name': 'clear-icon',
          'type': 'string',
          'defaultValue': '该属性的默认值为 IconOperationfaild',
          'desc': { 'zh-CN': '自定义清空图标', 'en-US': 'Customized clear icon' },
          'demoId': 'clear-icon'
        },
        {
          'name': 'popper-append-to-body',
          'type': 'boolean',
          'defaultValue': '该属性的默认值为 true',
          'desc': {
            'zh-CN': '是否将弹出框插入至 body 元素。在弹出框的定位出现问题时，可将该属性设置为 false',
            'en-US':
              'Indicates whether to insert a pop-up box to the body element. If a fault occurs in locating the fault in the dialog box that is displayed, you can set this attribute to false'
          },
          'demoId': ''
        }
      ],
      'events': [
        {
          'name': 'change',
          'type': '',
          'defaultValue': '',
          'desc': {
            'zh-CN': '用户确认选定的值时触发',
            'en-US': 'This event is triggered when the user confirms the selected value.'
          },
          'demoId': 'event-blur'
        },
        {
          'name': 'blur',
          'type': '',
          'defaultValue': '',
          'desc': {
            'zh-CN': '当 input 失去焦点时触发',
            'en-US': 'This event is triggered when the input loses focus.'
          },
          'demoId': 'event-blur'
        },
        {
          'name': 'focus',
          'type': '',
          'defaultValue': '',
          'desc': { 'zh-CN': '当 input 获得焦点时触发', 'en-US': 'This event is triggered when the input is focused.' },
          'demoId': 'event-blur'
        }
      ],
      'slots': [],
      'methods': [
        {
          'name': 'focus',
          'type': '',
          'defaultValue': '',
          'desc': { 'zh-CN': '使 input 获取焦点', 'en-US': 'Enable input to focus.' },
          'demoId': 'focus'
        }
      ]
    }
  ]
}
