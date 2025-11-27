import { find } from '@opentiny/utils'

const updateBaseSelect = ({ vm, props, data, label }: any) => {
  if (!vm.$refs.baseSelectRef) {
    return
  }

  vm.$refs.baseSelectRef.updateSelectedData(data)

  if (!props.multiple) {
    const baseState = vm.$refs.baseSelectRef.state
    if (!baseState) {
      return
    }

    const currentLabel =
      label ??
      (data && !Array.isArray(data) ? (data.state?.currentLabel ?? data.currentLabel ?? data[props.textField]) : '')

    baseState.selectedLabel = currentLabel || ''

    if (props.filterable || props.searchable) {
      baseState.query = currentLabel || ''
    }
  }
}

export const syncGridSelection =
  ({ props, vm, state, nextTick }) =>
  () => {
    if (!vm.$refs.gridRef) {
      return
    }

    // 使用 nextTick 确保表格已渲染
    nextTick(() => {
      try {
        const tableData = vm.$refs.gridRef.getTableData()
        const fullData = tableData?.fullData || []

        if (props.multiple) {
          // 多选模式
          if (Array.isArray(state.modelValue) && state.modelValue.length > 0) {
            const rowsToSelect = fullData.filter((row: any) => state.modelValue.indexOf(row[props.valueField]) !== -1)
            vm.$refs.gridRef.clearSelection()
            if (rowsToSelect.length > 0) {
              vm.$refs.gridRef.setSelection(rowsToSelect, true)
            }
          } else {
            vm.$refs.gridRef.clearSelection()
          }
        } else {
          // 单选模式
          if (state.modelValue) {
            const rowToSelect = fullData.find((row: any) => row[props.valueField] === state.modelValue)
            vm.$refs.gridRef.clearRadioRow()
            if (rowToSelect) {
              vm.$refs.gridRef.setRadioRow(rowToSelect)
            }
          } else {
            vm.$refs.gridRef.clearRadioRow()
          }
        }
      } catch (e) {
        // 如果表格还没有加载，忽略错误
      }
    })
  }

export const handleVisibleChange =
  ({ api, state, props }) =>
  (visible: boolean) => {
    // 面板打开时，同步表格选中状态
    if (visible && state.isMounted) {
      api.syncGridSelection()

      // 如果启用了自动搜索且是远程搜索，触发初始查询
      if (props.remote && props.remoteConfig?.autoSearch && state.firstAutoSearch !== false) {
        // 触发远程搜索，使用空字符串作为初始查询
        api.filter('')
        state.firstAutoSearch = false
      }
    }
  }

export const buildSelectConfig =
  ({ props, state }) =>
  () => {
    const selectConfig = props.selectConfig
    const rawCheckRowKeys = state.gridCheckedData
    const checkRowKeys = Array.isArray(rawCheckRowKeys)
      ? rawCheckRowKeys
      : rawCheckRowKeys && Array.isArray(rawCheckRowKeys.value)
        ? rawCheckRowKeys.value
        : []

    return Object.assign({}, selectConfig, { checkRowKeys })
  }

export const buildRadioConfig =
  ({ props, state }) =>
  () => {
    const checkRowKey = state.currentKey
    const highlight = true
    const radioConfig = props.radioConfig

    return Object.assign({}, radioConfig, { checkRowKey, highlight })
  }

export const filter =
  ({ props, state, vm }) =>
  (value) => {
    const { multiple, valueField, filterMethod, remote, remoteMethod } = props

    if ((props.filterable || props.searchable) && typeof filterMethod === 'function') {
      const table = vm.$refs.gridRef.$refs.tinyTable
      const fullData = table.getTableData().fullData

      vm.$refs.gridRef.scrollTo(null, 0)

      table.loadTableData(filterMethod(value, fullData) || [])

      vm.$refs.gridRef.handleTableData(!value)

      state.previousQuery = value
    } else if (remote && typeof remoteMethod === 'function') {
      state.previousQuery = value
      remoteMethod(value, props.extraQueryParams).then((data) => {
        // 多选时取远端数据与当前已选数据的并集
        if (multiple) {
          const selectedIds = Array.isArray(state.selected) ? state.selected.map((sel: any) => sel[valueField]) : []
          vm.$refs.gridRef.clearSelection()
          // 设置表格中已选中的行
          const selectedRows = data.filter((row: any) => selectedIds.indexOf(row[valueField]) !== -1)
          if (selectedRows.length > 0) {
            vm.$refs.gridRef.setSelection(selectedRows, true)
          }
          // 合并远程数据和已选数据
          state.remoteData = data
        } else {
          vm.$refs.gridRef.clearRadioRow()
          const selectedRow = find(data, (item: any) => props.modelValue === item[props.valueField])
          if (selectedRow) {
            vm.$refs.gridRef.setRadioRow(selectedRow)
          }
          state.remoteData = data
        }

        vm.$refs.gridRef.$refs.tinyTable.lastScrollTop = 0
        vm.$refs.gridRef.loadData(data)
        vm.$refs.gridRef.handleTableData(!value)
      })
    }
  }

