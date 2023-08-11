export default {
  column: '2',
  owner: '',
  demos: [
    {
      'demoId': 'basic-usage',
      'name': { 'zh-CN': '基本用法', 'en-US': 'Basic Usage' },
      'desc': { 'zh-CN': '详细用法参考如下示例', 'en-US': 'For details, see the following example.' },
      'codeFiles': ['basic-usage.vue']
    },
    {
      'demoId': 'data-source',
      'name': { 'zh-CN': '数据源', 'en-US': 'Data Source' },
      'desc': {
        'zh-CN': '<p>通过配置 <code>data</code> 属性来设置数据源，可配置静态数据源和动态数据源。</p>\n',
        'en-US':
          '<p>You can configure the <code>data</code> attribute to set the data source. You can configure the static data source and dynamic data source. </p>\n'
      },
      'codeFiles': ['data-source.vue']
    },
    {
      'demoId': 'guide-line',
      'name': { 'zh-CN': '连接线', 'en-US': 'Tree With Line' },
      'desc': {
        'zh-CN': '<p>通过配置<code> show-line </code>设置显示节点连接线</p>',
        'en-US': '<p>Set the display node connection line by configuring<code>show-line</code></p>'
      },
      'codeFiles': ['guide-line.vue']
    },
    {
      'demoId': 'edit',
      'name': { 'zh-CN': '编辑', 'en-US': 'Disabled' },
      'desc': {
        'zh-CN':
          '<p>通过配置<code> openEdit </code>方法来进入编辑，<code> closeEdit </code>方法取消编辑，<code> saveEdit </code>方法保存编辑。</p>\n',
        'en-US':
          '<p>By configuring the<code>openEdit</code>method to enter editing, the<code>closeEdit</code>method cancels editing, and the<code>saveEdit</code>method saves editing.</p>\n'
      },
      'codeFiles': ['edit.vue']
    },
    {
      'demoId': 'disable-node',
      'name': { 'zh-CN': '禁用状态', 'en-US': 'Customized empty data text' },
      'desc': {
        'zh-CN': '<p>数据源里面带 <code>disabled: true</code> 渲染时自动禁用。</p>\n',
        'en-US': '<p>Configure <code>template #empty</code>Set the user-defined empty data text. </p>\n'
      },
      'codeFiles': ['disable-node.vue']
    },
    {
      'demoId': 'custom-empty-text',
      'name': { 'zh-CN': '自定义空数据文本', 'en-US': 'Render after expansion' },
      'desc': {
        'zh-CN': '<p>配置 <code>template #empty</code> 设置自定义空数据文本。</p>\n',
        'en-US':
          '<p>Configure the <code>render-after-expand</code> attribute to set whether to render data after expansion. The default value is <code>true</code>. </p>\n'
      },
      'codeFiles': ['custom-empty-text.vue']
    },
    {
      'demoId': 'render-after-expand',
      'name': { 'zh-CN': '展开后渲染', 'en-US': 'Unique ID' },
      'desc': {
        'zh-CN':
          '<p>配置 <code>render-after-expand</code> 属性设置是否展开后渲染数据，默认为 <code>true</code>。</p>\n',
        'en-US':
          '<p>Use the <code>node-key</code> attribute to set the unique ID. </p>\n <p>You need to set the unique ID of a node for operations such as selecting, obtaining, adding, and deleting a node.</p>'
      },
      'codeFiles': ['render-after-expand.vue']
    },
    {
      'demoId': 'node-key',
      'name': { 'zh-CN': '唯一标识', 'en-US': 'The parent and child are not associated with each other.' },
      'desc': {
        'zh-CN':
          '<p>通过 <code>node-key</code> 属性设置唯一标识。</p>\n <p>设置选中节点，获取选中节点，新增节点，删除节点等操作，需要设置节点的唯一标识属性</p>',
        'en-US': '<p>The <code>check-strictly</code> attribute is used to set the parent and child levels to No. </p>\n'
      },
      'codeFiles': ['node-key.vue']
    },
    {
      'demoId': 'check-strictly',
      'name': { 'zh-CN': '父子不互相关联', 'en-US': 'All nodes are expanded by default.' },
      'desc': {
        'zh-CN': '<p>通过 <code>check-strictly</code> 属性设置父子层级勾选不关联。</p>\n',
        'en-US':
          '<p>Use the <code>default-expand-all</code> property to set all nodes to be expanded by default. </p>\n'
      },
      'codeFiles': ['check-strictly.vue']
    },
    {
      'demoId': 'default-expand-all',
      'name': { 'zh-CN': '默认展开所有节点', 'en-US': 'Click to expand and collapse a node.' },
      'desc': {
        'zh-CN': '<p>通过 <code>default-expand-all</code> 属性设置默认展开所有节点。</p>\n',
        'en-US':
          '<p>You can set the <code>expand-on-click-node</code> attribute to expand or collapse a node when you click the node content. </p>\n'
      },
      'codeFiles': ['default-expand-all.vue']
    },
    {
      'demoId': 'expand-on-click-node',
      'name': { 'zh-CN': '点击节点展开收缩', 'en-US': 'Selected when clicking a node' },
      'desc': {
        'zh-CN': '<p>通过 <code>expand-on-click-node</code> 属性设置点击节点内容时可展开/收起节点。</p>\n',
        'en-US':
          '<p>You can select or deselect data by setting the <code>check-on-click-node</code> attribute. \n The <code>icon-trigger-click-node</code> attribute is used to determine whether to trigger the node-click event when you click an icon. The default value is true. </p>\n'
      },
      'codeFiles': ['expand-on-click-node.vue']
    },
    {
      'demoId': 'check-on-click-node',
      'name': { 'zh-CN': '点击节点时选中', 'en-US': 'Automatically Expand Parent Node' },
      'desc': {
        'zh-CN':
          '<p>通过 <code>check-on-click-node</code> 属性设置点击节点内容同时可以勾选数据/去勾选数据。\n通过 <code>icon-trigger-click-node</code> 属性控制点击图标是否触发 node-click 事件，默认为 true。</p>\n',
        'en-US':
          '<p>Indicates whether to display the parent node based on the <code>auto-expand-parent</code> attribute. The default value is <code>true</code>. </p>\n'
      },
      'codeFiles': ['check-on-click-node.vue']
    },
    {
      'demoId': 'auto-expand-parent',
      'name': { 'zh-CN': '自动展开父节点', 'en-US': 'Nodes selected by default' },
      'desc': {
        'zh-CN': '<p>通过 <code>auto-expand-parent</code> 属性是否展示父节点，默认为 <code>true</code>。</p>\n',
        'en-US':
          '<p>The <code>default-checked-keys</code> attribute is used to set the selected data by default. </p>\n'
      },
      'codeFiles': ['auto-expand-parent.vue']
    },
    {
      'demoId': 'default-checked-keys',
      'name': { 'zh-CN': '默认勾选的节点', 'en-US': 'The specified node is expanded by default.' },
      'desc': {
        'zh-CN': '<p>通过 <code>default-checked-keys</code> 属性设置默认勾选数据。</p>\n',
        'en-US': '<p>Set the default expanded node through the <code>default-expanded-keys</code> attribute. </p>\n'
      },
      'codeFiles': ['default-checked-keys.vue']
    },
    {
      'demoId': 'default-expanded-keys',
      'name': { 'zh-CN': '默认展开指定节点', 'en-US': 'Currently selected node flag' },
      'desc': {
        'zh-CN': '<p>通过 <code>default-expanded-keys</code> 属性设置默认展开的节点。</p>\n',
        'en-US':
          '<p>Use <code>current-node-key</code> to set the flag of the currently selected node. It must be used together with node-key=&quot;id&quot;. </p>\n'
      },
      'codeFiles': ['default-expanded-keys.vue']
    },
    {
      'demoId': 'current-node-key',
      'name': { 'zh-CN': '当前选中节点标志', 'en-US': 'Default slot' },
      'desc': {
        'zh-CN':
          '<p>通过 <code>current-node-key</code> 设置当前选中节点标志，要配合 node-key=&quot;id&quot; 使用。</p>\n',
        'en-US':
          '<p>You can customize the content of a tree node through the <code>default</code> slot. The parameter is {node, data}. </p>\n'
      },
      'codeFiles': ['current-node-key.vue']
    },
    {
      'demoId': 'slot-deffault',
      'name': { 'zh-CN': '默认插槽', 'en-US': 'Customized content area rendering' },
      'desc': {
        'zh-CN':
          '<p>通过 <code>default</code> 插槽，可自定义树节点的内容，参数为 { node, data }。</p>\n<p>通过 <code>prefix</code> 插槽，可自定义树节点的前缀内容（如前缀图标），参数为 { node }。</p>\n<p>通过 <code>suffix</code> 插槽，可自定义树节点的后缀内容（如后缀图标），参数为 { node }。</p>\n',
        'en-US': '<p>Sets the customized content through the <code>render-content</code> attribute. </p>\n'
      },
      'codeFiles': ['slot-deffault.vue']
    },
    {
      'demoId': 'slot-operation',
      'name': { 'zh-CN': '右侧操作插槽', 'en-US': 'Whether to enable the multi-choice mode' },
      'desc': {
        'zh-CN': '<p>通过 <code>operation</code> 插槽，可自定义树节点的右侧插槽，参数为 { node }。</p>\n',
        'en-US':
          '<p>The <code>show-checkbox</code> attribute is used to set whether a node can be selected. The default value is <code>false</code>. </p>\n'
      },
      'codeFiles': ['slot-operation.vue']
    },
    {
      'demoId': 'render-content',
      'name': { 'zh-CN': '自定义内容区渲染', 'en-US': 'Dragable Node' },
      'desc': {
        'zh-CN': '<p>通过 <code>render-content</code> 属性设置自定义内容。</p>\n',
        'en-US': '<p>The <code>draggable</code> attribute is used to set whether a node can be dragged. </p>\n'
      },
      'codeFiles': ['render-content.vue']
    },
    {
      'demoId': 'show-checkbox',
      'name': { 'zh-CN': '是否开启多选模式', 'en-US': 'Whether a customized node can be dragged' },
      'desc': {
        'zh-CN': '<p>通过 <code>show-checkbox</code> 属性设置节点是否可被选择，默认为 <code>false</code>。</p>\n',
        'en-US':
          '<p>The <code>allow-drag</code> hook function is used to determine whether a node can be dragged. If the return value is <code>false</code>, the node cannot be dragged. </p>\n'
      },
      'codeFiles': ['show-checkbox.vue']
    },
    {
      'demoId': 'node-draggable',
      'name': { 'zh-CN': '可拖拽节点', 'en-US': 'Whether the customized target node can be placed' },
      'desc': {
        'zh-CN': '<p>通过 <code>draggable</code> 属性设置节点是否可拖拽。</p>\n',
        'en-US':
          "<p>The <code>allow-drop</code> attribute is used to determine whether the target node can be placed during dragging. The type parameter has three cases:'prev','inner', and'next', indicating that the parameter is placed before, inserted into, and placed after the target node, respectively. </p>\n"
      },
      'codeFiles': ['node-draggable.vue']
    },
    {
      'demoId': 'allow-drag',
      'name': { 'zh-CN': '自定义节点能否被拖拽', 'en-US': 'Data Node Attribute Configuration' },
      'desc': {
        'zh-CN':
          '<p>通过 <code>allow-drag</code> 钩子函数判断节点能否被拖拽，返回值为 <code>false</code> 时，节点不能拖拽。</p>\n',
        'en-US':
          "<p>Sets the data node attribute through the <code>props</code> attribute. The default value of this attribute is <code>{children:'children', label:'label', disabled:'disabled'}</code>. </p>\n"
      },
      'codeFiles': ['allow-drag.vue']
    },
    {
      'demoId': 'allow-drop',
      'name': { 'zh-CN': '自定义目标节点能否被放置', 'en-US': 'Lazy loading subnode' },
      'desc': {
        'zh-CN':
          "<p>通过 <code>allow-drop</code> 属性设置拖拽时判断目标节点能否被放置。type 参数有三种情况：'prev'、'inner' 和 'next'，分别表示放置在目标节点前、插入至目标节点和放置在目标节点后。</p>\n",
        'en-US':
          '<p>The <code>lazy</code> attribute is used to set whether to lazy load subnodes. It must be used together with the <code>load</code> method. The default value is <code>false</code>. </p>\n'
      },
      'codeFiles': ['allow-drop.vue']
    },
    {
      'demoId': 'node-props-config',
      'name': { 'zh-CN': '数据节点属性配置', 'en-US': 'Highlight the selected node' },
      'desc': {
        'zh-CN':
          "<p>通过 <code>props</code> 属性设置数据节点属性的配置，该属性的默认值为 <code>{children: 'children',label: 'label',disabled: 'disabled'}</code>。</p>\n",
        'en-US': '<p>The <code>highlight-current</code> attribute is used to highlight the selected node. </p>\n'
      },
      'codeFiles': ['node-props-config.vue']
    },
    {
      'demoId': 'lazy-load-node',
      'name': { 'zh-CN': '懒加载子节点', 'en-US': 'Filter Node' },
      'desc': {
        'zh-CN':
          '<p>通过 <code>lazy</code> 属性设置是否懒加载子节点，需与 <code>load</code> 方法结合使用。默认值为 <code>false</code>。</p>\n',
        'en-US': '<p>Set the node filtering method through the <code>filter-node-method</code> attribute. </p>\n'
      },
      'codeFiles': ['lazy-load-node.vue']
    },
    {
      'demoId': 'highlight-current',
      'name': { 'zh-CN': '高亮当前选择节点', 'en-US': 'Accordion Mode' },
      'desc': {
        'zh-CN': '<p>通过 <code>highlight-current</code> 属性设置高亮当前选择的节点。</p>\n',
        'en-US':
          '<p>The <code>accordion</code> attribute is used to set whether to open only one tree node at the same level at a time (in accordion mode). The default value is <code>false</code>. </p>\n'
      },
      'codeFiles': ['highlight-current.vue']
    },
    {
      'demoId': 'filter-node',
      'name': { 'zh-CN': '节点过滤', 'en-US': 'horizontal indent' },
      'desc': {
        'zh-CN': '<p>通过 <code>filter-node-method</code> 属性设置节点过滤的方法。</p>\n',
        'en-US':
          '<p>The <code>indent</code> attribute is used to control the horizontal indentation distance. The unit is <code>px</code>. The default value is <code>18px</code>. </p>\n'
      },
      'codeFiles': ['filter-node.vue']
    },
    {
      'demoId': 'accordion-mode',
      'name': { 'zh-CN': '手风琴模式', 'en-US': 'Customize the expansion and collapse icon' },
      'desc': {
        'zh-CN':
          '<p>通过 <code>accordion</code> 属性设置是否每次只打开一个同级树节点展开（手风琴模式），默认值为 <code>false</code>。</p>\n',
        'en-US':
          '<p>Use the <code>icon</code> attribute to set the tree node expansion and collapse icon, import an icon from the <code>@opentiny/vue-icon</code>, initialize the icon, and transfer the icon to the <code>icon</code> attribute. </p>\n'
      },
      'codeFiles': ['accordion-mode.vue']
    },
    {
      'demoId': 'indent',
      'name': { 'zh-CN': '水平缩进', 'en-US': 'Expand and collapse icons and set them separately' },
      'desc': {
        'zh-CN':
          '<p>通过 <code>indent</code> 属性控制水平缩进距离，单位 <code>px</code>,默认值为 <code>18px</code>。</p>\n',
        'en-US':
          '<p>Use the <code>expandIcon</code> attribute to set the expanded icon, and use the <code>shrinkIcon</code> attribute to set the collapsed icon. </p>\n'
      },
      'codeFiles': ['indent.vue']
    },
    {
      'demoId': 'custom-node-icon',
      'name': { 'zh-CN': '自定义展开折叠图标', 'en-US': 'You can customize the shortcut menu content.' },
      'desc': {
        'zh-CN':
          '<p>通过 <code>icon</code> 属性设置树节点展开折叠图标，从 <code>@opentiny/vue-icon</code> 中导入一个图标并进行初始化后传给 <code>icon</code> 属性。</p>\n',
        'en-US':
          '<p>The <code>show-contextmenu</code> attribute is used to set whether to enable the shortcut menu of the pop-up window. The <code>closeMenu</code> method of the instance can be invoked to close the customized menu. </p>\n'
      },
      'codeFiles': ['custom-node-icon.vue']
    },
    {
      'demoId': 'set-tree-icon',
      'name': { 'zh-CN': '展开折叠图标分别设置', 'en-US': 'Drag Node Event' },
      'desc': {
        'zh-CN':
          '<p>通过 <code>expandIcon</code> 属性设置展开的图标，通过 <code>shrinkIcon</code> 属性设置折叠的图标。</p>\n',
        'en-US': 'For details, see the following example.'
      },
      'codeFiles': ['set-tree-icon.vue']
    },
    {
      'demoId': 'contextmenu',
      'name': { 'zh-CN': '可自定义右键菜单内容', 'en-US': 'Node Selection Event' },
      'desc': {
        'zh-CN':
          '<p>通过 <code>show-contextmenu</code> 属性设置是否开启弹窗右键菜单，调用实例的 <code>closeMenu</code> 方法可以关闭自定义菜单。</p>\n',
        'en-US': 'For details, see the following example.'
      },
      'codeFiles': ['contextmenu.vue']
    },
    {
      'demoId': 'drag-events',
      'name': { 'zh-CN': '拖拽节点事件', 'en-US': 'Event of right-clicking a node' },
      'desc': { 'zh-CN': '详细用法参考如下示例', 'en-US': 'For details, see the following example.' },
      'codeFiles': ['drag-events.vue']
    },
    {
      'demoId': 'node-events',
      'name': { 'zh-CN': '勾选节点事件', 'en-US': 'Single Choice' },
      'desc': {
        'zh-CN': '详细用法参考如下示例',
        'en-US':
          '<p> uses the <code>show-radio</code> attribute to set the single-choice feature of the tree node. The default value is <code>false</code>. This attribute and the <code>show-checkbox</code> attribute are mutually exclusive. Cannot be set to <code>true</code> at the same time. </p>\n'
      },
      'codeFiles': ['node-events.vue']
    },
    {
      'demoId': 'node-contextmenu',
      'name': { 'zh-CN': '鼠标右键点击节点事件', 'en-US': '' },
      'desc': { 'zh-CN': '详细用法参考如下示例', 'en-US': '' },
      'codeFiles': ['node-contextmenu.vue']
    },
    {
      'demoId': 'single-select-radio',
      'name': { 'zh-CN': '单选', 'en-US': '' },
      'desc': {
        'zh-CN':
          '<p>通过 <code>show-radio</code> 属性设置树节点的单选特性，默认为 <code>false</code>，与 <code>show-checkbox</code> 属性互斥，不能同时设置为 <code>true</code>。</p>\n',
        'en-US': ''
      },
      'codeFiles': ['single-select-radio.vue']
    },
    {
      'demoId': 'plain-mode',
      'name': { 'zh-CN': '平铺视图', 'en-US': '' },
      'desc': {
        'zh-CN':
          '<p>通过<code>view-type</code>设置视图模式，可选值有tree（普通视图）、plain（平铺视图），默认值是<code>tree</code></p>\n',
        'en-US': ''
      },
      'codeFiles': ['plain-mode.vue']
    }
  ],
  apis: [
    {
      'name': 'tree',
      'type': 'component',
      'properties': [
        {
          'name': 'data',
          'type': 'Array',
          'defaultValue': '',
          'desc': {
            'zh-CN': '设置数据源。可配置静态数据源和动态数据源。',
            'en-US': 'Set the data source. Static and dynamic data sources can be configured.; Display Data'
          },
          'demoId': 'data-source'
        },
        {
          'name': 'expand-icon',
          'type': 'Object',
          'defaultValue': '',
          'desc': { 'zh-CN': '指示展开的图标', 'en-US': 'Indicates the expanded icon' },
          'demoId': 'set-tree-icon'
        },
        {
          'name': 'icon-trigger-click-node',
          'type': 'Boolean',
          'defaultValue': '该属性的默认值为 true',
          'desc': {
            'zh-CN': '点击图标展开节点时是否触发 node-click 事件',
            'en-US': 'Whether to trigger the node-click event when an icon is clicked to expand a node.'
          },
          'demoId': 'check-on-click-node'
        },
        {
          'name': 'show-line',
          'type': 'Boolean',
          'defaultValue': 'false',
          'desc': {
            'zh-CN': '设置是否显示连接线',
            'en-US': 'Set the display node connection line.'
          },
          'demoId': 'guide-line'
        },
        {
          'name': 'show-contextmenu',
          'type': 'Boolean',
          'defaultValue': '',
          'desc': {
            'zh-CN': '右键点击节点是否弹窗自定义菜单,默认值为 false',
            'en-US': 'Whether to display the custom menu when right-clicking a node. The default value is false.'
          },
          'demoId': 'contextmenu'
        },
        {
          'name': 'shrink-icon',
          'type': 'Object',
          'defaultValue': '',
          'desc': { 'zh-CN': '指示收缩的图标', 'en-US': 'Icon indicating contraction' },
          'demoId': 'set-tree-icon'
        },
        {
          'name': 'empty-text',
          'type': 'String',
          'defaultValue': '',
          'desc': { 'zh-CN': '内容为空的时候展示的文本', 'en-US': 'Text displayed when the content is empty.' },
          'demoId': 'custom-empty-text'
        },
        {
          'name': 'render-after-expand',
          'type': 'Boolean',
          'defaultValue': '该属性的默认值为 true',
          'desc': {
            'zh-CN': '是否在第一次展开某个树节点后才渲染其子节点',
            'en-US': 'Whether to render a tree node after it is expanded for the first time.'
          },
          'demoId': 'render-after-expand'
        },
        {
          'name': 'node-key',
          'type': 'String',
          'defaultValue': '',
          'desc': {
            'zh-CN': '节点唯一标识属性名称。每个树节点用来作为唯一标识的属性，整棵树应该是唯一的',
            'en-US':
              'The node uniquely identifies the attribute name.; Each tree node is used as a unique identifier attribute, and the entire tree should be unique'
          },
          'demoId': 'node-key'
        },
        {
          'name': 'check-strictly',
          'type': 'Boolean',
          'defaultValue': '该属性的默认值为 false',
          'desc': {
            'zh-CN': '在显示复选框的情况下，是否严格的遵循父子不互相关联的做法，默认为 false',
            'en-US':
              'Whether to strictly follow the method of not associating parent and child when the check box is displayed. The default value is false.'
          },
          'demoId': 'check-strictly'
        },
        {
          'name': 'default-expand-all',
          'type': 'Boolean',
          'defaultValue': '该属性的默认值为 false',
          'desc': { 'zh-CN': '是否默认展开所有节点', 'en-US': 'Whether to expand all nodes by default' },
          'demoId': 'default-expand-all'
        },
        {
          'name': 'expand-on-click-node',
          'type': 'Boolean',
          'defaultValue': '该属性的默认值为 true',
          'desc': {
            'zh-CN':
              '点击节点展开收起开关。当设置为true: 点击节点内容时可展开/收起节点。设置为false: 只有点击节点名称前面的展开/收起图标才能进行节点展开/收起。是否在点击节点的时候展开或者收缩节点， 默认值为 true，如果为 false，则只有点箭头图标的时候才会展开或者收缩节点。',
            'en-US':
              'Click the node to expand the function of the node. When set to true, the node can be expanded or closed when the node content is clicked. If this parameter is set to false, the node can be expanded or expanded only after the expansion/fold icon is clicked in front of the node name.; Indicates whether to expand or shrink a node when a node is clicked. The default value is true. If the value is false, the node is expanded or collapsed only when an arrow icon is displayed.'
          },
          'demoId': 'expand-on-click-node'
        },
        {
          'name': 'check-on-click-node',
          'type': 'Boolean',
          'defaultValue': '该属性的默认值为 false',
          'desc': {
            'zh-CN': '是否在点击节点的时候选中节点，默认值为 false，即只有在点击复选框时才会选中节点。',
            'en-US':
              'Whether to select a node when you click it. The default value is false, indicating that the node is selected only when you click the check box.'
          },
          'demoId': 'check-on-click-node'
        },
        {
          'name': 'auto-expand-parent',
          'type': 'Boolean',
          'defaultValue': '该属性的默认值为 true',
          'desc': {
            'zh-CN': '展开子节点的时候是否自动展开父节点',
            'en-US': 'Whether to automatically expand the parent node when expanding the child node.'
          },
          'demoId': 'auto-expand-parent'
        },
        {
          'name': 'default-checked-keys',
          'type': 'Array',
          'defaultValue': '',
          'desc': {
            'zh-CN':
              '配置默认选中。取值为 key 在数据源 dataset 中所对应的值。组件生成后会默认将 defaultValue 中所对应的节点选中。默认勾选的节点的 key 的数组',
            'en-US':
              'Selected by default. The value is the value corresponding to the key in the data source dataset. After the component is generated, the corresponding node in defaultValue is selected by default. ;Key array of selected nodes by default'
          },
          'demoId': 'default-checked-keys'
        },
        {
          'name': 'default-expanded-keys',
          'type': 'Array',
          'defaultValue': '',
          'desc': { 'zh-CN': '默认展开的节点的 key 的数组', 'en-US': 'Key array of the expanded node by default' },
          'demoId': 'default-expanded-keys'
        },
        {
          'name': 'render-content',
          'type': 'Function(h, { node, data, store }',
          'defaultValue': '',
          'desc': {
            'zh-CN': '树节点的内容区的渲染 Function',
            'en-US': 'Render Function of the content area of the tree node'
          },
          'demoId': 'render-content'
        },
        {
          'name': 'show-checkbox',
          'type': 'Boolean',
          'defaultValue': '该属性的默认值为 false',
          'desc': { 'zh-CN': '节点是否可被选择', 'en-US': 'Whether a node can be selected.' },
          'demoId': 'show-checkbox'
        },
        {
          'name': 'draggable',
          'type': 'Boolean',
          'defaultValue': '该属性的默认值为 false',
          'desc': {
            'zh-CN': '是否开启节点拖拽，节点的位置可任意拖放，改变原来的节点的父子结构。是否开启拖拽节点功能',
            'en-US':
              'Whether to enable the node dragging function. The node position can be dragged at will to change the parent-child structure of the original node. ;Whether to enable the function of dragging nodes'
          },
          'demoId': 'node-draggable'
        },
        {
          'name': 'allow-drag',
          'type': 'Function(node)',
          'defaultValue': '',
          'desc': { 'zh-CN': '判断节点能否被拖拽', 'en-US': 'Dedicated whether a node can be dragged.' },
          'demoId': 'allow-drag'
        },
        {
          'name': 'allow-drop',
          'type': 'Function(draggingNode, dropNode, type)',
          'defaultValue': '',
          'desc': {
            'zh-CN':
              "拖拽时判定目标节点能否被放置。type 参数有三种情况：'prev'、'inner' 和 'next'，分别表示放置在目标节点前、插入至目标节点和放置在目标节点后",
            'en-US':
              "Dedicated whether the target node can be placed during dragging. The type parameter has three situations: 'prev',' inner', and'next', which indicate that it is placed before the target node, inserted into the target node, and placed after the target node respectively"
          },
          'demoId': 'allow-drop'
        },
        {
          'name': 'props',
          'type': 'Object',
          'defaultValue': "该属性的默认值为 {children: 'children',label: 'label',disabled: 'disabled'}",
          'desc': {
            'zh-CN': '配置选项，具体看下表',
            'en-US': 'Configuration options. For details, see the following table.'
          },
          'demoId': 'node-props-config'
        },
        {
          'name': 'highlight-current',
          'type': 'Boolean',
          'defaultValue': '该属性的默认值为 false',
          'desc': { 'zh-CN': '是否高亮当前选中节点', 'en-US': 'Whether to highlight the selected node' },
          'demoId': 'highlight-current'
        },
        {
          'name': 'lazy',
          'type': 'Boolean',
          'defaultValue': '该属性的默认值为 false',
          'desc': {
            'zh-CN': '异步加载模式，展开节点时再请求数据。需要服务支持。是否懒加载子节点，需与 load 方法结合使用',
            'en-US':
              'Asynchronous loading mode. Data is requested when a node is expanded. Service support is required.; Whether to load subnodes in lazy mode. This parameter must be used together with the load method.'
          },
          'demoId': 'lazy-load-node'
        },
        {
          'name': 'load',
          'type': 'Function(node, resolve)',
          'defaultValue': '',
          'desc': {
            'zh-CN': '加载子树数据的方法，仅当 lazy 属性为true 时生效',
            'en-US':
              'Method for loading subtree data. This parameter is valid only when the lazy attribute is set to true.'
          },
          'demoId': 'lazy-load-node'
        },
        {
          'name': 'filter-node-method',
          'type': 'Function(value, data, node)',
          'defaultValue': '',
          'desc': {
            'zh-CN':
              '指定输入筛选时匹配的节点的字段值。对树节点进行筛选时执行的方法，返回 true 表示这个节点可以显示，返回 false 则表示这个节点会被隐藏',
            'en-US':
              'Field value of the node to be matched during input filtering. This method is to filter tree nodes. If true is returned, the node can be displayed. If false is returned, the node can be hidden'
          },
          'demoId': 'filter-node'
        },
        {
          'name': 'accordion',
          'type': 'Boolean',
          'defaultValue': '该属性的默认值为 false',
          'desc': {
            'zh-CN':
              '是否为单一路径。为 true 时，全部层级的节点同级互斥，为数字时，不大于该值的节点同级互斥。是否每次只打开一个同级树节点展开',
            'en-US':
              'Whether the path is a single path. If this parameter is set to true, nodes at all levels are mutually exclusive. If this parameter is set to a number, nodes not greater than this parameter are mutually exclusive. ;Do you want to open only one node of the same level tree at a time to expand'
          },
          'demoId': 'accordion-mode'
        },
        {
          'name': 'indent',
          'type': 'Number',
          'defaultValue': '该属性的默认值为 18',
          'desc': {
            'zh-CN': '相邻级节点间的水平缩进，单位为像素',
            'en-US': 'horizontal indentation between adjacent nodes, in pixels.'
          },
          'demoId': 'indent'
        },
        {
          'name': 'icon',
          'type': 'Object',
          'defaultValue': '',
          'desc': {
            'zh-CN':
              '自定义图标。css : String（图标的总样式名），child : String（叶子节点图标），parent : String（父节点图标，open 打开，close，关闭），expand : String（展开节点图标），collapse : String（收缩节点图标）;自定义树节点的图标',
            'en-US':
              'User-defined icon. css: String (general style name of an icon), child: String (leaf node icon), parent: String (Parent node icon, open, close, and close), expand: String (the expansion node icon); collapse: String (the collapse node icon); Custom tree node icon'
          },
          'demoId': 'custom-node-icon'
        },
        {
          'name': 'view-type',
          'type': 'String',
          'defaultValue': 'tree',
          'desc': {
            'zh-CN': '视图模式，可选值有tree、plain，其中tree是普通视图，plain是平铺视图；默认值是tree',
            'en-US':
              "View mode. The options are 'tree' and 'plain', where tree indicates a common view and plain indicates a tiled view. The default value is tree."
          },
          'demoId': 'plain-mode'
        },
        {
          'name': 'filter-plain-method',
          'type': 'String',
          'defaultValue': '',
          'desc': {
            'zh-CN':
              '平铺模式下，对树节点进行筛选的方法，返回 true 表示这个节点可以显示，返回 false 则表示这个节点会被隐藏',
            'en-US':
              'Method for filtering tree nodes in tile mode. If true is returned, the node can be displayed. If false is returned, the node is hidden.'
          },
          'demoId': 'plain-mode'
        }
      ],
      'events': [
        {
          'name': 'node-click',
          'type': 'Function(data, node, vm)',
          'defaultValue': '',
          'desc': {
            'zh-CN':
              '点击节点后的事件。节点被点击时的回调;//参数说明\n{data: 节点数据,node: 节点状态信息（包括数据）,vm: 组件实例}',
            'en-US':
              'Event after a node is clicked.; Callback when a node is clicked; //Parameter description\n{data: node data, node: node status information (including data), vm: component instance}'
          },
          'demoId': 'check-on-click-node'
        },
        {
          'name': 'node-contextmenu',
          'type': 'Function(event, data, node, vm)',
          'defaultValue': '',
          'desc': {
            'zh-CN':
              '当某一节点被鼠标右键点击时会触发该事件;//参数说明\n{data: 节点数据,node: 节点状态信息（包括数据）,vm: 组件实例,event:原生事件}',
            'en-US':
              'This event is triggered when a node is right-clicked. //Parameter description\n{data: node data, node: node status information (including data), vm: component instance, event: native event}'
          },
          'demoId': 'node-contextmenu'
        },
        {
          'name': 'check-change',
          'type': 'Function(data, node, vm)',
          'defaultValue': '',
          'desc': {
            'zh-CN':
              '节点选中状态发生变化时的回调;//参数说明\n{node: 节点状态信息（包括数据）,checked:当前点击节点的勾选状态,indeterminate}',
            'en-US':
              'The callback is performed when the selected node status changes. //Parameter description\n{node: node status (including data), checked: selected status of the currently clicked node, and indeterminate}'
          },
          'demoId': 'node-events'
        },
        {
          'name': 'check',
          'type': 'Function(data, currentNode)',
          'defaultValue': '',
          'desc': {
            'zh-CN':
              '勾选节点后的事件;当复选框被点击的时候触发;//回调参数：\n{data: Object,// 当前选中节点信息\ncurrentNode:Object//树组件目前的选中状态信息，包含 checkedNodes、checkedKeys、halfCheckedNodes、halfCheckedKeys 四个属性}',
            'en-US':
              'events after a node is selected. Triggered when the check box is clicked; // Callback parameters:\n{data: Object,// Information about the currently selected node\ncurrentNode:Object// Current selected status of the tree component. Contains four attributes: checkedNodes, checkedKeys, halfCheckedNodes, and halfCheckedKeys} '
          },
          'demoId': 'drag-events'
        },
        {
          'name': 'current-change',
          'type': 'Function(data, currentNode)',
          'defaultValue': '',
          'desc': {
            'zh-CN': '当前选中节点变化时触发的事件;//参数说明\n{data: 节点数据,currentNode: 节点状态信息（包括数据）}',
            'en-US':
              'Event triggered when the selected node changes. //Parameter description\n{data: node data, currentNode: node status information (including data)}'
          },
          'demoId': 'drag-events'
        },
        {
          'name': 'node-expand',
          'type': 'Function(data, node, vm)',
          'defaultValue': '',
          'desc': {
            'zh-CN':
              '展开节点后的事件。节点被展开时触发的事件;//参数说明\n{data: 节点数据,node: 节点状态信息（包括数据,vm: 当前组件实例}',
            'en-US':
              'Event after a node is expanded.; event triggered when a node is expanded; //Parameter description\n{data: node data, node: node status information (including data, vm: current component instance}'
          },
          'demoId': 'default-expanded-keys'
        },
        {
          'name': 'node-collapse',
          'type': 'Function(data, node, vm)',
          'defaultValue': '',
          'desc': {
            'zh-CN':
              '收缩节点后的事件;节点被关闭时触发的事件;//参数说明\n{data: 节点数据,node: 节点状态信息（包括数据）,vm: 当前组件实例}',
            'en-US':
              'Event after node shrinking; Event triggered when a node is closed; //Parameter description\n{data: node data, node: node status information (including data), vm: current component instance}'
          },
          'demoId': 'default-expanded-keys'
        },
        {
          'name': 'node-drag-start',
          'type': 'Function(node, event)',
          'defaultValue': '',
          'desc': {
            'zh-CN': '节点开始拖拽时触发的事件;节点开始拖拽时触发的事件;node: 拖拽节点，event: 原生事件',
            'en-US':
              'Event triggered when a node starts to be dragged. Event triggered when a node starts to be dragged. node: drag node; event: native event'
          },
          'demoId': 'drag-events'
        },
        {
          'name': 'node-drag-enter',
          'type': 'Function(draggingNode, targetNode, dropType, event)',
          'defaultValue': '',
          'desc': {
            'zh-CN':
              '拖拽进入其他节点时触发的事件;//参数\n{draggingNode: 拖拽节点,targetNode: 目标节点,dropType: 拖拽类型, //拖拽节点在目标节点对应关系（before/after/inner/none)\nevent: 原生事件}',
            'en-US':
              'Event triggered when a user drags a node to another node. //Parameters\n{draggingNode: drag node, targetNode: target node, dropType: drag type, //Drag node mapping relationship on the target node (before/after/inner/none) \nevent: native event}'
          },
          'demoId': 'drag-events'
        },
        {
          'name': 'node-drag-leave',
          'type': 'Function(draggingNode, targetNode, dropType, event)',
          'defaultValue': '',
          'desc': {
            'zh-CN':
              '拖拽离开某个节点时触发的事件;//参数\n{draggingNode: 拖拽节点,targetNode: 目标节点,dropType: 拖拽类型,//拖拽节点在目标节点对应关系（before/after/inner/none)\nevent: 原生事件}',
            'en-US':
              'Event triggered when a node is dragged away. //Parameters\n{draggingNode: drag node, targetNode: target node, dropType: drag type, //Drag node mapping relationship on the target node (before/after/inner/none) \nevent: native event}'
          },
          'demoId': 'drag-events'
        },
        {
          'name': 'node-drag-over',
          'type': 'Function(raggingNode, targetNode, dropType, event)',
          'defaultValue': '',
          'desc': {
            'zh-CN':
              '在拖拽节点时触发的事件（类似浏览器的 mouseover 事件）;//参数\n{draggingNode: 拖拽节点,targetNode: 目标节点,dropType: 拖拽类型, //拖拽节点在目标节点对应关系（before/after/inner/none)\nevent: 原生事件}',
            'en-US':
              'Event triggered when a node is dragged (similar to the mouseover event of a browser). //Parameters\n{draggingNode: drag node, targetNode: target node, dropType: drag type, //Drag node mapping relationship on the target node (before/after/inner/none) \nevent: native event}'
          },
          'demoId': 'drag-events'
        },
        {
          'name': 'node-drag-end',
          'type': 'Function(draggingNode, targetNode, dropType, event)',
          'defaultValue': '',
          'desc': {
            'zh-CN':
              '拖拽结束时（可能未成功）触发的事件;//参数\n{draggingNode: 拖拽节点,targetNode: 目标节点,dropType: 拖拽类型, //拖拽节点在目标节点对应关系（before/after/inner/none)\nevent: 原生事件}',
            'en-US':
              'Event triggered when the drag ends (may not be successful). //Parameters\n{draggingNode: drag node, targetNode: target node, dropType: drag type, //Drag node mapping relationship on the target node (before/after/inner/none) \nevent: native event}'
          },
          'demoId': 'drag-events'
        },
        {
          'name': 'node-drop',
          'type': 'Function(draggingNode, targetNode, dropType, event)',
          'defaultValue': '',
          'desc': {
            'zh-CN':
              '拖放节点后的事件。开启 dragable 属性为 true 有效。拖拽成功完成时触发的事件;//参数\n{draggingNode: 拖拽节点,targetNode: 目标节点,dropType: 拖拽类型, //拖拽节点在目标节点对应关系（before/after/inner/none)\nevent: 原生事件}',
            'en-US':
              'Event after a node is dragged. The dragable attribute is valid when true is enabled.; event triggered when the drag is successfully completed; //Parameters\n{draggingNode: drag node, targetNode: target node, dropType: drag type, //Drag node mapping relationship on the target node (before/after/inner/none) \nevent: native event}'
          },
          'demoId': 'node-draggable'
        },
        {
          'name': 'leave-plain-view',
          'type': 'Function(plainNode, event)',
          'defaultValue': '',
          'desc': {
            'zh-CN': '平铺模式下，点击节点定位图标触发的事件。参数{ plainNode: 被点击的节点数据, event: 原生点击事件 }',
            'en-US':
              'This event is triggered when the node location icon is clicked in tile mode. Parameter { plainNode: clicked node data, event: native click event }'
          },
          'demoId': 'plain-mode'
        },
        {
          'name': 'check-plain',
          'type': 'Function(plainNode, value)',
          'defaultValue': '',
          'desc': {
            'zh-CN':
              '平铺模式下，勾选或取消勾选节点的事件，需要设置show-checkbox为true才生效。参数{ plainNode: 被点击的节点数据, value: 复选框是否选中，取值true或false }',
            'en-US':
              'In tiled mode, you need to set show-checkbox to true to enable or disable node events. Parameter { plainNode: clicked node data, value: indicates whether the check box is selected. The value can be true or false }'
          },
          'demoId': 'plain-mode'
        }
      ],
      'slots': [
        {
          'name': 'default',
          'type': '',
          'defaultValue': '',
          'desc': {
            'zh-CN': '自定义树节点的内容，参数为 { node, data }',
            'en-US': 'Content of a user-defined tree node. The parameter is {node, data}.'
          },
          'demoId': 'slot-deffault'
        },
        {
          'name': 'empty',
          'type': '',
          'defaultValue': '',
          'desc': { 'zh-CN': '自定义空数据文本', 'en-US': 'Customize empty data text' },
          'demoId': 'custom-empty-text'
        },
        {
          'name': 'contextmenu',
          'type': '',
          'defaultValue': '',
          'desc': { 'zh-CN': '自定义树节点的右键菜单内容，参数为 { node, data }', 'en-US': '' },
          'demoId': 'contextmenu'
        }
      ],
      'methods': [
        {
          'name': 'filter',
          'type': '(value) => void',
          'defaultValue': '',
          'desc': { 'zh-CN': '对树节点进行筛选操作', 'en-US': 'Filter tree nodes.' },
          'demoId': 'filter-node'
        },
        {
          'name': 'updateKeyChildren',
          'type': '(key, data) => void',
          'defaultValue': '',
          'desc': {
            'zh-CN': '通过 keys 设置节点子元素，使用此方法必须设置 node-key 属性',
            'en-US': 'Use keys to set node subelements. The node-key attribute must be set in this method.'
          },
          'demoId': 'show-checkbox'
        },
        {
          'name': 'getCheckedNodes',
          'type': '(leafOnly, includeHalfChecked) => result',
          'defaultValue': '',
          'desc': {
            'zh-CN':
              '获取选中标识的数据。若节点可被选择（即 show-checkbox 为 true），则返回目前被选中的节点所组成的数组，仅配置多选时生效',
            'en-US':
              'Obtains the data of the selected identifier.; If a node can be selected (that is, show-checkbox is set to true), the array composed of the currently selected nodes is returned. This parameter is valid only when multiple nodes are selected.'
          },
          'demoId': 'check-on-click-node'
        },
        {
          'name': 'setCheckedNodes',
          'type': '(keys, leafOnly) => void',
          'defaultValue': '',
          'desc': {
            'zh-CN': '设置目前勾选的节点，使用此方法必须设置 node-key 属性',
            'en-US': 'Set the selected node. You must set the node-key attribute in this method.'
          },
          'demoId': 'show-checkbox'
        },
        {
          'name': 'getCheckedKeys',
          'type': '(leafOnly) => result',
          'defaultValue': '',
          'desc': {
            'zh-CN':
              '若节点可被选择（即 show-checkbox 为 true），则返回目前被选中的节点的 key 所组成的数组, 仅配置多选时生效',
            'en-US':
              'If a node can be selected (that is, show-checkbox is set to true), the array consisting of the keys of the selected node is returned. This parameter is valid only when multiple nodes are selected.'
          },
          'demoId': 'check-on-click-node'
        },
        {
          'name': 'setCheckedKeys',
          'type': '(keys, leafOnly) => void',
          'defaultValue': '',
          'desc': {
            'zh-CN': '通过 keys 设置目前勾选的节点，使用此方法必须设置 node-key 属性',
            'en-US': 'Use keys to set the selected node. You must set the node-key attribute.'
          },
          'demoId': 'show-checkbox'
        },
        {
          'name': 'setChecked',
          'type': '(data,checked,deep) => void',
          'defaultValue': '',
          'desc': {
            'zh-CN':
              '通过 key / data 设置某个节点的勾选状态，使用此方法必须设置 node-key 属性。通过第3个参数，可以递归设置所有子节点的勾选状态！',
            'en-US':
              'Use key/data to set the selected status of a node. You must set the node-key attribute in this method. The third parameter can recursively set the check status of all subnodes'
          },
          'demoId': 'show-checkbox'
        },
        {
          'name': 'closeMenu',
          'type': '() => void',
          'defaultValue': '',
          'desc': { 'zh-CN': '关闭右键点击节点弹窗自定义菜单', 'en-US': 'Close the shortcut menu.' },
          'demoId': 'contextmenu'
        },
        {
          'name': 'getHalfCheckedNodes',
          'type': '() => result',
          'defaultValue': '',
          'desc': {
            'zh-CN':
              '若节点可被选择（即 show-checkbox 为 true），则返回目前半选中的节点所组成的数组,仅配置多选时生效。',
            'en-US':
              'If a node can be selected (that is, show-checkbox is set to true), the array composed of half-selected nodes is returned. This parameter takes effect only when multiple nodes are selected.'
          },
          'demoId': 'check-on-click-node'
        },
        {
          'name': 'getHalfCheckedKeys',
          'type': '() => result',
          'defaultValue': '',
          'desc': {
            'zh-CN':
              '若节点可被选择（即 show-checkbox 为 true），则返回目前半选中的节点的 key 所组成的数组，仅配置多选时生效。',
            'en-US':
              'If a node can be selected (that is, show-checkbox is set to true), the array consisting of the keys of the currently half-selected node is returned. This parameter is valid only when multiple nodes are selected.'
          },
          'demoId': 'check-on-click-node'
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
          'demoId': 'node-key'
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
          'demoId': 'node-key'
        },
        {
          'name': 'setCurrentKey',
          'type': '(key) => void',
          'defaultValue': '',
          'desc': {
            'zh-CN': '通过 key 设置某个节点的当前选中状态，使用此方法必须设置 node-key 属性',
            'en-US':
              'Use the key to set the selected status of a node. You must set the node-key attribute when using this method.'
          },
          'demoId': 'node-key'
        },
        {
          'name': 'setCurrentNode',
          'type': '(key) => void',
          'defaultValue': '',
          'desc': {
            'zh-CN': '通过 node 设置某个节点的当前选中状态，使用此方法必须设置 node-key 属性',
            'en-US':
              'Use node to set the selected status of a node. You must set the node-key attribute in this method.'
          },
          'demoId': 'node-key'
        },
        {
          'name': 'getNode',
          'type': '(data) => result',
          'defaultValue': '',
          'desc': {
            'zh-CN': '根据 data 或者 key 拿到 Tree 组件中的 node',
            'en-US': 'The node in the Tree component is obtained based on data or key.'
          },
          'demoId': 'show-checkbox'
        },
        {
          'name': 'remove',
          'type': '(data) => void',
          'defaultValue': '',
          'desc': {
            'zh-CN': '删除节点。删除 Tree 中的一个节点，使用此方法必须设置 node-key 属性',
            'en-US': 'Delete a node. ;Delete a node from the tree. The node-key attribute must be set in this method'
          },
          'demoId': 'node-key'
        },
        {
          'name': 'append',
          'type': '(data, parentNode) => void',
          'defaultValue': '',
          'desc': { 'zh-CN': '为 Tree 中的一个节点追加一个子节点', 'en-US': 'Add a subnode to a node in the tree.' },
          'demoId': 'node-key'
        },
        {
          'name': 'insertBefore',
          'type': '(data, refNode) => void',
          'defaultValue': '',
          'desc': { 'zh-CN': '为 Tree 的一个节点的前面增加一个节点', 'en-US': 'Add a node before a tree node.' },
          'demoId': 'node-key'
        },
        {
          'name': 'insertAfter',
          'type': '(data, refNode) => void',
          'defaultValue': '',
          'desc': {
            'zh-CN': '根据节点数据在父节点下插入一个子节点。为 Tree 的一个节点的后面增加一个节点',
            'en-US':
              'Insert a child node under the parent node based on the node data. Add a node  after a node of the Tree'
          },
          'demoId': 'node-key'
        }
      ]
    }
  ]
}
