const DEFAULT_FILED_NAMES = {
  text: 'label',
  value: 'id',
  children: 'children'
}

const createSourceData =
  ({ props, state, api }) =>
  () => {
    if (!api.validProps()) return

    const { options, valueField, textField, type } = props

    if (type === 'cascade') return options

    const values = api.parseType(state.defaultValues.slice())
    const types = Array.from({ length: values.length })
    const ranges = Array.from({ length: values.length })
    const indices = Array.from({ length: values.length })

    const visibleOptions = options.map((opt, i) => {
      let slicedValues, existOption

      if (Array.isArray(opt)) {
        if (opt.length === 0) return []

        let index = opt.findIndex((item) => item[valueField] === values[i])

        index = index === -1 ? 0 : index
        types[i] = 'a'
        ranges[i] = [0, opt.length - 1]
        indices[i] = index
        slicedValues = api.sliceValue(0, opt.length - 1)
        existOption = (i) => opt[i]
      } else if (opt && typeof opt === 'object') {
        let range

        if (Array.isArray(opt.range)) {
          range = opt.range.slice(0, 2)
        } else if (typeof opt.rangeMethod === 'function') {
          range = opt.rangeMethod(...values)
          state.isOldCascadeType = true
        }

        types[i] = 'o'
        ranges[i] = api.parseType(range)
        slicedValues = api.sliceValue(ranges[i][0], ranges[i][1])
        existOption = (i) => opt.optionMethod(i, ...values)
      }

      if (!slicedValues || !existOption) return []

      return slicedValues.map((slicedValue) => {
        const option = slicedValue === null ? { [valueField]: null, [textField]: '' } : existOption(slicedValue)

        return option
      })
    })

    return visibleOptions
  }

const changeHandler =
  ({ state, columnFieldNames, columnsType, api }) =>
  (columnIndex, option) => {
    const fields = columnFieldNames.value
    if (option && Object.keys(option).length) {
      state.defaultValues = state.defaultValues ? state.defaultValues : []

      if (columnsType.value === 'cascade') {
        state.defaultValues[columnIndex] = option[fields.value] || ''
        let index = columnIndex
        let cursor = option
        while (cursor && cursor[fields.children] && cursor[fields.children][0]) {
          state.defaultValues[index + 1] = cursor[fields.children][0][fields.value]
          index++
          cursor = cursor[fields.children][0]
        }

        // 当前改变列 的 下一列 children 值为空
        if (cursor && cursor[fields.children] && cursor[fields.children].length === 0) {
          state.defaultValues = state.defaultValues.slice(0, index + 1)
        }
      } else {
        state.defaultValues[columnIndex] = Object.prototype.hasOwnProperty.call(option, fields.value)
          ? option[fields.value]
          : ''
      }

      api.change(columnIndex)
    }
  }

// 级联数据格式化
const formatCascade =
  ({ columnFieldNames }) =>
  (columns, defaultValues) => {
    const formatted = []
    const fields = columnFieldNames.value
    let cursor = {
      text: '',
      value: '',
      [fields.children]: columns
    }

    let columnIndex = 0

    while (cursor && cursor[fields.children]) {
      const options = cursor[fields.children]
      const value = defaultValues[columnIndex]
      let index = options.findIndex((columnItem) => columnItem[fields.value] === value)
      if (index === -1) index = 0
      cursor = cursor[fields.children][index]

      columnIndex++
      formatted.push(options)
    }

    return formatted.slice()
  }

const columnFieldNamesComputed = ({ props, computed }) =>
  computed(() => {
    return {
      ...DEFAULT_FILED_NAMES,
      text: props.textField,
      value: props.valueField,
      children: props.childrenField
    }
  })

// 选中项
const defaultIndexes = ({ state, computed, columnFieldNames, columnsList }) =>
  computed(() => {
    const fields = columnFieldNames.value
    return columnsList.value.map((column, index) => {
      const targetIndex = column.findIndex((item) => item[fields.value] === state.defaultValues[index])
      return targetIndex === -1 ? 0 : targetIndex
    })
  })

const confirmDisabled =
  ({ props, state, columnsList }) =>
  () => {
    if (typeof props.disabled !== 'function') {
      return false
    }

    state.isDisabled = columnsList.value.some((column, columnIndex) => {
      return props.disabled(state.defaultValues[columnIndex], ...state.defaultValues)
    })
  }

