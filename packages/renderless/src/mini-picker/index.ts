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

export const visibleHandle = (emit) => () => emit('update:visible', false)

export const watchVisible =
  (emit) =>
  ({ state, value }) => {
    setTimeout(() => {
      value ? (state.toggle = true) : (state.toggle = false)
    }, 0)

    emit('update:visible', value)
  }

export const getDataType = (state) => () => {
  const { columns } = state
  const firstColumn = columns[0] || {}

  if (firstColumn.children) {
    return 'cascade'
  }

  if (firstColumn.values) {
    return 'object'
  }

  return 'text'
}

export const format =
  ({ state, api }) =>
  () => {
    const { columns, dataType } = state

    if (dataType === 'text') {
      state.formattedColumns = [{ values: columns }]
    } else if (dataType === 'cascade') {
      api.formatCascade()
    } else {
      state.formattedColumns = columns
    }
  }

export const formatCascade =
  ({ state, props }) =>
  () => {
    const formatted = []
    let cursor = { children: state.columns }

    while (cursor && cursor.children) {
      const defaultIndex = cursor.defaultIndex || Number(state.defaultIndex)

      formatted.push({
        values: cursor.children.map((item) => item[props.valueKey]),
        defaultIndex
      })

      cursor = cursor.children[defaultIndex]
    }

    state.formattedColumns = formatted
  }

export const change = (api) => (index) => {
  api.onChange(index)
}

export const setColumnValue = (api) => (index, value) => {
  const column = api.getColumn(index)
  column && column.setValue(value)
}

export const setValues = (api) => (values) => {
  values.forEach((value, index) => {
    api.setColumnValue(index, value)
  })
}

export const getColumnValue = (api) => (index) => {
  const column = api.getColumn(index)
  return column && column.getValue()
}

export const confirm =
  ({ api, childrenPickerRefs }) =>
  () => {
    const children = childrenPickerRefs.childrenPicker

    children && children.forEach((child) => child.onTransitionEnd())
    api.emitEvent('confirm')
    api.visibleHandle()
  }

export const cancel =
  ({ api, emit }) =>
  () => {
    emit('cancel')
    api.visibleHandle()
  }

export const emitEvent =
  ({ api, state, emit }) =>
  (event) => {
    if (state.dataType === 'text') {
      emit(event, api.getColumnValue(0), api.getColumnIndex(0))
    } else {
      emit(event, api.getValues(), api.getIndexes())
    }
  }

export const getColumn = (childrenPickerRefs) => (index) => {
  const children = childrenPickerRefs.childrenPicker
  return children[index]
}

export const getColumnIndex = (api) => (columnIndex) => (api.getColumn(columnIndex) || {}).state.currentIndex

export const getValues = (childrenPickerRefs) => () => childrenPickerRefs.childrenPicker && childrenPickerRefs.childrenPicker.map((child) => child.getValue())

export const getIndexes = (childrenPickerRefs) => () =>
  childrenPickerRefs.childrenPicker && childrenPickerRefs.childrenPicker.map((child) => child.state.currentIndex)

export const setIndexes = (api) => (indexes) => {
  indexes.forEach((optionIndex, columnIndex) => {
    api.setColumnIndex(columnIndex, optionIndex)
  })
}

export const setColumnIndex = (api) => (columnIndex, optionIndex) => {
  const column = api.getColumn(columnIndex)
  column && column.setIndex(optionIndex)
}

export const getColumnValues = (childrenPickerRefs) => (index) => (childrenPickerRefs.childrenPicker[index] || {}).state.columnsItem.values

export const setColumnValues = (childrenPickerRefs) => (index, options) => {
  const children = childrenPickerRefs.childrenPicker
  const column = children[index]

  if (column) {
    column.setOptions(options)
  }
}

export const onCascadeChange =
  ({ api, state, props }) =>
  (columnIndex) => {
    const { columns } = state
    let cursor = { children: columns }
    const indexes = api.getIndexes()

    for (let i = 0; i <= columnIndex; i++) {
      cursor = cursor.children[indexes[i]]
    }

    while (columnIndex < state.formattedColumns.length) {
      if (cursor.children && cursor.children.length !== 0) {
        columnIndex++

        api.setColumnValues(
          columnIndex,
          cursor.children.map((item) => item[props.valueKey])
        )

        cursor = cursor.children[cursor.defaultIndex || 0]
      } else {
        columnIndex++
        api.setColumnValues(columnIndex, [])
      }
    }
  }

export const onChange =
  ({ api, state, emit }) =>
  (columnIndex) => {
    if (state.dataType === 'cascade') {
      api.onCascadeChange(columnIndex)
    }

    if (api.dataType === 'text') {
      emit('change', api.getColumnValue(0), api.getColumnIndex(0))
    } else {
      emit('change', api.getValues(), columnIndex)
    }
  }

export const getChildrenComponent = ({ state, vm, constants }) => {
  const childrenName = constants.CHILDREN_PICKER
  const children = []

  for (let index = 0; index < state.formattedColumns.length; index++) {
    children.push(
      Array.isArray(vm.$refs[childrenName + index]) ? vm.$refs[childrenName + index][0] : vm.$refs[childrenName + index]
    )
  }

  return children
}
