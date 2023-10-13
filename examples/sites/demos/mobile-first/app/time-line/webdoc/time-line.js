export default {
  column: '2',
  owner: '',
  demos: [
    {
      demoId: 'basic-usage',
      name: {
        'zh-CN': '基本用法',
        'en-US': 'events'
      },
      desc: {
        'zh-CN': '<p>通过 `data` 属性设置时间线步骤条数据<p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['basic-usage.vue']
    },
    {
      demoId: 'sub-field',
      name: {
        'zh-CN': '两侧分布',
        'en-US': 'events'
      },
      desc: {
        'zh-CN': '<p>通过 `sub-field` 属性设置时间线两侧展示。<p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['sub-field.vue']
    },
    {
      demoId: 'single-status',
      name: {
        'zh-CN': '单状态时间轴',
        'en-US': 'events'
      },
      desc: {
        'zh-CN': '<p>通过在`data`里面的属性`autoColor`设置自定义图标<p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['single-status.vue']
    },
    {
      demoId: 'many-status',
      name: {
        'zh-CN': '多状态时间轴',
        'en-US': 'events'
      },
      desc: {
        'zh-CN':
          '<p>通过在`data`里面的属性`autoColor`设置自定义状态。对应场景： `success` ：成功  `error` ：失败 `info` ：等待 <p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['many-status.vue']
    },
    {
      demoId: 'node-toset',
      name: {
        'zh-CN': '节点配置图标',
        'en-US': 'events'
      },
      desc: {
        'zh-CN': '<p>通过在`data`里面的属性`autoColor`设置自定义图标<p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['node-toset.vue']
    },
    {
      demoId: 'fold-time',
      name: {
        'zh-CN': '折叠时间轴',
        'en-US': 'events'
      },
      desc: {
        'zh-CN': '<p>当节点超过七项时，自动折叠节点，仅展示最近三项，点击后展开<p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['fold-time.vue']
    },
    {
      demoId: 'auto-slot',
      name: {
        'zh-CN': '自定义插槽',
        'en-US': 'events'
      },
      desc: {
        'zh-CN':
          '<p>通过 `slot` 为 `left` 可以自定义步骤条右侧内容。`data`中自定义属性名应避免`name`(正标题)、`tips`(副标题)、`time`(时间)属性<p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['auto-slot.vue']
    }
  ],
  apis: []
}
