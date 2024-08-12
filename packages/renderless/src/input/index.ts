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

import { omitText } from '../common/string'
import type {
  IInputApi,
  IInputClassPrefixConstants,
  IInputRenderlessParamUtils,
  IInputRenderlessParams,
  IInputState
} from 'types/input.type'

const HIDDEN_STYLE = `
height:0 !important;visibility:hidden !important;overflow:hidden !important;
position:absolute !important;z-index:-1000 !important;top:0 !important;right:0 !important
`

const CONTEXT_STYLE = [
  'width',
  'line-height',
  'padding-top',
  'padding-bottom',
  'padding-left',
  'padding-right',
  'border-width',
  'box-sizing',
  'letter-spacing',
  'font-family',
  'font-weight',
  'font-size',
  'text-rendering',
  'text-transform',
  'text-indent'
]

const STYLE = {
  BoxSizing: 'box-sizing',
  BorderBox: 'border-box',
  ContentBox: 'content-box',
  PaddingTop: 'padding-top',
  PaddingBottom: 'padding-bottom',
  BorderTopWidth: 'border-top-width',
  BorderBottomWidth: 'border-bottom-width'
}

const isServer = typeof window === 'undefined'
const isKorean = (text: string): boolean => /([(\uAC00-\uD7AF)|(\u3130-\u318F)])+/gi.test(text)

export const showBox = (state: IInputState) => (): void => {
  if (state.inputDisabled) {
    return false
  }

  state.boxVisibility = true
}

export const inputStyle =
  ({ props }) =>
  () => {
    return {
      textAlign: props.textAlign
    }
  }

export const calculateNodeStyling =
  () =>
  (
    targetElement: HTMLElement
  ): {
    contextStyle: string
    paddingSize: number
    borderSize: number
    boxSizing: string
  } => {
    const style = window.getComputedStyle(targetElement)
    const boxSizing = style.getPropertyValue(STYLE.BoxSizing)

    const paddingSize =
      parseFloat(style.getPropertyValue(STYLE.PaddingBottom)) + parseFloat(style.getPropertyValue(STYLE.PaddingTop))

    const borderSize =
      parseFloat(style.getPropertyValue(STYLE.BorderBottomWidth)) +
      parseFloat(style.getPropertyValue(STYLE.BorderTopWidth))

    const contextStyle = CONTEXT_STYLE.map((name) => `${name}:${style.getPropertyValue(name)}`).join(';')

    return { contextStyle, paddingSize, borderSize, boxSizing }
  }

export const calcTextareaHeight =
  ({
    api,
    hiddenTextarea,
    props,
    state,
    mode,
    constants
  }: Pick<IInputRenderlessParams, 'api' | 'props' | 'state' | 'mode' | 'constants'> & {
    hiddenTextarea: HTMLTextAreaElement | null
  }) =>
  (
    targetElement: HTMLTextAreaElement,
    minRows = 1,
    maxRows = null
  ): {
    minHeight?: string
    height?: string
  } => {
    if (!targetElement) {
      return {
        minHeight: '',
        height: ''
      }
    }

    if (!hiddenTextarea) {
      hiddenTextarea = document.createElement('textarea')
      document.body.appendChild(hiddenTextarea)
    }

    const { paddingSize, borderSize, boxSizing, contextStyle } = api.calculateNodeStyling(targetElement)

    hiddenTextarea.setAttribute('style', `${contextStyle};${HIDDEN_STYLE}`)
    hiddenTextarea.value = targetElement.value || targetElement.placeholder || ''

    let height = hiddenTextarea.scrollHeight
    const textareaStyle: {
      minHeight?: string
      height?: string
    } = {}

    if (mode === 'mobile') {
      height = Math.max(hiddenTextarea.scrollHeight, constants.TEXTAREA_HEIGHT_MOBILE)
    }

    if (boxSizing === STYLE.BorderBox) {
      height = height + borderSize * 2 + paddingSize
    } else if (boxSizing === STYLE.ContentBox) {
      height = height - paddingSize
    }

    hiddenTextarea.value = ''

    const singleRowHeight = hiddenTextarea.scrollHeight - paddingSize

    if (minRows !== null) {
      let minHeight = singleRowHeight * minRows

      if (boxSizing === STYLE.BorderBox) {
        minHeight = minHeight + paddingSize + borderSize
      }

      if (props.size) {
        minHeight = props.size === 'mini' ? minHeight * 0.67 : props.size === 'small' ? minHeight : minHeight * 1.17
      }

      if (props.height) {
        minHeight = props.height
      }

      if (!state.isDisplayOnly) {
        height = Math.max(minHeight, height)
        textareaStyle.minHeight = `${minHeight}px`
      } else {
        textareaStyle.minHeight = `0px`
      }
    }

    if (maxRows !== null) {
      let maxHeight = singleRowHeight * maxRows

      if (boxSizing === STYLE.BorderBox) {
        maxHeight += borderSize + paddingSize
      }

      height = Math.min(maxHeight, height)
    }

    textareaStyle.height = `${height}px`

    hiddenTextarea.parentNode && hiddenTextarea.parentNode.removeChild(hiddenTextarea)

    hiddenTextarea = null

    return textareaStyle
  }

