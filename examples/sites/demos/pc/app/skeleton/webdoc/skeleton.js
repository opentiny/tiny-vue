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
      demoId: 'complex-demo',
      name: {
        'zh-CN': '复杂的组合',
        'en-US': 'Complex Demo'
      },
      desc: {
        'zh-CN': '<p>更复杂的组合，通过 <code>avatar</code> 属性控制骨架段落左侧出现头像占位。</p>\n',
        'en-US':
          '<p>More complex combinations, use the <code>avatar</code> attribute to control the appearance of the avatar placeholder on the left side of the skeleton paragraph.</p>\n'
      },
      codeFiles: ['complex-demo.vue']
    },
    {
      demoId: 'custom-rows',
      name: {
        'zh-CN': '自定义段落行数',
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
      demoId: 'custom-layout',
      name: {
        'zh-CN': '自定义排版',
        'en-US': 'Custom layout'
      },
      desc: {
        'zh-CN':
          '<p>当默认排版不满足需求时，可自定义排版结构，通过 <code>class</code> 和 <code>style</code> 可自定义宽高等样式。</p>\n',
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
      demoId: 'custom-paragraph-width',
      name: {
        'zh-CN': '自定义段落宽度',
        'en-US': 'Custom paragraph width'
      },
      desc: {
        'zh-CN':
          '<p><code>rows-width</code> 属性可以自定义段落宽度，数组中的每一项可以为 <code>number</code> 或 <code>string</code>，当为 <code>number</code> 时，组件会自动增加 <code>px</code> 单位。</p>\n',
        'en-US':
          '<p>The <code>rows-width</code> attribute can customize the paragraph width. Each item in the array can be <code>number</code> or <code>string</code>. When it is <code>number< /code>, the component will automatically increase the <code>px</code> unit</p>\n'
      },
      codeFiles: ['custom-paragraph-width.vue']
    },
    {
      demoId: 'fine-grained-mode',
      name: {
        'zh-CN': '细粒度模式',
        'en-US': 'Fine-grained mode'
      },
      desc: {
        'zh-CN':
          '<p>细粒度模式，<code>variant</code> 属性可以控制 <code>skeleton-item</code> 的形态，可选值：image / circle / square。<code>size</code> 属性可以控制 <code>skeleton-item</code> 的大小，可选值：medium / small / large。</p>\n',
        'en-US':
          '<p>Fine-grained mode, the <code>variant</code> attribute can control the shape of <code>skeleton-item</code>, optional values: image / circle / square. The <code>size</code> attribute can control the size of <code>skeleton-item</code>. Optional values: medium / small / large.</p>\n'
      },
      codeFiles: ['fine-grained-mode.vue']
    }
  ]
}
