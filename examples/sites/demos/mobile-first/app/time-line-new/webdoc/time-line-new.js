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
        'zh-CN': '<p>通过 `data` 属性设置时间线步骤条数据</p>',
        'en-US': '<p>Set the timeline step bar data through the `data` property.</p>'
      },
      codeFiles: ['basic-usage.vue']
    },
    {
      demoId: 'sub-field',
      name: {
        'zh-CN': '两侧分布',
        'en-US': 'Bilateral distribution'
      },
      desc: {
        'zh-CN': '<p>通过 `sub-field` 属性设置时间线两侧展示。</p>',
        'en-US': '<p>Use the `sub-field` attribute to set the display on both sides of the timeline.</p>'
      },
      codeFiles: ['sub-field.vue']
    },
    {
      demoId: 'single-status',
      name: {
        'zh-CN': '单状态时间轴',
        'en-US': 'Single-state timeline'
      },
      desc: {
        'zh-CN': '<p>通过在`data`里面的属性`autoColor`设置自定义图标</p>',
        'en-US': '<p>Set the customized icon through the `autoColor` attribute in `data`.</p>'
      },
      codeFiles: ['single-status.vue']
    },
    {
      demoId: 'many-status',
      name: {
        'zh-CN': '多状态时间轴',
        'en-US': 'Multi-state timeline'
      },
      desc: {
        'zh-CN':
          '<p>通过在`data`里面的属性`autoColor`设置自定义状态。对应场景： `success` ：成功  `error` ：失败 `info` ：等待 </p>',
        'en-US':
          '<p>Set the user-defined state through the `autoColor` attribute in `data`. Scenario: `success`: success; error`: failure; info`: waiting</p>'
      },
      codeFiles: ['many-status.vue']
    },
    {
      demoId: 'node-toset',
      name: {
        'zh-CN': '节点配置图标',
        'en-US': 'Node configuration icon'
      },
      desc: {
        'zh-CN': '<p>通过在`data`里面的属性`autoColor`设置自定义图标</p>',
        'en-US': '<p>Set the customized icon through the `autoColor` attribute in `data`.</p>'
      },
      codeFiles: ['node-toset.vue']
    },
    {
      demoId: 'fold-time',
      name: {
        'zh-CN': '折叠时间轴',
        'en-US': 'Collapse Timeline'
      },
      desc: {
        'zh-CN': '<p>当节点个数达到七项时，自动折叠节点，仅展示最近三项，点击后展开。</p>',
        'en-US':
          '<p>When there are more than seven nodes, the system automatically collapses the nodes and displays only the latest three nodes.</p>'
      },
      codeFiles: ['fold-time.vue']
    },
    {
      demoId: 'node-max',
      name: {
        'zh-CN': '触发折叠节点数',
        'en-US': 'Number of Nodes Triggering Folding'
      },
      desc: {
        'zh-CN': '<p>通过 <code>node-max</code> 属性可以配置节点达到指定个数后自动折叠节点。</p>',
        'en-US':
          '<p>Use <code>node-max</code> to automatically collapse nodes after reaching a specified number of nodes.</p>'
      },
      codeFiles: ['node-max.vue']
    },
    {
      demoId: 'limited-nodes',
      name: {
        'zh-CN': '折叠后节点数',
        'en-US': 'Number of Nodes After Folding'
      },
      desc: {
        'zh-CN': '<p>通过 <code>limited-nodes</code> 属性可以设置折叠后展示的节点个数。</p>',
        'en-US': '<p>Use <code>node-max</code> to set the number of nodes displayed after folding.</p>'
      },
      codeFiles: ['limited-nodes.vue']
    },
    {
      demoId: 'auto-slot',
      name: {
        'zh-CN': '自定义插槽',
        'en-US': 'Custom Slots'
      },
      desc: {
        'zh-CN':
          '<p>通过 `slot` 为 `left` 可以自定义步骤条右侧内容。`data`中自定义属性名应避免`name`(正标题)、`tips`(副标题)、`time`(时间)属性</p>',
        'en-US':
          '<p>You can set `slot` to `left` to customize the content on the right of the step bar. User-defined attribute names in `data` should avoid `name` (head title), `tips` (subtitle), and `time` (time) attributes.</p>'
      },
      codeFiles: ['auto-slot.vue']
    }
  ]
}
