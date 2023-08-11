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
      'name': { 'zh-CN': '自定义加载提示文本', 'en-US': 'Custom mask background color' },
      'desc': {
        'zh-CN': '<p>通过 <code>text</code> 自定义加载文字的提示文本。</p>\n',
        'en-US': '<p>Customize the background color and transparency through <code>background</code>. </p>\n'
      },
      'codeFiles': ['loading-tip-text.vue']
    },
    {
      'demoId': 'background',
      'name': { 'zh-CN': '自定义遮罩背景色', 'en-US': 'Custom Style' },
      'desc': {
        'zh-CN': '<p>通过 <code>background</code> 自定义背景颜色和透明度。</p>\n',
        'en-US': '<p>Use <code>customClass</code> to specify the class name to modify the style. </p>\n'
      },
      'codeFiles': ['background.vue']
    },
    {
      'demoId': 'custom-class',
      'name': { 'zh-CN': '自定义样式', 'en-US': 'Modifier' },
      'desc': {
        'zh-CN': '<p>通过 <code>customClass</code> 指定类名进行样式修改。</p>\n',
        'en-US': 'For details, see the following example.'
      },
      'codeFiles': ['custom-class.vue']
    },
    {
      'demoId': 'body',
      'name': { 'zh-CN': '修饰符', 'en-US': 'Global loading' },
      'desc': {
        'zh-CN': '详细用法参考如下示例',
        'en-US':
          '<p>The <code>v-loading.lock.fullscreen</code> command mode or service mode is used for global loading. To use the command mode for global loading, perform the following operations: \n Add <code>Vue.use(Loading)</code>\n in the <code>Vue 2</code> environment and <code>app.use(Loading)</code></p>\n in the <code>Vue 3</code> environment'
      },
      'codeFiles': ['body.vue']
    },
    {
      'demoId': 'fullscreen',
      'name': { 'zh-CN': '全局加载', 'en-US': 'Customized loading icon' },
      'desc': {
        'zh-CN':
          '<p>通过 <code>v-loading.lock.fullscreen</code> 指令方式或者服务方式进行全局加载，如需使用指令方式全局加载需要如下操作：\n在 <code>Vue 2</code> 版本环境中添加 <code>Vue.use(Loading)</code>\n在 <code>Vue 3</code> 版本环境中添加 <code>app.use(Loading)</code></p>\n',
        'en-US': '<p>Customize the loading icon through <code>spinner</code>. </p>\n'
      },
      'codeFiles': ['fullscreen.vue']
    },
    {
      'demoId': 'spinner',
      'name': { 'zh-CN': '自定义加载图标', 'en-US': 'Load Region' },
      'desc': {
        'zh-CN': '<p>通过 <code>spinner</code> 自定义加载图标。</p>\n',
        'en-US': '<p>Use <code>target</code> to specify the DOM node to be overwritten by Loading. </p>\n'
      },
      'codeFiles': ['spinner.vue']
    },
    {
      'demoId': 'target',
      'name': { 'zh-CN': '区域加载', 'en-US': '' },
      'desc': { 'zh-CN': '<p>通过 <code>target</code> 指定 Loading 需要覆盖的 DOM 节点。</p>\n', 'en-US': '' },
      'codeFiles': ['target.vue']
    }
  ],
  apis: [
    {
      'name': 'loading',
      'type': 'component',
      'properties': [
        {
          'name': 'text',
          'type': 'String',
          'defaultValue': '',
          'desc': {
            'zh-CN': '通过 value 属性设置文字;显示在加载图标下方的加载文案',
            'en-US': 'Set the text through the value attribute. Load copy displayed below the load icon'
          },
          'demoId': 'loading-tip-text'
        },
        {
          'name': 'fullscreen',
          'type': 'Boolean',
          'defaultValue': '该属性的默认值为 true',
          'desc': {
            'zh-CN': '设置 type 属性为 true 显示全屏;同 v-loading 指令中的 fullscreen 修饰符',
            'en-US':
              'Set type to true to display the full screen. Same as the fullscreen modifier in the v-loading instruction'
          },
          'demoId': 'fullscreen'
        },
        {
          'name': 'size',
          'type': 'String',
          'defaultValue': 'small',
          'desc': { 'zh-CN': '加载图标尺寸', 'en-US': 'Load icon size' },
          'demoId': 'size'
        },
        {
          'name': 'target',
          'type': 'Object/String',
          'defaultValue': '该属性的默认值为 document.body',
          'desc': {
            'zh-CN':
              'Loading 需要覆盖的 DOM 节点。可传入一个 DOM 对象或字符串；若传入字符串，则会将其作为参数传入 document.querySelector以获取到对应 DOM 节点',
            'en-US':
              'Loading the DOM node to be overwritten. A DOM object or character string can be transferred. If a character string is transferred, it is transferred to document.querySelector as a parameter to obtain the corresponding DOM node.'
          },
          'demoId': 'target'
        },
        {
          'name': 'body',
          'type': 'Boolean',
          'defaultValue': '该属性的默认值为 false',
          'desc': {
            'zh-CN': '同 v-loading 指令中的 body 修饰符',
            'en-US': 'The same as the body modifier in the v-loading instruction'
          },
          'demoId': 'body'
        },
        {
          'name': 'lock',
          'type': 'Boolean',
          'defaultValue': '该属性的默认值为 false',
          'desc': {
            'zh-CN': '同 v-loading 指令中的 lock 修饰符',
            'en-US': 'The same as the lock modifier in the v-loading instruction'
          },
          'demoId': 'fullscreen'
        },
        {
          'name': 'spinner',
          'type': 'String',
          'defaultValue': '',
          'desc': { 'zh-CN': '自定义加载图标类名', 'en-US': 'Customized loading icon class name' },
          'demoId': 'spinner'
        },
        {
          'name': 'background',
          'type': 'String',
          'defaultValue': '',
          'desc': { 'zh-CN': '遮罩背景色', 'en-US': 'Mask background color' },
          'demoId': 'background'
        },
        {
          'name': 'customClass',
          'type': 'String',
          'defaultValue': '',
          'desc': { 'zh-CN': 'Loading 的自定义类名', 'en-US': 'User-defined loading class name' },
          'demoId': 'custom-class'
        }
      ],
      'events': [],
      'slots': []
    }
  ]
}