/**
 * 多选，获取已选中的行 value 数组，用于初始化表格的勾选状态
 * @return 示例：[9, 6]
 */
export const getcheckedData =
  ({ props, state }) =>
  () => {
    const checkedKey: any[] = []

    if (!Array.isArray(state.selected)) {
      return props.modelValue
        ? [props.modelValue]
        : state.selected && state.selected[props.valueField]
          ? [state.selected[props.valueField]]
          : []
    } else {
      state.selected.length > 0 &&
        state.selected.forEach((item: any) => {
          checkedKey.push(item[props.valueField])
        })

      return checkedKey
    }
  }

/**
 * 多选，获取匹配的表格行
 * @params value 表格行 value
 * @return 完整的表格行数据
 */
export const getPluginOption =
  ({ api, props, state }) =>
  (value) => {
    const isRemote =
      (props.filterable || props.searchable) &&
      props.remote &&
      (typeof props.remoteMethod === 'function' || typeof props.initQuery === 'function')
    const { textField, valueField } = props
    const sourceData: any[] = isRemote
      ? state.remoteData
      : Array.isArray(state.gridData)
        ? state.gridData
        : state.gridData?.data || []
    const selNode = find(sourceData, (item: any) => item[valueField] === value)
    const items: any[] = []

    if (selNode) {
      selNode.currentLabel = selNode[textField]
      items.push(selNode)
    }

    return items
  }

export const initQuery =
  ({ props, state, vm }) =>
  (options: any = {}) => {
    const { init } = options
    const isRemote =
      (props.filterable || props.searchable) &&
      props.remote &&
      (typeof props.remoteMethod === 'function' || typeof props.initQuery === 'function')

    let selected
    if (isRemote && props.initQuery) {
      let initData = props.initQuery(props.modelValue, props.extraQueryParams, !!init)
      if (initData && initData.then) {
        return new Promise((resolve) => {
          initData.then((selected: any) => {
            state.remoteData = selected
            if (vm.$refs.gridRef) {
              vm.$refs.gridRef.loadData(selected)
            }
            resolve(selected)
          })
        })
      }
      selected = initData
      state.remoteData = selected
      if (vm.$refs.gridRef) {
        vm.$refs.gridRef.loadData(selected)
      }
    }

    return Promise.resolve(selected)
  }

export const mounted =
  ({ api, state, props, vm, nextTick }) =>
  () => {
    // 确保 gridRef 存在后再执行初始化
    const initSelected = () => {
      if (!state.modelValue || (Array.isArray(state.modelValue) && state.modelValue.length === 0)) {
        return
      }

      if (props.multiple) {
        let initialNodes: any[] = []
        if (Array.isArray(state.modelValue)) {
          state.modelValue.forEach((value: any) => {
            const option = api.getPluginOption(value)
            initialNodes = initialNodes.concat(option)
          })
        }

        const selected = initialNodes.map((node: any) => {
          return {
            ...node,
            currentLabel: node[props.textField],
            value: node[props.valueField]
          }
        })

        updateBaseSelect({ vm, props, data: selected })
        state.selected = selected

        // 设置表格的选中状态
        if (vm.$refs.gridRef && selected.length > 0) {
          vm.$refs.gridRef.clearSelection()
          vm.$refs.gridRef.setSelection(selected, true)
        }
      } else {
        const data = api.getPluginOption(state.modelValue)[0]
        if (data) {
          if (vm.$refs.baseSelectRef) {
            updateBaseSelect({
              vm,
              props,
              data: {
                ...data,
                currentLabel: data[props.textField],
                value: data[props.valueField],
                state: {
                  currentLabel: data[props.textField]
                }
              }
            })
          }

          state.selected = data
          state.currentKey = data[props.valueField]

          // 设置表格的单选状态
          if (vm.$refs.gridRef) {
            vm.$refs.gridRef.clearRadioRow()
            vm.$refs.gridRef.setRadioRow(data)
          }
        }
      }
    }

    // 使用 nextTick 确保 DOM 已渲染完成
    nextTick(() => {
      // 执行初始化查询，如果有的话
      const initQueryPromise = api.initQuery({ init: true })
      if (initQueryPromise && typeof initQueryPromise.then === 'function') {
        initQueryPromise
          .then(() => {
            nextTick(() => {
              initSelected()
            })
          })
          .catch(() => {
            // 如果 initQuery 失败，仍然尝试初始化选中状态
            nextTick(() => {
              initSelected()
            })
          })
      } else {
        // 如果没有 initQuery 或返回的不是 Promise，直接初始化选中状态
        initSelected()
      }
    })
  }

