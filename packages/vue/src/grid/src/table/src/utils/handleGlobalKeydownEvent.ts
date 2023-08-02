/**
 * MIT License
 *
 * Copyright (c) 2019 Xu Liangzhan
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */
function rule1({ isKeyEsc, _vm, event, actived, mouseConfig }) {
  return {
    match: () => isKeyEsc,
    action: () => _vm.handleEscKeyDown({ event, actived, mouseConfig })
  }
}

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

function rule3(args) {
  const { isKeyEnter, keyboardConfig, selected, actived } = args
  const { treeConfig, highlightCurrentRow, currentRow, _vm, event } = args

  return {
    match: () =>
      isKeyEnter && (keyboardConfig.isArrow || keyboardConfig.isTab) && (selected.row || actived.row || (treeConfig && highlightCurrentRow && currentRow)),
    action: () => _vm.handleEnterKeyDown({ event, selected, actived })
  }
}

function rule4({ isOperCtxMenu, _vm, event }) {
  return {
    match: () => isOperCtxMenu,
    action: () => _vm.handleCtxMenu({ event })
  }
}

function rule5({ isKeyF2, _vm, event, selected }) {
  return {
    match: () => isKeyF2,
    action: () => _vm.handleF2KeyDown({ event, selected })
  }
}

function rule6({ isOperArrowKeys, keyboardConfig, _vm, event, selected }) {
  return {
    match: () => isOperArrowKeys && keyboardConfig.isArrow,
    action: () => _vm.handleArrowKeyDown({ event, selected })
  }
}

function rule7({ isKeyTab, keyboardConfig, _vm, event, selected, actived }) {
  return {
    match: () => isKeyTab && keyboardConfig.isTab,
    action: () => _vm.handleTabKeyDown({ event, selected, actived })
  }
}

function rule8(args) {
  const { isKeyDel, treeConfig, highlightCurrentRow, currentRow } = args
  const { isKeyBack, keyboardConfig, _vm, event, selected } = args

  return {
    match: () => isKeyDel || (treeConfig && highlightCurrentRow && currentRow ? isKeyBack && keyboardConfig.isArrow : isKeyBack),
    action: () => _vm.handleDelKeyDown({ event, selected })
  }
}

function rule9({ keyboardConfig, isKeyWithCtrl, isKeyA, isKeyX, isKeyC, isKeyV, _vm, event }) {
  return {
    match: () => keyboardConfig.isCut && isKeyWithCtrl && (isKeyA || isKeyX || isKeyC || isKeyV),
    action: () => _vm.handleCopyKeyDown({ event })
  }
}

function rule10({ keyboardConfig, isKeyWithCtrl, _vm, event, selected }) {
  return {
    match: () => keyboardConfig.isEdit && !isKeyWithCtrl,
    action: () => _vm.handleOtherKeyDown({ event, selected })
  }
}
export function onGlobalKeydown(event, _vm) {
  let { isCtxMenu, ctxMenuStore, mouseConfig = {}, keyboardConfig = {} } = _vm
  let { treeConfig, highlightCurrentRow, currentRow } = _vm
  let { selected, actived } = _vm.editStore
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
  let rules = [
    rule1({ isKeyEsc, _vm, event, actived, mouseConfig }),
    // 空格键支持选中复选列
    rule2({ isKeySpacebar, keyboardConfig, selected, _vm, event }),
    // 如果是激活状态，退则出到下一行
    rule3({ isKeyEnter, keyboardConfig, selected, actived, treeConfig, highlightCurrentRow, currentRow, _vm, event }),
    // 如果配置了右键菜单; 支持方向键操作、回车
    rule4({ isOperCtxMenu, _vm, event }),
    // 如果按下了 F2 键
    rule5({ isKeyF2, _vm, event, selected }),
    // 如果按下了方向键
    rule6({ isOperArrowKeys, keyboardConfig, _vm, event, selected }),
    // 如果按下了 Tab 键切换
    rule7({ isKeyTab, keyboardConfig, _vm, event, selected, actived }),
    // 如果是删除键
    rule8({ isKeyDel, treeConfig, highlightCurrentRow, currentRow, isKeyBack, keyboardConfig, _vm, event, selected }),
    rule9({ keyboardConfig, isKeyWithCtrl, isKeyA, isKeyX, isKeyC, isKeyV, _vm, event }),
    // 如果是按下非功能键之外允许直接编辑
    rule10({ keyboardConfig, isKeyWithCtrl, _vm, event, selected })
  ]

  for (let i = 0; i < rules.length; i++) {
    if (rules[i].match()) {
      return rules[i].action()
    }
  }
}
