export default {
  column: '2',
  owner: '',
  demos: [
    {
      'demoId': 'basic-usage',
      'name': { 'zh-CN': '基本用法', 'en-US': 'Basic Usage' },
      'desc': {
        'zh-CN': '<p>不配置数据时，默认从框架服务读取数据。</p>\n',
        'en-US': '<p>If no data is configured, data is read from the framework service by default. </p>\n'
      },
      'codeFiles': ['basic-usage.vue']
    },
    {
      'demoId': 'data-resource',
      'name': { 'zh-CN': '数据源', 'en-US': 'Data Source' },
      'desc': {
        'zh-CN': '<p>通过 <code>data</code> 设置树形菜单的数据。</p>\n',
        'en-US': '<p>Set the data of the tree menu through <code>data</code>. </p>\n'
      },
      'codeFiles': ['data-resource.vue']
    },
    {
      'demoId': 'current-node',
      'name': { 'zh-CN': '设置当前节点', 'en-US': 'Set The Current Node' },
      'desc': {
        'zh-CN': '<p>设置树形菜单的当前节点与获取当前节点数据。</p>',
        'en-US': '<p>Set the current node of the tree menu and obtain the data of the current node.</p>'
      },
      'codeFiles': ['current-node.vue']
    },
    {
      'demoId': 'get-menu-data-sync',
      'name': { 'zh-CN': '自定义菜单服务数据', 'en-US': 'Custom Menu Service Data' },
      'desc': {
        'zh-CN': '<p>通过 <code>get-menu-data-sync</code> 自定义菜单服务数据，直接返回数据。</p>\n',
        'en-US':
          '<p>Customize menu service data through <code>get-menu-data-sync</code> and directly return data. </p>\n'
      },
      'codeFiles': ['get-menu-data-sync.vue']
    },
    {
      'demoId': 'text-ellipsis',
      'name': { 'zh-CN': '文字超长省略显示', 'en-US': 'Excessive Text Omission' },
      'desc': {
        'zh-CN':
          '<p>可通过 <code>ellipsis</code> 配置当菜单文字过长时，显示成省略号。通过 <code>prefix-icon</code> 自定义前置图标。</p>\n',
        'en-US':
          '<p>You can use <code>ellipsis</code> to configure that the menu text is displayed as an ellipsis when it is too long. Use <code>prefix-icon</code> to customize the front icon. </p>\n'
      },
      'codeFiles': ['text-ellipsis.vue']
    },
    {
      'demoId': 'text-wrap',
      'name': { 'zh-CN': '文字超长换行显示', 'en-US': 'Excessive text is displayed in a new line.' },
      'desc': {
        'zh-CN':
          '<p>可通过 <code>wrap</code> 配置当菜单文字过长时，换行显示。通过 showTitle 属性配置是否展示 title，默认值为 true。\n可通过 <code>show-filter</code> 配置是否显示搜索过滤框，默认为 true。\n可通过 <code>show-title</code> 配置是否显示 title ，默认为 true。</p>\n',
        'en-US':
          '<p>You can use <code>wrap</code> to configure that the menu text is displayed in a new line when the menu text is too long. The showTitle attribute is used to configure whether to display the title. The default value is true. \nYou can use <code>show-filter</code> to configure whether to display the search filter box. The default value is true. \nYou can use <code>show-title</code> to configure whether to display the title. The default value is true. </p>\n'
      },
      'codeFiles': ['text-wrap.vue']
    },
    {
      'demoId': 'check-strictly',
      'name': { 'zh-CN': '父子级不相关联', 'en-US': 'The parent and child levels are not associated.' },
      'desc': {
        'zh-CN':
          '<p>通过 <code>check-strictly</code> 设置选择时父子级不相关联，需要与 <code>show-checkbox</code> 同时使用 。</p>\n',
        'en-US':
          '<p>The <code>check-strictly</code> is not associated with the parent and child levels. This parameter must be used together with <code>show-checkbox</code>. </p>\n'
      },
      'codeFiles': ['check-strictly.vue']
    },
    {
      'demoId': 'default-expanded-keys',
      'name': { 'zh-CN': '默认展开某节点', 'en-US': 'A node is expanded by default.' },
      'desc': {
        'zh-CN': '<p>通过 <code>default-expanded-keys</code> 设置初始化展开某一节点 。</p>\n',
        'en-US': '<p>Initially expand a node by setting <code>default-expanded-keys</code> . </p>\n'
      },
      'codeFiles': ['default-expanded-keys.vue']
    },
    {
      'demoId': 'default-expanded-keys-highlight',
      'name': { 'zh-CN': '默认高亮', 'en-US': 'Highlighted by default' },
      'desc': {
        'zh-CN':
          '<p>通过<code> default-expanded-keys-highlight </code>设置初始化展开的某个节点高亮，一般配合<code> default-expanded-keys </code>使用。</p>',
        'en-US':
          '<p>Use <code> default-expanded-keys-highlight</code> to highlight an expanded node.Generally, this parameter is used together with <code> default-expanded-keys </code> .</p>'
      },
      'codeFiles': ['default-expanded-keys-highlight.vue']
    },
    {
      'demoId': 'lazy-load',
      'name': { 'zh-CN': '懒加载子节点', 'en-US': 'Lazy loading subnode' },
      'desc': {
        'zh-CN': '<p>可通过 <code>lazy</code> 是否懒加载子节点，需与 load 方法结合使用。</p>\n',
        'en-US':
          '<p>You can use <code>lazy</code> to determine whether to lazy load subnodes. This method must be used together with the load method. </p>\n'
      },
      'codeFiles': ['lazy-load.vue']
    },
    {
      'demoId': 'filter-node-method',
      'name': { 'zh-CN': '搜索规则配置', 'en-US': 'Search Rule Configuration' },
      'desc': {
        'zh-CN':
          '<p>可配置 <code>filter-node-method</code> 进行搜索规则配置，默认为模糊匹配，以下示例是精确配置。</p>\n',
        'en-US':
          '<p>You can configure <code>filter-node-method</code> to configure the search rule. Fuzzy match is used by default. The following is an example of exact configuration. </p>\n'
      },
      'codeFiles': ['filter-node-method.vue']
    },
    {
      'demoId': 'default-expand-all',
      'name': { 'zh-CN': '默认展开全部菜单', 'en-US': 'All menus are displayed by default.' },
      'desc': {
        'zh-CN':
          '<p>可通过属性 <code>default-expand-all</code> 配置默认展开全部菜单。\n通过属性 <code>default-checked-keys</code> 配置默认选中，需要与 <code>show-checkbox</code>, <code>node-key</code> 同时使用。</p>\n',
        'en-US':
          '<p>You can set the <code>default-expand-all</code> attribute to expand all menus by default. \n This parameter is selected by default through the <code>default-checked-keys</code> attribute. This parameter must be used together with <code>show-checkbox</code>, <code>node-key</code> . </p>\n'
      },
      'codeFiles': ['default-expand-all.vue']
    },
    {
      'demoId': 'empty-text',
      'name': { 'zh-CN': '自定义空数据文本', 'en-US': 'Customized empty data text' },
      'desc': {
        'zh-CN': '<p>可通过属性 <code>empty-text</code> 配置空数据显示文本。</p>\n',
        'en-US': '<p>You can use the <code>empty-text</code> attribute to configure the empty data display text. </p>\n'
      },
      'codeFiles': ['empty-text.vue']
    },
    {
      'demoId': 'can-draggable',
      'name': { 'zh-CN': '拖动菜单', 'en-US': 'Drag Menu' },
      'desc': {
        'zh-CN': '<p>可通过属性置 <code>draggable</code> 实现菜单拖拽。</p>\n',
        'en-US': '<p>You can drag menus by setting the attribute <code>draggable</code>. </p>\n'
      },
      'codeFiles': ['can-draggable.vue']
    },
    {
      'demoId': 'expand-on-click-node',
      'name': { 'zh-CN': '点击文字展开菜单', 'en-US': 'Drag menu callback event' },
      'desc': {
        'zh-CN': '<p>可通过属性 <code>expand-on-click-node</code> 配置点击文字即可展开子菜单。</p>\n',
        'en-US': '<p>Drag menu callback event, which is used together with <code>draggable</code>. </p>\n'
      },
      'codeFiles': ['expand-on-click-node.vue']
    },
    {
      'demoId': 'tree-menu-indent',
      'name': { 'zh-CN': '水平缩进', 'en-US': 'Event triggered when a node is expanded' },
      'desc': {
        'zh-CN': '<p>可通过属性 <code>indent</code> 控制子级相对于父级菜单的水平缩进距离，单位 px 。</p>\n',
        'en-US': '<p>Event triggered when a node is expanded</p>\n'
      },
      'codeFiles': ['tree-menu-indent.vue']
    },
    {
      'demoId': 'accordion',
      'name': { 'zh-CN': '手风琴', 'en-US': 'Event triggered when a node is shut down' },
      'desc': {
        'zh-CN': '<p>通过 <code>accordion</code> 设置手风琴效果。</p>\n',
        'en-US': '<p>Event triggered when a node is closed</p>\n'
      },
      'codeFiles': ['accordion.vue']
    },
    {
      'demoId': 'show-checkbox',
      'name': { 'zh-CN': '节点可勾选', 'en-US': 'Callback when the node selection status changes' },
      'desc': {
        'zh-CN': '<p>可配置 <code>show-checkbox</code> 属性设置节点是否可被勾选。</p>\n',
        'en-US': '<p>Callback when the node selection status changes</p>\n'
      },
      'codeFiles': ['show-checkbox.vue']
    },
    {
      'demoId': 'search-icon',
      'name': { 'zh-CN': '自定义搜索图标', 'en-US': 'Click the text to expand the menu.' },
      'desc': {
        'zh-CN': '<p>可配置 <code>search-icon</code> 属性设置自定义搜索图标</p>\n',
        'en-US':
          '<p>You can click the text to expand the submenu through the <code>expand-on-click-node</code> attribute. </p>\n'
      },
      'codeFiles': ['search-icon.vue']
    },
    {
      'demoId': 'tree-menu-slot',
      'name': { 'zh-CN': '插槽', 'en-US': 'horizontal indent' },
      'desc': {
        'zh-CN': '<p>可通过配置默认作用域插槽来显示菜单内容。</p>\n',
        'en-US':
          '<p>You can use the <code>indent</code> attribute to control the horizontal indentation distance of a child relative to a parent menu. The unit is px. </p>\n'
      },
      'codeFiles': ['tree-menu-slot.vue']
    },
    {
      'demoId': 'event-node-click',
      'name': { 'zh-CN': '节点点击事件', 'en-US': 'Accordance' },
      'desc': {
        'zh-CN': '<p><code>node-click</code>节点被点击触发的事件。</p>\n',
        'en-US': '<p>Set the accordion effect through <code>accordion</code>. </p>\n'
      },
      'codeFiles': ['event-node-click.vue']
    },
    {
      'demoId': 'event-current-change',
      'name': { 'zh-CN': '当前选中节点变化事件', 'en-US': 'Node can be selected' },
      'desc': {
        'zh-CN': '<p><code>current-change</code> 当前选中节点变化时触发的事件。</p>\n',
        'en-US':
          '<p>The <code>show-checkbox</code> attribute can be configured to determine whether the node can be selected. </p>\n'
      },
      'codeFiles': ['event-current-change.vue']
    },
    {
      'demoId': 'event-allow-draggable',
      'name': { 'zh-CN': '拖拽菜单回调事件', 'en-US': 'Custom search icon' },
      'desc': {
        'zh-CN': '<p>拖拽菜单回调事件,配合 <code>draggable</code> 使用。</p>\n',
        'en-US': '<p>The <code>search-icon</code> attribute can be configured to customize the search icon</p>\n'
      },
      'codeFiles': ['event-allow-draggable.vue']
    },
    {
      'demoId': 'event-node-expand',
      'name': { 'zh-CN': '节点被展开时触发的事件', 'en-US': 'Slot' },
      'desc': {
        'zh-CN': '<p>节点被展开时触发的事件</p>\n',
        'en-US': '<p>You can configure the default scope slot to display the menu content. </p>\n'
      },
      'codeFiles': ['event-node-expand.vue']
    },
    {
      'demoId': 'event-node-collapse',
      'name': { 'zh-CN': '节点被折叠时触发的事件', 'en-US': 'Event' },
      'desc': {
        'zh-CN': '<p>节点被折叠时触发的事件</p>\n',
        'en-US': '<p><code>current-change</code> Event triggered when the selected node changes. </p>\n'
      },
      'codeFiles': ['event-node-collapse.vue']
    },
    {
      'demoId': 'event-check-change',
      'name': { 'zh-CN': '节点选中状态变化事件', 'en-US': '' },
      'desc': { 'zh-CN': '<p>节点选中状态发生变化时的回调</p>\n', 'en-US': '' },
      'codeFiles': ['event-check-change.vue']
    },
    {
      'demoId': 'menu-collapsible',
      'name': { 'zh-CN': '菜单可折叠', 'en-US': '' },
      'desc': { 'zh-CN': '<p>设置树形菜单是否可以折叠</p>\n', 'en-US': '' },
      'codeFiles': ['menu-collapsible.vue']
    }
  ],
  apis: [
    {
      'name': 'tree-menu',
      'type': 'component',
      'properties': [
        {
          'name': 'accordion',
          'type': 'boolean',
          'defaultValue': '',
          'desc': {
            'zh-CN': '是否展示手风琴效果，默认值为 false',
            'en-US': 'Indicates whether to display the accordion effect. The default value is false.'
          },
          'demoId': 'accordion'
        },
        {
          'name': 'placeholder',
          'type': 'string',
          'defaultValue': '请输入内容进行筛选',
          'desc': {
            'zh-CN': '自定义搜索框placeholder',
            'en-US': 'Custom search box placeholder.'
          },
          'demoId': ''
        },
        {
          'name': 'allow-drag',
          'type': 'Function(params)',
          'defaultValue': '',
          'desc': {
            'zh-CN':
              '拖拽菜单回调事件，需配置draggable使用，return false(阻止拖动),true(允许拖动);params1:拖拽的节点数据信息对象',
            'en-US':
              'Drag menu callback event. This event is used by draggable. The options are as follows: return false (forbidding dragging) and true (allowing dragging);params1: data object of the node to be dragged.'
          },
          'demoId': ''
        },
        {
          'name': 'allow-drop',
          'type': 'Function(params1,params2,params3)',
          'defaultValue': '',
          'desc': {
            'zh-CN':
              "拖拽菜单回调事件，需配置draggable使用，return false(阻止拖放),true(允许拖放);//params1:object 拖拽的节点数据信息对象\n//params2:object 拖拽的节点数据信息对象\n//params3:'prev'或者'inner'或者'next'",
            'en-US':
              "Drag menu callback event. This event is used by draggable. return false (forbidding dragging), true (allowing dragging);//params1:object: data information object of the dragged node.\n//params2: object: data information object of the dragged node\n//params3:'prev','inner', or'next'"
          },
          'demoId': ''
        },
        {
          'name': 'show-title',
          'type': 'boolean',
          'defaultValue': '',
          'desc': {
            'zh-CN': '是否显示节点的 title 提示，鼠标悬浮节点之上触发。',
            'en-US':
              'Indicates whether to display the title prompt of a node. The prompt is triggered when the cursor is hovered over the node.'
          },
          'demoId': 'text-wrap'
        },
        {
          'name': 'show-filter',
          'type': 'boolean',
          'defaultValue': '',
          'desc': {
            'zh-CN': '是否开启输入框进行输入筛选节点，默认值为 true',
            'en-US': 'Indicates whether to enable the input filtering node in the text box. The default value is true.'
          },
          'demoId': 'text-wrap'
        },
        {
          'name': 'data',
          'type': 'Array',
          'defaultValue': '',
          'desc': { 'zh-CN': '展示数据', 'en-US': 'Display Data' },
          'demoId': 'data-resource'
        },
        {
          'name': 'empty-text',
          'type': 'string',
          'defaultValue': '',
          'desc': { 'zh-CN': '内容为空的时候展示的文本', 'en-US': 'Text displayed when the content is empty' },
          'demoId': 'empty-text'
        },
        {
          'name': 'filter-node-method',
          'type': 'Function(value, data, node)',
          'defaultValue': '',
          'desc': {
            'zh-CN': '对树节点进行筛选时执行的方法，返回 true 表示这个节点可以显示，返回 false 则表示这个节点会被隐藏',
            'en-US':
              'Method executed to filter tree nodes. If true is returned, the node can be displayed. If false is returned, the node is hidden.'
          },
          'demoId': 'filter-node-method'
        },
        {
          'name': 'expand-on-click-node',
          'type': '',
          'defaultValue': '',
          'desc': {
            'zh-CN': '配置点击菜单文字是否能展开菜单',
            'en-US': 'Configure whether to expand a menu by clicking the menu text.'
          },
          'demoId': 'expand-on-click-node'
        },
        {
          'name': 'ellipsis',
          'type': 'boolean',
          'defaultValue': '',
          'desc': {
            'zh-CN':
              "是否省略显示。优先级高于wrap。配置为 true，节点文字显示需要的宽度超过容器的宽度，节点文字不换行，也不会出现横向滚动条，超出部分文字显示为'...'",
            'en-US':
              'Whether to omit display. The priority of wrap is higher than that of wrap. If this parameter is set to true, the required width of the node text exceeds the width of the container. The node text does not wrap, and no horizontal scroll bar is displayed. The extra text is displayed as...'
          },
          'demoId': 'text-ellipsis'
        },
        {
          'name': 'indent',
          'type': 'number',
          'defaultValue': '',
          'desc': {
            'zh-CN': '相邻级节点间的水平缩进，单位为像素',
            'en-US': 'horizontal indent between adjacent nodes, in pixels.'
          },
          'demoId': 'tree-menu-indent'
        },
        {
          'name': 'default-expand-all',
          'type': '',
          'defaultValue': '',
          'desc': { 'zh-CN': '初始化展开所有子节点', 'en-US': 'Initialize and expand all subnodes.' },
          'demoId': 'default-expand-all'
        },
        {
          'name': 'draggable',
          'type': '',
          'defaultValue': '',
          'desc': { 'zh-CN': '拖动菜单', 'en-US': 'Drag Menu' },
          'demoId': 'can-draggable'
        },
        {
          'name': 'wrap',
          'type': 'boolean',
          'defaultValue': '该属性的默认值为 false',
          'desc': { 'zh-CN': '是否换行显示。', 'en-US': 'Indicates whether to display information in a new line.' },
          'demoId': 'text-wrap'
        },
        {
          'name': 'default-expanded-keys',
          'type': 'Array',
          'defaultValue': '',
          'desc': {
            'zh-CN': '默认展开的节点的 key 的数组',
            'en-US': 'Key array of nodes that are expanded by default'
          },
          'demoId': 'default-expanded-keys'
        },
        {
          'name': 'default-expanded-keys-highlight',
          'type': 'number | string',
          'defaultValue': '',
          'desc': {
            'zh-CN': '配合 default-expanded-keys 使用，设置初始化默认展开节点数组中的某个节点高亮',
            'en-US':
              'This parameter is used together with default-expanded-keys to highlight a node in the default expanded node array during initialization.'
          },
          'demoId': 'default-expanded-keys-highlight'
        },
        {
          'name': 'node-key',
          'type': 'string',
          'defaultValue': '',
          'desc': {
            'zh-CN': '每个树节点用来作为唯一标识的属性，整棵树应该是唯一的',
            'en-US': 'Each tree node is used as a unique identifier attribute. The entire tree must be unique.'
          },
          'demoId': 'default-expand-all'
        },
        {
          'name': 'prefix-icon',
          'type': 'object',
          'defaultValue': '',
          'desc': { 'zh-CN': '自定义前置图标。', 'en-US': 'Customize the front icon.' },
          'demoId': 'text-ellipsis'
        },
        {
          'name': 'search-icon',
          'type': 'object',
          'defaultValue': '',
          'desc': { 'zh-CN': '自定义搜索图标。', 'en-US': 'Customize the search icon.' },
          'demoId': 'search-icon'
        },
        {
          'name': 'check-strictly',
          'type': 'boolean',
          'defaultValue': '该属性的默认值为 false',
          'desc': {
            'zh-CN':
              '在显示复选框的情况下，是否严格的遵循父子不互相关联的做法，默认为 false, 需要与 show-checkbox 一起使用',
            'en-US':
              'Whether to strictly follow the method of disassociating parent and child when the check box is displayed. The default value is false and must be used together with show-checkbox.'
          },
          'demoId': 'check-strictly'
        },
        {
          'name': 'lazy',
          'type': 'boolean',
          'defaultValue': '该属性的默认值为 false',
          'desc': {
            'zh-CN': '是否懒加载子节点，需与 load 方法结合使用',
            'en-US': 'Whether to lazy load subnodes. This method must be used together with the load method.'
          },
          'demoId': 'lazy-load'
        },
        {
          'name': 'load',
          'type': 'Function(node, resolve)',
          'defaultValue': '',
          'desc': {
            'zh-CN': '加载子树数据的方法，仅当 lazy 属性为true 时生效',
            'en-US': 'Method for loading subtree data. This parameter is valid only when lazy is set to true.'
          },
          'demoId': 'lazy-load'
        },
        {
          'name': 'show-checkbox',
          'type': 'boolean',
          'defaultValue': '该属性的默认值为 false',
          'desc': { 'zh-CN': '节点是否可被选择', 'en-US': 'Whether the node can be selected' },
          'demoId': 'check-strictly'
        },
        {
          'name': 'default-checked-keys',
          'type': 'Array',
          'defaultValue': '',
          'desc': { 'zh-CN': '默认勾选的节点的 key 的数组', 'en-US': 'Key array of the nodes selected by default' },
          'demoId': 'default-expand-all'
        },
        {
          'name': 'get-menu-data-sync',
          'type': 'Function',
          'defaultValue': '',
          'desc': {
            'zh-CN': '自定义菜单数据服务，返回一个Promise对象。',
            'en-US': 'User-defined menu data service, which returns a Promise object.'
          },
          'demoId': 'get-menu-data-sync'
        },
        {
          'name': 'menu-collapsible',
          'type': 'boolean',
          'defaultValue': 'false',
          'desc': {
            'zh-CN': '是否显示折叠与展开按钮',
            'en-US': ''
          },
          'demoId': 'menu-collapsible'
        },
        {
          'name': 'collapsible',
          'type': 'boolean',
          'defaultValue': 'false',
          'desc': {
            'zh-CN': '点击父级节点是否收起或展开子节点，未和 show-number 配套使用时，仍可以点击图标收起',
            'en-US': ''
          },
          'demoId': ''
        }
      ],
      'events': [
        {
          'name': 'node-click',
          'type': 'Function(arg1,arg2)',
          'defaultValue': '',
          'desc': {
            'zh-CN':
              '节点被点击时的回调;//参数: arg1:object \n{ children: 点击节点的子节点, id: 点击节点的id, label: 点击节点的title }\n// arg2:object // 当前点击节点的数据信息对象',
            'en-US':
              'Callback when a node is clicked; //Parameter: arg1:object \n{children: subnode of the clicked node, id: ID of the clicked node, label: title}\n// arg2:object // of the clicked node, data information object of the currently clicked node'
          },
          'demoId': 'event-node-click'
        },
        {
          'name': 'current-change',
          'type': 'Function(arg1,arg2)',
          'defaultValue': '',
          'desc': {
            'zh-CN':
              '当前选中节点变化时触发的事件;//参数: arg1:object \n{ children: 点击节点的子节点, id: 点击节点的id, label: 点击节点的title }\n// arg2:object // 当前点击节点的数据信息对象',
            'en-US':
              'Event triggered when the selected node changes; //Parameter: arg1:object \n{children: subnode of the clicked node, id: ID of the clicked node, label: title}\n// arg2:object // of the clicked node, data information object of the currently clicked node'
          },
          'demoId': 'event-current-change'
        },
        {
          'name': 'node-expand',
          'type': 'Function(arg1,arg2)',
          'defaultValue': '',
          'desc': {
            'zh-CN':
              '节点被展开时触发的事件;//参数: arg1:object \n{ children: 点击节点的子节点, id: 点击节点的id, label: 点击节点的title }\n// arg2:object // 当前点击节点的数据信息对象',
            'en-US':
              'Event triggered when a node is expanded; //Parameter: arg1:object \n{children: subnode of the clicked node, id: ID of the clicked node, label: title}\n// arg2:object // of the clicked node, data information object of the currently clicked node'
          },
          'demoId': 'event-node-expand'
        },
        {
          'name': 'node-collapse',
          'type': 'Function(arg1,arg2)',
          'defaultValue': '',
          'desc': {
            'zh-CN':
              '节点被关闭时触发的事件;//参数: arg1:object \n{ children: 点击节点的子节点, id: 点击节点的id, label: 点击节点的title }\n// arg2:object // 当前点击节点的数据信息对象',
            'en-US':
              'Event triggered when a node is shut down; //Parameter: arg1:object \n{children: subnode of the clicked node, id: ID of the clicked node, label: title}\n// arg2:object // of the clicked node, data information object of the currently clicked node'
          },
          'demoId': 'event-node-collapse'
        },
        {
          'name': 'check-change',
          'type': 'Function(arg1,arg2,arg3)',
          'defaultValue': '',
          'desc': {
            'zh-CN':
              '节点选中状态发生变化时的回调;//参数: arg1:object \n{ children: 点击节点的子节点, id: 点击节点的id, label: 点击节点的title }\n// arg2:boolean // 当前点击节点的勾选状态\n // arg3:boolean // 当前点击节点之前的勾选状态',
            'en-US':
              'Callback when the node selection status changes; //Parameters: arg1:object \n{children: subnode of the clicked node, id: ID of the clicked node, label: title}\n// arg2:boolean // of the clicked node, status of the current clicked node, and status of the current clicked node \n // arg3:boolean //'
          },
          'demoId': 'event-check-change'
        },
        {
          'name': 'node-drag-start',
          'type': 'Function(node, event)',
          'defaultValue': '',
          'desc': {
            'zh-CN': '节点开始拖拽时触发的事件;节点开始拖拽时触发的事件;node: 拖拽节点，event: 原生事件',
            'en-US':
              'Event triggered when a node starts to be dragged; Event triggered when a node starts to be dragged; node: drags a node, event: native event'
          },
          'demoId': 'event-allow-draggable'
        },
        {
          'name': 'node-drag-end',
          'type': 'Function(draggingNode, targetNode, dropType, event)',
          'defaultValue': '',
          'desc': {
            'zh-CN':
              '拖拽结束时（可能未成功）触发的事件;//参数\n{draggingNode: 拖拽节点,targetNode: 目标节点,dropType: 拖拽类型, //拖拽节点在目标节点对应关系（before/after/inner/none)\nevent: 原生事件}',
            'en-US':
              'Event triggered when the dragging ends (possibly unsuccessful) //Parameter \n{draggingNode: drag node, targetNode: target node, dropType: drag type, //Drag node mapping on the target node (before/after/inner/none) \nevent: native event}'
          },
          'demoId': 'event-allow-draggable'
        }
      ],
      'slots': [
        {
          'name': 'default',
          'type': '',
          'defaultValue': '',
          'desc': {
            'zh-CN': '自定义树节点的内容，参数为 { node, data }',
            'en-US': 'Content of a customized tree node. The parameter is {node, data}'
          },
          'demoId': 'tree-menu-slot'
        }
      ],
      'methods': [
        {
          'name': 'setCurrentKey',
          'type': '(key) => void',
          'defaultValue': '',
          'desc': {
            'zh-CN': '通过 key 设置某个节点的当前选中状态，使用此方法必须设置 node-key 属性',
            'en-US':
              'Use the key to set the selected status of a node. You must set the node-key attribute when using this method.'
          },
          'demoId': 'current-node'
        },
        {
          'name': 'getCurrentKey',
          'type': '() => result',
          'defaultValue': '',
          'desc': {
            'zh-CN':
              '获取当前被选中节点的 key，使用此方法必须设置 node-key 属性，若没有节点被选中则返回 ，仅配置单选时生效',
            'en-US':
              'Obtains the key of the currently selected node. This method must be used to set the node-key attribute. If no node is selected, the system returns. This method takes effect only when one node is selected.'
          },
          'demoId': 'current-node'
        },
        {
          'name': 'setCurrentNode',
          'type': '(node) => void',
          'defaultValue': '',
          'desc': {
            'zh-CN': '通过 node 设置某个节点的当前选中状态，使用此方法必须设置 node-key 属性',
            'en-US':
              'Use node to set the selected status of a node. You must set the node-key attribute in this method.'
          },
          'demoId': 'current-node'
        },
        {
          'name': 'getCurrentNode',
          'type': '() => result',
          'defaultValue': '',
          'desc': {
            'zh-CN': '获得当前的选中的节点，仅单选模式下生效;获取当前被选中节点的 data，若没有节点被选中则返回 null',
            'en-US':
              'Obtains the selected node. This parameter is valid only in single-choice mode. Obtains the data of the currently selected node. If no node is selected, null is returned'
          },
          'demoId': 'current-node'
        }
      ]
    }
  ]
}
