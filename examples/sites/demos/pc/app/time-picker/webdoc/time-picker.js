export default {
  column: '2',
  owner: '',
  demos: [
    {
      'demoId': 'basic-usage',
      'name': { 'zh-CN': '基本用法', 'en-US': 'Basic Usage' },
      'desc': {
        'zh-CN': '<p>默认是通过滚动的方式选择时间，<code>arrow-control</code> 属性可以设置通过箭头的方式选择时间。</p>',
        'en-US': 'The default is to select the time by scrolling, and the <code> arrow-control </code> property can be set to select the time by the arrow.'
      },
      'codeFiles': ['basic-usage.vue']
    },
    {
      'demoId': 'is-range',
      'name': { 'zh-CN': '范围选择', 'en-US': 'Select time range' },
      'desc': {
        'zh-CN': '<p><code>is-range</code> 设置是否为范围选择，默认为 false，<code>range-separator</code>，设置范围选择分隔符（为可选值）默认为 \'-\'。</p>',
        'en-US': '<p><code> is-range </code> whether the setting is range selection. Default is false, <code> range-separator </code>, and the range selection delimiter (optional) defaults to\'-\'.</p>'
      },
      'codeFiles': ['is-range.vue']
    },
    {
      'demoId': 'disabled',
      'name': { 'zh-CN': '禁用状态', 'en-US': 'Disabled status' },
      'desc': {
        'zh-CN': '<p>通过设置 <code>disabled</code> 为 true 后，禁用时间输入框。</p><p>通过设置 <code>picker-options</code> 的 <code>selectableRange</code> 属性，可以实现部分禁用，此时只能选择一部分时间。</p>',
        'en-US': '<p>Disable the time input box by setting <code> disabled </code> to true.</p><p>Partial disable can be achieved by setting the <code>selectableRange<code> property of <code>picker-options<code>, and only a part of time can be selected at this time.</p>'
      },
      'codeFiles': ['disabled.vue']
    },
    {
      'demoId': 'placeholder',
      'name': {'zh-CN': '占位符', 'en-US': 'Placeholder' },
      'desc': {
        'zh-CN': '<p>通过 <code> placeholder </code> 属性设置时间输入框的占位符，通过 <code> start-placeholder </code> / <code> end-placeholder </code> 设置时间范围输入框的开始和结束时间的占位符。</p>',
        'en-US': '<p>Set the placeholder for the time input box through the <code> placeholder </code> property, and set the placeholder for the start and end time of the time range input box through <code> start-placeholder </code> / <code> end-placeholder </code>.</p>'
      },
      'codeFiles': ['placeholder.vue']
    },
    {
      'demoId': 'size',
      'name': { 'zh-CN': '尺寸', 'en-US': 'Size' },
      'desc': {
        'zh-CN': '<p>通过 <code>size</code> 自定义组件尺寸。</p>',
        'en-US': '<p>Customize size by <code>size</code>.</p>'
      },
      'codeFiles': ['size.vue']
    },
    {
      'demoId': 'step',
      'name': { 'zh-CN': '步长', 'en-US': 'Step' },
      'desc': {
        'zh-CN': '<p>通过 <code>step</code> 设置步长，默认值为 <code>{ hour: 1, minute: 1, second: 1 }</code>，其中 <code>hour</code> 的设置范围是 <code>0-23</code>，<code>minute</code>、<code>second</code> 的设置范围是 <code>0-60</code>。可单独设置其中的一项或多项值，未设置的默认值为 <code>1</code>。</p>',
        'en-US': '<p>Set the step size through <code> step </code>. The default value is <code> {hour: 1, minute: 1, second: 1} </code>, where the setting range of <code> hour </code> is <code> 0-23 </code>, <code> minute </code>, <code> second </code> is <code> 0-60 </code>. One or more of these values can be set separately, and the unset default value is <code> 1 </code>.</p>'
      },
      'codeFiles': ['step.vue']
    },
    {
      'demoId': 'clearable',
      'name': { 'zh-CN': '清除按钮', 'en-US': 'Customized clear icon' },
      'desc': {
        'zh-CN': '<p>通过 <code>clearable</code> 属性设置是否显示清除按钮，默认值为 true。通过 <code>clear-icon</code> 属性可以自定义清除按钮的图标。</p>',
        'en-US': '<p>Set whether the clear button is displayed through the <code> clearable </code> property, which defaults to true. You can customize the icon of the clear button through the <code> clear-icon </code> property.</p>'
      },
      'codeFiles': ['clearable.vue']
    },
    {
      'demoId': 'format',
      'name': { 'zh-CN': '时间格式化', 'en-US': 'Time format' },
      'desc': {
        'zh-CN': `
          <p><code>format</code> 时间格式化显示\n<code>timestamp</code> JS 时间戳，仅 value-format 可用；组件绑定值为 number 类型。</p>
          <p>通过 <code>hh</code> 属性可设置 12 小时制。 <code>HH</code> 属性为 24 小时制，须和 A 或 a 使用。 <code>h</code> 与 <code>H</code> 属性设置不补 0。\n通过 <code>mm</code> 属性可设置分钟显示格式，例如 01。 <code>m</code> 属性设置不补 0。\n通过 <code>ss</code> 属性可设置秒的显示格式，例如 01。 <code>s</code> 属性设置不补 0。\n通过 <code>a</code> 属性可设置显示时间为 am/pm <code>A</code>属性设置显示时间为 AM/PM。</p>
        `,
        'en-US': '<p>You can set the 12-hour format through the <code>hh</code> attribute. The <code>HH</code> attribute is in the 24-hour format and must be used with A or a. The <code>h</code> and <code>H</code> attributes are not set to 0. \nYou can use the <code>mm</code> attribute to set the minute display format, for example, 01. The <code>m</code> attribute is not set to 0. \nYou can use the <code>ss</code> attribute to set the display format of seconds, for example, 01. The <code>s</code> attribute is not set to 0. \nThe <code>a</code> property can be used to set the display time to am/pm <code>A</code> property can be used to set the display time to AM/PM. </p>'
      },
      'codeFiles': ['format.vue']
    },
    {
      'demoId': 'default-value',
      'name': { 'zh-CN': '默认时间', 'en-US': 'Default value' },
      'desc': {
        'zh-CN': '<p>通过 <code>default-value</code> 设置选择器打开显示默认时间。</p>',
        'en-US': '<p>Open and display the default time through the <code> default-value </code> setting selector.</p>'
      },
      'codeFiles': ['default-value.vue']
    },
    {
      'demoId': 'name',
      'name': { 'zh-CN': '原生属性', 'en-US': 'Native attribute' },
      'desc': {
        'zh-CN': '<p>通过 <code>name</code> 属性设置默认 name。</p>',
        'en-US': '<p>Set the default name through the <code> name </code> property.</p>'
      },
      'codeFiles': ['name.vue']
    },
    {
      'demoId': 'suffix-icon',
      'name': { 'zh-CN': '自定义后置图标', 'en-US': 'Customize suffix icon' },
      'desc': {
        'zh-CN': '<p>通过 <code>suffix-icon</code> 属性设置日期输入框后置图标，从 <code>@opentiny/vue-icon</code> 中导入一个图标并进行初始化后传给 <code>suffix-icon</code>。</p>',
        'en-US': 'The <p><code>format</code> time format is displayed. \n<code>timestamp</code>JS timestamp is available only in value-format. The component binding value is of the number type</p>'
      },
      'codeFiles': ['suffix-icon.vue']
    },
    {
      'demoId': 'popper-class',
      'name': { 'zh-CN': '下拉框的类名', 'en-US': 'Popper class' },
      'desc': {
        'zh-CN': '<p>通过 <code>popper-class</code> 属性设置下拉框的类名。通过 <code>popper-append-to-body</code> 属性设置是否将下拉框放到 body 元素上，默认值为 true，下拉框挂在 body 元素上。</p>',
        'en-US': '<p>Set the class name of the drop-down box through the <code> popper-class </code> attribute, and set whether the drop-down box is placed on the body element through the <code> popper-append-to-body </code> attribute. The default value is true, and the drop-down box hangs on the body element.</p>'
      },
      'codeFiles': ['popper-class.vue']
    },
    {
      'demoId': 'editable',
      'name': { 'zh-CN': '文本框不可输入', 'en-US': 'Text box is not editable' },
      'desc': {
        'zh-CN': '<p>日期输入框默认可以输入日期，设置 <code>editable</code> 为 false 后，将不能输入。</p>',
        'en-US': '<p>You can set <code>disabled</code> to true, you can disabled the time picker。</p>'
      },
      'codeFiles': ['editable.vue']
    },
    {
      'demoId': 'event',
      'name': { 'zh-CN': '事件', 'en-US': 'Event' },
      'desc': {
        'zh-CN': '<p>当聚焦和失焦时会触发 focus 和 blur 事件，当确定选值时会触发 change 事件。</p>',
        'en-US': ''
      },
      'codeFiles': ['event.vue']
    },
  ],
  apis: [
    {
      'name': 'time-picker',
      'type': 'component',
      'properties': [
        {
          'name': 'arrow-control',
          'type': 'boolean',
          'defaultValue': 'false',
          'desc': {
            'zh-CN': '是否使用箭头进行时间选择',
            'en-US': 'Whether to use arrows for time selection'
          },
          'demoId': 'arrow-control'
        },
        {
          'name': 'clearable',
          'type': 'boolean',
          'defaultValue': 'true',
          'desc': {
            'zh-CN': '是否显示清除按钮',
            'en-US': 'Display Clear Button'
          },
          'demoId': 'clearable'
        },
        {
          'name': 'clear-icon',
          'type': 'object',
          'defaultValue': 'IconOperationfaild',
          'desc': {
            'zh-CN': '自定义清空图标',
            'en-US': 'Indicates whether to insert a pop-up box to the body element. If a fault occurs in locating the fault in the dialog box that is displayed, you can set this attribute to false'
          },
          'demoId': 'clear-icon'
        },
        {
          'name': 'default-value',
          'type': 'Date | string | number | Array',
          'defaultValue': '',
          'desc': {
            'zh-CN': '当选中的日期值为空时，选择器面板打开时默认显示的时间，需设置为可被 new Date() 解析的值',
            'en-US': 'Native attribute'
          },
          'demoId': 'default-value'
        },
        {
          'name': 'disabled',
          'type': 'boolean',
          'defaultValue': 'false',
          'desc': {
            'zh-CN': '禁用',
            'en-US': 'Disabled'
          },
          'demoId': 'disabled'
        },
        {
          'name': 'editable',
          'type': 'boolean',
          'defaultValue': 'true',
          'desc': {
            'zh-CN': '文本框可输入',
            'en-US': 'The text box can be entered.'
          },
          'demoId': 'editable'
        },
        {
          'name': 'end-placeholder',
          'type': 'string',
          'defaultValue': '',
          'desc': {
            'zh-CN': '范围选择时结束日期的占位内容',
            'en-US': 'Placeholder of the end date when the range is selected'
          },
          'demoId': 'placeholder'
        },
        {
          'name': 'is-range',
          'type': 'boolean',
          'defaultValue': 'false',
          'desc': {
            'zh-CN': '是否为时间范围选择',
            'en-US': 'Indicates whether to use arrows to select time. This parameter is valid only for <tiny-time-picker>.'
          },
          'demoId': 'is-range'
        },
        {
          'name': 'modelValue / v-model',
          'type': 'Date | string | number | Array',
          'defaultValue': '--',
          'desc': {
            'zh-CN': '日期选择器选中的日期值，可设置选择器的初始值',
            'en-US': 'Date value selected by the date selector. You can set the initial value of the selector.'
          },
          'demoId': 'basic-usage'
        },
        {
          'name': 'name',
          'type': 'string',
          'defaultValue': '--',
          'desc': {
            'zh-CN': '原生 input <code>name</code> 属性',
            'en-US': 'Native input <code>name</code> attribute'
          },
          'demoId': 'name'
        },
        {
          'name': 'picker-options',
          'type': 'IPickerOptions',
          'typeAnchorName': 'IPickerOptions',
          'defaultValue': '--',
          'desc': {
            'zh-CN': '配置可选的时间范围、下拉框中显示的格式，包含 selectableRange / format 属性，详细用法可参考 IPickerOptions 类型声明',
            'en-US': ''
          },
          'demoId': 'disabled'
        },
        {
          'name': 'placeholder',
          'type': 'string',
          'defaultValue': '\'\'',
          'desc': {
            'zh-CN': '非范围选择时的占位内容',
            'en-US': 'Placeholder content for non-range selection'
          },
          'demoId': 'placeholder'
        },
        {
          'name': 'popper-append-to-body',
          'type': 'boolean',
          'defaultValue': 'true',
          'desc': {
            'zh-CN': '是否将弹出框插入至 body 元素，在弹出框的定位出现问题时，可将该属性设置为 false',
            'en-US': ''
          },
          'demoId': 'popper-class'
        },
        {
          'name': 'popper-class',
          'type': 'string',
          'defaultValue': '--',
          'desc': {
            'zh-CN': 'TimePicker 下拉框的 class 类名',
            'en-US': 'The following table lists the options of the current time and date selector.'
          },
          'demoId': 'popper-class'
        },
        {
          'name': 'range-separator',
          'type': 'string',
          'defaultValue': '\'-\'',
          'desc': {
            'zh-CN': '选择范围时的分隔符',
            'en-US': 'Optional. When the selected date is empty, the time displayed by default when the selector panel is opened. Set it to a value that can be parsed by new Date().'
          },
          'demoId': 'is-range'
        },
        {
          'name': 'size',
          'type': '\'medium\' | \'small\' | \'\' | \'mini\'',
          'defaultValue': '\'\'',
          'desc': {
            'zh-CN': '输入框尺寸',
            'en-US': 'Text box size; The values of this attribute are medium, small, and mini'
          },
          'demoId': 'size'
        },
        {
          'name': 'start-placeholder',
          'type': 'string',
          'defaultValue': '\'\'',
          'desc': {
            'zh-CN': '范围选择时开始日期的占位内容',
            'en-US': 'Placeholder of the start date when the range is selected'
          },
          'demoId': 'placeholder'
        },
        {
          'name': 'step',
          'type': 'IStep',
          'typeAnchorName': 'IStep',
          'defaultValue': '--',
          'desc': {
            'zh-CN': '自定义时分秒步长',
            'en-US': 'Indicates whether to select a time range. This parameter is valid only for <tiny-time-picker>.'
          },
          'demoId': 'step'
        },
        {
          'name': 'suffix-icon',
          'type': 'object',
          'defaultValue': 'IconCalendar',
          'desc': {
            'zh-CN': '自定义头部图标的类名',
            'en-US': 'Custom Clear Icon'
          },
          'demoId': 'suffix-icon'
        },
      ],
      'events': [
        {
          'name': 'blur',
          'type': '() => void',
          'desc': {
            'zh-CN': '当 input 失去焦点时触发',
            'en-US': 'This event is triggered when the input loses focus. arg:{object Time Component Vue Object}'
          },
          'demoId': 'event'
        },
        {
          'name': 'change',
          'type': '(date: Date | Date[]) => void',
          'desc': {
            'zh-CN': '用户确认选定的值时触发',
            'en-US': 'This event is triggered when the user confirms the selected value. arg:{Date|Array is the time object of the currently selected value when it is not selected in a range. When the range is selected, it is the time object array of the currently selected value}'
          },
          'demoId': 'event'
        },
        {
          'name': 'focus',
          'type': '() => void',
          'desc': {
            'zh-CN': '当 input 获得焦点时触发',
            'en-US': 'This event is triggered when the input is focused. arg:{object Time Component Vue object}'
          },
          'demoId': 'event'
        }
      ],
      'slots': [],
      'methods': [
        {
          'name': 'focus',
          'type': '() => void',
          'desc': {
            'zh-CN': '使 input 获取焦点',
            'en-US': 'Enable input to focus.'
          },
          'demoId': 'event'
        }
      ],
      'props format': [
        {
          'name': 'a',
          'desc': { 'zh-CN': 'am/pm', 'en-US': '' },
          'demoId': ''
        },
        {
          'name': 'A',
          'desc': { 'zh-CN': 'AM/PM', 'en-US': '' },
          'demoId': ''
        },
        {
          'name': 'h',
          'desc': { 'zh-CN': '小时，12小时制，需要和 A 或 a 一起使用，不补0', 'en-US': '' },
          'demoId': ''
        },
        {
          'name': 'H',
          'desc': { 'zh-CN': '小时，24小时制，不补0', 'en-US': '' },
          'demoId': ''
        },
        {
          'name': 'hh',
          'desc': { 'zh-CN': '小时，12小时制，需要和 A 或 a 一起使用', 'en-US': '' },
          'demoId': ''
        },
        {
          'name': 'HH',
          'desc': { 'zh-CN': '小时，24小时制', 'en-US': '' },
          'demoId': ''
        },
        {
          'name': 'm',
          'desc': { 'zh-CN': '分钟，不补0', 'en-US': '' },
          'demoId': ''
        },
        {
          'name': 'mm',
          'desc': { 'zh-CN': '分钟', 'en-US': '' },
          'demoId': ''
        },
        {
          'name': 's',
          'desc': { 'zh-CN': '秒，不补0', 'en-US': '' },
          'demoId': ''
        },
        {
          'name': 'ss',
          'desc': { 'zh-CN': '秒', 'en-US': '' },
          'demoId': ''
        },
      ]
    }
  ],
  'types': [
    {
      name: 'IStep',
      type: 'interface',
      code: `
interface IStep {
  hour: number
  minute: number
  second: number
}
      `
    },
    {
      name: 'IPickerOptions',
      type: 'interface',
      code: `
interface IPickerOptions {
  // 可选的时间范围
  selectableRange: string
  // 下拉框中显示的格式
  format: string
}
      `
    }
  ]
}
