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
        'zh-CN': '<p>通过静态方法 `Loading.service` 在指定 `target` 上设置加载。</p>',
        'en-US': '<p>button type</p>'
      },
      codeFiles: ['basic-usage.vue']
    },

    {
      demoId: 'loading-tip-text',
      name: {
        'zh-CN': '自定义加载提示文本',
        'en-US': 'events'
      },
      desc: {
        'zh-CN': '<p>通过 `text` 自定义加载文字的提示文本。<p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['loading-tip-text.vue']
    },
    {
      demoId: 'background',
      name: {
        'zh-CN': '自定义遮罩背景色',
        'en-US': 'events'
      },
      desc: {
        'zh-CN': '<p>通过 `background` 自定义背景颜色和透明度。<p>',
        'en-US': '<p>bbutton click</p>'
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
        'zh-CN': '<p>通过 `customClass` 指定类名进行样式修改。<p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['custom-class.vue']
    },
    {
      demoId: 'body',
      name: {
        'zh-CN': '修饰符',
        'en-US': 'events'
      },
      desc: {
        'zh-CN': '<p><p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['body.vue']
    },
    {
      demoId: 'fullscreen',
      name: {
        'zh-CN': '全局加载',
        'en-US': 'events'
      },
      desc: {
        'zh-CN':
          '<p>通过 `v-loading.lock.fullscreen` 指令方式或者服务方式进行全局加载，如需使用指令方式全局加载需要如下操作：<br>在 `Vue 2` 版本环境中添加 `Vue.use(Loading)`<br>在 `Vue 3` 版本环境中添加 `app.use(Loading)`<p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['fullscreen.vue']
    },
    {
      demoId: 'spinner',
      name: {
        'zh-CN': '自定义加载图标',
        'en-US': 'events'
      },
      desc: {
        'zh-CN': '<p>通过 `spinner` 自定义加载图标。<p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['spinner.vue']
    },
    {
      demoId: 'target',
      name: {
        'zh-CN': '区域加载',
        'en-US': 'events'
      },
      desc: {
        'zh-CN': '<p>通过 `target` 指定 Loading 需要覆盖的 DOM 节点。<p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['target.vue']
    },
    {
      demoId: 'loading-size',
      name: {
        'zh-CN': '尺寸',
        'en-US': 'events'
      },
      desc: {
        'zh-CN':
          '<p>通过在 `Loading.service` 中设置 `size` 属性加载不同的大小尺寸，包括 large、medium、small、mini 四种不同大小。不设置时为默认尺寸。<p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['loading-size.vue']
    }
  ],
  apis: []
}
