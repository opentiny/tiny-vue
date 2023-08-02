export default {
  column: '2',
  owner: '',
  demos: [
    {
      demoId: 'basic-usage',
      name: {
        'zh-CN': '基本用法',
        'en-US': 'basic usage'
      },
      desc: {
        'zh-CN': '<p></p>',
        'en-US': '<p>button type</p>'
      },
      codeFiles: ['basic-usage.vue']
    },

    {
      demoId: 'tag-group-type',
      name: {
        'zh-CN': '类型',
        'en-US': 'events'
      },
      desc: {
        'zh-CN':
          '<p>`type`可以为标签设置相应的类型，可选值（success / warning / alerting / error / info / default），默认值为 info。<p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['tag-group-type.vue']
    },
    {
      demoId: 'tag-group-size',
      name: {
        'zh-CN': '尺寸',
        'en-US': 'events'
      },
      desc: {
        'zh-CN': '<p>可通过 `size` 设置 TagGroup 标签组标签大小，可选值（medium / small / mini），默认值为 medium。<p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['tag-group-size.vue']
    },
    {
      demoId: 'tag-group-effect',
      name: {
        'zh-CN': '主题',
        'en-US': 'events'
      },
      desc: {
        'zh-CN':
          '<p>可通过 `effect` 设置 TagGroup 标签组 标签主题，可选值（dark / light / plain），默认值为 light。<p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['tag-group-effect.vue']
    },
    {
      demoId: 'tag-group-event',
      name: {
        'zh-CN': 'Click 事件',
        'en-US': 'events'
      },
      desc: {
        'zh-CN': '<p>TagGroup 标签组提供了`item-click`事件，`item-click`事件默认提供的参数有 `item,index,event`<p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['tag-group-event.vue']
    }
  ],
  apis: []
}
