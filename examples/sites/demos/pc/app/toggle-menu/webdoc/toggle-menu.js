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
        'zh-CN': '通过<code>:data</code>设置数据源。',
        'en-US': 'Set the data source through<code>: data</code>.'
      },
      codeFiles: ['basic-usage.vue']
    },
    {
      demoId: 'custom-icon',
      name: {
        'zh-CN': '自定义菜单左侧图标',
        'en-US': 'Icon on the left of the customized menu'
      },
      desc: {
        'zh-CN': '<p>通过 <code>icon</code> 属性自定义菜单左侧图标。</p>\n',
        'en-US': '<p>You can customize the icon on the left of the menu through the <code>icon</code> attribute. </p>\n'
      },
      codeFiles: ['custom-icon.vue']
    },
    {
      demoId: 'get-menu-data-sync',
      name: {
        'zh-CN': '自定义菜单数据',
        'en-US': 'Customized menu data service'
      },
      desc: {
        'zh-CN':
          '<p>通过 <code>get-menu-data-sync</code> 自定义菜单数据服务。(deprecated v3.4.0废弃, v3.16.0移除；移除原因：如果是同步数据则和:data功能重复)。</p>\n',
        'en-US':
          '<p>Customize menu data services through<code>get menu data sync</code>. (deprecated v3.4.0 abandoned, v3.16.0 removed; removal reason: if it is synchronized data, it is duplicated with the: data function).</p>\n'
      },
      codeFiles: ['get-menu-data-sync.vue']
    },
    {
      demoId: 'get-menu-data-async',
      name: {
        'zh-CN': '自定义菜单异步数据服务',
        'en-US': 'props option mapping'
      },
      desc: {
        'zh-CN': '<p>通过 <code>get-menu-data-async</code> 自定义菜单异步数据服务。</p>\n',
        'en-US':
          "<p>You can use <code>props</code> to configure the mapping field. The default value of this attribute is {children:'children', label:'label', disabled:'disabled'}. </p>\n"
      },
      codeFiles: ['get-menu-data-async.vue']
    },
    {
      demoId: 'toggle-props',
      name: {
        'zh-CN': 'props 选项映射',
        'en-US': 'Custom Node Content'
      },
      desc: {
        'zh-CN':
          "<p>通过<code>props</code>配置选项映射字段该属性的默认值为<code>{children:'children',label:'label',disabled:'disabled'}</code>。</p>\n",
        'en-US': '<p>Customize the node content through the <code>node</code> slot. </p>\n'
      },
      codeFiles: ['toggle-props.vue']
    },
    {
      demoId: 'slot-node',
      name: {
        'zh-CN': '自定义节点内容',
        'en-US': 'All nodes are expanded by default'
      },
      desc: {
        'zh-CN': '<p>通过 <code>node</code> 插槽自定义节点内容。</p>\n',
        'en-US':
          '<p>You can use the <code>default-expand-all</code> attribute to set whether to expand all nodes by default, and use the <code>expand-on-click-node</code> attribute to set whether to expand or collapse menus by clicking a node. </p>\n'
      },
      codeFiles: ['slot-node.vue']
    },
    {
      demoId: 'default-expand-all',
      name: {
        'zh-CN': '默认展开所有节点',
        'en-US': 'Drag Node'
      },
      desc: {
        'zh-CN':
          '<p>通过 <code>default-expand-all</code> 属性设置是否默认展开所有节点，通过 <code>expand-on-click-node</code> 属性设置是否可以通过点击节点，展开/收起菜单。</p>\n',
        'en-US':
          '<p>You can use the <code>draggable</code> attribute to set whether to enable the node drag function. The default value is <code>false</code>. \nYou can use the <code>ellipsis</code> property to set whether to enable the function of omitting the overlong text content. The default value is <code>false</code>.</p>\n'
      },
      codeFiles: ['default-expand-all.vue']
    },
    {
      demoId: 'draggable',
      name: {
        'zh-CN': '拖拽节点',
        'en-US': 'Display the filter search box'
      },
      desc: {
        'zh-CN':
          '<p>通过 <code>draggable</code> 属性设置是否开启拖拽节点的功能，默认值为 <code>false</code>。\n可通过 <code>ellipsis</code> 属性设置是否开启文本内容超长是省略显示，默认值为 <code>false</code>。</p>\n',
        'en-US':
          '<p>You can set the <code>show-filter</code> attribute to determine whether to display the filter search box. The default value is <code>true</code>. You can set it to <code>false</code> not to display the filter search box. </p>\n'
      },
      codeFiles: ['draggable.vue']
    },
    {
      demoId: 'show-filter',
      name: {
        'zh-CN': '显示过滤搜索框',
        'en-US': 'Auto Filter'
      },
      desc: {
        'zh-CN':
          '<p>通过 <code>show-filter</code> 属性设置是否展示过滤搜索框，默认为 <code>true</code>，可设置为<code>false</code>不展示过滤搜索框。</p>\n',
        'en-US':
          '<p>You can set the placeholder of the text box through the <code>placeholder</code> attribute. Use <code>automatic-filtering</code> to set whether to automatically filter input data. The default value is true. </p>\n'
      },
      codeFiles: ['show-filter.vue']
    },
    {
      demoId: 'automatic-filtering',
      name: {
        'zh-CN': '自动过滤',
        'en-US': 'The content exceeds the line feed'
      },
      desc: {
        'zh-CN':
          '<p>通过 <code>placeholder</code> 属性设置输入框的占位符。 通过设置 <code>automatic-filtering</code> 为<code>false</code>关闭输入时自动过滤功能，默认值为<code>true</code>。</p>\n',
        'en-US':
          '<p>Set the placeholder for the input box through the<code>placeholder</code>property. By setting<code>automatic filtering</code>to<code>false</code>, the automatic filtering function on input is turned off, and the default value is<code>true</code>.</p>'
      },
      codeFiles: ['automatic-filtering.vue']
    },
    {
      demoId: 'show-filter1',
      name: {
        'zh-CN': '内容超出换行',
        'en-US': 'Node Click Event'
      },
      desc: {
        'zh-CN': '通过<code>wrap</code>设置换行。',
        'en-US': 'Set line breaks through<code>wrap</code>.'
      },
      codeFiles: ['show-filter.vue']
    },
    {
      demoId: 'node-click',
      name: {
        'zh-CN': '点击节点事件',
        'en-US': 'Expand Node Event'
      },
      desc: {
        'zh-CN': '<p>通过<code>node-click</code> 点击节点后触发的事件。</p>\n',
        'en-US': '<p>The event triggered by clicking on a node through<code>node click</code>.</p>\n'
      },
      codeFiles: ['node-click.vue']
    },
    {
      demoId: 'node-expand',
      name: {
        'zh-CN': '展开节点事件',
        'en-US': 'Shrunk Node Event'
      },
      desc: {
        'zh-CN': '<p>通过<code>node-expand</code> 展开节点后触发的事件。</p>\n',
        'en-US': '<p>The event triggered after expanding a node through<code>node expand</code>.</p>\n'
      },
      codeFiles: ['node-expand.vue']
    },
    {
      demoId: 'node-collapse',
      name: {
        'zh-CN': '收缩节点事件',
        'en-US': 'Drag Node Event'
      },
      desc: {
        'zh-CN': '<p>通过<code>node-collapse</code> 收缩节点后触发的事件。</p>\n',
        'en-US': '<p>The event triggered after shrinking a node through<code>node collapse</code>.</p>'
      },
      codeFiles: ['node-collapse.vue']
    },
    {
      demoId: 'node-drop',
      name: {
        'zh-CN': '拖放节点事件',
        'en-US': 'Drag Event'
      },
      desc: {
        'zh-CN':
          '<p>通过<code>node-drop</code> 拖放节点后触发的事件，需要设置 <code>draggable</code> 属性为 <code>true</code>。</p>\n',
        'en-US':
          '<p>The event triggered by dragging and dropping a node through<code>node drop</code>needs to set the<code>draggable</code>attribute to<code>true</code>.</p>\n'
      },
      codeFiles: ['node-drop.vue']
    },
    {
      demoId: 'drag-events',
      name: {
        'zh-CN': '拖拽事件',
        'en-US': 'Dragging event'
      },
      desc: {
        'zh-CN':
          '<p>通过<code>node-drag-start</code> 拖拽节点后的事件，<code>node-drag-enter</code> 拖拽进入其他节点时触发的事件，<code>node-drag-over</code> 在拖拽节点时触发的事件，<code>node-drag-leave</code> 拖拽离开某个节点时触发的事件，<code>node-drag-end</code> 拖拽结束时触发的事件。</p>\n',
        'en-US':
          '<p>Events triggered when dragging nodes through<code>node drag start</code>, events triggered when dragging into other nodes, events triggered when dragging nodes, events triggered when dragging out of a node, and events triggered when dragging out of a node.</p>'
      },
      codeFiles: ['drag-events.vue']
    }
  ]
}
