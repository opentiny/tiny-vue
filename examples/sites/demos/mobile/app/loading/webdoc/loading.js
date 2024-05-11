export default {
  column: '2',
  owner: '',
  demos: [
    {
      demoId: 'base',
      name: {
        'zh-CN': '基础用法',
        'en-US': 'Basic usage'
      },
      desc: {
        'zh-CN': '<p>通过 <code>service</code> 方法显示 Loading ，再通过 <code>close</code> 方法关闭。</p>',
        'en-US':
          '<p>Use the <code>service</code> method to display Loading, then close it using the <code>close</code> method.</p>'
      },
      codeFiles: ['base.vue']
    },
    {
      demoId: 'spinner',
      name: {
        'zh-CN': '自定义加载图标',
        'en-US': 'Custom Icon'
      },
      desc: {
        'zh-CN': '<p>通过 <code>spinner</code> 属性自定义加载图标。<p>',
        'en-US': '<p>Customize loading icon using the <code>spinner</code> attribute.</p>'
      },
      codeFiles: ['spinner.vue']
    },
    {
      demoId: 'tip-text',
      name: {
        'zh-CN': '自定义加载提示',
        'en-US': 'Custom Tip'
      },
      desc: {
        'zh-CN': '<p>通过 <code>text</code> 自定义加载文字的提示文本。<p>',
        'en-US': '<p>Use <code>text</code> to customize loading tip. </p>'
      },
      codeFiles: ['tip-text.vue']
    },
    {
      demoId: 'background',
      name: {
        'zh-CN': '自定义遮罩背景色',
        'en-US': 'CUstom Mask Background'
      },
      desc: {
        'zh-CN': '<p>通过 <code>background</code> 自定义遮罩层背景颜色。<p>',
        'en-US': '<p>Use <code>background</code> property to customize background color of mask.</p>'
      },
      codeFiles: ['background.vue']
    },
    {
      demoId: 'custom-class',
      name: {
        'zh-CN': '自定义样式',
        'en-US': 'events'
      },
      desc: {
        'zh-CN': '<p>通过 <code>custom-class</code> 指定类名进行样式修改。<p>',
        'en-US': '<p>Specify the class name using <code>custom-class</code> to modify the style.</p>'
      },
      codeFiles: ['custom-class.vue']
    },
    {
      demoId: 'size',
      name: {
        'zh-CN': '尺寸',
        'en-US': 'Size'
      },
      desc: {
        'zh-CN':
          '<p>通过在 <code>Loading.service</code> 中设置 <code>size</code> 属性加载不同的大小尺寸，包括 <code>large</code> | <code>medium</code> | <code>small</code> | <code>mini</code> 四种不同大小。不设置时为默认尺寸。<p>',
        'en-US':
          '<p>By setting the <code>size</code> attribute in the Loading.service, different size dimensions can be loaded, including <code>large</code>, <code>medium</code>, <code>small</code> and <code>mini</code>. If not set, the default size will be used.</p>'
      },
      codeFiles: ['size.vue']
    },
    {
      demoId: 'global-registry',
      name: {
        'zh-CN': '全局加载',
        'en-US': 'Global Registry'
      },
      desc: {
        'zh-CN': `<p>通过 <code>v-loading.lock.fullscreen</code> 指令方式或者服务方式进行全局加载，如需使用指令方式全局加载需要如下操作：
          <p>在 Vue 2 版本环境中添加 <code>Vue.use(Loading)</code>；</p><p>在Vue 3 版本环境中添加 <code>app.use(Loading)</code>.<p>`,
        'en-US': `<p>Global loading can be achieved through the <code>v-loading.lock.fullscreen</code> directive or service. To use the directive for global loading, follow these steps:</p><p>For Vue 2 environment, add <code>Vue.use(Loading)</code>;</p><p>For Vue 3 environment, add <code>app.use(Loading)</code>.</p>`
      },
      codeFiles: ['global-registry.vue']
    }
  ],
  apis: [
    {
      name: 'Loading', // 组件名称展示使用
      type: 'loading', // API 类型
      properties: [
        {
          name: 'type',
          type: 'string',
          defaultValue: 'primary',
          desc: {
            'zh-CN': '<p>通过type设置不同的加载样式</p>',
            'en-US': 'display different button'
          },
          demoId: 'type'
        },
        {
          name: 'background',
          type: 'string',
          defaultValue: `'#0000004b'`,
          desc: {
            'zh-CN': '遮罩层背景色',
            'en-US': 'mask background color'
          },
          demoId: 'background'
        },
        {
          name: 'custom-class',
          type: 'string',
          defaultValue: '--',
          desc: {
            'zh-CN': '自定义类名',
            'en-US': 'Custom class name'
          },
          demoId: 'custom-class'
        },
        {
          name: 'spinner',
          type: 'Component',
          defaultValue: '--',
          desc: {
            'zh-CN': '自定义加载图标',
            'en-US': 'display different button'
          },
          demoId: 'spinner'
        },
        {
          name: 'target',
          type: 'DOM',
          defaultValue: 'document.body',
          desc: {
            'zh-CN':
              '需要覆盖的 DOM 节点。可传入一个 DOM 对象或字符串；若传入字符串，则会将其作为参数传入 document.querySelector 以获取到对应 DOM 节点',
            'en-US':
              'The DOM node to be targeted for coverage. It can be a DOM object or a string; if a string is passed, it will be used as a parameter for document.querySelector to obtain the corresponding DOM node'
          },
          demoId: 'base'
        }
      ],
      method: [
        {
          name: 'close',
          type: '() => void',
          defaultValue: '',
          desc: {
            'zh-CN': '关闭 Loading',
            'en-US': 'close loading'
          },
          demoId: 'base'
        },
        {
          name: 'service',
          type: '() => Component',
          defaultValue: '',
          desc: {
            'zh-CN': '创建一个 Loading 组件实例并展示',
            'en-US': 'Create a Loading component instance and display it'
          },
          demoId: 'base'
        }
      ]
    }
  ]
}
