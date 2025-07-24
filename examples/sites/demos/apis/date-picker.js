export default {
  mode: ['pc'],
  apis: [
    {
      name: 'date-picker',
      type: 'component',
      props: [
        {
          name: 'align',
          type: "'left' | 'center' | 'right'",
          defaultValue: "'left'",
          desc: {
            'zh-CN': '日期选择面板和输入框的对齐方式',
            'en-US': 'Alignment of the date selection panel and the input box'
          },
          mode: ['pc'],
          pcDemo: 'align'
        },
        {
          name: 'clear-icon',
          type: 'Component',
          defaultValue: 'IconOperationfaild',
          desc: {
            'zh-CN': '自定义清空图标',
            'en-US': ''
          },
          mode: ['pc'],
          pcDemo: 'clear'
        },
        {
          name: 'clearable',
          type: 'boolean',
          defaultValue: 'true',
          desc: {
            'zh-CN': '是否显示清除按钮',
            'en-US': 'Display Clear Button'
          },
          mode: ['pc'],
          pcDemo: 'clear'
        },
        {
          name: 'default-time',
          type: 'string | string[]',
          defaultValue: "'00:00:00' | ['00:00:00', '00:00:00']",
          desc: {
            'zh-CN':
              'type="datetime" 时，default-time 是一个字符串，用于设置选择一个日期后，时间输入框中的默认值；<br>type="datetimerange" 时，default-time 是一个字符串数组，用于设置选择一个日期范围后，开始和结束时间输入框中的默认值',
            'en-US': ''
          },
          mode: ['pc'],
          pcDemo: 'default-value'
        },
        {
          name: 'default-value',
          type: 'string | Date',
          defaultValue: 'new Date()',
          desc: {
            'zh-CN':
              '当选中的日期值为空时，选择器面板打开时默认显示的时间，可以是日期格式或者能被 new Date() 解析的字符串',
            'en-US':
              'Use the arrow button to select the time. This parameter is used when type is set to datetime or datetimerange. By default, the time is selected by scrolling the mouse wheel'
          },
          mode: ['pc'],
          pcDemo: 'default-value'
        },
        {
          name: 'disabled',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '禁用',
            'en-US': 'Disabled'
          },
          mode: ['pc'],
          pcDemo: 'disabled'
        },
        {
          name: 'editable',
          type: 'boolean',
          defaultValue: 'true',
          desc: {
            'zh-CN': '文本框可输入',
            'en-US': 'The text box can be entered.'
          },
          mode: ['pc'],
          pcDemo: 'disabled'
        },
        {
          name: 'end-placeholder',
          type: 'string',
          defaultValue: "''",
          desc: {
            'zh-CN': '范围选择时结束日期的占位内容',
            'en-US': 'Placeholder of the end date when the range is selected'
          },
          mode: ['pc'],
          pcDemo: 'date-range'
        },
        {
          name: 'format',
          type: 'string',
          defaultValue: "'yyyy-MM-dd'",
          desc: {
            'zh-CN': '显示在输入框中的格式',
            'en-US': 'Display format in the text box'
          },
          mode: ['pc'],
          pcDemo: 'format'
        },
        {
          name: 'format-weeks',
          type: '(customWeeks: number, weekFirstDays: string[]) => string',
          defaultValue: '',
          desc: {
            'zh-CN':
              '格式化周次序号，该回调函数有两个参数，customWeeks 用来获取自定义周次的序号，weekFirstDays 用来获取每周次中的首个日期',
            'en-US': 'The following table lists the options of the current time and date selector.'
          },
          mode: ['pc'],
          pcDemo: 'custom-weeks'
        },
        {
          name: 'isutc8',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN':
              '默认值为 false，设置为 true 时切换系统默认时区，时间依然显示为东八区时间，适用场景为海外地区显示东八区时间',
            'en-US':
              'The default value is false. If this parameter is set to true, the time in GMT+8 is still displayed when the default time zone is switched. Applicable scenario: The GMT+8 time is displayed in regions outside China'
          },
          mode: ['pc'],
          pcDemo: 'isutc8'
        },
        {
          name: 'label',
          type: 'string',
          defaultValue: "''",
          desc: {
            'zh-CN':
              '设置 shape="filter" 属性之后，代表过滤器模式下显示的标题，单独设置 label 属性可以使 label 放置在组件的开始位置',
            'en-US':
              'Optional. When the selected date is empty, the time displayed by default when the selector panel is opened. Set it to a value that can be parsed by new Date().'
          },
          mode: ['pc'],
          pcDemo: 'filter-mode'
        },
        {
          name: 'modelValue / v-model',
          type: 'Date | string | number | Array',
          defaultValue: '',
          desc: {
            'zh-CN': '绑定值',
            'en-US': 'Set the initial value of the calendar component. ;Bound Value'
          },
          mode: ['pc'],
          pcDemo: 'basic-usage'
        },
        {
          name: 'name',
          type: 'string',
          defaultValue: "''",
          desc: {
            'zh-CN': '原生属性',
            'en-US': ''
          },
          mode: ['pc'],
          pcDemo: ''
        },
        {
          name: 'picker-options',
          typeAnchorName: 'IPickerOptions',
          type: 'IPickerOptions',
          defaultValue: '',
          desc: {
            'zh-CN':
              '配置部分禁用、快捷选项等，包含 firstDayOfWeek / disabledDate / onPick / shortcuts 属性，详细用法可参考 IPickerOptions 类型声明',
            'en-US': "Custom selector's rear icon"
          },
          mode: ['pc'],
          pcDemo: 'shortcuts'
        },
        {
          name: 'placeholder',
          type: 'string',
          defaultValue: "''",
          desc: {
            'zh-CN': '非范围选择时的占位内容',
            'en-US': 'Placeholder content for non-range selection'
          },
          mode: ['pc'],
          pcDemo: 'basic-usage'
        },
        {
          name: 'popper-append-to-body',
          type: 'boolean',
          defaultValue: 'true',
          desc: {
            'zh-CN':
              '是否将弹出框插入至 body 元素，在弹出框的定位出现问题时，可将该属性设置为 false (可参考 select 组件)',
            'en-US':
              'Indicates whether to insert a pop-up box to the body element. When a fault occurs in the dialog box that is displayed, you can set this attribute to false (for details, see the select component).'
          },
          mode: ['pc'],
          pcDemo: ''
        },
        {
          name: 'popper-class',
          type: 'string',
          defaultValue: '',
          desc: {
            'zh-CN': '为 DatePicker 下拉弹框添加的 class 类名',
            'en-US': 'Cancel the linkage between two date panels in the range selector.'
          },
          mode: ['pc'],
          pcDemo: 'custom-suffix-icon'
        },
        {
          name: 'range-separator',
          type: 'string',
          defaultValue: "'-'",
          desc: {
            'zh-CN': '选择范围时的分隔符',
            'en-US': 'Custom Clear Icon'
          },
          mode: ['pc'],
          pcDemo: 'date-range'
        },
        {
          name: 'readonly',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '设置日历组件是否只读',
            'en-US': 'Set whether the calendar component is read-only.'
          },
          mode: ['pc'],
          pcDemo: 'disabled'
        },
        {
          name: 'shape',
          type: 'string',
          defaultValue: '',
          desc: {
            'zh-CN': '通过 shape="filter" 属性切换至过滤器模式',
            'en-US': 'Separator for selecting a range'
          },
          mode: ['pc'],
          pcDemo: 'filter-mode'
        },
        {
          name: 'show-timezone',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '是否开启设置日期选择面板时区选择',
            'en-US': 'Whether to enable the time zone selection function on the date selection panel'
          },
          mode: ['pc'],
          pcDemo: 'timezone'
        },
        {
          name: 'show-week-number',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '是否展示周次序号',
            'en-US': 'Class name added to the DatePicker drop-down list box'
          },
          mode: ['pc'],
          pcDemo: 'custom-weeks'
        },
        {
          name: 'size',
          type: "'medium' | 'small' | 'mini'",
          defaultValue: '',
          desc: {
            'zh-CN': '输入框尺寸',
            'en-US': 'Text box size; The values of this attribute are medium, small, and mini'
          },
          mode: ['pc'],
          pcDemo: 'size'
        },
        {
          name: 'start-placeholder',
          type: 'string',
          defaultValue: "''",
          desc: {
            'zh-CN': '范围选择时开始日期的占位内容',
            'en-US': 'Placeholder of the start date when the range is selected'
          },
          mode: ['pc'],
          pcDemo: 'date-range'
        },
        {
          name: 'step',
          typeAnchorName: 'time-picker#IStep',
          type: 'IStep',
          defaultValue: '',
          desc: {
            'zh-CN':
              '设置 type="datetime" 或者 type="datetimerange" 属性之后，可以通过 step 配置时间的步长，step 是一个对象，包含三个属性：hour、minute、second，分别用来配置时、分、秒的步长',
            'en-US': 'Native attribute'
          },
          mode: ['pc'],
          pcDemo: 'step'
        },
        {
          name: 'suffix-icon',
          type: 'Component',
          defaultValue: 'IconCalendar',
          desc: {
            'zh-CN': '自定义选择器的后置图标',
            'en-US': ''
          },
          mode: ['pc'],
          pcDemo: 'custom-suffix-icon'
        },
        {
          name: 'time-arrow-control',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN':
              '通过箭头按钮控制时间选择，当 type 为 datetime、datetimerange 时使用，默认为 通过鼠标滚轮滚动选择时间',
            'en-US': ''
          },
          mode: ['pc'],
          pcDemo: 'step'
        },
        {
          name: 'time-format',
          type: 'string',
          defaultValue: "'HH:mm:ss'",
          desc: {
            'zh-CN': '当自定义的 format 格式无法自动区分时间与日期时，可配置该选项用来辅助确定格式',
            'en-US':
              'If the user-defined format cannot automatically distinguish the time and date, you can set this parameter to assist in determining the format.'
          },
          mode: ['pc'],
          pcDemo: 'format'
        },
        {
          name: 'tip',
          type: 'string',
          defaultValue: '',
          desc: {
            'zh-CN': '过滤器模式下显示的提示信息',
            'en-US':
              'The specific time of the current day used by the selected date during range selection; The optional value of this attribute is see date format'
          },
          mode: ['pc'],
          pcDemo: 'filter-mode'
        },
        {
          name: 'type',
          typeAnchorName: 'IType',
          type: 'IType',
          defaultValue: "'date'",
          desc: {
            'zh-CN': '显示类型，该属性的可选值可参考 IType 类型声明',
            'en-US':
              'Display type; The optional value of this attribute is year / month / dates / week / daterange / date / datetime / datetimerange / monthrange'
          },
          mode: ['pc'],
          pcDemo: 'basic-usage'
        },
        {
          name: 'unlink-panels',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '在范围选择器里取消两个日期面板之间的联动',
            'en-US': ''
          },
          mode: ['pc'],
          pcDemo: 'unlink-panels'
        },
        {
          name: 'validate-event',
          type: 'boolean',
          defaultValue: 'true',
          desc: {
            'zh-CN': '设置日期选择器在输入时是否会触发表单校验',
            'en-US': ''
          },
          mode: ['pc'],
          pcDemo: 'validate-event'
        },
        {
          name: 'value-format',
          type: 'string',
          defaultValue: '',
          desc: {
            'zh-CN': '指定绑定值的格式，不指定则绑定值为 Date 对象',
            'en-US':
              'Specifies the format of the binding value. If this parameter is not specified, the binding value is Date'
          },
          mode: ['pc'],
          pcDemo: 'format'
        }
      ],
      events: [
        {
          name: 'blur',
          type: '() => void',
          desc: {
            'zh-CN': '当 input 失去焦点时触发',
            'en-US': 'This event is triggered when the input loses focus; blur() {\n//do something you want...\n}'
          },
          mode: ['pc'],
          pcDemo: 'events'
        },
        {
          name: 'change',
          type: '(value: Date) => void',
          desc: {
            'zh-CN': '用户确认选定的值时触发',
            'en-US':
              'This event is triggered when the user confirms the selected value. change (arg1) {//arg1 is the changed date or date set of datepicker}'
          },
          mode: ['pc'],
          pcDemo: 'events'
        },
        {
          name: 'focus',
          type: '() => void',
          desc: {
            'zh-CN': '当 input 获得焦点时触发',
            'en-US':
              'This event is triggered when the input is focused. focus(arg1}{\n// arg1 = to component vue instance\n//do something you want...\n}'
          },
          mode: ['pc'],
          pcDemo: 'events'
        }
      ],
      methods: [
        {
          name: 'focus',
          type: '() => void',
          desc: {
            'zh-CN': '使 input 获取焦点',
            'en-US': 'Enable input to focus.'
          },
          mode: ['pc'],
          pcDemo: ''
        }
      ],
      slots: [
        {
          name: 'now',
          type: '',
          meta: {
            stable: '3.19.0'
          },
          defaultValue: '',
          desc: {
            'zh-CN': '组件“此刻”位置插槽',
            'en-US': 'Component "Now" button slot'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'now',
          mfDemo: 'now'
        }
      ],
      format: [
        {
          name: 'a',
          desc: {
            'zh-CN': 'am/pm',
            'en-US': ''
          },
          mode: ['pc'],
          pcDemo: ''
        },
        {
          name: 'A',
          desc: {
            'zh-CN': 'AM/PM',
            'en-US': ''
          },
          mode: ['pc'],
          pcDemo: ''
        },
        {
          name: 'd',
          desc: {
            'zh-CN': '日，不补0',
            'en-US': ''
          },
          mode: ['pc']
        },
        {
          name: 'dd',
          desc: {
            'zh-CN': '日',
            'en-US': ''
          },
          mode: ['pc']
        },
        {
          name: 'h',
          desc: {
            'zh-CN': '小时，12小时制，需要和 A 或 a 一起使用，不补0',
            'en-US': ''
          },
          mode: ['pc'],
          pcDemo: ''
        },
        {
          name: 'H',
          desc: {
            'zh-CN': '小时，24小时制，不补0',
            'en-US': ''
          },
          mode: ['pc'],
          pcDemo: ''
        },
        {
          name: 'hh',
          desc: {
            'zh-CN': '小时，12小时制，需要和 A 或 a 一起使用',
            'en-US': ''
          },
          mode: ['pc'],
          pcDemo: ''
        },
        {
          name: 'HH',
          desc: {
            'zh-CN': '小时，24小时制',
            'en-US': ''
          },
          mode: ['pc'],
          pcDemo: ''
        },
        {
          name: 'm',
          desc: {
            'zh-CN': '分钟，不补0',
            'en-US': ''
          },
          mode: ['pc'],
          pcDemo: ''
        },
        {
          name: 'M',
          desc: {
            'zh-CN': '月，不补0',
            'en-US': ''
          },
          mode: ['pc']
        },
        {
          name: 'mm',
          desc: {
            'zh-CN': '分钟',
            'en-US': ''
          },
          mode: ['pc'],
          pcDemo: ''
        },
        {
          name: 'MM',
          desc: {
            'zh-CN': '月',
            'en-US': ''
          },
          mode: ['pc']
        },
        {
          name: 's',
          desc: {
            'zh-CN': '秒，不补0',
            'en-US': ''
          },
          mode: ['pc'],
          pcDemo: ''
        },
        {
          name: 'ss',
          desc: {
            'zh-CN': '秒',
            'en-US': ''
          },
          mode: ['pc'],
          pcDemo: ''
        },
        {
          name: 'W',
          desc: {
            'zh-CN': '周，不补0',
            'en-US': ''
          },
          mode: ['pc']
        },
        {
          name: 'WW',
          desc: {
            'zh-CN': '周',
            'en-US': ''
          },
          mode: ['pc']
        },
        {
          name: 'yyyy',
          desc: {
            'zh-CN': '年',
            'en-US': ''
          },
          mode: ['pc']
        }
      ]
    }
  ],
  types: [
    {
      name: 'IPickerOptions',
      type: 'interface',
      code: `
interface IPickerOptions {
  // 每周的第一天是星期几，默认值是7，也就是星期天
  firstDayOfWeek: number
  // 实现部分禁用，此时只能选择一部分日期
  disabledDate: (time: Date) => boolean
  // 选中日期后执行的回调，需要与 daterange 或 datetimerange 类型配合使用才生效
  onPick: (range: { minDate: Date, maxDate: Date }) => void
  // 快捷选项
  shortcuts: {
    text: string
    onClick: (picker: { $emit: (type: string, date: Date) => void }) => void
    type: 'startFrom' | 'EndAt'
    startDate: Date
    endDate: Date
  }[]
}
      `
    },
    {
      name: 'IType',
      type: 'type',
      code: `
type IType = 'date' | 'dates' | 'daterange' | 'datetime' | 'datetimerange' | 'week' | 'month' | 'monthrange' | 'quarter' | 'year' | 'years' | 'yearrange'
      `
    }
  ]
}
