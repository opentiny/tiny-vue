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

import { isEqual, contains, handleGroupDisabled, hoverItem, selectOptionClick, queryChange, toggleEvent } from './index'

export const api = ['state', 'visible', 'hoverItem', 'selectOptionClick']

const initState = ({ reactive, computed, props, api, markRaw, select, parent }) => {
  const state = reactive({
    parent: markRaw(parent),
    created: computed(() => props.created),
    index: -1,
    select: markRaw(select),
    hover: false,
    visible: true,
    hitState: false,
    groupDisabled: false,
    disabled: computed(() => props.disabled),
    isObject: computed(() => Object.prototype.toString.call(props.value).toLowerCase() === '[object object]'),
    currentLabel: computed(() => props.label || (state.isObject ? '' : props.value)),
    currentValue: computed(() => props.value || props.label || ''),
    itemSelected: computed(() => {
      if (!select.multiple) {
        return api.isEqual(props.value, select.modelValue)
      } else {
        return api.contains(select.modelValue, props.value)
      }
    }),

    limitReached: computed(() => {
      if (select.multiple) {
        const multipleLimit = select.state.multipleLimit
        return !state.itemSelected && (select.modelValue || []).length >= multipleLimit && multipleLimit > 0
      } else {
        return false
      }
    }),

    selectCls: computed(() => (state.itemSelected ? 'checked-sur' : 'check'))
  })

  return state
}

const initApi = ({ api, props, state, select, constants, vm }) => {
  Object.assign(api, {
    state,
    isEqual: isEqual({ select, state }),
    contains: contains({ select, state }),
    hoverItem: hoverItem({ select, vm, props, state }),
    queryChange: queryChange({ select, props, state }),
    selectOptionClick: selectOptionClick({ constants, vm, props, state, select }),
    handleGroupDisabled: handleGroupDisabled(state)
  })
}

const initWatch = ({ watch, props, state, select, constants }) => {
  watch(
    () => state.currentLabel,
    () => {
      if (!props.created && !select.remote) {
        select.state.selectEmitter.emit(constants.EVENT_NAME.setSelected)
      }
    }
  )

  watch(
    () => props.value,
    (value, oldVal) => {
      const { remote, valueKey } = select

      if (!props.created && !remote) {
        if (valueKey && typeof value === 'object' && typeof oldVal === 'object' && value[valueKey] === oldVal[valueKey]) {
          return
        }

        select.state.selectEmitter.emit(constants.EVENT_NAME.setSelected)
      }
    }
  )
}

const initOnMounted = ({ onMounted, props, api, vm, state, refs, constants, select }) => {
  onMounted(() => {
    state.el = vm.$el

    toggleEvent({ props, refs, type: 'add' })
    select.state.selectEmitter.on(constants.EVENT_NAME.queryChange, api.queryChange)
  })
}

const initOnBeforeUnmount = ({ onBeforeUnmount, props, select, refs, vm }) => {
  onBeforeUnmount(() => {
    const index = select.state.cachedOptions.indexOf(vm)

    toggleEvent({ props, refs, type: 'remove' })

    if (index === -1) {
      select.state.cachedOptions.splice(index, 1)
    }

    select.onOptionDestroy(select.state.options.indexOf(vm))
  })
}

export const renderless = (props, { computed, onMounted, onBeforeUnmount, reactive, watch, inject, markRaw }, { vm, refs, parent }) => {
  const api = {}
  const select = inject('select')
  const constants = select._constants
  const state = initState({ reactive, computed, props, api, markRaw, select, parent })

  initApi({ api, props, state, select, constants, vm })
  initWatch({ watch, props, state, select, constants })
  initOnMounted({ onMounted, props, api, vm, state, refs, constants, select })
  initOnBeforeUnmount({ onBeforeUnmount, props, select, refs, vm })

  select.state.options.push(markRaw(vm))
  select.state.cachedOptions.push(markRaw(vm))
  select.state.optionsCount++
  select.state.filteredOptionsCount++
  vm.$on(constants.EVENT_NAME.handleGroupDisabled, api.handleGroupDisabled)

  return api
}
