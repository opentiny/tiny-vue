export default {
  column: '2',
  owner: '',
  demos: [
    {
      demoId: 'basic-usage',
      name: {
        'zh-CN': '垂直图形',
        'en-US': 'Vertical Graphics'
      },
      desc: {
        'zh-CN': '<p>节点设置在不同的列data.nodes[i].info.row,就可以创建垂直图形</p>',
        'en-US':
          '<p>Nodes are set in different columns data.nodes[i].info.row, and vertical graphics can be created.</p>'
      },
      codeFiles: ['basic-usage.vue']
    },
    {
      demoId: 'horizon',
      name: {
        'zh-CN': '水平图形',
        'en-US': 'Horizontal Graph'
      },
      desc: {
        'zh-CN': '<p>节点设置在不同的列data.nodes[i].info.col,就可以创建水平图形</p>',
        'en-US':
          '<p>Nodes are set in different columns data.nodes[i].info.col, and horizontal graphics can be created.</p>'
      },
      codeFiles: ['horizon.vue']
    },
    {
      demoId: 'dot-vertical',
      name: {
        'zh-CN': '点模式-垂直图形',
        'en-US': 'Point Mode - Vertical Graph'
      },
      desc: {
        'zh-CN': '<p></p>',
        'en-US': '<p></p>'
      },
      codeFiles: ['dot-vertical.vue']
    },
    {
      demoId: 'dot-horizon',
      name: {
        'zh-CN': '点模式-水平图形',
        'en-US': 'Point Mode - Horizontal Graph'
      },
      desc: {
        'zh-CN': '<p></p>',
        'en-US': '<p></p>'
      },
      codeFiles: ['dot-horizon.vue']
    },
    {
      demoId: 'dot-horizon-async',
      name: {
        'zh-CN': '点模式-水平图形-异步',
        'en-US': 'Point Mode - Horizontal Graph - Asynchronous'
      },
      desc: {
        'zh-CN': '<p></p>',
        'en-US': '<p></p>'
      },
      codeFiles: ['dot-horizon-async.vue']
    },
    {
      demoId: 'dot-vertical-async',
      name: {
        'zh-CN': '点模式-垂直图形-异步',
        'en-US': 'events'
      },
      desc: {
        'zh-CN': '<p><p>',
        'en-US': '<p>Point Mode - Vertical Graph - Asynchronous</p>'
      },
      codeFiles: ['dot-vertical-async.vue']
    },
    {
      demoId: 'node-size',
      name: {
        'zh-CN': '节点尺寸',
        'en-US': 'Node Size'
      },
      desc: {
        'zh-CN':
          "<p>使用属性 <code>config.nodeSize</code> 可以设置节点尺寸，可选值为 <code>'mini'</code> , <code>'small'</code> , <code>'medium'</code>。<p>",
        'en-US':
          "<p>Using the attribute <code>config.nodeSize</code>, you can set the node size to <code>'mini'</code>, <code>'small'</code>, or <code>'medium'</code>.</p>"
      },
      codeFiles: ['node-size.vue']
    },
    {
      demoId: 'link-path',
      name: {
        'zh-CN': '定制连线',
        'en-US': 'Link Path'
      },
      desc: {
        'zh-CN': '<p>使用属性 config.linkPath，可以定制连线。<p>',
        'en-US': '<p>Use the attribute <code>config.linkpath</code> to customize the links.</p>'
      },
      codeFiles: ['link-path.vue']
    },
    {
      demoId: 'holistic',
      name: {
        'zh-CN': '全景图',
        'en-US': 'Panoramic view'
      },
      desc: {
        'zh-CN': '<p></p>',
        'en-US': '<p></p>'
      },
      codeFiles: ['holistic.vue']
    },
    {
      demoId: 'holistic-fork',
      name: {
        'zh-CN': '全景图-分叉',
        'en-US': 'Panorama - Fork'
      },
      desc: {
        'zh-CN': '<p></p>',
        'en-US': '<p></p>'
      },
      codeFiles: ['holistic-fork.vue']
    }
  ]
}
