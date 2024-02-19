export default {
  mode: ['pc', 'mobile-first'],
  apis: [
    {
      name: 'flowchart',
      type: 'component',
      props: [
        {
          name: 'config',
          type: 'object',
          defaultValue: '',
          desc: {
            'zh-CN': '流程图的配置。',
            'en-US': 'The config of flowchart.'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'basic-usage',
          mfDemo: ''
        },
        {
          name: 'config.align',
          type: 'String',
          defaultValue: '',
          desc: {
            'zh-CN': '在卡片模式下，节点内部文字的对齐方式，包括居左 left、居中 center',
            'en-US': ''
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'config.colors',
          type: 'Object',
          defaultValue: '',
          desc: {
            'zh-CN': '节点状态颜色映射对象',
            'en-US': ''
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'config.extraWidth',
          type: 'Number',
          defaultValue: '',
          desc: {
            'zh-CN': '在多端 dot 模式下，图形预留宽度，用于图形最小宽度计算，适当修改保证图形宽度不被过分挤压',
            'en-US': ''
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'config.gap',
          type: 'Number',
          defaultValue: '',
          desc: {
            'zh-CN': '图形节点在垂直方向上的最小间距',
            'en-US': ''
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'config.height',
          type: 'Number',
          defaultValue: '',
          desc: {
            'zh-CN': '图形的高度。在多端 dot 模式下，如果高度小于图形计算高度，则使用图形计算高度',
            'en-US': ''
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'config.linkEndMinus',
          type: 'Number',
          defaultValue: '',
          desc: {
            'zh-CN': '在 dot 点模式下，连线末端在连线方向上的偏移量，可以用来调整连线末端位置',
            'en-US': ''
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'config.nodeLayout',
          type: 'String',
          defaultValue: '',
          desc: {
            'zh-CN': '在 dot 点模式下，节点内部布局，Label在节点下部居中 up-down、在节点右侧 left-right',
            'en-US': ''
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'config.nodeSize',
          type: 'String',
          defaultValue: '',
          desc: {
            'zh-CN': '在 dot 点模式下，节点图标尺寸，mini/small/medium',
            'en-US': ''
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'config.ongoingBackgroundColor',
          type: 'String',
          defaultValue: '',
          desc: {
            'zh-CN': '在卡片模式下，状态为进行中的节点的背景色',
            'en-US': ''
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'config.padding',
          type: 'Number',
          defaultValue: '',
          desc: {
            'zh-CN': '图形的内边距。在 dot 模式自适应宽度时或者自定义布局时失效，只参与图形高度的计算',
            'en-US': ''
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'config.popoverPlacement',
          type: 'String',
          defaultValue: '',
          desc: {
            'zh-CN': '在卡片模式下，节点 tooltip 的位置',
            'en-US': ''
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'config.prior',
          type: 'String',
          defaultValue: '',
          desc: {
            'zh-CN': '在内置连线逻辑中使用，图形连线的优先方向，包括水平 horizontal、垂直 vertical',
            'en-US': ''
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'config.showArrow',
          type: 'Boolean',
          defaultValue: '',
          desc: {
            'zh-CN': '在 dot 点模式下，全局设置连线是否显示箭头',
            'en-US': ''
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'config.showOnly',
          type: 'String',
          defaultValue: '',
          desc: {
            'zh-CN': '在 dot 点模式下，节点只显示图标、只显示标题，icon/title',
            'en-US': ''
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'config.status',
          type: 'Object',
          defaultValue: '',
          desc: {
            'zh-CN': '节点状态名称映射对象',
            'en-US': ''
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'config.type',
          type: 'String',
          defaultValue: '',
          desc: {
            'zh-CN': '设置为 dot 开启点模式',
            'en-US': ''
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'config.width',
          type: 'Number',
          defaultValue: '',
          desc: {
            'zh-CN': '图形的宽度。在多端 dot 模式下失效，因为宽度要自适应容器宽度',
            'en-US': ''
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'data',
          type: 'object',
          defaultValue: '',
          desc: {
            'zh-CN': '流程图数据。',
            'en-US': 'The data of flowchart.'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'basic-usage',
          mfDemo: ''
        },
        {
          name: 'data.groups',
          type: 'Array',
          defaultValue: '',
          desc: {
            'zh-CN': '多端 dot 模式下，流程图的分组列表',
            'en-US': ''
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'data.groups[i].fillStyle',
          type: 'String',
          defaultValue: '',
          desc: {
            'zh-CN': '分组的填充颜色',
            'en-US': ''
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'data.groups[i].lineDash',
          type: 'Array',
          defaultValue: '',
          desc: {
            'zh-CN': '分组的边框虚线样式',
            'en-US': ''
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'data.groups[i].nodes',
          type: 'Array',
          defaultValue: '',
          desc: {
            'zh-CN': '分组中的节点名称列表',
            'en-US': ''
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'data.groups[i].padding',
          type: 'Array',
          defaultValue: '',
          desc: {
            'zh-CN': '分组的上下、左右内边距',
            'en-US': ''
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'data.groups[i].strokeStyle',
          type: 'String',
          defaultValue: '',
          desc: {
            'zh-CN': '分组的边框颜色',
            'en-US': ''
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'data.groups[i].title',
          type: 'String',
          defaultValue: '',
          desc: {
            'zh-CN': '分组的名称',
            'en-US': ''
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'data.groups[i].titleClass',
          type: 'String',
          defaultValue: '',
          desc: {
            'zh-CN': '分组的名称样式 token',
            'en-US': ''
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'data.groups[i].titlePosition',
          type: 'String',
          defaultValue: '',
          desc: {
            'zh-CN': '分组的名称位置，支持 top、top-left（顶部中间、顶部居左）',
            'en-US': ''
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'data.links',
          type: 'Array',
          defaultValue: '',
          desc: {
            'zh-CN': '流程图的连线列表',
            'en-US': ''
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'data.links[i].from',
          type: 'String',
          defaultValue: '',
          desc: {
            'zh-CN': '连线起始节点的名称',
            'en-US': ''
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'data.links[i].fromJoint',
          type: 'String',
          defaultValue: '',
          desc: {
            'zh-CN':
              '连线在起始节点的连接点。值可以为 bottom、top、left、right，表示从底部中间、顶部中间、左侧中间、右侧中间；值也可以为变体 bottom-1/2、bottom-2/2，表示从底部左半部分中间、底部右半部分中间；值也可以为变体 bottom-1/3、bottom-2/3、bottom-3/3 等',
            'en-US': ''
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'data.links[i].info',
          type: 'Object',
          defaultValue: '',
          desc: {
            'zh-CN': '连线的详细信息，包括连线的状态、样式等',
            'en-US': ''
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'data.links[i].linkOffset',
          type: 'Number',
          defaultValue: '',
          desc: {
            'zh-CN': '在 dot 点模式下，连线起点在连线方向的偏移量，可以用来调整连线起点位置',
            'en-US': ''
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'data.links[i].showArrow',
          type: 'Boolean',
          defaultValue: '',
          desc: {
            'zh-CN': '在 dot 点模式下，单独设置连线是否显示箭头',
            'en-US': ''
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'data.links[i].to',
          type: 'String',
          defaultValue: '',
          desc: {
            'zh-CN': '连线结束节点的名称',
            'en-US': ''
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'data.links[i].toJoint',
          type: 'String',
          defaultValue: '',
          desc: {
            'zh-CN':
              '连线在结束节点的连接点。值可以为 bottom、top、left、right，表示从底部中间、顶部中间、左侧中间、右侧中间；值也可以为变体 bottom-1/2、bottom-2/2，表示从底部左半部分中间、底部右半部分中间；值也可以为变体 bottom-1/3、bottom-2/3、bottom-3/3 等',
            'en-US': ''
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'data.nodes',
          type: 'Array',
          defaultValue: '',
          desc: {
            'zh-CN': '流程图的节点列表',
            'en-US': ''
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'data.nodes[i].hidden',
          type: 'Boolean',
          defaultValue: '',
          desc: {
            'zh-CN': '节点是否隐藏',
            'en-US': ''
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'data.nodes[i].info',
          type: 'Object',
          defaultValue: '',
          desc: {
            'zh-CN': '节点的详细信息，包括节点所在的行列、宽高、形状和其它信息',
            'en-US': ''
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'data.nodes[i].name',
          type: 'String',
          defaultValue: '',
          desc: {
            'zh-CN': '节点的名称，用于保证节点的唯一性',
            'en-US': ''
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'fetch',
          type: 'function',
          defaultValue: '',
          desc: {
            'zh-CN': '多端 dot 异步流程图 AsyncFlowchart 数据和配置的加载方法。',
            'en-US': 'Multi-terminal dot asynchronous flow chart AsyncFlowchart data and configuration loading method.'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'basic-usage',
          mfDemo: ''
        }
      ],
      events: [
        {
          name: 'click-blank',
          type: '',
          defaultValue: '',
          desc: {
            'zh-CN': '点击空白区域时触发。',
            'en-US': 'Triggered when a blank area is clicked.'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'basic-usage',
          mfDemo: ''
        },
        {
          name: 'click-group',
          type: '',
          defaultValue: '',
          desc: {
            'zh-CN': '点击分组时触发。',
            'en-US': 'Triggered when group is clicked.'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'basic-usage',
          mfDemo: ''
        },
        {
          name: 'click-link',
          type: '',
          defaultValue: '',
          desc: {
            'zh-CN': '点击连线时触发。',
            'en-US': 'Triggered when a connection is clicked.'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'basic-usage',
          mfDemo: ''
        },
        {
          name: 'click-node',
          type: '',
          defaultValue: '',
          desc: {
            'zh-CN': '点击节点时触发。',
            'en-US': 'Triggered when a node is clicked.'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'basic-usage',
          mfDemo: ''
        }
      ],
      methods: [
        {
          name: 'createConfig',
          type: '',
          defaultValue: '',
          desc: {
            'zh-CN': '流程图组件 Flowchart 的静态方法，用于创建图形基础配置。',
            'en-US': 'Static method of flowchart component Flowchart, used to create basic graphics configuration.'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'basic-usage',
          mfDemo: ''
        },
        {
          name: 'layout',
          type: '',
          defaultValue: '',
          desc: {
            'zh-CN':
              '多端 dot 点模式下用于处理图形的自定义布局，设置在全局配置上，参数为图形宽、高和节点列表，期望获取每个节点的位置。',
            'en-US':
              'Custom layout for processing graphs in multi-end dot point mode, set in the global configuration, the parameters are graph width, height and node list, and it is expected to obtain the position of each node..'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'basic-usage',
          mfDemo: ''
        },
        {
          name: 'linkPath',
          type: '',
          defaultValue: '',
          desc: {
            'zh-CN':
              '多端 dot 点模式下用于处理图形连线的自定义布局，设置在全局配置上，参数为连线和节点列表，期望获取连线的路径、中点和渐变。连线路径通过水平垂直折线的拐点表示。',
            'en-US':
              'A custom layout used to handle graphics connections in multi-terminal dot point mode. It is set in the global configuration. The parameters are the connection line and node list. It is expected to obtain the path, midpoint and gradient of the connection line. The connection path is represented by the inflection points of horizontal and vertical polylines.'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'basic-usage',
          mfDemo: ''
        },
        {
          name: 'linkPath[i].method({ afterLink, afterNodes, from, to, api })',
          type: '',
          defaultValue: '',
          desc: {
            'zh-CN': 'afterLink当前连线，afterNodes节点列表，from起点矩形，to终点矩形，api处理矩形的方法集',
            'en-US': ''
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'Node',
          type: '',
          defaultValue: '',
          desc: {
            'zh-CN': '多端 dot 点模式下内置的节点组件。',
            'en-US': 'Built-in node component in multi-terminal dot mode.'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'basic-usage',
          mfDemo: ''
        },
        {
          name: 'refresh',
          type: '',
          defaultValue: '',
          desc: {
            'zh-CN': '在修改配置或数据之后，用于刷新多端异步流程图 AsyncFlowchart 实例的图形。',
            'en-US':
              'Graphics used to refresh a multi-end asynchronous flowchart AsyncFlowchart instance after modifying configuration or data.'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'basic-usage',
          mfDemo: ''
        },
        {
          name: 'renderInner',
          type: '',
          defaultValue: '',
          desc: {
            'zh-CN': '多端流卡片模式下节点的自定义渲染方法，渲染的内容为卡片内部内容，不包括卡片容器。',
            'en-US':
              'Custom rendering method for nodes in multi-stream card mode. The rendered content is the internal content of the card, excluding the card container.'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'basic-usage',
          mfDemo: ''
        },
        {
          name: 'renderOuter',
          type: '',
          defaultValue: '',
          desc: {
            'zh-CN': '多端卡片模式下节点的自定义渲染方法，渲染的内容包括卡片容器。',
            'en-US':
              'Custom rendering method for nodes in multi-terminal card mode. The rendered content includes card containers.'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'basic-usage',
          mfDemo: ''
        },
        {
          name: 'resizeMixin',
          type: '',
          defaultValue: '',
          desc: {
            'zh-CN': '多端 dot 点模式下用于处理图形的水平自适应宽度，后续在点模式的异步流程图中被内置。',
            'en-US':
              'Horizontal adaptive width for processing graphics in multi-terminal dot point mode, which will be built into the asynchronous flow chart in dot mode later.'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'basic-usage',
          mfDemo: ''
        }
      ],
      slots: []
    }
  ]
}
