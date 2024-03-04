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
import { eachTree, find, findTree, get, remove, set } from '@opentiny/vue-renderless/grid/static/'

function onHalfSelectionProperty({ checkStrictly, property, row, treeConfig, treeIndeterminates, value }) {
  if (property && treeConfig && !checkStrictly && value === -1) {
    treeIndeterminates.push(row)
    set(row, property, false)
  }
}

function onFullSelectionProperty({ checkMethod, checkStrictly, property, row, treeConfig, treeIndeterminates, value }) {
  if (property && treeConfig && !checkStrictly && value !== -1) {
    // 更新自身和子节点状态
    eachTree(
      [row],
      (item, $rowIndex) => {
        if (row === item || !checkMethod || checkMethod({ row: item, $rowIndex })) {
          set(item, property, value)
          // 自身选中或未选中时，自身和子节点都应该选中或未选中
          remove(treeIndeterminates, (r) => r === item)
        }
      },
      treeConfig
    )
  }
}

function getVItemsOnParentSlctProp({ checkMethod, matchObj }) {
  let tinyItems

  if (checkMethod) {
    tinyItems = matchObj.items.filter((item, $rowIndex) => checkMethod({ row: item, $rowIndex }))
  } else {
    tinyItems = matchObj.items
  }

  return tinyItems
}

function getParentStatusOnParentSlctProp({ indeterminatesItem, matchObj, property, vItems, value }) {
  let parentStatus

  if (indeterminatesItem) {
    parentStatus = -1
  } else {
    let selectItemArr = matchObj.items.filter((item) => get(item, property))
    let isEqual = selectItemArr.filter((item) => ~vItems.indexOf(item)).length === vItems.length

    parentStatus = isEqual ? true : selectItemArr.length || value === -1 ? -1 : false
  }

  return parentStatus
}

function onHalfSelection({ checkStrictly, property, row, selection, treeConfig, treeIndeterminates, value }) {
  if (!property && treeConfig && !checkStrictly && value === -1) {
    treeIndeterminates.push(row)
    remove(selection, (item) => item === row)
  }
}

function getVItemsOnParentSelection({ checkMethod, matchObj }) {
  let vItems

  if (checkMethod) {
    vItems = matchObj.items.filter((item, $rowIndex) => checkMethod({ row: item, $rowIndex }))
  } else {
    vItems = matchObj.items
  }

  return vItems
}

// 保证不重复添加
const addSelection = (selection, item) => !selection.includes(item) && selection.push(item)

function onFullSelection({
  checkMethod,
  checkStrictly,
  property,
  row,
  selection,
  treeConfig,
  treeIndeterminates,
  value
}) {
  if (!property && treeConfig && !checkStrictly && value !== -1) {
    // 更新自身和子节点状态
    eachTree(
      [row],
      (item, $rowIndex) => {
        if (row === item || !checkMethod || checkMethod({ row: item, $rowIndex })) {
          if (value) {
            // 保证不重复添加
            addSelection(selection, item)
          } else {
            remove(selection, (select) => select === item)
          }
          // 自身选中或未选中时，自身和子节点都应该选中或未选中
          remove(treeIndeterminates, (r) => r === item)
        }
      },
      treeConfig
    )
  }
}

function getParentStatusOnParentSelection({ indeterminatesItem, matchObj, selection, vItems, value }) {
  let parentStatus

  if (indeterminatesItem) {
    parentStatus = -1
  } else {
    let selectItems = matchObj.items.filter((item) => selection.includes(item))
    let isEqualItem = selectItems.filter((item) => vItems.includes(item)).length === vItems.length

    parentStatus = isEqualItem ? true : selectItems.length || value === -1 ? -1 : false
  }

  return parentStatus
}

export function hasCheckField({ row }, value, _vm) {
  let { tableFullData, selectConfig = {}, treeConfig, treeIndeterminates } = _vm
  let { checkField: property, checkStrictly, checkMethod } = selectConfig

  onHalfSelectionProperty({
    checkStrictly,
    property,
    row,
    treeConfig,
    treeIndeterminates,
    value
  })

  onFullSelectionProperty({
    checkMethod,
    checkStrictly,
    property,
    row,
    treeConfig,
    treeIndeterminates,
    value
  })

  if (property && treeConfig && !checkStrictly) {
    // 如果存在父节点，更新父节点状态
    let matchObj = findTree(tableFullData, (item) => item === row, treeConfig)

    if (matchObj && matchObj.parent) {
      let vItems = getVItemsOnParentSlctProp({ checkMethod, matchObj })
      let indeterminatesItem = find(matchObj.items, (item) => treeIndeterminates.includes(item))
      let parentStatus = getParentStatusOnParentSlctProp({
        indeterminatesItem,
        matchObj,
        property,
        vItems,
        value
      })

      return _vm.handleSelectRow({ row: matchObj.parent }, parentStatus)
    }
  }

  if (property && !(treeConfig && !checkStrictly)) {
    set(row, property, value)
  }
}

function onSelectTreeCheckStrictly({ row }, value, _vm) {
  let { selection, tableFullData, selectConfig = {}, treeConfig, treeIndeterminates } = _vm
  let { checkField: property, checkStrictly, checkMethod } = selectConfig
  // 树表行半选
  onHalfSelection({
    checkStrictly,
    property,
    row,
    selection,
    treeConfig,
    treeIndeterminates,
    value
  })
  // 树表行完全选中
  onFullSelection({
    checkMethod,
    checkStrictly,
    property,
    row,
    selection,
    treeConfig,
    treeIndeterminates,
    value
  })

  if (!property && treeConfig && !checkStrictly) {
    // 如果存在父节点，更新父节点状态
    let matchObj = findTree(tableFullData, (item) => item === row, treeConfig)

    if (matchObj && matchObj.parent) {
      let vItems = getVItemsOnParentSelection({ checkMethod, matchObj })
      let indeterminatesItem = find(matchObj.items, (item) => treeIndeterminates.includes(item))
      let parentStatus = getParentStatusOnParentSelection({
        indeterminatesItem,
        matchObj,
        selection,
        vItems,
        value
      })

      return _vm.handleSelectRow({ row: matchObj.parent }, parentStatus)
    }
  }
}

function onSelectOther({ row }, value, _vm) {
  let { selection, selectConfig = {}, treeConfig } = _vm
  let { checkField: property, checkStrictly } = selectConfig

  if (!property && !(treeConfig && !checkStrictly)) {
    if (value) {
      addSelection(selection, row)
    } else {
      remove(selection, (item) => item === row)
    }
  }
}

export function hasNoCheckField({ row }, value, _vm) {
  // 树表且父子关联
  onSelectTreeCheckStrictly({ row }, value, _vm)
  // 其它情况
  onSelectOther({ row }, value, _vm)
}
