export default {
  column: '1',
  owner: '',
  show: true,
  cloud: true,
  demos: [
    {
      demoId: 'basic-usage',
      name: {
        'zh-CN': '基本用法',
        'en-US': 'Basic Usage'
      },
      desc: {
        'zh-CN': `
          从 <code>@opentiny/vue-icon</code> 图标库中引入图标函数。图标函数执行后生成一个有效的 <code> Vue </code> 图标组件，可以在模板中使用。<br>
          通过修改图标的 <code>font-size</code> 的样式，指定图标的大小，通过修改<code>fill</code> 的样式指定图标的颜色。
          <div class="tip custom-block">
            <p class="custom block title"> 常见的图标使用方式 </p>
            以 <code>Shared</code>图标组件为例：<br>
            1、在模板中通过标签式引入。比如 <code> &lt;tiny-shared /&gt; </code> <br>
            2、在模板中通过<code> &lt;component&gt; </code> 组件引入。比如 <code> &lt;component :is="tinyShared" /&gt; </code> <br>
            3、在组件属性中传入。比如 <code> &lt;tiny-button :icon="tinyShared" &gt; </code> <br>
          </div>
        `,
        'en-US': `
          Introduce icon functions from the <code>@opentiny/vue-icon</code> icon library. The execution of the icon function generates a valid <code> Vue </code> icon component that can be used in the template. <br>
          Specify the size of the icon by modifying the <code>font-size</code> style, and specify the color of the icon by modifying <code>fill</code>.
          <div class="tip custom-block">
            <p class="custom block title"> Common icon usage </p>
            Take the <code>Shared</code> icon component as an example: <br>
            1. Import labels in the template. For example, <code> &lt; tiny-shared /&gt;  </code> <br>
            2, in the template by <code> &lt; component&gt;  The </code> component is introduced. For example, <code> &lt; component :is="tinyShared" /&gt;  </code> <br>
            3. Pass in component properties. For example, <code> &lt; tiny-button :icon="tinyShared" &gt;  </code> <br>
          </div>
          `
      },
      codeFiles: ['basic-usage.vue']
    },
    {
      demoId: 'show-title',
      name: {
        'zh-CN': '显示 Title',
        'en-US': 'Display Title'
      },
      desc: {
        'zh-CN':
          '图标组件自身上指定 <code>title</code> 属性无效，需要通过其父元素的 <code>title</code> 属性实现提示功能。',
        'en-US':
          'The <code>title</code> attribute specified on the icon component is invalid. You need to give the <code>title</code> attribute of its parent element to realize the prompt function.'
      },
      codeFiles: ['show-title.vue']
    },
    {
      demoId: 'advance-icons',
      name: {
        'zh-CN': '标准图标合集',
        'en-US': 'Icon Set'
      },
      desc: {
        'zh-CN': `Saas业务梳理 600 多个标准图标，Saas业务的应用必须使用标准图标。它新增了三大功能：支持线性、面性图标切换，支持双色切换和托底效果。<br>
                  通过<code>shape</code> 属性，设置图标的线性或面性图标，它支持<code>'line' | 'filled' </code>, 默认为线性图标 。\n<br>
                  通过<code>firstColor, secondColor</code>属性，设置图标的主色和副色。\n<br>
                  通过<code>underlay</code>属性，设置图标的托底效果。默认样式： { background:'#eef3fe', borderRadius:'4px',scale:0.8 } <br>
                  `,
        'en-US': `More than 280 standard icons are sorted out for SaaS services. SaaS service applications must use standard icons. It adds three new functions: linear and facial icon switching, dual-color switching and bottom-supporting effects.
                  The <code>shape</code> property is used to set the linear or facial icon of the icon. It supports <code>'line' |'filled'</code>. The default value is linear. \n<br>
                  Set the primary color and secondary color of the icon through the <code>firstColor, secondColor</code> attribute. \n<br>
                  Set the bottoming effect of the icon through the <code>underlay</code> attribute. Default style: {background: '#dbdbdb', borderRadius: '4px', scale:0.6} <br>`
      },
      codeFiles: ['advance-usage.vue'],
      hidePc: true // PC的图标未整理，该demo仅服务于saas标准图标
    },
    {
      demoId: 'list',
      name: {
        'zh-CN': '图标集合',
        'en-US': 'Icon Set'
      },
      desc: {
        'zh-CN': '输入图标名称进行搜索，点击图标即可快速复制名称。',
        'en-US': 'Enter the icon name for search, Click on the icon to quickly copy the name.'
      },
      codeFiles: ['list.vue']
    }
  ],
  features: [
    {
      id: 'basic',
      name: '基本用法',
      support: {
        value: true
      },
      description: '通过 name 设置图标名称，size 设置图标大小。',
      cloud: {
        value: true
      },
      apis: ['name', 'size'],
      demos: ['basic-usage']
    },
    {
      id: 'color',
      name: '颜色配置',
      support: {
        value: true
      },
      description: '通过 color 设置图标颜色。',
      cloud: {
        value: true
      },
      apis: ['color'],
      demos: ['custom-color']
    },
    {
      id: 'animation',
      name: '动画效果',
      support: {
        value: true
      },
      description: '通过 animation 设置图标动画效果，可选值：spin、pulse、bounce。',
      cloud: {
        value: true
      },
      apis: ['animation'],
      demos: ['animation']
    },
    {
      id: 'rotation',
      name: '旋转',
      support: {
        value: true
      },
      description: '通过 rotation 设置图标旋转角度。',
      cloud: {
        value: true
      },
      apis: ['rotation'],
      demos: ['rotation']
    },
    {
      id: 'flip',
      name: '翻转',
      support: {
        value: true
      },
      description: '通过 flip 设置图标翻转方向，可选值：horizontal、vertical。',
      cloud: {
        value: true
      },
      apis: ['flip'],
      demos: ['flip']
    },
    {
      id: 'events',
      name: '事件',
      support: {
        value: true
      },
      description: '支持 click 事件。',
      cloud: {
        value: true
      },
      apis: ['click'],
      demos: ['events']
    }
  ]
}
