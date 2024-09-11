export default {
  mode: ['pc', 'mobile-first'],
  apis: [
    {
      name: 'virtual-tree',
      type: 'component',
      props: [
        {
          name: 'width',
          type: 'string | number',
          defaultValue: '',
          desc: {
            'zh-CN': '虚拟树的宽度',
            'en-US': 'Width of the virtual tree'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'basic-usage',
          mfDemo: 'basic-usage'
        },
        {
          name: 'height',
          type: 'string | number',
          defaultValue: '',
          desc: {
            'zh-CN': '虚拟树的高度',
            'en-US': 'Height of the virtual tree'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'basic-usage',
          mfDemo: 'basic-usage'
        },
        {
          name: 'row-height',
          type: 'string | number',
          defaultValue: '36',
          desc: {
            'zh-CN': '树的每一项的高度',
            'en-US': 'The height of each item of the tree'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'basic-usage',
          mfDemo: 'basic-usage'
        },
        {
          name: 'scrollbar-size',
          type: 'string | number',
          defaultValue: '6',
          desc: {
            'zh-CN': '滚动条尺寸',
            'en-US': 'Scroll Bar Size'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'basic-usage',
          mfDemo: 'basic-usage'
        },
        {
          name: 'tree-op',
          type: 'ITreeOp',
          defaultValue: '',
          desc: {
            'zh-CN': '内部Tree组件的属性配置，内部Tree组件的事件通过treeOp.events配置，具体可以参考Tree组件的配置项',
            'en-US':
              'Attribute configuration of the internal Tree component. The events of the internal Tree component are configured through treeOp.events'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'basic-usage',
          mfDemo: 'basic-usage'
        }
      ],
      methods: [
        {
          name: 'getTreeInstance',
          type: '() => Component',
          desc: {
            'zh-CN': '获取内部的Tree组件实例',
            'en-US': 'Obtains the internal instance of the Tree component'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: ''
        },
        {
          name: 'refresh',
          type: '() => void',
          desc: {
            'zh-CN': '刷新虚拟化树形控件组件',
            'en-US': 'Refreshing the Virtualization Tree Control Component'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: ''
        },
        {
          name: 'keepExpandStatus',
          type: '() => void',
          desc: {
            'zh-CN': '在刷新虚滚树之前调用，在刷新时保持之前的展开状态',
            'en-US':
              'Called before the virtual roll tree is refreshed, and the previous expanded state is retained during refresh'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: ''
        },
        {
          name: 'keepScrollTop',
          type: '() => void',
          desc: {
            'zh-CN': '在刷新虚滚树之前调用，在刷新时保持之前的滚动位置',
            'en-US':
              'Called before the virtual scroll tree is refreshed to maintain the previous scroll position during refresh'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: ''
        }
      ],
      events: [],
      slots: [
        {
          name: 'default',
          defaultValue: '',
          desc: {
            'zh-CN': '透传内部Tree的默认插槽',
            'en-US': 'Default slot for transparently transmitting internal trees'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: ''
        },
        {
          name: 'empty',
          defaultValue: '',
          desc: {
            'zh-CN': '透传内部Tree的empty插槽',
            'en-US': 'Empty slot for transparently transmitting internal trees'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: ''
        },
        {
          name: 'prefix',
          defaultValue: '',
          desc: {
            'zh-CN': '透传内部Tree的prefix插槽',
            'en-US': 'Prefix slot for transparently transmitting the internal tree'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: ''
        },
        {
          name: 'suffix',
          defaultValue: '',
          desc: {
            'zh-CN': '透传内部Tree的suffix插槽',
            'en-US': 'Suffix slot for transparently transmitting internal trees'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: ''
        },
        {
          name: 'operation',
          defaultValue: '',
          desc: {
            'zh-CN': '透传内部Tree的operation插槽',
            'en-US': 'Operation slot for transparently transmitting internal trees'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: ''
        }
      ]
    }
  ],
  types: []
}
