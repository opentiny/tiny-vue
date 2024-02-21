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
        'zh-CN': '详细用法参考如下示例',
        'en-US': 'For details, see the following example.'
      },
      codeFiles: ['basic-usage.vue']
    },
    {
      demoId: 'dept-events',
      name: {
        'zh-CN': 'open 和 change 事件',
        'en-US': 'open and change events'
      },
      desc: {
        'zh-CN': '详细用法参考如下示例',
        'en-US': 'For details, see the following example.'
      },
      codeFiles: ['dept-events.vue']
    },
    {
      demoId: 'dept-selected',
      name: {
        'zh-CN': 'selected 事件',
        'en-US': 'selected event'
      },
      desc: {
        'zh-CN': '详细用法参考如下示例',
        'en-US': 'For details, see the following example.'
      },
      codeFiles: ['dept-selected.vue']
    },
    {
      demoId: 'dept-close',
      name: {
        'zh-CN': 'close 事件',
        'en-US': 'close event'
      },
      desc: {
        'zh-CN': '详细用法参考如下示例',
        'en-US': 'For details, see the following example.'
      },
      codeFiles: ['dept-close.vue']
    },
    {
      demoId: 'dept-confirm',
      name: {
        'zh-CN': 'confirm 事件',
        'en-US': 'confirm event'
      },
      desc: {
        'zh-CN': '详细用法参考如下示例',
        'en-US': 'For details, see the following example.'
      },
      codeFiles: ['dept-confirm.vue']
    },
    {
      demoId: 'dept-cancel',
      name: {
        'zh-CN': 'cancel 事件',
        'en-US': 'cancel event'
      },
      desc: {
        'zh-CN': '详细用法参考如下示例',
        'en-US': 'For details, see the following example.'
      },
      codeFiles: ['dept-cancel.vue']
    },
    {
      demoId: 'size',
      name: {
        'zh-CN': '设置组件大小',
        'en-US': 'Set Component Size'
      },
      desc: {
        'zh-CN': '<p>可以设置为：<code>medium</code>，<code>small</code>，<code>mini</code></p>\n',
        'en-US': '<p> can be set to <code>medium</code>, <code>small</code>, <code>mini</code></p>\n'
      },
      codeFiles: ['size.vue']
    },
    {
      demoId: 'before-confirm',
      name: {
        'zh-CN': '阻止弹框关闭',
        'en-US': 'Prevent pop-up dialog box closing'
      },
      desc: {
        'zh-CN': '<p>before-confirm（确认前回调事件）,方法里面 return true/false，表示是否关闭弹框</p>\n',
        'en-US':
          '<p>before-confirm (callback event before confirmation). In the method, return true/false indicates whether to close the dialog box.</p>\n'
      },
      codeFiles: ['before-confirm.vue']
    },
    {
      demoId: 'auto-select',
      name: {
        'zh-CN': '部门信息自动选中',
        'en-US': 'Department information is automatically selected.'
      },
      desc: {
        'zh-CN':
          '<p><code>auto-select</code> 默认值为 true，配置该属性为 false 可以阻止当部门信息仅一个时自动补全选中行为。</p>\n',
        'en-US':
          'The default value of <p><code>auto-select</code> is true. If this parameter is set to false, the system automatically supplements the selected information when there is only one department. </p>\n'
      },
      codeFiles: ['auto-select.vue']
    },
    {
      demoId: 'custom-service',
      name: {
        'zh-CN': '自定义服务数据',
        'en-US': 'Customized Service Data'
      },
      desc: {
        'zh-CN':
          '<p>提供 <code>fetch-dept-by-value</code>、<code>fetch-dept</code>、<code>fetch-dept-list</code> 属性用于自定义部门服务。</p>\n',
        'en-US':
          '<p> provides the <code>fetch-dept-by-value</code>, <code>fetch-dept, and <code>fetch-dept-list</code> attributes for customizing department services. </p>\n'
      },
      codeFiles: ['custom-service.vue']
    },
    {
      demoId: 'dynamic-disable',
      name: {
        'zh-CN': '禁用',
        'en-US': 'Disabled'
      },
      desc: {
        'zh-CN': '<p>可通过 <code>disabled</code> 设置是否禁用，默认为 fase</p>\n',
        'en-US':
          '<p>You can use <code>disabled</code> to set whether to disable the function. The default value is fase</p>\n'
      },
      codeFiles: ['dynamic-disable.vue']
    },
    {
      demoId: 'title',
      name: {
        'zh-CN': '设置弹出框标题',
        'en-US': 'Set the dialog box title.'
      },
      desc: {
        'zh-CN': '<p>自定义弹出框标题，该属性默认值为空。</p>\n',
        'en-US': '<p>Customized dialog box title. The default value of this attribute is null. </p>\n'
      },
      codeFiles: ['title.vue']
    },
    {
      demoId: 'slot-hrapprover',
      name: {
        'zh-CN': '权签人插槽',
        'en-US': 'Approval Slot'
      },
      desc: {
        'zh-CN': '详细用法参考如下示例',
        'en-US': 'For details, see the following example.'
      },
      codeFiles: ['slot-hrapprover.vue']
    }
  ]
}
