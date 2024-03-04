export default {
  column: '2',
  owner: '',
  demos: [
    {
      demoId: 'basic-usage',
      name: {
        'zh-CN': '基本用法',
        'en-US': 'basic usage'
      },
      desc: {
        'zh-CN': '',
        'en-US': ''
      },
      codeFiles: ['basic-usage.vue']
    },
    {
      demoId: 'button-position',
      name: {
        'zh-CN': '位置',
        'en-US': 'Position'
      },
      desc: {
        'zh-CN': '<p>通过 <code>position</code> 改变悬浮按钮位置，分别为居左、居右、居中。</p>',
        'en-US': ''
      },
      codeFiles: ['button-position.vue']
    },
    {
      demoId: 'button-bgcolor',
      name: {
        'zh-CN': '可选背景色',
        'en-US': 'Optional background color'
      },
      desc: {
        'zh-CN': '<p>通过 <code>background-color</code> 设置按钮背景色，仅支持蓝色（默认）和白色。</p>',
        'en-US': ''
      },
      codeFiles: ['button-bgcolor.vue']
    },
    {
      demoId: 'custom-icon',
      name: {
        'zh-CN': '自定义图标',
        'en-US': 'Custom icon'
      },
      desc: {
        'zh-CN': '<p>通过 <code>icon</code> 改变悬浮按钮图标。</p>',
        'en-US': ''
      },
      codeFiles: ['custom-icon.vue']
    },
    {
      demoId: 'animated',
      name: {
        'zh-CN': '交互动效',
        'en-US': 'Animation'
      },
      desc: {
        'zh-CN':
          '<p>通过 <code>animated</code> 设置悬浮按钮动画。\n        <div class="tip custom-block">\n悬浮按钮基于 <code>body</code> 或者 <code>document</code> 进行定位。<br />\n若 <code>body</code> 或者 <code>document</code> 元素超出 <code>window</code> 屏幕高度时，通过添加 <code>animated</code> 属性设置当页面滚动到指定位置时可实现动效。<br />\n若 <code>body</code> 或者 <code>document</code> 元素被内联框架（如：iframe）等外在元素包裹时会使动画失效。<br />\n此时可通过添加 <code>element-selector</code> 属性传入自定义元素的类名或者id名，当传入元素的子元素高度超出传入元素高度时，可设置 <code>animated</code> 属性实现滚动动效。<br />\n        </div></p>',
        'en-US': ''
      },
      codeFiles: ['animated.vue']
    },
    {
      demoId: 'event',
      name: {
        'zh-CN': '事件',
        'en-US': 'Events'
      },
      desc: {
        'zh-CN': '<p>通过 <code>click</code> 监听悬浮按钮点击事件。</p>',
        'en-US': ''
      },
      codeFiles: ['event.vue']
    },
    {
      demoId: 'reclick',
      name: {
        'zh-CN': '防重点击',
        'en-US': 'Prevent reclick'
      },
      desc: {
        'zh-CN': '<p>通过 <code>reset-time</code> 设置点击防重延迟时间。</p>',
        'en-US': ''
      },
      codeFiles: ['reclick.vue']
    },
    {
      demoId: 'expand',
      name: {
        'zh-CN': '拓展按钮',
        'en-US': 'Expand button'
      },
      desc: {
        'zh-CN':
          '<p>通过 <code>is-expand</code> 设置拓展按钮，通过 <code>expand-list</code> 属性传入数据。\n        <div class="tip custom-block">\n        expand-list 属性参数列表<br />\n        1、<code>icon</code> 需要传入的图标<br />\n        2、<code>title</code> 需要传入的标题，只展示前 4 个字符<br />\n        </div>\n        </p>',
        'en-US': ''
      },
      codeFiles: ['expand.vue']
    },
    {
      demoId: 'mask',
      name: {
        'zh-CN': '遮罩层',
        'en-US': 'Mask'
      },
      desc: {
        'zh-CN': '<p>通过 <code>vague</code> 设置模糊层，通过 <code>mask</code> 设置遮罩层。</p>',
        'en-US': ''
      },
      codeFiles: ['mask.vue']
    }
  ]
}
