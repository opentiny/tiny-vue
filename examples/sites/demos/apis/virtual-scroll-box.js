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
            'zh-CN': '虚拟滚动区域的宽度',
            'en-US': 'Width of the virtual scrolling area'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'table',
          mfDemo: 'table'
        },
        {
          name: 'height',
          type: 'string | number',
          defaultValue: '',
          desc: {
            'zh-CN': '虚拟滚动区域的高度',
            'en-US': 'Height of the virtual scrolling area'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'table',
          mfDemo: 'table'
        },
        {
          name: 'row-buffer',
          type: 'string | number',
          defaultValue: '200',
          desc: {
            'zh-CN': '虚拟滚动行缓冲区高度',
            'en-US': 'Indicates the height of the virtual scrolling line buffer. The default value is 200'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'table',
          mfDemo: 'table'
        },
        {
          name: 'column-buffer',
          type: 'string | number',
          defaultValue: '200',
          desc: {
            'zh-CN': '虚拟滚动列缓冲区宽度',
            'en-US': 'Width of the virtual scrolling column buffer. The default value is 200'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'table',
          mfDemo: 'table'
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
          pcDemo: 'table',
          mfDemo: 'table'
        },
        {
          name: 'columns',
          type: 'Array<{string: any}>',
          defaultValue: '',
          desc: {
            'zh-CN': '所有的列',
            'en-US': 'All the columns'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'table',
          mfDemo: 'table'
        },
        {
          name: 'column-sizes',
          type: 'Array<number | string>',
          defaultValue: '',
          desc: {
            'zh-CN': '每个列对应的宽度',
            'en-US': 'Width of each column'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'table',
          mfDemo: 'table'
        },
        {
          name: 'rows',
          type: 'Array<{string: any}>',
          defaultValue: '',
          desc: {
            'zh-CN': '所有的行',
            'en-US': 'All the lines'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'table',
          mfDemo: 'table'
        },
        {
          name: 'row-sizes',
          type: 'Array<number | string>',
          defaultValue: '',
          desc: {
            'zh-CN': '每个行对应的高度',
            'en-US': 'Height of each row'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'table',
          mfDemo: 'table'
        },
        {
          name: 'fixed-rows',
          type: 'Array<{string: any}>',
          defaultValue: '',
          desc: {
            'zh-CN': '行固定配置',
            'en-US': 'Fixed line configuration'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'table',
          mfDemo: 'table'
        },
        {
          name: 'fixed-columns',
          type: 'Array<{string: any}>',
          defaultValue: '',
          desc: {
            'zh-CN': '列固定配置',
            'en-US': 'Fixed Column Configuration'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'table',
          mfDemo: 'table'
        },
        {
          name: 'span-config',
          type: 'Array<{string: any}>',
          defaultValue: '',
          desc: {
            'zh-CN': '单元格合并配置',
            'en-US': 'Cell Merge Configuration'
          },
          mode: ['pc', 'mobile-first'],
          pcDemo: 'table',
          mfDemo: 'table'
        }
      ],
      methods: [
        {
          name: 'refresh',
          type: '(arg: IRefreshArgs) => void',
          typeAnchorName: 'IRefreshArgs',
          desc: {
            'zh-CN': '刷新虚拟滚动状态。默认不保持之前的滚动位置，可以通过参数控制',
            'en-US':
              'Refreshes the virtual scrolling status. By default, the previous scrolling position is not retained, which can be controlled by parameters'
          },
          mode: ['pc'],
          pcDemo: 'btn-events'
        }
      ],
      events: [
        {
          name: 'change',
          type: '(arg: IChangeArgs) => void',
          typeAnchorName: 'IChangeArgs',
          desc: {
            'zh-CN': '在虚滚状态改变时抛出',
            'en-US': 'Thrown when the virtual roll state changes'
          },
          mode: ['pc'],
          pcDemo: 'btn-events'
        }
      ],
      slots: [
        {
          name: 'default',
          defaultValue: '',
          desc: {
            'zh-CN': '默认插槽',
            'en-US': 'Basic Slot'
          },
          mode: ['pc'],
          pcDemo: 'table'
        }
      ]
    }
  ],
  types: [
    {
      name: 'IChangeArgs',
      type: 'interface',
      code: `
interface IChangeArgs { 
viewRows: Array<{string:any}>
viewCols: Array<{string:any}>
isScrollX: boolean
isScrollY: boolean
isTop: boolean
isBottom: boolean
isLeft: boolean
isRight: boolean 
}`
    },
    {
      name: 'IRefreshArgs',
      type: 'interface',
      code: `
interface IRefreshArgs { 
isKeepScrollTop: boolean
isKeepScrollLeft: boolean 
}`
    }
  ]
}
