export default {
  column: '2',
  owner: '',
  demos: [
    {
      'demoId': 'basic-usage',
      'name': { 'zh-CN': '基本用法', 'en-US': 'Basic Usage' },
      'desc': {
        'zh-CN': '<p>过滤器面板用于列表数据过滤、图标卡片过滤，自定义过滤面板内容</p>\n',
        'en-US':
          '<p>The filter panel is used to filter list data, filter icon cards, and customize the filter panel content</p>\n'
      },
      'codeFiles': ['basic-usage.vue']
    },
    {
      'demoId': 'disabled',
      'name': { 'zh-CN': '禁用', 'en-US': 'Disabled' },
      'desc': {
        'zh-CN': '<p>通过<code>disabled</code>设置禁用</p>\n',
        'en-US':
          '<p>Disabling by <code>disabled</code></p>\n'
      },
      'codeFiles': ['disabled.vue']
    },
    {
      'demoId': 'clearable',
      'name': { 'zh-CN': '显示清空按钮', 'en-US': 'Show Clear Button' },
      'desc': {
        'zh-CN': '<p>给组件加上<code>clearable</code>属性可以显示清空按钮，配合<code>handle-clear</code>事件一起使用清空内容区域的值</p>\n',
        'en-US':
          '<p>The <code>clearable</code> attribute is added to the component to display the clear button. This attribute is used together with the <code>handle-clear</code> event to clear the value of the content area.</p>\n'
      },
      'codeFiles': ['clearable.vue']
    },
    {
      'demoId': 'tip',
      'name': { 'zh-CN': 'tip 提示', 'en-US': 'Tip' },
      'desc': {
        'zh-CN': '<p>标题右侧添加提示信息</p>\n',
        'en-US':
          '<p>Add a message to the right of the title.</p>\n'
      },
      'codeFiles': ['tip.vue']
    },
    {
      'demoId': 'manual-hide',
      'name': { 'zh-CN': '手动隐藏', 'en-US': 'Manually hide' },
      'desc': {
        'zh-CN': '<p>通过给元素添加 ref，然后主动调用组件的 hide 方法可以手动隐藏下拉框</p>',
        'en-US':
          '<p>You can manually hide the drop-down list box by adding ref to the element and invoking the hide method of the component.</p>'
      },
      'codeFiles': ['manual-hide.vue']
    },
    {
      'demoId': 'event',
      'name': { 'zh-CN': '事件', 'en-US': 'Event' },
      'desc': {
        'zh-CN': '<p><code>visible-change</code> 事件在下拉面板显示/隐藏时触发</p>',
        'en-US': '<p><code>visible-change</code> event is triggered when the drop-down panel is displayed or hidden</p>'
      },
      'codeFiles': ['event.vue']
    },
    {
      'demoId': 'popper-class',
      'name': { 'zh-CN': '弹出框样式', 'en-US': 'Pop-up dialog box style' },
      'desc': {
        'zh-CN':
          '<p>通过 <code>popper-class</code> 属性可自定义下拉弹框的样式。popper-append-to-body 指定是否将弹出框插入至 body 元素。在弹出框的定位出现问题时，可将该属性设置为 false</p>',
        'en-US':
          '<p>You can use the <code>popper-class</code> attribute to customize the style of the drop-down list box. popper-append-to-body Specifies whether to insert a pop-up box into the body element. If a fault occurs in locating the fault in the dialog box that is displayed, you can set this attribute to false</p>'
      },
      'codeFiles': ['popper-class.vue']
    }
  ],
  apis: [
    {
      'name': 'filter-panel',
      'type': 'component',
      'properties': [
        {
          'name': 'clearable ',
          'type': 'Boolean',
          'defaultValue': 'true',
          'desc': {
            'zh-CN': '显示清空按钮，配合`handle-clear`事件一起使用清空内容区域的值，默认为true。',
            'en-US': 'Displays the Clear button, which is used together with the `handle-clear` event to clear the value of the content area. The default value is true.'
          },
          'demoId': 'clearable'
        },
        {
          'name': 'disabled',
          'type': 'Boolean',
          'defaultValue': 'false',
          'desc': {
            'zh-CN': '是否禁用',
            'en-US': 'Whether to disable'
          },
          'demoId': 'disabled'
        },
        {
          'name': 'label',
          'type': 'String',
          'defaultValue': '',
          'desc': {
            'zh-CN': '标题',
            'en-US': 'The title'
          },
          'demoId': 'popper-class'
        },
        {
          'name': 'placement',
          'type': 'String',
          'defaultValue': 'bottom-start',
          'desc': {
            'zh-CN': '弹出框位置，默认值为bottom-start',
            'en-US': 'Position of the pop-up dialog box. The default value is bottom-start.'
          },
          'demoId': ''
        },
        {
          'name': 'popper-append-to-body',
          'type': 'Boolean',
          'defaultValue': 'true',
          'desc': {
            'zh-CN': '下拉框是否添加到body中',
            'en-US': 'Indicates whether to add the drop-down list box to the body.'
          },
          'demoId': 'popper-class'
        },
        {
          'name': 'popper-class',
          'type': 'String',
          'defaultValue': '',
          'desc': {
            'zh-CN': '下拉框的class',
            'en-US': 'Class in the drop-down list box'
          },
          'demoId': 'popper-class'
        },
        {
          'name': 'tip',
          'type': 'String',
          'defaultValue': '',
          'desc': {
            'zh-CN': '标题右侧的提示信息',
            'en-US': 'Message on the right of the title'
          },
          'demoId': 'tip'
        },
        {
          'name': 'value',
          'type': 'String',
          'defaultValue': '',
          'desc': {
            'zh-CN': '显示的值',
            'en-US': 'Displayed Values'
          },
          'demoId': 'basic-usage'
        }
      ],
      'events': [
        {
          'name': 'handle-clear',
          'type': 'Function',
          'defaultValue': '',
          'desc': {
            'zh-CN': '清除按钮点击事件。',
            'en-US': 'Clear button click event.'
          },
          'demoId': 'event'
        },
        {
          'name': 'visible-change',
          'type': 'Function',
          'defaultValue': '',
          'desc': {
            'zh-CN': '下拉框显示隐藏事件。',
            'en-US': 'The drop-down list box displays hidden events.'
          },
          'demoId': 'event'
        }
      ]
    }]
}
