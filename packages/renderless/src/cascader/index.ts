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

import browser from '../common/browser'
import { isNull } from '../common/type'
import debounce from '../common/deps/debounce'
import { isEqual } from '../common/object'
import { addResizeListener } from '../common/deps/resize-event'
import { KEY_CODE, CASCADER } from '../common'

const initMigratingProps = () => ({
  expandTrigger: { newProp: CASCADER.PropsExpandTri, type: String },
  changeOnSelect: { newProp: CASCADER.PropsCheckStric, type: Boolean },
  hoverThreshold: { newProp: CASCADER.PropsHover, type: Number }
})

const kebabCase = (str) => {
  const hyphenateRE = /([^-])([A-Z])/g

  return str.replace(hyphenateRE, '$1-$2').replace(hyphenateRE, '$1-$2').toLowerCase()
}

export const getConfig =
  ({ parent, props }) =>
  () => {
    const config = props.props || {}
    const { $attrs } = parent
    const migratingProps = initMigratingProps()

    Object.keys(migratingProps).forEach((oldProp) => {
      const { newProp, type } = migratingProps[oldProp]
      let oldValue = $attrs[oldProp] || $attrs[kebabCase(oldProp)]

      if (isNull(config[newProp]) && !isNull(oldProp)) {
        if (oldValue === '' && type === Boolean) {
          oldValue = true
        }

        config[newProp] = oldValue
      }
    })

    return config
  }

export const computClearVisible =
  ({ props, state }) =>
  () => {
    if (!props.clearable || state.isDisabled || state.filtering || !state.inputHover) {
      return false
    }

    return state.multiple ? !!state.checkedNodes.filter((node) => !node.isDisabled).length : !!state.presentText
  }

export const computePresentContent =
  ({ api, state }) =>
  () => {
    if (state.config.multiple) {
      api.computePresentTags()
      state.presentText = state.presentTags.length ? ' ' : null
    } else {
      api.computePresentText()
    }
  }

export const watchValue =
  ({ api, state }) =>
  (value) => {
    if (!isEqual(value, state.checkedValue)) {
      state.checkedValue = value
      setTimeout(api.computePresentContent)
    }
  }

export const watchCheckedValue =
  ({ api, emit, state }) =>
  (value) => {
    const { checkStrictly, multiple } = state.config

    api.computePresentContent()

    if (!multiple && !checkStrictly && state.dropDownVisible) {
      api.toggleDropDownVisible(false)
    }

    emit('update:modelValue', value)
    emit('change', value)

    setTimeout(api.updateStyle)
  }

export const isEmpty = (val) => {
  if (isNull(val)) {
    return true
  }
  if (typeof val === 'boolean') {
    return false
  }
  if (typeof val === 'number') {
    return !val
  }
  if (val instanceof Error) {
    return val.message === ''
  }

  const type = Object.prototype.toString.call(val)

  if (~['[object String]', '[object Array]'].indexOf(type)) {
    return !val.length
  }

  if (~['[object File]', '[object Map]', '[object Set]'].indexOf(type)) {
    return !val.size
  }

  if (type === '[object Object]') {
    return !Object.keys(val).length
  }

  return false
}

export const selfMounted =
  ({ api, parent, props, refs, state }) =>
  () => {
    const { input } = refs
    const inputSizeMap = { medium: 36, small: 32, mini: 28 }

    input && (input.$parent.popperElm = refs.popper)

    if (input && input.$el) {
      state.inputInitialHeight = input.$el.offsetHeight || inputSizeMap[state.realSize] || 30
    }

    if (!isEmpty(props.modelValue)) {
      api.computePresentContent()
    }

    api.filterHandler = debounce(props.debounce, () => {
      if (!state.inputValue) {
        state.filtering = false
        return
      }

      const before = props.beforeFilter(state.inputValue)

      if (before && before.then) {
        before.then(api.getSuggestions)
      } else if (before !== false) {
        api.getSuggestions()
      } else {
        state.filtering = false
      }
    })

    addResizeListener(parent.$el, api.updateStyle)
  }

