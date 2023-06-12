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
import { get } from '@opentiny/vue-renderless/grid/static/'
import { random } from '@opentiny/vue-renderless/common/string'
import { getColumnConfig, getFuncText, formatText } from '@opentiny/vue-renderless/grid/utils'
import { Renderer } from '../../adapter'
import { getCellLabel } from '../../tools'
import GLOBAL_CONFIG from '../../config'
import { hooks } from '@opentiny/vue-common'
import {
  iconCheckedSur, iconMobileCheckboxHalf, iconEllipsis
} from '@opentiny/vue-icon'
import { getTableCellKey } from '../../table/src/strategy'
import Dropdown from '@opentiny/vue-dropdown'
import DropdownMenu from '@opentiny/vue-dropdown-menu'
import DropdownItem from '@opentiny/vue-dropdown-item'

const insertedField = GLOBAL_CONFIG.constant.insertedField

const classMap = {
  isDisabled: 'is__disabled',
  isIndeterminate: 'is__indeterminate'
}

const getCellRender = (isTreeNode, treeCellRender, treeRender, context) => context[isTreeNode ? treeCellRender : treeRender]

function processRenderer({ h, params, renderer, value }) {
  let result = { flag: false, vnodes: null }

  if (renderer) {
    if (typeof renderer === 'function') {
      result.flag = true
      result.vnodes = [renderer(h, params)]
    }

    if (renderer.component) {
      const { component, attrs } = renderer

      result.flag = true
      result.vnodes = [
        h(hooks.toRaw(component), {
          key: getTableCellKey(params),
          class: 'grid-cell',
          attrs: {
            value,
            modelValue: value,
            ...(typeof attrs === 'function' ? attrs(params) : attrs)
          }
        })
      ]
    }
  }

  return result
}

function processAsyncColumn({ $table, column, format, h, params, row }) {
  let result = { flag: false, vnodes: null }

  const { fetch, loadingText } = format.async || {}

  if ($table.isAsyncColumn && row[insertedField] !== true && typeof fetch === 'function') {
    let cellText = row[$table.getAsyncColumnName(column.property)]
    const loadingRender = loadingText || 'loading ...'

    if (typeof cellText === 'undefined') {
      cellText = typeof loadingRender === 'function' ? loadingRender(h, params) : loadingRender
    }

    if (typeof cellText === 'undefined' || typeof column.formatText === 'undefined') {
      result.flag = true
      result.vnodes = [cellText]
    }
  }

  return result
}

function getColumnRuleTypeIndex({ _vm, isTreeNode, renMaps, type }) {
  return {
    match: () => type === 'index',
    action: () => {
      renMaps.renderHeader = _vm.renderIndexHeader
      renMaps.renderCell = getCellRender(isTreeNode, 'renderTreeIndexCell', 'renderIndexCell', _vm)
    }
  }
}

function getColumnRuleTypeRadio({ _vm, isTreeNode, renMaps, type }) {
  return {
    match: () => type === 'radio',
    action: () => {
      renMaps.renderHeader = _vm.renderRadioHeader
      renMaps.renderCell = getCellRender(isTreeNode, 'renderTreeRadioCell', 'renderRadioCell', _vm)
    }
  }
}

function getColumnRuleTypeSelection({ _vm, isTreeNode, renMaps, selectConfig, type }) {
  return {
    match: () => type === 'selection',
    action: () => {
      renMaps.renderHeader = _vm.renderSelectionHeader
      renMaps.renderCell = getCellRender(isTreeNode, 'renderTreeSelectionCell', 'renderSelectionCell', _vm)

      if (selectConfig && selectConfig.checkField) {
        renMaps.renderCell = getCellRender(isTreeNode, 'renderTreeSelectionCellByProp', 'renderSelectionCellByProp', _vm)
      }
    }
  }
}

function getColumnRuleTypeExpand({ _vm, renMaps, type }) {
  return {
    match: () => type === 'expand',
    action: () => {
      renMaps.renderCell = _vm.renderExpandCell
      renMaps.renderData = _vm.renderExpandData
    }
  }
}