const change =
  ({ api, state, columnFieldNames, columnsList }) =>
  () => {
    if (api.isSameValue(state.oldValues, state.defaultValues)) return

    state.oldValues = state.defaultValues.slice()
    if (state.isOldCascadeType) {
      state.formattedColumns = api.createSourceData()
    }
    api.getColumnsList()
    api.confirmDisabled()
    const fields = columnFieldNames.value
    state.selectedOptions = columnsList.value.map((column, index) => {
      return column.find((item) => item[fields.value] === state.defaultValues[index]) || column[0]
    })
  }

// 当前类型
const columnsTypeComputed = ({ state, computed, columnFieldNames }) =>
  computed(() => {
    const firstColumn = state.formattedColumns && state.formattedColumns[0]
    const fields = columnFieldNames.value
    if (firstColumn) {
      if (Array.isArray(firstColumn)) {
        return 'multiple'
      }
      if (fields.children in firstColumn) {
        return 'cascade'
      }
    }
    return 'single'
  })

// 将传入的 options 格式化
const getColumnsList =
  ({ state, api, columnsType, columnsList }) =>
  () => {
    let result = []
    switch (columnsType.value) {
      case 'multiple':
        result = state.formattedColumns
        break
      case 'cascade':
        // 级联数据处理
        result = api.formatCascade(state.formattedColumns, state.defaultValues ? state.defaultValues : [])
        break
      default:
        result = [state.formattedColumns]
        break
    }
    columnsList.value = result
  }

const setValue =
  ({ api, state }) =>
  (value) => {
    if (!api.isSameValue(value, state.defaultValues)) {
      state.defaultValues = (value || []).slice()
      api.change()
    }
  }

const isSameValue = (valA, valB) => JSON.stringify(valA) === JSON.stringify(valB)

const sliceValue = (min, max) => {
  const values = [min]

  Array.from({ length: max - min }).map((v, i) => values.push(min + i + 1))

  return values
}

const validArr = (arr) => Array.isArray(arr) && arr.length

const validProps =
  ({ props }) =>
  () => {
    const { modelValue, options } = props
    const isSameLen = modelValue && modelValue.length ? modelValue.length === options.length : true
    return Array.isArray(modelValue) && Array.isArray(options) && isSameLen
  }

const parseType =
  ({ props }) =>
  (values) => {
    const { valueType } = props
    return values.map(valueType === 'number' ? Number : valueType === 'string' ? String : (i) => i)
  }

const init =
  ({ api, state }) =>
  () => {
    state.isInit = true
    state.formattedColumns = api.createSourceData()
    api.getColumnsList()
  }

export const usePicker = (args) => {
  const { ref, reactive, watch, computed, toRefs, props } = args
  const state = reactive({
    formattedColumns: [],
    defaultValues: [],
    selectedOptions: [],
    oldValues: [],
    isOldCascadeType: false,
    isDisabled: false,
    isInit: false
  })
  const api = {}
  const columnsList = ref([])
  const pickerColumn = ref([])
  const columnFieldNames = columnFieldNamesComputed({ props, computed })
  const columnsType = columnsTypeComputed({ state, computed, columnFieldNames })

  Object.assign(api, {
    change: change({ api, state, columnFieldNames, columnsList }),
    changeHandler: changeHandler({ state, columnFieldNames, columnsType, api }),
    formatCascade: formatCascade({ columnFieldNames }),
    setValue: setValue({ api, state }),
    validProps: validProps({ props }),
    parseType: parseType({ props }),
    init: init({ api, state }),
    isSameValue,
    sliceValue,
    getColumnsList: getColumnsList({ state, api, columnsType, columnsList }),
    confirmDisabled: confirmDisabled({ props, state, columnsList }),
    defaultIndexes: defaultIndexes({ state, computed, columnFieldNames, columnsList }),
    createSourceData: createSourceData({ props, state, api })
  })

  initWatch({ props, api, state, watch })

  return {
    ...toRefs(state),
    columnsType,
    columnsList,
    columnFieldNames,
    changeHandler: api.changeHandler,
    defaultIndexes: api.defaultIndexes,
    pickerColumn,
    isSameValue: api.isSameValue,
    setValue: api.setValue
  }
}

const initWatch = ({ props, api, state, watch }) => {
  watch(
    () => props.modelValue,
    (newValues) => {
      api.setValue(newValues)
    },
    { deep: true, immediate: true }
  )

  watch(
    () => props.options,
    () => props.visible && api.init(),
    { deep: true, immediate: true }
  )

  watch(
    () => props.visible,
    () => props.visible && !state.isInit && api.init(),
    { deep: true, immediate: true }
  )
}
