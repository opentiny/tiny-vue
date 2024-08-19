export default {
  column: '2',
  owner: '',
  meta: {
    stable: '3.18.0'
  },
  demos: [
    {
      demoId: 'basic-usage',
      name: {
        'zh-CN': '基本用法',
        'en-US': 'Basic Usage'
      },
      desc: {
        'zh-CN': '通过自动高亮搜索字指令，可以自动高亮某个节点下，所有匹配的字符。',
        'en-US':
          'You can use the automatic highlight search word command to automatically highlight all matched characters under a node.'
      },
      codeFiles: ['highlight-query/basic-usage.vue']
    },
    {
      demoId: 'avoid',
      name: {
        'zh-CN': '避免场景',
        'en-US': 'Basic Usage'
      },
      desc: {
        'zh-CN':
          '纯文字节点在<code>Vue</code> 编译时有特殊处理。自动高亮搜索字的指令是直接处理<code>Dom</code>节点的内容，所以要避免纯文本节点。以下2个场景会造成<code>Vue</code> 更新机制失败。',
        'en-US':
          'Plain text nodes are specially processed during <code>Vue</code> compilation. The instruction for automatically highlighting search words is to directly process the contents of the <code>Dom</code> node, so avoid plain text nodes. The <code>Vue</code> update mechanism fails in the following scenarios:'
      },
      codeFiles: ['highlight-query/avoid.vue']
    }
  ]
}
