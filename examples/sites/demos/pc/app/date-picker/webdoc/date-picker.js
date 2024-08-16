export default {
  column: '2',
  owner: '',
  demos: [
    {
      demoId: 'basic-usage',
      name: {
        'zh-CN': '基本用法',
        'en-US': 'Basic usage'
      },
      desc: {
        'zh-CN': '<p>支持选择日期、日期时间、周、月份、年份。</p>',
        'en-US': 'Support to select date, date time, week, month, year.'
      },
      codeFiles: ['basic-usage.vue']
    },
    {
      demoId: 'date-range',
      name: {
        'zh-CN': '范围选择',
        'en-US': 'Select date range'
      },
      desc: {
        'zh-CN':
          '<p>设置 <code>type</code> 属性为 <code>daterange</code> / <code>datetimerange</code> / <code>monthrange</code> / <code>yearrange</code>，可以设置以日期范围的形式进行选择。</p>\n',
        'en-US': '<p>Set <code>type</code> to <code>daterange</code>, you can select a date range.</p>\n'
      },
      codeFiles: ['date-range.vue']
    },
    {
      demoId: 'dates',
      name: {
        'zh-CN': '多日期选择',
        'en-US': 'Select multiple dates'
      },
      desc: {
        'zh-CN': '<p>支持选择多个日期和年份。</p>',
        'en-US': 'Support for selecting multiple dates and years.'
      },
      codeFiles: ['multiple-dates.vue']
    },
    {
      demoId: 'disabled',
      name: {
        'zh-CN': '禁用状态',
        'en-US': 'Disabled status'
      },
      desc: {
        'zh-CN':
          '\n          <p>通过设置 <code>disabled</code> 为 true 后，禁用日期输入框。</p>\n          <p>通过设置 <code>picker-options</code> 的 <code>disabledDate</code> 属性，可以实现部分禁用，此时只能选择一部分日期。</p>\n          <p>日期输入框默认可以输入日期，设置 <code>editable</code> 为 false 后，将不能输入。</p>\n          <p>通过 <code>readonly</code> 属性设置日期组件是否只读。</p>\n        ',
        'en-US':
          '\n          <p>After setting <code>disabled</code> to true, disable the date input box.</p>\n          <p>Partial disabling can be achieved by setting the <code>disabledDate</code> property of <code>picker-options</code>, and only part of the date can be selected at this time.</p>\n          <p>You can enter a date by default in the date input box, but it cannot be entered when <code> editable </code> is set to false.</p>\n          <p>Sets whether the date component is read-only through the <code>readonly</code> property. </p>\n        '
      },
      codeFiles: ['disabled.vue']
    },
    {
      demoId: 'shortcuts',
      name: {
        'zh-CN': '快捷选项',
        'en-US': 'Select the shortcut options'
      },
      desc: {
        'zh-CN':
          "\n          <p>通过在 <code>picker-options</code> 属性中指定 <code>shortcuts</code> 对象数组可以设置快捷选项。</p>\n          <p>通过<code>type: 'startFrom'</code> 设置某日起始，<code>endDate</code> 属性可设置结束日期，<code>endDate</code> 默认为 <code>2099-12-31</code>。</p>\n          <p>通过<code>type: 'endAt'</code> 设置某日为止，<code>startDate</code> 属性可设置开始日期，<code>startDate</code> 默认为 <code>1970-01-01</code>。</p>\n          <p>设置某日起始、某日为止时不用传入 <code>onClick</code> 函数，此函数不会被执行。</p>\n        ",
        'en-US':
          "\n          <p>With the <code>picker-options</code> attribute, which is an object in which you specify an array of <code>shortcuts</code> objects to set shortcut options.</p>\n          <p>By setting <code> type: 'startFrom' </code> to a certain day, setting <code> type:' endAt' </code> to a certain day, </p>\n          <p> startDate property to set the start date, and the endDate property to set the end date, startDate defaults to 1970-01-01-01. EndDate defaults to 2099-12-31</p>\n          <p> to set the start and end of a certain day without passing the onClick function, because this function will not be executed.</p>\n        "
      },
      codeFiles: ['shortcuts.vue']
    },
    {
      demoId: 'size',
      name: {
        'zh-CN': '尺寸',
        'en-US': 'Size'
      },
      desc: {
        'zh-CN': '<p>通过 <code>size</code> 属性可以设置日期输入框的尺寸，可选值有 medium、small、mini。</p>\n',
        'en-US':
          '<p>You can set the size of the date text box through the <code>size</code> attribute. The options are medium, small, and mini. </p>\n'
      },
      codeFiles: ['size.vue']
    },
    {
      demoId: 'clear',
      name: {
        'zh-CN': '清除输入',
        'en-US': 'Clear Input'
      },
      desc: {
        'zh-CN':
          '<p>选择日期后，鼠标悬停在输入框时，默认会显示清除图标，单击图标可以清除输入框内容。设置 <code>clearable</code> 属性为 false 后，则不显示清除图标，不可清除。通过 <code>clear-icon</code> 属性可以自定义清除图标。</p>',
        'en-US':
          '<p>After you select a date, the clear icon is displayed by default when you hover the cursor over the text box. You can click the icon to clear the text box. If <code>clearable</code> is set to false, the clear icon is not displayed and cannot be cleared. The <code>clear-icon</code> property allows you to customize the clear icon. </p>\n'
      },
      codeFiles: ['clear.vue']
    },
    {
      demoId: 'format',
      name: {
        'zh-CN': '格式化',
        'en-US': 'Formatting'
      },
      desc: {
        'zh-CN':
          '\n          <p>通过 <code>format</code> 属性设置输入框中显示的日期格式，<code>time-format</code> 属性设置日期选择面板的时间显示格式，<code>value-format</code> 属性设置绑定值的格式。</p>\n        ',
        'en-US':
          '\n          <p> uses the <code>format</code> attribute to set the format of the text box, and the <code>value-format</code> attribute to set the format of the bound value. Date Format Attribute List</p>\n          <p>Set the time display format of the date selection panel through the <code>time-format</code> attribute</p>\n        '
      },
      codeFiles: ['format.vue']
    },
    {
      demoId: 'default-value',
      name: {
        'zh-CN': '默认值',
        'en-US': 'Default value'
      },
      desc: {
        'zh-CN':
          '\n          <p><code>default-value</code> 属性指定日期选择器面板打开时默认显示的日期。</p>\n\n          <p><code>default-time</code> 属性指定时间选择器面板打开时默认显示的时刻，默认值是 00:00:00。<code>default-time</code> 接受一个数组，数组的每一项都为一个字符串，第一项控制起始日期的时刻，第二项控制结束日期的时刻。</p>\n\n        ',
        'en-US':
          '\n          <p>By default, you can enter a date in the Date text box. If you set <code>editable</code> to false, you cannot enter a date in the <p>Date text box. </p>\n\n          <p>When using <code>datetimerange</code> to set the date range, you can use <code>default-time</code> to set the start and end time. The default time is 00:00 on the selected date. 00 as the start and end time. <code>default-time</code> takes an array. Each item in the array is a string. The first item controls the time of the start date and the second item controls the time of the end date. </p>\n\n        '
      },
      codeFiles: ['default-value.vue']
    },
    {
      demoId: 'custom-weeks',
      name: {
        'zh-CN': '周次序号',
        'en-US': 'Weekly serial number'
      },
      desc: {
        'zh-CN':
          '\n          <p>通过设置 <code>show-week-number</code> 属性为 <code>true</code> 显示周次序号，通过<code>format-weeks</code>属性设置周次显示格式，<code>format-weeks</code>函数有两个参数：</p>\n          <ul>\n            <li>customWeeks：自定义周次的序号</li>\n            <li>weekFirstDays：获取每周次中的首个日期</li>\n          </ul>\n          <p>通过 <code>picker-options</code> 的 <code> firstDayOfWeek </code> 属性来设置每周的第一天是星期几，默认值是7，也就是星期天。</p>\n        ',
        'en-US':
          '\n          <p>Display the original weekly sequence number through the <code> show-week-number </code> attribute, and pass in two parameters through the <code> format-weeks </code> attribute.</p>\n          <p>The parameters are set as follows: </p>\n          <ul><li>customWeeks: set the sequence number of the custom week</li><li>weekFirstDays: get the first date of each week</li></ul>\n          <p>Set the day of the week on the first day of the week through the <code> firstDayOfWeek </code> property of <code> picker-options </code>. The default value is 7, which is Sunday.</p>\n        '
      },
      codeFiles: ['custom-weeks.vue']
    },
    {
      demoId: 'filter-mode',
      name: {
        'zh-CN': '过滤器模式',
        'en-US': 'Filter mode'
      },
      desc: {
        'zh-CN':
          '<p>通过 <code>shape="filter"</code> 属性切换至过滤器模式。</p><p>过滤器模式下可传入 label 显示标题，tip 显示提示信息，clearable 是否显示清除按钮。</p>',
        'en-US':
          "<p>Switch to filter mode through the <code> shape='filter' </code> attribute. </p><p> in filter mode, label display caption can be passed in, tip displays prompt information, and whether clearable displays the clear button.</p>"
      },
      codeFiles: ['filter-mode.vue']
    },
    {
      demoId: 'label-inside',
      name: {
        'zh-CN': 'label 内置',
        'en-US': ''
      },
      desc: {
        'zh-CN': '<p>通过 <code>label</code> 属性可以设置日期选择器的 label，使其放置在组件的开始位置。</p>\n',
        'en-US': ''
      },
      codeFiles: ['label-inside.vue']
    },
    {
      demoId: 'step',
      name: {
        'zh-CN': '步长',
        'en-US': 'Step'
      },
      desc: {
        'zh-CN':
          '\n          <p><code>step</code> 和 <code>time-arrow-control</code> 都是当 type 为 datetime、datetimerange 时使用。</p>\n          <p>通过 <code>step</code> 设置步长，默认值为 <code>{ hour: 1, minute: 1, second: 1 }</code>，其中 <code>hour</code> 的设置范围是 <code>0-23</code>，<code>minute</code>、<code>second</code> 的设置范围是 <code>0-60</code>。可单独设置其中的一项或多项值，未设置的默认值为 <code>1</code>。</p>\n          <p>将 <code>time-arrow-control</code> 设为 true 可以设置通过箭头按钮控制时间选择，默认为通过鼠标滚轮滚动选择时间。</p>\n        ',
        'en-US':
          '\n          <p><code> step </code> and <code> time-arrow-control </code> are used when type is datetime or datetimerange.</p>\n          <p>Set the step size through <code> step </code>. The default value is <code> {hour: 1, minute: 1, second: 1} </code>, where the setting range of <code> hour </code> is <code> 0-23 </code>, <code> minute </code>, <code> second </code> is <code> 0-60 </code>. One or more of these values can be set separately, and the unset default value is <code> 1 </code>.</p>\n          <p>Setting <code>time-arrow-control</code> to true sets the time selection to be controlled by arrow buttons, and the default is to scroll through the mouse wheel to select time.</p>\n        '
      },
      codeFiles: ['step.vue']
    },
    {
      demoId: 'align',
      name: {
        'zh-CN': '对齐方式',
        'en-US': 'Alignment'
      },
      desc: {
        'zh-CN':
          '<p>通过 <code>align</code> 属性可以设置日期选择面板与输入框之间的对齐方式，可选值有 left、right、center，默认为 left 左对齐。</p>\n',
        'en-US':
          '<p>You can use the <code>align</code> attribute to set the alignment mode between the date selection panel and the text box. The options are left, right, and center. The default value is left. </p>\n'
      },
      codeFiles: ['align.vue']
    },
    {
      demoId: 'custom-suffix-icon',
      name: {
        'zh-CN': '后置图标',
        'en-US': 'Customized rear icon'
      },
      desc: {
        'zh-CN':
          '\n          <p>通过 <code>suffix-icon</code> 属性设置日期输入框后置图标，从 <code>@opentiny/vue-icon</code> 中导入一个图标并进行初始化后传给 <code>suffix-icon</code>。</p>\n          <p>通过 <code>popper-class</code> 属性可以为 DatePicker 下拉弹框添加 class 类名。</p>\n        ',
        'en-US':
          '\n          <p>Uses the <code>suffix-icon</code> attribute to set the icon behind the date text box. An icon is imported from the <code>@opentiny/vue-icon</code>, initialized, and transferred to the <code>suffix-icon</code>. </p>\n          <p>Uses the <code>popper-class</code> attribute to add the class name to the DatePicker drop-down box</p>\n        '
      },
      codeFiles: ['custom-suffix-icon.vue']
    },
    {
      demoId: 'unlink-panels',
      name: {
        'zh-CN': '面板联动',
        'en-US': 'Default time setting when the selector is enabled'
      },
      desc: {
        'zh-CN':
          '<p>范围选择时，默认情况下，在开始日期面板中单击上一月或上一年箭头图标时，结束日期面板中日期也联动切换到上一月或上一年。在结束日期面板中切换下一月或下一年时，开始日期面板也随之联动。但若配置 <code>unlink-panels</code> 属性为 true ，面板之间就不再联动，切换年月时只对当前面板生效。</p>\n',
        'en-US':
          '<p><code>default-value</code> property specifies the date that is selected by default when the date picker panel opens. </p>\n'
      },
      codeFiles: ['unlink-panels.vue']
    },
    {
      demoId: 'timezone',
      name: {
        'zh-CN': '时区选择',
        'en-US': 'Time Zone Selection'
      },
      desc: {
        'zh-CN':
          '\n          <p>通过 <code>show-timezone</code> 属性可以设置日期选择面板时区选择，同时需要引入 timezoneData 时区数据。</p>\n          <p>通过 <code>isutc8</code> 属性可以设置是否显示为东八区时间。</p>\n        ',
        'en-US':
          '\n          <p>You can set the time zone of the date selection panel through the <code>show-timezone</code> attribute, and import timezoneData time zone data</p>\n          <p>The <code> isutc8 </code> property allows you to set whether it is displayed as East eighth District time.</p>\n        '
      },
      codeFiles: ['timezone.vue']
    },
    {
      demoId: 'validate-event',
      name: {
        'zh-CN': '表单校验',
        'en-US': 'Validate event'
      },
      desc: {
        'zh-CN':
          '<p>日期选择器在输入时默认会触发表单校验，触发方式有 blur、change。但若设置 <code>validate-event</code> 属性为 false，将不再触发表单校验。</p>\n',
        'en-US': ''
      },
      codeFiles: ['validate-event.vue']
    },
    {
      demoId: 'now',
      name: {
        'zh-CN': ' “此刻”逻辑定制',
        'en-US': '"At the moment" logic customization'
      },
      desc: {
        'zh-CN':
          '<p>“此刻”配置的时间与用户本地时间设置相关，为保证部分逻辑对服务器时间的要求，组件提供 <code>nowClick</code >函数和 <code>now</code> 插槽两种定制方式，用户可以自定义“此刻”配置的时间。</p>',
        'en-US': ''
      },
      codeFiles: ['now.vue']
    },
    {
      demoId: 'events',
      name: {
        'zh-CN': '事件',
        'en-US': 'Events'
      },
      desc: {
        'zh-CN':
          '<p>支持 <code>focus</code>、<code>blur</code>、<code>change</code>、<code>onPick</code> 事件。<br><code>onPick</code> 代表获取选中日期后执行的回调，需要与 <code>daterange</code> 或 <code>datetimerange</code> 类型配合使用才生效，配置在 <code>picker-options</code> 中。</p>',
        'en-US': '<p>The main events are focus, blur and change.</p>'
      },
      codeFiles: ['events.vue']
    }
  ]
}
