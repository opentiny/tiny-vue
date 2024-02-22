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
      demoId: 'placeholder',
      name: {
        'zh-CN': '显示多级标题',
        'en-US': 'Display Multi-Level Headings'
      },
      desc: {
        'zh-CN':
          '<p>通过设置 <code>:placeholder="[...]"</code> 属性支持显示多级标题，<code>placeholder</code> 支持字符串和数组类型，默认值为字符串 "请选择"。<p>',
        'en-US':
          '<p>You can set the <code>:placeholder="[...]"</code> attribute to support the display of multi-level titles. <code>placeholder</code> supports the character string and array type. The default value is the character string "Please select".<p>'
      },
      codeFiles: ['placeholder.vue']
    }
  ],
  apis: []
}