function getColumnRuleTypeOperation({ _vm, renMaps, type }) {
  return {
    match: () => type === 'operation',
    action: () => {
      renMaps.renderCell = _vm.renderOperationCell
    }
  }
}

function getColumnRuleTypeOther({ $table, _vm, colProps, editor, filter, isTreeNode, renMaps, type }) {
  return {
    match: () => !~['index', 'radio', 'selection', 'expand'].indexOf(type),
    action: () => {
      let { sortable, remoteSort } = colProps
      const isSortable = $table.sortable && (type ? false : sortable)
      const isSortColumn = isSortable || remoteSort

      if (editor) {
        renMaps.renderHeader = _vm.renderEditHeader
        renMaps.renderCell = getCellRender(isTreeNode, 'renderTreeRadioCell', 'renderRowEdit', _vm)

        if ($table.editConfig && $table.editConfig.mode === 'cell') {
          renMaps.renderCell = getCellRender(isTreeNode, 'renderTreeCellEdit', 'renderCellEdit', _vm)
        }
      } else if (filter) {
        renMaps.renderHeader = _vm.renderFilterHeader

        if (isSortColumn) {
          renMaps.renderHeader = _vm.renderSortAndFilterHeader
        }
      } else if (isSortColumn) {
        renMaps.renderHeader = _vm.renderSortHeader
      }
    }
  }
}

const isCheckStrictly = (selectConfig) =>
  (selectConfig && selectConfig.checkStrictly && !selectConfig.showHeader) || (selectConfig && !selectConfig.checkStrictly && selectConfig.showHeader === false)

const getSelectVnodes = ({ h, vSize, headerCheckDisabled, isIndeterminate, options, isAllSelected, headerTitle }) =>
  h(
    'label',
    {
      class: [
        'tiny-grid-checkbox tiny-select-header',
        {
          [`size__${vSize}`]: vSize,
          [classMap.isDisabled]: headerCheckDisabled,
          [classMap.isIndeterminate]: isIndeterminate
        }
      ],
      key: random()
    },
    [
      h('input', options),
      h('span', { class: 'tiny-grid-checkbox__icon' }, [
        isAllSelected
          ? h(iconCheckedSur(), {
            class: ['tiny-svg-size', 'icon-checked-sur']
          })
          : '',
        isIndeterminate
          ? h(iconMobileCheckboxHalf(), {
            class: ['tiny-svg-size', 'icon-half-select']
          })
          : ''
      ]),
      headerTitle ? h('span', { class: 'tiny-grid-checkbox__label' }, getFuncText(headerTitle)) : null
    ]
  )

const getSelectCellVnodes = ({ indeterminate, h, isDisabled, vSize, labelField, options, row }) =>
  h(
    'label',
    {
      class: [
        'tiny-grid-checkbox tiny-select-cell',
        {
          [`size__${vSize}`]: vSize,
          [classMap.isIndeterminate]: indeterminate,
          [classMap.isDisabled]: isDisabled
        }
      ],
      key: random()
    },
    [
      h('input', options),
      h('span', { class: 'tiny-grid-checkbox__icon' }, [
        indeterminate
          ? h(iconMobileCheckboxHalf(), {
            class: ['tiny-svg-size', 'icon-half-select']
          })
          : h(iconCheckedSur(), { class: ['tiny-svg-size', 'icon-checked-sur'] })
      ]),
      labelField ? h('span', { class: 'tiny-grid-checkbox__label' }, get(row, labelField)) : null
    ]
  )

const getSelectCellByProsVnodes = ({ h, vSize, indeterminate, isDisabled, options, labelField, row }) =>
  h(
    'label',
    {
      key: random(),
      class: [
        'tiny-grid-checkbox',
        {
          [`size__${vSize}`]: vSize,
          [classMap.isIndeterminate]: indeterminate,
          [classMap.isDisabled]: isDisabled
        }
      ]
    },
    [
      h('input', options),
      h('span', { class: 'tiny-grid-checkbox__icon' }, [
        !indeterminate
          ? ''
          : h(iconMobileCheckboxHalf(), {
            class: ['tiny-svg-size', 'icon-half-select']
          }),
        h(iconCheckedSur(), { class: ['tiny-svg-size', 'icon-checked-sur'] })
      ]),
      !labelField ? null : h('span', { class: 'tiny-grid-checkbox__label' }, get(row, labelField))
    ]
  )

