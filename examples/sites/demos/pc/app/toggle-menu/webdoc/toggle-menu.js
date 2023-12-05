export default {
  column: '2',
  owner: '',
  demos: [
    {
      'demoId': 'basic-usage',
      'name': { 'zh-CN': '基本用法', 'en-US': 'Basic Usage' },
      'desc': { 'zh-CN': '详细用法参考如下示例。', 'en-US': 'For details, see the following example.' },
      'codeFiles': ['basic-usage.vue']
    },
    {
      'demoId': 'custom-icon',
      'name': { 'zh-CN': '自定义菜单左侧图标', 'en-US': 'Icon on the left of the customized menu' },
      'desc': {
        'zh-CN': '<p>可通过 <code>icon</code> 属性自定义菜单左侧图标。</p>\n',
        'en-US': '<p>You can customize the icon on the left of the menu through the <code>icon</code> attribute. </p>\n'
      },
      'codeFiles': ['custom-icon.vue']
    },
    {
      'demoId': 'get-menu-data-sync',
      'name': { 'zh-CN': '自定义菜单数据', 'en-US': 'Customized menu data service' },
      'desc': {
        'zh-CN':
          '<p>可通过 <code>get-menu-data-sync</code> 自定义菜单数据服务。(deprecated v3.4.0废弃, v3.16.0移除；移除原因：如果是同步数据则和:data功能重复)。</p>\n',
        'en-US': '<p>You can customize the menu data service through <code>get-menu-data-sync</code> . </p>\n'
      },
      'codeFiles': ['get-menu-data-sync.vue']
    },
    {
      'demoId': 'get-menu-data-async',
      'name': { 'zh-CN': '自定义菜单异步数据服务', 'en-US': 'props option mapping' },
      'desc': {
        'zh-CN': '<p>可通过 <code>get-menu-data-async</code> 自定义菜单异步数据服务。</p>\n',
        'en-US':
          "<p>You can use <code>props</code> to configure the mapping field. The default value of this attribute is {children:'children', label:'label', disabled:'disabled'}. </p>\n"
      },
      'codeFiles': ['get-menu-data-async.vue']
    },
    {
      'demoId': 'toggle-props',
      'name': { 'zh-CN': 'props 选项映射', 'en-US': 'Custom Node Content' },
      'desc': {
        'zh-CN':
          "<p>可通过 <code>props</code> 配置选项映射字段该属性的默认值为 {children: 'children',label: 'label',disabled: 'disabled'} 。</p>\n",
        'en-US': '<p>Customize the node content through the <code>node</code> slot. </p>\n'
      },
      'codeFiles': ['toggle-props.vue']
    },
    {
      'demoId': 'slot-node',
      'name': { 'zh-CN': '自定义节点内容', 'en-US': 'All nodes are expanded by default.' },
      'desc': {
        'zh-CN': '<p>通过 <code>node</code> 插槽自定义节点内容。</p>\n',
        'en-US':
          '<p>You can use the <code>default-expand-all</code> attribute to set whether to expand all nodes by default, and use the <code>expand-on-click-node</code> attribute to set whether to expand or collapse menus by clicking a node. </p>\n'
      },
      'codeFiles': ['slot-node.vue']
    },
    {
      'demoId': 'default-expand-all',
      'name': { 'zh-CN': '默认展开所有节点', 'en-US': 'Drag Node' },
      'desc': {
        'zh-CN':
          '<p>可通过 <code>default-expand-all</code> 属性设置是否默认展开所有节点，通过 <code>expand-on-click-node</code> 属性设置是否可以通过点击节点展开/收起菜单。</p>\n',
        'en-US':
          '<p>You can use the <code>draggable</code> attribute to set whether to enable the node drag function. The default value is <code>false</code>. \nYou can use the <code>ellipsis</code> property to set whether to enable the function of omitting the overlong text content. The default value is <code>false</code>.</p>\n'
      },
      'codeFiles': ['default-expand-all.vue']
    },
    {
      'demoId': 'draggable',
      'name': { 'zh-CN': '拖拽节点', 'en-US': 'Display the filter search box.' },
      'desc': {
        'zh-CN':
          '<p>可通过 <code>draggable</code> 属性设置是否开启拖拽节点的功能，默认值为 <code>false</code>。\n可通过 <code>ellipsis</code> 属性设置是否开启文本内容超长是省略显示，默认值为 <code>false</code>。</p>\n',
        'en-US':
          '<p>You can set the <code>show-filter</code> attribute to determine whether to display the filter search box. The default value is <code>true</code>. You can set it to <code>false</code> not to display the filter search box. </p>\n'
      },
      'codeFiles': ['draggable.vue']
    },
    {
      'demoId': 'show-filter',
      'name': { 'zh-CN': '显示过滤搜索框', 'en-US': 'Auto Filter' },
      'desc': {
        'zh-CN':
          '<p>可通过 <code>show-filter</code> 属性设置是否展示过滤搜索框，默认为 <code>true</code>，可设置为<code>false</code>不展示过滤搜索框。</p>\n',
        'en-US':
          '<p>You can set the placeholder of the text box through the <code>placeholder</code> attribute. Use <code>automatic-filtering</code> to set whether to automatically filter input data. The default value is true. </p>\n'
      },
      'codeFiles': ['show-filter.vue']
    },
    {
      'demoId': 'automatic-filtering',
      'name': { 'zh-CN': '自动过滤', 'en-US': 'The content exceeds the line feed.' },
      'desc': {
        'zh-CN':
          '<p>可通过 <code>placeholder</code> 属性设置输入框的占位符。 通过设置 <code>automatic-filtering</code> 为<code>false</code>关闭输入时自动过滤功能，默认值为 true。</p>\n',
        'en-US': 'For details, see the following example.'
      },
      'codeFiles': ['automatic-filtering.vue']
    },
    {
      'demoId': 'show-filter1',
      'name': { 'zh-CN': '内容超出换行', 'en-US': 'Node Click Event' },
      'desc': {
        'zh-CN': '详细用法参考如下示例。',
        'en-US': '<p><code>node-click</code> Event triggered after a node is clicked. </p>\n'
      },
      'codeFiles': ['show-filter.vue']
    },
    {
      'demoId': 'node-click',
      'name': { 'zh-CN': '点击节点事件', 'en-US': 'Expand Node Event' },
      'desc': {
        'zh-CN': '<p><code>node-click</code> 点击节点后触发的事件。</p>\n',
        'en-US': 'Event triggered after the <p><code>node-expand</code> expands a node. </p>\n'
      },
      'codeFiles': ['node-click.vue']
    },
    {
      'demoId': 'node-expand',
      'name': { 'zh-CN': '展开节点事件', 'en-US': 'Shrunk Node Event' },
      'desc': {
        'zh-CN': '<p><code>node-expand</code> 展开节点后触发的事件。</p>\n',
        'en-US': 'Event triggered after a node is scaled in by the <p><code>node-collapse</code> . </p>\n'
      },
      'codeFiles': ['node-expand.vue']
    },
    {
      'demoId': 'node-collapse',
      'name': { 'zh-CN': '收缩节点事件', 'en-US': 'Drag Node Event' },
      'desc': {
        'zh-CN': '<p><code>node-collapse</code> 收缩节点后触发的事件。</p>\n',
        'en-US':
          '<p><code>node-drop</code>: This event is triggered after a node is dragged and dropped. You need to set <code>draggable</code> to <code>true</code>. </p>\n'
      },
      'codeFiles': ['node-collapse.vue']
    },
    {
      'demoId': 'node-drop',
      'name': { 'zh-CN': '拖放节点事件', 'en-US': 'Drag Event' },
      'desc': {
        'zh-CN':
          '<p><code>node-drop</code> 拖放节点后触发的事件，需要设置 <code>draggable</code> 属性为 <code>true</code>。</p>\n',
        'en-US':
          '<p><code>node-drag-start</code>: This event is triggered after a node is dragged. <code>node-drag-enter</code> is triggered when a node is dragged to another node. <code>node-drag-over</code> is triggered when a node is dragged. <code>node-drag-leave</code>: This event is triggered when a node is dragged out. <code>node-drag-end</code>: This event is triggered when a node is dragged out. </p>\n'
      },
      'codeFiles': ['node-drop.vue']
    },
    {
      'demoId': 'drag-events',
      'name': { 'zh-CN': '拖拽事件', 'en-US': '' },
      'desc': {
        'zh-CN':
          '<p><code>node-drag-start</code> 拖拽节点后的事件，<code>node-drag-enter</code> 拖拽进入其他节点时触发的事件，<code>node-drag-over</code> 在拖拽节点时触发的事件，<code>node-drag-leave</code> 拖拽离开某个节点时触发的事件，<code>node-drag-end</code> 拖拽结束时触发的事件。</p>\n',
        'en-US': ''
      },
      'codeFiles': ['drag-events.vue']
    }
  ],
  apis: [
    {
      'name': 'toggle-menu',
      'type': 'component',
      'props': [
        {
          'name': 'data',
          'type': 'Array',
          'defaultValue': '',
          'desc': { 'zh-CN': '设置收缩菜单的数据。', 'en-US': 'Set the data of the collapsed menu.' },
          'demoId': 'basic-usage'
        },
        {
          'name': 'draggable',
          'type': 'boolean',
          'defaultValue': '',
          'desc': {
            'zh-CN': '设置是否开启拖拽节点的功能，默认值为 `false`。',
            'en-US': 'Whether to enable the node drag function. The default value is `false`.'
          },
          'demoId': 'draggable'
        },
        {
          'name': 'show-filter',
          'type': 'boolean',
          'defaultValue': '',
          'desc': {
            'zh-CN': '设置是否展示过滤搜索框，默认为 `true`。',
            'en-US': 'Specifies whether to display the search box. The default value is `true`.'
          },
          'demoId': 'show-filter'
        },
        {
          'name': 'icon',
          'type': 'object',
          'defaultValue': '',
          'desc': { 'zh-CN': '自定义菜单左侧图标。', 'en-US': 'Customize the icon on the left of the menu.' },
          'demoId': 'custom-icon'
        },
        {
          'name': 'default-expand-all',
          'type': 'boolean',
          'defaultValue': '',
          'desc': {
            'zh-CN': '设置菜单默认是否展开所有节点，默认为 false。',
            'en-US': 'Whether to expand all nodes in the menu by default. The default value is false.'
          },
          'demoId': 'default-expand-all'
        },
        {
          'name': 'expand-on-click-node',
          'type': 'boolean',
          'defaultValue': '',
          'desc': {
            'zh-CN': '设置是否可以通过点击节点展开/收起菜单，默认为 false。',
            'en-US': 'Whether to expand or collapse menus by clicking a node. The default value is false.'
          },
          'demoId': 'default-expand-all'
        },
        {
          'name': 'placeholder',
          'type': 'string',
          'defaultValue': '',
          'desc': { 'zh-CN': '输入框占位符。', 'en-US': 'Placeholder in the text box.' },
          'demoId': 'show-filter'
        },
        {
          'name': 'ellipsis',
          'type': 'boolean',
          'defaultValue': '',
          'desc': {
            'zh-CN': '菜单内容超长时省略显示，默认为 false。',
            'en-US': 'Omitted if the menu content is too long. The default value is false.'
          },
          'demoId': 'draggable'
        },
        {
          'name': 'wrap',
          'type': 'boolean',
          'defaultValue': '',
          'desc': {
            'zh-CN': '菜单内容超长时换行显示，默认为 false。',
            'en-US': 'The menu content is displayed in a new line when it is too long. The default value is false.'
          },
          'demoId': 'show-filter'
        },
        {
          'name': 'automatic-filtering',
          'type': 'boolean',
          'defaultValue': '',
          'desc': {
            'zh-CN': '输入框输入内容时是否自动过滤内容，默认是 true。',
            'en-US':
              'Whether to automatically filter content when you enter content in the text box. The default value is true.'
          },
          'demoId': 'automatic-filtering'
        },
        {
          'name': 'props',
          'type': 'object',
          'defaultValue': "该属性的默认值为 {children: 'children',label: 'label',disabled: 'disabled'}",
          'desc': { 'zh-CN': '配置数据选项的映射字段名称。', 'en-US': 'Configuration data option mapping field name.' },
          'demoId': 'toggle-props'
        },
        {
          'name': 'get-menu-data-sync',
          'type': 'Function',
          'defaultValue': '',
          'desc': {
            'zh-CN':
              '自定义菜单数据服务,直接返回数据（deprecated v3.4.0废弃, v3.16.0移除；移除原因：如果是同步数据则和:data功能重复）。',
            'en-US': 'User-defined menu data service. Data is directly returned.'
          },
          'demoId': 'get-menu-data-sync'
        },
        {
          'name': 'get-menu-data-async',
          'type': 'Function',
          'defaultValue': '',
          'desc': { 'zh-CN': '自定义菜单数据服务,返回异步数据,需返回Promise对象。', 'en-US': '' },
          'demoId': 'get-menu-data-aync'
        }
      ],
      'events': [
        {
          'name': 'node-click',
          'type': 'Function(arg1,arg2)',
          'defaultValue': '',
          'desc': {
            'zh-CN':
              '点击节点后的事件。;点击节点后触发的回调函数;//参数arg1:\n{children: 点击节点的子节点, id: 点击节点的id ,label: 点击节点的title} \n//参数arg2:\n object 当前点击节点的数据信息对象。',
            'en-US':
              'Indicates that a node is clicked. ;Callback function triggered after a node is clicked. //Parameter arg1:\n{children: child node of the clicked node, id: ID of the clicked node, label: title of the clicked node} \n//Parameter arg2:\n object Data information object of the currently clicked node.'
          },
          'demoId': 'node-click'
        },
        {
          'name': 'node-expand',
          'type': 'Function(arg1,arg2,arg3)',
          'defaultValue': '',
          'desc': {
            'zh-CN':
              '展开节点后的事件。;节点被展开时触发的事件;//参数arg1:\n{children: 点击节点的子节点, id: 点击节点的id, label: 点击节点的title}\n//参数arg2:\nVueComponent 点击节点的componet对象信息\n//参数arg3:\n{ children: 点击节点的子节点id: 点击节点的id, label: 点击节点的title}。',
            'en-US':
              'Event after a node is expanded. ; Event triggered when a node is expanded; / / Parameter arg1:\n{children: child node of the clicked node, id: ID of the clicked node, label: title of the clicked node}\n//Parameter arg2:\nVueComponent Componet object information of the clicked node\n//Parameter arg3:\n{children: subnode ID of the clicked node: ID of the clicked node, label: Click title} of the node.'
          },
          'demoId': 'node-expand'
        },
        {
          'name': 'node-collapse',
          'type': 'Function(arg1,arg2)',
          'defaultValue': '',
          'desc': {
            'zh-CN':
              '收缩节点后的事件。;节点被关闭时触发的事件;//参数arg1:object \n{children: 点击节点的子节点,id: 点击节点的id,label: 点击节点的title}\n//参数arg2:object 当前点击节点的数据信息对象。',
            'en-US':
              'Event after the node is scaled in. ; Event triggered when a node is shut down; //Parameter arg1:object \n{children: child node of the clicked node, id: ID of the clicked node, label: title of the clicked node}\n//Parameter arg2:object Data information object of the currently clicked node.'
          },
          'demoId': 'node-collapse'
        },
        {
          'name': 'node-drag-start',
          'type': 'Function(arg1,arg2)',
          'defaultValue': '',
          'desc': {
            'zh-CN':
              '节点开始拖拽时触发的事件。;节点开始拖拽时触发的事件。;//参数: \narg1:object 当前拖拽节点的数据信息对象\narg2:event。',
            'en-US':
              'Event triggered when a node starts to be dragged. ;Event triggered when a node starts to be dragged. ; / / Parameters:\narg1:object Data information object of the current node \narg2:event.'
          },
          'demoId': 'drag-events'
        },
        {
          'name': 'node-drag-enter',
          'type': 'Function(arg1,arg2)',
          'defaultValue': '',
          'desc': {
            'zh-CN':
              '拖拽进入其他节点时触发的事件;拖拽进入其他节点时触发的事件;//参数\narg1:object 当前拖拽节点的数据信息对象\narg2: object 当前点击节点拖拽后位置的节点数据信息对象。',
            'en-US':
              'This event is triggered when a user drags a node to another node. Event triggered when a user drags a node to another node. / / Parameter \narg1: object Data information object of the current node \narg2: object Data information object of the current node after the node is dragged.'
          },
          'demoId': 'drag-events'
        },
        {
          'name': 'node-drag-leave',
          'type': 'Function(arg1,arg2)',
          'defaultValue': '',
          'desc': {
            'zh-CN':
              '拖拽离开某个节点时触发的事件;拖拽离开某个节点时触发的事件;//参数\narg1:object 当前拖拽节点的数据信息对象\narg2: object 当前拖出后节点的数据信息对象。',
            'en-US':
              'This event is triggered when a user drags a node. Event triggered when a user drags a node. / / Parameter \narg1:object Data information object of the currently dragged node \narg2: object Data information object of the currently dragged node.'
          },
          'demoId': 'drag-events'
        },
        {
          'name': 'node-drag-over',
          'type': 'Function(arg1,arg2,arg3)',
          'defaultValue': '',
          'desc': {
            'zh-CN':
              '在拖拽节点时触发的事件（类似浏览器的 mouseover 事件）;在拖拽节点时触发的事件（类似浏览器的 mouseover 事件）;//参数\narg1:object 当前拖拽节点的数据信息对象\narg2:object 当前拖拽节点拖拽时节点的数据信息对象\n arg3:event。',
            'en-US':
              'Event triggered when a node is dragged (similar to the mouseover event of the browser); Event triggered when a node is dragged (similar to the mouseover event of the browser) / / Parameter \narg1:object Data information object of the current dragged node \narg2:object Data information object of the current dragged node \n arg3:event.'
          },
          'demoId': 'drag-events'
        },
        {
          'name': 'node-drag-end',
          'type': 'Function(arg1,arg2,arg3,arg4)',
          'defaultValue': '',
          'desc': {
            'zh-CN':
              "拖拽结束时（r可能未成功）触发的事件;拖拽成功完成时触发的事件;//参数\narg1: object当前拖拽节点的数据信息对象\narg2: object当前点击节点拖拽后位置的节点数据信息对象\narg3: 拖拽的类型，如：'inner'\narg4:event。",
            'en-US':
              "Event triggered when dragging ends (r may not succeed). Event triggered when the drag is successfully completed; / / Parameter \narg1: object Data information object of the current node\narg2: object Data information object of the current node after the node is dragged\narg3: Drag type, for example,'inner'\narg4:event."
          },
          'demoId': 'drag-events'
        },
        {
          'name': 'node-drop',
          'type': 'Function(arg1,arg2)',
          'defaultValue': '',
          'desc': {
            'zh-CN':
              '拖放节点后的事件。开启 draggable 属性为 true 有效。;拖放节点后的事件。开启 draggable 属性为 true 有效。;//参数\narg1:object 当前拖拽节点的数据信息对象\n arg2:object 当前点击节点拖拽后的位置节点的数据信息对象\narg3: 拖拽的类型\narg4:event。',
            'en-US':
              'Indicates the event after a node is dragged and dropped. This parameter is valid when the draggable attribute is set to true. ; Events after a node is dragged and dropped. This parameter is valid when the draggable attribute is set to true. ; / / Parameter \narg1:object Data information object of the current dragged node \n arg2:object Data information object of the current clicked node after the dragged node \narg3:Drag type \narg4:event.'
          },
          'demoId': 'node-drop'
        }
      ],
      'slots': [
        {
          'name': 'node',
          'type': '',
          'defaultValue': '',
          'desc': { 'zh-CN': '自定义插槽。', 'en-US': 'Custom Slot.' },
          'demoId': 'toggle-props'
        }
      ]
    }
  ]
}
