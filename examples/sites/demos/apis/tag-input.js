export default {
  mode: ['pc', 'mobile-first'],
  apis: [
    {
      name: 'tag-input',
      type: 'component',
      props: [
        {
          name: 'model-value / v-model',
          type: 'array',
          defaultValue: '[]',
          desc: {
            'zh-CN': '绑定值',
            'en-US': '‌Binding Value'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'tag-group-size',
          mfDemo: 'tag-group-size'
        },
        {
          name: 'size',
          type: "'medium' | 'small'",
          defaultValue: "'medium'",
          desc: {
            'zh-CN': '尺寸',
            'en-US': 'Size '
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'tag-group-size',
          mfDemo: 'tag-group-size'
        },
        {
          name: 'tag-type',
          typeAnchorName: 'IType',
          type: 'IType',
          defaultValue: '',
          desc: {
            'zh-CN': '显示类型',
            'en-US': 'Display type'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'basic-usage',
          mfDemo: ''
        },
        {
          name: 'tag-effect',
          typeAnchorName: 'IEffect',
          type: 'IEffect',
          defaultValue: "'light'",
          desc: {
            'zh-CN': '主题',
            'en-US': 'Theme Color'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'effect',
          mfDemo: ''
        },
        {
          name: 'clearable',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '是否可清空',
            'en-US': 'Whether it can be cleared'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'basic-usage',
          mfDemo: ''
        },
        {
          name: 'disabled',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '是否禁用标签输入框',
            'en-US': 'Whether the tag input box is disabled'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'basic-usage',
          mfDemo: ''
        },
        {
          name: 'max',
          type: 'number',
          defaultValue: 'Infinity',
          desc: {
            'zh-CN': '最大允许输入的标签数量',
            'en-US': 'Maximum number of tags allowed to be input'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'basic-usage',
          mfDemo: ''
        },
        {
          name: 'placeholder',
          type: 'string',
          defaultValue: '',
          desc: {
            'zh-CN': '占位符',
            'en-US': 'Placeholder'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'basic-usage',
          mfDemo: ''
        },
        {
          name: 'readonly',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '是否只读',
            'en-US': 'Whether it is read-only'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'basic-usage',
          mfDemo: ''
        },
        {
          name: 'draggable',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '是否可拖拽',
            'en-US': 'Whether it is draggable'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'basic-usage',
          mfDemo: ''
        },
        {
          name: 'minCollapsedNum',
          type: 'number',
          defaultValue: 'Infinity',
          desc: {
            'zh-CN': '最小折叠数量',
            'en-US': 'Minimum collapsed number'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'basic-usage',
          mfDemo: ''
        },
        {
          name: 'separator',
          type: 'string',
          defaultValue: ',',
          desc: {
            'zh-CN': '批量输入时标签分隔符',
            'en-US': 'Tag separator for batch input'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'basic-usage',
          mfDemo: ''
        }
      ],
      events: [],
      methods: [],
      slots: [
        {
          name: 'prefix',
          defaultValue: '',
          desc: {
            'zh-CN': '输入框前缀内容的插槽',
            'en-US': 'Input prefix slot'
          },
          mode: ['pc'],
          pcDemo: 'basic-usage'
        },
        {
          name: 'suffix',
          defaultValue: '',
          desc: {
            'zh-CN': '输入框后缀内容的插槽',
            'en-US': 'Input suffix slot'
          },
          mode: ['pc'],
          pcDemo: 'basic-usage'
        }
      ]
    }
  ],
  types: []
}