export const toggleDropDownVisible =
  ({ emit, nextTick, refs, state, updatePopper }) =>
  (visible) => {
    if (state.isDisabled) {
      return
    }

    const { input } = refs

    visible = !isNull(visible) ? visible : !state.dropDownVisible
    if (visible !== state.dropDownVisible) {
      state.dropDownVisible = visible
      if (visible) {
        nextTick(() => {
          updatePopper()
          state.panel.scrollIntoView()
        })
      }

      input && input.getInput && input.getInput().setAttribute('aria-expanded', visible)

      emit('visible-change', visible)
    }
  }

export const handleDropdownLeave = (state) => () => {
  state.filtering = false
  state.inputValue = state.presentText
}

export const handleKeyDown =
  ({ api }) =>
  (event) => {
    switch (event.keyCode) {
      case KEY_CODE.Enter:
        api.toggleDropDownVisible()
        break
      case KEY_CODE.ArrowDown:
        api.toggleDropDownVisible(true)
        api.focusFirstNode()
        event.preventDefault()
        break
      case KEY_CODE.Escape:
      case KEY_CODE.Tab:
        api.toggleDropDownVisible(false)
        break
      default:
        break
    }
  }

export const handleFocus = (emit) => (e) => {
  emit('focus', e)
}

export const handleBlur =
  ({ constants, dispatch, emit, state, api, props }) =>
  (e) => {
    if (props.filterable) {
      api.computePresentContent()
    }
    dispatch(constants.COMPONENT_NAME.FormItem, constants.EVENT_NAME.FormBlur, [
      state.multiple ? state.presentText : state.inputValue
    ])
    emit('blur', e)
  }

export const handleInput =
  ({ api, state, refs }) =>
  (val, event) => {
    event = event || window.event

    if (!event) {
      return
    }

    const reference = refs.reference
    const key = 'init-flag'
    const value = 'true'
    const isIE = browser.name === 'ie'

    if (isIE && reference.getAttribute(key) !== value && !event.target.value) {
      reference.setAttribute(key, value)
      return
    }

    !state.dropDownVisible && api.toggleDropDownVisible(true)
    state.presentText = val

    if (event && event.isComposing) {
      return
    }

    if (val) {
      api.filterHandler()
    } else {
      state.filtering = false
    }
  }

export const handleClear = (state) => () => {
  state.presentText = ''
  state.panel.clearCheckedNodes()
}

export const handleExpandChange =
  ({ constants, dispatch, emit, nextTick, state, updatePopper }) =>
  (value) => {
    nextTick(() => {
      dispatch(constants.COMPONENT_NAME.FormItem, constants.EVENT_NAME.FormBlur, [
        state.multiple ? state.presentText : state.inputValue
      ])

      updatePopper(state.panel.$parent)
    })

    emit('expand-change', value)
    emit('active-item-change', value)
  }

export const focusFirstNode =
  ({ refs, state }) =>
  () => {
    const { popper, suggestionPanel } = refs
    let firstNode = null

    if (state.filtering && suggestionPanel) {
      firstNode = suggestionPanel.$el.querySelector(CASCADER.SugItem)
    } else {
      const firstMenu = popper.querySelector(CASCADER.CascaderMenu)
      firstNode = firstMenu.querySelector(CASCADER.CascaderNodeTab)
    }

    if (firstNode) {
      firstNode.focus()
      !state.filtering && firstNode.click()
    }
  }

export const computePresentText =
  ({ props, state }) =>
  () => {
    if (!isEmpty(state.checkedValue)) {
      const node = state.panel.getNodeByValue(state.checkedValue)

      if (node && (state.config.checkStrictly || node.isLeaf)) {
        state.presentText = node.getText(props.showAllLevels, props.separator)
        return
      }
    }

    state.inputValue = null
    state.presentText = null
  }

export const computePresentTags =
  ({ api, props, state }) =>
  () => {
    const checkedNodes = api.getCheckedNodes(state.leafOnly)
    const tags = []

    const genTag = (node) => {
      const text = node.getText(props.showAllLevels, props.separator)
      const closable = !state.isDisabled && !node.isDisabled

      return { node, key: node.uid, text, hitState: false, closable }
    }

    if (checkedNodes.length) {
      const [first, ...rest] = checkedNodes
      const restCount = rest.length

      tags.push(genTag(first))

      if (restCount) {
        if (props.collapseTags) {
          tags.push({ key: -1, text: `+ ${restCount}`, closable: false })
        } else {
          rest.forEach((node) => tags.push(genTag(node)))
        }
      }
    }

    state.checkedNodes = checkedNodes
    state.presentTags = tags
    if (props.hoverExpand) {
      api.calcCollapseTags()
    }
  }

