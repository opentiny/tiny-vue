import { set, eachTree } from '../../utils/static/'

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
  if (!checkStrictly && value) {
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

  if (!checkStrictly && !value && checkMethod) {
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

// 为所有表格数据设置多选选中值
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
      if (!checkMethod || (checkMethod({ row, [indexKey]: rowIndex }) ? selection.includes(row) : false)) {
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

function filterSelectRow({ afterFullData, checkMethod, checkStrictly, selectRows, selection, value }) {
  if (!checkStrictly && value && checkMethod) {
    selectRows = afterFullData.filter((row, rowIndex) => selection.includes(row) || checkMethod({ row, rowIndex }))
  }

  if (!checkStrictly && value && !checkMethod) {
    selectRows = afterFullData.slice(0)
  }

  if (!checkStrictly && !value && checkMethod) {
    selectRows = afterFullData.filter((row, rowIndex) => (checkMethod({ row, rowIndex }) ? 0 : selection.includes(row)))
  }

  return selectRows
}

// 获取表格中所有选中数据项
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

  // 树表获取选中逻辑
  if (treeConfig) {
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
  } else {
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
  }

  return selectRows
}

// 将选中项赋值给selection
export function setSelectionNoStrictly({ _vm, checkStrictly, reserve, selectRows, selection, value, afterFullData }) {
  if (!checkStrictly) {
    if (reserve) {
      // 配置了reserve为true时，只需把当前页没选中部分清除
      const unCheckedRows = afterFullData.filter((row) => !selectRows.includes(row))
      _vm.selection = value
        ? selection.concat(selectRows.filter((row) => !selection.includes(row)))
        : selection.filter((row) => !unCheckedRows.includes(row))
    } else {
      _vm.selection = selectRows
    }
  }
}
