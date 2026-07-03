export default {
  mode: ['pc', 'mobile-first'],
  apis: [
    {
      name: 'flowchart',
      type: 'component',
      props: [
        {
          name: 'config',
          type: 'IFlowchartConfig',
          defaultValue: '',
          desc: {
            'zh-CN': '流程图的全局配置对象，通过 Flowchart.createConfig() 创建',
            'en-US': 'The global configuration object of the flowchart, created by Flowchart.createConfig()'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'basic-usage',
          mfDemo: 'basic-usage'
        },
        {
          name: 'config.adjustPos',
          type: 'function',
          defaultValue: 'null',
          desc: {
            'zh-CN': '节点位置微调钩子函数，参数为节点对象，返回调整后的 { x, y } 坐标',
            'en-US':
              'PC hook function for fine-tuning node positions, parameter is the node object, returns adjusted { x, y } coordinates'
          },
          mode: ['pc'],
          pcDemo: 'other'
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
          mfDemo: 'horizon'
        },
        {
          name: 'config.anchor',
          type: "'center' | 'left'",
          defaultValue: "'center'",
          desc: {
            'zh-CN': '节点标签的对齐锚点，center 为居中，left 为左对齐',
            'en-US': 'Alignment anchor for PC node labels, center for centered, left for left-aligned'
          },
          mode: ['pc'],
          pcDemo: ''
        },
        {
          name: 'config.background',
          type: 'string',
          defaultValue: "'#fff'",
          desc: {
            'zh-CN': '画布背景颜色',
            'en-US': 'Canvas background color for PC'
          },
          mode: ['pc'],
          pcDemo: 'custom-style'
        },
        {
          name: 'config.checkItemStatus',
          type: 'function',
          defaultValue: 'null',
          desc: {
            'zh-CN': '检查人员列表项状态的回调函数，用于自定义项的显示逻辑',
            'en-US':
              'Callback function to check the status of personnel list items for PC, used for custom item display logic'
          },
          mode: ['pc'],
          pcDemo: 'other'
        },
        {
          name: 'config.colors',
          type: 'Record<number, string>',
          defaultValue: "{ 1: '#1890ff', 2: '#096dd9', 3: '#d9d9d9', 4: '#f5222d' }",
          desc: {
            'zh-CN': '节点状态码与颜色的映射对象，键为状态码，值为颜色字符串',
            'en-US': 'Mapping object of node status codes to colors, key is status code, value is color string'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'custom-style',
          mfDemo: 'horizon'
        },
        {
          name: 'config.cols',
          type: 'number',
          defaultValue: '8',
          desc: {
            'zh-CN': '画布网格的列数，用于节点水平方向的网格定位',
            'en-US': 'Number of columns in the PC canvas grid, used for horizontal grid positioning of nodes'
          },
          mode: ['pc'],
          pcDemo: 'branch-flow'
        },
        {
          name: 'config.condClass',
          type: 'string',
          defaultValue: "''",
          desc: {
            'zh-CN': '多端 dot 点模式下，条件节点（cond 为 true 的连线）的默认 CSS 类名',
            'en-US': 'Default CSS class name for conditional nodes in multi-terminal dot mode'
          },
          mode: ['mobile-first'],
          mfDemo: 'dot-vertical'
        },
        {
          name: 'config.delay',
          type: 'number',
          defaultValue: '10',
          desc: {
            'zh-CN': ' Canvas 绘制动画的延迟时间（毫秒）',
            'en-US': 'Delay time for PC Canvas drawing animation (milliseconds)'
          },
          mode: ['pc'],
          pcDemo: 'dynamic-update'
        },
        {
          name: 'config.drawLink',
          type: 'function',
          defaultValue: 'null',
          desc: {
            'zh-CN': '自定义 Canvas 连线绘制函数，接收 Canvas 上下文和连线数据，用于高级定制连线特效',
            'en-US':
              'Custom Canvas link drawing function for PC, receives Canvas context and link data, used for advanced customization of link effects'
          },
          mode: ['pc'],
          pcDemo: 'custom-link-style'
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
          mfDemo: 'dot-horizon-async'
        },
        {
          name: 'config.font',
          type: 'string',
          defaultValue: '\'12px "Microsoft YaHei"\'',
          desc: {
            'zh-CN': ' Canvas 绘制文字的字体配置',
            'en-US': 'Font configuration for PC Canvas text rendering'
          },
          mode: ['pc'],
          pcDemo: 'custom-style'
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
          mfDemo: 'horizon'
        },
        {
          name: 'config.headSize',
          type: 'number',
          defaultValue: '20',
          desc: {
            'zh-CN': '人员列表中头像的显示尺寸（像素）',
            'en-US': 'Display size of avatars in the PC personnel list (pixels)'
          },
          mode: ['pc'],
          pcDemo: 'person-list'
        },
        {
          name: 'config.headUrl',
          type: 'string',
          defaultValue: "''",
          desc: {
            'zh-CN': '人员列表中默认头像的 URL 地址',
            'en-US': 'URL address of the default avatar in the PC personnel list'
          },
          mode: ['pc'],
          pcDemo: 'other'
        },
        {
          name: 'config.height',
          type: 'Number',
          defaultValue: '420',
          desc: {
            'zh-CN': '图形的高度。在多端 dot 模式下，如果高度小于图形计算高度，则使用图形计算高度',
            'en-US': ''
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'basic-usage',
          mfDemo: 'dot-horizon-async'
        },
        {
          name: 'config.hoverHit',
          type: 'number',
          defaultValue: '3',
          desc: {
            'zh-CN': '连线悬停检测的命中范围（像素），值越大悬停越容易触发',
            'en-US': 'Hit range for PC link hover detection (pixels), larger values make hover easier to trigger'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: '',
          mfDemo: 'holistic-fork'
        },
        {
          name: 'config.iconSize',
          type: 'number',
          defaultValue: '20',
          desc: {
            'zh-CN': '节点图标的尺寸（像素）',
            'en-US': 'Size of the PC node icon (pixels)'
          },
          mode: ['pc'],
          pcDemo: 'custom-style'
        },
        {
          name: 'config.iconSvgSize',
          type: 'number',
          defaultValue: '14',
          desc: {
            'zh-CN': '节点图标内部 SVG 的尺寸（像素）',
            'en-US': 'Size of the SVG inside the PC node icon (pixels)'
          },
          mode: ['pc'],
          pcDemo: 'custom-style'
        },
        {
          name: 'config.iconWrapperSize',
          type: 'number',
          defaultValue: '24',
          desc: {
            'zh-CN': '节点图标外包裹层的尺寸（像素）',
            'en-US': 'Size of the PC node icon wrapper layer (pixels)'
          },
          mode: ['pc'],
          pcDemo: 'custom-style'
        },
        {
          name: 'config.labelDateColor',
          type: 'string',
          defaultValue: "'#999'",
          desc: {
            'zh-CN': '节点标签中日期文字的颜色',
            'en-US': 'Color of the date text in the PC node label'
          },
          mode: ['pc'],
          pcDemo: 'custom-style'
        },
        {
          name: 'config.labelHeight',
          type: 'number',
          defaultValue: '60',
          desc: {
            'zh-CN': '节点标签区域的高度（像素）',
            'en-US': 'Height of the PC node label area (pixels)'
          },
          mode: ['pc'],
          pcDemo: 'custom-style'
        },
        {
          name: 'config.labelSpacing',
          type: 'number',
          defaultValue: '8',
          desc: {
            'zh-CN': '节点图标与标签之间的间距（像素）',
            'en-US': 'Spacing between PC node icon and label (pixels)'
          },
          mode: ['pc'],
          pcDemo: 'custom-style'
        },
        {
          name: 'config.labelWidth',
          type: 'number',
          defaultValue: '80',
          desc: {
            'zh-CN': '节点标签区域的宽度（像素）',
            'en-US': 'Width of the PC node label area (pixels)'
          },
          mode: ['pc'],
          pcDemo: 'custom-style'
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
          mfDemo: 'dot-vertical'
        },
        {
          name: 'config.listBorderColor',
          type: 'string',
          defaultValue: "'#d9d9d9'",
          desc: {
            'zh-CN': '人员列表容器的边框颜色',
            'en-US': 'Border color of the PC personnel list container'
          },
          mode: ['pc'],
          pcDemo: 'person-list'
        },
        {
          name: 'config.listIconColor',
          type: 'string',
          defaultValue: "'#999'",
          desc: {
            'zh-CN': '人员列表中状态图标的颜色',
            'en-US': 'Color of status icons in the PC personnel list'
          },
          mode: ['pc'],
          pcDemo: 'person-list'
        },
        {
          name: 'config.listIconSize',
          type: 'number',
          defaultValue: '20',
          desc: {
            'zh-CN': '人员列表中状态图标的尺寸（像素）',
            'en-US': 'Size of status icons in the PC personnel list (pixels)'
          },
          mode: ['pc'],
          pcDemo: 'slot'
        },
        {
          name: 'config.listThreshold',
          type: 'number',
          defaultValue: '1',
          desc: {
            'zh-CN':
              '当存在createItem用于创建人员列表项，人员列表显示的阈值，当 items数组长度大于此值时显示列表，默认值1。所以当数组长度为1，默认不显示，应该设置成0，才能显示。',
            'en-US':
              'When there is a createItem function for creating personnel list items,the threshold for displaying the personnel list. The list is shown when the length of the items array exceeds this value, with a default value of 1. Therefore, when the array length is 1, the list is not displayed by default. It should be set to 0 to enable display.'
          },
          mode: ['pc'],
          pcDemo: 'dynamic-update'
        },
        {
          name: 'config.listWidth',
          type: 'number',
          defaultValue: '62',
          desc: {
            'zh-CN': '人员列表容器的宽度（像素）',
            'en-US': 'Width of the PC personnel list container (pixels)'
          },
          mode: ['pc'],
          pcDemo: 'slots'
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
          mfDemo: 'dot-vertical'
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
          mfDemo: 'node-size'
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
          mfDemo: 'dot-horizon-async'
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
          mfDemo: 'basic-usage'
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
          mfDemo: 'basic-usage'
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
          mfDemo: 'basic-usage'
        },
        {
          name: 'config.radius',
          type: 'number',
          defaultValue: '4',
          desc: {
            'zh-CN': '节点图标和连线的圆角半径（像素）',
            'en-US': 'Corner radius of PC node icons and links (pixels)'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'custom-style',
          mfDemo: 'link-path'
        },
        {
          name: 'config.renderCond',
          type: 'function',
          defaultValue: 'null',
          desc: {
            'zh-CN':
              '多端 dot 点模式下，条件节点（cond 为 true 的连线）的自定义渲染函数，参数为 (h, afterLink, config)，返回 VNode',
            'en-US':
              'Custom rendering function for conditional nodes in multi-terminal dot mode, parameters are (h, afterLink, config), returns VNode'
          },
          mode: ['mobile-first'],
          mfDemo: ''
        },
        {
          name: 'config.rows',
          type: 'number',
          defaultValue: '8',
          desc: {
            'zh-CN': '画布网格的行数，用于节点垂直方向的网格定位',
            'en-US': 'Number of rows in the PC canvas grid, used for vertical grid positioning of nodes'
          },
          mode: ['pc'],
          pcDemo: 'branch-flow'
        },
        {
          name: 'config.showArrow',
          type: 'boolean',
          defaultValue: '',
          desc: {
            'zh-CN': '在 dot 点模式下，全局设置连线是否显示箭头',
            'en-US': ''
          },
          mode: ['mobile-first'],
          mfDemo: 'dot-horizon'
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
          mfDemo: 'dot-vertical'
        },
        {
          name: 'config.status',
          type: 'Record<number, string>',
          defaultValue: "{ 1: 'complete', 2: 'ongoing', 3: 'pending', 4: 'fail' }",
          desc: {
            'zh-CN': '节点状态码与状态名称的映射对象',
            'en-US': 'Mapping object of node status codes to status names'
          },
          mode: ['mobile-first'],
          mfDemo: 'dot-horizon-async'
        },
        {
          name: 'config.statusComplete',
          type: 'number',
          defaultValue: '1',
          desc: {
            'zh-CN': '表示已完成状态的状态码',
            'en-US': 'Status code representing the completed state for PC'
          },
          mode: ['pc'],
          pcDemo: ''
        },
        {
          name: 'config.statusFail',
          type: 'number',
          defaultValue: '4',
          desc: {
            'zh-CN': '表示失败状态的状态码',
            'en-US': 'Status code representing the failed state for PC'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: ''
        },
        {
          name: 'config.statusOngoing',
          type: 'number',
          defaultValue: '2',
          desc: {
            'zh-CN': '表示进行中状态的状态码',
            'en-US': 'Status code representing the ongoing state for PC'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: ''
        },
        {
          name: 'config.styleHoverLink',
          type: 'function',
          defaultValue: 'null',
          desc: {
            'zh-CN': '自定义悬停时连线样式的函数，接收连线数据，返回样式对象',
            'en-US': 'Function to customize PC hover link style, receives link data, returns style object'
          },
          mode: ['pc'],
          pcDemo: ''
        },
        {
          name: 'config.styleLink',
          type: 'function',
          defaultValue: 'null',
          desc: {
            'zh-CN': '自定义连线样式的函数，接收连线数据，返回样式对象',
            'en-US': 'Function to customize PC link style, receives link data, returns style object'
          },
          mode: ['pc'],
          pcDemo: 'branch-flow'
        },
        {
          name: 'config.thin',
          type: 'boolean',
          defaultValue: 'true',
          desc: {
            'zh-CN': '是否使用细线模式绘制连线；多端 dot 模式下也用于控制 Canvas 缩放比例',
            'en-US':
              'Whether to use thin line mode for drawing links on PC; also used to control Canvas scale ratio in multi-terminal dot mode'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'custom-style',
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
          mfDemo: 'link-path'
        },
        {
          name: 'config.width',
          type: 'Number',
          defaultValue: '1024',
          desc: {
            'zh-CN': '图形的宽度。在多端 dot 模式下失效，因为宽度要自适应容器宽度',
            'en-US': ''
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'basic-usage',
          mfDemo: 'basic-usage'
        },
        {
          name: 'data',
          type: 'IFlowchartData',
          defaultValue: '',
          desc: {
            'zh-CN': '流程图的数据对象，包含节点和连线',
            'en-US': 'Flowchart data object, containing nodes and links'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'basic-usage',
          mfDemo: 'basic-usage'
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
          mfDemo: 'dot-vertical'
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
          mfDemo: 'dot-vertical'
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
          mfDemo: 'dot-vertical'
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
          mfDemo: 'dot-vertical'
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
          mfDemo: 'dot-vertical'
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
          mfDemo: 'dot-vertical'
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
          mfDemo: 'dot-vertical'
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
          mfDemo: 'dot-vertical-async'
        },
        {
          name: 'data.links',
          type: 'IFlowchartLink[]',
          defaultValue: '[]',
          desc: {
            'zh-CN': '流程图的连线数组，通过 Flowchart.createLink() 创建',
            'en-US': 'Array of flowchart links, created by Flowchart.createLink()'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'basic-usage',
          mfDemo: 'basic-usage'
        },
        {
          name: 'data.links[i].cond',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN':
              '多端 dot 点模式下，标记该连线是否为条件连线。为 true 时会在连线上渲染条件节点，显示 info.other.title 文字',
            'en-US':
              'In multi-terminal dot mode, marks whether the link is a conditional link. When true, a conditional node is rendered on the link displaying info.other.title text'
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
          mode: ['pc', 'mobile-first'],
          pcDemo: 'custom-link-style',
          mfDemo: 'basic-usage'
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
          mfDemo: 'basic-usage'
        },
        {
          name: 'data.links[i].info',
          type: 'Object',
          defaultValue: '',
          desc: {
            'zh-CN': '连线的详细信息，包括连线的状态、样式等',
            'en-US': ''
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'custom-link-style',
          mfDemo: 'dot-horizon-async'
        },
        {
          name: 'data.links[i].info.other',
          type: 'object',
          defaultValue: '',
          desc: {
            'zh-CN': '多端 dot 点模式下，连线的扩展信息。cond 为 true 时，other.title 用于显示条件节点的文字内容',
            'en-US':
              'Extended information for the link in multi-terminal dot mode. When cond is true, other.title is used to display the conditional node text'
          },
          mode: ['mobile-first'],
          mfDemo: 'link-path'
        },
        {
          name: 'data.links[i].info.status',
          type: 'number',
          defaultValue: '',
          desc: {
            'zh-CN': '多端连线的状态码，对应 config.status 中的状态',
            'en-US': 'Status code of the PC link, corresponding to the status in config.status'
          },
          mode: ['mobile-first'],
          mfDemo: 'holistic-fork'
        },
        {
          name: 'data.links[i].info.style',
          type: "'solid' | 'dashed' | 'dash'",
          defaultValue: "'solid'",
          desc: {
            'zh-CN': '连线的样式，solid 为实线，dashed/dash 为虚线',
            'en-US': 'Style of the PC link, solid for solid line, dashed/dash for dashed line'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'branch-flow',
          mfDemo: 'dot-horizon-async'
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
          mfDemo: 'dot-vertical'
        },
        {
          name: 'data.links[i].p',
          type: 'string',
          defaultValue: "''",
          desc: {
            'zh-CN': '连线路径的 DSL 字符串，控制连线的走向和拐点，如 "0 r0.5 t1 c r1.5"',
            'en-US':
              'DSL string for PC link path, controls the direction and turning points of the link, e.g., "0 r0.5 t1 c r1.5"'
          },
          mode: ['pc'],
          pcDemo: 'custom-link-style'
        },
        {
          name: 'data.links[i].showArrow',
          type: 'boolean',
          defaultValue: '',
          desc: {
            'zh-CN': '在 dot 点模式下，单独设置连线是否显示箭头',
            'en-US': ''
          },
          mode: ['mobile-first'],
          mfDemo: 'holistic'
        },
        {
          name: 'data.links[i].to',
          type: 'String',
          defaultValue: '',
          desc: {
            'zh-CN': '连线结束节点的名称',
            'en-US': ''
          },
          mode: ['pc'],
          pcDemo: 'custom-link-style'
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
          mfDemo: 'dot-horizon'
        },
        {
          name: 'data.nodes',
          type: 'IFlowchartNode[]',
          defaultValue: '[]',
          desc: {
            'zh-CN': '流程图的节点数组，通过 Flowchart.createNode() 创建',
            'en-US': 'Array of flowchart nodes, created by Flowchart.createNode()'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'basic-usage',
          mfDemo: 'basic-usage'
        },
        {
          name: 'data.nodes[i].hidden',
          type: 'boolean',
          defaultValue: '',
          desc: {
            'zh-CN': '节点是否隐藏',
            'en-US': ''
          },
          mode: ['mobile-first'],
          mfDemo: 'dot-horizon-async'
        },
        {
          name: 'data.nodes[i].info',
          type: 'Object',
          defaultValue: '',
          desc: {
            'zh-CN': '节点的详细信息，包括节点所在的行列、宽高、形状和其它信息',
            'en-US': ''
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'dynamic-update',
          mfDemo: 'dot-horizon-async'
        },
        {
          name: 'data.nodes[i].info.col',
          type: 'number',
          defaultValue: '',
          desc: {
            'zh-CN': '节点在网格中的列索引（从 0 开始）',
            'en-US': 'Column index of the PC node in the grid (starting from 0)'
          },
          mode: ['mobile-first'],
          mfDemo: 'link-path'
        },
        {
          name: 'data.nodes[i].info.date',
          type: 'string',
          defaultValue: "''",
          desc: {
            'zh-CN': '节点对应的日期文本，显示在标签下方',
            'en-US': 'Date text corresponding to the PC node, displayed below the label'
          },
          mode: ['pc'],
          pcDemo: 'dynamic-update'
        },
        {
          name: 'data.nodes[i].info.items',
          type: 'IFlowchartItem[] | null',
          defaultValue: 'null',
          desc: {
            'zh-CN': '节点的人员列表，通过 Flowchart.createItem() 创建，为 null 时不显示',
            'en-US': 'Personnel list of the PC node, created by Flowchart.createItem(), null to hide'
          },
          mode: ['pc'],
          pcDemo: 'slot'
        },
        {
          name: 'data.nodes[i].info.label',
          type: 'string',
          defaultValue: "''",
          desc: {
            'zh-CN': '节点的标签文本；多端 dot 点模式下，当 nodeLayout 为 up-down 时显示为下部主标题',
            'en-US':
              'Label text of the PC node; in multi-terminal dot mode, displayed as the lower main title when nodeLayout is up-down'
          },
          mode: ['pc'],
          pcDemo: 'slot',
          mfDemo: ''
        },
        {
          name: 'data.nodes[i].info.other',
          type: 'object',
          defaultValue: '',
          desc: {
            'zh-CN':
              '多端 dot 点模式下节点的扩展信息。包含 shape（形状 circle/rectangle）、main（主标题）、auxi（辅助标题）、error（错误提示）等字段',
            'en-US':
              'Extended information for nodes in multi-terminal dot mode. Contains shape (circle/rectangle), main (main title), auxi (auxiliary title), error (error tooltip) and other fields'
          },
          mode: ['mobile-first'],
          mfDemo: 'basic-usage'
        },
        {
          name: 'data.nodes[i].info.other.auxi',
          type: 'string',
          defaultValue: "''",
          desc: {
            'zh-CN': '多端 dot 点模式下，节点的辅助标题文本，显示在主标题下方或右侧（取决于 nodeLayout）',
            'en-US':
              'Auxiliary title text of the node in multi-terminal dot mode, displayed below or to the right of the main title (depending on nodeLayout)'
          },
          mode: ['mobile-first'],
          mfDemo: 'basic-usage'
        },
        {
          name: 'data.nodes[i].info.other.error',
          type: 'string',
          defaultValue: "''",
          desc: {
            'zh-CN': '多端 dot 点模式下，节点状态为失败时显示的错误提示文本，通过 Popover 悬浮展示',
            'en-US':
              'Error tooltip text displayed when the node status is failed in multi-terminal dot mode, shown via Popover'
          },
          mode: ['mobile-first'],
          mfDemo: 'basic-usage'
        },
        {
          name: 'data.nodes[i].info.other.main',
          type: 'string',
          defaultValue: "''",
          desc: {
            'zh-CN': '多端 dot 点模式下，节点的主标题文本，当 nodeLayout 为 left-right 时显示为右侧主标题',
            'en-US':
              'Main title text of the node in multi-terminal dot mode, displayed as the right-side main title when nodeLayout is left-right'
          },
          mode: ['mobile-first'],
          mfDemo: 'holistic-fork'
        },
        {
          name: 'data.nodes[i].info.other.shape',
          type: "'circle' | 'rectangle'",
          defaultValue: "'circle'",
          desc: {
            'zh-CN': '多端 dot 点模式下，节点的形状，circle 为圆形，rectangle 为圆角矩形',
            'en-US':
              'Shape of the node in multi-terminal dot mode, circle for circular, rectangle for rounded rectangle'
          },
          mode: ['mobile-first'],
          mfDemo: 'holistic-fork'
        },
        {
          name: 'data.nodes[i].info.row',
          type: 'number',
          defaultValue: '',
          desc: {
            'zh-CN': '节点在网格中的行索引（从 0 开始）',
            'en-US': 'Row index of the PC node in the grid (starting from 0)'
          },
          mode: ['mobile-first'],
          mfDemo: 'basic-usage'
        },
        {
          name: 'data.nodes[i].info.status',
          type: 'number',
          defaultValue: '',
          desc: {
            'zh-CN': '节点的状态码，对应 config.status 中的状态；多端 dot 模式下也用于控制节点边框颜色和背景色',
            'en-US':
              'Status code of the PC node, corresponding to the status in config.status; also used to control node border color and background color in multi-terminal dot mode'
          },
          mode: ['mobile-first'],
          mfDemo: 'basic-usage'
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
          mfDemo: 'basic-usage'
        },
        {
          name: 'data.nodes[i].renderInner',
          type: 'function',
          defaultValue: 'null',
          desc: {
            'zh-CN':
              '多端 dot 点模式下，单个节点的自定义内部渲染函数，优先级高于 config.renderInner。参数为 (h, rawNode)，返回 VNode',
            'en-US':
              'Custom inner rendering function for a single node in multi-terminal dot mode, higher priority than config.renderInner. Parameters are (h, rawNode), returns VNode'
          },
          mode: ['mobile-first'],
          mfDemo: 'basic-usage'
        },
        {
          name: 'data.nodes[i].renderOuter',
          type: 'function',
          defaultValue: 'null',
          desc: {
            'zh-CN':
              '多端 dot 点模式下，单个节点的自定义外部渲染函数，优先级高于 config.renderOuter。参数为 (h, rawNode)，返回 VNode',
            'en-US':
              'Custom outer rendering function for a single node in multi-terminal dot mode, higher priority than config.renderOuter. Parameters are (h, rawNode), returns VNode'
          },
          mode: ['mobile-first'],
          mfDemo: 'holistic'
        },
        {
          name: 'fetch',
          type: 'function',
          defaultValue: '',
          desc: {
            'zh-CN': '多端 dot 异步流程图 AsyncFlowchart 数据和配置的加载方法。',
            'en-US': 'Multi-terminal dot asynchronous flow chart AsyncFlowchart data and configuration loading method.'
          },
          mode: ['mobile-first'],
          mfDemo: 'dot-horizon-async'
        }
      ],
      events: [
        {
          name: 'click-blank',
          typeAnchorName: 'IFlowchartClickBlankEvent',
          type: '(param: IFlowchartClickBlankEvent, e: MouseEvent) => void',
          defaultValue: '',
          desc: {
            'zh-CN': '点击画布空白区域时触发',
            'en-US': 'Triggered when clicking on a blank area of the canvas'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'event-handling',
          mfDemo: 'node-size'
        },
        {
          name: 'click-group',
          typeAnchorName: 'IFlowchartClickGroupEvent',
          type: '(param: IFlowchartClickGroupEvent, e: MouseEvent) => void',
          defaultValue: '',
          desc: {
            'zh-CN': '点击分组时触发',
            'en-US': 'Triggered when a group is clicked'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'event-handling',
          mfDemo: 'dot-vertical-async'
        },
        {
          name: 'click-link',
          typeAnchorName: 'IFlowchartClickLinkEvent',
          type: '(param: IFlowchartClickLinkEvent, e: MouseEvent) => void',
          defaultValue: '',
          desc: {
            'zh-CN': '点击连线时触发',
            'en-US': 'Triggered when a link is clicked'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'event-handling',
          mfDemo: 'node-size'
        },
        {
          name: 'click-node',
          typeAnchorName: 'IFlowchartClickNodeEvent',
          type: '(param: IFlowchartClickNodeEvent, e: MouseEvent) => void',
          defaultValue: '',
          desc: {
            'zh-CN': '点击节点时触发',
            'en-US': 'Triggered when a node is clicked'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'event-handling',
          mfDemo: 'node-size'
        }
      ],
      methods: [
        {
          name: 'createConfig',
          typeAnchorName: 'IFlowchartConfig',
          type: '() => IFlowchartConfig',
          defaultValue: '',
          desc: {
            'zh-CN': '流程图组件 Flowchart 的静态方法，用于创建包含默认值的图形基础配置对象',
            'en-US':
              'Static method of Flowchart component, used to create a basic graphics configuration object with default values'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'basic-usage',
          mfDemo: ''
        },
        {
          name: 'createItem',
          typeAnchorName: 'IFlowchartItem',
          type: '(key: string, name: string, role: string, status: number, comment: string, date: string, other?: any) => IFlowchartItem',
          defaultValue: '',
          desc: {
            'zh-CN': '流程图组件 Flowchart 的静态方法，用于创建人员列表项',
            'en-US': 'PC static method of Flowchart component, used to create a personnel list item'
          },
          mode: ['pc'],
          pcDemo: 'person-list'
        },
        {
          name: 'createLink',
          typeAnchorName: 'IFlowchartLink',
          type: '(from: string, to: string, p: string, status: number, style?: string, other?: any) => IFlowchartLink',
          defaultValue: '',
          desc: {
            'zh-CN': '流程图组件 Flowchart 的静态方法，用于创建连线',
            'en-US': 'Static method of Flowchart component, used to create a link'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'basic-usage',
          mfDemo: ''
        },
        {
          name: 'createNode',
          typeAnchorName: 'IFlowchartNode',
          type: '(name: string, status: number, label: string, date: string, items: IFlowchartItem[] | null, row: number, col: number, other?: any) => IFlowchartNode',
          defaultValue: '',
          desc: {
            'zh-CN': '流程图组件 Flowchart 的静态方法，用于创建节点',
            'en-US': 'Static method of Flowchart component, used to create a node'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'basic-usage',
          mfDemo: ''
        },
        {
          name: 'layout',
          type: 'function',
          defaultValue: '',
          desc: {
            'zh-CN':
              '多端 dot 点模式下用于处理图形的自定义布局，设置在全局配置上，参数为图形宽、高和节点列表，期望获取每个节点的位置',
            'en-US':
              'Custom layout for processing graphics in multi-terminal dot point mode, set in the global configuration, the parameters are graph width, height and node list, and it is expected to obtain the position of each node'
          },
          mode: ['mobile-first'],
          pcDemo: '',
          mfDemo: 'holistic-fork'
        },
        {
          name: 'linkPath',
          type: 'function',
          defaultValue: '',
          desc: {
            'zh-CN':
              '多端 dot 点模式下用于处理图形连线的自定义布局，设置在全局配置上，参数为连线和节点列表，期望获取连线的路径、中点和渐变',
            'en-US':
              'A custom layout used to handle graphics connections in multi-terminal dot point mode. It is set in the global configuration. The parameters are the connection line and node list. It is expected to obtain the path, midpoint and gradient of the connection line'
          },
          mode: ['mobile-first'],
          pcDemo: '',
          mfDemo: 'link-path'
        },
        {
          name: 'linkPath[i].method({ afterLink, afterNodes, from, to, api })',
          type: 'function',
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
          type: 'Component',
          defaultValue: '',
          desc: {
            'zh-CN': '多端 dot 点模式下内置的节点组件，可通过 Flowchart.Node 访问',
            'en-US': 'Built-in node component in multi-terminal dot mode, accessible via Flowchart.Node'
          },
          mode: ['mobile-first'],
          pcDemo: '',
          mfDemo: 'dot-vertical-async'
        },
        {
          name: 'refresh',
          type: 'function',
          defaultValue: '',
          desc: {
            'zh-CN': '在修改配置或数据之后，用于刷新多端异步流程图 AsyncFlowchart 实例的图形',
            'en-US':
              'Graphics used to refresh a multi-end asynchronous flowchart AsyncFlowchart instance after modifying configuration or data'
          },
          mode: ['mobile-first'],
          pcDemo: '',
          mfDemo: 'node-size'
        },
        {
          name: 'renderInner',
          type: 'function',
          defaultValue: '',
          desc: {
            'zh-CN': '多端流卡片模式下节点的自定义渲染方法，渲染的内容为卡片内部内容，不包括卡片容器',
            'en-US':
              'Custom rendering method for nodes in multi-stream card mode. The rendered content is the internal content of the card, excluding the card container'
          },
          mode: ['mobile-first'],
          pcDemo: '',
          mfDemo: 'basic-usage'
        },
        {
          name: 'renderOuter',
          type: 'function',
          defaultValue: '',
          desc: {
            'zh-CN': '多端卡片模式下节点的自定义渲染方法，渲染的内容包括卡片容器',
            'en-US':
              'Custom rendering method for nodes in multi-terminal card mode. The rendered content includes card containers'
          },
          mode: ['mobile-first'],
          pcDemo: '',
          mfDemo: 'node-size'
        },
        {
          name: 'resizeMixin',
          type: 'object',
          defaultValue: '',
          desc: {
            'zh-CN': '多端 dot 点模式下用于处理图形的水平自适应宽度，后续在点模式的异步流程图中被内置',
            'en-US':
              'Horizontal adaptive width for processing graphics in multi-terminal dot point mode, which will be built into the asynchronous flow chart in dot mode later'
          },
          mode: ['mobile-first'],
          pcDemo: '',
          mfDemo: 'holistic-fork'
        }
      ],
      slots: [
        {
          name: 'content',
          defaultValue: '',
          desc: {
            'zh-CN':
              '节点内容插槽，用于自定义节点下方的人员列表或扩展内容，插槽内的样式根据用户实际情况调试。插槽参数: { afterNode, node, config, allItem, dropdowns, showPop }',
            'en-US':
              'PC node content slot, used to customize the personnel list or extended content below the node,The style within the slot is adjusted according to the user actual situation. Slot parameters: { afterNode, node, config, allItem, dropdowns, showPop }'
          },
          mode: ['pc'],
          pcDemo: 'slot'
        },
        {
          name: 'icon',
          defaultValue: '',
          desc: {
            'zh-CN':
              '节点图标插槽，用于自定义节点中心的图标。插槽参数: { afterNode, node, config, allItem, dropdowns, showPop }',
            'en-US':
              'PC node icon slot, used to customize the icon in the center of the node. Slot parameters: { afterNode, node, config, allItem, dropdowns, showPop }'
          },
          mode: ['pc'],
          pcDemo: 'slot'
        },
        {
          name: 'label',
          defaultValue: '',
          desc: {
            'zh-CN':
              '节点标签插槽，用于自定义节点下方的标签文本。插槽参数: { afterNode, node, config, allItem, dropdowns, showPop }',
            'en-US':
              'PC node label slot, used to customize the label text below the node. Slot parameters: { afterNode, node, config, allItem, dropdowns, showPop }'
          },
          mode: ['pc'],
          pcDemo: 'slot'
        }
      ]
    }
  ],
  types: [
    {
      name: 'IFlowchartConfig',
      type: 'interface',
      code: `interface IFlowchartConfig {
  width: number
  height: number
  rows: number
  cols: number
  status: Record<number, string>
  colors: Record<number, string>
  background: string
  statusComplete: number
  statusOngoing: number
  statusFail: number
  anchor: 'center' | 'left'
  iconWrapperSize: number
  iconSize: number
  iconSvgSize: number
  labelSpacing: number
  labelWidth: number
  labelHeight: number
  labelDateColor: string
  listWidth: number
  listThreshold: number
  listIconSize: number
  listBorderColor: string
  listIconColor: string
  headUrl: string
  headSize: number
  drawLink: ((ctx: CanvasRenderingContext2D, link: IFlowchartLink) => void) | null
  styleLink: ((link: IFlowchartLink) => object) | null
  styleHoverLink: ((link: IFlowchartLink) => object) | null
  hoverHit: number
  checkItemStatus: ((item: IFlowchartItem) => boolean) | null
  font: string
  delay: number
  adjustPos: ((node: IFlowchartNode) => { x: number; y: number }) | null
  radius: number
  thin: boolean
  type?: string
  nodeSize?: 'mini' | 'small' | 'medium'
  nodeLayout?: 'up-down' | 'left-right'
  align?: 'left' | 'center'
  popoverPlacement?: string
  ongoingBackgroundColor?: string
  showArrow?: boolean
  showOnly?: 'icon' | 'title'
  prior?: 'horizontal' | 'vertical'
  gap?: number
  padding?: number
  extraWidth?: number
  linkEndMinus?: number
  condClass?: string
  renderCond?: (h: any, afterLink: any, config: any) => any
  renderInner?: (h: any, rawNode: any) => any
  renderOuter?: (h: any, rawNode: any) => any
}`
    },
    {
      name: 'IFlowchartData',
      type: 'interface',
      code: `interface IFlowchartData {
  nodes: IFlowchartNode[]
  links: IFlowchartLink[]
  groups?: IFlowchartGroup[]
}`
    },
    {
      name: 'IFlowchartNode',
      type: 'interface',
      code: `interface IFlowchartNode {
  name: string
  info: {
    status: number
    label: string
    date: string
    items: IFlowchartItem[] | null
    row: number
    col: number
    other?: {
      shape?: 'circle' | 'rectangle'
      main?: string
      auxi?: string
      error?: string
      [key: string]: any
    }
  }
  hidden?: boolean
  renderInner?: (h: any, rawNode: any) => any
  renderOuter?: (h: any, rawNode: any) => any
}`
    },
    {
      name: 'IFlowchartLink',
      type: 'interface',
      code: `interface IFlowchartLink {
  from: string
  to: string
  p: string
  cond?: boolean
  fromJoint?: string
  toJoint?: string
  linkOffset?: number
  showArrow?: boolean
  info: {
    status: number
    style: 'solid' | 'dashed' | 'dash'
    other?: {
      title?: string
      [key: string]: any
    }
  }
}`
    },
    {
      name: 'IFlowchartItem',
      type: 'interface',
      code: `interface IFlowchartItem {
  key: string
  name: string
  role: string
  status: number
  comment: string
  date: string
  other?: any
}`
    },
    {
      name: 'IFlowchartGroup',
      type: 'interface',
      code: `interface IFlowchartGroup {
  title: string
  nodes: string[]
  fillStyle?: string
  strokeStyle?: string
  lineDash?: number[]
  padding?: [number, number]
  titleClass?: string
  titlePosition?: 'top' | 'top-left'
}`
    },
    {
      name: 'IFlowchartClickNodeEvent',
      type: 'interface',
      code: `interface IFlowchartClickNodeEvent {
  afterNode: {
    x: number
    y: number
    raw: IFlowchartNode
  }
  node: IFlowchartNode
  config: IFlowchartConfig
  allItem: IFlowchartItem[]
  dropdowns: Record<string, boolean>
  showPop: boolean
}`
    },
    {
      name: 'IFlowchartClickLinkEvent',
      type: 'interface',
      code: `interface IFlowchartClickLinkEvent {
  afterLink: {
    raw: IFlowchartLink
  }
  link: IFlowchartLink
  config: IFlowchartConfig
}`
    },
    {
      name: 'IFlowchartClickBlankEvent',
      type: 'interface',
      code: `interface IFlowchartClickBlankEvent {
  x: number
  y: number
  config: IFlowchartConfig
}`
    },
    {
      name: 'IFlowchartClickGroupEvent',
      type: 'interface',
      code: `interface IFlowchartClickGroupEvent {
    group: {
      title: string
      nodes: string[]
    }
    config: IFlowchartConfig
  }`
    }
  ]
}
