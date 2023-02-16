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
export function isTargetRadioOrCheckbox(event, column, colType, targetType) {
  const target = event.target

  return target && column.type === colType && target.tagName.toLowerCase() === 'input' && target.type === (targetType || colType)
}

export function onClickExpandColumn({ $el, _vm, column, event, expandConfig, params }) {
  if (
    (expandConfig.trigger === 'row' || (column.type === 'expand' && expandConfig.trigger === 'cell')) &&
    !_vm.getEventTargetNode(event, $el, 'tiny-grid__expanded').flag
  ) {
    _vm.triggerRowExpandEvent(event, params)
  }
}

export function onClickTreeNodeColumn({ _vm, column, event, params, treeConfig }) {
  if (treeConfig.trigger === 'row' || (column.treeNode && treeConfig.trigger === 'cell')) {
    _vm.triggerTreeExpandEvent(event, params)
  }
}

export function onHighlightCurrentRow({ $el, _vm, event, highlightCurrentRow, params, radioConfig }) {
  if (highlightCurrentRow) {
    if (
      radioConfig.trigger === 'row' ||
      (!_vm.getEventTargetNode(event, $el, 'tiny-grid-checkbox').flag && !_vm.getEventTargetNode(event, $el, 'tiny-grid-radio').flag)
    ) {
      _vm.triggerCurrentRowEvent(event, params)
    }
  }
}

export function onClickRadioColumn({ $el, _vm, column, event, params, radioConfig }) {
  if (
    (radioConfig.trigger === 'row' || (column.type === 'radio' && radioConfig.trigger === 'cell')) &&
    !_vm.getEventTargetNode(event, $el, 'tiny-grid-radio').flag
  ) {
    _vm.triggerRadioRowEvent(event, params)
  }
}

export function onClickSelectColumn({ _vm, column, event, params, selectConfig }) {
  if (
    (selectConfig.trigger === 'row' || (column.type === 'selection' && selectConfig.trigger === 'cell')) &&
    !_vm.getEventTargetNode(event, params.cell, 'tiny-grid-checkbox').flag
  ) {
    _vm.handleToggleCheckRowEvent(params, event)
  }
}

export function onClickCellSelect({ _vm, actived, cell, column, editConfig, event, mouseConfig, params, row }) {
  if (!mouseConfig.checked && editConfig) {
    if (editConfig.trigger === 'manual') {
      if (actived.args && actived.row === row && column !== actived.column) {
        _vm.handleChangeCell(event, params)
      }
    } else if (!actived.args || cell !== actived.args.cell) {
      if (editConfig.trigger === 'click') {
        _vm.handleChangeCell(event, params)
      } else if (editConfig.trigger === 'dblclick') {
        if (editConfig.mode === 'row' && actived.row === params.row) {
          _vm.handleChangeCell(event, params)
        } else {
          _vm.handleSelected(params, event)
        }
      }
    }
  }
}
