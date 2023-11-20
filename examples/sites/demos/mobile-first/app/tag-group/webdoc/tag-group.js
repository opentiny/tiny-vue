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
        'en-US': '<p></p>'
      },
      codeFiles: ['basic-usage.vue']
    },

    {
      demoId: 'tag-group-type',
      name: {
        'zh-CN': '类型',
        'en-US': 'Type'
      },
      desc: {
        'zh-CN':
          '<p>`type`可以为标签设置相应的类型，可选值（success / warning / alerting / error / info / default），默认值为 info。</p>',
        'en-US': '<p>`type`You can set the corresponding type for a tag. The value can be (success / warning / alerting / error / info / default), and the default value is info.</p>'
      },
      codeFiles: ['tag-group-type.vue']
    },
    {
      demoId: 'tag-group-size',
      name: {
        'zh-CN': '尺寸',
        'en-US': 'Size'
      },
      desc: {
        'zh-CN': '<p>可通过 `size` 设置 TagGroup 标签组标签大小，可选值（medium / small / mini），默认值为 medium。</p>',
        'en-US': '<p>You can use `size` to set the tag size of the TagGroup tag group. The value can be medium, small, or mini. The default value is medium.</p>'
      },
      codeFiles: ['tag-group-size.vue']
    },
    {
      demoId: 'tag-group-effect',
      name: {
        'zh-CN': '主题',
        'en-US': 'Subject'
      },
      desc: {
        'zh-CN':
          '<p>可通过 `effect` 设置 TagGroup 标签组 标签主题，可选值（dark / light / plain），默认值为 light。</p>',
        'en-US': '<p>You can use `effect` to set the tag theme of the TagGroup tag group. The value can be dark, light, or plain. The default value is light.</p>'
      },
      codeFiles: ['tag-group-effect.vue']
    },
    {
      demoId: 'tag-group-event',
      name: {
        'zh-CN': 'Click 事件',
        'en-US': 'Click Event'
      },
      desc: {
        'zh-CN': '<p>TagGroup 标签组提供了`item-click`事件，`item-click`事件默认提供的参数有 `item,index,event`</p>',
        'en-US': '<p>The TagGroup tag group provides the `item-click` event. The `item-click` event provides the following parameters by default: `item, index, and event`</p>'
      },
      codeFiles: ['tag-group-event.vue']
    }
  ],
  apis: [
    {
      'name': 'TagGroup',
      'type': 'component',
      'props': [
        {
          'name': 'data',
          'type': 'Array',
          'defaultValue': '',
          'desc': {
            'zh-CN': '数据源',
            'en-US': 'Data source'
          },
          'demoId': ''
        },
        {
          'name': 'effect',
          'type': 'String',
          'defaultValue': '该属性的可选值为 dark / light / plain，默认值为 light',
          'desc': {
            'zh-CN': '主题',
            'en-US': 'Subject'
          },
          'demoId': 'tag-group-effect'
        },
        {
          'name': 'size',
          'type': 'String',
          'defaultValue': '该属性的可选值为 medium / small / mini，默认为medium。',
          'desc': {
            'zh-CN': '尺寸',
            'en-US': 'Size'
          },
          'demoId': 'tag-group-size'
        }
      ],
      'events': [
        {
          'name': 'item-click',
          'type': 'Function()',
          'defaultValue': '',
          'desc': {
            'zh-CN': '单个标签的点击事件',
            'en-US': 'Click event of a single tag.'
          },
          'demoId': 'tag-group-event'
        }
      ],
    },
  ]
}
