export default {
  column: '2',
  owner: '',
  demos: [
    {
      'demoId': 'basic-usage',
      'name': { 'zh-CN': '基本用法', 'en-US': 'Basic Usage' },
      'desc': {
        'zh-CN': '<p>通过 <code> data</code> 设置文本内容， <code> value</code> 设置标记内容。</p>\n',
        'en-US':
          '<p>Set the text content through <code> data</code> , and set the tag content through <code> value</code> </p>\n'
      },
      'codeFiles': ['basic-usage.vue']
    },
    {
      'demoId': 'type',
      'name': { 'zh-CN': '主題样式', 'en-US': 'Theme Style' },
      'desc': {
        'zh-CN':
          '<p>通过 <code> type</code> 设置显示主题，可选值： <code> primary、success、warning、danger、info</code> 默认值：danger。</p>\n',
        'en-US':
          '<p>Set the display theme through <code> type</code> . Optional values: <code> primary, success, warning, danger, info</code> Default value: danger.</p>\n'
      },
      'codeFiles': ['type.vue']
    },
    {
      'demoId': 'is-dot',
      'name': { 'zh-CN': '小圆点标记', 'en-US': 'Small dot mark' },
      'desc': {
        'zh-CN': '<p>通过 <code> is-dot</code> 设置显示小圆点标记。</p>\n',
        'en-US': '<p>Set the display of small dot markers through <code> is dot</code> settings.</p>\n'
      },
      'codeFiles': ['is-dot.vue']
    },
    {
      'demoId': 'max',
      'name': { 'zh-CN': '计数最大值', 'en-US': 'Maximum count value' },
      'desc': {
        'zh-CN': "<p>通过 <code> max</code> 设置最大值，超过最大值会显示 '{max}+'。</p>\n",
        'en-US':
          "<p>By setting the maximum value through <code> max</code> , exceeding the maximum value will display '{max}+'.</p>"
      },
      'codeFiles': ['max.vue']
    },
    {
      'demoId': 'link',
      'name': { 'zh-CN': '跳转链接', 'en-US': 'Link' },
      'desc': {
        'zh-CN':
          '<p>通过 <code> href</code> 设置跳转链接， <code> target</code> 设置跳转方式，同 <code> a</code> 标签的 <code> target</code> 属性。</p>\n',
        'en-US':
          '<p>Set the jump link through <code> href</code> , and set the jump method using the <code> target</code> attribute of the <code> a</code> tag.</p>\n'
      },
      'codeFiles': ['link.vue']
    },
    {
      'demoId': 'badge-class',
      'name': { 'zh-CN': '自定义类名', 'en-US': 'Custom Class Name' },
      'desc': {
        'zh-CN': '<p>通过 <code> badge-class</code> 设置自定义类名。</p>\n',
        'en-US': '<p>Set custom class names through <code> bag class</code> .</p>\n'
      },
      'codeFiles': ['badge-class.vue']
    },
    {
      'demoId': 'slot-default',
      'name': { 'zh-CN': '自定义文本内容', 'en-US': 'Badge text content' },
      'desc': {
        'zh-CN': '<p>通过 <code> default slot</code> 自定义文本内容。</p>\n',
        'en-US': '<p> <code> default slot</code> Tag Content Custom.</p>\n'
      },
      'codeFiles': ['slot-default.vue']
    },
    {
      'demoId': 'slot-content',
      'name': { 'zh-CN': '自定义标记内容', 'en-US': 'Customized badge content' },
      'desc': {
        'zh-CN': '<p>通过 <code> content slot</code> 自定义标记内容。</p>\n',
        'en-US': '<p> <code> content slot</code> Custom Prompt Content.</p>\n'
      },
      'codeFiles': ['slot-content.vue']
    },
    {
      'demoId': 'dynamic-hidden',
      'name': { 'zh-CN': '消息已读动态隐藏标记', 'en-US': 'Dynamic hiding flag of read messages' },
      'desc': {
        'zh-CN': '<p>通过 <code> hidden</code> 设置是否隐藏标记。</p>\n',
        'en-US': '<p>Set whether to hide tags by <code> hidden</code> .</p>\n'
      },
      'codeFiles': ['dynamic-hidden.vue']
    },
    {
      'demoId': 'offset',
      'name': { 'zh-CN': '标记的位置', 'en-US': 'Tag Offset' },
      'desc': {
        'zh-CN': '<p>通过 <code> offset</code> 调整标记的位置。</p>\n',
        'en-US': '<p> <code> offset</code> Custom Tag Offset.</p>\n'
      },
      'codeFiles': ['offset.vue']
    }
  ],
  apis: [
    {
      'name': 'badge',
      'type': 'component',
      'props': [
        {
          'name': 'badge-class',
          'type': 'string',
          'defaultValue': '',
          'desc': {
            'zh-CN': '自定义标记的类名',
            'en-US': 'Class name for custom tags'
          },
          'demoId': 'badge-class'
        },
        {
          'name': 'data',
          'type': 'string',
          'defaultValue': '',
          'desc': {
            'zh-CN': '设置文本内容',
            'en-US': 'Set Text Content'
          },
          'demoId': 'basic-usage'
        },
        {
          'name': 'hidden',
          'type': 'boolean',
          'defaultValue': 'false',
          'desc': {
            'zh-CN': '是否隐藏标记',
            'en-US': 'Whether to hide badge'
          },
          'demoId': 'dynamic-hidden'
        },
        {
          'name': 'href',
          'type': 'string',
          'defaultValue': '',
          'desc': {
            'zh-CN': '指定跳转的目标页面地址',
            'en-US': 'Specify the URL of the target page.'
          },
          'demoId': 'target'
        },
        {
          'name': 'is-dot',
          'type': 'boolean',
          'defaultValue': 'false',
          'desc': {
            'zh-CN': '设置是否以小圆点的形式来显示标记',
            'en-US': 'Set whether to display the badge in the form of small dots'
          },
          'demoId': 'is-dot'
        },
        {
          'name': 'max',
          'type': 'number',
          'defaultValue': '',
          'desc': {
            'zh-CN':
              '指定徽章显示的最大值,如果实际获取的徽章值超过该最大值，则以最大值后接一个"+"的形式显示徽章数;要求 value 是 number 类型',
            'en-US':
              'Specifies the maximum number of badges to be displayed. If the actual badge value exceeds the maximum value, the number of badges is displayed in the format of "+". The value must be of the number type.'
          },
          'demoId': 'max'
        },
        {
          'name': 'offset',
          'type': 'string',
          'defaultValue': '',
          'desc': {
            'zh-CN': '设置标记位置的偏移量，详见demo',
            'en-US': 'Set the offset of the marker position, see demo for details'
          },
          'demoId': 'offset'
        },
        {
          'name': 'target',
          'type': 'string',
          'defaultValue': '',
          'desc': {
            'zh-CN': '设置点击标记时链接到目标页面的跳转方式，仅在 href 属性存在时使用',
            'en-US':
              'Set the jump method for linking to the target page when clicking on the tag, only used when the href attribute exists'
          },
          'demoId': 'link'
        },
        {
          'name': 'type',
          'type': 'primary | success | warning | danger | info',
          'defaultValue': 'danger',
          'desc': {
            'zh-CN': '设置标记的类型',
            'en-US': 'Set the type of badge'
          },
          'demoId': 'type'
        },
        {
          'name': 'value',
          'type': 'number | string',
          'defaultValue': '',
          'desc': {
            'zh-CN': '设置相关数据条目数',
            'en-US': 'Set the number of related data entries'
          },
          'demoId': 'basic-usage'
        }
      ],
      'events': [],
      'slots': [
        {
          'name': 'content',
          'type': '',
          'defaultValue': '',
          'desc': {
            'zh-CN': '消息提示内容',
            'en-US': 'Message Content'
          },
          'demoId': 'slot-content'
        },
        {
          'name': 'default',
          'type': '',
          'defaultValue': '',
          'desc': {
            'zh-CN': '默认插槽，有data属性时，默认插槽不生效',
            'en-US': 'Default slot. When there is a data attribute, the default slot is not valid'
          },
          'demoId': 'slot-default'
        }
      ]
    }
  ]
}
