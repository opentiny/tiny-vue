export default {
  column: '2',
  owner: '',
  demos: [
    {
      'demoId': 'basic-usage',
      'name': { 'zh-CN': '基本用法', 'en-US': 'Basic Usage' },
      'desc': {
        'zh-CN': '<p>通过引用组件标签即可，默认从框架服务读取数据 。</p>\n',
        'en-US': '<p>By referencing component labels, data is read from the framework service by default. </p>\n'
      },
      'codeFiles': ['basic-usage.vue']
    },
    {
      'demoId': 'data-resource',
      'name': { 'zh-CN': '数据源', 'en-US': 'Data Source' },
      'desc': {
        'zh-CN':
          '<p>通过 <code>data</code> 属性设置静态数据，<code>get-menu-data-sync</code> 设置服务端数据，直接返回数据源 。</p>\n',
        'en-US': '<p>Set static data in the tree menu through <code>data</code> attributes. </p>\n'
      },
      'codeFiles': ['data-resource.vue']
    },
    {
      'demoId': 'current-node',
      'name': { 'zh-CN': '当前节点', 'en-US': 'Current Node' },
      'desc': {
        'zh-CN':
          '<p>通过 <code>setCurrentKey</code> 或 <code>setCurrentNode</code>方法设置当前节点，结合 <code>default-expanded-keys</code> 属性设置展开当前节点。<code>getCurrentKey</code> 方法获取当前节点的唯一标识 ， <code>getCurrentNode</code> 方法获取当前节点的数据。</p>',
        'en-US':
          '<p>Set the current node through the <code>setCurrentKey</code> or <code>setCurrentNode</code> method, and expand the current node by combining the <code>default-expanded-keys</code> attribute settings.<code>getCurrentKey</code> method retrieves the unique identifier of the current node, while the <code>getCurrentNode</code> method retrieves the current node.</p>'
      },
      'codeFiles': ['current-node.vue']
    },
    {
      'demoId': 'text-ellipsis',
      'name': { 'zh-CN': '文字超长', 'en-US': 'Excessive Text Omission' },
      'desc': {
        'zh-CN':
          '<p>通过 <code>ellipsis</code> 属性设置菜单文字过长时显示成省略号，<code>wrap</code> 属性设置文字过长换行显示。</p>\n',
        'en-US':
          '<p>You can use <code>ellipsis</code> to configure that the menu text is displayed as an ellipsis when it is too long.  </p>\n'
      },
      'codeFiles': ['text-ellipsis.vue']
    },
    {
      'demoId': 'default-expanded-keys',
      'name': { 'zh-CN': '默认展开', 'en-US': 'Expand a node by default' },
      'desc': {
        'zh-CN': '<p>通过 <code>default-expanded-keys</code> 设置初始化时默认展开某一节点 。</p>\n',
        'en-US':
          '<p>Expand a node by default during initialization through <code>default-expanded-keys</code> settings. </p>\n'
      },
      'codeFiles': ['default-expanded-keys.vue']
    },
    {
      'demoId': 'default-expanded-keys-highlight',
      'name': { 'zh-CN': '默认高亮', 'en-US': 'Highlight a node by default' },
      'desc': {
        'zh-CN':
          '<p>通过 <code>default-expanded-keys-highlight</code> 属性设置已展开的节点高亮，配合 <code>default-expanded-keys</code> 属性使用。</p>',
        'en-US':
          '<p>Use <code>default-expanded-keys-highlight</code> attribute to highlight expanded nodes, and use it in conjunction with <code>default-expanded-keys</code> attribute.</p>'
      },
      'codeFiles': ['default-expanded-keys-highlight.vue']
    },
    {
      'demoId': 'default-expand-all',
      'name': { 'zh-CN': '默认全部展开', 'en-US': 'Expand All by Default' },
      'desc': {
        'zh-CN': '<p>通过 <code>default-expand-all</code> 属性设置初始化时展开全部菜单。</p>\n',
        'en-US':
          '<p>Expand all menus during initialization through <code>default-expand-all</code> attribute settings. </p>\n'
      },
      'codeFiles': ['default-expand-all.vue']
    },
    {
      'demoId': 'show-checkbox',
      'name': { 'zh-CN': '可勾选', 'en-US': 'Nodes can be checked' },
      'desc': {
        'zh-CN':
          '<p>通过 <code>show-checkbox</code> 属性设置节点是否可勾选。<code>check-strictly</code> 属性设置可勾选节点的父级和子级是否相关联。<code>default-checked-keys</code> 属性设置默认勾选的节点，注意配合 <code>node-key</code> 属性同时使用。</p>\n',
        'en-US':
          '<p>Set whether a node can be checked through the <code>show-checkbox</code> attribute.<code>check-restrict</code> attribute settings can check whether the parent and child levels of a node are associated.<code>default-checked-keys</code> attribute settings default checked nodes, please use them in conjunction with the <code>node-key</code> attribute.</p>\n'
      },
      'codeFiles': ['show-checkbox.vue']
    },
    {
      'demoId': 'draggable',
      'name': { 'zh-CN': '可拖拽', 'en-US': 'Draggable' },
      'desc': {
        'zh-CN': '<p>通过 <code>draggable</code> 属性启用拖拽节点的功能。</p>\n',
        'en-US': '<p>Enable the function of dragging nodes through the <code>draggable</code> attribute. </p>\n'
      },
      'codeFiles': ['draggable.vue']
    },
    {
      'demoId': 'menu-collapsible',
      'name': { 'zh-CN': '侧边折叠按钮', 'en-US': 'Side Fold Button' },
      'desc': {
        'zh-CN': '<p>通过 <code>menu-collapsible</code> 属性设置是否可以折叠。侧边显示折叠按钮。</p>\n',
        'en-US':
          '<p>Set whether folding is possible through <code>menu-collapse</code> attribute.Side display folding button.</p>'
      },
      'codeFiles': ['menu-collapsible.vue']
    },
    {
      'demoId': 'show-expand',
      'name': { 'zh-CN': '底部折叠按钮', 'en-US': 'Bottom Fold Button' },
      'desc': {
        'zh-CN':
          '<p>通过 <code>show-expand</code> 属性设置是否可以折叠。底部显示折叠按钮。注意：配合 <code>customIcon</code> 属性定义节点图标使用，纯文本菜单不支持此功能。</p>\n',
        'en-US':
          '<p>Set whether folding is possible through the <code>show-expand</code> attribute. The folding button is displayed at the bottom. Note: When used in conjunction with <code>customIcon</code> attribute definition node icons, this function is not supported in plain text menus.</p>'
      },
      'codeFiles': ['show-expand.vue']
    },
    {
      'demoId': 'custom-icon',
      'name': { 'zh-CN': '自定义图标', 'en-US': 'Custom Icon' },
      'desc': {
        'zh-CN':
          '<p>通过 <code>search-icon</code> 属性自定义搜索图标， <code>prefix-icon</code> 自定义前置图标。</p>\n',
        'en-US':
          '<p>Customize the search icon through the <code>search-icon</code> attribute, and through the <code>prefix-icon</code> attribute customize prefix icon.</p>\n'
      },
      'codeFiles': ['custom-icon.vue']
    },
    {
      'demoId': 'props',
      'name': { 'zh-CN': '字段映射', 'en-US': 'Field mapping' },
      'desc': {
        'zh-CN': '<p>通过 <code>props</code> 属性设置字段映射。 </p>\n',
        'en-US': '<p>Set field mapping through <code>props</code> attributes. </p>\n'
      },
      'codeFiles': ['props.vue']
    },
    {
      'demoId': 'empty-text',
      'name': { 'zh-CN': '空数据文本', 'en-US': 'Empty data text' },
      'desc': {
        'zh-CN': '<p>通过 <code>empty-text</code> 属性配置空数据显示文本。</p>\n',
        'en-US': '<p>Configure empty data display text through the <code>empty-text</code> attribute.</p>\n'
      },
      'codeFiles': ['empty-text.vue']
    },
    {
      'demoId': 'show-number',
      'name': { 'zh-CN': '显示数字', 'en-US': 'Nodes can be checked' },
      'desc': {
        'zh-CN':
          '<p>通过 <code>show-number</code> 属性设置是否将右侧下拉图标区域显示为 number 属性配置的数字内容，建议不超过 4 个字符。<code>collapsible</code> 属性设置是否允许展开后的节点收起，未和 <code>show-number</code> 配套使用时可点击图标收起。<code>node-height</code> 属性设置节点的高度。</p>\n',
        'en-US':
          '<p>By setting the <code>show-number</code> attribute, it is recommended to display the numeric content configured for the number attribute in the drop-down icon area on the right, which should not exceed 4 characters <code>collapsible</code> attribute settings allow expanded nodes to be collapsed. If not used in conjunction with <code>show-number</code>, click the icon to collapse <code>node-height</code> attribute sets the height of the node.</p>\n'
      },
      'codeFiles': ['show-number.vue']
    },
    {
      'demoId': 'lazy-load',
      'name': { 'zh-CN': '懒加载', 'en-US': 'Lazy load' },
      'desc': {
        'zh-CN': '<p>通过 <code>lazy</code> 启用懒加载，并用 <code>load</code> 属性定义懒加载子节点的方法。</p>\n',
        'en-US':
          '<p>>Enable lazy loading through <code>lazy</code> and define the method for lazy loading child nodes using <code>load</code> attributes.</p>\n'
      },
      'codeFiles': ['lazy-load.vue']
    },
    {
      'demoId': 'show-filter',
      'name': { 'zh-CN': '节点过滤', 'en-US': 'Node filtering' },
      'desc': {
        'zh-CN':
          '<p>通过 <code>show-filter</code> 属性设置是否显示搜索框，<code>show-title</code> 属性设置节点是否有原生 title 属性提示。</p>\n',
        'en-US':
          '<p>Set whether to display the search box through the <code>show-filter</code> attribute, and whether the node has a native title attribute through the <code>show-title</code> attribute.</p>\n'
      },
      'codeFiles': ['show-filter.vue']
    },
    {
      'demoId': 'filter-node-method',
      'name': { 'zh-CN': '节点过滤规则', 'en-US': 'Node filtering rules' },
      'desc': {
        'zh-CN':
          '<p>通过 <code>filter-node-method</code> 属性自定义搜索的方法，默认为模糊匹配，以下示例是精确配置。</p>\n',
        'en-US':
          '<p>Method of customizing search through <code>filter-node-method</code> attribute, which defaults to fuzzy matching. The following example is a precise configuration. </p>\n'
      },
      'codeFiles': ['filter-node-method.vue']
    },
    {
      'demoId': 'only-check-children',
      'name': { 'zh-CN': '父级只能展开', 'en-US': 'Click on the text to expand the menu' },
      'desc': {
        'zh-CN': '<p>通过 <code>only-check-children</code> 属性设置父级不可选，只能展开/收起，不能跳转。 </p>\n',
        'en-US':
          '<p>Setting the parent through the <code>only-check-children</code> attribute is not optional, can only be expanded/collapsed, and cannot jump. </p>\n'
      },
      'codeFiles': ['only-check-children.vue']
    },
    {
      'demoId': 'expand-on-click-node',
      'name': { 'zh-CN': '点击节点即展开', 'en-US': 'Click on the text to expand the menu' },
      'desc': {
        'zh-CN':
          '<p>通过 <code>expand-on-click-node</code> 属性设置是否能点击节点即展开/收起。配置为 fasle 则只能点击下拉图标展开/收起。 </p>\n',
        'en-US':
          '<p>By setting the<code>expand-on-click-node</code>attribute, check whether the node can be clicked to expand/collapse. If configured as fasle, you can only click on the dropdown icon to expand/collapse. </p>\n'
      },
      'codeFiles': ['expand-on-click-node.vue']
    },
    {
      'demoId': 'indent',
      'name': { 'zh-CN': '水平缩进', 'en-US': 'Horizontal indent' },
      'desc': {
        'zh-CN': '<p>通过 <code>indent</code> 属性设置子级相对于父级菜单的水平缩进距离，单位 px 。</p>\n',
        'en-US':
          '<p>Set the horizontal indentation distance of children relative to the parent menu through the <code>indent</code> attribute, in px.</p>\n'
      },
      'codeFiles': ['indent.vue']
    },
    {
      'demoId': 'accordion',
      'name': { 'zh-CN': '手风琴', 'en-US': 'Accordion' },
      'desc': {
        'zh-CN': '<p>通过 <code>accordion</code> 属性设置手风琴效果（只能展开一个同级别的节点）。</p>\n',
        'en-US':
          '<p>Set the accordion effect through the <code>accordion</code> attribute (only one node of the same level can be expanded).</p>\n'
      },
      'codeFiles': ['accordion.vue']
    },
    {
      'demoId': 'tree-menu-slot',
      'name': { 'zh-CN': '插槽', 'en-US': 'Slot' },
      'desc': {
        'zh-CN': '<p>通过默认插槽 <code>#default</code> 自定义节点内容。</p>\n',
        'en-US': '<p>Customize node content through default slot <code># default</code>. </p>\n'
      },
      'codeFiles': ['tree-menu-slot.vue']
    },
    {
      'demoId': 'event-allow-draggable',
      'name': { 'zh-CN': '拖拽事件', 'en-US': 'Draggable event' },
      'desc': {
        'zh-CN':
          '<div class="tip custom-block">' +
          '<p class="custom-block-title">事件说明</p>\n' +
          '<p>node-drag-start：监听节点开始拖拽的事件。</p>\n' +
          '<p>node-drag-end：监听节点结束拖拽的事件。</p>\n' +
          '<p>allow-drag：自定义节点是否允许拖拽的方法。</p>\n' +
          '<p>allow-drop：自定义节点是否允许放置到某节点的方法。</p>\n' +
          '</div>\n',

        'en-US':
          '<div class="tip custom-block">' +
          '<p class="custom-block-title">Event description</p>\n' +
          '<p>node-drag-start: Listening for events where nodes start dragging and dropping.</p>\n' +
          '<p>node-drag-end: Listening for node end drag and drop events.</p>\n' +
          '<p>node-expand: How to allow drag and drop for custom nodes.</p>\n' +
          '<p>node-collapse: Method for allowing custom nodes to be placed on a certain node.</p>\n' +
          '</div>\n'
      },
      'codeFiles': ['event-allow-draggable.vue']
    },
    {
      'demoId': 'events',
      'name': {
        'zh-CN': '事件',
        'en-US': 'Events'
      },
      'desc': {
        'zh-CN':
          '<div class="tip custom-block">' +
          '<p class="custom-block-title">事件说明</p>\n' +
          '<p>node-click： 监听节点被点击时的事件。</p>\n' +
          '<p>current-change：监听当前选中节点发生变化的事件。</p>\n' +
          '<p>node-expand： 监听节点展开的事件。</p>\n' +
          '<p>node-collapse： 监听节点收起的事件。</p>\n' +
          '<p>check-change： 可勾选时，监听勾选节点变化的事件。</p>\n' +
          '</div>\n',
        'en-US':
          '<div class="tip custom-block">' +
          '<p class="custom-block-title">Event description</p>\n' +
          '<p>node-click: Listen for events when a node is clicked.</p>\n' +
          '<p>current-change: Listen for events where the currently selected node changes.</p>\n' +
          '<p>node-expand: Listen for events that node expands.</p>\n' +
          '<p>node-collapse: Listen for events when a node is folded up.</p>\n' +
          '<p>check-change: When checked, listen for events related to changes in checked nodes.</p>\n' +
          '</div>\n'
      },
      'codeFiles': ['events.vue']
    }
  ],
  apis: [
    {
      'name': 'tree-menu',
      'type': 'component',
      'props': [
        {
          'name': 'accordion',
          'type': 'boolean',
          'defaultValue': 'false',
          'desc': {
            'zh-CN': '是否设置为手风琴效果（只能展开一个同级别的节点）',
            'en-US': 'Set to accordion effect (can only expand one node at the same level)'
          },
          'demoId': 'accordion'
        },
        {
          'name': 'allow-drag',
          'type': '(vm:ITreeNodeVm) => boolean',
          'typeAnchorName': 'ITreeNodeVm',
          'defaultValue': '--',
          'desc': {
            'zh-CN': '拖拽开始前的回调事件，定义节点是否允许拖拽的规则，返回 true 则允许拖拽，配合 draggable 属性使用',
            'en-US':
              'The callback event before the start of dragging, defining the rules for whether nodes are allowed to drag, and returning true to allow dragging, used in conjunction with the draggable attribute'
          },
          'demoId': 'event-allow-draggable'
        },
        {
          'name': 'allow-drop',
          'type': '(draggingNode: ITreeNodeVm, targetNode: ITreeNodeVm,type: "prev"|"next"|"inner") => boolean',
          'typeAnchorName': 'ITreeNodeVm',
          'defaultValue': '--',
          'desc': {
            'zh-CN':
              '拖拽结束前的回调事件，定义节点是否允许放置到模板节点的规则，返回 true 则允许放置，配合 draggable 属性使用',
            'en-US':
              'Callback event before the end of drag and drop, defining rules for whether nodes are allowed to be placed on template nodes. If true is returned, placement is allowed, and the draggable attribute needs to be configured for use'
          },
          'demoId': 'event-allow-draggable'
        },
        {
          'name': 'check-strictly',
          'type': 'boolean',
          'defaultValue': 'false',
          'desc': {
            'zh-CN': '是否遵循父级和子级严格不相关联的做法，配合 show-checkbox 属性使用',
            'en-US':
              'Do you follow the practice of strictly unrelated parents and children, and use it in conjunction with the show checkbox attribute'
          },
          'demoId': 'show-checkbox'
        },
        {
          'name': 'collapsible',
          'type': 'boolean',
          'defaultValue': 'false',
          'desc': {
            'zh-CN': '是否允许展开后的菜单收起，未和 show-number 配套使用时，仍可以点击图标收起',
            'en-US':
              'Set whether to allow expanded menus to be collapsed. When not used in conjunction with show number, the icon can still be clicked to collapse'
          },
          'demoId': 'show-number'
        },
        {
          'name': 'data',
          'type': 'ITreeNodeData[]',
          'typeAnchorName': 'ITreeNodeData',
          'defaultValue': '[]',
          'desc': {
            'zh-CN': '静态数据源',
            'en-US': 'Static Data Source'
          },
          'demoId': 'data-resource'
        },
        {
          'name': 'default-checked-keys',
          'type': 'Array<number|string>',
          'defaultValue': '[]',
          'desc': {
            'zh-CN': '默认勾选节点的 key 的数组',
            'en-US': 'Array of keys for default selected nodes'
          },
          'demoId': 'default-expand-all'
        },
        {
          'name': 'default-expanded-keys',
          'type': 'Array<number|string>',
          'defaultValue': '[]',
          'desc': {
            'zh-CN': '默认展开节点的 key 的数组',
            'en-US': 'Array of keys for default expanded nodes'
          },
          'demoId': 'default-expanded-keys'
        },
        {
          'name': 'default-expanded-keys-highlight',
          'type': 'number|string',
          'defaultValue': '--',
          'desc': {
            'zh-CN': '设置默认展开节点中的某个节点高亮，配合 default-expanded-keys 属性使用',
            'en-US':
              'Set a node highlight in the default expanded node to be used in conjunction with the default expanded keys attribute'
          },
          'demoId': 'default-expanded-keys-highlight'
        },
        {
          'name': 'default-expand-all',
          'type': 'boolean',
          'defaultValue': 'false',
          'desc': {
            'zh-CN': '是否默认展开所有子节点',
            'en-US': 'Expand all child nodes by default'
          },
          'demoId': 'default-expand-all'
        },
        {
          'name': 'draggable',
          'type': 'boolean',
          'defaultValue': 'false',
          'desc': {
            'zh-CN': '是否可拖动菜单节点',
            'en-US': 'Can menu nodes be dragged'
          },
          'demoId': 'draggable'
        },

        {
          'name': 'empty-text',
          'type': 'string',
          'defaultValue': '--',
          'desc': {
            'zh-CN': '内容为空时展示的文本',
            'en-US': 'Text displayed when the content is empty'
          },
          'demoId': 'empty-text'
        },
        {
          'name': 'expand-on-click-node',
          'type': 'boolean',
          'defaultValue': 'true',
          'desc': {
            'zh-CN': '是否能点击节点即展开/收起。配置为 fasle 则只能点击下拉图标展开/收起',
            'en-US':
              'Whether to click on the node to expand/collapse. If configured as fasle, you can only click on the dropdown icon to expand/collapse'
          },
          'demoId': 'expand-on-click-node'
        },
        {
          'name': 'ellipsis',
          'type': 'boolean',
          'defaultValue': 'false',
          'desc': {
            'zh-CN': '是否文字超长省略显示。优先级高于 wrap',
            'en-US': 'Whether the text is too long and omitted for display. Priority higher than wrap'
          },
          'demoId': 'text-ellipsis'
        },
        {
          'name': 'filter-node-method',
          'type': '(query:string, data:ITreeNodeData, node:ITreeNodeVm) => boolean',
          'typeAnchorName': 'ITreeNodeVm',
          'defaultValue': '--',
          'desc': {
            'zh-CN': '自定义树节点过滤的方法，返回 true 表示这个节点可以显示，返回 false 则表示这个节点会被隐藏',
            'en-US':
              'Custom tree node filtering method, returning true indicates that this node can be displayed, while returning false indicates that this node will be hidden'
          },
          'demoId': 'filter-node-method'
        },
        {
          'name': 'get-menu-data-sync',
          'type': '() => ITreeNodeData[]',
          'typeAnchorName': 'ITreeNodeData',
          'defaultValue': '--',
          'desc': {
            'zh-CN': '自定义获取服务端数据源的方法，返回一个 Promise 对象',
            'en-US': 'Customize the method for obtaining server-side data sources and return a Promise object'
          },
          'demoId': 'data-resource'
        },
        {
          'name': 'indent',
          'type': 'number',
          'defaultValue': '--',
          'desc': {
            'zh-CN': '子级相对于父级节点的水平缩进距离，单位 px',
            'en-US': 'The horizontal indentation distance of a child relative to its parent node, in px'
          },
          'demoId': 'indent'
        },
        {
          'name': 'lazy',
          'type': 'boolean',
          'defaultValue': 'false',
          'desc': {
            'zh-CN': '是否懒加载子节点，配合 load 属性使用',
            'en-US': 'Whether to lazily load child nodes and use them in conjunction with the load attribute'
          },
          'demoId': 'lazy-load'
        },
        {
          'name': 'load',
          'type': '(node:ITreeNodeVm, resolve:IResolveType) => IResolveType',
          'typeAnchorName': 'IResolveType',
          'defaultValue': '--',
          'desc': {
            'zh-CN': '加载子树数据的方法，仅当 lazy 属性为 true 时生效',
            'en-US': 'Method for loading subtree data. This parameter is valid only when lazy is set to true'
          },
          'demoId': 'lazy-load'
        },
        {
          'name': 'menu-collapsible',
          'type': 'boolean',
          'defaultValue': 'false',
          'desc': {
            'zh-CN': '是否显示侧边折叠与展开按钮',
            'en-US': 'Is the side fold and unfold buttons displayed'
          },
          'demoId': 'menu-collapsible'
        },
        {
          'name': 'node-key',
          'type': 'string',
          'defaultValue': '--',
          'desc': {
            'zh-CN': '设置每个树节点唯一标识（key）的属性，在整棵树中都是唯一的',
            'en-US':
              "Set the attribute of each tree node's unique identifier (key) to be unique throughout the entire tree"
          },
          'demoId': 'default-expand-all'
        },
        {
          'name': 'node-height',
          'type': 'number',
          'defaultValue': '--',
          'desc': {
            'zh-CN': '节点高度',
            'en-US': 'Node height'
          },
          'demoId': 'show-number'
        },
        {
          'name': 'only-check-children',
          'type:': 'boolean',
          'defaultValue': 'false',
          'desc': {
            'zh-CN': '父级是否不可选，只能展开不能跳转',
            'en-US': 'Parent level is not optional, can only be expanded and cannot jump'
          },
          'demoId': 'only-check-children'
        },
        {
          'name': 'props',
          'type': 'IProps',
          'typeAnchorName': 'IProps',
          'defaultValue': `<pre>
{
  children: 'children'
  label: 'label'
  disabled: 'disabled'
  isLeaf: 'isLeaf'
}
</pre>`,
          'desc': {
            'zh-CN': '映射字段',
            'en-US': 'Map Fields'
          },
          'demoId': ''
        },
        {
          'name': 'prefix-icon',
          'type': 'Component',
          'defaultValue': '--',
          'desc': {
            'zh-CN': '自定义前置图标',
            'en-US': 'Customize the front icon'
          },
          'demoId': 'custom-icon'
        },
        {
          'name': 'suffix-icon',
          'type': 'Component',
          'defaultValue': '--',
          'desc': {
            'zh-CN': '自定义后置图标',
            'en-US': 'Customize the post icon'
          },
          'demoId': 'custom-icon'
        },
        {
          'name': 'search-icon',
          'type': 'Component',
          'defaultValue': '--',
          'desc': {
            'zh-CN': '自定义搜索图标',
            'en-US': 'Customize the search icon'
          },
          'demoId': 'custom-icon'
        },
        {
          'name': 'show-checkbox',
          'type': 'boolean',
          'defaultValue': 'false',
          'desc': {
            'zh-CN': '节点是否可被选择',
            'en-US': 'Whether the node can be selected'
          },
          'demoId': 'check-strictly'
        },
        {
          'name': 'show-number',
          'type': 'boolean',
          'defaultValue': 'false',
          'desc': {
            'zh-CN': '右侧下拉图标区域是否显示为 number 属性定义的数字内容，建议不超过 4 个字符',
            'en-US':
              'The drop-down icon area on the right displays the numerical content defined by the number attribute, which should not exceed 4 characters'
          },
          'demoId': 'show-number'
        },
        {
          'name': 'show-expand',
          'type': 'boolean',
          'defaultValue': 'false',
          'desc': {
            'zh-CN':
              '是否启用一键展开/收起功能。点击左下角图标可展开/收起菜单注意：配合 customIcon 属性使用，纯文本菜单不支持此功能',
            'en-US':
              'Whether to enable the one click expand/collapse function. Click on the icon in the bottom left corner to expand/collapse the menu. Note: When used in conjunction with the customIcon attribute, plain text menus do not support this feature'
          },
          'demoId': ''
        },
        {
          'name': 'show-title',
          'type': 'boolean',
          'defaultValue': 'true',
          'desc': {
            'zh-CN': '是否显示节点的 title 提示，鼠标悬浮节点之上触发',
            'en-US': 'Whether to display the title prompt of the node, triggered by hovering the mouse over the node'
          },
          'demoId': 'show-filter'
        },
        {
          'name': 'show-filter',
          'type': 'boolean',
          'defaultValue': 'true',
          'desc': {
            'zh-CN': '是否显示搜索框，可搜索过滤节点',
            'en-US': 'Display a search box to search for filter nodes'
          },
          'demoId': 'show-filter'
        },

        {
          'name': 'wrap',
          'type': 'boolean',
          'defaultValue': 'false',
          'desc': {
            'zh-CN': '是否换行显示',
            'en-US': 'Indicates whether to display information in a new line.'
          },
          'demoId': 'text-wrap'
        }
      ],
      'events': [
        {
          'name': 'node-click',
          'type': '(nodeData:ITreeNodeData,node:ITreeNodeVm) => void',
          'typeAnchorName': 'ITreeNodeVm',
          'defaultValue': '--',
          'desc': {
            'zh-CN': '监听节点被点击时的事件',
            'en-US': 'Listen for events when a node is clicked'
          },
          'demoId': 'events'
        },
        {
          'name': 'current-change',
          'type': '(nodeData:ITreeNodeData,node:ITreeNodeVm) => void',
          'typeAnchorName': 'ITreeNodeVm',
          'defaultValue': '--',
          'desc': {
            'zh-CN': '监听当前选中节点发生变化时的事件',
            'en-US': 'Listen for events when the currently selected node changes'
          },
          'demoId': 'events'
        },
        {
          'name': 'node-expand',
          'type': '(nodeData:ITreeNodeData,node:ITreeNodeVm) => void',
          'typeAnchorName': 'ITreeNodeVm',
          'defaultValue': '--',
          'desc': {
            'zh-CN': '监听节点被点击展开时的事件;',
            'en-US': 'Event when a listening node is clicked to expand'
          },
          'demoId': 'events'
        },
        {
          'name': 'node-collapse',
          'type': '(nodeData:ITreeNodeData,node:ITreeNodeVm) => void',
          'typeAnchorName': 'ITreeNodeVm',
          'defaultValue': '--',
          'desc': {
            'zh-CN': '监听节点被点击收起时的事件;',
            'en-US': 'Event when a listening node is clicked to collapse'
          },
          'demoId': 'events'
        },
        {
          'name': 'check-change',
          'type': '(node:ITreeNodeVm,checked:boolean,indeterminate:boolean) => void',
          'typeAnchorName': 'ITreeNodeVm',
          'defaultValue': '--',
          'desc': {
            'zh-CN': '监听可勾选节点的勾选状态发生变化时的事件',
            'en-US': 'Listen for events when the check status of checkable nodes changes'
          },
          'demoId': 'events'
        },
        {
          'name': 'node-drag-start',
          'type': '(node:ITreeNodeVm, event:DragEvent) => void',
          'typeAnchorName': 'ITreeNodeVm',
          'defaultValue': '--',
          'desc': {
            'zh-CN': '监听节点开始拖拽的事件',
            'en-US': 'Listening for events where nodes start dragging and dropping'
          },
          'demoId': 'event-allow-draggable'
        },
        {
          'name': 'node-drag-end',
          'type': '(draggingNode:ITreeNodeVm, targetNode:ITreeNodeVm, dropType:IDropType, event:DragEvent) => void',
          'typeAnchorName': 'IDropType',
          'defaultValue': '--',
          'desc': {
            'zh-CN': '监听节点拖拽结束（可能未成功）的事件',
            'en-US': 'Listening for events where node drag and drop ends (possibly unsuccessful)'
          },
          'demoId': 'event-allow-draggable'
        }
      ],
      'slots': [
        {
          'name': 'default',
          'type': '',
          'defaultValue': '--',
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
          'type': '(key:string|number) => void',
          'defaultValue': '--',
          'desc': {
            'zh-CN': '通过 key 设置某个节点为当前选中的节点，注意：配合 node-key 属性设置每个节点 key 值的字段',
            'en-US':
              'Set a node as the currently selected node through key. Note: Set the key value field for each node in conjunction with the node key attribute'
          },
          'demoId': 'current-node'
        },
        {
          'name': 'getCurrentKey',
          'type': '() => string | number | null',
          'defaultValue': '--',
          'desc': {
            'zh-CN': '获取当前选中节点的 key ，注意：配合 node-key 属性设置每个节点 key 值的字段,仅适用单选',
            'en-US':
              'Obtain the key of the currently selected node. Note: Set the field for the key value of each node in conjunction with the node key attribute, only applicable for single selection'
          },
          'demoId': 'current-node'
        },
        {
          'name': 'setCurrentNode',
          'type': '(nodeData:ITreeNodeData) => void',
          'typeAnchorName': 'ITreeNodeData',
          'defaultValue': '--',
          'desc': {
            'zh-CN': '通过 nodeData 设置某个节点为当前选中的节点，注意：配合 node-key 属性设置每个节点 key 值的字段',
            'en-US':
              'Set a node as the currently selected node through nodeData. Note: Set the key value field for each node in conjunction with the node key attribute'
          },
          'demoId': 'current-node'
        },
        {
          'name': 'getCurrentNode',
          'type': '() => ITreeNodeData|null',
          'typeAnchorName': 'ITreeNodeData',
          'defaultValue': '--',
          'desc': {
            'zh-CN': '获得当前选中节点的数据,注意：配合 node-key 属性设置每个节点 key 值的字段,仅适用单选',
            'en-US':
              'Obtain the data of the currently selected node. Note: Set the field for the key value of each node in conjunction with the node key attribute, only applicable for single selection'
          },
          'demoId': 'current-node'
        }
      ]
    }
  ],
  types: [
    {
      name: 'ITreeNodeVm',
      type: 'interface',
      code: `
interface ITreeNodeVm {
  // 是否已勾选
  "checked": boolean
  // 子节点
  "childNodes": ITreeNodeVm[]
  // 节点数据
  "data":  ITreeNodeData
  // 是否展开
  "expanded": boolean
  // 唯一标识
  "id": string | number
  // 是否半选
  "indeterminate": boolean
  // 是否当前节点
  "isCurrent": boolean
  // 是否叶子节点
  "isLeaf": boolean
  // 层级
  "level": number
  // 是否已加载
  "loaded": boolean
  // 是否加载中
  "loading": boolean
  // 是否可见
  "visible": boolean
  // 是否禁用
  "disabled": boolean
  // 节点显示文本
  "label": string
}        
`
    },
    {
      name: 'ITreeNodeData',
      type: 'interface',
      code: `
interface ITreeNodeData {
  // node-key='id' 设置节点的唯一标识
  "id": number | string
  // 节点显示文本
  "label": string
  // 子节点
  "children"?: ITreeNodeData[]
  // 链接
  "url"?: string,
  // show-number 时展示的字段
  "number"?: number | string
  // 自定义每个节点的图标
  "customIcon": Component 
}        
`
    },
    {
      name: 'IProps',
      type: 'interface',
      code: `
interface IProps {
  "label"?: string
  "children"?: string
  "disabled": string
  "isLeaf": string
}        
`
    },
    {
      name: 'IResolveType',
      type: 'type',
      code: `
// Promise 的 resolve 回调函数
type IResolveType = (data:ITreeNodeData) => void
`
    },
    {
      name: 'IDropType',
      type: 'type',
      code: `
// 拖拽节点相对目标节点的位置
type IDropType = before | after | inner | none  
`
    }
  ]
}
// 'typeAnchorName': 'IMenuOption',
