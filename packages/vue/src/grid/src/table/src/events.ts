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

/**
 * 表格事件处理模块
 * 该模块包含了表格组件中所有的事件处理函数，包括鼠标事件、键盘事件、窗口事件等
 */

// 导入鼠标事件处理相关的工具函数
import {
  handleGlobalMousedownOnFilterWrapper,
  handleGlobalMousedownOnCtxMenu,
  handleGlobalBlurOutside,
  handleGlobalIsClear,
  handleGlobalClearActived
} from './utils/handleGlobalMousedownEvent'

// 导入树形数据处理工具
import { findTree } from '@opentiny/vue-renderless/grid/static/'

// 导入单元格值设置和子节点检查工具
import { setCellValue, hasChildrenList } from '@opentiny/vue-renderless/grid/utils'

// 导入其他按键检查工具
import { checkOtherKey } from './utils/handleOtherKeyDown'

// 导入全局键盘事件处理工具
import { onGlobalKeydown } from './utils/handleGlobalKeydownEvent'

/**
 * 处理全局鼠标按下事件
 * @param {Event} event - 鼠标事件对象
 * @description
 * 1. 处理过滤面板的点击事件
 * 2. 处理编辑状态的清除
 * 3. 处理快捷菜单的关闭
 */
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

/**
 * 处理全局鼠标按下捕获事件
 * @param {Event} event - 鼠标事件对象
 * @description 清除鼠标选中状态
 */
export function handleGlobalMousedownCaptureEvent(event) {
  this.handleClearMouseChecked(event)
}

/**
 * 处理全局失焦事件
 * @description 关闭过滤面板和菜单
 */
export function handleGlobalBlurEvent() {
  this.closeFilter()
  this.closeMenu()
}

/**
 * 处理全局鼠标滚轮事件
 * @param {Event} event - 鼠标滚轮事件对象
 * @description
 * 1. 更新滚动加载条
 * 2. 关闭提示框
 * 3. 关闭菜单
 */
export function handleGlobalMousewheelEvent(event) {
  this.updateScrollLoadBar(event)
  this.clostTooltip()
  this.closeMenu()
}

/**
 * 处理ESC键按下事件
 * @param {Object} params - 参数对象
 * @param {Event} params.event - 键盘事件对象
 * @param {Object} params.actived - 当前激活的单元格信息
 * @param {Object} params.mouseConfig - 鼠标配置信息
 * @description
 * 1. 关闭菜单和过滤面板
 * 2. 如果处于编辑状态，则取消编辑
 * 3. 如果配置了选中功能，则设置为选中状态
 */
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

/**
 * 处理回车键按下事件
 * @param {Object} params - 参数对象
 * @param {Event} params.event - 键盘事件对象
 * @param {Object} params.selected - 当前选中的单元格信息
 * @param {Object} params.actived - 当前激活的单元格信息
 * @description
 * 1. 如果处于选中或激活状态，移动到下一行
 * 2. 如果是树形表格且当前行有子节点，展开并移动到第一个子节点
 */
export function handleEnterKeyDown({ event, selected, actived }) {
  const { highlightCurrentRow, currentRow, treeConfig } = this
  const isLeftArrow = event.keyCode === 37
  const isUpArrow = event.keyCode === 38
  const isRightArrow = event.keyCode === 39
  // 如果是激活状态，退则出到下一行
  if (selected.row || actived.row) {
    this.moveSelected({
      args: selected.row ? selected.args : actived.args,
      isLeftArrow,
      isUpArrow,
      isRightArrow,
      isDownArrow: true,
      event
    })
  } else if (treeConfig && highlightCurrentRow && currentRow) {
    // 如果是树形表格当前行回车移动到子节点
    const children = currentRow[treeConfig.children]
    if (children && children.length) {
      event.preventDefault()
      const targetRow = children[0]
      this.setTreeExpansion(currentRow, true)
        .then(() => this.scrollToRow(targetRow))
        .then(() => this.triggerCurrentRowEvent(event, { $table: this, row: targetRow }))
    }
  }
}

