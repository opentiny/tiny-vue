export default {
  column: '2',
  owner: '',
  demos: [
    {
      demoId: 'base',
      name: {
        'zh-CN': '基本用法',
        'en-US': 'Basic Usage'
      },
      desc: {
        'zh-CN': '<p>基础的骨架效果。</p>\n',
        'en-US': '<p>Basic skeleton effect.</p>\n'
      },
      codeFiles: ['base.jsx']
    },
    {
      demoId: 'complex-demo',
      name: {
        'zh-CN': '复杂的组合',
        'en-US': 'Complex Demo'
      },
      desc: {
        'zh-CN': '<p>更复杂的组合，通过 <code>avatar</code> 属性控制骨架段落左侧出现头像占位。</p>\n',
        'en-US':
          '<p>More complex combinations, use the <code>avatar</code> attribute to control the appearance of the avatar placeholder on the left side of the skeleton paragraph.</p>\n'
      },
      codeFiles: ['complex-demo.jsx']
    }
  ]
}
