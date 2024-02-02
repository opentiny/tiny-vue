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
        'zh-CN': '详细用法参考如下示例。',
        'en-US': 'For details, see the following example.'
      },
      codeFiles: ['basic-usage.vue']
    },
    {
      demoId: 'range-placeholder',
      name: {
        'zh-CN': '固定时间范围',
        'en-US': 'Fixed Time Range'
      },
      desc: {
        'zh-CN': '如果先选中了开始（或结束）时间，则结束（或开始）时间的状态也将会随之改变。',
        'en-US': 'For details, see the following example.'
      },
      codeFiles: ['range-placeholder.vue']
    },
    {
      demoId: 'default-value',
      name: {
        'zh-CN': '设置打开默认时间',
        'en-US': 'Default time setting when the selector is enabled'
      },
      desc: {
        'zh-CN': '<p>通过 <code>default-value</code> 设置选择器打开显示默认时间。</p>\n',
        'en-US': '<p>Use <code>default-value</code> to set the selector to open the default display time</p>\n'
      },
      codeFiles: ['default-value.vue']
    },
    {
      demoId: 'picker-options',
      name: {
        'zh-CN': '固定时间点',
        'en-US': 'Specified time point'
      },
      desc: {
        'zh-CN':
          '<p>提供固定时间点，可通过 picker-options 对象中的 start、end、step、minTime、maxTime 设置起始时间、结束时间、步长、最小有效时间和最大有效时间。</p>\n',
        'en-US': '<p>picker-options Set Time</p>\n'
      },
      codeFiles: ['picker-options.vue']
    },
    {
      demoId: 'suffix-icon',
      name: {
        'zh-CN': '后置图标',
        'en-US': 'Rear icon'
      },
      desc: {
        'zh-CN': '<p>通过 <code>suffix-icon</code> 属性设置时间输入框后置图标。</p>\n',
        'en-US': '<p> uses the <code>suffix-icon</code> attribute to set the icon behind the time text box. </p>\n'
      },
      codeFiles: ['suffix-icon.vue']
    },
    {
      demoId: 'clear-icon',
      name: {
        'zh-CN': '清空图标',
        'en-US': 'Customized Clear Icon'
      },
      desc: {
        'zh-CN':
          '<p>通过 <code>clearable</code> 显示清空图标，通过 <code>clear-icon</code> 自定义清空图标，通过 <code>popper-class</code> 属性设置下拉框的类名。</p>',
        'en-US': '<p>Clear the icon by <code>clear-icon</code></p>\n'
      },
      codeFiles: ['clear-icon.vue']
    },
    {
      demoId: 'event-blur',
      name: {
        'zh-CN': '事件',
        'en-US': 'Event'
      },
      desc: {
        'zh-CN':
          '<p><code>focus</code> input 框聚焦时触发，<code>blur</code> input 框失焦时触发，<code>change</code> input 绑定值改变时触发。</p>\n',
        'en-US':
          'Triggered when the <p><code>focus</code> input frame is focused and when the input frame is out of focus</p>\n'
      },
      codeFiles: ['event-blur.vue']
    },
    {
      demoId: 'editable',
      name: {
        'zh-CN': '文本框不可编辑',
        'en-US': 'The text box cannot be edited.'
      },
      desc: {
        'zh-CN': '<p>时间输入框默认可以输入时间，设置 <code>editable</code> 为 false 后，将不能输入。</p>\n',
        'en-US':
          'By default, you can enter a time in the <p>Time text box. If you set <code>editable</code> to false, you cannot enter a time in the <p>Time text box. </p>\n'
      },
      codeFiles: ['editable.vue']
    },
    {
      demoId: 'size-medium',
      name: {
        'zh-CN': '尺寸',
        'en-US': 'medium Size'
      },
      desc: {
        'zh-CN': '通过修改 size 的属性值可调整输入框尺寸，提供 medium、small、mini三个固定属性值。',
        'en-US': 'For details, see the following example.'
      },
      codeFiles: ['size-medium.vue']
    },
    {
      demoId: 'focus',
      name: {
        'zh-CN': '手动获取焦点',
        'en-US': 'Manually obtaining the focus'
      },
      desc: {
        'zh-CN': '通过给组件设置 ref 手动调用触发 focus 事件。',
        'en-US': 'For details, see the following example.'
      },
      codeFiles: ['focus.vue']
    }
  ]
}
