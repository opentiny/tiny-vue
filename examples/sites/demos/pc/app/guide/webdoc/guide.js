export default {
  column: '2',
  owner: '',
  demos: [
    {
      'demoId': 'basic-usage',
      'name': { 'zh-CN': '基础用法', 'en-US': '' },
      'desc': {
        'zh-CN': '<p>通过 <code>dom-data</code> 设置每一个步骤要显示的内容，<code>show-step</code> 设置为 <code>true</code> 即可开启指引。<code>dom-data</code> 详细配置可参考 <a href="#IDomData">IDomData</a> 类型。</p>',
        'en-US': ''
      },
      'codeFiles': ['basic-usage.vue']
    },
    {
      'demoId': 'arrow-position',
      'name': { 'zh-CN': '箭头位置', 'en-US': '' },
      'desc': {
        'zh-CN': `
          <p>通过 <code>pop-position</code> 属性设置箭头位置，该属性的可选值可参考 <a href="#IPosition">IPosition</a> 类型。</p>
          <p>若存在多个步骤，需要单独给每个步骤设置不同的展示位置，可以在 <code>dom-data</code> 里面添加 <code>popPosition</code> 属性并赋值，若存在单独设置的箭头位置，则会覆盖全局的箭头位置。</p>
        `,
        'en-US': ''
      },
      'codeFiles': ['arrow-position.vue']
    },
    {
      'demoId': 'only-content',
      'name': { 'zh-CN': '纯段落用户引导', 'en-US': '' },
      'desc': {
        'zh-CN': '<p>通过添加 <code>only-content</code> 类名实现纯段落用户引导。</p>',
        'en-US': ''
      },
      'codeFiles': ['only-content.vue']
    },
    {
      'demoId': 'highlight-box',
      'name': { 'zh-CN': '高亮多处', 'en-US': '' },
      'desc': {
        'zh-CN': '<p>在 <code>dom-data</code> 里面通过 <code>hightBox</code> 属性添加需要高亮的元素。</p>',
        'en-US': ''
      },
      'codeFiles': ['highlight-box.vue']
    },
    {
      'demoId': 'offset',
      'name': { 'zh-CN': '引导框偏移量', 'en-US': '' },
      'desc': {
        'zh-CN': '<p>通过 <code>main-axis</code> / <code>cross-axis</code> / <code>alignment-axis</code> 设置纵轴、横轴和对齐轴的偏移量。</p>',
        'en-US': ''
      },
      'codeFiles': ['offset.vue']
    },
    {
      'demoId': 'image-text',
      'name': { 'zh-CN': '图文结合用户引导', 'en-US': '' },
      'desc': {
        'zh-CN': '<p>可以在插槽里面添加任何 <code>html</code> 或通过 <code>dom-data</code> 里面的 <code>text</code> 属性实现图文结合用户引导。</p>',
        'en-US': ''
      },
      'codeFiles': ['image-text.vue']
    },
    {
      'demoId': 'size',
      'name': { 'zh-CN': '自定义宽高', 'en-US': '' },
      'desc': {
        'zh-CN': '<p>通过添加 <code>width</code> 和 <code>height</code> 来自定义宽高。</p>',
        'en-US': ''
      },
      'codeFiles': ['size.vue']
    },
    {
      'demoId': 'modal-overlay-opening',
      'name': { 'zh-CN': '设置模态叠加层开口', 'en-US': '' },
      'desc': {
        'zh-CN': `
          <p><code>modal-overlay-opening-padding</code>：可以在模态叠加层开口周围添加的填充量，控制引导元素高亮范围；</p>
          <p><code>modal-overlay-opening-radius</code>：可以在模态叠加层开口周围添加的边界半径量，控制引导元素高亮圆角。</p>
        `,
        'en-US': ''
      },
      'codeFiles': ['modal-overlay-opening.vue']
    },
    {
      'demoId': 'callback',
      'name': { 'zh-CN': '事件回调', 'en-US': '' },
      'desc': {
        'zh-CN': '<p>事件回调在 <code>dom-data</code> 中使用，详情可参考 <a href="#IDomData">IDomData</a> 类型。</p>',
        'en-US': ''
      },
      'codeFiles': ['callback.vue']
    }
  ],
  apis: [
    {
      'name': 'guide',
      'type': 'component',
      'props': [
        {
          'name': 'alignment-axis',
          'type': 'number',
          'defaultValue': '0',
          'desc': {
            'zh-CN': '设置引导框对齐轴距离',
            'en-US': ''
          },
          'demoId': 'offset'
        },
        {
          'name': 'arrow',
          'type': 'boolean',
          'defaultValue': 'true',
          'desc': {
            'zh-CN': '是否显示工具提示的箭头',
            'en-US': ''
          },
          'demoId': 'basic-usage'
        },
        {
          'name': 'cross-axis',
          'type': 'number',
          'defaultValue': '0',
          'desc': {
            'zh-CN': '设置引导框横轴距离',
            'en-US': ''
          },
          'demoId': 'offset'
        },
        {
          'name': 'dom-data',
          'type': 'IDomData[]',
          'typeAnchorName': 'IDomData',
          'defaultValue': '--',
          'desc': {
            'zh-CN': '用户引导参数',
            'en-US': ''
          },
          'demoId': 'basic-usage'
        },
        {
          'name': 'height',
          'type': 'number',
          'defaultValue': '--',
          'desc': {
            'zh-CN': '设置引导框高度',
            'en-US': ''
          },
          'demoId': 'size'
        },
        {
          'name': 'light-class',
          'type': 'string',
          'defaultValue': '--',
          'desc': {
            'zh-CN': '当元素突出显示时（即，当其步骤处于活动状态时）应用于元素的类名',
            'en-US': ''
          },
          'demoId': ''
        },
        {
          'name': 'main-axis',
          'type': 'number',
          'defaultValue': '18',
          'desc': {
            'zh-CN': '设置引导框主轴（纵轴）距离',
            'en-US': ''
          },
          'demoId': 'offset'
        },
        {
          'name': 'modal-overlay-opening-padding',
          'type': 'number',
          'defaultValue': '0',
          'desc': {
            'zh-CN': '在模态叠加层开口周围添加的填充量',
            'en-US': ''
          },
          'demoId': 'modal-overlay-opening'
        },
        {
          'name': 'modal-overlay-opening-radius',
          'type': 'number',
          'defaultValue': '0',
          'desc': {
            'zh-CN': '在模态叠加层开口周围添加的边界半径量',
            'en-US': ''
          },
          'demoId': 'modal-overlay-opening'
        },
        {
          'name': 'pop-position',
          'type': 'IPosition',
          'typeAnchorName': 'IPosition',
          'defaultValue': '\'bottom\'',
          'desc': {
            'zh-CN': '引导框箭头位置，该属性的可选值可参考 IPosition 类型',
            'en-US': ''
          },
          'demoId': 'arrow-position'
        },
        {
          'name': 'width',
          'type': 'number',
          'defaultValue': '510',
          'desc': {
            'zh-CN': '设置引导框宽度',
            'en-US': ''
          },
          'demoId': 'size'
        }
      ],
      'events': [],
      'slots': [
        {
          'name': 'main',
          'type': '',
          'defaultValue': '',
          'desc': {
            'zh-CN': '设置引导框内容',
            'en-US': ''
          },
          'demoId': 'highlight-box'
        }
      ]
    }
  ],
  'types': [
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
