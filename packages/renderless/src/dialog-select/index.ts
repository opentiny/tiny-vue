import { arrayEach, findIndexOf, find } from '../grid/static'

export const computedGridColumns = (props) => () => {
  const { popseletor, gridOp, multi, valueField, textField } = props
  const { columns = [] } = gridOp || {}
  let gridColumns = []

  if (popseletor === 'grid') {
    const operColType = multi ? 'selection' : 'radio'

    if (columns.length) {
      const operColIndex = findIndexOf(columns, (column) => column.type === operColType)

      gridColumns = columns.slice(0)

      if (!~operColIndex) {
        gridColumns = [{ type: operColType, width: 60 }, ...columns.slice(0)]
      }
    } else {
      gridColumns = [
        { type: operColType, width: 60 },
        { field: valueField, title: String(valueField).toUpperCase() },
        { field: textField, title: String(textField).toUpperCase() }
      ]
    }
  }

  return gridColumns
}

export const queryGridData =
  ({ api, props, state }) =>
  () => {
    const { popseletor, remoteSearch } = props

    if (popseletor === 'grid') {
      if (typeof remoteSearch === 'function') {
        state.multiGridStore.loading = true
        state.temporary.final = true

        const onFinally = () => {
          if (state.temporary.final) {
            state.temporary.final = false
            state.multiGridStore.loading = false
            state.multiGridStore.inited = true
          }
        }

        remoteSearch()
          .then(() => {
            state.multiGridStore.loading = false
            api.setChecked()
          })
          .then(onFinally)
          .catch(onFinally)
      } else {
        state.multiGridStore.inited = true
      }
    }
  }

export const multiGridSelectAll =
  ({ api, props, state }) =>
  ({ selection, checked }) => {
    if (checked) {
      arrayEach(selection, (item) => {
        const index = findIndexOf(state.selectedValues, (val) => val == item[props.valueField])

        if (!~index) {
          state.selectedValues = [...state.selectedValues, item[props.valueField]]
          state.selectedDatas = [...state.selectedDatas, item]
          state.selectedChanged = true
        }
      })
    } else {
      state.selectedValues = []
      state.selectedDatas = []
      state.selectedChanged = true
    }

    api.selectedBoxInit()
  }

export const multiGridSelectChange =
  ({ api, props, state }) =>
  ({ row, checked }) => {
    const index = findIndexOf(state.selectedValues, (val) => val == row[props.valueField])

    if (checked) {
      if (!~index) {
        state.selectedValues = [...state.selectedValues, row[props.valueField]]
        state.selectedDatas = [...state.selectedDatas, row]
        state.selectedChanged = true
      }
    } else {
      if (~index) {
        state.selectedValues = [...state.selectedValues.slice(0, index), ...state.selectedValues.slice(index + 1)]
        state.selectedDatas = [...state.selectedDatas.slice(0, index), ...state.selectedDatas.slice(index + 1)]
        state.selectedChanged = true
      }
    }

    api.selectedBoxInit()
  }

export const selectedBoxInit =
  ({ props, vm, nextTick }) =>
  () => {
    const { multi, showSelectedBox } = props

    if (multi && showSelectedBox && vm.$refs.selectedBox) {
      nextTick(() => {
        vm.$refs.selectedBox.init()
      })
    }
  }

export const selectedBoxClear =
  ({ props, state, vm }) =>
  () => {
    const { multi, popseletor } = props

    if (multi && popseletor === 'grid') {
      vm.$refs.multiGrid.clearSelection()
    }

    if (multi && popseletor === 'tree') {
      arrayEach(state.selectedValues, (value) => vm.$refs.multiTree.setCheckedByNodeKey(value, false))
    }

    state.selectedValues = []
    state.selectedDatas = []
    state.selectedChanged = true
  }

export const selectedBoxDelete =
  ({ props, state, vm }) =>
  ({ option: row }) => {
    const { multi, popseletor } = props

    if (multi && popseletor === 'grid') {
      vm.$refs.multiGrid.setSelection(
        find(vm.$refs.multiGrid.$refs.tinyTable.selection, (item) => item[props.valueField] === row[props.valueField]),
        false
      )
    }

    if (multi && popseletor === 'tree') {
      vm.$refs.multiTree.setCheckedByNodeKey(row[props.valueField], false)
    }

    const index = findIndexOf(state.selectedValues, (val) => val == row[props.valueField])

    if (~index) {
      state.selectedValues = [...state.selectedValues.slice(0, index), ...state.selectedValues.slice(index + 1)]
      state.selectedDatas = [...state.selectedDatas.slice(0, index), ...state.selectedDatas.slice(index + 1)]
      state.selectedChanged = true
    }
  }

