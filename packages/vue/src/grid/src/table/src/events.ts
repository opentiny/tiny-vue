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
import {
  handleGlobalMousedownOnFilterWrapper,
  handleGlobalMousedownOnCtxMenu,
  handleGlobalBlurOutside,
  handleGlobalIsClear,
  handleGlobalClearActived
} from './utils/handleGlobalMousedownEvent'
import { findTree } from '@opentiny/vue-renderless/grid/static/'
import { setCellValue, hasChildrenList } from '@opentiny/vue-renderless/grid/utils'
import { checkOtherKey } from './utils/handleOtherKeyDown'
import { onGlobalKeydown } from './utils/handleGlobalKeydownEvent'

// 全局按下事件处理
export function handleGlobalMousedownEvent(event) {
  let { $el, ctxMenuStore, editConfig = {}, filterStore } = this
  let { filterWrapper, validTip } = this.$refs
  let { actived } = this.editStore
  // 过滤面板
  handleGlobalMousedownOnFilterWrapper({ $el, _vm: this, event, filterStore, filterWrapper })
  // 如果已激活了编辑状态
  if (actived.row && !(editConfig.autoClear === false)) {
    if (handleGlobalBlurOutside({ _vm: this, actived, event })) {
      return
    }
    if (validTip && this.getEventTargetNode(event, validTip.$el).flag) {
      // 如果是激活状态，且点击了校验提示框
    } else if (!this.lastCallTime || this.lastCallTime + 50 < Date.now()) {
      // 如果手动调用了激活单元格，避免触发源被移除后导致重复关闭
      this.preventEvent(event, 'event.clear_actived', actived.args, () => {
        let isClear
        let isReadonlyCol = !this.getEventTargetNode(event, $el, 'col__edit').flag
        isClear = handleGlobalIsClear({ $el, _vm: this, actived, editConfig, event, isClear, isReadonlyCol })
        handleGlobalClearActived({ $el, _vm: this, event, isClear })
      })
    }
  }
  // 如果配置了快捷菜单且，点击了其他地方则关闭
  handleGlobalMousedownOnCtxMenu({ _vm: this, ctxMenuStore, event })
}

// 窗口失焦事件处理
export function handleGlobalBlurEvent() {
  this.closeFilter()
  this.closeMenu()
}

// 全局滚动事件
export function handleGlobalMousewheelEvent(event) {
  this.updateScrollLoadBar(event)
  this.clostTooltip()
  this.closeMenu()
}

export function handleEscKeyDown({ event, actived, mouseConfig }) {
  this.closeMenu()
  this.closeFilter()
  // 如果是激活编辑状态，则取消编辑
  if (actived.row) {
    this.clearActived(event)
    // 如果配置了选中功能，则为选中状态
    if (mouseConfig.selected) {
      this.$nextTick(() => this.handleSelected(actived.args, event))
    }
  }
}

export function handleEnterKeyDown({ event, selected, actived }) {
  const { highlightCurrentRow, currentRow, treeConfig } = this
  let isLeftArrow = event.keyCode === 37
  let isUpArrow = event.keyCode === 38
  let isRightArrow = event.keyCode === 39
  // 如果是激活状态，退则出到下一行
  if (selected.row || actived.row) {
    this.moveSelected({ args: selected.row ? selected.args : actived.args, isLeftArrow, isUpArrow, isRightArrow, isDwArrow: true, event })
  } else if (treeConfig && highlightCurrentRow && currentRow) {
    // 如果是树形表格当前行回车移动到子节点
    let childrens = currentRow[treeConfig.children]
    if (childrens && childrens.length) {
      event.preventDefault()
      let targetRow = childrens[0]
      this.setTreeExpansion(currentRow, true)
        .then(() => this.scrollToRow(targetRow))
        .then(() => this.triggerCurrentRowEvent(event, { $table: this, row: targetRow }))
    }
  }
}

export function handleCtxMenu({ event }) {
  const { ctxMenuStore } = this
  event.preventDefault()
  if (ctxMenuStore.showChild && hasChildrenList(ctxMenuStore.selected)) {
    this.moveCtxMenu({
      event,
      keyCode: event.keyCode,
      ctxMenuStore,
      property: 'selectChild',
      operKey: 37,
      operRest: false,
      menuList: ctxMenuStore.selected.children
    })
  } else {
    this.moveCtxMenu({ event, keyCode: event.keyCode, ctxMenuStore, property: 'selected', operKey: 39, operRest: true, menuList: this.ctxMenuList })
  }
}

