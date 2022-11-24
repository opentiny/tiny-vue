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
import { set, eachTree } from '@opentiny/vue-renderless/grid/static/'

function pushSelectRow({ afterFullData, checkMethod, checkStrictly, property, selectRows, selection, treeConfig, value }) {
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
        if (checkMethod({ row, $rowIndex }) ? 0 : selection.indexOf(row) > -1) {
          selectRows.push(row)
        }
      },
      treeConfig
    )
  }
}

export function hasCheckFieldNoStrictly({ afterFullData, checkMethod, checkStrictly, property, selection, treeConfig, value }) {
  if (!checkStrictly && property) {
    let indexKey = `${treeConfig ? '$' : ''}rowIndex`

    let setValFn = (row, rowIndex) => {
      if (!checkMethod || checkMethod({ row, [indexKey]: rowIndex })) {
        set(row, property, value)
      }
    }

    let clearValFn = (row, rowIndex) => {
      if (!checkMethod || (checkMethod({ row, [indexKey]: rowIndex }) ? 0 : selection.indexOf(row) > -1)) {
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

function filterSelectRow({ afterFullData, checkMethod, checkStrictly, property, selectRows, selection, treeConfig, value }) {
  if (!checkStrictly && !property && !treeConfig && value && checkMethod) {
    selectRows = afterFullData.filter((row, rowIndex) => selection.indexOf(row) > -1 || checkMethod({ row, rowIndex }))
  }

  if (!checkStrictly && !property && !treeConfig && value && !checkMethod) {
    selectRows = afterFullData.slice(0)
  }

  if (!checkStrictly && !property && !treeConfig && !value && checkMethod) {
    selectRows = afterFullData.filter((row, rowIndex) => (checkMethod({ row, rowIndex }) ? 0 : selection.indexOf(row) > -1))
  }

  return selectRows
}

export function hasNoCheckFieldNoStrictly({ afterFullData, checkMethod, checkStrictly, property, selection, treeConfig, value }) {
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
    _vm.selection = value && reserve ? selection.concat(selectRows.filter((row) => selection.indexOf(row) === -1)) : selectRows
  }
}