export const Cell = {
  createColumn($table, colProps) {
    let { type, filter, editor, treeNode } = colProps
    let { selectConfig, treeConfig } = $table
    let isTreeNode = treeConfig && treeNode
    let renMaps = {
      renderHeader: this.renderHeader,
      renderCell: getCellRender(isTreeNode, 'renderTreeCell', 'renderCell', this)
    }
    let _vm = this

    let ruleChains = [
      getColumnRuleTypeIndex({ _vm, isTreeNode, renMaps, type }),
      getColumnRuleTypeRadio({ _vm, isTreeNode, renMaps, type }),
      getColumnRuleTypeSelection({
        _vm,
        isTreeNode,
        renMaps,
        selectConfig,
        type
      }),
      getColumnRuleTypeExpand({ _vm, renMaps, type }),
      getColumnRuleTypeOperation({ _vm, renMaps, type }),
      getColumnRuleTypeOther({
        $table,
        _vm,
        colProps,
        editor,
        filter,
        isTreeNode,
        renMaps,
        type
      })
    ]

    for (let j = 0; j < ruleChains.length; j++) {
      if (ruleChains[j].match()) {
        ruleChains[j].action()
        break
      }
    }

    return getColumnConfig(colProps, renMaps, GLOBAL_CONFIG)
  },
  // 单元格
  renderHeader(h, params) {
    let { column } = params
    let { slots, own, title } = column

    if (slots && slots.header) {
      return slots.header(params, h)
    }

    if (typeof title === 'function') {
      return [title(h, params)]
    }

    return [formatText(getFuncText(own.title), 1)]
  },
  renderCell(h, params) {
    let { $table, row, column } = params
    let { slots, renderer } = column
    const format = column.format || {}

    if (slots && slots.default) {
      return slots.default(params, h)
    }

    const value = get(row, column.property)

    let result = processRenderer({ h, params, renderer, value })

    if (result.flag) {
      return result.vnodes
    }

    result = processAsyncColumn({ $table, column, format, h, params, row })

    if (result.flag) {
      return result.vnodes
    }

    const cellValue = getCellLabel(row, column, params)

    if (typeof cellValue === 'function') {
      return [cellValue(h, params)]
    }

    return [formatText(cellValue, 1)]
  },
  renderTreeCell(h, params) {
    return Cell.renderTreeIcon(h, params).concat(Cell.renderCell.call(this, h, params))
  },
  // 树节点
  renderTreeIcon(h, params) {
    let { $table, level, row } = params
    let { treeConfig, treeExpandeds } = $table
    let { children, indent, renderIcon, trigger } = treeConfig
    let isActive = ~treeExpandeds.indexOf(row)
    let rowChildren = row[children]
    let listeners = {
      click: (event) => $table.triggerTreeExpandEvent(event, params)
    }
    let icon = GLOBAL_CONFIG.icon

    if (trigger && trigger !== 'default') {
      listeners = {}
    }

    let iconVNode = []

    if (rowChildren && rowChildren.length) {
      iconVNode = [renderIcon ? renderIcon(h, { active: isActive, ...params }) : h('i', { class: `tiny-grid-tree__node-btn ${icon.tree}` })]
    }
    const map = {
      isActive: 'is__active'
    }
    return [
      h('span', {
        class: 'tiny-grid-tree__indent',
        style: {
          width: `${level * (indent || 16)}px`
        }
      }),
      h(
        'span',
        {
          class: ['tiny-grid-tree-wrapper', { [map.isActive]: isActive }],
          on: listeners
        },
        iconVNode
      )
    ]
  },
  // 索引
  renderIndexHeader(h, params) {
    let column = params.column
    let slots = column.slots
    let own = column.own

    if (slots && slots.header) {
      return slots.header(params, h)
    }

    let value = getFuncText(own.title || own.label || '')

    return [formatText(value, 1)]
  },
  renderTreeIndexCell(h, params) {
    return Cell.renderTreeIcon(h, params).concat(Cell.renderIndexCell(h, params))
  },
  renderIndexCell(h, params) {
    let { $seq, level, seq } = params
    let { startIndex, treeConfig = {} } = params.$table
    let { indexMethod, slots } = params.column
    let isOrdered = !!treeConfig.ordered
    let indexValue = level && !isOrdered ? `${$seq}.${seq}` : startIndex + seq

    if (slots && slots.default) {
      return slots.default(params, h)
    }

    return [formatText(indexMethod ? indexMethod(params) : indexValue, 1)]
  },
  // 单选
  renderRadioHeader(h, params) {
    let { own, slots } = params.column

    if (slots && slots.header) {
      return slots.header(params, h)
    }

    let value = getFuncText(own.title || own.label)

    return [formatText(value, 1)]
  },
  renderRadioCell(h, params) {
    let {
      $table,
      column: { slots },
      row
    } = params
    let { radioConfig = {}, selectRow, vSize } = $table
    let { labelField, checkMethod } = radioConfig
    let disabled = !!checkMethod
    let options = {}
    if (slots && slots.default) {
      return slots.default(params, h)
    }
    options.attrs = {
      name: `tiny-grid-radio__${$table.id}`,
      type: 'radio'
    }
    if (checkMethod) {
      options.attrs.disabled = disabled = !checkMethod(params)
    }
    options.domProps = { checked: row === selectRow }
    options.on = {
      change(event) {
        $table.triggerRadioRowEvent(event, params)
      }
    }
    const map = {
      isDisabled: 'is__disabled'
    }
    return [
      h(
        'label',
        {
          class: ['tiny-grid-radio', { [`size__${vSize}`]: vSize, [map.isDisabled]: disabled }]
        },
        [
          h('input', options),
          h('span', { class: 'tiny-grid-radio__icon' }),
          labelField ? h('span', { class: 'tiny-grid-radio__label' }, get(row, labelField)) : null
        ]
      )
    ]
  },
  renderTreeRadioCell(h, params) {
    return Cell.renderTreeIcon(h, params).concat(Cell.renderRadioCell(h, params))
  },
  renderSelectionHeader(h, params) {
    let { $table, column } = params
    let { slots, own } = column
    let { headerCheckDisabled, isAllSelected, isIndeterminate, selectConfig, vSize } = $table
    let headerTitle = own.title || own.label
    let options = { attrs: { type: 'checkbox' } }
    if (slots && slots.header) {
      return slots.header(params, h)
    }
    if (isCheckStrictly(selectConfig)) {
      return []
    }
    options.domProps = {
      disabled: headerCheckDisabled,
      checked: isAllSelected && !headerCheckDisabled
    }
    options.on = {
      change(event) {
        $table.triggerCheckAllEvent(event, event.target.checked)
        $table.showSelectToolbar()
      }
    }
    let vnode = getSelectVnodes({
      h,
      vSize,
      headerCheckDisabled,
      isIndeterminate,
      options,
      isAllSelected,
      headerTitle
    })
    return [vnode]
  },
  renderSelectionCell(h, params) {
    let { $table, column, row } = params
    let { slots } = column
    let { selectConfig = {}, treeConfig, treeIndeterminates, vSize } = $table
    let { labelField, checkMethod } = selectConfig
    let { indeterminate = false, isDisabled = !!checkMethod } = {}
    let options = { attrs: { type: 'checkbox' } }
    if (slots && slots.default) {
      return slots.default(params, h)
    }
    checkMethod && (options.attrs.disabled = isDisabled = !checkMethod(params))
    treeConfig && (indeterminate = ~treeIndeterminates.indexOf(row))
    options.domProps = { checked: ~$table.selection.indexOf(row) }
    options.on = {
      change(event) {
        $table.triggerCheckRowEvent(event, params, event.target.checked)
        $table.showSelectToolbar()
      }
    }
    let vnode = getSelectCellVnodes({
      h,
      vSize,
      indeterminate,
      isDisabled,
      options,
      labelField,
      row
    })
    return [vnode]
  },
  renderTreeSelectionCell(h, params) {
    return Cell.renderTreeIcon(h, params).concat(Cell.renderSelectionCell(h, params))
  },
  renderSelectionCellByProp(h, params) {
    let { $table, column, row } = params
    let { slots } = column
    let { selectConfig = {}, treeConfig, treeIndeterminates, vSize } = $table
    let { checkField: property, checkMethod, labelField } = selectConfig
    let { indeterminate = false, isDisabled = !!checkMethod } = {}
    let options = { attrs: { type: 'checkbox' } }

    if (slots && slots.default) {
      return slots.default(params, h)
    }

    checkMethod && (options.attrs.disabled = isDisabled = !checkMethod(params))
    treeConfig && (indeterminate = ~treeIndeterminates.indexOf(row))
    options.domProps = { checked: get(row, property) }
    options.on = {
      change(event) {
        $table.triggerCheckRowEvent(event, params, event.target.checked)
      }
    }

    let vnode = getSelectCellByProsVnodes({ h, indeterminate, isDisabled, vSize, labelField, options, row })

    return [vnode]
  },
  renderTreeSelectionCellByProp(h, params) {
    return Cell.renderTreeIcon(h, params).concat(Cell.renderSelectionCellByProp(h, params))
  },
  // 展开行
  renderExpandCell(h, params) {
    let { $table, row } = params
    let { expandConfig = {} } = $table
    let expandMethod = expandConfig.activeMethod
    let hideExpand = typeof expandMethod === 'function' ? expandMethod(row) : true
    let expandActive = false

    expandActive = $table.expandeds.includes(params.row)

    const map = {
      expandActive: 'expand__active'
    }

    return [
      h(
        'span',
        {
          class: [
            'tiny-grid__expanded',
            {
              [map.expandActive]: expandActive
            }
          ],
          on: {
            click(event) {
              if (!hideExpand) {
                return
              }
              $table.triggerRowExpandEvent(event, params)
            }
          }
        },
        [hideExpand && h('i', { class: 'tiny-grid__expand-icon' })]
      )
    ]
  },
  renderExpandData(h, params) {
    let { slots } = params.column

    if (slots && slots.default) {
      return slots.default(params, h)
    }

    return []
  },
  // 排序和筛选
  renderSortAndFilterHeader(h, params) {
    const suffixCls = Cell.getSuffixCls(params)

    return Cell.renderHeader(h, params).concat(Cell.renderFilterIcon(h, params, suffixCls[0])).concat(Cell.renderSortIcon(h, params, suffixCls[1]))
  },
  // 排序
  renderSortHeader(h, params) {
    const suffixCls = Cell.getSuffixCls(params)

    return Cell.renderHeader(h, params).concat(Cell.renderSortIcon(h, params, suffixCls[1]))
  },
  renderSortIcon(h, params) {
    let { icon } = GLOBAL_CONFIG
    let { $table, column } = params
    let isColGroup = column.children && column.children.length
    return [
      h(
        'span',
        { class: 'tiny-grid-sort-wrapper' },
        isColGroup
          ? []
          : [
              (column.order === 'desc' || !icon.sortDefault) ?
                h(icon.sortAsc, {
                  class: [
                    'tiny-grid-sort__btn',
                    {
                      'sort__active': column.order === (!icon.sortDefault ? 'asc' : 'desc')
                    }
                  ],
                  on: { click(event) { $table.triggerSortEvent(event, column, !icon.sortDefault ? 'asc' : '') } }
                })
                : '',
              (column.order === 'asc' || !icon.sortDefault) ?
                h(icon.sortDesc, {
                  class: [
                    'tiny-grid-sort__btn',
                    {
                      'sort__active': column.order === (!icon.sortDefault ? 'desc' : 'asc')
                    }
                  ],
                  on: { click(event) { $table.triggerSortEvent(event, column, 'desc') } }
                })
                : '',
              (!column.order && icon.sortDefault)
                ? h(icon.sortDefault, {
                  class: [
                    'tiny-grid-sort__btn'
                  ],
                  on: { click(event) { $table.triggerSortEvent(event, column, 'asc') } }
                })
                : ''
            ]
      )
    ]
  },
  // 筛选
  renderFilterHeader(h, params) {
    const suffixCls = Cell.getSuffixCls(params)

    return Cell.renderHeader(h, params).concat(Cell.renderFilterIcon(h, params, suffixCls[1]))
  },
  renderFilterIcon(h, params, cls = '') {
    let { $table, column } = params
    let { filterStore } = $table
    let icon = GLOBAL_CONFIG.icon
    const map = {
      isActive: 'is__active',
      hasFilter: 'has__Filter'
    }
    return [
      h(
        'span',
        {
          class: [
            'tiny-grid-filter-wrapper ' + cls,
            {
              [map.isActive]: filterStore.visible && filterStore.column === column
            }
          ]
        },
        [
          h(icon.filter, {
            class: [
              'tiny-svg-size tiny-grid-filter__btn ' + column.id,
              {
                [map.hasFilter]: column.filter && column.filter.hasFilter
              }
            ],
            on: {
              click(event) {
                $table.triggerFilterEvent(event, params.column, params)
              }
            }
          })
        ]
      )
    ]
  },
  // 可编辑
  renderEditHeader(h, params) {
    let { $table, column } = params
    let { editConfig, editRules } = $table
    let { filter, remoteSort, sortable, type } = column
    let icon = GLOBAL_CONFIG.icon
    let isRequired

    sortable = $table.sortable && !type && sortable

    let suffixCls = Cell.getSuffixCls(params)
    let isRenderSortIcon = sortable || remoteSort
    let columnRules

    if (editRules) {
      columnRules = get(editRules, params.column.property)
    }

    if (editRules && columnRules && !Array.isArray(columnRules)) {
      columnRules = [columnRules]
    }

    if (editRules && columnRules) {
      isRequired = columnRules.some((rule) => rule.required)
    }

    let vNodes = [
      isRequired ? h('i', { class: `tiny-icon ${icon.required}` }) : null,
      editConfig && !editConfig.showIcon && !column.showIcon ? null : h(icon.edit, { class: 'tiny-grid-edit-icon tiny-svg-size' })
    ]

    vNodes = vNodes.concat(Cell.renderHeader(h, params))
    vNodes = vNodes.concat(filter ? Cell.renderFilterIcon(h, params, isRenderSortIcon ? suffixCls[0] : suffixCls[1]) : [])
    vNodes = vNodes.concat(isRenderSortIcon ? Cell.renderSortIcon(h, params, suffixCls[1]) : [])

    return vNodes
  },
  renderTreeRowEdit(h, params) {
    return Cell.renderTreeIcon(h, params).concat(Cell.renderRowEdit(h, params))
  },
  // 行格编辑模式
  renderRowEdit(h, params) {
    let { actived } = params.$table.editStore

    return Cell.runRenderer(h, params, this, actived && actived.row === params.row)
  },
  renderTreeCellEdit(h, params) {
    return Cell.renderTreeIcon(h, params).concat(Cell.renderCellEdit(h, params))
  },
  // 单元格编辑模式
  renderCellEdit(h, params) {
    let { actived } = params.$table.editStore

    return Cell.runRenderer(h, params, this, actived && actived.row === params.row && actived.column === params.column)
  },
  runRenderer(h, params, _vm, isEdit) {
    let { $table, column, row } = params
    let { formatText, own, slots } = column
    let editor = own.editor
    let compConf = Renderer.get(editor.component)
    let showEdit = editor.type === 'visible' || isEdit

    if (showEdit && slots && slots.edit) {
      return slots.edit(params, h)
    }

    if (showEdit && typeof editor === 'function') {
      return [editor(h, params)]
    }

    if (showEdit && compConf && compConf.renderEdit) {
      return compConf.renderEdit.call($table, h, editor, params, {
        $type: 'edit',
        $excel: $table.$parent,
        $table,
        $column: column
      })
    }

    if (showEdit) {
      return []
    }

    if (slots && slots.default) {
      return slots.default(params, h)
    }

    if (formatText) {
      const cellValue = getCellLabel(row, column, params)

      if (typeof cellValue === 'function') {
        return [cellValue(h)]
      }

      return [cellValue]
    }

    return Cell.renderCell.call(_vm, h, params)
  },
  getSuffixCls(params) {
    return params.$table.headerSuffixIconAbsolute ? ['suffix-icon-1', 'suffix-icon-0'] : ['', '']
  },
  renderOperationCell(h, params) {
    const { column, $table, row } = params
    const { operationConfig = {}, slots } = column

    if (slots && slots.default) {
      return slots.default(params, h)
    }

    const { buttons = [], render, max = 3, disabledClass = '' } = operationConfig
    const viewClass = $table.viewCls('operButton')

    if (render) {
      return render({ h, buttons, params })
    }

    const renderBase = (buttonConfig, flag, classes, attrs) => {
      const mergeParams = { buttonConfig, ...params }
      const on = isDisabled(buttonConfig) ? {} : { click: (e) => buttonConfig.click(e, mergeParams) }

      classes = classes.join('\u{20}')

      const clazz = isDisabled(buttonConfig) ? [classes, 'tiny-grid__oper-col-button--disabled', disabledClass] : classes
      const childNodes =
        typeof buttonConfig.icon === 'function' ? [buttonConfig.icon(h, mergeParams)] : [h(buttonConfig.icon)]

      return flag ? h('span', { class: clazz, attrs, on }, childNodes) : null
    }

    const renderBig = (buttonConfig, cls = '') => {
      const classes = ['tiny-grid__oper-col-button', buttonConfig.class || '', cls]
      const attrs = { title: buttonConfig.name || '' }
      return renderBase(buttonConfig, buttonConfig.icon, classes, attrs)
    }

    const isDisabled = (buttonConfig) => {
      const { disabled = false } = buttonConfig
      return (typeof disabled === 'boolean' && disabled) || (typeof disabled === 'function' && disabled(row))
    }

    const isHidden = (buttonConfig) => {
      const { hidden = false } = buttonConfig
      return (typeof hidden === 'boolean' && hidden) || (typeof hidden === 'function' && hidden(row))
    }

    const handleItemClick = (name) => {
      const buttonConfig = visibleButtons.find(({ name: buttonName }) => buttonName === name)
      buttonConfig.click(window.event || {}, { buttonConfig, ...params })
    }

    const visibleButtons = []

    buttons.forEach((buttonConfig) => !isHidden(buttonConfig) && visibleButtons.push(buttonConfig))

    let groupBig

    if (visibleButtons.length > max) {
      const end = max - 1

      groupBig = visibleButtons.slice(0, end).map((buttonConfig) => renderBig(buttonConfig, viewClass))
      groupBig.push(
        h(Dropdown, { on: { 'item-click': handleItemClick }, props: { trigger: 'hover', showIcon: false } }, [
          h(iconEllipsis(), { class: 'tiny-grid__oper-col-elps' }),
          h(
            DropdownMenu,
            { slot: 'dropdown' },
            visibleButtons.slice(end).map((buttonConfig) =>
              h(
                DropdownItem,
                {
                  class: { [disabledClass || '']: isDisabled(buttonConfig) },
                  props: { itemData: buttonConfig, disabled: isDisabled(buttonConfig) }
                },
                buttonConfig.name
              )
            )
          )
        ])
      )
    } else {
      groupBig = visibleButtons.map((buttonConfig) => renderBig(buttonConfig, viewClass))
    }

    return [h('span', { class: 'inline-flex' }, groupBig)]
  }
}

export default Cell
