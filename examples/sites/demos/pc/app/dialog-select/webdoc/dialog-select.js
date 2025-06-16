export default {
  column: '2',
  owner: '',
  show: true,
  cloud: false,
  demos: [
    {
      demoId: 'nest-grid-multi',
      name: {
        'zh-CN': '表格多选',
        'en-US': 'Table Multiple Selection'
      },
      desc: {
        'zh-CN':
          '<p>通过 <code>auto-lookup</code>、<code>lookup-method</code> 属性 和 <code>change</code> 事件设置初始化时数据的反查回显功能。</p> \n<p>表格多选场景需要设置 <code>popselector</code> 为 <code>grid</code>，<code>multi</code> 为 <code>true</code>，<code>checkRowKeys</code> 设置默认选中数据。<code>lock-scroll</code> 配置弹出窗口时是否禁用滚动条。</p >\n',
        'en-US':
          '<p>Use the <code>auto-lookup</code>,<code>lookup-method</code> attributes, and <code>change</code> event settings to perform data backtracking during initialization. <code>autoLookup</code>The default value is <code>true</code>. </p>\n<p> Multiple selection scenarios in the table require setting<code>popcollector</code>as grid,<code>multi</code>as true, and<code>checkRowKeys</code>as default selected data. <code>lock-scroll</code>Configure whether to disable the scrollbar when a pop-up window appears.</p >\n'
      },
      codeFiles: ['nest-grid-multi.vue']
    },
    {
      demoId: 'nest-grid-single',
      name: {
        'zh-CN': '表格单选',
        'en-US': 'Table single selection'
      },
      desc: {
        'zh-CN':
          '<p>通过 <code>auto-lookup</code>、<code>lookup-method</code> 属性和 <code>change</code> 事件设置初始化时数据的反查回显功能。</p>\n<p>表格单选场景需要设置 <code>popselector</code> 为 <code>grid</code>，<code>multi</code> 为 <code>false</code>，<code>checkRowKey</code> 设置默认选中数据。</p >\n',
        'en-US':
          '<p> Use the <code>auto-lookup</code>,<code>lookup-method</code> properties, and <code>change</code> event settings to enable data backtracking and echo during initialization.</p>\n<p>Table radio selection scenarios require setting <code>popcollector</code> to <code>grid</code>,<code>multi</code> to <code> false</code>, and <code>checkRowKey</code> to set default selected data.</p>\n'
      },
      codeFiles: ['nest-grid-single.vue']
    },
    {
      demoId: 'nest-tree-multi',
      name: {
        'zh-CN': '树多选',
        'en-US': 'Multiple Tree Selection'
      },
      desc: {
        'zh-CN':
          '<p>通过 <code>auto-lookup</code>、<code>lookup-method</code> 属性和 <code>change</code> 事件设置初始化时数据的反查回显功能。</p>\n <p>树多选场景需要设置 <code>popselector</code> 为 <code>tree</code>，属性 <code>multi</code> 为 <code>true</code>，<code>defaultCheckedKeys</code> 设置默认选中数据。</p>\n',
        'en-US':
          '<p>Set the anti lookup and echo function of data during initialization through <code>auto-lookup</code>,<code>lookup-method</code>, and <code>change</code> event settings.</p>\n<p>Tree selection scenarios require setting <code>popcollector</code> to <code>tree</code>, attribute <code>multi</code> to <code>true</code>, and <code>defaultCheckedKeys</code> to set default selected data.</p>'
      },
      codeFiles: ['nest-tree-multi.vue']
    },
    {
      demoId: 'nest-tree-single',
      name: {
        'zh-CN': '树单选',
        'en-US': 'Tree radio selection'
      },
      desc: {
        'zh-CN':
          '<p>通过 <code>auto-lookup</code>、<code>lookup-method</code> 属性和 <code>change</code> 事件设置初始化时数据的反查回显功能。</p>\n<p>树单选场景需要设置 <code>popselector</code> 为 <code>tree</code>，<code>multi</code> 为 <code>false</code >，<code>defaultCheckedKeys</code> 设置默认选中数据。</p>\n',
        'en-US':
          '<p>Use the <code>auto-lookup</code>,<code>lookup-method</code> attributes, and <code>change</code> events to set the anti lookup echo function for data initialization.</p>\n<p>Tree selection scenarios require setting <code>popcollector</code> to <code>tree</code>,<code>multi</code> to <code>false</code>, and<code>defaultCheckedKeys</code>to set default selected data.</p>\n'
      },
      codeFiles: ['nest-tree-single.vue']
    },
    {
      demoId: 'set-selection',
      name: {
        'zh-CN': '设置多选状态',
        'en-US': 'Tree radio selection'
      },
      desc: {
        'zh-CN':
          '<p>通过 <code>auto-lookup</code>、<code>lookup-method</code> 属性和 <code>change</code> 事件设置初始化时数据的反查回显功能。</p>\n<p>树单选场景需要设置 <code>popselector</code> 为 <code>tree</code>，<code>multi</code> 为 <code>false</code >，<code>defaultCheckedKeys</code> 设置默认选中数据。</p>\n',
        'en-US':
          '<p>Use the <code>auto-lookup</code>,<code>lookup-method</code> attributes, and <code>change</code> events to set the anti lookup echo function for data initialization.</p>\n<p>Tree selection scenarios require setting <code>popcollector</code> to <code>tree</code>,<code>multi</code> to <code>false</code>, and<code>defaultCheckedKeys</code>to set default selected data.</p>\n'
      },
      codeFiles: ['set-selection.vue']
    }
  ],
  features: [
    {
      id: 'auto-lookup',
      name: '数据反查回显',
      support: {
        value: true
      },
      description: '通过 auto-lookup、lookup-method 属性和 change 事件设置初始化时数据的反查回显功能。',
      cloud: {
        value: false
      },
      apis: ['auto-lookup', 'lookup-method'],
      demos: ['nest-grid-multi', 'nest-grid-single', 'nest-tree-multi', 'nest-tree-single']
    },
    {
      id: 'grid-multi',
      name: '表格多选',
      support: {
        value: true
      },
      description: '表格多选场景需要设置 popselector 为 grid，multi 为 true，checkRowKeys 设置默认选中数据。',
      cloud: {
        value: false
      },
      apis: ['popselector', 'multi', 'checkRowKeys'],
      demos: ['nest-grid-multi']
    },
    {
      id: 'grid-single',
      name: '表格单选',
      support: {
        value: true
      },
      description: '表格单选场景需要设置 popselector 为 grid，multi 为 false，checkRowKey 设置默认选中数据。',
      cloud: {
        value: false
      },
      apis: ['popselector', 'multi', 'checkRowKey'],
      demos: ['nest-grid-single']
    },
    {
      id: 'tree-multi',
      name: '树多选',
      support: {
        value: true
      },
      description: '树多选场景需要设置 popselector 为 tree，multi 为 true，defaultCheckedKeys 设置默认选中数据。',
      cloud: {
        value: false
      },
      apis: ['popselector', 'multi', 'defaultCheckedKeys'],
      demos: ['nest-tree-multi']
    },
    {
      id: 'tree-single',
      name: '树单选',
      support: {
        value: true
      },
      description: '树单选场景需要设置 popselector 为 tree，multi 为 false，defaultCheckedKeys 设置默认选中数据。',
      cloud: {
        value: false
      },
      apis: ['popselector', 'multi', 'defaultCheckedKeys'],
      demos: ['nest-tree-single']
    },
    {
      id: 'set-selection',
      name: '设置多选状态',
      support: {
        value: true
      },
      description: '通过 setSelection 方法设置多选状态。',
      cloud: {
        value: false
      },
      apis: ['setSelection'],
      demos: ['set-selection']
    }
  ]
}
