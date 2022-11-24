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
import { isArray, isFunction, has, eachTree } from '@opentiny/vue-renderless/grid/static/'

export function adjustParams(rows, cb, vaildDatas) {
  if (rows) {
    if (isFunction(rows)) {
      cb = rows
    } else {
      vaildDatas = isArray(rows) ? rows : [rows]
    }
  }

  return { cb, vaildDatas }
}

// prettier-ignore
export function columnHandler({ _vm, colVailds, editRules, isAll, row, validRest }) {
  function handler(column, columnIndex) {
    if (has(editRules, column.property)) {
      const p = new Promise((resolve, reject) => {
        _vm.validCellRules('all', row, column).then(resolve).catch(({ rule, rules }) => {
          const rowIndex = _vm.getRowIndex(row)
          let rest = { rule, rules, rowIndex, row, columnIndex, column, $table: _vm }

          if (isAll) {
            if (!validRest[column.property]) {
              validRest[column.property] = []
            }

            validRest[column.property].push(rest)

            return resolve()
          }

          return reject(rest)
        })
      })

      colVailds.push(p)
    }
  }

  return handler
}

export function hasNoEditRules(cb, status) {
  if (cb) {
    cb(status)
  }
}

function validTree({ treeConfig, handleVaild, hasTreeExpand, vaildDatas, treeOpts }) {
  if (treeConfig.validHidden === false) {
    const recurValid = (row) => {
      const children = row[treeConfig.children || 'children']
      handleVaild(row)
      if (hasTreeExpand(row) && children && children.length) {
        children.forEach(recurValid)
      }
    }
    vaildDatas.forEach(recurValid)
  } else {
    eachTree(vaildDatas, handleVaild, treeOpts)
  }
}

export function realValid({ _vm, editRules, isAll, validRest, treeConfig, hasTreeExpand, vaildDatas, treeOpts }) {
  let rowValids = []
  let columns = _vm.getColumns()

  let handleVaild = (row) => {
    let colVailds = []

    columns.forEach(columnHandler({ _vm, colVailds, editRules, isAll, row, validRest }))
    rowValids.push(Promise.all(colVailds))
  }

  if (treeConfig) {
    validTree({ treeConfig, handleVaild, hasTreeExpand, vaildDatas, treeOpts })
  } else {
    vaildDatas.forEach(handleVaild)
  }

  return rowValids
}
