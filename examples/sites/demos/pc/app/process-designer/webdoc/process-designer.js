export default {
  column: 2,
  owner: '',
  demos: [
    {
      demoId: 'basic-usage',
      name: {
        'zh-CN': '基本用法',
        'en-us': 'Basic Usage'
      },
      desc: {
        'zh-CN': 'process designer 的基本使用方法',
        'en-US': 'Basic usage of process designer'
      },
      codeFiles: ['index.vue']
    },
    {
      demoId: 'getter',
      name: {
        'zh-CN': '远程获取',
        'en-US': 'Getter'
      },
      desc: {
        'zh-CN': '通过传入 getData 函数, 实现 process-designer 的远程获取功能.',
        'en-US': 'Implement remote retrieval function of process designer by passing in the getData function.'
      },
      codeFiles: ['getter.vue']
    },
    {
      demoId: 'custom',
      name: {
        'zh-CN': '自定义',
        'en-US': 'custom'
      },
      desc: {
        'zh-CN':
          '通过传入 Modeler 类, 从而实现自定义效果. Modeler示例请访问 <a href="https://gitlink.org.cn/opentiny/tiny-vue/tree/2c0b086607/examples/sites/demos/pc/app/process-designer/modeler/custom">custom-modeler</a>',
        'en-US': 'By passing in the Modeler class, custom effects can be achieved'
      },
      codeFiles: ['custom-modeler.vue']
    },
    {
      demoId: 'additional-modules',
      name: {
        'zh-CN': '追加模块',
        'en-US': 'additional modules'
      },
      desc: {
        'zh-CN': '通过设置 <code>additional-modules</code> 属性来配置追加模块, 本示例追加了小地图模块。',
        'en-US':
          'By setting the<code>additive modules</code>attribute to configure additional modules, this example adds a small map module'
      },
      codeFiles: ['additional-modules.vue']
    },
    {
      demoId: 'events',
      name: {
        'zh-CN': '事件响应',
        'en-US': 'Events'
      },
      desc: {
        'zh-CN':
          '通过设置 <code>import-xml-success</code> 和 <code>import-xml-error</code> 来监听 xml 导入是否成功。如果失败则会触发 <code>import-xml-error</code>。',
        'en-US':
          'Monitor whether the XML import is successful by setting<code>import xml success</code>and<code>import xml error</code>. If it fails, it will trigger<code>import xml error</code>'
      },
      codeFiles: ['event.vue']
    },
    {
      demoId: 'showProperties',
      name: {
        'zh-CN': '侧边栏展示',
        'en-US': 'properties panel'
      },
      desc: {
        'zh-CN': '通过设置 <code>show-properties</code> 来控制侧边栏是否展示。',
        'en-US': 'Control whether the sidebar is displayed by setting<code>show properties</code>'
      },
      codeFiles: ['show-properties.vue']
    },
    {
      demoId: 'i18n',
      name: {
        'zh-CN': '语言包',
        'en-US': 'language packs'
      },
      desc: {
        'zh-CN':
          '<code>@opentiny/tiny-bpmn</code> 提供了 <code>languagePackages</code> 包, 汉化了 <code>bpmn</code> 与 <code>propertiesPanel</code>',
        'en-US':
          '<code>@opentiny/tiny-bpmn</code> provide <code>languagePackages</code>, Sinicized<code>bpmn</code> and <code>propertiesPanel</code>'
      },
      codeFiles: ['i18n.vue']
    },
    {
      demoId: 'export-xml',
      name: {
        'zh-CN': '导出XML',
        'en-US': 'export xml'
      },
      desc: {
        'zh-CN': '配合 <code>mounted</code> 事件获取 <code>modeler</code> 来获取 xml',
        'en-US': 'Cooperate with<code>mounted</code>event to obtain<code>modeler</code>to obtain XML'
      },
      codeFiles: ['export-xml.vue']
    },
    {
      demoId: 'readonly',
      name: {
        'zh-CN': '只读',
        'en-US': 'readonly'
      },
      desc: {
        'zh-CN': '使用 <code>readonly</code> 选项来配置该编辑器是否只读。',
        'en-US': 'Use the<code>read-only</code>option to configure whether the editor is read-only'
      },
      codeFiles: ['readonly.vue']
    },
    {
      demoId: 'keyboard',
      name: {
        'zh-CN': '快捷键',
        'en-US': 'keyboard'
      },
      desc: {
        'zh-CN': `您可以使用 <code>keyboard</code> 属性来显式的指定快捷键是否开启. <br />
        默认快捷键为: 
        <ul>
          <li> <code>ctrl + z</code> 撤销</li>
          <li> <code>ctrl + c</code> 复制</li>
          <li> <code>ctrl + v</code> 粘贴</li>
          <li> <code>ctrl + +</code> 放大</li>
          <li> <code>ctrl + -</code> 缩小</li>
          <li> <code>ctrl + 0</code> 恢复</li>
          <li> <code>ctrl + del</code> 删除</li>
          <li> <code>ctrl + 箭头</code> 上下左右移动</li>
        </ul>
        `,
        'en-US':
          'You can use the<code>keyboard</code>property to explicitly specify whether shortcut keys are enabled or not'
      },
      codeFiles: ['keyboard.vue']
    }
  ]
}