export const selectedBoxDrag =
  ({ props, state }) =>
  ({ state: { select } }) => {
    if (select && select.length) {
      const datas = select
        .map((opt) => String(opt[props.valueField]))
        .map((strVal) => state.selectedDatas.find((opt) => strVal === String(opt[props.valueField])))
      const values = datas.map((opt) => opt[props.valueField])

      state.selectedDatas = datas
      state.selectedValues = values
      state.selectedChanged = true
    }
  }

export const doMultiTreeFilter =
  ({ props, state, nextTick, vm }) =>
  () => {
    const { popseletor, treeOp = {} } = props

    if (popseletor === 'tree') {
      if (state.multiTreeStore.filterText) {
        if (treeOp.queryPidsBySearch) {
          treeOp.queryPidsBySearch(state.multiTreeStore.filterText, (expandedKeys) => {
            if (state.multiTreeStore.expandedKeys && state.multiTreeStore.expandedKeys.length) {
              state.multiTreeStore.lastValidExpandedKeys = state.multiTreeStore.expandedKeys
            }

            state.multiTreeStore.viewType = 'plain'
            state.multiTreeStore.expandedKeys = expandedKeys
          })
        }
      } else {
        state.multiTreeStore.viewType = 'tree'

        if (state.multiTreeStore.expandedKeys && state.multiTreeStore.expandedKeys.length) {
          const currentValidExpandedKeys = state.multiTreeStore.expandedKeys

          state.multiTreeStore.expandedKeys = []

          nextTick(() => {
            state.multiTreeStore.expandedKeys = currentValidExpandedKeys
          })
        } else {
          state.multiTreeStore.expandedKeys = state.multiTreeStore.lastValidExpandedKeys
        }

        vm.$refs.multiTree.filter('')
      }
    }
  }

export const multiTreeAfterLoad =
  ({ api, props, state, vm }) =>
  () => {
    const { popseletor, treeOp = {}, valueField } = props
    const { lookupStore } = state

    if (popseletor === 'tree') {
      vm.$refs.multiTree.filter(state.multiTreeStore.filterText)

      if (state.multiTreeStore.inited) {
        state.multiTreeStore.checkedKeys = state.selectedValues
      } else {
        const checkedKeys = lookupStore.datas.map((row) => row[valueField])

        state.multiTreeStore.checkedKeys = checkedKeys

        if (treeOp.queryPidsByIds && checkedKeys.length) {
          treeOp.queryPidsByIds(checkedKeys, (expandedKeys) => {
            state.multiTreeStore.expandedKeys = expandedKeys.slice(0)
            api.setChecked()
            state.multiTreeStore.inited = true
          })
        } else {
          api.setChecked()
          state.multiTreeStore.inited = true
        }
      }
    }
  }

export const multiTreeFilterNode = (props) => (value, data) => {
  const { popseletor } = props

  if (popseletor === 'tree') {
    if (!value) return true
    return ~data.label.indexOf(value)
  }

  return true
}

export const multiTreeFilterPlain =
  ({ api, props, state }) =>
  (data) => {
    const { popseletor } = props

    if (popseletor === 'tree') {
      return api.multiTreeFilterNode(state.multiTreeStore.filterText, data)
    }

    return true
  }

export const multiTreeLeavePlain =
  ({ props, state }) =>
  (plainNode) => {
    const { popseletor } = props

    if (popseletor === 'tree') {
      state.multiTreeStore.viewType = 'tree'
      state.multiTreeStore.expandedKeys = plainNode.parentNodeKeys
      state.multiTreeStore.highlight = plainNode.nodeKey
    }
  }

const getTreeSelect = ({ vm, props }) => {
  const { selectedBoxOp } = props
  const { pkField = 'id', showField = [] } = (selectedBoxOp || {}).config || {}
  const keyNames = [pkField, ...showField]
  const checkedNodes = vm.$refs.multiTree.state.store.getCheckedNodes()
  const { nodes: plainNodes } = vm.$refs.multiTree.state.plainNodeStore
  const datas = []

  arrayEach(checkedNodes, (item) => {
    const plainNode = find(plainNodes, (plainNode) => plainNode.node.data[props.valueField] === item[props.valueField])
    const tmp = { _$title: plainNode.title, _$auxi: plainNode.auxi }

    arrayEach(keyNames, (keyName) => (tmp[keyName] = item[keyName]))

    datas.push(tmp)
  })

  return datas
}

const getTreeRadio = (vm) => {
  const { nodes: plainNodes } = vm.$refs.multiTree.state.plainNodeStore
  const currentRadio = vm.$refs.multiTree.state.currentRadio
  const plainNode = find(plainNodes, (plainNode) => plainNode.node.id === currentRadio.value)

  return plainNode?.node ? [plainNode.node.data] : []
}

