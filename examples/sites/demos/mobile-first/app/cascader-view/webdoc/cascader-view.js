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
        'zh-CN': '<p>基本用法<p>',
        'en-US': '<p>Basic Usage</p>'
      },
      codeFiles: ['basic-usage.vue']
    },
    {
      demoId: 'lazyload',
      name: {
        'zh-CN': '异步加载',
        'en-US': 'Asynchronous loading'
      },
      desc: {
        'zh-CN':
          '<p>通过 <code>:node-config="{ lazy: true, load:() => {...} }"<code>load</code> 设置属性 <code>lazy: true<code>load</code> 和 <code>load</code> 数据加载方法，开启异步加载。<p>',
        'en-US':
          '<p><p>Set the <code>lazy: true<code>load</code> attribute and <code>load</code>data loading method through <code>:node-config="{lazy: true, load:() => {...}}"<code>load</code> to enable asynchronous loading.<p></p>'
      },
      codeFiles: ['lazyload.vue']
    },
    {
      demoId: 'check-strictly',
      name: {
        'zh-CN': '父子不互相关联',
        'en-US': 'Father and son are not related to each other'
      },
      desc: {
        'zh-CN':
          '<p>通过 <code>:node-config="{ checkStrictly: true }"</code> 设置属性 <code>checkStrictly: true</code>，开启父子层级互不关联，可选择非叶子节点，默认值为 <code>false</code> 显示到叶子节点。<p>',
        'en-US':
          '<p>You can set the <code>checkStrictly: true</code> attribute in <code>:node-config="{checkStrictly: true}"</code> to enable the disassociation between parent and child levels. You can select non-leaf nodes. The default value is <code>false</code>.<p>'
      },
      codeFiles: ['check-strictly.vue']
    },
    {
      demoId: 'disabled',
      name: {
        'zh-CN': '禁用选项',
        'en-US': 'Disable option'
      },
      desc: {
        'zh-CN': '<p>数据源里面带 <code>disabled: true</code> 渲染时自动禁用选项。<p>',
        'en-US':
          '<p>The <code>disabled: true</code> option is automatically disabled during rendering in the data source.<p>'
      },
      codeFiles: ['disabled.vue']
    },
    {
      demoId: 'emit-path',
      name: {
        'zh-CN': '显示值路径',
        'en-US': 'Display Value Path'
      },
      desc: {
        'zh-CN':
          '<p>通过设置 <code>emit-path</code> 属性值为 <code>false</code> 不显示值路径，默认值为 <code>true</code> 显示值路径。<p>',
        'en-US':
          '<p>The value path is not displayed by setting the <code>emit-path</code> attribute to <code>false</code>. The default value is <code>true</code>.<p>'
      },
      codeFiles: ['emit-path.vue']
    }
  ],
  apis: []
}
