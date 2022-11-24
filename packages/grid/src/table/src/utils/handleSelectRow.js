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
import { eachTree, find, findTree, get, remove, set } from '@opentiny/vue-renderless/grid/static/'

function onHalfSelectionProperty({ checkStrictly, property, row, treeConfig, treeIndeterminates, value }) {
  if (property && treeConfig && !checkStrictly && value === -1) {
    treeIndeterminates.push(row)
    set(row, property, false)
  }
}

function onFullSelectionProperty({ checkMethod, checkStrictly, property, row, treeConfig, treeIndeterminates, value }) {
  if (property && treeConfig && !checkStrictly && value !== -1) {
    // 更新子节点状态
    eachTree(
      [row],
      (item, $rowIndex) => {
        if (row === item || !checkMethod || checkMethod({ row: item, $rowIndex })) {
          set(item, property, value)
        }
      },
      treeConfig
    )
    remove(treeIndeterminates, (item) => item === row)
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

function onFullSelection({ checkMethod, checkStrictly, property, row, selection, treeConfig, treeIndeterminates, value }) {
  if (!property && treeConfig && !checkStrictly && value !== -1) {
    // 更新子节点状态
    eachTree(
      [row],
      (item, $rowIndex) => {
        if (row === item || !checkMethod || checkMethod({ row: item, $rowIndex })) {
          if (value) {
            selection.push(item)
          } else {
            remove(selection, (select) => select === item)
          }
        }
      },
      treeConfig
    )

    remove(treeIndeterminates, (item) => item === row)
  }
}

function getParentStatusOnParentSelection({ indeterminatesItem, matchObj, selection, vItems, value }) {
  let parentStatus

  if (indeterminatesItem) {
    parentStatus = -1
  } else {
    let selectItems = matchObj.items.filter((item) => selection.indexOf(item) > -1)
    let isEqualItem = selectItems.filter((item) => vItems.indexOf(item) > -1).length === vItems.length

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
      let indeterminatesItem = find(matchObj.items, (item) => treeIndeterminates.indexOf(item) > -1)
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
      let indeterminatesItem = find(matchObj.items, (item) => treeIndeterminates.indexOf(item) > -1)
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
      if (selection.indexOf(row) === -1) {
        selection.push(row)
      }
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
