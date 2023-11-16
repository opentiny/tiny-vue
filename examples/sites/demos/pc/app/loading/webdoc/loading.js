export default {
  column: '2',
  owner: '',
  demos: [
    {
      'demoId': 'basic-usage',
      'name': { 'zh-CN': '基本用法', 'en-US': 'Basic Usage' },
      'desc': {
        'zh-CN': '<p>通过静态方法 <code>Loading.service</code> 在指定 <code>target</code> 上设置加载。</p>\n',
        'en-US':
          '<p>Sets loading on the specified <code>target</code> using the static method <code>Loading.service</code>. </p>\n'
      },
      'codeFiles': ['basic-usage.vue']
    },
    {
      'demoId': 'size',
      'name': { 'zh-CN': '尺寸', 'en-US': 'Customized loading prompt text' },
      'desc': {
        'zh-CN': '<p>可通过 size 属性设置尺寸大小，可选值：medium / small / mini。</p>\n',
        'en-US': '<p>Customize the prompt text of the loaded text through <code>text</code>. </p>\n'
      },
      'codeFiles': ['size.vue']
    },
    {
      'demoId': 'loading-tip-text',
      'name': { 'zh-CN': '加载提示文本', 'en-US': 'Loading Text' },
      'desc': {
        'zh-CN': '<p>通过 <code>text</code> 自定义加载文字的提示文本。</p>\n',
        'en-US': '<p>Customize the background color and transparency through <code>background</code>. </p>\n'
      },
      'codeFiles': ['loading-tip-text.vue']
    },
    {
      'demoId': 'background',
      'name': { 'zh-CN': '遮罩背景色', 'en-US': 'Background Color' },
      'desc': {
        'zh-CN': '<p>通过 <code>background</code> 自定义背景颜色和透明度。</p>\n',
        'en-US': '<p>Use <code>customClass</code> to specify the class name to modify the style. </p>\n'
      },
      'codeFiles': ['background.vue']
    },
    {
      'demoId': 'custom-class',
      'name': { 'zh-CN': '样式', 'en-US': 'Class' },
      'desc': {
        'zh-CN': '<p>通过 <code>customClass</code> 指定类名进行样式修改。</p>\n',
        'en-US': 'For details, see the following example.'
      },
      'codeFiles': ['custom-class.vue']
    },
    {
      'demoId': 'directive',
      'name': { 'zh-CN': '指令', 'en-US': 'Directive' },
      'desc': {
        'zh-CN': '详细用法参考如下示例',
        'en-US':
          '<p>The <code>v-loading.lock.fullscreen</code> command mode or service mode is used for global loading. To use the command mode for global loading, perform the following operations: \n Add <code>Vue.use(Loading)</code>\n in the <code>Vue 2</code> environment and <code>app.use(Loading)</code></p>\n in the <code>Vue 3</code> environment'
      },
      'codeFiles': ['directive.vue']
    },
    {
      'demoId': 'fullscreen',
      'name': { 'zh-CN': '全屏加载', 'en-US': 'Fullscreen Loading' },
      'desc': {
        'zh-CN':
          `<p>
            <div>通过 <code>v-loading.lock.fullscreen</code> 指令添加修饰符进行全屏加载</div>
            <div>也能通过<code>Loading.service</code>并配置属性进行全屏加载</div>
          </p>`,
        'en-US': `<p>
          <div> Adds modifiers for fullscreen loading via the <code> v-load.lock.fullscreen </code> directive
          <div> can also load full screen through <code> Load.service </code> and configure properties </div>
        </p>`
      },
      'codeFiles': ['fullscreen.vue']
    },
    {
      'demoId': 'spinner',
      'name': { 'zh-CN': '加载图标', 'en-US': 'Loading Icon' },
      'desc': {
        'zh-CN': '<p>通过 <code>spinner</code> 自定义加载图标。</p>\n',
        'en-US': '<p>Use <code>target</code> to specify the DOM node to be overwritten by Loading. </p>\n'
      },
      'codeFiles': ['spinner.vue']
    }
  ],
  apis: [
    {
      'name': 'loading',
      'type': 'component',
      'properties': [
        {
          'name': 'text',
          'type': 'string',
          'defaultValue': '',
          'desc': {
            'zh-CN': '显示在加载图标下方的加载文案',
            'en-US': 'Load copy displayed below the load icon'
          },
          'demoId': 'loading-tip-text'
        },
        {
          'name': 'fullscreen',
          'type': 'boolean',
          'defaultValue': 'true',
          'desc': {
            'zh-CN': '属性为 true 显示全屏，同 v-loading 指令中的 fullscreen 修饰符',
            'en-US':
              'Set true to display the full screen. Same as the fullscreen modifier in the v-loading instruction'
          },
          'demoId': 'fullscreen'
        },
        {
          'name': 'size',
          'type': 'medium | small | mini',
          'defaultValue': 'small',
          'desc': { 'zh-CN': '加载图标尺寸', 'en-US': 'Load icon size' },
          'demoId': 'size'
        },
        {
          'name': 'target',
          'type': 'object | string',
          'defaultValue': 'document.body',
          'desc': {
            'zh-CN':
              'Loading 需要覆盖的 DOM 节点。可传入一个 DOM 对象或字符串；若传入字符串，则会将其作为参数传入 document.querySelector以获取到对应 DOM 节点',
            'en-US':
              'Loading the DOM node to be overwritten. A DOM object or character string can be transferred. If a character string is transferred, it is transferred to document.querySelector as a parameter to obtain the corresponding DOM node.'
          },
          'demoId': 'basic-usage'
        },
        {
          'name': 'body',
          'type': 'boolean',
          'defaultValue': 'false',
          'desc': {
            'zh-CN': '遮罩层是否在body上，同 v-loading 指令中的 body 修饰符',
            'en-US': 'The same as the body modifier in the v-loading instruction'
          }
        },
        {
          'name': 'lock',
          'type': 'boolean',
          'defaultValue': 'false',
          'desc': {
            'zh-CN': '全屏时是否锁定滚动，同 v-loading 指令中的 lock 修饰符',
            'en-US': 'The same as the lock modifier in the v-loading instruction'
          },
          'demoId': 'fullscreen'
        },
        {
          'name': 'spinner',
          'type': 'Component',
          'defaultValue': '',
          'desc': { 'zh-CN': '自定义加载图标', 'en-US': 'Customized loading icon class name' },
          'demoId': 'spinner'
        },
        {
          'name': 'background',
          'type': 'string',
          'defaultValue': '',
          'desc': { 'zh-CN': '遮罩背景色', 'en-US': 'Mask background color' },
          'demoId': 'background'
        },
        {
          'name': 'customClass',
          'type': 'string',
          'defaultValue': '',
          'desc': { 'zh-CN': 'Loading 的自定义类名', 'en-US': 'User-defined loading class name' },
          'demoId': 'custom-class'
        }
      ],
      'directive': [
        {
          'name': 'v-loading',
          'type': 'boolean',
          'desc': {
            'zh-CN': '是否显示加载动画',
            'en-US': 'Whether to display loading animation'
          },
          'demoId': 'directive'
        },
        {
          'name': 'tiny-loading__text',
          'type': 'string',
          'desc': {
            'zh-CN': '显示在加载图标下方的加载文案',
            'en-US': 'The load copy displayed below the load icon'
          },
          'demoId': 'directive'
        },
        {
          'name': 'tiny-loading__background',
          'type': 'string',
          'desc': {
            'zh-CN': '遮罩背景色',
            'en-US': 'Mask background color'
          },
          'demoId': 'directive'
        },
        {
          'name': 'tiny-loading__custom-class',
          'type': 'string',
          'desc': {
            'zh-CN': 'Loading 的自定义类名',
            'en-US': 'Custom class name for Loading'
          },
          'demoId': 'directive'
        },
        {
          'name': 'fullscreen',
          'type': 'boolean',
          'desc': {
            'zh-CN': '命令修饰符：是否显示全屏',
            'en-US': 'Command modifier: Whether to display full screen'
          },
          'demoId': 'fullscreen'
        },
        {
          'name': 'body',
          'type': 'boolean',
          'desc': {
            'zh-CN': '命令修饰符：遮罩层是否在body上',
            'en-US': 'Command modifier: Whether the mask is on the body'
          },
          'demoId': 'fullscreen'
        },
        {
          'name': 'lock',
          'type': 'boolean',
          'desc': {
            'zh-CN': '命令修饰符：全屏时是否锁定滚动',
            'en-US': 'Command modifier: Whether to lock scroll in full screen'
          },
          'demoId': 'fullscreen'
        },
      ],
    }
  ]
}
