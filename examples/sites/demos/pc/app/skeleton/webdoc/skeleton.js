export default {
  column: '2',
  owner: '',
  demos: [
    {
      demoId: 'base',
      name: {
        'zh-CN': '基本用法',
        'en-US': 'Basic Usage'
      },
      desc: {
        'zh-CN': '<p>基础的骨架效果。</p>\n',
        'en-US': '<p>Basic skeleton effect.</p>\n'
      },
      codeFiles: ['base.vue']
    },
    {
      demoId: 'size',
      name: {
        'zh-CN': '尺寸',
        'en-US': 'size'
      },
      desc: {
        'zh-CN': '<p>通过 <code>size</code>  属性可以控制骨架屏的尺寸。</p>\n',
        'en-US': '<p>The <code>size</code> property allows you to control the size of the skeleton screen.</p>\n'
      },
      codeFiles: ['size.vue']
    },
    {
      demoId: 'complex-demo',
      name: {
        'zh-CN': '头像模式',
        'en-US': 'Portrait Mode'
      },
      desc: {
        'zh-CN': '<p>通过 <code>avatar</code> 属性控制骨架段落左侧出现头像占位。</p>\n',
        'en-US':
          '<p> Use the <code>avatar</code> attribute to control the display of the avatar on the left of the skeleton paragraph.</p>\n'
      },
      codeFiles: ['complex-demo.vue']
    },
    {
      demoId: 'custom-rows',
      name: {
        'zh-CN': '段落行数',
        'en-US': 'Custom rows'
      },
      desc: {
        'zh-CN':
          '<p>段落默认渲染 4 行，通过 <code>rows</code> 属性控制段落行数，显示的数量会比传入的数量多 1，首行会被渲染一个长度 40% 的段首，末行会被渲染一个长度 60% 的段尾。</p>\n',
        'en-US':
          '<p>By default, paragraphs are rendered in 4 lines. The number of paragraph lines is controlled through the <code>rows</code> attribute. The number displayed will be 1 more than the number passed in. The first line will render the paragraph header at 40% length, and the last line will render the paragraph trailer at 60% length.</p>\n'
      },
      codeFiles: ['custom-rows.vue']
    },
    {
      demoId: 'custom-paragraph-width',
      name: {
        'zh-CN': '段落宽度',
        'en-US': 'Custom paragraph width'
      },
      desc: {
        'zh-CN': '<p>通过 <code>rows-width</code> 属性可以段落宽度。</p>\n',
        'en-US':
          '<p>The <code>rows-width</code> attribute can customize the paragraph width. Each item in the array can be <code>number</code> or <code>string</code>. When it is <code>number< /code>, the component will automatically increase the <code>px</code> unit</p>\n'
      },
      codeFiles: ['custom-paragraph-width.vue']
    },
    {
      demoId: 'custom-layout',
      name: {
        'zh-CN': '样式',
        'en-US': 'Custom layout'
      },
      desc: {
        'zh-CN': '<p>通过 <code>class</code> 和 <code>style</code> 可自定义样式结构。</p>\n',
        'en-US':
          '<p>When the default layout does not meet the needs, the layout structure can be customized, and styles such as width and height can be customized through <code>class</code> and <code>style</code>.</p>\n'
      },
      codeFiles: ['custom-layout.vue']
    },
    {
      demoId: 'loading-completed',
      name: {
        'zh-CN': '加载完成',
        'en-US': 'Loading completed'
      },
      desc: {
        'zh-CN':
          '<p>通过 <code>loading</code> 属性的值来表示是否加载完成。 可以通过具名插槽 <code>default</code> 来构建 <code>loading</code> 结束之后需要展示的真实 DOM 元素结构。</p>\n',
        'en-US':
          '<p>Whether the loading is completed is indicated by the value of the <code>loading</code> attribute. You can use the named slot <code>default</code> to build the real DOM element structure that needs to be displayed after <code>loading</code> ends.</p>\n'
      },
      codeFiles: ['loading-completed.vue']
    },
    {
      demoId: 'animation',
      name: {
        'zh-CN': '动画效果',
        'en-US': 'Animation Effect'
      },
      desc: {
        'zh-CN': '<p>通过 <code>animated</code> 属性设置是否开启动画。</p>\n',
        'en-US': '<p>Use the <code>animated</code> attribute to set whether to enable animation.</p>\n'
      },
      codeFiles: ['animation.vue']
    },
    {
      demoId: 'fine-grained-mode',
      name: {
        'zh-CN': '形态',
        'en-US': 'formative'
      },
      desc: {
        'zh-CN': '<p>通过 <code>variant</code> 属性可以控制 <code>skeleton-item</code> 的形态。</p>\n',
        'en-US':
          '<p>The <code>variant</code> attribute can be used to control the shape of the <code>skeleton-item</code>.</p>\n'
      },
      codeFiles: ['fine-grained-mode.vue']
    }
  ]
}
