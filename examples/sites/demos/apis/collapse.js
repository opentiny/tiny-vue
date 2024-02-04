export default {
  mode: ['pc', 'mobile-first'],
  apis: [
    {
      name: 'collapse',
      type: 'component',
      props: [
        {
          name: 'accordion',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '是否手风琴模式',
            'en-US': 'In accordion mode'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'accordion',
          mfDemo: ''
        },
        {
          name: 'before-close',
          type: '(item: Component, activeNames: string | number | Array) => boolean',
          defaultValue: '',
          desc: {
            'zh-CN': '阻止折叠面板切换',
            'en-US': 'Do not close the folding panel.'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'before-close',
          mfDemo: ''
        },
        {
          name: 'modelValue / v-model',
          type: 'string | number | Array',
          defaultValue: '',
          desc: {
            'zh-CN': '当前激活的面板。如果是手风琴模式，绑定值类型需要为 string | number，否则为 Array',
            'en-US':
              'Currently activated panel (In accordion mode, the binding value type must be string. Otherwise, the binding value type is array.)'
          },
          mode: ['pc'],
          pcDemo: 'basic-usage'
        },
        {
          name: 'v-model',
          type: 'String / Array /Number',
          defaultValue: '',
          desc: {
            'zh-CN': '当前激活的面板(如果是手风琴模式，绑定值类型需要为string，否则为array)',
            'en-US': ''
          },
          mode: ['mobile-first'],
          mfDemo: ''
        }
      ],
      events: [
        {
          name: 'change',
          type: '(activeNames: string | number | Array) => void',
          defaultValue: '',
          desc: {
            'zh-CN': '当前激活面板改变时触发。如果是手风琴模式，参数 activeNames 类型为 string | number，否则为 Array',
            'en-US':
              'Triggered when the current active panel changes. (In accordion mode, the type of activeNames is string. Otherwise, the type of activeNames is array.)'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'events',
          mfDemo: ''
        }
      ],
      methods: [],
      slots: [
        {
          name: 'default',
          type: '',
          defaultValue: '',
          desc: {
            'zh-CN': '默认插槽',
            'en-US': 'Default slot'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'disable',
          mfDemo: ''
        },
        {
          name: 'icon',
          type: '',
          defaultValue: '',
          desc: {
            'zh-CN': '展开收起icon插槽',
            'en-US': 'Expand and collapse icon slot'
          },
          mode: ['mobile-first'],
          mfDemo: 'slot-icon'
        }
      ]
    },
    {
      name: 'collapse-item',
      type: 'component',
      props: [
        {
          name: 'disabled',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '是否禁用',
            'en-US': 'Disable'
          },
          mode: ['pc'],
          pcDemo: 'disable'
        },
        {
          name: 'name',
          type: 'string | number',
          defaultValue: '',
          desc: {
            'zh-CN': '唯一标志符',
            'en-US': 'Unique identifier'
          },
          mode: ['pc'],
          pcDemo: 'basic-usage'
        },
        {
          name: 'title',
          type: 'string',
          defaultValue: '',
          desc: {
            'zh-CN': '面板标题',
            'en-US': 'Panel Title'
          },
          mode: ['pc'],
          pcDemo: 'title'
        },
        {
          name: 'title-right',
          type: 'string',
          defaultValue: '',
          desc: {
            'zh-CN': '自定义面板标题右侧内容',
            'en-US': ''
          },
          mode: ['pc'],
          pcDemo: 'title'
        }
      ],
      events: [],
      methods: [],
      slots: [
        {
          name: 'default',
          defaultValue: '',
          desc: {
            'zh-CN': '默认插槽',
            'en-US': 'Default slot'
          },
          mode: ['pc'],
          pcDemo: 'basic-usage'
        },
        {
          name: 'icon',
          defaultValue: '',
          desc: {
            'zh-CN': '展开折叠 icon 图标',
            'en-US': 'Expand and collapse the icon.'
          },
          mode: ['pc'],
          pcDemo: 'icon'
        },
        {
          name: 'title',
          defaultValue: '',
          desc: {
            'zh-CN': '标题',
            'en-US': 'Title'
          },
          mode: ['pc'],
          pcDemo: 'title'
        },
        {
          name: 'title-right',
          defaultValue: '',
          desc: {
            'zh-CN': '自定义面板标题右侧内容',
            'en-US': ''
          },
          mode: ['pc'],
          pcDemo: 'title'
        }
      ]
    }
  ]
}
