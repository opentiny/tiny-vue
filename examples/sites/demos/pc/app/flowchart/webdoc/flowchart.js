export default {
  column: '1',
  owner: '',
  demos: [
    {
      'demoId': 'basic-usage',
      'name': { 'zh-CN': '基本用法', 'en-US': 'Basic Usage' },
      'desc': {
        'zh-CN': `
        <p>节点支持 icon/label/content 插槽定制内容，示例提供了 content 插槽的默认实现。节点使用 row/col 属性进行行列配置。连线使用 p 属性进行相对路径配置。流程图的其它设置通过 config 进行配置。组件预置了 createItem/createNode/createLink/createConfig 静态方法，以便于快速构建选项。流程图的行高列宽由 config 的属性 width/height/cols/rows 确定，节点的位置由流程图的行高列宽，以及节点的 row/col 位置确定。
        <div class="tip custom-block">
          // 连线相对路径配置详细介绍：<br />
          // '0'  表示从起始节点1的位置开始<br />
          // 'r2' 表示向右画两列宽度的连线<br />
          // 'c'  表示画一个圆角<br />
          // 'b2' 表示向下画两行高度的连线<br />
          // 'c'  再画一个圆角<br />
          // 'l1' 表示向左画一列宽度的连线<br />
          // 'c'  再画一个圆角<br />
          // 't1' 向上画一行高度的连线
          const link = { from: '1', to: '2', p: '0 r2 c b2 c l1 c t1', status: 1 }<br />
          // 非0开始的相对位置：<br />
          // 'r2' 表示从起始节点3的位置向右移动两列宽度作为起始位置<br />
          const link = { from: '3', to: '4', p: 'r2 b2 c l1', status: 1 }<br />
        </div>
        </p>\n`,
        'en-US': '<p>Fixed on the right of the screen by default</p>\n'
      },
      'codeFiles': ['basic-usage.vue']
    }
  ],
  apis: [
    {
      'name': 'flowchart',
      'type': 'component',
      'properties': [
        {
          name: 'config',
          type: 'object',
          defaultValue: '',
          desc: {
            'zh-CN': '流程图的配置。',
            'en-US': 'The config of flowchart.'
          },
          demoId: 'basic-usage'
        },
        {
          name: 'data',
          type: 'object',
          defaultValue: '',
          desc: {
            'zh-CN': '流程图数据。',
            'en-US': 'The data of flowchart.'
          },
          demoId: 'basic-usage'
        },
        {
          name: 'fetch',
          type: 'function',
          defaultValue: '',
          desc: {
            'zh-CN': '多端 dot 异步流程图 AsyncFlowchart 数据和配置的加载方法。',
            'en-US': 'Multi-terminal dot asynchronous flow chart AsyncFlowchart data and configuration loading method.'
          },
          demoId: 'basic-usage'
        }
      ],
      'events': [
        {
          'name': 'click-node',
          'type': '',
          'defaultValue': '',
          'desc': { 'zh-CN': '点击节点时触发。', 'en-US': 'Triggered when a node is clicked.' },
          'demoId': 'basic-usage'
        },
        {
          'name': 'click-link',
          'type': '',
          'defaultValue': '',
          'desc': { 'zh-CN': '点击连线时触发。', 'en-US': 'Triggered when a connection is clicked.' },
          'demoId': 'basic-usage'
        },
        {
          'name': 'click-blank',
          'type': '',
          'defaultValue': '',
          'desc': { 'zh-CN': '点击空白区域时触发。', 'en-US': 'Triggered when a blank area is clicked.' },
          'demoId': 'basic-usage'
        },
        {
          'name': 'click-group',
          'type': '',
          'defaultValue': '',
          'desc': { 'zh-CN': '点击分组时触发。', 'en-US': 'Triggered when group is clicked.' },
          'demoId': 'basic-usage'
        }
      ],
      'methods': [
        {
          name: 'createConfig',
          type: '',
          defaultValue: '',
          desc: {
            'zh-CN': '流程图组件 Flowchart 的静态方法，用于创建图形基础配置。',
            'en-US': 'Static method of flowchart component Flowchart, used to create basic graphics configuration.'
          },
          demoId: 'basic-usage'
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
          demoId: 'basic-usage'
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
          demoId: 'basic-usage'
        },
        {
          name: 'Node',
          type: '',
          defaultValue: '',
          desc: {
            'zh-CN': '多端 dot 点模式下内置的节点组件。',
            'en-US': 'Built-in node component in multi-terminal dot mode.'
          },
          demoId: 'basic-usage'
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
          demoId: 'basic-usage'
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
          demoId: 'basic-usage'
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
          demoId: 'basic-usage'
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
          demoId: 'basic-usage'
        }
      ],
      'slots': []
    }
  ]
}