export const getInput = (vm: IInputRenderlessParamUtils['vm']) => (): HTMLTextAreaElement | HTMLInputElement =>
  vm.$refs.input || vm.$refs.textarea

export const blur = (api: IInputApi) => (): void => api.getInput().blur()

export const focus = (api: IInputApi) => (): void => api.getInput().focus()

export const select = (api: IInputApi) => (): void => api.getInput().select()

export const handleBlur =
  ({
    api,
    componentName,
    eventName,
    emit,
    props,
    state,
    vm
  }: Pick<IInputRenderlessParams, 'api' | 'emit' | 'props' | 'state' | 'vm'> & {
    componentName: string
    eventName: string
  }) =>
  (event: FocusEvent): void => {
    state.focused = false

    emit('blur', event)

    api.isMemoryStorage.value = false

    if (props.validateEvent) {
      api.dispatch(componentName, eventName, [props.modelValue])
    }

    if (props.hoverExpand) {
      vm.$refs.textarea.scrollTop = 0
    }
  }

export const handleFocus =
  ({ api, emit, state }: Pick<IInputRenderlessParams, 'api' | 'emit' | 'state'>) =>
  (event: FocusEvent): void => {
    state.focused = true

    emit('focus', event)

    api.searchMemory((event.target as HTMLInputElement | HTMLTextAreaElement).value)
  }

export const handleInput =
  ({ api, emit, nextTick, state }: Pick<IInputRenderlessParams, 'api' | 'emit' | 'nextTick' | 'state'>) =>
  (event: Event): void => {
    if (state.isComposing) {
      return
    }

    if ((event.target as HTMLInputElement | HTMLTextAreaElement).value === state.nativeInputValue) {
      return
    }

    emit('update:modelValue', (event.target as HTMLInputElement | HTMLTextAreaElement).value)

    emit('input', event)

    api.searchMemory((event.target as HTMLInputElement | HTMLTextAreaElement).value)

    nextTick(api.setNativeInputValue)
  }

export const handleChange =
  (emit: IInputRenderlessParams['emit']) =>
  (event: Event): void =>
    emit('change', (event.target as HTMLInputElement | HTMLTextAreaElement).value)

export const resizeTextarea =
  ({ api, parent, vm, state, props }: Pick<IInputRenderlessParams, 'api' | 'parent' | 'vm' | 'state' | 'props'>) =>
  (): void => {
    if (isServer) {
      return
    }

    const { autosize, type } = parent

    if (type !== 'textarea') {
      return
    }

    if (props.hoverExpand && !state.enteredTextarea) {
      state.textareaCalcStyle = {
        minHeight: state.textareaHeight,
        height: state.textareaHeight
      }

      return
    }

    if (!autosize) {
      state.textareaCalcStyle = {
        minHeight: api.calcTextareaHeight(vm.$refs.textarea).minHeight
      }

      return
    }

    const minRows = autosize.minRows
    const maxRows = autosize.maxRows

    state.textareaCalcStyle = api.calcTextareaHeight(vm.$refs.textarea, minRows, maxRows)
  }

export const setNativeInputValue =
  ({ api, state }: Pick<IInputRenderlessParams, 'api' | 'state'>) =>
  (): void => {
    const input = api.getInput()

    if (!input) {
      return
    }

    if (input.value === state.nativeInputValue) {
      return
    }

    input.value = state.nativeInputValue
  }

