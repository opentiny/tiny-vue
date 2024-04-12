export default {
  column: '1',
  owner: '',
  demos: [
    {
      'demoId': 'fixed-left-fixed',
      'name': { 'zh-CN': '左冻结', 'en-US': 'Left Freeze' },
      'desc': {
        'zh-CN':
          '<p>通过 <code>fixed</code> 属性设置列冻结。可选值为 <code>left right</code> 默认为 <code>left</code>。</p>\n',
        'en-US':
          '<p>Sets column freezing through the <code>fixed</code> property. The options are as follows: <code>left right</code>The default value is <code>left</code></p>\n'
      },
      'codeFiles': ['fixed/left-fixed.vue']
    },
    {
      'demoId': 'fixed-right-fixed',
      'name': { 'zh-CN': '右冻结', 'en-US': 'Right Freeze' },
      'desc': {
        'zh-CN':
          '<p>通过 <code>fixed</code> 属性设置列冻结。可选值为 <code>left right</code> 默认为 <code>left</code>。</p>\n',
        'en-US':
          '<p>Sets column freezing through the <code>fixed</code> property. The options are as follows: <code>left right</code>The default value is <code>left</code></p>\n'
      },
      'codeFiles': ['fixed/right-fixed.vue']
    },
    {
      'demoId': 'fixed-multi-column-fixed',
      'name': { 'zh-CN': '操作列冻结', 'en-US': 'Frozen Operation Column' },
      'desc': {
        'zh-CN':
          '<p>通过 <code>fixed</code> 属性设置列冻结。可选值为 <code>left right</code> 默认为 <code>left</code>。</p>\n',
        'en-US':
          '<p>Sets column freezing through the <code>fixed</code> property. The options are as follows: <code>left right</code>The default value is <code>left</code></p>\n'
      },
      'codeFiles': ['fixed/multi-column-fixed.vue']
    },
    {
      'demoId': 'group-header-fixed',
      'name': { 'zh-CN': '分组表头冻结', 'en-US': 'Group header fixed' },
      'desc': {
        'zh-CN':
          '<p>通过 <code>fixed</code> 属性设置列冻结。当分组表头的某一项设置了冻结列，该分组表头其他项都会自动变成冻结列。</p>\n',
        'en-US':
          '<p><p>Set column freezing via the <code>fixed</code> attribute. When a frozen column is set for an item in the group header, other items in the group header will automatically become frozen columns. </p>\n'
      },
      'codeFiles': ['fixed/group-header-fixed.vue']
    }
  ],
  apis: [{ 'name': 'grid-fixed', 'type': 'component', 'props': [], 'events': [], 'slots': [] }]
}
