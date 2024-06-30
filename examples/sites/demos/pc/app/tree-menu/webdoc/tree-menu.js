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
        'zh-CN': '<p>通过引用组件标签即可，默认从框架服务读取数据 。</p>\n',
        'en-US': '<p>By referencing component labels, data is read from the framework service by default. </p>\n'
      },
      codeFiles: ['basic-usage.vue']
    },
    {
      demoId: 'data-resource',
      name: {
        'zh-CN': '数据源',
        'en-US': 'Data Source'
      },
      desc: {
        'zh-CN':
          '<p>通过 <code>data</code> 属性设置静态数据，<code>get-menu-data-sync</code> 设置服务端数据，直接返回数据源 。</p>\n',
        'en-US': '<p>Set static data in the tree menu through <code>data</code> attributes. </p>\n'
      },
      codeFiles: ['data-resource.vue']
    },
    {
      demoId: 'current-node',
      name: {
        'zh-CN': '当前节点',
        'en-US': 'Current Node'
      },
      desc: {
        'zh-CN':
          '<p>通过 <code>setCurrentKey</code> 或 <code>setCurrentNode</code>方法设置当前节点，结合 <code>default-expanded-keys</code> 属性设置展开当前节点。<code>getCurrentKey</code> 方法获取当前节点的唯一标识 ， <code>getCurrentNode</code> 方法获取当前节点的数据。</p>',
        'en-US':
          '<p>Set the current node through the <code>setCurrentKey</code> or <code>setCurrentNode</code> method, and expand the current node by combining the <code>default-expanded-keys</code> attribute settings.<code>getCurrentKey</code> method retrieves the unique identifier of the current node, while the <code>getCurrentNode</code> method retrieves the current node.</p>'
      },
      codeFiles: ['current-node.vue']
    },
    {
      demoId: 'text-ellipsis',
      name: {
        'zh-CN': '文字超长',
        'en-US': 'Excessive Text Omission'
      },
      desc: {
        'zh-CN':
          '<p>通过 <code>ellipsis</code> 属性设置菜单文字过长时显示成省略号，<code>wrap</code> 属性设置文字过长换行显示。</p>\n',
        'en-US':
          '<p>You can use <code>ellipsis</code> to configure that the menu text is displayed as an ellipsis when it is too long.  </p>\n'
      },
      codeFiles: ['text-ellipsis.vue']
    },
    {
      demoId: 'default-expanded-keys',
      name: {
        'zh-CN': '默认展开',
        'en-US': 'Expand a node by default'
      },
      desc: {
        'zh-CN': '<p>通过 <code>default-expanded-keys</code> 设置初始化时默认展开某一节点 。</p>\n',
        'en-US':
          '<p>Expand a node by default during initialization through <code>default-expanded-keys</code> settings. </p>\n'
      },
      codeFiles: ['default-expanded-keys.vue']
    },
    {
      demoId: 'default-expanded-keys-highlight',
      name: {
        'zh-CN': '默认高亮',
        'en-US': 'Highlight a node by default'
      },
      desc: {
        'zh-CN':
          '<p>通过 <code>default-expanded-keys-highlight</code> 属性设置已展开的节点高亮，配合 <code>default-expanded-keys</code> 属性使用。</p>',
        'en-US':
          '<p>Use <code>default-expanded-keys-highlight</code> attribute to highlight expanded nodes, and use it in conjunction with <code>default-expanded-keys</code> attribute.</p>'
      },
      codeFiles: ['default-expanded-keys-highlight.vue']
    },
    {
      demoId: 'default-expand-all',
      name: {
        'zh-CN': '默认全部展开',
        'en-US': 'Expand All by Default'
      },
      desc: {
        'zh-CN': '<p>通过 <code>default-expand-all</code> 属性设置初始化时展开全部菜单。</p>\n',
        'en-US':
          '<p>Expand all menus during initialization through <code>default-expand-all</code> attribute settings. </p>\n'
      },
      codeFiles: ['default-expand-all.vue']
    },
    {
      demoId: 'show-checkbox',
      name: {
        'zh-CN': '可勾选',
        'en-US': 'Nodes can be checked'
      },
      desc: {
        'zh-CN':
          '<p>通过 <code>show-checkbox</code> 属性设置节点是否可勾选。<code>check-strictly</code> 属性设置可勾选节点的父级和子级是否相关联。<code>default-checked-keys</code> 属性设置默认勾选的节点，注意配合 <code>node-key</code> 属性同时使用。</p>\n',
        'en-US':
          '<p>Set whether a node can be checked through the <code>show-checkbox</code> attribute.<code>check-restrict</code> attribute settings can check whether the parent and child levels of a node are associated.<code>default-checked-keys</code> attribute settings default checked nodes, please use them in conjunction with the <code>node-key</code> attribute.</p>\n'
      },
      codeFiles: ['show-checkbox.vue']
    },
    {
      demoId: 'draggable',
      name: {
        'zh-CN': '可拖拽',
        'en-US': 'Draggable'
      },
      desc: {
        'zh-CN': '<p>通过 <code>draggable</code> 属性启用拖拽节点的功能。</p>\n',
        'en-US': '<p>Enable the function of dragging nodes through the <code>draggable</code> attribute. </p>\n'
      },
      codeFiles: ['draggable.vue']
    },
    {
      demoId: 'menu-collapsible',
      name: {
        'zh-CN': '侧边折叠按钮',
        'en-US': 'Side Fold Button'
      },
      desc: {
        'zh-CN': '<p>通过 <code>menu-collapsible</code> 属性设置是否可以折叠。侧边显示折叠按钮。</p>\n',
        'en-US':
          '<p>Set whether folding is possible through <code>menu-collapse</code> attribute.Side display folding button.</p>'
      },
      codeFiles: ['menu-collapsible.vue']
    },
    {
      demoId: 'show-expand',
      name: {
        'zh-CN': '底部折叠按钮',
        'en-US': 'Bottom Fold Button'
      },
      desc: {
        'zh-CN':
          '<p>通过 <code>show-expand</code> 属性设置是否可以折叠。底部显示折叠按钮。注意：配合 <code>customIcon</code> 属性定义节点图标使用，纯文本菜单不支持此功能。</p>\n',
        'en-US':
          '<p>Set whether folding is possible through the <code>show-expand</code> attribute. The folding button is displayed at the bottom. Note: When used in conjunction with <code>customIcon</code> attribute definition node icons, this function is not supported in plain text menus.</p>'
      },
      codeFiles: ['show-expand.vue']
    },
    {
      demoId: 'custom-icon',
      name: {
        'zh-CN': '自定义图标',
        'en-US': 'Custom Icon'
      },
      desc: {
        'zh-CN':
          '<p>通过 <code>search-icon</code> 属性自定义搜索图标， <code>prefix-icon</code> 自定义前置图标。</p>\n',
        'en-US':
          '<p>Customize the search icon through the <code>search-icon</code> attribute, and through the <code>prefix-icon</code> attribute customize prefix icon.</p>\n'
      },
      codeFiles: ['custom-icon.vue']
    },
    {
      demoId: 'props',
      name: {
        'zh-CN': '字段映射',
        'en-US': 'Field mapping'
      },
      desc: {
        'zh-CN': '<p>通过 <code>props</code> 属性设置字段映射。 </p>\n',
        'en-US': '<p>Set field mapping through <code>props</code> attributes. </p>\n'
      },
      codeFiles: ['props.vue']
    },
    {
      demoId: 'empty-text',
      name: {
        'zh-CN': '空数据文本',
        'en-US': 'Empty data text'
      },
      desc: {
        'zh-CN': '<p>通过 <code>empty-text</code> 属性配置空数据显示文本。</p>\n',
        'en-US': '<p>Configure empty data display text through the <code>empty-text</code> attribute.</p>\n'
      },
      codeFiles: ['empty-text.vue']
    },
    {
      demoId: 'show-number',
      name: {
        'zh-CN': '显示数字',
        'en-US': 'Nodes can be checked'
      },
      desc: {
        'zh-CN':
          '<p>通过 <code>show-number</code> 属性设置是否将右侧下拉图标区域显示为 number 属性配置的数字内容，建议不超过 4 个字符。<code>collapsible</code> 属性设置是否允许展开后的节点收起，未和 <code>show-number</code> 配套使用时可点击图标收起。<code>node-height</code> 属性设置节点的高度。</p>\n',
        'en-US':
          '<p>By setting the <code>show-number</code> attribute, it is recommended to display the numeric content configured for the number attribute in the drop-down icon area on the right, which should not exceed 4 characters <code>collapsible</code> attribute settings allow expanded nodes to be collapsed. If not used in conjunction with <code>show-number</code>, click the icon to collapse <code>node-height</code> attribute sets the height of the node.</p>\n'
      },
      codeFiles: ['show-number.vue']
    },
    {
      demoId: 'lazy-load',
      name: {
        'zh-CN': '懒加载',
        'en-US': 'Lazy load'
      },
      desc: {
        'zh-CN': '<p>通过 <code>lazy</code> 启用懒加载，并用 <code>load</code> 属性定义懒加载子节点的方法。</p>\n',
        'en-US':
          '<p>>Enable lazy loading through <code>lazy</code> and define the method for lazy loading child nodes using <code>load</code> attributes.</p>\n'
      },
      codeFiles: ['lazy-load.vue']
    },
    {
      demoId: 'show-filter',
      name: {
        'zh-CN': '节点过滤',
        'en-US': 'Node filtering'
      },
      desc: {
        'zh-CN':
          '<p>通过 <code>show-filter</code> 属性设置是否显示搜索框，<code>show-title</code> 属性设置节点是否有原生 title 属性提示。</p>\n',
        'en-US':
          '<p>Set whether to display the search box through the <code>show-filter</code> attribute, and whether the node has a native title attribute through the <code>show-title</code> attribute.</p>\n'
      },
      codeFiles: ['show-filter.vue']
    },
    {
      demoId: 'filter-node-method',
      name: {
        'zh-CN': '节点过滤规则',
        'en-US': 'Node filtering rules'
      },
      desc: {
        'zh-CN':
          '<p>通过 <code>filter-node-method</code> 属性自定义搜索的方法，默认为模糊匹配，以下示例是精确配置。</p>\n',
        'en-US':
          '<p>Method of customizing search through <code>filter-node-method</code> attribute, which defaults to fuzzy matching. The following example is a precise configuration. </p>\n'
      },
      codeFiles: ['filter-node-method.vue']
    },
    {
      demoId: 'only-check-children',
      name: {
        'zh-CN': '父级只能展开',
        'en-US': 'Click on the text to expand the menu'
      },
      desc: {
        'zh-CN': '<p>通过 <code>only-check-children</code> 属性设置父级不可选，只能展开/收起，不能跳转。 </p>\n',
        'en-US':
          '<p>Setting the parent through the <code>only-check-children</code> attribute is not optional, can only be expanded/collapsed, and cannot jump. </p>\n'
      },
      codeFiles: ['only-check-children.vue']
    },
    {
      demoId: 'expand-on-click-node',
      name: {
        'zh-CN': '点击节点即展开',
        'en-US': 'Click on the text to expand the menu'
      },
      desc: {
        'zh-CN':
          '<p>通过 <code>expand-on-click-node</code> 属性设置是否能点击节点即展开/收起。配置为 fasle 则只能点击下拉图标展开/收起。 </p>\n',
        'en-US':
          '<p>By setting the<code>expand-on-click-node</code>attribute, check whether the node can be clicked to expand/collapse. If configured as fasle, you can only click on the dropdown icon to expand/collapse. </p>\n'
      },
      codeFiles: ['expand-on-click-node.vue']
    },
    {
      demoId: 'indent',
      name: {
        'zh-CN': '水平缩进',
        'en-US': 'Horizontal indent'
      },
      desc: {
        'zh-CN': '<p>通过 <code>indent</code> 属性设置子级相对于父级菜单的水平缩进距离，单位 px 。</p>\n',
        'en-US':
          '<p>Set the horizontal indentation distance of children relative to the parent menu through the <code>indent</code> attribute, in px.</p>\n'
      },
      codeFiles: ['indent.vue']
    },
    {
      demoId: 'accordion',
      name: {
        'zh-CN': '手风琴',
        'en-US': 'Accordion'
      },
      desc: {
        'zh-CN': '<p>通过 <code>accordion</code> 属性设置手风琴效果（只能展开一个同级别的节点）。</p>\n',
        'en-US':
          '<p>Set the accordion effect through the <code>accordion</code> attribute (only one node of the same level can be expanded).</p>\n'
      },
      codeFiles: ['accordion.vue']
    },
    {
      demoId: 'tree-menu-slot',
      name: {
        'zh-CN': '插槽',
        'en-US': 'Slot'
      },
      desc: {
        'zh-CN': '<p>通过默认插槽 <code>#default</code> 自定义节点内容。</p>\n',
        'en-US': '<p>Customize node content through default slot <code># default</code>. </p>\n'
      },
      codeFiles: ['tree-menu-slot.vue']
    },
    {
      demoId: 'with-icon',
      name: {
        'zh-CN': '节点配置带图标',
        'en-US': 'Slot'
      },
      desc: {
        'zh-CN':
          '<p>通过在 <code>data</code> 里面配置 <code>customIcon</code> 属性进行图标组件传值，设置带图标树形菜单。</p>\n',
        'en-US': '<p>Customize node content through default slot <code># default</code>. </p>\n'
      },
      codeFiles: ['with-icon.vue']
    },
    {
      demoId: 'event-allow-draggable',
      name: {
        'zh-CN': '拖拽事件',
        'en-US': 'Draggable event'
      },
      desc: {
        'zh-CN':
          '<div class="tip custom-block"><p class="custom-block-title">事件说明</p>\n<p>node-drag-start：监听节点开始拖拽的事件。</p>\n<p>node-drag-end：监听节点结束拖拽的事件。</p>\n<p>allow-drag：自定义节点是否允许拖拽的方法。</p>\n<p>allow-drop：自定义节点是否允许放置到某节点的方法。</p>\n</div>\n',
        'en-US':
          '<div class="tip custom-block"><p class="custom-block-title">Event description</p>\n<p>node-drag-start: Listening for events where nodes start dragging and dropping.</p>\n<p>node-drag-end: Listening for node end drag and drop events.</p>\n<p>node-expand: How to allow drag and drop for custom nodes.</p>\n<p>node-collapse: Method for allowing custom nodes to be placed on a certain node.</p>\n</div>\n'
      },
      codeFiles: ['event-allow-draggable.vue']
    },
    {
      demoId: 'events',
      name: {
        'zh-CN': '事件',
        'en-US': 'Events'
      },
      desc: {
        'zh-CN':
          '<div class="tip custom-block"><p class="custom-block-title">事件说明</p>\n<p>node-click： 监听节点被点击时的事件。</p>\n<p>current-change：监听当前选中节点发生变化的事件。</p>\n<p>node-expand： 监听节点展开的事件。</p>\n<p>node-collapse： 监听节点收起的事件。</p>\n<p>check-change： 可勾选时，监听勾选节点变化的事件。</p>\n</div>\n',
        'en-US':
          '<div class="tip custom-block"><p class="custom-block-title">Event description</p>\n<p>node-click: Listen for events when a node is clicked.</p>\n<p>current-change: Listen for events where the currently selected node changes.</p>\n<p>node-expand: Listen for events that node expands.</p>\n<p>node-collapse: Listen for events when a node is folded up.</p>\n<p>check-change: When checked, listen for events related to changes in checked nodes.</p>\n</div>\n'
      },
      codeFiles: ['events.vue']
    },
    {
      demoId: 'clearable',
      name: {
        'zh-CN': '搜索框是否可清空',
        'en-US': 'Can the search box be cleared'
      },
      desc: {
        'zh-CN': '通过设置<code>clearable</code>属性来标明是否允许显示搜索框清空按钮',
        'en-US':
          'Indicate whether to allow the search box clear button to be displayed by setting the<code>clearable</code>property'
      },
      codeFiles: ['clearable.vue']
    }
  ]
}