export const handleCompositionStart = (state: IInputState) => (): void => (state.isComposing = true)

export const handleCompositionUpdate =
  (state: IInputState) =>
  (event: CompositionEvent): void => {
    const text = (event.target as HTMLInputElement | HTMLTextAreaElement).value
    const lastCharacter = text[text.length - 1] || ''

    state.isComposing = !isKorean(lastCharacter)
  }

export const handleCompositionEnd =
  ({ api, state }: Pick<IInputRenderlessParams, 'api' | 'state'>) =>
  (event: CompositionEvent): void => {
    if (state.isComposing) {
      state.isComposing = false
      api.handleInput(event)
    }
  }

export const calcIconOffset =
  ({ CLASS_PREFIX, parent }: Pick<IInputRenderlessParams, 'parent'> & { CLASS_PREFIX: IInputClassPrefixConstants }) =>
  (place: 'prefix' | 'suffix'): void => {
    const elList = [].slice.call(
      parent.$el.querySelectorAll(`.${CLASS_PREFIX.Input}${place}`) || []
    ) as unknown as HTMLElement[]

    if (!elList.length) {
      return
    }

    let el: HTMLElement | null = null

    for (let i = 0, len = elList.length; i < len; i++) {
      if (elList[i].parentNode === parent.$el) {
        el = elList[i]
        break
      }
    }

    if (!el) {
      return
    }

    const pendantMap = { suffix: 'append', prefix: 'prepend' }
    const pendant = pendantMap[place]

    if (parent.$slots[pendant]) {
      const dom = parent.$el.querySelector(`.${CLASS_PREFIX.InputGroup}${pendant}`)
      let transform

      if (place === 'suffix') {
        transform = `translateX(-${dom.offsetWidth}px)`
      } else if (place === 'prefix') {
        transform = `translate(${dom.offsetWidth}px, -50%)`
      }

      el.style.transform = transform
    } else {
      el.removeAttribute('style')
    }
  }

export const updateIconOffset = (api: IInputApi) => (): void => {
  api.calcIconOffset('prefix')
  api.calcIconOffset('suffix')
}

export const clear = (emit: IInputRenderlessParams['emit']) => (): void => {
  emit('update:modelValue', '')
  emit('change', '')
  emit('clear')
}

export const handlePasswordVisible =
  ({ api, nextTick, state }: Pick<IInputRenderlessParams, 'api' | 'nextTick' | 'state'>) =>
  (): void => {
    state.passwordVisible = !state.passwordVisible
    nextTick(api.focus)
  }

export const getSuffixVisible =
  ({ parent, props, state }: Pick<IInputRenderlessParams, 'parent' | 'props' | 'state'>) =>
  (): boolean =>
    parent.$slots.suffix ||
    props.suffixIcon ||
    state.showClear ||
    props.showPassword ||
    state.isWordLimitVisible ||
    (state.validateState && state.needStatusIcon) ||
    (props.mask && state.inputDisabled)

export const textLength = (value: number | string | undefined): number => {
  if (typeof value === 'number') {
    return String(value).length
  }

  return (value || '').length
}

export const watchFormSelect =
  ({ emit, props, state }: Pick<IInputRenderlessParams, 'emit' | 'props' | 'state'>) =>
  (value: string | number | undefined): void => {
    if (props.isSelect) {
      emit('update:modelValue', value)
      emit('change', value)

      const filterData = props.selectMenu.length && props.selectMenu.filter((item) => item.id === value).shift()

      state.checkedLabel = filterData ? filterData.label : ''
    }
  }

export const hasSelection = (api: IInputApi) => (): boolean => {
  const input = api.getInput()
  return input && input.selectionStart !== input.selectionEnd
}