export const watchValue =
  ({ api, props, vm, state }) =>
  (newValue: any, oldValue: any) => {
    if (props.multiple) {
      let initialNodes: any[] = []
      if (Array.isArray(newValue) && newValue.length > 0) {
        // 从表格的完整数据中查找选中的行
        const isRemote =
          (props.filterable || props.searchable) &&
          props.remote &&
          (typeof props.remoteMethod === 'function' || typeof props.initQuery === 'function')
        const sourceData: any[] = isRemote
          ? state.remoteData
          : Array.isArray(state.gridData)
            ? state.gridData
            : state.gridData?.data || []

        // 如果表格已加载，从表格的完整数据中查找
        if (vm.$refs.gridRef) {
          try {
            const tableData = vm.$refs.gridRef.getTableData()
            const fullData = tableData?.fullData || sourceData

            newValue.forEach((value: any) => {
              const foundRow = fullData.find((item: any) => item[props.valueField] === value)
              if (foundRow) {
                initialNodes.push(foundRow)
              } else {
                // 如果表格中没有找到，尝试从 state.selected 中查找
                const existing = state.selected.find((item: any) => item[props.valueField] === value)
                if (existing) {
                  initialNodes.push(existing)
                }
              }
            })
          } catch (e) {
            // 如果表格还没有加载，从源数据中查找
            newValue.forEach((value: any) => {
              const foundRow = sourceData.find((item: any) => item[props.valueField] === value)
              if (foundRow) {
                initialNodes.push(foundRow)
              } else {
                // 如果源数据中没有找到，尝试从 state.selected 中查找
                const existing = state.selected.find((item: any) => item[props.valueField] === value)
                if (existing) {
                  initialNodes.push(existing)
                }
              }
            })
          }
        } else {
          // 表格还没有加载，从源数据中查找
          newValue.forEach((value: any) => {
            const foundRow = sourceData.find((item: any) => item[props.valueField] === value)
            if (foundRow) {
              initialNodes.push(foundRow)
            } else {
              // 如果源数据中没有找到，尝试从 state.selected 中查找
              const existing = state.selected.find((item: any) => item[props.valueField] === value)
              if (existing) {
                initialNodes.push(existing)
              }
            }
          })
        }
      }

      const selected = initialNodes.map((node: any) => {
        return {
          ...node,
          currentLabel: node[props.textField],
          value: node[props.valueField]
        }
      })

      // 更新输入框中选中的标签
      if (vm.$refs.baseSelectRef) {
        updateBaseSelect({ vm, props, data: selected })
      }
      state.selected = selected

      // 更新下拉面板中选中的表格行（使用 nextTick 确保表格已渲染）
      if (vm.$refs.gridRef) {
        vm.$refs.gridRef.clearSelection()
        if (selected.length > 0) {
          // 从表格的完整数据中获取实际的行对象
          try {
            const tableData = vm.$refs.gridRef.getTableData()
            const fullData = tableData?.fullData || []
            const rowsToSelect = fullData.filter((row: any) =>
              selected.some((sel: any) => sel[props.valueField] === row[props.valueField])
            )
            if (rowsToSelect.length > 0) {
              vm.$refs.gridRef.setSelection(rowsToSelect, true)
            }
          } catch (e) {
            // 如果表格还没有加载，直接使用 selected
            vm.$refs.gridRef.setSelection(selected, true)
          }
        }
      }
    } else {
      if (!newValue) {
        state.selected = {}
        state.currentKey = ''
        if (vm.$refs.gridRef) {
          vm.$refs.gridRef.clearRadioRow()
        }
        if (vm.$refs.baseSelectRef) {
          updateBaseSelect({ vm, props, data: null })
        }
        return
      }

      // 从表格的完整数据中查找选中的行
      const isRemote =
        (props.filterable || props.searchable) &&
        props.remote &&
        (typeof props.remoteMethod === 'function' || typeof props.initQuery === 'function')
      const sourceData: any[] = isRemote
        ? state.remoteData
        : Array.isArray(state.gridData)
          ? state.gridData
          : state.gridData?.data || []

      let data = null
      if (vm.$refs.gridRef) {
        try {
          const tableData = vm.$refs.gridRef.getTableData()
          const fullData = tableData?.fullData || sourceData
          data = fullData.find((item: any) => item[props.valueField] === newValue)
        } catch (e) {
          data = sourceData.find((item: any) => item[props.valueField] === newValue)
        }
      } else {
        data = sourceData.find((item: any) => item[props.valueField] === newValue)
      }

      // 如果表格中没有找到，尝试从 state.selected 中查找
      if (
        !data &&
        state.selected &&
        typeof state.selected === 'object' &&
        !Array.isArray(state.selected) &&
        state.selected[props.valueField] === newValue
      ) {
        data = state.selected
      }

      if (data && typeof data === 'object' && !Array.isArray(data)) {
        updateBaseSelect({
          vm,
          props,
          data: {
            ...(data as any),
            currentLabel: data[props.textField],
            value: data[props.valueField],
            state: {
              currentLabel: data[props.textField]
            }
          }
        })

        state.selected = data
        state.currentKey = data[props.valueField]

        // 更新下拉面板中选中的表格行
        if (vm.$refs.gridRef) {
          vm.$refs.gridRef.clearRadioRow()
          // 从表格的完整数据中获取实际的行对象
          try {
            const tableData = vm.$refs.gridRef.getTableData()
            const fullData = tableData?.fullData || []
            const rowToSelect = fullData.find((row: any) => row[props.valueField] === newValue)
            if (rowToSelect) {
              vm.$refs.gridRef.setRadioRow(rowToSelect)
            } else {
              vm.$refs.gridRef.setRadioRow(data)
            }
          } catch (e) {
            vm.$refs.gridRef.setRadioRow(data)
          }
        }
      }
    }
  }

