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

export const getData =
  ({ props, state, updatePopper, nextTick }) =>
  (queryString) => {
    if (state.suggestionDisabled) {
      return
    }

    state.loading = true

    props.fetchSuggestions(queryString, (suggestions) => {
      state.loading = false

      if (state.suggestionDisabled) {
        return
      }

      if (Array.isArray(suggestions)) {
        state.suggestions = suggestions
        state.highlightedIndex = props.highlightFirstItem ? 0 : -1
      } else {
        throw new TypeError('[TINY Error][Autocomplete]autocomplete suggestions must be an array')
      }

      nextTick(updatePopper)
    })
  }

export const handleChange =
  ({ api, emit, state, props }) =>
  (value) => {
    state.activated = true
    emit('update:modelValue', value)
    state.suggestionDisabled = false

    if (!props.triggerOnFocus && !value) {
      state.suggestionDisabled = true
      state.suggestions = []

      return
    }

    api.debouncedGetData(value)
  }

export const handleFocus =
  ({ api, emit, props, state }) =>
  (event) => {
    state.activated = true
    emit('focus', event)

    if (props.triggerOnFocus) {
      state.suggestionDisabled = false
      api.debouncedGetData(props.modelValue)
    }
  }

export const handleBlur =
  ({ emit, state }) =>
  (event) => {
    state.suggestionDisabled = true
    emit('blur', event)
  }

export const handleClear =
  ({ emit, state }) =>
  () => {
    state.activated = false
    emit('clear')
  }

export const close = (state) => () => {
  state.activated = false
}

export const handleKeyEnter =
  ({ api, emit, nextTick, props, state }) =>
  (event) => {
    if (state.suggestionVisible && state.highlightedIndex >= 0 && state.highlightedIndex < state.suggestions.length) {
      event.preventDefault()
      api.select(state.suggestions[state.highlightedIndex])
    } else if (props.selectWhenUnmatched) {
      emit('select', { value: props.modelValue })

      nextTick(() => {
        state.suggestions = []
        state.highlightedIndex = -1
      })
    }
  }

export const select =
  ({ emit, nextTick, props, state }) =>
  (item) => {
    emit('update:modelValue', item[props.valueKey])
    emit('select', item)

    nextTick(() => {
      state.activated = false
      state.suggestions = []
      state.highlightedIndex = -1
    })
  }

export const highlight =
  ({ constants, refs, state }) =>
  (index) => {
    if (!state.suggestionVisible || state.loading) {
      return
    }

    if (index < 0) {
      state.highlightedIndex = -1
      return
    }

    if (index >= state.suggestions.length) {
      index = state.suggestions.length - 1
    }

    const suggestion = refs.popper.querySelector(constants.WARP_CLS)
    const suggestionList = suggestion.querySelectorAll(constants.ITEM_CLS)
    let highlightItem = suggestionList[index]
    let scrollTop = suggestion.scrollTop
    let offsetTop = highlightItem.offsetTop

    if (offsetTop + highlightItem.scrollHeight > scrollTop + suggestion.clientHeight) {
      suggestion.scrollTop += highlightItem.scrollHeight
    }

    if (offsetTop < scrollTop) {
      suggestion.scrollTop -= highlightItem.scrollHeight
    }

    state.highlightedIndex = index

    let $input = refs.input.getInput()

    $input.setAttribute('aria-activedescendant', `${state.id}-item-${state.highlightedIndex}`)
  }

export const computedVisible = (state) => {
  const suggestions = state.suggestions
  let isValidData = Array.isArray(suggestions) && suggestions.length > 0

  return (isValidData || state.loading) && state.activated
}

export const watchVisible =
  ({ suggestionState, refs }) =>
  (val) => {
    let $input = refs.input.getInput()

    if ($input) {
      suggestionState.dropdownWidth = $input.offsetWidth + 'px'
      suggestionState.showPopper = val
    }
  }

export const mounted =
  ({ refs, state, suggestionState }) =>
  () => {
    const input = refs.input
    const $input = input.getInput()

    suggestionState.popperElm = refs.popper
    suggestionState.referenceElm = $input

    $input.setAttribute('role', 'textbox')
    $input.setAttribute('aria-autocomplete', 'list')
    $input.setAttribute('aria-controls', 'id')
    $input.setAttribute('aria-activedescendant', `${state.id}-item-${state.highlightedIndex}`)
  }