export const calcCollapseTags =
  ({ state, refs, nextTick }) =>
  () => {
    nextTick(() => {
      const content = refs['tags-content']

      if (state.inputHover || state.dropDownVisible) {
        return (state.isHidden = true)
      }

      if (content) {
        const { width: contentWidth, paddingLeft, paddingRight } = content && window.getComputedStyle(content)
        const contentWidthTotal =
          content && parseFloat(contentWidth) - parseFloat(paddingLeft) - parseFloat(paddingRight)

        const tagsLength = content.querySelector('.tiny-cascader__tags-collapse')
        const {
          width: collapseTagContentWidth,
          marginRight,
          marginLeft
        } = tagsLength && window.getComputedStyle(tagsLength)
        const collapseTagWidth =
          tagsLength && parseFloat(collapseTagContentWidth) + parseFloat(marginRight) + parseFloat(marginLeft)

        const tags = Array.from(content.querySelectorAll('.tiny-tag'))
        let { total, dom, idx } = { total: collapseTagWidth, dom: null, idx: 0 }
        tags.some((tag, index) => {
          if (tag !== tagsLength) {
            const { width: tagContentWidth, marginRight, marginLeft } = tag && window.getComputedStyle(tag)
            total += parseFloat(tagContentWidth) + parseFloat(marginRight) + parseFloat(marginLeft)
          }
          if (tag !== tagsLength && total > contentWidthTotal && !dom) {
            dom = tag
            idx = index
          }
        })

        let isOneLine = total - collapseTagWidth <= contentWidthTotal // 单行不展示计数

        if (isOneLine) {
          return (state.isHidden = true)
        }

        if (dom) {
          dom.before(tagsLength)
          state.isHidden = false
        } else {
          state.isHidden = true
        }

        state.collapseTagsLength = tags.length - idx
      }
    })
  }

export const watchInputHover =
  ({ refs }) =>
  (newVal) => {
    const [inputHover, dropDownVisible] = newVal
    if (!inputHover && !dropDownVisible) {
      const content = refs['tags-content']
      content && content.scrollTo({ top: 0, left: 0 })
    }
  }

export const handleMouseenter =
  ({ refs, state }) =>
  ($event) => {
    const dom = $event.target
    const textNode = dom && dom.querySelector('span')
    const { tooltip } = refs

    if (textNode && tooltip && textNode.scrollWidth > textNode.offsetWidth) {
      const text = textNode.textContent
      tooltip.state.referenceElm = dom
      tooltip.state.popperElm && (tooltip.state.popperElm.style.display = 'none')
      tooltip.doDestroy()
      state.tooltipVisible = true
      state.tooltipContent = text

      setTimeout(tooltip.updatePopper, 20)
    }
  }

export const handleMouseleave =
  ({ state }) =>
  () =>
    (state.tooltipVisible = false)

export const getSuggestions =
  ({ nextTick, props, state, updatePopper }) =>
  () => {
    let filterMethod = null

    if (!(props.filterMethod && typeof props.filterMethod === 'function')) {
      filterMethod = (node, keyword) => ~node.text.indexOf(keyword)
    } else {
      filterMethod = props.filterMethod
    }

    const suggestions = state.panel.getFlattedNodes(state.leafOnly).filter((node) => {
      if (node.isDisabled) {
        return false
      }

      node.text = node.getText(props.showAllLevels, props.separator) || ''

      return filterMethod(node, state.inputValue)
    })

    if (state.multiple) {
      state.presentTags.forEach((tag) => {
        tag.hitState = false
      })
    } else {
      suggestions.forEach((node) => {
        node.checked = isEqual(state.checkedValue, node.getValueByOption())
      })
    }

    state.filtering = true
    state.suggestions = suggestions

    nextTick(() => updatePopper())
  }

