import { error } from '../tools'
import { getRowkey } from './utils'
import { template, toNumber, isBoolean } from './static'
import { isNull } from '@opentiny/utils'
import TINYGrid from '../adapter'

/**
 * 校验必要的插件是否已注册
 * @param {Object} _vm - 组件实例
 */
export const verifyConfig = (_vm) => {
  // 校验是否设置了行主键
  if (!getRowkey(_vm)) {
    error('ui.grid.error.rowIdEmpty', true)
  }

  // 校验编辑插件
  if (!TINYGrid._edit && _vm.editConfig) {
    throw new Error(template(error('ui.grid.error.reqModule', true), { name: 'Edit' }))
  }

  // 校验验证插件
  if (!TINYGrid._valid && _vm.editRules) {
    throw new Error(template(error('ui.grid.error.reqModule', true), { name: 'Validator' }))
  }

  // 校验键盘操作插件
  if (!TINYGrid._keyboard && (_vm.keyboardConfig || _vm.mouseConfig)) {
    throw new Error(template(error('ui.grid.error.reqModule', true), { name: 'Keyboard' }))
  }

  // 校验自适应插件
  if (!TINYGrid._resize && _vm.autoResize) {
    throw new Error(template(error('ui.grid.error.reqModule', true), { name: 'Resize' }))
  }
}

/**
 * 合并虚拟滚动配置
 * @param {Object} scrollDir - 滚动方向配置
 * @param {Object} scrollDirStore - 滚动存储对象
 */
export const mergeScrollDirStore = (scrollDir, scrollDirStore) => {
  if (scrollDir) {
    Object.assign(scrollDirStore, {
      startIndex: 0,
      visibleIndex: 0,
      adaptive: isBoolean(scrollDir.adaptive) ? scrollDir.adaptive : true,
      renderSize: toNumber(scrollDir.rSize),
      offsetSize: toNumber(scrollDir.oSize)
    })
  }
}

/**
 * 合并树形表格配置
 * @param {Object} _vm - 组件实例
 */
export const mergeTreeConfig = (_vm) => {
  if (_vm.treeConfig) {
    const { ordered } = _vm.treeConfig
    _vm.treeOrdered = isNull(ordered) ? true : Boolean(ordered)
  }
}