export function handleArrowKeyDown({ event, selected }) {
  const { highlightCurrentRow, currentRow } = this
  let isLeftArrow = event.keyCode === 37
  let isUpArrow = event.keyCode === 38
  let isRightArrow = event.keyCode === 39
  let isDownArrow = event.keyCode === 40
  if (selected.row && selected.column) {
    this.moveSelected({ args: selected.args, isLeftArrow, isUpArrow, isRightArrow, isDownArrow, event })
  } else if ((isUpArrow || isDownArrow) && highlightCurrentRow && currentRow) {
    // 当前行按键上下移动
    this.moveCurrentRow(isUpArrow, isDownArrow, event)
  }
}

export function handleDelKeyDown({ event, selected }) {
  const { keyboardConfig = {}, treeConfig, highlightCurrentRow, currentRow } = this
  const isBack = event.keyCode === 8
  if (keyboardConfig.isDel && (selected.row || selected.column)) {
    setCellValue(selected.row, selected.column, null)
    if (isBack) {
      this.handleActived(selected.args, event)
    }
  } else if (isBack && keyboardConfig.isArrow && treeConfig && highlightCurrentRow && currentRow) {
    // 如果树形表格回退键关闭当前行返回父节点
    let { parent: parentRow } = findTree(this.afterFullData, (item) => item === currentRow, treeConfig)
    if (parentRow) {
      event.preventDefault()
      this.setTreeExpansion(parentRow, false)
        .then(() => this.scrollToRow(parentRow))
        .then(() => this.triggerCurrentRowEvent(event, { $table: this, row: parentRow }))
    }
  }
}

export function handleSpaceKeyDown({ event, selected }) {
  event.preventDefault()
  if (selected.column.type === 'selection') {
    this.handleToggleCheckRowEvent(selected.args, event)
  } else {
    this.triggerRadioRowEvent(event, selected.args)
  }
}

export function handleTabKeyDown({ event, selected, actived }) {
  const isShiftKey = event.shiftKey
  const useTab = this.editConfig.useTab
  // 如果按下了 Tab 键切换
  if (selected.row || selected.column) {
    this.moveTabSelected(selected.args, isShiftKey, event, useTab)
  } else if (actived.row || actived.column) {
    this.moveTabSelected(actived.args, isShiftKey, event, useTab)
  }
}

export function handleCopyKeyDown({ event }) {
  if (event.keyCode === 65) {
    this.handleAllChecked(event)
  } else if (event.keyCode === 88 || event.keyCode === 67) {
    // Ctrl + X 或 Ctrl + C
    this.handleCopyed(event.keyCode === 88, event)
  } else {
    this.handlePaste(event)
  }
}

export function handleF2KeyDown({ event, selected }) {
  if (selected.row && selected.column) {
    event.preventDefault()
    this.handleActived(selected.args, event)
  }
}

export function handleOtherKeyDown({ event, selected }) {
  const { keyboardConfig = {} } = this
  const keyCode = event.keyCode
  const isOtherKey = checkOtherKey(keyCode)
  if (
    isOtherKey &&
    selected.column &&
    selected.row &&
    selected.column.editor &&
    (!keyboardConfig.editMethod || !(keyboardConfig.editMethod(selected.args, event) === false))
  ) {
    // 如果是按下非功能键之外允许直接编辑
    setCellValue(selected.row, selected.column, null)
    this.handleActived(selected.args, event)
  }
}

// 全局键盘事件
export function handleGlobalKeydownEvent(event) {
  this.preventEvent(event, 'event.keydown', { $table: this }, () => {
    onGlobalKeydown(event, this)
  })
}

// 监听全局的窗口尺寸改变事件，然后重新计算表格样式
export function handleGlobalResizeEvent() {
  this.recalculate()
}

// 触发表头 tooltip 事件
export function triggerHeaderTooltipEvent(event, params) {
  let { tooltipStore } = this
  let { column, showHeaderTip } = params
  if (tooltipStore.column !== column || !tooltipStore.visible) {
    // 在 v3.0 中废弃 label
    this.handleTooltip(event, column, null, showHeaderTip, true)
  }
}

// 触发表尾 tooltip 事件
export function triggerFooterTooltipEvent(event, params) {
  let { column } = params
  let tooltipStore = this.tooltipStore
  if (tooltipStore.column !== column || !tooltipStore.visible) {
    this.handleTooltip(event, column)
  }
}

// 触发 tooltip 事件
export function triggerTooltipEvent(event, params) {
  let { editConfig, editStore, tooltipStore } = this
  let { actived } = editStore
  let { row, column, showTip } = params
  if (editConfig) {
    if ((editConfig.mode === 'row' && actived.row === row && column.editor) || (actived.row === row && actived.column === column)) {
      return
    }
  }
  if (tooltipStore.column !== column || tooltipStore.row !== row || !tooltipStore.visible) {
    this.handleTooltip(event, column, row, showTip)
  }
}
