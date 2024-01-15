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

export const columnHandler = ({ _vm, colValidPromiseArr, editRules, isAll, row, validRest }) => {
  return (column, columnIndex) => {
    // 如果当前列是用户配置的校验列
    if (has(editRules, column.property)) {
      colValidPromiseArr.push(
        new Promise((resolve, reject) => {
          _vm
            .validCellRules('all', row, column) // 校验某个单元格cell的数据
            .then(resolve)
            .catch(({ rule, rules }) => {
              const rowIndex = _vm.getRowIndex(row)
              const rest = { rule, rules, rowIndex, row, columnIndex, column, $table: _vm }
              // 如果是全量校验
              if (isAll) {
                if (!validRest[column.property]) {
                  validRest[column.property] = []
                }

                validRest[column.property].push(rest)

                resolve()
              }

              reject(rest)
            })
        })
      )
    }
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

export const realValid = ({ _vm, editRules, isAll, validRest, treeConfig, hasTreeExpand, vaildDatas, treeOpts }) => {
  // 存放每行数据校验的处理结果
  const rowValids = []
  const columns = _vm.getColumns()

  const handleVaild = (row) => {
    // 存放每列校验的处理结果
    const colValidPromiseArr = []

    columns.forEach(columnHandler({ _vm, colValidPromiseArr, editRules, isAll, row, validRest }))
    rowValids.push(Promise.all(colValidPromiseArr))
  }

  if (treeConfig) {
    validTree({ treeConfig, handleVaild, hasTreeExpand, vaildDatas, treeOpts })
  } else {
    vaildDatas.forEach(handleVaild)
  }

  return rowValids
}
