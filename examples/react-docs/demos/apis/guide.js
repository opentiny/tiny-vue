export default {
  mode: ['pc'],
  apis: [
    {
      name: 'guide',
      type: 'component',
      props: [
        {
          name: 'alignment-axis',
          type: 'number',
          defaultValue: '0',
          desc: {
            'zh-CN': '设置引导框对齐轴距离',
            'en-US': ''
          },
          mode: ['pc'],
          pcDemo: 'offset'
        },
        {
          name: 'arrow',
          type: 'boolean',
          defaultValue: 'true',
          desc: {
            'zh-CN': '是否显示工具提示的箭头',
            'en-US': ''
          },
          mode: ['pc'],
          pcDemo: 'basic-usage'
        },
        {
          name: 'cross-axis',
          type: 'number',
          defaultValue: '0',
          desc: {
            'zh-CN': '设置引导框横轴距离',
            'en-US': ''
          },
          mode: ['pc'],
          pcDemo: 'offset'
        },
        {
          name: 'dom-data',
          typeAnchorName: 'IDomData',
          type: 'IDomData[]',
          defaultValue: '',
          desc: {
            'zh-CN': '用户引导参数',
            'en-US': ''
          },
          mode: ['pc'],
          pcDemo: 'basic-usage'
        },
        {
          name: 'height',
          type: 'number',
          defaultValue: '',
          desc: {
            'zh-CN': '设置引导框高度',
            'en-US': ''
          },
          mode: ['pc'],
          pcDemo: 'size'
        },
        {
          name: 'light-class',
          type: 'string',
          defaultValue: '',
          desc: {
            'zh-CN': '当元素突出显示时（即，当其步骤处于活动状态时）应用于元素的类名',
            'en-US': ''
          },
          mode: ['pc'],
          pcDemo: ''
        },
        {
          name: 'main-axis',
          type: 'number',
          defaultValue: '18',
          desc: {
            'zh-CN': '设置引导框主轴（纵轴）距离',
            'en-US': ''
          },
          mode: ['pc'],
          pcDemo: 'offset'
        },
        {
          name: 'modal-overlay-opening-padding',
          type: 'number',
          defaultValue: '0',
          desc: {
            'zh-CN': '在模态叠加层开口周围添加的填充量',
            'en-US': ''
          },
          mode: ['pc'],
          pcDemo: 'modal-overlay-opening'
        },
        {
          name: 'modal-overlay-opening-radius',
          type: 'number',
          defaultValue: '0',
          desc: {
            'zh-CN': '在模态叠加层开口周围添加的边界半径量',
            'en-US': ''
          },
          mode: ['pc'],
          pcDemo: 'modal-overlay-opening'
        },
        {
          name: 'pop-position',
          typeAnchorName: 'IPosition',
          type: 'IPosition',
          defaultValue: "'bottom'",
          desc: {
            'zh-CN': '引导框箭头位置，该属性的可选值可参考 IPosition 类型',
            'en-US': ''
          },
          mode: ['pc'],
          pcDemo: 'arrow-position'
        },
        {
          name: 'width',
          type: 'number',
          defaultValue: '510',
          desc: {
            'zh-CN': '设置引导框宽度',
            'en-US': ''
          },
          mode: ['pc'],
          pcDemo: 'size'
        }
      ],
      events: [],
      methods: [],
      slots: [
        {
          name: 'main',
          defaultValue: '',
          desc: {
            'zh-CN': '设置引导框内容',
            'en-US': ''
          },
          mode: ['pc'],
          pcDemo: 'highlight-box'
        }
      ]
    }
  ],
  types: [
    {
      name: 'IDomData',
      type: 'interface',
      code: `
interface IDomData {
  // 指引的标题
  title: string
  // 指引的内容（可以是 html）
  text: string
  // 需要绑定指引的元素类名（只能是类名，若未传入则显示为上下左右居中且无指示箭头）
  domElement: string
  // 添加需要高亮的元素的类名
  hightBox: string[]
  // 要添加到步骤的内容元素的一串类名
  classes: string

  // 展示前的回调函数
  beforeShow: () => void
  // 隐藏前的回调函数
  beforeHide: () => void
  // 显示的回调函数
  show: () => void
  // 隐藏的回调函数
  hide: () => void
  // 关闭的回调函数
  cancel: () => void
  //销毁的回调函数
  destroy: () => void
  // 完成的回调函数
  completey: () => void

  // 需要设置的按钮组
  button: {
    // 按钮名
    text: string
    // 需要执行的步骤，包含 next(下一步)、back(返回)、complete(完成)
    action: 'next' | 'back' | 'complete'
    // 按钮的类名
    classes: string
    // 是否是次要按钮
    secondary: boolean
  }[]
}
      `
    },
    {
      name: 'IPosition',
      type: 'type',
      code: `
type IPosition = 'top' | 'top-start' | 'top-end' | 'bottom' | 'bottom-start' | 'bottom-end' | 'left' | 'left-start' | 'left-end' | 'right' | 'right-start' | 'right-end'
      `
    }
  ]
}
