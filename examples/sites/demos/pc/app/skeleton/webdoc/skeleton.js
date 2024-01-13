export default {
  column: '2',
  owner: '',
  demos: [
    {
      'demoId': 'base',
      'name': { 'zh-CN': '基本用法', 'en-US': 'Basic Usage' },
      'desc': {
        'zh-CN': '<p>基础的骨架效果。</p>\n',
        'en-US': '<p>Basic skeleton effect.</p>\n'
      },
      'codeFiles': ['base.vue']
    },
    {
      'demoId': 'complex-demo',
      'name': { 'zh-CN': '复杂的组合', 'en-US': 'Complex Demo' },
      'desc': {
        'zh-CN': '<p>更复杂的组合，通过 <code>avatar</code> 属性控制骨架段落左侧出现头像占位。</p>\n',
        'en-US':
          '<p>More complex combinations, use the <code>avatar</code> attribute to control the appearance of the avatar placeholder on the left side of the skeleton paragraph.</p>\n'
      },
      'codeFiles': ['complex-demo.vue']
    },
    {
      'demoId': 'custom-rows',
      'name': { 'zh-CN': '自定义段落行数', 'en-US': 'Custom rows' },
      'desc': {
        'zh-CN':
          '<p>段落默认渲染 4 行，通过 <code>rows</code> 属性控制段落行数，显示的数量会比传入的数量多 1，首行会被渲染一个长度 40% 的段首，末行会被渲染一个长度 60% 的段尾。</p>\n',
        'en-US':
          '<p>By default, paragraphs are rendered in 4 lines. The number of paragraph lines is controlled through the <code>rows</code> attribute. The number displayed will be 1 more than the number passed in. The first line will render the paragraph header at 40% length, and the last line will render the paragraph trailer at 60% length.</p>\n'
      },
      'codeFiles': ['custom-rows.vue']
    },
    {
      'demoId': 'custom-layout',
      'name': { 'zh-CN': '自定义排版', 'en-US': 'Custom layout' },
      'desc': {
        'zh-CN':
          '<p>当默认排版不满足需求时，可自定义排版结构，通过 <code>class</code> 和 <code>style</code> 可自定义宽高等样式。</p>\n',
        'en-US':
          '<p>When the default layout does not meet the needs, the layout structure can be customized, and styles such as width and height can be customized through <code>class</code> and <code>style</code>.</p>\n'
      },
      'codeFiles': ['custom-layout.vue']
    },
    {
      'demoId': 'loading-completed',
      'name': { 'zh-CN': '加载完成', 'en-US': 'Loading completed' },
      'desc': {
        'zh-CN':
          '<p>通过 <code>loading</code> 属性的值来表示是否加载完成。 可以通过具名插槽 <code>default</code> 来构建 <code>loading</code> 结束之后需要展示的真实 DOM 元素结构。</p>\n',
        'en-US':
          '<p>Whether the loading is completed is indicated by the value of the <code>loading</code> attribute. You can use the named slot <code>default</code> to build the real DOM element structure that needs to be displayed after <code>loading</code> ends.</p>\n'
      },
      'codeFiles': ['loading-completed.vue']
    },
    {
      'demoId': 'custom-paragraph-width',
      'name': { 'zh-CN': '自定义段落宽度', 'en-US': 'Custom paragraph width' },
      'desc': {
        'zh-CN':
          '<p><code>rows-width</code> 属性可以自定义段落宽度，数组中的每一项可以为 <code>number</code> 或 <code>string</code>，当为 <code>number</code> 时，组件会自动增加 <code>px</code> 单位。</p>\n',
        'en-US':
          '<p>The <code>rows-width</code> attribute can customize the paragraph width. Each item in the array can be <code>number</code> or <code>string</code>. When it is <code>number< /code>, the component will automatically increase the <code>px</code> unit</p>\n'
      },
      'codeFiles': ['custom-paragraph-width.vue']
    },
    {
      'demoId': 'fine-grained-mode',
      'name': { 'zh-CN': '细粒度模式', 'en-US': 'Fine-grained mode' },
      'desc': {
        'zh-CN':
          '<p>细粒度模式，<code>variant</code> 属性可以控制 <code>skeleton-item</code> 的形态，可选值：image / circle / square。<code>size</code> 属性可以控制 <code>skeleton-item</code> 的大小，可选值：medium / small / large。</p>\n',
        'en-US':
          '<p>Fine-grained mode, the <code>variant</code> attribute can control the shape of <code>skeleton-item</code>, optional values: image / circle / square. The <code>size</code> attribute can control the size of <code>skeleton-item</code>. Optional values: medium / small / large.</p>\n'
      },
      'codeFiles': ['fine-grained-mode.vue']
    }
  ],
  apis: [
    {
      'name': 'skeleton',
      'type': 'component',
      'props': [
        {
          'name': 'loading',
          'type': 'boolean',
          'defaultValue': 'true',
          'desc': {
            'zh-CN': '是否显示骨架屏，传 false 时会展示加载完成后的内容',
            'en-US':
              'Customized interface. A Promise object is returned. This parameter is mandatory when the framework service is not used.'
          },
          'demoId': 'custom-layout'
        },
        {
          'name': 'active',
          'type': 'boolean',
          'defaultValue': 'true',
          'desc': {
            'zh-CN': '是否开启动画',
            'en-US':
              'Customized interface. A Promise object is returned. This parameter is mandatory when the framework service is not used.'
          },
          'demoId': 'fine-grained-mode'
        },
        {
          'name': 'avatar',
          'type': 'boolean',
          'defaultValue': 'false',
          'desc': {
            'zh-CN': '是否显示头像',
            'en-US':
              'Customized interface. A Promise object is returned. This parameter is mandatory when the framework service is not used.'
          },
          'demoId': 'complex-demo'
        },
        {
          'name': 'rows',
          'type': 'number',
          'defaultValue': '3',
          'desc': {
            'zh-CN': '默认排版，可配置段落显示行数',
            'en-US':
              'Customized interface. A Promise object is returned. This parameter is mandatory when the framework service is not used.'
          },
          'demoId': 'custom-rows'
        },
        {
          'name': 'rows-width',
          'type': 'number[] | string[]',
          'defaultValue': '[]',
          'desc': {
            'zh-CN': '自定义段落每一行的宽度',
            'en-US':
              'Customized interface. A Promise object is returned. This parameter is mandatory when the framework service is not used.'
          },
          'demoId': 'custom-paragraph-width'
        }
      ],
      'slots': [
        {
          'name': 'default',
          'type': '',
          'defaultValue': '',
          'desc': {
            'zh-CN': '加载完成后显示的内容',
            'en-US': 'Option default slot'
          },
          'demoId': 'custom-layout'
        },
        {
          'name': 'placeholder',
          'type': '',
          'defaultValue': '',
          'desc': {
            'zh-CN': '自定义骨架屏结构',
            'en-US': 'Option default slot'
          },
          'demoId': 'custom-layout'
        }
      ]
    },
    {
      'name': 'skeleton-item',
      'type': 'component',
      'props': [
        {
          'name': 'variant',
          'type': 'IVariant',
          'defaultValue': 'square',
          'desc': {
            'zh-CN': '骨架屏形态',
            'en-US':
              'Customized interface. A Promise object is returned. This parameter is mandatory when the framework service is not used.'
          },
          'demoId': 'fine-grained-mode'
        },
        {
          'name': 'size',
          'type': 'ISize',
          'defaultValue': 'medium',
          'desc': {
            'zh-CN': '针对 image 和 circle 形态，内置三种大小',
            'en-US':
              'Customized interface. A Promise object is returned. This parameter is mandatory when the framework service is not used.'
          },
          'demoId': 'fine-grained-mode'
        }
      ]
    }
  ],
  types: [
    {
      name: 'IVariant',
      type: 'type',
      code: `type IVariant = 'image' | 'circle' | 'square'`
    },
    {
      name: 'ISize',
      type: 'type',
      code: `type ISize = 'large' | 'medium' | 'small'`
    }
  ]
}
