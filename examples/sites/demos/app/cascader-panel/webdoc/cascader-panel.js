export default {
  column: '2',
  owner: '',
  demos: [
    {
      'demoId': 'basic-usage',
      'name': { 'zh-CN': '基本用法', 'en-US': 'Basic Usage' },
      'desc': {
        'zh-CN':
          '<p>通过 <code>options</code> 来指定选项，也可通过 <code>props</code> 来设置多选、动态加载等功能，具体详情见下方 API 表格。</p>\n',
        'en-US':
          '<p>Use <code>options</code> to specify options. You can also use <code>props</code> to set functions such as multiple selection and dynamic loading. For details, see the API table below. </p>\n'
      },
      'codeFiles': ['basic-usage.vue']
    },
    {
      'demoId': 'change',
      'name': { 'zh-CN': '选中节点变化', 'en-US': 'Selected node changes' },
      'desc': {
        'zh-CN':
          '<p>通过 <code>change</code> 点击节点后触发的事件，回调参数为 选中节点的值\n通过 <code>clearCheckedNodes</code> 清除选中的节点。\n通过 <code>getCheckedNodes</code> 获取选中的节点。</p>\n',
        'en-US':
          '<p>The event is triggered after a node is clicked through <code>change</code>. The callback parameter is the value of the selected node.\nYou can clear the selected node through <code>clearCheckedNodes</code>. \n Obtain the selected node through <code>getCheckedNodes</code>. </p>\n'
      },
      'codeFiles': ['change.vue']
    },
    {
      'demoId': 'expand-change',
      'name': { 'zh-CN': '展开节点发生变化', 'en-US': 'The expanded node changes.' },
      'desc': {
        'zh-CN':
          '<p>通过 <code>expand-change</code> 点击展开节点发生变化时触发，回调参数为 各父级选项值组成的数组</p>\n',
        'en-US':
          '<p>This event is triggered when you click <code>expand-change</code> to expand a node. The callback parameter is an array consisting of parent option values</p>\n'
      },
      'codeFiles': ['expand-change.vue']
    },
    {
      'demoId': 'custom-option-content',
      'name': { 'zh-CN': '自定义节点内容', 'en-US': 'Custom Node Content' },
      'desc': {
        'zh-CN':
          '<p>可以通过 <code>scoped slot</code> 对级联面板的备选项的节点内容进行自定义，<code>scoped slot</code> 会传入两个字段 <code>node</code> 和 <code>data</code>，分别表示当前节点的 Node 对象和数据。</p>\n',
        'en-US':
          '<p>You can use <code>scoped slot</code> to customize the node content of the options of the cascading panel. <code>scoped slot</code> transfers two fields: <code>node</code> and <code>data</code>, indicating the node object and data of the current node, respectively. </p>\n'
      },
      'codeFiles': ['custom-option-content.vue']
    },
    {
      'demoId': 'cascader-panel-props',
      'name': { 'zh-CN': 'Props 选项', 'en-US': 'Props Options' },
      'desc': {
        'zh-CN':
          '<div class="tip custom-block"><p class="custom-block-title">Props</p>\n<p>通过 <code>children</code> 指定子级选项，默认值为 children。\n通过 <code>emitPath</code> 是否返回由该节点所在的各级菜单的值所组成的数组。\n通过 <code>label</code> 指定显示选项 label 值，默认为 label。\n通过 <code>value</code> 指定值选项 value 值，默认为 value</p>\n</div>\n',
        'en-US':
          '<div class="tip custom-block"><p class="custom-block-title">Props</p>\n<p> specifies child options with <code>children</code>. The default value is children. \n Indicates whether to return an array consisting of the values of the menus where the node is located through <code>emitPath</code>. \n Use <code>label</code> to specify the label value of the display option. The default value is label. \n Use <code>value</code> to specify the value of the value option. The default value is value</p>\n</div>\n'
      },
      'codeFiles': ['cascader-panel-props.vue']
    }
  ],
  apis: [
    {
      'name': 'cascader-panel',
      'type': 'component',
      'properties': [
        {
          'name': 'modelValue / v-model',
          'type': '',
          'defaultValue': '',
          'desc': { 'zh-CN': '选中项绑定值', 'en-US': 'Bound value of the selected item' },
          'demoId': 'basic-usage'
        },
        {
          'name': 'options',
          'type': 'Array',
          'defaultValue': '',
          'desc': {
            'zh-CN': '可选项数据源，键名可通过 Props 属性配置',
            'en-US': 'Optional data source. The key name can be configured through the Props attribute.'
          },
          'demoId': 'change'
        },
        {
          'name': 'props',
          'type': 'Object',
          'defaultValue': '',
          'desc': {
            'zh-CN': '配置选项，具体见 CascaderPanel Props 表 ',
            'en-US': 'Configuration options. For details, see the CascaderPanel Props table.'
          },
          'demoId': 'cascader-panel-props'
        }
      ],
      'events': [
        {
          'name': 'change',
          'type': 'Function(arg)',
          'defaultValue': '',
          'desc': {
            'zh-CN': '当选中节点变化时触发;arg:回调参数为 选中节点的值 (Array类型)',
            'en-US':
              'This event is triggered when the selected node changes. arg: The callback parameter is the value of the selected node (array type).'
          },
          'demoId': 'change'
        },
        {
          'name': 'expand-change',
          'type': 'Functon(arg)',
          'defaultValue': '',
          'desc': {
            'zh-CN': '当展开节点发生变化时触发;arg:回调参数为 各父级选项值组成的数组 (Array类型)',
            'en-US':
              'This event is triggered when the expanded node changes. arg: The callback parameter is an array (Array type) consisting of parent option values.'
          },
          'demoId': 'change'
        }
      ],
      'slots': [
        {
          'name': 'default',
          'type': '',
          'defaultValue': '',
          'desc': {
            'zh-CN': '自定义备选项的节点内容，参数为 { node, data }，分别为当前节点的 Node 对象和数据',
            'en-US':
              'User-defined candidate node content. The parameter is {node, data}, which indicates the node object and data of the current node.'
          },
          'demoId': 'custom-option-content'
        }
      ],
      'methods': [
        {
          'name': 'getCheckedNodes',
          'type': '',
          'defaultValue': '',
          'desc': {
            'zh-CN': '获取选中的节点;参数为 (leafOnly) 是否只是获取子节点，默认值为 false',
            'en-US':
              'Obtain the selected node. The parameter (leafOnly) indicates whether to obtain only subnodes. The default value is false'
          },
          'demoId': 'change'
        },
        {
          'name': 'clearCheckedNodes',
          'type': '',
          'defaultValue': '',
          'desc': { 'zh-CN': '清空选中的节点', 'en-US': 'Clear selected nodes.' },
          'demoId': 'change'
        }
      ],
      'caspanelprops': [
        {
          'name': 'expandTrigger',
          'type': 'String',
          'defaultValue': 'click',
          'desc': {
            'zh-CN': '次级菜单的展开方式;该属性的可选值为 click / hover',
            'en-US': 'The expansion mode of the secondary menu; The optional values of this attribute are click / hover'
          },
          'demoId': 'basic-usage'
        },
        {
          'name': 'multiple',
          'type': 'Boolean',
          'defaultValue': 'false',
          'desc': { 'zh-CN': '是否多选', 'en-US': 'Whether to select multiple options' },
          'demoId': 'default-multiple'
        },
        {
          'name': 'checkStrictly',
          'type': 'Boolean',
          'defaultValue': ' false',
          'desc': {
            'zh-CN': '是否严格的遵守父子节点不互相关联',
            'en-US':
              'Whether to strictly comply with the principle that parent and child nodes are not associated with each other'
          },
          'demoId': 'check-strictly'
        },
        {
          'name': 'emitPath',
          'type': 'Boolean',
          'defaultValue': ' true',
          'desc': {
            'zh-CN':
              '在选中节点改变时，是否返回由该节点所在的各级菜单的值所组成的数组，若设置 false，则只返回该节点的值',
            'en-US':
              'Indicates whether to return an array consisting of the values of menus at different levels of the selected node when the selected node is changed. If this parameter is set to false, only the value of the selected node is returned.'
          },
          'demoId': 'events'
        },
        {
          'name': 'lazy',
          'type': 'Boolean',
          'defaultValue': 'false',
          'desc': {
            'zh-CN': '是否动态加载子节点，需与 lazyLoad 方法结合使用',
            'en-US':
              'Whether to dynamically load subnodes. This parameter must be used together with the lazyLoad method.'
          },
          'demoId': 'auto-load'
        },
        {
          'name': 'lazyLoad',
          'type': 'Function(node, resolve)',
          'defaultValue': '',
          'desc': {
            'zh-CN':
              '加载动态数据的方法，仅在 lazy 为 true 时有效;参数说明： node为当前点击的节点，resolve为数据加载完成的回调(必须调用)',
            'en-US':
              'Method for loading dynamic data. This parameter is valid only when lazy is set to true. Parameter description: node indicates the currently clicked node. resolve indicates the callback after data loading is complete (mandatory).'
          },
          'demoId': 'auto-load'
        },
        {
          'name': 'value',
          'type': 'String',
          'defaultValue': "'value'",
          'desc': {
            'zh-CN': '指定选项的值为选项对象的某个属性值',
            'en-US': 'The value of an option is the value of an attribute of the option object.'
          },
          'demoId': 'props-children'
        },
        {
          'name': 'label',
          'type': 'String',
          'defaultValue': "'label'",
          'desc': {
            'zh-CN': '指定选项标签为选项对象的某个属性值',
            'en-US': 'Specify that the option label is an attribute value of the option object.'
          },
          'demoId': 'props-children'
        },
        {
          'name': 'children',
          'type': 'String',
          'defaultValue': "'children'",
          'desc': {
            'zh-CN': '指定选项的子选项为选项对象的某个属性值',
            'en-US': 'Specifies that the sub-option of an option is an attribute value of the option object.'
          },
          'demoId': 'props-children'
        },
        {
          'name': 'disabled',
          'type': 'String',
          'defaultValue': "'disabled'",
          'desc': {
            'zh-CN': '指定选项的禁用为选项对象的某个属性值',
            'en-US': 'Specify that an option is disabled as an attribute value of the option object.'
          },
          'demoId': 'disabled-items'
        },
        {
          'name': 'leaf',
          'type': 'String',
          'defaultValue': "'leaf'",
          'desc': {
            'zh-CN': '指定选项的叶子节点的标志位为选项对象的某个属性值',
            'en-US': 'The flag bit of the leaf node of the specified option is an attribute value of the option object.'
          },
          'demoId': 'check-strictly'
        }
      ]
    }
  ]
}
