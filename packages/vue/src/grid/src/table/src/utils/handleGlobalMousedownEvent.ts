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
export function handleGlobalMousedownOnFilterWrapper({ $el, _vm, event, filterStore, filterWrapper }) {
  if (filterWrapper) {
    if (_vm.getEventTargetNode(event, $el, 'tiny-grid-filter-wrapper').flag) {
      // 如果点击了筛选按钮
    } else if (_vm.getEventTargetNode(event, filterWrapper.$el).flag) {
      // 如果点击筛选容器
    } else if (_vm.getEventTargetNode(event, document.body, 'tiny-popper').flag) {
      // 如果点击筛选容器下拉弹出的弹窗
    } else {
      _vm.closeFilter()
      _vm.preventEvent(event, 'event.clear_filter', filterStore.args, _vm.closeFilter)
    }
  }
}

export function handleGlobalMousedownOnCtxMenu({ _vm, ctxMenuStore, event }) {
  if (ctxMenuStore.visible && _vm.$refs.ctxWrapper && !_vm.getEventTargetNode(event, _vm.$refs.ctxWrapper.$el).flag) {
    _vm.closeMenu()
  }
}

export function handleGlobalBlurOutside({ _vm, actived, event }) {
  // false->退出编辑clearActived; undefined->逻辑不变化; true->保留编辑状态,直接return
  let custblur = _vm.blurOutside(actived, event)

  if (typeof custblur === 'boolean') {
    custblur || setTimeout(() => _vm.clearActived(event))
    return true
  }

  return false
}

export function handleGlobalIsClear({ $el, _vm, actived, editConfig, event, isClear, isReadonlyCol }) {
  if (editConfig.mode === 'row') {
    let rowNode = _vm.getEventTargetNode(event, $el, 'tiny-grid-body__row')
    let isOtherRow = rowNode.flag ? rowNode.targetElem !== actived.args.cell.parentNode : 0

    if (editConfig.trigger === 'manual') {
      // manual 触发，如果点击了不同行
      isClear = !_vm.getEventTargetNode(event, $el, 'row__actived').flag && isOtherRow
    } else {
      // click,dblclick 触发，如果点击了不同行的非编辑列
      isClear = isOtherRow && isReadonlyCol
    }
  } else {
    // cell 方式，如果是非编辑列
    isClear = isReadonlyCol
  }

  return isClear
}

export function handleGlobalClearActived({ $el, _vm, event, isClear }) {
  if (
    isClear ||
    // 如果点击了当前表格之外
    !_vm.getEventTargetNode(event, $el).flag ||
    (_vm.$refs.tableHeader && _vm.$refs.tableHeader.$el.contains(event.target))
  ) {
    setTimeout(() => _vm.clearActived(event))
  }
}
