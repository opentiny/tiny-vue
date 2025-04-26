/**
 * 规则1：处理ESC键按下事件
 * @param {Object} params - 参数对象
 * @param {boolean} params.isKeyEsc - 是否按下ESC键
 * @param {Object} params._vm - Vue实例
 * @param {Event} params.event - 事件对象
 * @param {Object} params.actived - 当前激活的单元格信息
 * @param {Object} params.mouseConfig - 鼠标配置
 */
function rule1({ isKeyEsc, _vm, event, actived, mouseConfig }) {
  return {
    match: () => isKeyEsc,
    action: () => _vm.handleEscKeyDown({ event, actived, mouseConfig })
  }
}

/**
 * 规则2：处理空格键按下事件（用于选择复选框或单选框）
 * @param {Object} params - 参数对象
 * @param {boolean} params.isKeySpacebar - 是否按下空格键
 * @param {Object} params.keyboardConfig - 键盘配置
 * @param {Object} params.selected - 当前选中的单元格信息
 * @param {Object} params._vm - Vue实例
 * @param {Event} params.event - 事件对象
 */
function rule2({ isKeySpacebar, keyboardConfig, selected, _vm, event }) {
  return {
    match: () =>
      isKeySpacebar &&
      (keyboardConfig.isArrow || keyboardConfig.isTab) &&
      selected.row &&
      selected.column &&
      (selected.column.type === 'selection' || selected.column.type === 'radio'),
    action: () => _vm.handleSpaceKeyDown({ event, keyboardConfig, selected })
  }
}

/**
 * 规则3：处理回车键按下事件
 * @param {Object} params - 参数对象
 * @param {boolean} params.isKeyEnter - 是否按下回车键
 * @param {Object} params.keyboardConfig - 键盘配置
 * @param {Object} params.selected - 当前选中的单元格信息
 * @param {Object} params.actived - 当前激活的单元格信息
 * @param {Object} params.treeConfig - 树形配置
 * @param {boolean} params.highlightCurrentRow - 是否高亮当前行
 * @param {Object} params.currentRow - 当前行信息
 * @param {Object} params._vm - Vue实例
 * @param {Event} params.event - 事件对象
 */
function rule3(args) {
  const { isKeyEnter, keyboardConfig, selected, actived } = args
  const { treeConfig, highlightCurrentRow, currentRow, _vm, event } = args

  return {
    match: () =>
      isKeyEnter &&
      (keyboardConfig.isArrow || keyboardConfig.isTab) &&
      (selected.row || actived.row || (treeConfig && highlightCurrentRow && currentRow)),
    action: () => _vm.handleEnterKeyDown({ event, selected, actived })
  }
}

/**
 * 规则4：处理右键菜单操作
 * @param {Object} params - 参数对象
 * @param {boolean} params.isOperCtxMenu - 是否操作右键菜单
 * @param {Object} params._vm - Vue实例
 * @param {Event} params.event - 事件对象
 */
function rule4({ isOperCtxMenu, _vm, event }) {
  return {
    match: () => isOperCtxMenu,
    action: () => _vm.handleCtxMenu({ event })
  }
}

/**
 * 规则5：处理F2键按下事件（用于编辑单元格）
 * @param {Object} params - 参数对象
 * @param {boolean} params.isKeyF2 - 是否按下F2键
 * @param {Object} params._vm - Vue实例
 * @param {Event} params.event - 事件对象
 * @param {Object} params.selected - 当前选中的单元格信息
 */
function rule5({ isKeyF2, _vm, event, selected }) {
  return {
    match: () => isKeyF2,
    action: () => _vm.handleF2KeyDown({ event, selected })
  }
}

/**
 * 规则6：处理方向键按下事件
 * @param {Object} params - 参数对象
 * @param {boolean} params.isOperArrowKeys - 是否按下方向键
 * @param {Object} params.keyboardConfig - 键盘配置
 * @param {Object} params._vm - Vue实例
 * @param {Event} params.event - 事件对象
 * @param {Object} params.selected - 当前选中的单元格信息
 */
function rule6({ isOperArrowKeys, keyboardConfig, _vm, event, selected }) {
  return {
    match: () => isOperArrowKeys && keyboardConfig.isArrow,
    action: () => _vm.handleArrowKeyDown({ event, selected })
  }
}

/**
 * 规则7：处理Tab键按下事件
 * @param {Object} params - 参数对象
 * @param {boolean} params.isKeyTab - 是否按下Tab键
 * @param {Object} params.keyboardConfig - 键盘配置
 * @param {Object} params._vm - Vue实例
 * @param {Event} params.event - 事件对象
 * @param {Object} params.selected - 当前选中的单元格信息
 * @param {Object} params.actived - 当前激活的单元格信息
 */
function rule7({ isKeyTab, keyboardConfig, _vm, event, selected, actived }) {
  return {
    match: () => isKeyTab && keyboardConfig.isTab,
    action: () => _vm.handleTabKeyDown({ event, selected, actived })
  }
}

/**
 * 规则8：处理删除键和退格键按下事件
 * @param {Object} params - 参数对象
 * @param {boolean} params.isKeyDel - 是否按下删除键
 * @param {Object} params.treeConfig - 树形配置
 * @param {boolean} params.highlightCurrentRow - 是否高亮当前行
 * @param {Object} params.currentRow - 当前行信息
 * @param {boolean} params.isKeyBack - 是否按下退格键
 * @param {Object} params.keyboardConfig - 键盘配置
 * @param {Object} params._vm - Vue实例
 * @param {Event} params.event - 事件对象
 * @param {Object} params.selected - 当前选中的单元格信息
 */
