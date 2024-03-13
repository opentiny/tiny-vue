export default {
  column: '2',
  owner: '',
  demos: [
    {
      demoId: 'basic-usage',
      name: {
        'zh-CN': '基本用法',
        'en-US': 'Basic Usage'
      },
      desc: {
        'zh-CN': '<p>通过静态方法 <code>Loading.service</code> 在指定 <code>target</code> 上设置加载。</p>\n',
        'en-US':
          '<p>Sets loading on the specified <code>target</code> using the static method <code>Loading.service</code>. </p>\n'
      },
      codeFiles: ['basic-usage.vue']
    },
    {
      demoId: 'size',
      name: {
        'zh-CN': '尺寸',
        'en-US': 'Customized loading prompt text'
      },
      desc: {
        'zh-CN':
          '<p>可通过 <code>size</code> 属性设置尺寸大小，可选值：<code>medium</code> / <code>small</code> / <code>large </code>。</p>\n',
        'en-US': '<p>Customize the prompt text of the loaded text through <code>text</code>. </p>\n'
      },
      codeFiles: ['size.vue']
    },
    {
      demoId: 'loading-tip-text',
      name: {
        'zh-CN': '加载提示文本',
        'en-US': 'Loading Text'
      },
      desc: {
        'zh-CN': '<p>通过 <code>text</code> 自定义加载文字的提示文本。</p>\n',
        'en-US': '<p>Customize the background color and transparency through <code>background</code>. </p>\n'
      },
      codeFiles: ['loading-tip-text.vue']
    },
    {
      demoId: 'background',
      name: {
        'zh-CN': '遮罩背景色',
        'en-US': 'Background Color'
      },
      desc: {
        'zh-CN': '<p>通过 <code>background</code> 自定义背景颜色和透明度。</p>\n',
        'en-US': '<p>Use <code>customClass</code> to specify the class name to modify the style. </p>\n'
      },
      codeFiles: ['background.vue']
    },
    {
      demoId: 'custom-class',
      name: {
        'zh-CN': '样式',
        'en-US': 'Class'
      },
      desc: {
        'zh-CN': '<p>通过 <code>customClass</code> 指定类名进行样式修改。</p>\n',
        'en-US': 'For details, see the following example.'
      },
      codeFiles: ['custom-class.vue']
    },
    {
      demoId: 'directive',
      name: {
        'zh-CN': '指令',
        'en-US': 'Directive'
      },
      desc: {
        'zh-CN': '<p>通过v-loading使用指令。</p>',
        'en-US': '<p>Use instructions via v-loading</p>'
      },
      codeFiles: ['directive.vue']
    },
    {
      demoId: 'fullscreen',
      name: {
        'zh-CN': '全屏加载',
        'en-US': 'Fullscreen Loading'
      },
      desc: {
        'zh-CN':
          '<p><div>通过 <code>v-loading.lock.fullscreen</code> 指令添加修饰符进行全屏加载。</div><div>也能通过<code>Loading.service</code>并配置属性进行全屏加载。</div></p>',
        'en-US':
          '<p>\n          <div> Adds modifiers for fullscreen loading via the <code> v-load.lock.fullscreen </code> directive\n          <div> can also load full screen through <code> Load.service </code> and configure properties </div>\n        </p>'
      },
      codeFiles: ['fullscreen.vue']
    },
    {
      demoId: 'spinner',
      name: {
        'zh-CN': '加载图标',
        'en-US': 'Loading Icon'
      },
      desc: {
        'zh-CN': '<p>通过 <code>spinner</code> 自定义加载图标。</p>\n',
        'en-US': '<p>Use <code>target</code> to specify the DOM node to be overwritten by Loading. </p>\n'
      },
      codeFiles: ['spinner.vue']
    }
  ]
}
