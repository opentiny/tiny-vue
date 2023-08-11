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
import { set, eachTree } from '@opentiny/vue-renderless/grid/static/'

function pushSelectRow({
  afterFullData,
  checkMethod,
  checkStrictly,
  property,
  selectRows,
  selection,
  treeConfig,
  value
}) {
  if (!checkStrictly && !property && treeConfig && value) {
    eachTree(
      afterFullData,
      (row, $rowIndex) => {
        if (!checkMethod || checkMethod({ row, $rowIndex })) {
          selectRows.push(row)
        }
      },
      treeConfig
    )
  }

  if (!checkStrictly && !property && treeConfig && !value && checkMethod) {
    eachTree(
      afterFullData,
      (row, $rowIndex) => {
        if (checkMethod({ row, $rowIndex }) ? 0 : selection.includes(row)) {
          selectRows.push(row)
        }
      },
      treeConfig
    )
  }
}

export function hasCheckFieldNoStrictly({
  afterFullData,
  checkMethod,
  checkStrictly,
  property,
  selection,
  treeConfig,
  value
}) {
  if (!checkStrictly && property) {
    let indexKey = `${treeConfig ? '$' : ''}rowIndex`

    let setValFn = (row, rowIndex) => {
      if (!checkMethod || checkMethod({ row, [indexKey]: rowIndex })) {
        set(row, property, value)
      }
    }

    let clearValFn = (row, rowIndex) => {
      if (!checkMethod || (checkMethod({ row, [indexKey]: rowIndex }) ? 0 : selection.includes(row))) {
        set(row, property, value)
      }
    }

    if (treeConfig) {
      eachTree(afterFullData, value ? setValFn : clearValFn, treeConfig)
    } else {
      afterFullData.forEach(value ? setValFn : clearValFn)
    }
  }
}

function filterSelectRow({
  afterFullData,
  checkMethod,
  checkStrictly,
  property,
  selectRows,
  selection,
  treeConfig,
  value
}) {
  if (!checkStrictly && !property && !treeConfig && value && checkMethod) {
    selectRows = afterFullData.filter((row, rowIndex) => selection.includes(row) || checkMethod({ row, rowIndex }))
  }

  if (!checkStrictly && !property && !treeConfig && value && !checkMethod) {
    selectRows = afterFullData.slice(0)
  }

  if (!checkStrictly && !property && !treeConfig && !value && checkMethod) {
    selectRows = afterFullData.filter((row, rowIndex) => (checkMethod({ row, rowIndex }) ? 0 : selection.includes(row)))
  }

  return selectRows
}

export function hasNoCheckFieldNoStrictly({
  afterFullData,
  checkMethod,
  checkStrictly,
  property,
  selection,
  treeConfig,
  value
}) {
  let selectRows = []

  pushSelectRow({
    afterFullData,
    checkMethod,
    checkStrictly,
    property,
    selectRows,
    selection,
    treeConfig,
    value
  })

  selectRows = filterSelectRow({
    afterFullData,
    checkMethod,
    checkStrictly,
    property,
    selectRows,
    selection,
    treeConfig,
    value
  })

  return selectRows
}

export function setSelectionNoStrictly({ _vm, checkStrictly, reserve, selectRows, selection, value }) {
  if (!checkStrictly) {
    _vm.selection =
      value && reserve ? selection.concat(selectRows.filter((row) => !selection.includes(row))) : selectRows
  }
}
