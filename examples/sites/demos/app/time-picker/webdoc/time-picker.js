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
      'demoId': 'picker-options',
      'name': { 'zh-CN': '选择范围', 'en-US': 'Selection Range' },
      'desc': {
        'zh-CN': '<p>picker-options 设置时间选择范围</p>\n',
        'en-US': '<p>picker-options Set the time range</p>\n'
      },
      'codeFiles': ['picker-options.vue']
    },
    {
      'demoId': 'arrow-control',
      'name': { 'zh-CN': '箭头选择', 'en-US': 'Arrow Selection' },
      'desc': {
        'zh-CN':
          '<p><code>arrow-control</code> 属性设置是否使用箭头进行时间选择。</p>\n',
        'en-US':
          'The <p><code>arrow-control</code> property specifies whether to use the arrow to select the time.</p>\n'
      },
      'codeFiles': ['arrow-control.vue']
    },
    {
      'demoId': 'step',
      'name': { 'zh-CN': '步长', 'en-US': 'Clear Input' },
      'desc': {
        'zh-CN':
          '<p>通过 <code>step</code> 设置步长，默认值为 <code>{ hour: 1, minute: 1, second: 1 }</code>，其中 <code>hour</code> 的设置范围是 <code>0-23</code>，<code>minute</code>、<code>second</code> 的设置范围是 <code>0-60</code>。可单独设置其中的一项或多项值，未设置的默认值为 <code>1</code>。</p>\n',
        'en-US': '<p>Set the step size through <code> step </code>. The default value is <code> {hour: 1, minute: 1, second: 1} </code>, where the setting range of <code> hour </code> is <code> 0-23 </code>, <code> minute </code>, <code> second </code> is <code> 0-60 </code>. One or more of these values can be set separately, and the unset default value is <code> 1 </code>.</p>\n'
      },
      'codeFiles': ['step.vue']
    },
    {
      'demoId': 'size',
      'name': { 'zh-CN': '尺寸', 'en-US': 'Size' },
      'desc': {
        'zh-CN': '<p>通过 <code>size</code> 自定义组件尺寸</p>\n',
        'en-US': '<p>Customize size by <code>size</code></p>\n'
      },
      'codeFiles': ['size.vue']
    },
    {
      'demoId': 'clearable',
      'name': { 'zh-CN': '清除按钮', 'en-US': 'Customized rear icon' },
      'desc': {
        'zh-CN': '<p>通过 <code>clearable</code> 属性设置是否显示清除按钮，默认值为 true。通过 <code>clear-icon</code> 属性可以自定义清除按钮的图标。</p>\n',
        'en-US':
          '<p>Set whether the clear button is displayed through the <code> clearable </code> property, which defaults to true. You can customize the icon of the clear button through the <code> clear-icon </code> property.</p>\n'
      },
      'codeFiles': ['clearable.vue']
    },
    {
      'demoId': 'suffix-icon',
      'name': { 'zh-CN': '自定义后置图标', 'en-US': 'Time Format' },
      'desc': {
        'zh-CN':
          '<p>通过 <code>suffix-icon</code> 属性设置日期输入框后置图标，从 <code>@opentiny/vue-icon</code> 中导入一个图标并进行初始化后传给 <code>suffix-icon</code>。</p>\n',
        'en-US':
          'The <p><code>format</code> time format is displayed. \n<code>timestamp</code>JS timestamp is available only in value-format. The component binding value is of the number type</p>\n'
      },
      'codeFiles': ['suffix-icon.vue']
    },
    {
      'demoId': 'format',
      'name': { 'zh-CN': '时间格式化', 'en-US': 'Time display type' },
      'desc': {
        'zh-CN':
          '<p><code>format</code> 时间格式化显示\n<code>timestamp</code> JS 时间戳，仅 value-format 可用；组件绑定值为 number 类型</p>\n',
        'en-US':
          '<p>You can set the 12-hour format through the <code>hh</code> attribute. The <code>HH</code> attribute is in the 24-hour format and must be used with A or a. The <code>h</code> and <code>H</code> attributes are not set to 0. \nYou can use the <code>mm</code> attribute to set the minute display format, for example, 01. The <code>m</code> attribute is not set to 0. \nYou can use the <code>ss</code> attribute to set the display format of seconds, for example, 01. The <code>s</code> attribute is not set to 0. \nThe <code>a</code> property can be used to set the display time to am/pm <code>A</code> property can be used to set the display time to AM/PM. </p>\n'
      },
      'codeFiles': ['format.vue']
    },
    {
      'demoId': 'time-low',
      'name': { 'zh-CN': '时间显示类型', 'en-US': 'Date Display Format' },
      'desc': {
        'zh-CN':
          '<p>通过 <code>hh</code> 属性可设置 12 小时制。 <code>HH</code> 属性为 24 小时制，须和 A 或 a 使用。 <code>h</code> 与 <code>H</code> 属性设置不补 0。\n通过 <code>mm</code> 属性可设置分钟显示格式，例如 01。 <code>m</code> 属性设置不补 0。\n通过 <code>ss</code> 属性可设置秒的显示格式，例如 01。 <code>s</code> 属性设置不补 0。\n通过 <code>a</code> 属性可设置显示时间为 am/pm <code>A</code>属性设置显示时间为 AM/PM。</p>\n',
        'en-US':
          'The <p><code>WW</code> attribute is set to week, for example, 01. The <code>W</code> attribute is set to zeros. \n<code>yyyy</code> The attribute sets the year, for example, 2020. \n<code>MM</code>: month. For example, 01 <code>M</code>: 0 is not added. \n<code>dd</code> attribute setting date, for example, 01 <code>d</code>. </p>\n'
      },
      'codeFiles': ['time-low.vue']
    },
    {
      'demoId': 'date',
      'name': { 'zh-CN': '日期显示格式', 'en-US': 'Range Selection' },
      'desc': {
        'zh-CN':
          '<p><code>WW</code> 属性设置周，例如 01, <code>W</code> 属性设置不补 0。\n<code>yyyy</code> 属性设置年，例如 2020。\n<code>MM</code> 属性设置月，例如 01 <code>M</code> 属性设置不补 0。\n<code>dd</code> 属性设置日，例如 01 <code>d</code> 属性设置不补 0。</p>\n',
        'en-US':
          "<p><code>is-range</code>: indicates whether to select a range. The default value is false. <code>range-separator</code>. Set the range-separator (optional) to '-' by default. </p>\n"
      },
      'codeFiles': ['date.vue']
    },
    {
      'demoId': 'is-range',
      'name': { 'zh-CN': '范围选择', 'en-US': 'Default time setting when the selector is enabled' },
      'desc': {
        'zh-CN':
          '<p><code>is-range</code> 设置是否为范围选择，默认为 false，<code>range-separator</code>，设置范围选择分隔符（为可选值）默认为 \'-\'</p>\n',
        'en-US': '<p><code> is-range </code> whether the setting is range selection. Default is false, <code> range-separator </code>, and the range selection delimiter (optional) defaults to\'-\'</p>\n'
      },
      'codeFiles': ['is-range.vue']
    },
    {
      'demoId': 'default-value',
      'name': { 'zh-CN': '选择器打开时默认时间设置', 'en-US': 'Native Attribute' },
      'desc': {
        'zh-CN': '<p>通过 <code>default-value</code> 设置选择器打开显示默认时间</p>\n',
        'en-US': '<p>Set the default name through the <code>name</code> attribute</p>\n'
      },
      'codeFiles': ['default-value.vue']
    },
    {
      'demoId': 'name',
      'name': { 'zh-CN': '原生属性', 'en-US': 'Class name of the drop-down list box' },
      'desc': {
        'zh-CN': '<p>通过 <code>name</code> 属性设置默认 name</p>\n',
        'en-US': '<p>Set the class name of the drop-down list box through the <code>popper-class</code> attribute</p>\n'
      },
      'codeFiles': ['name.vue']
    },
    {
      'demoId': 'popper-class',
      'name': { 'zh-CN': '下拉框的类名', 'en-US': 'The text box cannot be entered.' },
      'desc': {
        'zh-CN': '<p>通过 <code>popper-class</code> 属性设置下拉框的类名。通过 <code>popper-append-to-body</code> 属性设置是否将下拉框放到 body 元素上，默认值为 true，下拉框挂在 body 元素上。</p>\n',
        'en-US':
          '<p>Set the class name of the drop-down box through the <code> popper-class </code> attribute, and set whether the drop-down box is placed on the body element through the <code> popper-append-to-body </code> attribute. The default value is true, and the drop-down box hangs on the body element.</p>\n'
      },
      'codeFiles': ['popper-class.vue']
    },
    {
      'demoId': 'editable',
      'name': { 'zh-CN': '文本框不可输入', 'en-US': 'Disabled status' },
      'desc': {
        'zh-CN': '<p>日期输入框默认可以输入日期，设置 <code>editable</code> 为 false 后，将不能输入。</p>\n',
        'en-US': '<p>You can set <code>disabled</code> to true, you can disabled the time picker。</p>\n'
      },
      'codeFiles': ['editable.vue']
    },
    {
      'demoId': 'disabled',
      'name': { 'zh-CN': '禁用状态', 'en-US': 'Event' },
      'desc': {
        'zh-CN': '<p>通过设置 <code>disabled</code> 为 true 后，禁用时间输入框。</p><p>通过设置 <code>picker-options</code> 的 <code>selectableRange</code> 属性，可以实现部分禁用，此时只能选择一部分时间。</p>\n',
        'en-US':
          '<p>Disable the time input box by setting <code> disabled </code> to true.</p><p>Partial disable can be achieved by setting the <code>selectableRange<code> property of <code>picker-options<code>, and only a part of time can be selected at this time.</p>\n'
      },
      'codeFiles': ['disabled.vue']
    },
    {
      'demoId': 'event-blur',
      'name': { 'zh-CN': '事件', 'en-US': '' },
      'desc': {
        'zh-CN': '<p>当聚焦和失焦时会触发 focus 和 bulr 事件，当确定选值时会触发 change 事件</p>\n',
        'en-US': ''
      },
      'codeFiles': ['event-blur.vue']
    },
  ],
  apis: [
    {
      'name': 'time-picker',
      'type': 'component',
      'properties': [
        {
          'name': 'arrow-control',
          'type': 'Boolean',
          'defaultValue': '该属性的默认值为 false',
          'desc': {
            'zh-CN': '是否使用箭头进行时间选择',
            'en-US': 'Whether to use arrows for time selection'
          },
          'demoId': 'arrow-control'
        },
        {
          'name': 'clearable',
          'type': 'Boolean',
          'defaultValue': '该属性的默认值为 true',
          'desc': { 'zh-CN': '是否显示清除按钮', 'en-US': 'Display Clear Button' },
          'demoId': 'clearable'
        },
        {
          'name': 'clear-icon',
          'type': 'String',
          'defaultValue': '该属性的默认值为 IconOperationfaild',
          'desc': {
            'zh-CN': '自定义清空图标',
            'en-US':
              'Indicates whether to insert a pop-up box to the body element. If a fault occurs in locating the fault in the dialog box that is displayed, you can set this attribute to false'
          },
          'demoId': 'clear-icon'
        },
        {
          'name': 'default-value',
          'type': 'Date',
          'defaultValue': '',
          'desc': {
            'zh-CN': '可选，当选中的日期值为空时，选择器面板打开时默认显示的时间，需设置为可被new Date()解析的值',
            'en-US': 'Native attribute'
          },
          'demoId': 'default-value'
        },
        {
          'name': 'disabled',
          'type': 'Boolean',
          'defaultValue': '该属性的默认值为 false',
          'desc': { 'zh-CN': '禁用', 'en-US': 'Disabled' },
          'demoId': 'disabled'
        },
        {
          'name': 'editable',
          'type': 'Boolean',
          'defaultValue': '该属性的默认值为 true',
          'desc': { 'zh-CN': '文本框可输入', 'en-US': 'The text box can be entered.' },
          'demoId': 'editable'
        },
        {
          'name': 'end-placeholder',
          'type': 'String',
          'defaultValue': '',
          'desc': {
            'zh-CN': '范围选择时结束日期的占位内容',
            'en-US': 'Placeholder of the end date when the range is selected'
          },
          'demoId': ''
        },
        {
          'name': 'is-range',
          'type': 'Boolean',
          'defaultValue': '该属性的默认值为 false',
          'desc': {
            'zh-CN': '是否为时间范围选择，仅对<tiny-time-picker>有效',
            'en-US':
              'Indicates whether to use arrows to select time. This parameter is valid only for <tiny-time-picker>.'
          },
          'demoId': 'is-range'
        },
        {
          'name': 'modelValue / v-model',
          'type': 'date(DatePicker) / array(DateRangePicker)',
          'defaultValue': '',
          'desc': {
            'zh-CN': '日期选择器选中的日期值，可设置选择器的初始值',
            'en-US': 'Date value selected by the date selector. You can set the initial value of the selector.'
          },
          'demoId': 'basic-usage'
        },
        {
          'name': 'name',
          'type': 'String',
          'defaultValue': '',
          'desc': { 'zh-CN': '原生 input <code>name</code> 属性', 'en-US': 'Native input <code>name</code> attribute' },
          'demoId': 'name'
        },
        {
          'name': 'picker-options',
          'type': 'Object',
          'defaultValue': '该属性的默认值为 {}',
          'desc': { 'zh-CN': '当前时间日期选择器特有的选项参考下表', 'en-US': 'Separator for selecting a range' },
          'demoId': 'basic-usage1'
        },
        {
          'name': 'placeholder',
          'type': 'String',
          'defaultValue': '该属性的默认值为空',
          'desc': { 'zh-CN': '非范围选择时的占位内容', 'en-US': 'Placeholder content for non-range selection' },
          'demoId': ''
        },
        {
          'name': 'popper-append-to-body',
          'type': 'Boolean',
          'defaultValue': '该属性的默认值为 true',
          'desc': {
            'zh-CN': '是否将弹出框插入至 body 元素。在弹出框的定位出现问题时，可将该属性设置为 false',
            'en-US': ''
          },
          'demoId': 'popper-class'
        },
        {
          'name': 'popper-class',
          'type': 'String',
          'defaultValue': '',
          'desc': {
            'zh-CN': 'TimePicker 下拉框的 class 类名',
            'en-US': 'The following table lists the options of the current time and date selector.'
          },
          'demoId': 'popper-class'
        },
        {
          'name': 'range-separator',
          'type': 'String',
          'defaultValue': '该属性的默认值为 - ',
          'desc': {
            'zh-CN': '选择范围时的分隔符',
            'en-US':
              'Optional. When the selected date is empty, the time displayed by default when the selector panel is opened. Set it to a value that can be parsed by new Date().'
          },
          'demoId': ''
        },
        {
          'name': 'size',
          'type': 'String',
          'defaultValue': '',
          'desc': {
            'zh-CN': '输入框尺寸;该属性的可选值为 medium,small, mini',
            'en-US': 'Text box size; The values of this attribute are medium, small, and mini'
          },
          'demoId': 'size'
        },
        {
          'name': 'start-placeholder',
          'type': 'String',
          'defaultValue': '',
          'desc': {
            'zh-CN': '范围选择时开始日期的占位内容',
            'en-US': 'Placeholder of the start date when the range is selected'
          },
          'demoId': ''
        },
        {
          'name': 'step',
          'type': 'Object',
          'defaultValue': '',
          'desc': {
            'zh-CN': '自定义时分秒步长',
            'en-US': 'Indicates whether to select a time range. This parameter is valid only for <tiny-time-picker>.'
          },
          'demoId': 'step'
        },
        {
          'name': 'suffix-icon',
          'type': 'String',
          'defaultValue': '该自定后置图标， 该属性的默认值为 IconCalendar',
          'desc': { 'zh-CN': '自定义头部图标的类名', 'en-US': 'Custom Clear Icon' },
          'demoId': 'suffix-icon'
        },
      ],
      'events': [
        {
          'name': 'blur',
          'type': 'Function(arg)',
          'defaultValue': '',
          'desc': {
            'zh-CN': '当 input 失去焦点时触发;arg:{Object 时间组件Vue对象}',
            'en-US': 'This event is triggered when the input loses focus. arg:{Object Time Component Vue Object}'
          },
          'demoId': 'event-blur'
        },
        {
          'name': 'change',
          'type': 'Function(arg)',
          'defaultValue': '',
          'desc': {
            'zh-CN':
              '用户确认选定的值时触发;arg:{Date|Array 非范围选择时，是当前选定值的时间对象；范围选择时，是当前选定值的时间对象数组}',
            'en-US':
              'This event is triggered when the user confirms the selected value. arg:{Date|Array is the time object of the currently selected value when it is not selected in a range. When the range is selected, it is the time object array of the currently selected value}'
          },
          'demoId': 'event-blur'
        },
        {
          'name': 'focus',
          'type': 'Function(arg)',
          'defaultValue': '',
          'desc': {
            'zh-CN': '当 input 获得焦点时触发;arg:{Object 时间组件Vue对象}',
            'en-US': 'This event is triggered when the input is focused. arg:{Object Time Component Vue Object}'
          },
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
          'demoId': 'event-blur'
        }
      ]
    }
  ]
}