export const handleSuggestionKeyDown =
  ({ api }) =>
  (event) => {
    event = event || window.event

    if (!event) {
      return
    }

    const { keyCode, target } = event

    if (keyCode === KEY_CODE.Enter) {
      target.click()
    } else if (keyCode === KEY_CODE.ArrowUp) {
      const prev = target.previousElementSibling
      prev && prev.focus()
    } else if (keyCode === KEY_CODE.ArrowDown) {
      const next = target.nextElementSibling
      next && next.focus()
    } else if (~[KEY_CODE.Escape, KEY_CODE.Tab].indexOf(keyCode)) {
      api.toggleDropDownVisible(false)
    }
  }

export const handleDelete =
  ({ api, state }) =>
  () => {
    const lastIndex = state.presentTags.length - 1
    const lastTag = state.presentTags[lastIndex]

    state.pressDeleteCount = state.inputValue ? 0 : state.pressDeleteCount + 1

    if (!lastTag) {
      return
    }

    if (state.pressDeleteCount) {
      if (lastTag.hitState) {
        api.deleteTag(lastIndex)
      } else {
        lastTag.hitState = true
      }
    }
  }

export const handleSuggestionClick =
  ({ api, state }) =>
  (index) => {
    const targetNode = state.suggestions[index]

    if (state.multiple) {
      const { checked } = targetNode

      targetNode.doCheck(!checked)
      state.panel.calculateMultiCheckedValue()
    } else {
      state.checkedValue = targetNode.getValueByOption()
      api.toggleDropDownVisible(false)
    }
  }

export const deleteTag =
  ({ emit, state }) =>
  (index) => {
    const val = state.checkedValue[index]
    state.checkedValue = state.checkedValue.filter((n, i) => i !== index)

    emit('remove-tag', val)
  }

export const updateStyle =
  ({ parent, refs, state, updatePopper, nextTick, props }) =>
  () => {
    const $el = parent.$el
    const { suggestionPanel } = refs
    const inputInner = $el.querySelector(CASCADER.InputClass)

    if (!inputInner) {
      return
    }

    const tags = $el.querySelector(CASCADER.TagClass)
    let suggestionPanelEl = null

    if (suggestionPanel && (suggestionPanelEl = suggestionPanel.$el)) {
      const suggestionList = suggestionPanelEl.querySelector(CASCADER.ListClass)
      suggestionList.style.minWidth = inputInner.offsetWidth + 'px'
    }

    if (tags) {
      const offsetHeight = tags.offsetHeight
      let height = 0
      if (props.hoverExpand && !state.inputHover && !state.dropDownVisible) {
        height = state.inputInitialHeight + 'px'
      } else {
        height = Math.max(offsetHeight + 4, state.inputInitialHeight) + 'px'
      }

      inputInner.style.height = height

      updatePopper()
    } else {
      nextTick(() => {
        if (state.displayOnly) {
          inputInner.style.height = 'auto'
        }
      })
    }
  }

export const getCheckedNodes = (state) => (leafOnly) => state.panel.getCheckedNodes(leafOnly, state.checkedValue)

export const setInputHeightToTag =
  ({ nextTick, parent, state }) =>
  () => {
    nextTick(() => {
      const parentEl = parent.$el
      const height = parentEl.querySelector(CASCADER.TagClass).offsetHeight + 6 + 'px'

      if (!state.isDisplayOnly) {
        parentEl.querySelector(CASCADER.InputClass).style.height = height
      } else {
        parentEl.querySelector(CASCADER.InputClass).style.height = 'auto'
      }
    })
  }

export const presentTextHandler = ({ state, value }) => {
  if (state.inputValue) {
    if (state.inputValue !== value) {
      state.inputValue = value
    }
  } else {
    if (value) {
      state.inputValue = value
    }
  }
}

export const handleBeforeUpdate =
  ({ props, api, state }) =>
  () => {
    if ((!isEmpty(props.modelValue) && !props.filterable) || (props.hoverExpand && state.multiple)) {
      api.computePresentContent()
    }
  }

export const showPlaceholder =
  ({ props, state, t, constants }) =>
  () => {
    let placeholder = null

    placeholder =
      (state.multiple && state.presentTags.length) || state.present ? '' : props.placeholder || t(constants.placeholder)
    return placeholder
  }
