export default {
  mode: ['pc'],
  apis: [
    {
      name: 'tree',
      type: 'component',
      props: [
        {
          name: 'accordion',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '是否为手风琴模式，每次只打开一个同级树节点展开',
            'en-US': 'Whether in accordion mode, only open one sibling tree node expansion at a time'
          },
          mode: ['pc'],
          pcDemo: 'other'
        },
        {
          name: 'add-disabled-keys',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '禁止添加的节点 key 值列表，也可通过 setAddDisabledKeys 方法设置',
            'en-US':
              'List of key values of nodes that cannot be added. You can also use the setAddDisabledKeys method to set the key values.'
          },
          mode: ['pc'],
          pcDemo: 'edit-control'
        },
        {
          name: 'after-load',
          type: '(nodes: object[])=> void',
          defaultValue: '',
          desc: {
            'zh-CN': '下级树节点数据加载完毕后的回调函数',
            'en-US': 'The callback function after the data of the subordinate tree node is loaded'
          },
          mode: ['pc'],
          pcDemo: 'lazy'
        },
        {
          name: 'allow-drag',
          type: '(node)=>boolean',
          defaultValue: '',
          desc: {
            'zh-CN': '判断节点能否被拖拽',
            'en-US': 'Whether a node can be dragged.'
          },
          mode: ['pc'],
          pcDemo: 'drag'
        },
        {
          name: 'allow-drop',
          type: '(srcNode, targetNode, type)=>void',
          defaultValue: '',
          desc: {
            'zh-CN':
              "拖拽时判定目标节点能否被放置。type 参数有三种情况：'prev'、'inner' 和 'next'，分别表示放置在目标节点前、插入至目标节点和放置在目标节点后",
            'en-US':
              "Whether the target node can be placed during dragging. The type parameter has three situations: 'prev',' inner', and'next', which indicate that it is placed before the target node, inserted into the target node, and placed after the target node respectively"
          },
          mode: ['pc'],
          pcDemo: 'drag'
        },
        {
          name: 'check-on-click-node',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '是否点击节点时，自动勾选节点',
            'en-US': 'When you click a node, the node is automatically selected'
          },
          mode: ['pc'],
          pcDemo: 'checkbox'
        },
        {
          name: 'check-strictly',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '是否为父子严格模式',
            'en-US': 'Whether it is in strict parent-child mode'
          },
          mode: ['pc'],
          pcDemo: 'checkbox'
        },
        {
          name: 'current-node-key',
          type: 'string',
          defaultValue: '',
          desc: {
            'zh-CN': '当前选中节点',
            'en-US': 'Currently selected node'
          },
          mode: ['pc'],
          pcDemo: 'node-hl'
        },
        {
          name: 'data',
          type: 'Array',
          defaultValue: '',
          desc: {
            'zh-CN': '设置数据源, 默认通过数据项的 label , children 属性展示数据',
            'en-US':
              'Set the data source. By default, the data is displayed through the label and children attributes of the data item'
          },
          mode: ['pc'],
          pcDemo: 'basic-usage'
        },
        {
          name: 'default-checked-keys',
          type: 'string[]',
          defaultValue: '',
          desc: {
            'zh-CN': '默认勾选的节点的keys',
            'en-US': 'keys of the node selected by default'
          },
          mode: ['pc'],
          pcDemo: 'checkbox'
        },
        {
          name: 'default-expand-all',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '是否默认展开所有节点',
            'en-US': 'Whether to expand all nodes by default'
          },
          mode: ['pc'],
          pcDemo: 'expand-control'
        },
        {
          name: 'default-expanded-keys',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '默认展开节点的keys',
            'en-US': 'The keys of the node are expanded by default'
          },
          mode: ['pc'],
          pcDemo: 'expand-control'
        },
        {
          name: 'delete-disabled-keys',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '禁止删除的节点 key 值列表，也可通过 setDeleteDisabledKeys 方法设置',
            'en-US':
              'Indicates the list of key values of nodes that cannot be deleted. You can also use the setDeleteDisabledKeys method to set the key values.'
          },
          mode: ['pc'],
          pcDemo: 'edit-control'
        },
        {
          name: 'delete-node-method',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '删除节点的装置钩子函数，若返回 false 或者返回 Promise 且被 reject，则停止删除。 ',
            'en-US':
              'Device hook function for deleting a node. If false is returned or Promise is returned and rejected, the deletion is stopped.'
          },
          mode: ['pc'],
          pcDemo: 'edit-control'
        },
        {
          name: 'draggable',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '是否开启节点拖拽',
            'en-US': 'Whether to enable the node dragging function'
          },
          mode: ['pc'],
          pcDemo: 'drag'
        },
        {
          name: 'edit-disabled-keys',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '禁止编辑的节点 key 值列表，也可通过 setEditDisabledKeys 方法设置',
            'en-US':
              'List of key values of nodes that cannot be edited. You can also use the setEditDisabledKeys method to set the key values.'
          },
          mode: ['pc'],
          pcDemo: 'edit-control'
        },
        {
          name: 'empty-text',
          type: 'string',
          defaultValue: '',
          desc: {
            'zh-CN': '内容为空的时候展示的文本',
            'en-US': 'Text displayed when the content is empty'
          },
          mode: ['pc'],
          pcDemo: 'slot'
        },
        {
          name: 'expand-icon',
          type: 'Component',
          defaultValue: '',
          desc: {
            'zh-CN': '指示展开的图标',
            'en-US': 'Indicates the expanded icon'
          },
          mode: ['pc'],
          pcDemo: 'icons'
        },
        {
          name: 'expand-icon-color',
          type: 'string',
          defaultValue: '',
          desc: {
            'zh-CN': '指示展开的图标色',
            'en-US': 'Indicates the expanded icon color'
          },
          mode: ['pc'],
          pcDemo: 'icons'
        },
        {
          name: 'expand-on-click-node',
          type: 'boolean',
          defaultValue: 'true',
          desc: {
            'zh-CN': '节点在点击内容时,是否展开 / 收起',
            'en-US': 'Whether the node expands/collapses when it clicks on content'
          },
          mode: ['pc'],
          pcDemo: 'expand-control'
        },
        {
          name: 'filter-node-method',
          type: '(value, data, node)=>boolean',
          defaultValue: '',
          desc: {
            'zh-CN': '对树节点进行筛选时执行的方法，返回 true 表示这个节点可以显示，返回 false 则表示这个节点会被隐藏',
            'en-US':
              'Method to be executed when filtering a tree node, returning true means the node can be displayed, and returning false means the node is hidden'
          },
          mode: ['pc'],
          pcDemo: 'filter-view'
        },
        {
          name: 'highlight-current',
          type: 'boolean',
          defaultValue: 'true',
          desc: {
            'zh-CN': '是否高亮当前选中节点',
            'en-US': 'Whether to highlight the selected node'
          },
          mode: ['pc'],
          pcDemo: 'node-hl'
        },
        {
          name: 'icon',
          type: 'Component',
          defaultValue: '',
          desc: {
            'zh-CN': '自定义节点图标',
            'en-US': 'Customize the node icon'
          },
          mode: ['pc'],
          pcDemo: 'icons'
        },
        {
          name: 'icon-trigger-click-node',
          type: 'boolean',
          defaultValue: 'true',
          desc: {
            'zh-CN': '点击图标展开节点时是否触发 node-click 事件',
            'en-US': 'Whether a node-click event is triggered when a node is expanded by clicking the icon'
          },
          mode: ['pc'],
          pcDemo: 'other'
        },
        {
          name: 'indent',
          type: 'number',
          defaultValue: '18',
          desc: {
            'zh-CN': '相邻级节点间的水平缩进，单位为像素',
            'en-US': 'horizontal indentation between adjacent nodes, in pixels.'
          },
          mode: ['pc'],
          pcDemo: 'basic-usage'
        },
        {
          name: 'lazy',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '是否为异步加载模式，展开节点时再请求数据',
            'en-US': 'Whether to load asynchronously and request data when the node is expanded'
          },
          mode: ['pc'],
          pcDemo: 'lazy'
        },
        {
          name: 'load',
          type: '(node, resolve)=> void',
          defaultValue: '',
          desc: {
            'zh-CN':
              '加载子树数据的方法。点击节点后，组件开始调用load方法，只有在load函数内调用resolve(data)，才表示返回下级的数据成功。',
            'en-US':
              'Method of loading subtree data. After the node is clicked, the component starts to call the load method. Only when resolve(data) is called in the load function, the data at the lower level is successfully returned.'
          },
          mode: ['pc'],
          pcDemo: 'lazy'
        },
        {
          name: 'node-key',
          type: 'string',
          defaultValue: '',
          desc: {
            'zh-CN': '节点唯一标识属性名称',
            'en-US': 'The node uniquely identifies the attribute name'
          },
          mode: ['pc'],
          pcDemo: 'node-hl'
        },
        {
          name: 'only-check-children',
          type: 'Boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '是否只能选中叶子节点',
            'en-US': 'whether only leaf nodes be selected'
          },
          mode: ['pc'],
          pcDemo: ''
        },
        {
          name: 'props',
          type: 'object',
          defaultValue: "{children: 'children',label: 'label',disabled: 'disabled',isLeaf: 'isLeaf'}",
          desc: {
            'zh-CN': '用户传入非标准格式的数据时，指定映射属性的关系',
            'en-US':
              'Specifies the relationship of the mapping properties when the user passes in data in a non-standard format'
          },
          mode: ['pc'],
          pcDemo: 'props'
        },
        {
          name: 'render-after-expand',
          type: 'boolean',
          defaultValue: 'true',
          desc: {
            'zh-CN': '是否在第一次展开某个树节点后才渲染其子节点',
            'en-US': 'Whether to render child nodes after the first expansion of a tree node'
          },
          mode: ['pc'],
          pcDemo: ''
        },
        {
          name: 'render-content',
          type: '(h: Vue.h, { node, data, store }=> VNode',
          defaultValue: '',
          desc: {
            'zh-CN': '树节点的内容区的渲染函数',
            'en-US': 'Rendering function for the content area of the tree node'
          },
          mode: ['pc'],
          pcDemo: 'slot'
        },
        {
          name: 'show-auxi',
          type: 'boolean',
          defaultValue: 'true',
          desc: {
            'zh-CN': '平铺视图模式时，是否显示节点的上级路径的辅助信息',
            'en-US': 'Whether to display auxiliary information about the upper path of a node in the tile view mode'
          },
          mode: ['pc'],
          pcDemo: 'filter-view'
        },
        {
          name: 'show-check-easily',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '在严格模式时，是否显示勾选父节点时，自动勾选子节点的功能区域',
            'en-US':
              'In strict mode, when the parent node is displayed, the function area of the child node is automatically selected.'
          },
          mode: ['pc'],
          pcDemo: 'other'
        },
        {
          name: 'show-checkbox',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '是否为多选模式',
            'en-US': 'Whether to select multiple mode'
          },
          mode: ['pc'],
          pcDemo: 'checkbox'
        },
        {
          name: 'show-contextmenu',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '是否启用右键菜单功能',
            'en-US': 'Whether to enable the right-click menu function'
          },
          mode: ['pc'],
          pcDemo: 'contextmenu'
        },
        {
          name: 'show-line',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '是否显示连接线',
            'en-US': 'Whether the connection cable is displayed'
          },
          mode: ['pc'],
          pcDemo: 'basic-usage'
        },
        {
          name: 'show-radio',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '是否为单选模式',
            'en-US': 'Whether to select an radio mode'
          },
          mode: ['pc'],
          pcDemo: 'radio'
        },
        {
          name: 'shrink-icon',
          type: 'Component',
          defaultValue: '',
          desc: {
            'zh-CN': '指示收缩的图标',
            'en-US': 'Icon indicating shrink'
          },
          mode: ['pc'],
          pcDemo: 'icons'
        },
        {
          name: 'shrink-icon-color',
          type: 'string',
          defaultValue: '',
          desc: {
            'zh-CN': '指示收缩的图标色',
            'en-US': 'Icon indicating shrink  color'
          },
          mode: ['pc'],
          pcDemo: 'icons'
        },
        {
          name: 'size',
          type: "'medium'|'small'",
          defaultValue: 'false',
          desc: {
            'zh-CN': '组件的大小',
            'en-US': 'Component size'
          },
          mode: ['pc'],
          pcDemo: 'basic-usage'
        },
        {
          name: 'view-type',
          type: "'tree' | 'plain'",
          defaultValue: 'tree',
          desc: {
            'zh-CN': '视图模式,其中tree是普通视图，plain是平铺视图',
            'en-US': 'View mode, where tree is a normal view and plain is a tiled view'
          },
          mode: ['pc'],
          pcDemo: 'filter-view'
        }
      ],
      events: [
        {
          name: 'add-node',
          type: '(node)=>void',
          defaultValue: '',
          desc: {
            'zh-CN': '添加节点的事件',
            'en-US': 'Add Node Events'
          },
          mode: ['pc'],
          pcDemo: 'edit-control'
        },
        {
          name: 'check',
          type: '(data, currentChecked)=>void',
          defaultValue: '',
          desc: {
            'zh-CN':
              '勾选节点后的事件<br>参数说明：{data:  当前选中节点信息, currentChecked: 树组件目前的选中状态信息}',
            'en-US':
              'Parameter description: {data: information about the selected node; currentChecked: information about the selected tree component}'
          },
          mode: ['pc'],
          pcDemo: 'check-op'
        },
        {
          name: 'check-change',
          type: '(data, checked, indeterminate)=>void',
          defaultValue: '',
          desc: {
            'zh-CN':
              '节点选中状态发生变化时的回调;<br>参数说明：{data: 节点状态信息,checked:当前点击节点的勾选状态,indeterminate:当前节点的半选状态}',
            'en-US':
              'Callback when node status changes; <br> Parameter description: {data: node status information,checked: the selected state of the current node,indeterminate: the semi-selected state of the current node}'
          },
          mode: ['pc'],
          pcDemo: 'check-op'
        },
        {
          name: 'check-plain',
          type: '(plainNode, value)=>void',
          defaultValue: '',
          desc: {
            'zh-CN':
              '平铺模式下，勾选或取消勾选节点的事件，需要设置show-checkbox为true才生效。<br>参数说明：{ plainNode: 被点击的节点数据, value: 复选框是否选中，取值true或false }',
            'en-US':
              'In tile mode, select or deselect node events to take effect only when show-checkbox is set to true. <br> Parameter description: {plainNode: indicates the node data to be clicked. value: indicates whether the check box is selected. The value can be true or false.'
          },
          mode: ['pc'],
          pcDemo: ''
        },
        {
          name: 'close-edit',
          type: '()=>void',
          defaultValue: '',
          desc: {
            'zh-CN': '关闭编辑的事件',
            'en-US': 'Close Edited Events'
          },
          mode: ['pc'],
          pcDemo: 'edit-control'
        },
        {
          name: 'current-change',
          type: '(data, currentNode)=>void',
          defaultValue: '',
          desc: {
            'zh-CN':
              '当前选中节点变化时触发的事件;<br>参数说明：{data: 节点数据,currentNode: 节点状态信息（包括数据）}',
            'en-US':
              'The event triggered when the currently selected node changes; <br> Parameter description: {data: node data,currentNode: node status information (including data)}'
          },
          mode: ['pc'],
          pcDemo: 'node-hl'
        },
        {
          name: 'delete-node',
          type: '(node)=>void',
          defaultValue: '',
          desc: {
            'zh-CN': '删除节点的事件',
            'en-US': 'Delete Node Events'
          },
          mode: ['pc'],
          pcDemo: 'edit-control'
        },
        {
          name: 'edit-node',
          type: '(node)=>void',
          defaultValue: '',
          desc: {
            'zh-CN': '修改节点的事件',
            'en-US': 'Edit Node Events'
          },
          mode: ['pc'],
          pcDemo: 'edit-control'
        },
        {
          name: 'leave-plain-view',
          type: '(plainNode, event)=>void',
          defaultValue: '',
          desc: {
            'zh-CN':
              '平铺模式下，点击节点定位图标触发的事件。<br>参数说明：{ plainNode: 被点击的节点数据, event: 原生点击事件 }',
            'en-US':
              'In tile mode, click the node positioning icon to trigger the event. <br> Parameter description: {plainNode: node data to be clicked, event: native click event}'
          },
          mode: ['pc'],
          pcDemo: ''
        },
        {
          name: 'load-data',
          type: '(data)=>void',
          defaultValue: '',
          desc: {
            'zh-CN': '懒加载时，加载数据成功的事件;<br>参数说明：{data: 加载的数据}',
            'en-US': 'During lazy loading, data is loaded successfully. <br> Parameter description: {data: loaded data}'
          },
          mode: ['pc'],
          pcDemo: 'lazy'
        },
        {
          name: 'node-click',
          type: '(data, node, vm)=>void',
          defaultValue: '',
          desc: {
            'zh-CN': '点击节点后的事件。 <br>参数说明：{data: 节点数据,node: 节点状态信息（包括数据）,vm: 组件实例}',
            'en-US':
              'The event after clicking a node. <br> Parameter description: {data: node data,node: node status information (including data),vm: component instance}'
          },
          mode: ['pc'],
          pcDemo: 'basic-usage'
        },
        {
          name: 'node-collapse',
          type: '(data, node, vm)=>void',
          defaultValue: '',
          desc: {
            'zh-CN': '收缩节点后的事件<br>参数说明：{data: 节点数据,node: 节点状态信息（包括数据）,vm: 当前组件实例}',
            'en-US':
              'Events after a node is shrunk <br> Parameter Description: {data: node data,node: node status information (including data),vm: current component instance}'
          },
          mode: ['pc'],
          pcDemo: 'expand-control'
        },
        {
          name: 'node-contextmenu',
          type: '(event, data, node, vm)=>void',
          defaultValue: '',
          desc: {
            'zh-CN':
              '当某一节点被鼠标右键点击时会触发该事件;<br>参数说明：{event:原生事件,data: 节点数据,node: 节点状态信息（包括数据）,vm: 组件实例}',
            'en-US':
              'This event is triggered when a node is clicked by the right mouse button. <br> Parameter description: {event: native event,data: node data,node state information (including data),vm: component instance}'
          },
          mode: ['pc'],
          pcDemo: 'contextmenu'
        },
        {
          name: 'node-drag-end',
          type: '(srcNode, targetNode, dropType, event)=>void',
          defaultValue: '',
          desc: {
            'zh-CN':
              '拖拽结束时（可能未成功）触发的事件;<br>参数说明：{srcNode: 拖拽节点,targetNode: 目标节点,dropType: 拖拽类型, (before/after/inner/none),event: 原生事件}',
            'en-US':
              'An event triggered at the end of a (possibly unsuccessful) drag; <br> Parameter description: {srcNode: drag node,targetNode: target node,dropType: drag type, (before/after/inner/none),event: native event}'
          },
          mode: ['pc'],
          pcDemo: 'drag'
        },
        {
          name: 'node-drag-enter',
          type: '(srcNode, targetNode, event)=>void',
          defaultValue: '',
          desc: {
            'zh-CN':
              '拖拽进入其他节点时触发的事件;<br>参数说明：{srcNode: 拖拽节点,targetNode: 目标节点,event: 原生事件}',
            'en-US':
              'An event triggered when dragging to another node; <br> Parameter description: {srcNode: drag node,targetNode: target node,event: native event}'
          },
          mode: ['pc'],
          pcDemo: 'drag'
        },
        {
          name: 'node-drag-leave',
          type: '(srcNode, targetNode, event)=>void',
          defaultValue: '',
          desc: {
            'zh-CN':
              '拖拽离开某个节点时触发的事件;<br>参数说明：{srcNode: 拖拽节点,targetNode: 目标节点,event: 原生事件}',
            'en-US':
              'An event that is triggered when you drag and drop away from a node; <br> Parameter description: {srcNode: drag node,targetNode: target node,event: native event}'
          },
          mode: ['pc'],
          pcDemo: 'drag'
        },
        {
          name: 'node-drag-over',
          type: '(srcNode, targetNode, event)=>void',
          defaultValue: '',
          desc: {
            'zh-CN': '在拖拽节点时触发的事件;<br>参数说明：{srcNode: 拖拽节点,targetNode: 目标节点,event: 原生事件}',
            'en-US':
              'An event that is triggered when a node is dragged; <br> Parameter description: {srcNode: drag node,targetNode: target node,event: native event}'
          },
          mode: ['pc'],
          pcDemo: 'drag'
        },
        {
          name: 'node-drag-start',
          type: '(node, event)=>void',
          defaultValue: '',
          desc: {
            'zh-CN': '节点开始拖拽时触发的事件;<br>参数说明：{node: 拖拽节点，event: 原生事件}',
            'en-US':
              'The event triggered when the node starts dragging; <br> Parameter description: {node: drags a node, event: native event}'
          },
          mode: ['pc'],
          pcDemo: 'drag'
        },
        {
          name: 'node-drop',
          type: '(srcNode, targetNode, dropType, event)=>void',
          defaultValue: '',
          desc: {
            'zh-CN':
              '拖拽成功完成时触发的事件;<br>参数说明：{srcNode: 拖拽节点,targetNode: 目标节点,dropType: 拖拽类型, (before/after/inner/none),event: 原生事件}',
            'en-US':
              'Drag-and-drop events triggered upon successful completion; <br> Parameter description: {srcNode: drag node,targetNode: target node,dropType: drag type, (before/after/inner/none),event: native event}'
          },
          mode: ['pc'],
          pcDemo: 'drag'
        },
        {
          name: 'node-expand',
          type: '(data, node, vm)=>void',
          defaultValue: '',
          desc: {
            'zh-CN': '展开节点后的事件。<br>参数说明：{data: 节点数据,node: 节点状态信息（包括数据,vm: 当前组件实例}',
            'en-US':
              'Events after expanding a node. <br> Parameter description: {data: node data,node: node status information (including data,vm: current component instance)}'
          },
          mode: ['pc'],
          pcDemo: 'expand-control'
        },
        {
          name: 'open-edit',
          type: '()=>void',
          defaultValue: '',
          desc: {
            'zh-CN': '进入编辑的事件',
            'en-US': 'Open Edited Events'
          },
          mode: ['pc'],
          pcDemo: 'edit-control'
        },
        {
          name: 'save-edit',
          type: '(changedData, finalData)=>void',
          defaultValue: '',
          desc: {
            'zh-CN': '保存编辑的事件',
            'en-US': 'Save Edited Events'
          },
          mode: ['pc'],
          pcDemo: 'edit-control'
        }
      ],
      methods: [
        {
          name: 'addNode',
          type: '(node:object) => void',
          defaultValue: '',
          desc: {
            'zh-CN': '在指定的节点对象中，添加一个子节点',
            'en-US': 'In the specified node object, adds a child node'
          },
          mode: ['pc'],
          pcDemo: 'edit'
        },
        {
          name: 'append',
          type: '(newData:object, targetNodeOrTargetKey: object | string) => void',
          defaultValue: '',
          desc: {
            'zh-CN':
              '为一个节点追加一个子节点，且位于其它子节点的最上方。<br>参数中的目标节点可以是节点数据或节点的key',
            'en-US':
              'Appends a child node to a node, on top of the other children. The target node in the <br> parameter can be the node data or the key of the node'
          },
          mode: ['pc'],
          pcDemo: 'node-op'
        },
        {
          name: 'closeEdit',
          type: '() => void',
          defaultValue: '',
          desc: {
            'zh-CN': '组件退出编辑状态',
            'en-US': 'The component exits the editing state'
          },
          mode: ['pc'],
          pcDemo: 'edit'
        },
        {
          name: 'closeMenu',
          type: '() => void',
          defaultValue: '',
          desc: {
            'zh-CN': '关闭节点的自定义菜单',
            'en-US': 'Close the custom menu of the node'
          },
          mode: ['pc'],
          pcDemo: 'contextmenu'
        },
        {
          name: 'editNode',
          type: '(node:object) => void',
          defaultValue: '',
          desc: {
            'zh-CN': '让指定的节点对象进入编辑状态',
            'en-US': 'Puts the specified node object in the edit state'
          },
          mode: ['pc'],
          pcDemo: 'edit'
        },
        {
          name: 'expandAllNodes',
          type: '(isExpand:boolean) => void',
          defaultValue: '',
          desc: {
            'zh-CN': '展开或收起全部节点',
            'en-US': 'Expand or collapse all nodes'
          },
          mode: ['pc'],
          pcDemo: 'expand-control'
        },
        {
          name: 'filter',
          type: '(value:string) => void',
          defaultValue: '',
          desc: {
            'zh-CN': '触发树节点进行筛选操作',
            'en-US': 'The tree node is triggered for filtering operations'
          },
          mode: ['pc'],
          pcDemo: 'filter-view'
        },
        {
          name: 'getCheckedKeys',
          type: '(leafOnly:boolean) => string[]',
          defaultValue: '',
          desc: {
            'zh-CN': '返回目前被选中的节点的 key 所组成的数组。当参数：leafOnly 为true时，只返回被选中的叶子节点。',
            'en-US':
              'Returns an array of keys for the currently selected node. If the parameter: leafOnly is true, only the selected leaf nodes are returned.'
          },
          mode: ['pc'],
          pcDemo: 'check-op'
        },
        {
          name: 'getCheckedNodes',
          type: '(leafOnly:boolean, includeHalfChecked:boolean) => object[]',
          defaultValue: '',
          desc: {
            'zh-CN': '返回目前被选中的节点所组成的数组。',
            'en-US': 'Returns an array of currently selected nodes'
          },
          mode: ['pc'],
          pcDemo: 'check-op'
        },
        {
          name: 'getCurrentKey',
          type: '() => string',
          defaultValue: '',
          desc: {
            'zh-CN': '获取当前被选中节点的 key',
            'en-US': 'Gets the key of the currently selected node'
          },
          mode: ['pc'],
          pcDemo: 'node-hl'
        },
        {
          name: 'getCurrentNode',
          type: '() => data',
          defaultValue: '',
          desc: {
            'zh-CN': '获得当前的选中的节点数据，若没有节点被选中则返回 null',
            'en-US': 'Gets the current selected node data, or null if no node is selected'
          },
          mode: ['pc'],
          pcDemo: 'node-hl'
        },
        {
          name: 'getHalfCheckedKeys',
          type: '() => result',
          defaultValue: '',
          desc: {
            'zh-CN': '返回目前半选中的节点的 key 所组成的数组',
            'en-US': 'Returns an array of keys for the currently semi-selected node'
          },
          mode: ['pc'],
          pcDemo: 'check-op'
        },
        {
          name: 'getHalfCheckedNodes',
          type: '() => object[]',
          defaultValue: '',
          desc: {
            'zh-CN': '返回目前半选中的节点所组成的数组',
            'en-US': 'Returns an array of currently half-selected nodes.'
          },
          mode: ['pc'],
          pcDemo: 'check-op'
        },
        {
          name: 'getNode',
          type: '(data: string | object) => node',
          defaultValue: '',
          desc: {
            'zh-CN': '通过 "节点数据" 或者 "节点的key", 获得 Tree 组件中的 node 节点对象',
            'en-US': 'Obtain the node node object in the Tree component using Node Data or Node key'
          },
          mode: ['pc'],
          pcDemo: 'node-hl'
        },
        {
          name: 'getNodeKey',
          type: '(node:object) => number',
          defaultValue: '',
          desc: {
            'zh-CN': '查询节点对象的内部唯一id',
            'en-US': 'Query the unique internal id of a node object'
          },
          mode: ['pc'],
          pcDemo: 'node-hl'
        },
        {
          name: 'getNodePath',
          type: '(key:string) => object[]',
          defaultValue: '',
          desc: {
            'zh-CN': '通过节点的id, 返回整个路径上节点数据的数组',
            'en-US': 'Returns an array of node data along the entire path, via the node id'
          },
          mode: ['pc'],
          pcDemo: 'node-hl'
        },
        {
          name: 'insertAfter',
          type: '(newData:object, targetNodeOrTargetKey: object | string) => void',
          defaultValue: '',
          desc: {
            'zh-CN': '在一个节点的后面增加一个节点',
            'en-US': 'Add a node after a node'
          },
          mode: ['pc'],
          pcDemo: 'node-op'
        },
        {
          name: 'insertBefore',
          type: '(newData:object, targetNodeOrTargetKey: object | string) => void',
          defaultValue: '',
          desc: {
            'zh-CN': '在一个节点的前面增加一个节点',
            'en-US': 'Add a node before a tree node.'
          },
          mode: ['pc'],
          pcDemo: 'node-op'
        },
        {
          name: 'openEdit',
          type: '() => void',
          defaultValue: '',
          desc: {
            'zh-CN': '组件进入编辑状态',
            'en-US': 'The component enters the edit state'
          },
          mode: ['pc'],
          pcDemo: 'edit'
        },
        {
          name: 'remove',
          type: '(targetNodeOrTargetKey: object | string, isSaveChildNode :boolean ) => void',
          defaultValue: '',
          desc: {
            'zh-CN': '删除节点。当参数：isSaveChildNode为true时，当前节点的子元素上移至删除节点的父节点中去。',
            'en-US':
              'Delete a node. When isSaveChildNode is true, the child elements of the current node are moved up to the parent node of the deleted node.'
          },
          mode: ['pc'],
          pcDemo: 'node-op'
        },
        {
          name: 'saveEdit',
          type: '() => object[]',
          defaultValue: '',
          desc: {
            'zh-CN': '返回组件编辑状态的值',
            'en-US': "Returns the value of the component's edit status"
          },
          mode: ['pc'],
          pcDemo: 'edit'
        },
        {
          name: 'saveNode',
          type: '() => void',
          defaultValue: '',
          desc: {
            'zh-CN': '正在进行编辑的节点保存并退出编辑状态',
            'en-US': 'The node being edited is saved and exits the editing state'
          },
          mode: ['pc'],
          pcDemo: 'edit'
        },
        {
          name: 'setAddDisabledKeys',
          type: '(keys: string[]) => void',
          defaultValue: '',
          desc: {
            'zh-CN': '设置禁止添加的节点 key 值列表',
            'en-US': 'Sets the list of key values of nodes that cannot be added.'
          },
          mode: ['pc'],
          pcDemo: 'edit-control'
        },
        {
          name: 'setChecked',
          type: '( nodeOrKey: object|string,checked:boolean,deep:boolean) => void',
          defaultValue: '',
          desc: {
            'zh-CN': '通过节点或节点的key,设置它的勾选状态',
            'en-US': 'Set the checked status of the node or node by its key'
          },
          mode: ['pc'],
          pcDemo: 'check-op'
        },
        {
          name: 'setCheckedByNodeKey',
          type: '(key:string, checked:boolean) => void',
          defaultValue: '',
          desc: {
            'zh-CN': '通过节点的key, 设置它为勾选或不勾选',
            'en-US': "Through the node's key, set it to checked or unchecked"
          },
          mode: ['pc'],
          pcDemo: 'check-op'
        },
        {
          name: 'setCheckedKeys',
          type: '(keys:string[], leafOnly:boolean) => void',
          defaultValue: '',
          desc: {
            'zh-CN': '通过节点的key,设置一组节点为勾选状态',
            'en-US': 'You can set a group of nodes to the selected state by using the node key'
          },
          mode: ['pc'],
          pcDemo: 'check-op'
        },
        {
          name: 'setCheckedNodes',
          type: '( nodeArr: object[], leafOnly:boolean) => void',
          defaultValue: '',
          desc: {
            'zh-CN': '通过节点数据，设置一组节点为勾选状态',
            'en-US': 'Set a group of nodes to the selected state based on node data'
          },
          mode: ['pc'],
          pcDemo: 'check-op'
        },
        {
          name: 'setCurrentKey',
          type: '(key:string) => void',
          defaultValue: '',
          desc: {
            'zh-CN': '通过 key 设置某个节点的当前选中状态',
            'en-US': 'Use key to set the selected status of a node'
          },
          mode: ['pc'],
          pcDemo: 'node-op'
        },
        {
          name: 'setCurrentNode',
          type: '(data:object) => void',
          defaultValue: '',
          desc: {
            'zh-CN': '通过节点数据， 设置某个节点的当前选中状态',
            'en-US': 'This section describes how to set the selected status of a node based on node data'
          },
          mode: ['pc'],
          pcDemo: 'node-op'
        },
        {
          name: 'setCurrentRadio',
          type: '() => void',
          defaultValue: '',
          desc: {
            'zh-CN': '在单选模式下，设置组件实例的default-checked-keys 的第一项为勾选值',
            'en-US':
              "In radio mode, set the first item of the component instance's default-checked keys to the checked value"
          },
          mode: ['pc'],
          pcDemo: 'radio'
        },
        {
          name: 'setDeleteDisabledKeys',
          type: '(keys: string[]) => void',
          defaultValue: '',
          desc: {
            'zh-CN': '设置禁止删除的节点 key 值列表',
            'en-US': 'Sets the list of key values of nodes that cannot be delete.'
          },
          mode: ['pc'],
          pcDemo: 'edit-control'
        },
        {
          name: 'setEditDisabledKeys',
          type: '(keys: string[]) => void',
          defaultValue: '',
          desc: {
            'zh-CN': '设置禁止编辑的节点 key 值列表',
            'en-US': 'Sets the list of key values of nodes that cannot be edit.'
          },
          mode: ['pc'],
          pcDemo: 'edit-control'
        },
        {
          name: 'updateKeyChildren',
          type: '(key, children: object[]) => void',
          defaultValue: '',
          desc: {
            'zh-CN': '更新指定节点的所有子元素',
            'en-US': 'Updates all child elements of the specified node'
          },
          mode: ['pc'],
          pcDemo: 'node-op'
        }
      ],
      slots: [
        {
          name: 'contextmenu',
          defaultValue: '',
          desc: {
            'zh-CN': '自定义树节点的右键菜单内容，插槽上下文数据为 { node }',
            'en-US': 'Custom tree node right-click menu content, slot context data is {node}'
          },
          mode: ['pc'],
          pcDemo: 'contextmenu'
        },
        {
          name: 'default',
          defaultValue: '',
          desc: {
            'zh-CN': '自定义树节点的内容，插槽上下文数据为 { node, data }',
            'en-US': 'Custom tree node content, slot context data is {node, data}'
          },
          mode: ['pc'],
          pcDemo: 'slot'
        },
        {
          name: 'empty',
          defaultValue: '',
          desc: {
            'zh-CN': '自定义空数据的元素',
            'en-US': 'Custom elements for empty data'
          },
          mode: ['pc'],
          pcDemo: 'slot'
        },
        {
          name: 'operation',
          defaultValue: '',
          desc: {
            'zh-CN': '节点内容靠右对齐的元素，插槽上下文数据为 { node }',
            'en-US': 'node content right-justified element, slot context data is {node}'
          },
          mode: ['pc'],
          pcDemo: 'slot'
        },
        {
          name: 'prefix',
          defaultValue: '',
          desc: {
            'zh-CN': '节点内容前置元素，插槽上下文数据为 { node }',
            'en-US': 'node content prefix element, slot context data is {node}'
          },
          mode: ['pc'],
          pcDemo: 'slot'
        },
        {
          name: 'suffix',
          defaultValue: '',
          desc: {
            'zh-CN': '节点内容后置元素，插槽上下文数据为 { node }',
            'en-US': 'node content post element, slot context data is {node}'
          },
          mode: ['pc'],
          pcDemo: 'slot'
        },
        {
          name: 'switch-text',
          defaultValue: '',
          desc: {
            'zh-CN': '在严格模式显示自动勾选子节点的功能时，自定义开关右侧的内容',
            'en-US':
              'When the function of automatically selecting subnodes is displayed in strict mode, the content on the right of the customized switch is displayed.'
          },
          mode: ['pc'],
          pcDemo: 'other'
        }
      ]
    }
  ]
}
