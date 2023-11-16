export default {
  column: '1',
  owner: '',
  demos: [
    {
      'demoId': 'mouse-keyboard-keyboard-navigation',
      'name': { 'zh-CN': '键盘导航', 'en-US': 'Keyboard Navigation' },
      'desc': {
        'zh-CN': `
        <div class="tip custom-block">
          <p class="custom-block-title">按键说明</p>
          <ul>
            <li><code>Arrow Up ↑</code>：移动到当前活动单元格上面的单元格</li>
            <li><code>Arrow Down ↓</code>：移动到当前活动单元格下面的单元格</li>
            <li><code>Arrow Left ←</code>：移动到当前活动单元格左边的单元格</li>
            <li><code>Arrow Right →</code>：移动到当前活动单元格右边的单元格</li>
            <li><code>Tab</code>：移动到当前选中或活动单元格的右侧单元格，如果到最后一列且存在下一行，则从下一行开始移动</li>
            <li><code>Tab + Shift</code>：移动到当前选中或活动单元格的左侧单元格，如果到第一列且存在上一行，则从上一行开始移动</li>
            <li><code>Spacebar</code>：如果单元格是复选框或单选框则切换勾选状态</li>
            <li><code>Enter</code>：取消编辑并移动到当前活动单元格下面的单元格</li>
            <li><code>Delete</code>：清空内容</li>
            <li><code>Backspace</code>：清空内容并激活选中单元格为编辑状态</li>
            <li><code>F2</code>：激活单元格编辑</li>
            <li><code>Esc</code>： 取消单元格编辑</li>
            <li><code>Page Up</code>：向上翻页滚动</li>
            <li><code>Page Down</code>：向下翻页滚动</li>
            <li><code>Home</code>：滚动到顶部</li>
            <li><code>End</code>：滚动到底部</li>
          </ul>
        </div>`,
        'en-US': ''
      },
      'codeFiles': ['mouse-keyboard/keyboard-navigation.vue']
    },
    {
      'demoId': 'mouse-keyboard-keyboard-config',
      'name': { 'zh-CN': '设置按键配置项', 'en-US': 'Set key configuration items' },
      'desc': {
        'zh-CN': '<p>表格属性 <code>keyboard-config</code> 设置按键配置项。\n</p>\n',
        'en-US': '<p>Table property<code>keyboard-config</code>Set key configuration items. \n</p>\n'
      },
      'codeFiles': ['mouse-keyboard/keyboard-config.vue']
    },
    {
      'demoId': 'mouse-keyboard-mouse-config',
      'name': { 'zh-CN': '设置鼠标配置项', 'en-US': 'Setting Mouse Configuration Items' },
      'desc': {
        'zh-CN': '<p>表格属性 <code>mouse-config</code> 设置鼠标配置项。\n</p>\n',
        'en-US': '<p>Table property<code>mouse-config</code>Set the mouse configuration item. \n</p>\n'
      },
      'codeFiles': ['mouse-keyboard/mouse-config.vue']
    }
  ],
  apis: [{ 'name': 'grid-mouse-keyboard', 'type': 'component', 'properties': [], 'events': [], 'slots': [] }]
}
