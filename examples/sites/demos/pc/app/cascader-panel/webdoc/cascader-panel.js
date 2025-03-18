export default {
  column: '2',
  owner: '',
  show: true,
  cloud: true,
  demos: [
    {
      demoId: 'basic-usage',
      name: {
        'zh-CN': '基本用法',
        'en-US': 'Basic Usage'
      },
      desc: {
        'zh-CN':
          '<p>通过 <code>options</code> 来指定选项，也可通过 <code>props</code> 来设置多选、动态加载等功能，具体详情见下方 API 表格。</p>\n',
        'en-US':
          '<p>Use <code>options</code> to specify options. You can also use <code>props</code> to set functions such as multiple selection and dynamic loading. For details, see the API table below. </p>\n'
      },
      codeFiles: ['basic-usage.vue']
    },
    {
      demoId: 'custom-option-content',
      name: {
        'zh-CN': '自定义节点内容',
        'en-US': 'Custom Node Content'
      },
      desc: {
        'zh-CN':
          '<p>\n            <div>可以通过 <code>scoped slot</code> 对级联面板的备选项的节点内容进行自定义。</div>\n            <div><code>scoped slot</code> 会传入两个字段 <code>node</code> 和 <code>data</code>，分别表示当前节点的 Node 对象和数据。</div>\n          </p>',
        'en-US':
          "<p>\n          The <div> can customize the node contents of the cascade panel's alternatives through the <code>scoped slot</code>. </div>\n          <div><code>scoped slot</code> passes in two fields, <code>node</code> and <code>data</code>, representing the Node object and data of the current node, respectively. </div>\n        </p>"
      },
      codeFiles: ['custom-option-content.vue']
    },
    {
      demoId: 'multiple',
      name: {
        'zh-CN': '多选',
        'en-US': 'Multiple Choices'
      },
      desc: {
        'zh-CN': '<p>通过 <code>props.multiple = true</code> 来开启多选模式。</p>\n',
        'en-US': '<p>Use <code>props.multiple = true</code> to enable the multi-selection mode. </p>\n'
      },
      codeFiles: ['multiple.vue']
    },
    {
      demoId: 'cascader-panel-props',
      name: {
        'zh-CN': 'Props 选项',
        'en-US': 'Props Options'
      },
      desc: {
        'zh-CN':
          "<p>\n              <div>通过 <code>children</code> 指定子级选项，默认值为 'children'。</div>\n              <div>通过 <code>emitPath</code> 是否返回由该节点所在的各级菜单的值所组成的数组。</div>\n              <div>通过 <code>label</code> 指定显示选项 label 值，默认为 'label'。</div>\n              <div>通过 <code>value</code> 指定值选项 value 值，默认为 'value'。</div>\n            </p>",
        'en-US':
          '<p>\n            <div> specifies the child options through <code>children</code>, which defaults to children. </div>\n            <div> Whether to return an array of values from the menu levels where the node resides via <code>emitPath</code>. </div>\n            <div> specifies the display option label value by <code>label</code>, which defaults to label. </div>\n            <div> Specifies the value option value by <code>value</code>, which defaults to value. </div>\n          </p>'
      },
      codeFiles: ['cascader-panel-props.vue']
    },
    {
      demoId: 'change',
      name: {
        'zh-CN': '事件与方法',
        'en-US': 'Selected node changes'
      },
      desc: {
        'zh-CN':
          '<p>\n            <div>通过 <code>change</code> 点击节点后触发的事件，回调参数为"选中节点的值"。</div>\n            <div>通过 <code>clearCheckedNodes</code> 清除选中的节点。</div>\n            <div>通过 <code>getCheckedNodes</code> 获取选中的节点。</dic>\n          </p>',
        'en-US':
          '<p>\n            <div> The event triggered by clicking the node through <code>change</code>, with the callback parameter "Select the value of the node". </div>\n            <div> Clear the selected nodes with <code>clearCheckedNodes</code>. </div>\n            <div> Get the selected nodes from <code>getCheckedNodes</code>. </dic>\n          </p>'
      },
      codeFiles: ['change.vue']
    }
  ],
  features: [
    {
      id: 'basic',
      name: '基本功能',
      support: {
        value: true
      },
      description: '通过 data 设置级联面板的数据。',
      cloud: {
        value: true
      },
      apis: ['data'],
      demos: ['basic-usage']
    },
    {
      id: 'disabled',
      name: '禁用状态',
      support: {
        value: true
      },
      description: '通过 disabled 设置是否禁用级联面板。',
      cloud: {
        value: true
      },
      apis: ['disabled'],
      demos: ['disabled']
    },
    {
      id: 'change-on-select',
      name: '选择即改变',
      support: {
        value: true
      },
      description: '通过 change-on-select 设置选择即改变。',
      cloud: {
        value: true
      },
      apis: ['change-on-select'],
      demos: ['show-all-levels']
    },
    {
      id: 'multiple',
      name: '多选功能',
      support: {
        value: true
      },
      description: '通过 multiple 设置是否为多选。',
      cloud: {
        value: true
      },
      apis: ['multiple'],
      demos: ['multiple']
    },
    {
      id: 'custom-option',
      name: '自定义选项',
      support: {
        value: true
      },
      description: '通过 scoped slot 可以自定义备选项。',
      cloud: {
        value: true
      },
      apis: ['slot-default'],
      demos: ['custom-option']
    },
    {
      id: 'events',
      name: '事件处理',
      support: {
        value: true
      },
      description: '当选中节点变化时会触发 change 事件。',
      cloud: {
        value: true
      },
      apis: ['change'],
      demos: ['events']
    }
  ]
}