export const radioChange =
  ({ props, vm, emit, state }) =>
  ({ row }: any) => {
    if (!props.multiple) {
      updateBaseSelect({
        vm,
        props,
        data: {
          ...row,
          currentLabel: row[props.textField],
          value: row[props.valueField],
          state: {
            currentLabel: row[props.textField]
          }
        }
      })

      state.selected = row
      state.currentKey = row[props.valueField]

      vm.$refs.baseSelectRef.hidePanel()

      emit('update:modelValue', row[props.valueField])
      emit('change', row[props.valueField])
    }
  }

export const selectChange =
  ({ props, vm, emit, state, nextTick }) =>
  ({ $table, selection, checked, row }: any) => {
    if (props.multiple) {
      const { textField, valueField } = props
      const remoteItem = (row: any) => {
        const removeItem = state.selected.find((item: any) => item[valueField] === row[valueField])
        if (removeItem) {
          const index = state.selected.indexOf(removeItem)
          state.selected.splice(index, 1)
        }
      }

      if (row) {
        // 单行选择/取消
        if (checked) {
          // 检查是否已存在
          const exists = state.selected.find((item: any) => item[valueField] === row[valueField])
          if (!exists) {
            state.selected.push({
              ...row,
              value: row[valueField],
              currentLabel: row[textField]
            })
          }
        } else {
          remoteItem(row)
        }
      } else {
        // 全选/取消全选
        if (checked) {
          // 添加所有选中的行（排除已存在的）
          selection.forEach((row: any) => {
            const exists = state.selected.find((item: any) => item[valueField] === row[valueField])
            if (!exists) {
              state.selected.push({
                ...row,
                value: row[valueField],
                currentLabel: row[textField]
              })
            }
          })
        } else {
          // 取消全选：移除当前表格数据中的所有行
          const tableData = $table?.tableFullData || []
          tableData.forEach((row: any) => {
            remoteItem(row)
          })
        }
      }

      // 更新显示的数据
      const selectedData = state.selected.map((node: any) => ({
        ...node,
        currentLabel: node[textField],
        value: node[valueField],
        isGrid: true
      }))

      updateBaseSelect({ vm, props, data: selectedData })

      // 更新 modelValue（不触发 watchValue，因为表格选中状态已经正确）
      const currentValue = state.selected.map((item: any) => item[valueField])
      // 直接更新 state.modelValue，避免触发 watchValue 导致重复更新
      state.modelValue = currentValue
      emit('update:modelValue', currentValue)
      emit('change', currentValue, state.selected)

      // 确保表格选中状态正确同步
      if (vm.$refs.gridRef) {
        nextTick(() => {
          try {
            const tableData = vm.$refs.gridRef.getTableData()
            const fullData = tableData?.fullData || []
            // 获取当前表格中应该选中的行
            const rowsToSelect = fullData.filter((row: any) => currentValue.indexOf(row[valueField]) !== -1)
            // 清除所有选中，然后重新设置
            vm.$refs.gridRef.clearSelection()
            if (rowsToSelect.length > 0) {
              vm.$refs.gridRef.setSelection(rowsToSelect, true)
            }
          } catch (e) {
            // 如果表格还没有加载，忽略错误
          }
        })
      }
    }
  }
