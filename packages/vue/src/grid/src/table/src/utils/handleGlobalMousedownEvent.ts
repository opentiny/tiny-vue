/**
 * 处理全局鼠标按下事件在筛选器包装器上的逻辑
 * @param {Object} params - 参数对象
 * @param {HTMLElement} params.$el - 表格根元素
 * @param {Object} params._vm - Vue实例
 * @param {Event} params.event - 鼠标事件对象
 * @param {Object} params.filterStore - 筛选器状态存储对象
 * @param {Object} params.filterWrapper - 筛选器包装器组件实例
 */
export function handleGlobalMousedownOnFilterWrapper({ $el, _vm, event, filterStore, filterWrapper }) {
  if (filterWrapper) {
    if (_vm.getEventTargetNode(event, $el, 'tiny-grid-filter-wrapper').flag) {
      // 如果点击了筛选按钮，不做任何处理
    } else if (_vm.getEventTargetNode(event, filterWrapper.$el).flag) {
      // 如果点击筛选容器，不做任何处理
    } else if (_vm.getEventTargetNode(event, document.body, 'tiny-popper').flag) {
      // 如果点击筛选容器下拉弹出的弹窗，不做任何处理
    } else {
      // 如果点击了其他区域，关闭筛选器并触发清除筛选事件
      _vm.closeFilter()
      _vm.preventEvent(event, 'event.clear_filter', filterStore.args, _vm.closeFilter)
    }
  }
}

/**
 * 处理全局鼠标按下事件在右键菜单上的逻辑
 * @param {Object} params - 参数对象
 * @param {Object} params._vm - Vue实例
 * @param {Object} params.ctxMenuStore - 右键菜单状态存储对象
 * @param {Event} params.event - 鼠标事件对象
 */
export function handleGlobalMousedownOnCtxMenu({ _vm, ctxMenuStore, event }) {
  // 如果右键菜单可见，且点击的不是右键菜单包装器内部，则关闭菜单
  if (ctxMenuStore.visible && _vm.$refs.ctxWrapper && !_vm.getEventTargetNode(event, _vm.$refs.ctxWrapper.$el).flag) {
    _vm.closeMenu()
  }
}

/**
 * 处理全局失焦事件
 * @param {Object} params - 参数对象
 * @param {Object} params._vm - Vue实例
 * @param {Object} params.actived - 当前激活的单元格信息
 * @param {Event} params.event - 事件对象
 * @returns {boolean} 返回是否处理了失焦事件
 */
export function handleGlobalBlurOutside({ _vm, actived, event }) {
  // 调用自定义的失焦处理函数，返回值：
  // false -> 退出编辑状态并清除激活状态
  // undefined -> 不改变当前逻辑
  // true -> 保留编辑状态
  let custblur = _vm.blurOutside(actived, event)

  if (typeof custblur === 'boolean') {
    // 如果返回false，则延迟清除激活状态
    custblur || setTimeout(() => _vm.clearActived(event))
    return true
  }

  return false
}

/**
 * 判断是否需要清除激活状态
 * @param {Object} params - 参数对象
 * @param {HTMLElement} params.$el - 表格根元素
 * @param {Object} params._vm - Vue实例
 * @param {Object} params.actived - 当前激活的单元格信息
 * @param {Object} params.editConfig - 编辑配置
 * @param {Event} params.event - 事件对象
 * @param {boolean} params.isClear - 是否清除状态
 * @param {boolean} params.isReadonlyCol - 是否为只读列
 * @returns {boolean} 返回是否需要清除激活状态
 */
export function handleGlobalIsClear({ $el, _vm, actived, editConfig, event, isClear, isReadonlyCol }) {
  if (editConfig.mode === 'row') {
    // 获取点击的行节点
    let rowNode = _vm.getEventTargetNode(event, $el, 'tiny-grid-body__row')
    // 判断是否点击了不同的行
    let isOtherRow = rowNode.flag ? rowNode.targetElem !== actived.args.cell.parentNode : 0

    if (editConfig.trigger === 'manual') {
      // 手动触发模式下，如果点击了不同行且不是激活行，则清除状态
      isClear = !_vm.getEventTargetNode(event, $el, 'row__actived').flag && isOtherRow
    } else {
      // 点击或双击触发模式下，如果点击了不同行的非编辑列，则清除状态
      isClear = isOtherRow && isReadonlyCol
    }
  } else {
    // 单元格编辑模式下，如果是非编辑列，则清除状态
    isClear = isReadonlyCol
  }

  return isClear
}

/**
 * 处理清除激活状态的逻辑
 * @param {Object} params - 参数对象
 * @param {HTMLElement} params.$el - 表格根元素
 * @param {Object} params._vm - Vue实例
 * @param {Event} params.event - 事件对象
 * @param {boolean} params.isClear - 是否清除状态
 */
export function handleGlobalClearActived({ $el, _vm, event, isClear }) {
  const tableContent = _vm.$refs.tableBody?.$refs.table
  // 在以下情况下清除激活状态：
  // 1. 需要清除状态
  // 2. 点击了表格外部
  // 3. 点击了表头
  // 4. 点击了表格内容区域外部
  if (
    isClear ||
    !_vm.getEventTargetNode(event, $el).flag ||
    (_vm.$refs.tableHeader && _vm.$refs.tableHeader.$el.contains(event.target)) ||
    (tableContent && !tableContent.contains(event.target))
  ) {
    setTimeout(() => _vm.clearActived(event))
  }
}
