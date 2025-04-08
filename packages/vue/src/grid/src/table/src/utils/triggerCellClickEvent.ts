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
 * 判断目标元素是否为单选框或复选框
 * @param {Event} event - 事件对象
 * @param {Object} column - 列配置对象
 * @param {string} colType - 列类型
 * @param {string} targetType - 目标类型
 * @returns {boolean} 如果目标元素是单选框或复选框则返回true
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

/**
 * 处理展开列点击事件
 * @param {Object} params - 参数对象
 * @param {HTMLElement} params.$el - 表格元素
 * @param {Object} params._vm - Vue实例
 * @param {Object} params.column - 列配置对象
 * @param {Event} params.event - 事件对象
 * @param {Object} params.expandConfig - 展开配置
 * @param {Object} params.params - 其他参数
 */
export function onClickExpandColumn({ $el, _vm, column, event, expandConfig, params }) {
  if (
    (expandConfig.trigger === 'row' || (column.type === 'expand' && expandConfig.trigger === 'cell')) &&
    !_vm.getEventTargetNode(event, $el, 'tiny-grid__expanded').flag
  ) {
    _vm.triggerRowExpandEvent(event, params)
  }
}

/**
 * 处理树形节点列点击事件
 * @param {Object} params - 参数对象
 * @param {Object} params._vm - Vue实例
 * @param {Object} params.column - 列配置对象
 * @param {Event} params.event - 事件对象
 * @param {Object} params.params - 其他参数
 * @param {Object} params.treeConfig - 树形配置
 */
export function onClickTreeNodeColumn({ _vm, column, event, params, treeConfig }) {
  if (treeConfig.trigger === 'row' || (column.treeNode && treeConfig.trigger === 'cell')) {
    _vm.triggerTreeExpandEvent(event, params)
  }
}

/**
 * 处理当前行高亮点击事件
 * @param {Object} params - 参数对象
 * @param {HTMLElement} params.$el - 表格元素
 * @param {Object} params._vm - Vue实例
 * @param {Event} params.event - 事件对象
 * @param {boolean} params.highlightCurrentRow - 是否高亮当前行
 * @param {Object} params.params - 其他参数
 * @param {Object} params.radioConfig - 单选框配置
 */
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

/**
 * 处理单选框列点击事件
 * @param {Object} params - 参数对象
 * @param {HTMLElement} params.$el - 表格元素
 * @param {Object} params._vm - Vue实例
 * @param {Object} params.column - 列配置对象
 * @param {Event} params.event - 事件对象
 * @param {Object} params.params - 其他参数
 * @param {Object} params.radioConfig - 单选框配置
 */
export function onClickRadioColumn({ $el, _vm, column, event, params, radioConfig }) {
  if (
    (radioConfig.trigger === 'row' || (column.type === 'radio' && radioConfig.trigger === 'cell')) &&
    !_vm.getEventTargetNode(event, $el, 'tiny-grid-radio').flag
  ) {
    _vm.triggerRadioRowEvent(event, params)
  }
}

/**
 * 处理选择列点击事件
 * @param {Object} params - 参数对象
 * @param {Object} params._vm - Vue实例
 * @param {Object} params.column - 列配置对象
 * @param {Event} params.event - 事件对象
 * @param {Object} params.params - 其他参数
 * @param {Object} params.selectConfig - 选择配置
 */
export function onClickSelectColumn({ _vm, column, event, params, selectConfig }) {
  if (
    (selectConfig.trigger === 'row' || (column.type === 'selection' && selectConfig.trigger === 'cell')) &&
    !_vm.getEventTargetNode(event, params.cell, 'tiny-grid-checkbox').flag
  ) {
    _vm.handleToggleCheckRowEvent(params, event)
  }
}

/**
 * 处理单元格选择点击事件
 * @param {Object} params - 参数对象
 * @param {Object} params._vm - Vue实例
 * @param {Object} params.actived - 当前激活的单元格信息
 * @param {HTMLElement} params.cell - 单元格元素
 * @param {Object} params.column - 列配置对象
 * @param {Object} params.editConfig - 编辑配置
 * @param {Event} params.event - 事件对象
 * @param {Object} params.mouseConfig - 鼠标配置
 * @param {Object} params.params - 其他参数
 * @param {Object} params.row - 行数据
 */
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