/**
 * 处理右键菜单事件
 * @param {Object} params - 参数对象
 * @param {Event} params.event - 鼠标事件对象
 * @description
 * 1. 如果当前菜单项有子菜单，处理子菜单的移动
 * 2. 否则处理主菜单的移动
 */
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
    this.moveCtxMenu({
      event,
      keyCode: event.keyCode,
      ctxMenuStore,
      property: 'selected',
      operKey: 39,
      operRest: true,
      menuList: this.ctxMenuList
    })
  }
}

/**
 * 处理方向键按下事件
 * @param {Object} params - 参数对象
 * @param {Event} params.event - 键盘事件对象
 * @param {Object} params.selected - 当前选中的单元格信息
 * @description
 * 1. 如果选中了单元格，则移动选中位置
 * 2. 如果启用了当前行高亮，则上下移动当前行
 */
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

/**
 * 处理删除键按下事件
 * @param {Object} params - 参数对象
 * @param {Event} params.event - 键盘事件对象
 * @param {Object} params.selected - 当前选中的单元格信息
 * @description
 * 1. 如果启用了删除功能，清空选中单元格的值
 * 2. 如果是树形表格且按下了退格键，关闭当前节点并返回父节点
 */
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

/**
 * 处理空格键按下事件
 * @param {Object} params - 参数对象
 * @param {Event} params.event - 键盘事件对象
 * @param {Object} params.selected - 当前选中的单元格信息
 * @description
 * 1. 如果是选择列，切换行的选中状态
 * 2. 否则触发单选行事件
 */
export function handleSpaceKeyDown({ event, selected }) {
  event.preventDefault()
  if (selected.column.type === 'selection') {
    this.handleToggleCheckRowEvent(selected.args, event)
  } else {
    this.triggerRadioRowEvent(event, selected.args)
  }
}

/**
 * 处理Tab键按下事件
 * @param {Object} params - 参数对象
 * @param {Event} params.event - 键盘事件对象
 * @param {Object} params.selected - 当前选中的单元格信息
 * @param {Object} params.actived - 当前激活的单元格信息
 * @description 根据是否按下Shift键，在选中或激活的单元格之间移动
 */
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

/**
 * 处理复制相关按键事件
 * @param {Object} params - 参数对象
 * @param {Event} params.event - 键盘事件对象
 * @description
 * 1. Ctrl+A: 全选
 * 2. Ctrl+X/C: 剪切/复制
 * 3. Ctrl+V: 粘贴
 */
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

/**
 * 处理F2键按下事件
 * @param {Object} params - 参数对象
 * @param {Event} params.event - 键盘事件对象
 * @param {Object} params.selected - 当前选中的单元格信息
 * @description 如果选中了单元格，则激活编辑状态
 */
export function handleF2KeyDown({ event, selected }) {
  if (selected.row && selected.column) {
    event.preventDefault()
    this.handleActived(selected.args, event)
  }
}

/**
 * 处理其他按键事件
 * @param {Object} params - 参数对象
 * @param {Event} params.event - 键盘事件对象
 * @param {Object} params.selected - 当前选中的单元格信息
 * @description 如果按下的是非功能键且单元格可编辑，则激活编辑状态
 */
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
    this.handleActived(selected.args, event)
  }
}

/**
 * 处理全局键盘事件
 * @param {Event} event - 键盘事件对象
 * @description 调用全局键盘事件处理函数
 */
export function handleGlobalKeydownEvent(event) {
  this.preventEvent(event, 'event.keydown', { $table: this }, () => {
    onGlobalKeydown(event, this)
  })
}

/**
 * 处理全局窗口大小改变事件
 * @description
 * 1. 更新父容器高度
 * 2. 重新计算表格样式
 */
export function handleGlobalResizeEvent() {
  // 窗口resize后，调用recalculate父容器高度还是初始值，需要update一下
  this.updateParentHeight()
}
