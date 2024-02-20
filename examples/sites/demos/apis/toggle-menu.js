export default {
  mode: ['pc'],
  apis: [
    {
      name: 'toggle-menu',
      type: 'component',
      props: [
        {
          name: 'automatic-filtering',
          type: 'boolean',
          defaultValue: '',
          desc: {
            'zh-CN': '输入框输入内容时是否自动过滤内容，默认是 true',
            'en-US':
              'Whether to automatically filter content when you enter content in the text box. The default value is true'
          },
          mode: ['pc'],
          pcDemo: 'automatic-filtering'
        },
        {
          name: 'data',
          type: 'Array',
          defaultValue: '',
          desc: {
            'zh-CN': '设置收缩菜单的数据',
            'en-US': 'Set the data of the collapsed menu'
          },
          mode: ['pc'],
          pcDemo: 'basic-usage'
        },
        {
          name: 'default-expand-all',
          type: 'boolean',
          defaultValue: '',
          desc: {
            'zh-CN': '设置菜单默认是否展开所有节点，默认为 false',
            'en-US': 'Whether to expand all nodes in the menu by default. The default value is false'
          },
          mode: ['pc'],
          pcDemo: 'default-expand-all'
        },
        {
          name: 'draggable',
          type: 'boolean',
          defaultValue: '',
          desc: {
            'zh-CN': '设置是否开启拖拽节点的功能，默认值为false',
            'en-US': 'Whether to enable the node drag function. The default value is false'
          },
          mode: ['pc'],
          pcDemo: 'draggable'
        },
        {
          name: 'ellipsis',
          type: 'boolean',
          defaultValue: '',
          desc: {
            'zh-CN': '菜单内容超长时省略显示，默认为 false',
            'en-US': 'Omitted if the menu content is too long. The default value is false'
          },
          mode: ['pc'],
          pcDemo: 'draggable'
        },
        {
          name: 'expand-on-click-node',
          type: 'boolean',
          defaultValue: '',
          desc: {
            'zh-CN': '设置是否可以通过点击节点展开/收起菜单，默认为 false',
            'en-US': 'Whether to expand or collapse menus by clicking a node. The default value is false'
          },
          mode: ['pc'],
          pcDemo: 'default-expand-all'
        },
        {
          name: 'get-menu-data-async',
          type: 'Function',
          defaultValue: '',
          desc: {
            'zh-CN': '自定义菜单数据服务,返回异步数据,需返回Promise对象',
            'en-US': 'Custom menu data service, returns asynchronous data, requires a Promise object to be returned'
          },
          mode: ['pc'],
          pcDemo: 'get-menu-data-aync'
        },
        {
          name: 'get-menu-data-sync',
          type: 'Function',
          defaultValue: '',
          desc: {
            'zh-CN':
              '自定义菜单数据服务,直接返回数据（deprecated v3.4.0废弃, v3.16.0移除；移除原因：如果是同步数据则和:data功能重复）',
            'en-US':
              'Customized menu data service, directly returning data (deprecated v3.4.0 discarded, v3.16.0 removed; reason for removal: if it is synchronized data, it is duplicated with the: data function)'
          },
          mode: ['pc'],
          pcDemo: 'get-menu-data-sync'
        },
        {
          name: 'icon',
          type: 'object',
          defaultValue: '',
          desc: {
            'zh-CN': '自定义菜单左侧图标',
            'en-US': 'Customize the icon on the left of the menu'
          },
          mode: ['pc'],
          pcDemo: 'custom-icon'
        },
        {
          name: 'placeholder',
          type: 'string',
          defaultValue: '',
          desc: {
            'zh-CN': '输入框占位符',
            'en-US': 'Placeholder in the text box'
          },
          mode: ['pc'],
          pcDemo: 'show-filter'
        },
        {
          name: 'props',
          type: 'object',
          defaultValue: "该属性的默认值为 {children: 'children',label: 'label',disabled: 'disabled'}",
          desc: {
            'zh-CN': '配置数据选项的映射字段名称',
            'en-US': 'Configuration data option mapping field name'
          },
          mode: ['pc'],
          pcDemo: 'toggle-props'
        },
        {
          name: 'show-filter',
          type: 'boolean',
          defaultValue: '',
          desc: {
            'zh-CN': '设置是否展示过滤搜索框，默认为 `true`',
            'en-US': 'Specifies whether to display the search box. The default value is true'
          },
          mode: ['pc'],
          pcDemo: 'show-filter'
        },
        {
          name: 'wrap',
          type: 'boolean',
          defaultValue: '',
          desc: {
            'zh-CN': '菜单内容超长时换行显示，默认为 false',
            'en-US': 'The menu content is displayed in a new line when it is too long. The default value is false'
          },
          mode: ['pc'],
          pcDemo: 'show-filter'
        }
      ],
      events: [
        {
          name: 'node-click',
          type: 'Function(arg1,arg2)',
          defaultValue: '',
          desc: {
            'zh-CN':
              '点击节点后的事件。;点击节点后触发的回调函数;//参数arg1:\n{children: 点击节点的子节点, id: 点击节点的id ,label: 点击节点的title} \n//参数arg2:\n object 当前点击节点的数据信息对象',
            'en-US':
              'Indicates that a node is clicked. ;Callback function triggered after a node is clicked. //Parameter arg1:\n{children: child node of the clicked node, id: ID of the clicked node, label: title of the clicked node} \n//Parameter arg2:\n object Data information object of the currently clicked node'
          },
          mode: ['pc'],
          pcDemo: 'node-click'
        },
        {
          name: 'node-collapse',
          type: 'Function(arg1,arg2)',
          defaultValue: '',
          desc: {
            'zh-CN':
              '收缩节点后的事件。;节点被关闭时触发的事件;//参数arg1:object \n{children: 点击节点的子节点,id: 点击节点的id,label: 点击节点的title}\n//参数arg2:object 当前点击节点的数据信息对象',
            'en-US':
              'Event after the node is scaled in. ; Event triggered when a node is shut down; //Parameter arg1:object \n{children: child node of the clicked node, id: ID of the clicked node, label: title of the clicked node}\n//Parameter arg2:object Data information object of the currently clicked node'
          },
          mode: ['pc'],
          pcDemo: 'node-collapse'
        },
        {
          name: 'node-drag-end',
          type: 'Function(arg1,arg2,arg3,arg4)',
          defaultValue: '',
          desc: {
            'zh-CN':
              "拖拽结束时（r可能未成功）触发的事件;拖拽成功完成时触发的事件;//参数\narg1: object当前拖拽节点的数据信息对象\narg2: object当前点击节点拖拽后位置的节点数据信息对象\narg3: 拖拽的类型，如：'inner'\narg4:event",
            'en-US':
              "Event triggered when dragging ends (r may not succeed). Event triggered when the drag is successfully completed; / / Parameter \narg1: object Data information object of the current node\narg2: object Data information object of the current node after the node is dragged\narg3: Drag type, for example,'inner'\narg4:event"
          },
          mode: ['pc'],
          pcDemo: 'drag-events'
        },
        {
          name: 'node-drag-enter',
          type: 'Function(arg1,arg2)',
          defaultValue: '',
          desc: {
            'zh-CN':
              '拖拽进入其他节点时触发的事件;拖拽进入其他节点时触发的事件;//参数\narg1:object 当前拖拽节点的数据信息对象\narg2: object 当前点击节点拖拽后位置的节点数据信息对象',
            'en-US':
              'This event is triggered when a user drags a node to another node. Event triggered when a user drags a node to another node. / / Parameter \narg1: object Data information object of the current node \narg2: object Data information object of the current node after the node is dragged'
          },
          mode: ['pc'],
          pcDemo: 'drag-events'
        },
        {
          name: 'node-drag-leave',
          type: 'Function(arg1,arg2)',
          defaultValue: '',
          desc: {
            'zh-CN':
              '拖拽离开某个节点时触发的事件;拖拽离开某个节点时触发的事件;//参数\narg1:object 当前拖拽节点的数据信息对象\narg2: object 当前拖出后节点的数据信息对象',
            'en-US':
              'This event is triggered when a user drags a node. Event triggered when a user drags a node. / / Parameter \narg1:object Data information object of the currently dragged node \narg2: object Data information object of the currently dragged node'
          },
          mode: ['pc'],
          pcDemo: 'drag-events'
        },
        {
          name: 'node-drag-over',
          type: 'Function(arg1,arg2,arg3)',
          defaultValue: '',
          desc: {
            'zh-CN':
              '在拖拽节点时触发的事件（类似浏览器的 mouseover 事件）;在拖拽节点时触发的事件（类似浏览器的 mouseover 事件）;//参数\narg1:object 当前拖拽节点的数据信息对象\narg2:object 当前拖拽节点拖拽时节点的数据信息对象\n arg3:event',
            'en-US':
              'Event triggered when a node is dragged (similar to the mouseover event of the browser); Event triggered when a node is dragged (similar to the mouseover event of the browser) / / Parameter \narg1:object Data information object of the current dragged node \narg2:object Data information object of the current dragged node \n arg3:event'
          },
          mode: ['pc'],
          pcDemo: 'drag-events'
        },
        {
          name: 'node-drag-start',
          type: 'Function(arg1,arg2)',
          defaultValue: '',
          desc: {
            'zh-CN':
              '节点开始拖拽时触发的事件。;节点开始拖拽时触发的事件。;//参数: \narg1:object 当前拖拽节点的数据信息对象\narg2:event',
            'en-US':
              'Event triggered when a node starts to be dragged. ;Event triggered when a node starts to be dragged. ; / / Parameters:\narg1:object Data information object of the current node \narg2:event'
          },
          mode: ['pc'],
          pcDemo: 'drag-events'
        },
        {
          name: 'node-drop',
          type: 'Function(arg1,arg2)',
          defaultValue: '',
          desc: {
            'zh-CN':
              '拖放节点后的事件。开启 draggable 属性为 true 有效。;拖放节点后的事件。开启 draggable 属性为 true 有效。;//参数\narg1:object 当前拖拽节点的数据信息对象\n arg2:object 当前点击节点拖拽后的位置节点的数据信息对象\narg3: 拖拽的类型\narg4:event',
            'en-US':
              'Indicates the event after a node is dragged and dropped. This parameter is valid when the draggable attribute is set to true. ; Events after a node is dragged and dropped. This parameter is valid when the draggable attribute is set to true. ; / / Parameter \narg1:object Data information object of the current dragged node \n arg2:object Data information object of the current clicked node after the dragged node \narg3:Drag type \narg4:event'
          },
          mode: ['pc'],
          pcDemo: 'node-drop'
        },
        {
          name: 'node-expand',
          type: 'Function(arg1,arg2,arg3)',
          defaultValue: '',
          desc: {
            'zh-CN':
              '展开节点后的事件。;节点被展开时触发的事件;//参数arg1:\n{children: 点击节点的子节点, id: 点击节点的id, label: 点击节点的title}\n//参数arg2:\nComponent 点击节点的componet对象信息\n//参数arg3:\n{ children: 点击节点的子节点id: 点击节点的id, label: 点击节点的title}',
            'en-US':
              'Event after a node is expanded. ; Event triggered when a node is expanded; / / Parameter arg1:\n{children: child node of the clicked node, id: ID of the clicked node, label: title of the clicked node}\n//Parameter arg2:\nComponent Componet object information of the clicked node\n//Parameter arg3:\n{children: subnode ID of the clicked node: ID of the clicked node, label: Click title} of the node'
          },
          mode: ['pc'],
          pcDemo: 'node-expand'
        }
      ],
      methods: [],
      slots: [
        {
          name: 'node',
          defaultValue: '',
          desc: {
            'zh-CN': '自定义插槽',
            'en-US': 'Custom Slot'
          },
          mode: ['pc'],
          pcDemo: 'toggle-props'
        }
      ]
    }
  ]
}
