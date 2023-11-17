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
      demoId: 'readonly',
      name: {
        'zh-CN': '选中项只读',
        'en-US': 'The selected item is read-only'
      },
      desc: {
        'zh-CN': '<p>点击事件不改变选中项。</p>',
        'en-US': '<p>Clicking the event does not change the selected item.</p>'
      },
      codeFiles: ['readonly.vue']
    },
    {
      demoId: 'slot',
      name: {
        'zh-CN': '插槽',
        'en-US': 'slot'
      },
      desc: {
        'zh-CN': '<p>可使用右侧 <code>icon</code> 自定义插槽。</p>',
        'en-US': '<p>You can customize the slot using the right <code>icon</code>.</p>'
      },
      codeFiles: ['slot.vue']
    }
  ],
  apis: [
    {
      'name': 'FilterBar',
      'type': 'component',
      'props': [
        {
          'name': 'data',
          'type': 'Array',
          'defaultValue': '[]',
          'desc': { 'zh-CN': '过滤栏列表数据。', 'en-US': 'Filter bar list data.' },
          'demoId': 'basic-usage'
        },
        {
          'name': 'v-model',
          'type': 'Array',
          'defaultValue': '[]',
          'desc': { 'zh-CN': '绑定值', 'en-US': 'Bind Value' },
          'demoId': 'basic-usage'
        }
      ],
      'methods': [
        {
          'name': 'click(index) ',
          'type': '',
          'defaultValue': '',
          'desc': {
            'zh-CN': '过滤项点击方法，index 是当前项索引。',
            'en-US': 'Method of clicking a filtering item. index indicates the index of the current item.'
          },
          'demoId': 'readonly'
        }
      ],
      'events': [
        {
          'name': 'click',
          'type': 'Function()',
          'defaultValue': '',
          'desc': {
            'zh-CN': '过滤项点击事件。',
            'en-US': 'Indicates the click event of a filtering item.'
          },
          'demoId': 'readonly'
        }
      ],
      'slots': [
        {
          'name': 'default',
          'type': '',
          'defaultValue': '',
          'desc': { 'zh-CN': '过滤项插槽。', 'en-US': 'Filter item slot.' },
          'demoId': 'slot'
        },
        {
          'name': 'icon',
          'type': '',
          'defaultValue': '',
          'desc': { 'zh-CN': '组件右侧图标插槽。', 'en-US': 'Icon slot on the right of the component.' },
          'demoId': 'slot'
        }
      ]
    }
  ]
}
