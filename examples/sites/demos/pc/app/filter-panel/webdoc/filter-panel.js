export default {
  column: '2',
  owner: '',
  demos: [
    {
      'demoId': 'basic-usage',
      'name': { 'zh-CN': '基本用法', 'en-US': 'Basic Usage' },
      'desc': {
        'zh-CN':
          '通过 <code>label</code> 设置标题，<code>value</code> 设置标题右侧内容，<code>disabled</code> 设置是否禁用；通过默认插槽自定义过滤面板内容。',
        'en-US': `Set the title through<code>label</code>,<code>value</code>set the content to the right of the title, and<code>disabled</code>set whether to disable it; 
          Customize filter panel content through default slots.`
      },
      'codeFiles': ['basic-usage.vue']
    },
    {
      'demoId': 'popper-class',
      'name': { 'zh-CN': '自定义下拉面板', 'en-US': 'Custom dropdown box' },
      'desc': {
        'zh-CN':
          '通过 <code>placement</code> 控制下拉面板的位置， <code>popper-class</code> 设置类名，自定义下拉面板的样式；<code>popper-append-to-body</code> 设置弹下拉面板是否插入至 body 元素。在下拉面板的定位出现问题时，可将其设置为 false。',
        'en-US': `Control the position of the drop-down panel through<code>placement</code>. Set the class name and customize the style of the dropdown box through<code>popper-class</code>. <code>popper-append-to-body</code>Set whether the pop-up 
          menu is inserted into the body element. When there is an issue with the positioning of the dropdown box, it can be set to false.`
      },
      'codeFiles': ['popper-class.vue']
    },
    {
      'demoId': 'tip',
      'name': { 'zh-CN': '提示', 'en-US': 'Tip' },
      'desc': {
        'zh-CN': `通过 <code>:clearable='false'</code> 隐藏清空按钮；配合 <code>tip</code> 添加标题右侧提示信息。`,
        'en-US': `Hide the clear button through<code>:clearable='false'</code>; Collaborate with<code>tip</code>to add prompt information on the right side of the title.`
      },
      'codeFiles': ['tip.vue']
    },
    {
      'demoId': 'manual-hide',
      'name': { 'zh-CN': '手动隐藏', 'en-US': 'Manually hide' },
      'desc': {
        'zh-CN': '手动调用 <code>hide</code> 实例方法完成收起下拉面板功能。',
        'en-US': 'Manually call the<code>hide</code>instance method to complete the collapse dropdown function.'
      },
      'codeFiles': ['manual-hide.vue']
    },
    {
      'demoId': 'event',
      'name': { 'zh-CN': '事件', 'en-US': 'Event' },
      'desc': {
        'zh-CN':
          '<code>handle-clear</code> 监听清空按钮点击事件，执行删除操作； <code>visible-change</code> 监听下拉面板的显隐事件。',
        'en-US':
          '<code>handle-clear</code>Listen to the clear button click event and execute the delete operation<code>visible-change</code>listens to the explicit and implicit events of the drop-down panel.'
      },
      'codeFiles': ['event.vue']
    }
  ],
  apis: [
    {
      'name': 'filter-panel',
      'type': 'component',
      'props': [
        {
          'name': 'clearable ',
          'type': 'boolean',
          'defaultValue': 'true',
          'desc': {
            'zh-CN': '控制清空按钮的显隐，默认显示；可配合 handle-clear 事件来完成清空内容区域的值',
            'en-US':
              'Control the display of the clear button, default display; Can be used in conjunction with the handle clear event to clear the value of the content area'
          },
          'demoId': 'tip'
        },
        {
          'name': 'disabled',
          'type': 'boolean',
          'defaultValue': 'false',
          'desc': {
            'zh-CN': '是否禁用',
            'en-US': 'Whether to disable'
          },
          'demoId': 'basic-usage'
        },
        {
          'name': 'label',
          'type': 'string',
          'defaultValue': '',
          'desc': {
            'zh-CN': '标题',
            'en-US': 'The title'
          },
          'demoId': 'basic-usage'
        },
        {
          'name': 'placement',
          'type': 'IPopperPlacement',
          'typeAnchorName': 'popover#IPopperPlacement',
          'defaultValue': `'bottom-start'`,
          'desc': {
            'zh-CN': '下拉面板位置，可选值请参考popover组件的同属性',
            'en-US':
              'Drop down panel position, optional values please refer to the same properties of the popover component'
          },
          'demoId': 'popper-class'
        },
        {
          'name': 'popper-append-to-body',
          'type': 'boolean',
          'defaultValue': 'true',
          'desc': {
            'zh-CN': '下拉面板是否添加到body元素中',
            'en-US': 'Indicates whether to add the drop-down panel to the body element'
          },
          'demoId': 'popper-class'
        },
        {
          'name': 'popper-class',
          'type': 'string',
          'defaultValue': '',
          'desc': {
            'zh-CN': '下拉面板的class',
            'en-US': 'Class in the drop-down panel'
          },
          'demoId': 'popper-class'
        },
        {
          'name': 'tip',
          'type': 'string',
          'defaultValue': '',
          'desc': {
            'zh-CN': '标题右侧的提示信息',
            'en-US': 'Message on the right of the title'
          },
          'demoId': 'tip'
        },
        {
          'name': 'value',
          'type': 'string',
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
          'type': '() => void',
          'defaultValue': '',
          'desc': {
            'zh-CN': '清除按钮点击事件',
            'en-US': 'Clear button click event'
          },
          'demoId': 'event'
        },
        {
          'name': 'visible-change',
          'type': '(visible: boolean) => void',
          'defaultValue': '',
          'desc': {
            'zh-CN': '下拉面板显示隐藏事件',
            'en-US': 'The drop-down panel displays hidden events'
          },
          'demoId': 'event'
        }
      ],
      'methods': [
        {
          'name': 'hide',
          'type': '() => void',
          'desc': {
            'zh-CN': '隐藏下拉面板的方法',
            'en-US': 'How to hide the drop-down panel'
          },
          'demoId': 'manual-hide'
        }
      ]
    }
  ]
}