export const multiTreeCheck =
  ({ api, props, state, vm, nextTick }) =>
  () => {
    const { multi, popseletor } = props

    if (popseletor === 'tree') {
      nextTick(() => {
        const datas = multi ? getTreeSelect({ vm, props }) : getTreeRadio(vm)
        const values = datas.map((item) => item[props.valueField])

        state.selectedDatas = datas
        state.selectedValues = values
        state.selectedChanged = true

        multi && api.selectedBoxInit()
      })
    }
  }

export const emitChange =
  ({ props, state, emit }) =>
  () => {
    if (state.selectedChanged) {
      const { valueField, textField } = props
      const { selectedDatas } = state

      const texts = []
      const values = []

      arrayEach(selectedDatas, (item) => {
        texts.push(item[textField])
        values.push(item[valueField])
      })

      emit('change', values, texts, selectedDatas)

      state.selectedChanged = false
    }
  }

export const onFooterCancel =
  ({ api, props }) =>
  () => {
    if (!props.beforeClose || props.beforeClose('cancel')) {
      api.emitClose()
    }
  }

export const onFooterConfirm =
  ({ api, props }) =>
  () => {
    if (!props.beforeClose || props.beforeClose('confirm')) {
      api.emitChange()
      api.emitClose()
    }
  }

export const emitClose = (emit) => () => emit('update:visible', false)

export const setChecked =
  ({ api, props, state }) =>
  () => {
    const { multi, popseletor, valueField } = props
    const { multiGridStore, multiTreeStore, lookupStore } = state

    if ((popseletor === 'grid' && !multiGridStore.inited) || (popseletor === 'tree' && !multiTreeStore.inited)) {
      if (lookupStore.datas && lookupStore.datas.length) {
        state.selectedDatas = lookupStore.datas
        state.selectedValues = lookupStore.datas.map((row) => row[valueField])
      } else {
        state.selectedDatas = []
        state.selectedValues = []
      }

      multi && api.selectedBoxInit()
    }
  }

export const computedConfig =
  ({ props, state }) =>
  () => {
    const { multi, popseletor, gridOp } = props
    const { selectConfig = {}, radioConfig = {} } = gridOp || {}
    const { selectedValues } = state
    let config = {}

    if (popseletor === 'grid') {
      if (multi) {
        config = Object.assign(config, selectConfig, { checkRowKeys: selectedValues })
      } else {
        config = Object.assign(config, radioConfig, { checkRowKey: selectedValues[0] })
      }
    }

    return config
  }

export const doAutoLookup =
  ({ props, state, emit }) =>
  () => {
    const { autoLookup, lookupMethod, multi, popseletor, valueField, textField } = props

    if (autoLookup && lookupMethod) {
      let rowKeys = []

      if (popseletor === 'grid') {
        const { gridOp } = props
        const { selectConfig, radioConfig } = gridOp || {}
        const { checkRowKeys = [] } = selectConfig || {}
        const { checkRowKey = '' } = radioConfig || {}

        rowKeys = multi ? checkRowKeys : [checkRowKey]
      }

      if (popseletor === 'tree') {
        const { treeOp } = props
        const { defaultCheckedKeys = [] } = treeOp || {}

        rowKeys = defaultCheckedKeys
      }

      lookupMethod(rowKeys).then((datas) => {
        state.lookupStore.datas = datas

        const values = datas.map((row) => row[valueField])
        const texts = datas.map((row) => row[textField])

        emit('change', values, texts, datas)
      })
    }
  }

export const multiTreeRadio =
  ({ api, props }) =>
  () => {
    const { multi, popseletor } = props

    if (!multi && popseletor === 'tree') {
      api.multiTreeCheck()
    }
  }

export const multiGridRadioChange =
  ({ props, state }) =>
  ({ row }) => {
    state.selectedValues = [row[props.valueField]]
    state.selectedDatas = [row]
    state.selectedChanged = true
  }

export const watchMulti =
  ({ api, state, props }) =>
  () => {
    state.splitValue = props.multi ? 0.7 : 1
    state.selectedChanged = false
    state.selectedDatas = []
    state.selectedValues = []
    state.multiGridStore.inited = false
    state.multiGridStore.loading = false
    state.multiTreeStore.viewType = 'tree'
    state.multiTreeStore.expandedKeys = []
    state.multiTreeStore.checkedKeys = []
    state.multiTreeStore.highlight = null
    state.multiTreeStore.filterText = ''
    state.multiTreeStore.inited = false
    state.lookupStore.datas = []

    api.doAutoLookup()
  }