function rule8(args) {
  const { isKeyDel, treeConfig, highlightCurrentRow, currentRow } = args
  const { isKeyBack, keyboardConfig, _vm, event, selected } = args

  return {
    match: () =>
      isKeyDel || (treeConfig && highlightCurrentRow && currentRow ? isKeyBack && keyboardConfig.isArrow : isKeyBack),
    action: () => _vm.handleDelKeyDown({ event, selected })
  }
}

/**
 * 规则9：处理复制粘贴相关快捷键（Ctrl+A/X/C/V）
 * @param {Object} params - 参数对象
 * @param {Object} params.keyboardConfig - 键盘配置
 * @param {boolean} params.isKeyWithCtrl - 是否按下Ctrl键
 * @param {boolean} params.isKeyA - 是否按下A键
 * @param {boolean} params.isKeyX - 是否按下X键
 * @param {boolean} params.isKeyC - 是否按下C键
 * @param {boolean} params.isKeyV - 是否按下V键
 * @param {Object} params._vm - Vue实例
 * @param {Event} params.event - 事件对象
 */
function rule9({ keyboardConfig, isKeyWithCtrl, isKeyA, isKeyX, isKeyC, isKeyV, _vm, event }) {
  return {
    match: () => keyboardConfig.isCut && isKeyWithCtrl && (isKeyA || isKeyX || isKeyC || isKeyV),
    action: () => _vm.handleCopyKeyDown({ event })
  }
}

/**
 * 规则10：处理其他按键按下事件（用于直接编辑）
 * @param {Object} params - 参数对象
 * @param {Object} params.keyboardConfig - 键盘配置
 * @param {boolean} params.isKeyWithCtrl - 是否按下Ctrl键
 * @param {Object} params._vm - Vue实例
 * @param {Event} params.event - 事件对象
 * @param {Object} params.selected - 当前选中的单元格信息
 * @param {Object} params.actived - 当前激活的单元格信息
 */
function rule10({ keyboardConfig, isKeyWithCtrl, _vm, event, selected, actived }) {
  // 如果同一个单元格已经被激活编辑态，那么就不重复触发
  return {
    match: () =>
      keyboardConfig.isEdit && !isKeyWithCtrl && !(selected.row === actived.row && selected.column === actived.column),
    action: () => _vm.handleOtherKeyDown({ event, selected })
  }
}

/**
 * 全局键盘按下事件处理函数
 * @param {Event} event - 键盘事件对象
 * @param {Object} _vm - Vue实例
 */
export function onGlobalKeydown(event, _vm) {
  // 获取配置信息
  let { isCtxMenu, ctxMenuStore, mouseConfig = {}, keyboardConfig = {} } = _vm
  let { treeConfig, highlightCurrentRow, currentRow } = _vm
  let { selected, actived } = _vm.editStore

  // 获取按键信息
  let eventKeyCode = event.keyCode
  let isKeyWithCtrl = event.ctrlKey
  let isKeyF2 = eventKeyCode === 113
  let isKeyX = eventKeyCode === 88
  let isKeyV = eventKeyCode === 86
  let isKeyC = eventKeyCode === 67
  let isKeyA = eventKeyCode === 65
  let isKeyDel = eventKeyCode === 46
  let isKeyDwArrow = eventKeyCode === 40
  let isKeyRightArrow = eventKeyCode === 39
  let isKeyUpArrow = eventKeyCode === 38
  let isKeyLeftArrow = eventKeyCode === 37
  let isKeySpacebar = eventKeyCode === 32
  let isKeyEsc = eventKeyCode === 27
  let isKeyEnter = eventKeyCode === 13
  let isKeyTab = eventKeyCode === 9
  let isKeyBack = eventKeyCode === 8
  let isOperArrowKeys = isKeyLeftArrow || isKeyUpArrow || isKeyRightArrow || isKeyDwArrow
  let isOperCtxMenu = isCtxMenu && ctxMenuStore.visible && (isKeyEnter || isKeySpacebar || isOperArrowKeys)

  // 定义所有键盘事件处理规则
  let rules = [
    // ESC键处理
    rule1({ isKeyEsc, _vm, event, actived, mouseConfig }),
    // 空格键处理（用于选择复选框/单选框）
    rule2({ isKeySpacebar, keyboardConfig, selected, _vm, event }),
    // 回车键处理
    rule3({ isKeyEnter, keyboardConfig, selected, actived, treeConfig, highlightCurrentRow, currentRow, _vm, event }),
    // 右键菜单处理
    rule4({ isOperCtxMenu, _vm, event }),
    // F2键处理
    rule5({ isKeyF2, _vm, event, selected }),
    // 方向键处理
    rule6({ isOperArrowKeys, keyboardConfig, _vm, event, selected }),
    // Tab键处理
    rule7({ isKeyTab, keyboardConfig, _vm, event, selected, actived }),
    // 删除键和退格键处理
    rule8({ isKeyDel, treeConfig, highlightCurrentRow, currentRow, isKeyBack, keyboardConfig, _vm, event, selected }),
    // 复制粘贴快捷键处理
    rule9({ keyboardConfig, isKeyWithCtrl, isKeyA, isKeyX, isKeyC, isKeyV, _vm, event }),
    // 其他按键处理（用于直接编辑）
    rule10({ keyboardConfig, isKeyWithCtrl, _vm, event, selected, actived })
  ]

  // 遍历规则，执行匹配的规则动作
  for (let i = 0; i < rules.length; i++) {
    if (rules[i].match()) {
      return rules[i].action()
    }
  }
}
