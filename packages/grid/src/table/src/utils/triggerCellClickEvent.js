/**
 * Copyright (c) 2022 - present TinyVue Authors.
 * Copyright (c) 2022 - present Huawei Cloud Computing Technologies Co., Ltd.
 *
 * Use of this source code is governed by an MIT-style license.
 *
 * THE OPEN SOURCE SOFTWARE IN THIS PRODUCT IS DISTRIBUTED IN THE HOPE THAT IT WILL BE USEFUL,
 * BUT WITHOUT ANY WARRANTY, WITHOUT EVEN THE IMPLIED WARRANTY OF MERCHANTABILITY OR FITNESS FOR
 * A PARTICULAR PURPOSE. SEE THE APPLICABLE LICENSES FOR MORE DETAILS.
 *
 */
export function isTargetRadioOrCheckbox(event, column, colType, targetType) {
  const target = event.target

  return (
    target &&
    column.type === colType &&
    target.tagName.toLowerCase() === 'input' &&
    target.type === (targetType || colType)
  )
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
      (!_vm.getEventTargetNode(event, $el, 'tiny-grid-checkbox').flag &&
        !_vm.getEventTargetNode(event, $el, 'tiny-grid-radio').flag)
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
