export default {
  column: '1',
  owner: '',
  demos: [
    {
      'demoId': 'mouse-keyboard-keyboard-navigation',
      'name': { 'zh-CN': '键盘导航', 'en-US': 'Keyboard Navigation' },
      'desc': {
        'zh-CN':
          '<div class="tip custom-block"><p class="custom-block-title">按键说明</p>\n<p>| Arrow Up ↑ | 移动到当前活动单元格上面的单元格 |\n| Arrow Down ↓ | 移动到当前活动单元格下面的单元格 |\n| Arrow Left ← | 移动到当前活动单元格左边的单元格 |\n| Arrow Right → | 移动到当前活动单元格右边的单元格 |\n| Tab | 移动到当前选中或活动单元格的右侧单元格，如果到最后一列且存在下一行，则从下一行开始移动 |\n| Tab + Shift | 移动到当前选中或活动单元格的左侧单元格，如果到第一列且存在上一行，则从上一行开始移动 |\n| Spacebar | 如果单元格是复选框或单选框则切换勾选状态 |\n| Enter | 取消编辑并移动到当前活动单元格下面的单元格 |\n| Delete | 清空内容 |\n| Backspace | 清空内容并激活选中单元格为编辑状态 |\n| F2 | 激活单元格编辑 |\n| Esc | 取消单元格编辑 |\n| Page Up | 向上翻页滚动 |\n| Page Down | 向下翻页滚动 |\n| Home | 滚动到顶部 |\n| End | 滚动到底部 |</p>\n</div>\n',
        'en-US':
          '<div class="tip custom-block"><p class="custom-block-title"> Key Description </p>\n<p>| Arrow Up ↑ | Moves to the cell above the current active cell |\n| Arrow Down ← | Moves to the cell below the current active cell |\n| Arrow Left ← | Moves to the cell on the left of the current active cell |\n| Arrow Right → | Moves to the right of the current active cell |\n| Tab | Moves to the cell on the right of the selected or active cell. If the last column is displayed and the next row exists, move from the next row. |\n| Tab + Shift | Moves to the cell on the left of the selected or active cell. If the first column is displayed and there is a previous row, move the cell from the previous row. |\n| Spacebar | If the cell is a check box or option button, switch the selected status. |\n| Enter | Cancel the editing and move the cell to the cell under the current active cell. |\n| Delete | Clear the content. | \n| Backspace | Clear the contents and activate the selected cell to the editing state. |\n| F2 | Activate cell editing. |\n| Esc | Cancel cell editing. |\n| Page Up | Page Up | Page Down | Page Down | Page Down | Page Down | \n| Home | Scroll to the top |\n| End | Scroll to the bottom |</p>\n</div>\n'
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
