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
      'demoId': 'date-range',
      'name': { 'zh-CN': '范围选择', 'en-US': 'Select date range' },
      'desc': {
        'zh-CN':
          '<p>设置 <code>type</code> 属性为 daterange，可以设置以日期范围的形式进行选择。\n通过 <code>onPick</code> 获取选中日期后会执行的回调，需要与 <code>daterange</code> 或 <code>datetimerange</code> 才生效，需要配置在 <code>picker-options</code> 中。</p>\n',
        'en-US':
          '<p>Set <code>type</code> to daterange. You can select a date range. \n Callback that will be executed after the selected date is obtained through <code>onPick</code>. The callback takes effect only when <code>daterange</code> or <code>datetimerange</code> is used. This parameter must be configured in <code>picker-options</code>. </p>\n'
      },
      'codeFiles': ['date-range.vue']
    },
    {
      'demoId': 'dates',
      'name': { 'zh-CN': '多日期选择', 'en-US': 'Select multiple dates' },
      'desc': {
        'zh-CN': '',
        'en-US': ''
      },
      'codeFiles': ['multiple-dates.vue']
    },
    {
      'demoId': 'disabled',
      'name': { 'zh-CN': '禁用状态', 'en-US': 'Disabled status' },
      'desc': {
        'zh-CN': `
          <p>通过设置 <code>disabled</code> 为 true 后，禁用日期输入框。</p>
          <p>通过设置 <code>picker-options</code> 的 <code>disabledDate</code> 属性，可以实现部分禁用，此时只能选择一部分日期。</p>
          <p>日期输入框默认可以输入日期，设置 <code>editable</code> 为 false 后，将不能输入。</p>
          <p>通过 <code>readonly</code> 属性设置日历组件是否只读。</p>
        `,
        'en-US': `
          <p>After setting <code>disabled</code> to true, disable the date input box.</p>
          <p>Partial disabling can be achieved by setting the <code>disabledDate</code> property of <code>picker-options</code>, and only part of the date can be selected at this time.</p>
          <p>You can enter a date by default in the date input box, but it cannot be entered when <code> editable </code> is set to false.</p>
          <p>Sets whether the calendar component is read-only through the <code>readonly</code> property. </p>
        `
      },
      'desc': {
        'zh-CN': '<p>通过 <code>readonly</code> 属性设置日历组件是否只读。</p>\n',
        'en-US':
          '<p>Sets whether the calendar component is read-only through the <code>readonly</code> property. </p>\n'
      },
      'codeFiles': ['disabled.vue']
    },
    {
      'demoId': 'shortcuts',
      'name': { 'zh-CN': '快捷选项', 'en-US': 'Select the shortcut option of the day band' },
      'desc': {
        'zh-CN': `
          <p>通过 <code>picker-options</code> 属性，该属性是一个对象，在其中指定 <code>shortcuts</code> 对象数组可以设置快捷选项。</p>
          <p>通过设置 <code>type: 'startFrom'</code> 为某日起始，设置 <code>type: 'endAt'</code> 为某日为止，</p>
          <p>startDate 属性可设置开始的日期，endDate 属性设置结束日期，startDate 默认为 1970-01-01，endDate 默认为 2099-12-31</p>
          <p>设置某日起始、某日为止时不用传入 onClick 函数，因为此函数不会被执行。</p>
        `,
        'en-US': `
          <p>With the <code>picker-options</code> attribute, which is an object in which you specify an array of <code>shortcuts</code> objects to set shortcut options.</p>
          <p>By setting <code> type: 'startFrom' </code> to a certain day, setting <code> type:' endAt' </code> to a certain day, </p>
          <p> startDate property to set the start date, and the endDate property to set the end date, startDate defaults to 1970-01-01-01. EndDate defaults to 2099-12-31</p>
          <p> to set the start and end of a certain day without passing the onClick function, because this function will not be executed.</p>
        `
      },
      'codeFiles': ['shortcuts.vue']
    },
    {
      'demoId': 'timezone',
      'name': { 'zh-CN': '时区选择', 'en-US': 'Time Zone Selection' },
      'desc': {
        'zh-CN':
          '<p>通过 <code>show-timezone</code> 属性可以设置日期选择面板时区选择，同时需要引入 timezoneData 时区数据</p>\n',
        'en-US':
          '<p>You can set the time zone of the date selection panel through the <code>show-timezone</code> attribute, and import timezoneData time zone data</p>\n'
      },
      'codeFiles': ['timezone.vue']
    },
    {
      'demoId': 'align',
      'name': { 'zh-CN': '对齐方式', 'en-US': 'Alignment' },
      'desc': {
        'zh-CN':
          '<p>通过 <code>align</code> 属性可以设置日期选择面板与输入框之间的对齐方式，可选值有 left、right、center，默认为 left 左对齐。</p>\n',
        'en-US':
          '<p>You can use the <code>align</code> attribute to set the alignment mode between the date selection panel and the text box. The options are left, right, and center. The default value is left. </p>\n'
      },
      'codeFiles': ['align.vue']
    },
    {
      'demoId': 'size',
      'name': { 'zh-CN': '尺寸', 'en-US': 'Size' },
      'desc': {
        'zh-CN': '<p>通过 <code>size</code> 属性可以设置日期输入框的尺寸，可选值有 medium、small、mini。</p>\n',
        'en-US':
          '<p>You can set the size of the date text box through the <code>size</code> attribute. The options are medium, small, and mini. </p>\n'
      },
      'codeFiles': ['size.vue']
    },
    {
      'demoId': 'clear',
      'name': { 'zh-CN': '清除输入', 'en-US': 'Clear Input' },
      'desc': {
        'zh-CN':
          '<p>选择日期后，鼠标悬停在输入框时，默认会显示清除图标，单击图标可以清除输入框内容。设置 <code>clearable</code> 属性为 false 后，则不显示清除图标，不可清除。通过 <code>clear-icon</code> 属性可以自定义清除图标。</p>\n',
        'en-US':
          '<p>After you select a date, the clear icon is displayed by default when you hover the cursor over the text box. You can click the icon to clear the text box. If <code>clearable</code> is set to false, the clear icon is not displayed and cannot be cleared. The <code>clear-icon</code> property allows you to customize the clear icon. </p>\n'
      },
      'codeFiles': ['clear.vue']
    },
    {
      'demoId': 'format',
      'name': { 'zh-CN': '格式化', 'en-US': 'Formatting' },
      'desc': {
        'zh-CN': `
          <p>通过 <code>format</code> 属性设置输入框的格式，<code>value-format</code> 属性设置绑定值的格式。Date Format 属性列表</p>
          <p>通过 <code>time-format</code> 属性设置日期选择面板的时间显示格式</p>
        `,
        'en-US': `
          <p> uses the <code>format</code> attribute to set the format of the text box, and the <code>value-format</code> attribute to set the format of the bound value. Date Format Attribute List</p>
          <p>Set the time display format of the date selection panel through the <code>time-format</code> attribute</p>
        `
      },
      'codeFiles': ['format.vue']
    },
    {
      'demoId': 'custom-suffix-icon',
      'name': { 'zh-CN': '自定义后置图标', 'en-US': 'Customized rear icon' },
      'desc': {
        'zh-CN': `
          <p>通过 <code>suffix-icon</code> 属性设置日期输入框后置图标，从 <code>@opentiny/vue-icon</code> 中导入一个图标并进行初始化后传给 <code>suffix-icon</code>。</p>
          <p>通过 <code>popper-class</code> 属性可以为 DatePicker 下拉弹框添加 class 类名</p>
        `,
        'en-US': `
          <p>Uses the <code>suffix-icon</code> attribute to set the icon behind the date text box. An icon is imported from the <code>@opentiny/vue-icon</code>, initialized, and transferred to the <code>suffix-icon</code>. </p>
          <p>Uses the <code>popper-class</code> attribute to add the class name to the DatePicker drop-down box</p>
        `
      },
      'codeFiles': ['custom-suffix-icon.vue']
    },
    {
      'demoId': 'custom-weeks',
      'name': { 'zh-CN': '周次序号', 'en-US': 'Weekly serial number' },
      'desc': {
        'zh-CN': `
          <p>通过 <code>show-week-number</code> 属性展示原始周次序号，通过<code>format-weeks</code>属性传入两个参数</p>
          <p>参数设置如下：</p>
          <ul><li>customWeeks：设置自定义周次的序号</li><li>weekFirstDays：获取每周次中的首个日期</li></ul>
          <p>通过 <code>picker-options</code> 的 <code> firstDayOfWeek </code> 属性来设置每周的第一天时星期几，默认值是7，也就是星期天</p>
        `,
        'en-US': `
          <p>Display the original weekly sequence number through the <code> show-week-number </code> attribute, and pass in two parameters through the <code> format-weeks </code> attribute.</p>
          <p>The parameters are set as follows: </p>
          <ul><li>customWeeks: set the sequence number of the custom week</li><li>weekFirstDays: get the first date of each week</li></ul>
          <p>Set the day of the week on the first day of the week through the <code> firstDayOfWeek </code> property of <code> picker-options </code>. The default value is 7, which is Sunday.</p>
        `
      },
      'codeFiles': ['custom-weeks.vue']
    },
    {
      'demoId': 'unlink-panels',
      'name': { 'zh-CN': '面板联动', 'en-US': 'Default time setting when the selector is enabled' },
      'desc': {
        'zh-CN':
          '<p>范围选择时，默认情况下，在开始日期面板中单击上一月或上一年箭头图标时，结束日期面板中日期也联动切换到上一月或上一年。在结束日期面板中切换下一月或下一年时，开始日期面板也随之联动。但若配置 <code>unlink-panels</code> 属性为 true ，面板之间就不再联动，切换年月时只对当前面板生效。</p>\n',
        'en-US':
          '<p><code>default-value</code> property specifies the date that is selected by default when the date picker panel opens. </p>\n'
      },
      'codeFiles': ['unlink-panels.vue']
    },
    {
      'demoId': 'default-value',
      'name': { 'zh-CN': '默认值', 'en-US': 'Default value' },
      'desc': {
        'zh-CN': `
          <p><code>default-value</code> 属性指定日期选择器面板打开时默认选中的日期。</p>\n
          <p>使用 <code>datetimerange</code> 设置日期范围时，可以通过 <code>default-time</code> 属性设置起始与结束的时刻，默认是选定日期的 00:00:00 作为起始与结束的时刻。<code>default-time</code> 接受一个数组，数组的每一项都为一个字符串，第一项控制起始日期的时刻，第二项控制结束日期的时刻。</p>\n
        `,
        'en-US': `
          <p>By default, you can enter a date in the Date text box. If you set <code>editable</code> to false, you cannot enter a date in the <p>Date text box. </p>\n
          <p>When using <code>datetimerange</code> to set the date range, you can use <code>default-time</code> to set the start and end time. The default time is 00:00 on the selected date. 00 as the start and end time. <code>default-time</code> takes an array. Each item in the array is a string. The first item controls the time of the start date and the second item controls the time of the end date. </p>\n
        `
      },
      'codeFiles': ['default-value.vue']
    },
    {
      'demoId': 'filter-mode',
      'name': { 'zh-CN': '过滤器模式', 'en-US': 'Focus' },
      'desc': {
        'zh-CN':
          "<p>通过 <code>shape='filter'</code> 属性切换至过滤器模式。</p><p>过滤器模式下可传入 label 显示标题，tip 显示提示信息，clearable 是否显示清除按钮。</p>\n",
        'en-US': '<p>Use the <code>focus</code> method to enable the input to obtain the focus. </p>\n'
      },
      'codeFiles': ['filter-mode.vue']
    },
    {
      'demoId': 'date-picker-events',
      'name': { 'zh-CN': '事件', 'en-US': 'Do not trigger form validation' },
      'desc': {
        'zh-CN': '<p>主要事件有 change、blur、focus。</p>\n',
        'en-US':
          '<p>The date selector triggers form validation by default. The triggering modes include blur and change. If <code>validate-event</code> is set to false, form validation is not triggered. </p>\n'
      },
      'codeFiles': ['date-picker-events.vue']
    },
    {
      'demoId': 'focus',
      'name': { 'zh-CN': '获取焦点', 'en-US': 'Set whether to display the GMT+8 time' },
      'desc': {
        'zh-CN': '<p>通过 <code>focus</code> 方法设置使 input 获取焦点。</p>\n',
        'en-US': '<p>You can use the <code>isutc8</code> attribute to set whether to display the GMT+8 time.</p>\n'
      },
      'codeFiles': ['focus.vue']
    },
    {
      'demoId': 'label-inside',
      'name': { 'zh-CN': 'label 内置', 'en-US': '' },
      'desc': {
        'zh-CN': '<p>通过 <code>label</code> 属性可以设置日期选择器的 label，使其放置在组件的开始位置。</p>\n',
        'en-US': ''
      },
      'codeFiles': ['label-inside.vue']
    },
    {
      'demoId': 'step',
      'name': { 'zh-CN': '步长', 'en-US': 'Step' },
      'desc': {
        'zh-CN': `
          <p><code>step</code> 和 <code>time-arrow-control</code> 都是当 type 为 datetime、datetimerange 时使用。</p>
          <p>通过 <code>step</code> 设置步长，默认值为 <code>{ hour: 1, minute: 1, second: 1 }</code>，其中 <code>hour</code> 的设置范围是 <code>0-23</code>，<code>minute</code>、<code>second</code> 的设置范围是 <code>0-60</code>。可单独设置其中的一项或多项值，未设置的默认值为 <code>1</code>。</p>
          <p>将 <code>time-arrow-control</code> 设为 true 可以设置通过箭头按钮控制时间选择，默认为通过鼠标滚轮滚动选择时间。</p>
        `,
        'en-US': `
          <p><code> step </code> and <code> time-arrow-control </code> are used when type is datetime or datetimerange.</p>
          <p>Set the step size through <code> step </code>. The default value is <code> {hour: 1, minute: 1, second: 1} </code>, where the setting range of <code> hour </code> is <code> 0-23 </code>, <code> minute </code>, <code> second </code> is <code> 0-60 </code>. One or more of these values can be set separately, and the unset default value is <code> 1 </code>.</p>
          <p>Setting <code>time-arrow-control</code> to true sets the time selection to be controlled by arrow buttons, and the default is to scroll through the mouse wheel to select time.</p>
        `
      },
      'codeFiles': ['step.vue']
    },
    {
      'demoId': 'validate-event',
      'name': { 'zh-CN': '不触发表单校验', 'en-US': '' },
      'desc': {
        'zh-CN':
          '<p>日期选择器在输入时默认会触发表单校验，触发方式有 blur、change。但若设置 <code>validate-event</code> 属性为 false，将不再触发表单校验。</p>\n',
        'en-US': ''
      },
      'codeFiles': ['validate-event.vue']
    },
    {
      'demoId': 'utc8',
      'name': { 'zh-CN': '设置是否显示为东八区时间', 'en-US': '' },
      'desc': { 'zh-CN': '<p>通过 <code>isutc8</code> 属性可以设置是否显示为东八区时间</p>\n', 'en-US': '' },
      'codeFiles': ['utc8.vue']
    }
  ],
  apis: [
    {
      'name': 'date-picker',
      'type': 'component',
      'properties': [
        {
          'name': 'align',
          'type': 'String',
          'defaultValue': '该属性的默认值为 left',
          'desc': {
            'zh-CN': '对齐方式;该属性的可选值为 left / center / right',
            'en-US': 'Alignment mode; The optional values of this attribute are left / center / right'
          },
          'demoId': 'align'
        },
        {
          'name': 'clearable',
          'type': 'Boolean',
          'defaultValue': '该属性的默认值为 true',
          'desc': { 'zh-CN': '是否显示清除按钮', 'en-US': 'Display Clear Button' },
          'demoId': 'clear'
        },
        {
          'name': 'clear-icon',
          'type': 'String',
          'defaultValue': '该属性的默认值为 IconOperationfaild',
          'desc': { 'zh-CN': '自定义清空图标', 'en-US': '' },
          'demoId': 'clear'
        },
        {
          'name': 'default-time',
          'type': 'String',
          'defaultValue': '',
          'desc': {
            'zh-CN': '范围选择时选中日期所使用的当日内具体时刻;该属性的可选值为 见日期格式',
            'en-US':
              'Specifies whether the date selector triggers form validation during input. The default value is true.'
          },
          'demoId': 'default-value'
        },
        {
          'name': 'default-value',
          'type': 'Date',
          'defaultValue': '',
          'desc': {
            'zh-CN': '可选，当选中的日期值为空时，选择器面板打开时默认显示的时间，需设置为可被new Date()解析的值',
            'en-US':
              'Use the arrow button to select the time. This parameter is used when type is set to datetime or datetimerange. By default, the time is selected by scrolling the mouse wheel'
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
          'demoId': 'disabled'
        },
        {
          'name': 'end-placeholder',
          'type': 'String',
          'defaultValue': '',
          'desc': {
            'zh-CN': '范围选择时结束日期的占位内容',
            'en-US': 'Placeholder of the end date when the range is selected'
          },
          'demoId': 'date-range'
        },
        {
          'name': 'format',
          'type': 'String',
          'defaultValue': '该属性的默认值为 yyyy-MM-dd',
          'desc': { 'zh-CN': '显示在输入框中的格式', 'en-US': 'Display format in the text box' },
          'demoId': 'format'
        },
        {
          'name': 'format-weeks',
          'type': 'Function',
          'defaultValue': '',
          'desc': {
            'zh-CN':
              '格式化周次序号，该回调函数有两个参数，customWeeks 用来设置自定义周次的序号，weekFirstDays 用来获取每周次中的首个日期',
            'en-US': 'The following table lists the options of the current time and date selector.'
          },
          'demoId': 'custom-weeks'
        },
        {
          'name': 'isutc8',
          'type': 'Boolean',
          'defaultValue': '',
          'desc': {
            'zh-CN':
              '默认值为 false ,设置为 true 时切换系统默认时区，时间依然显示为东八区时间。适用场景为海外地区显示东八区时间',
            'en-US':
              'The default value is false. If this parameter is set to true, the time in GMT+8 is still displayed when the default time zone is switched. Applicable scenario: The GMT+8 time is displayed in regions outside China'
          },
          'demoId': 'utc8'
        },
        {
          'name': 'label',
          'type': 'String',
          'defaultValue': '',
          'desc': {
            'zh-CN':
              "设置 shape='filter' 属性之后，代表过滤器模式下显示的标题，单独设置 label 属性可以使 label 放置在组件的开始位置。",
            'en-US':
              'Optional. When the selected date is empty, the time displayed by default when the selector panel is opened. Set it to a value that can be parsed by new Date().'
          },
          'demoId': 'filter-mode'
        },
        {
          'name': 'modelValue / v-model',
          'type': 'Date / Array',
          'defaultValue': '',
          'desc': {
            'zh-CN': '设置日历组件的初始值。;绑定值',
            'en-US': 'Set the initial value of the calendar component. ;Bound Value'
          },
          'demoId': 'basic-usage'
        },
        {
          'name': 'name',
          'type': 'String',
          'defaultValue': '',
          'desc': { 'zh-CN': '原生属性', 'en-US': '' },
          'demoId': 'timezone'
        },
        {
          'name': 'picker-options',
          'type': 'Object',
          'defaultValue': '该属性的默认值为 {}',
          'desc': { 'zh-CN': '当前时间日期选择器特有的选项参考下表', 'en-US': "Custom selector's rear icon" },
          'demoId': 'shortcuts'
        },
        {
          'name': 'placeholder',
          'type': 'String',
          'defaultValue': '该属性的默认值为 []',
          'desc': { 'zh-CN': '非范围选择时的占位内容', 'en-US': 'Placeholder content for non-range selection' },
          'demoId': 'basic-usage'
        },
        {
          'name': 'popper-append-to-body',
          'type': 'Boolean',
          'defaultValue': '该属性的默认值为 true',
          'desc': {
            'zh-CN':
              '是否将弹出框插入至 body 元素。在弹出框的定位出现问题时，可将该属性设置为 false (可参考 select 组件)',
            'en-US':
              'Indicates whether to insert a pop-up box to the body element. When a fault occurs in the dialog box that is displayed, you can set this attribute to false (for details, see the select component).'
          },
          'demoId': 'popup-style-position'
        },
        {
          'name': 'popper-class',
          'type': 'String',
          'defaultValue': '',
          'desc': {
            'zh-CN': '为 DatePicker 下拉弹框添加的 class 类名',
            'en-US': 'Cancel the linkage between two date panels in the range selector.'
          },
          'demoId': 'custom-suffix-icon'
        },
        {
          'name': 'range-separator',
          'type': 'String',
          'defaultValue': '该属性的默认值为 - ',
          'desc': { 'zh-CN': '选择范围时的分隔符', 'en-US': 'Custom Clear Icon' },
          'demoId': 'date-range'
        },
        {
          'name': 'readonly',
          'type': 'Boolean',
          'defaultValue': '该属性的默认值为 false',
          'desc': { 'zh-CN': '设置日历组件是否只读。', 'en-US': 'Set whether the calendar component is read-only.' },
          'demoId': 'disabled'
        },
        {
          'name': 'shape',
          'type': 'String',
          'defaultValue': '',
          'desc': { 'zh-CN': "通过 shape='filter' 属性切换至过滤器模式。", 'en-US': 'Separator for selecting a range' },
          'demoId': 'filter-mode'
        },
        {
          'name': 'show-timezone',
          'type': 'Boolean',
          'defaultValue': '该属性的默认值为 false',
          'desc': {
            'zh-CN': '是否开启设置日期选择面板时区选择',
            'en-US': 'Whether to enable the time zone selection function on the date selection panel'
          },
          'demoId': 'timezone'
        },
        {
          'name': 'show-week-number',
          'type': 'Boolean',
          'defaultValue': '该属性的默认值为 false',
          'desc': { 'zh-CN': '是否展示周次序号', 'en-US': 'Class name added to the DatePicker drop-down list box' },
          'demoId': 'custom-weeks'
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
          'demoId': 'date-range'
        },
        {
          'name': 'step',
          'type': 'Object',
          'defaultValue': '',
          'desc': {
            'zh-CN':
              "设置 type='datetimerange' 属性之后，可以通过 step 配置时间的步长，step 是一个对象，包含三个属性：hour、minute、second，分别用来配置时、分、秒的步长。",
            'en-US': 'Native attribute'
          },
          'demoId': 'step'
        },
        {
          'name': 'suffix-icon',
          'type': 'Object',
          'defaultValue': '该属性的默认值为 IconCalendar，',
          'desc': { 'zh-CN': '自定义选择器的后置图标', 'en-US': '' },
          'demoId': 'custom-suffix-icon'
        },
        {
          'name': 'time-arrow-control',
          'type': 'Boolean',
          'defaultValue': '',
          'desc': {
            'zh-CN':
              '通过箭头按钮控制时间选择，当 type 为 datetime、datetimerange 时使用;默认为 通过鼠标滚轮滚动选择时间',
            'en-US': ''
          },
          'demoId': 'step'
        },
        {
          'name': 'time-format',
          'type': 'String',
          'defaultValue': '',
          'desc': {
            'zh-CN': '当自定义的format格式无法自动区分时间与日期时可配置该选项用来辅助确定格式',
            'en-US':
              'If the user-defined format cannot automatically distinguish the time and date, you can set this parameter to assist in determining the format.'
          },
          'demoId': 'format'
        },
        {
          'name': 'tip',
          'type': 'String',
          'defaultValue': '',
          'desc': {
            'zh-CN': '过滤器模式下显示的提示信息。',
            'en-US':
              'The specific time of the current day used by the selected date during range selection; The optional value of this attribute is see date format'
          },
          'demoId': 'filter-mode'
        },
        {
          'name': 'type',
          'type': 'String',
          'defaultValue': '该属性的默认值为 date',
          'desc': {
            'zh-CN':
              '显示类型;该属性的可选值为 year / month / dates / week / daterange / date / datetime / datetimerange / monthrange',
            'en-US':
              'Display type; The optional value of this attribute is year / month / dates / week / daterange / date / datetime / datetimerange / monthrange'
          },
          'demoId': 'basic-usage'
        },
        {
          'name': 'unlink-panels',
          'type': 'Boolean',
          'defaultValue': '该属性的默认值为 false',
          'desc': { 'zh-CN': '在范围选择器里取消两个日期面板之间的联动', 'en-US': '' },
          'demoId': 'unlink-panels'
        },
        {
          'name': 'validate-event',
          'type': 'Boolean',
          'defaultValue': '',
          'desc': { 'zh-CN': '设置日期选择器在输入时是否会触发表单校验;默认为 true', 'en-US': '' },
          'demoId': 'validate-event'
        },
        {
          'name': 'value-format',
          'type': 'String',
          'defaultValue': '该属性的默认值为 Date 对象',
          'desc': {
            'zh-CN': '指定绑定值的格式。不指定则绑定值为 Date 对象',
            'en-US':
              'Specifies the format of the binding value. If this parameter is not specified, the binding value is Date'
          },
          'demoId': 'format'
        }
      ],
      'events': [
        {
          'name': 'blur',
          'type': 'Function',
          'defaultValue': '',
          'desc': {
            'zh-CN': '当 input 失去焦点时触发;blur() { \n//do something you want...\n}',
            'en-US': 'This event is triggered when the input loses focus; blur() {\n//do something you want...\n}'
          },
          'demoId': 'date-picker-events'
        },
        {
          'name': 'change',
          'type': 'Function(arg1)',
          'defaultValue': '',
          'desc': {
            'zh-CN': '用户确认选定的值时触发;change（arg1）{ // arg1为datepicker改变后的日期或者是日期集}',
            'en-US':
              'This event is triggered when the user confirms the selected value. change (arg1) {//arg1 is the changed date or date set of datepicker}'
          },
          'demoId': 'date-picker-events'
        },
        {
          'name': 'focus',
          'type': 'Function(arg1)',
          'defaultValue': '',
          'desc': {
            'zh-CN': '当 input 获得焦点时触发;focus(arg1}{ \n// arg1 = 对组件vue实例 \n//do something you want...\n}',
            'en-US':
              'This event is triggered when the input is focused. focus(arg1}{\n// arg1 = to component vue instance\n//do something you want...\n}'
          },
          'demoId': 'date-picker-events'
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
          'name': 'd',
          'desc': { 'zh-CN': '日，不补0', 'en-US': '' },
        },
        {
          'name': 'dd',
          'desc': { 'zh-CN': '日', 'en-US': '' },
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
          'name': 'M',
          'desc': { 'zh-CN': '月，不补0', 'en-US': '' },
        },
        {
          'name': 'mm',
          'desc': { 'zh-CN': '分钟', 'en-US': '' },
          'demoId': ''
        },
        {
          'name': 'MM',
          'desc': { 'zh-CN': '月', 'en-US': '' },
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
        {
          'name': 'W',
          'desc': { 'zh-CN': '周，不补0', 'en-US': '' },
        },
        {
          'name': 'WW',
          'desc': { 'zh-CN': '周', 'en-US': '' },
        },
        {
          'name': 'yyyy',
          'desc': { 'zh-CN': '年', 'en-US': '' },
        },
      ]
    }
  ]
}