export const handleEnterDisplayOnlyContent =
  ({ state, props }: Pick<IInputRenderlessParams, 'state' | 'props'>) =>
  ($event: MouseEvent, type?: 'textarea'): void => {
    if (type === 'textarea' && props.popupMore) return

    const target = type === 'textarea' ? $event.target.querySelector('.text-box') : $event.target
    state.displayOnlyTooltip = ''

    if (!target) {
      return
    }

    const isOverText =
      target.scrollWidth > target.offsetWidth || (type === 'textarea' && target.scrollHeight > target.offsetHeight)

    if (isOverText) {
      state.displayOnlyTooltip = props.displayOnlyContent || state.nativeInputValue
    } else {
      let isOverTextWhenMask = false

      if (props.mask && state.maskValueVisible) {
        const text = target.textContent
        const font = window.getComputedStyle(target).font
        const rect = target.getBoundingClientRect()
        const iconWidth = 16 + 15 // 减去图标的宽度加上右边距
        isOverTextWhenMask = omitText(text, font, rect.width - iconWidth).o
      }

      if (isOverTextWhenMask) {
        state.displayOnlyTooltip = props.displayOnlyContent || state.nativeInputValue
      }
    }
  }

export const hiddenPassword =
  ({ state, props }: Pick<IInputRenderlessParams, 'state' | 'props'>) =>
  (): string => {
    let str = ''
    const password = props.displayOnlyContent || state.nativeInputValue

    for (let i = 0; i < password.length; i++) {
      str += '*'
    }
    return str
  }

export const getDisplayedMaskValue =
  ({ state }: Pick<IInputRenderlessParams, 'state'>) =>
  () => {
    if (state.maskValueVisible) {
      return state.nativeInputValue
    } else {
      return state.nativeInputValue && state.maskSymbol
    }
  }

export const setInputDomValue =
  ({ state, props, nextTick, vm }: Pick<IInputRenderlessParams, 'state' | 'props' | 'nextTick' | 'vm'>) =>
  (type) => {
    nextTick(() => {
      const input = vm.$refs.input
      if (props.mask && state.nativeInputValue && input) {
        input.value = state.maskValueVisible || !state.inputDisabled ? state.nativeInputValue : state.maskSymbol
      }

      if (type === 'mask' && !props.mask && input) {
        input.value = state.nativeInputValue
      }
    })
  }

export const handleEnterTextarea =
  ({ api, state, props, nextTick }) =>
  () => {
    // 如果正在拖拽中，则不触发展开
    if (state.isDragging) {
      return
    }
    if (props.hoverExpand && !state.isDisplayOnly) {
      state.enteredTextarea = true
      nextTick(api.resizeTextarea)
    }
  }

export const handleLeaveTextarea =
  ({ api, state, props, nextTick, vm }) =>
  () => {
    if (state.isDragging) {
      return
    }
    if (props.hoverExpand && !state.isDisplayOnly) {
      state.enteredTextarea = false
      nextTick(() => {
        api.resizeTextarea()
        vm.$refs.textarea.scrollTop = 0
      })
    }
  }

export const getDisplayOnlyText =
  ({ parent, state, props }) =>
  () => {
    const text = props.displayOnlyContent || state.nativeInputValue
    const showEmptyValue =
      typeof props.showEmptyValue === 'boolean' ? props.showEmptyValue : (parent.tinyForm || {}).showEmptyValue

    return showEmptyValue ? text : text || '-'
  }

export const setShowMoreBtn =
  ({ state, vm }) =>
  (init) => {
    if (state.timer) clearTimeout(state.timer)

    state.timer = setTimeout(() => {
      const textBox = vm.$refs && vm.$refs.textBox
      if (!textBox) return

      // 兼容元素使用v-show及在弹框中使用的场景，只在初始化时执行一次
      if (init && textBox.offsetHeight === 0) {
        let textBoxClone = textBox.cloneNode(true)
        textBoxClone.style.visibility = 'hidden'
        textBoxClone.style.position = 'absolute'
        textBoxClone.style.left = '-9999px'
        document.body.appendChild(textBoxClone)

        if (textBoxClone.scrollHeight > textBoxClone.offsetHeight) {
          state.showMoreBtn = true
        }

        document.body.removeChild(textBoxClone)
        textBoxClone = null
      } else if (textBox.scrollHeight > textBox.offsetHeight) {
        state.showMoreBtn = true
      } else {
        state.showMoreBtn = false
      }
    }, 100)
  }

// tiny新增，同步勿删
export const handleTextareaMouseDown =
  ({ state }) =>
  () =>
    (state.isDragging = true)

// tiny新增，同步勿删
export const handleTextareaMouseUp =
  ({ state, api }) =>
  (isOutside) => {
    state.isDragging = false
    if (isOutside) {
      api.handleLeaveTextarea()
    }
  }
