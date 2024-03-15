import { renderless, api } from '@opentiny/vue-renderless/tooltip/vue'
import { useSetup, useVm, $props, parseVnode, useCreateVueInstance } from '@opentiny/react-common'
import '@opentiny/vue-theme/tooltip/index.less'
import ToolTipParent from './tooltip.jsx'
import { useRef } from 'react'

export default function Tooltip(props) {
  const {
    visible = 'always',

    adjustArrow = false,
    appendToBody = true,
    arrowOffset = 0,
    boundariesPadding = 5,
    closeDelay = 300,
    content,
    disabled,
    effect = 'dark',
    enterable = true,
    hideAfter = 0,
    manual,
    modelValue,
    offset = 0,
    openDelay = 0,
    placement = 'bottom',
    popper,
    popperClass,
    popperOptions = () => ({ gpuAcceleration: false, boundariesPadding: 10 }),
    pre,
    reference,
    renderContent,
    tabindex = 0,
    transition = 'tiny-fade-in-linear',
    type,
    visibleArrow = true,
    zIndex = 'next'
  } = props
  const defaultProps = {
    ...$props,
    visible,
    adjustArrow,
    appendToBody,
    arrowOffset,
    boundariesPadding,
    closeDelay,
    content,
    disabled,
    effect,
    enterable,
    hideAfter,
    manual,
    modelValue,
    offset,
    openDelay,
    placement,
    popper,
    popperClass,
    popperOptions,
    pre,
    reference,
    renderContent,
    tabindex,
    transition,
    type,
    visibleArrow,
    zIndex
  }
  const { ref, parent, current: vm } = useVm()

  const {
    state,
    vm: vmThis,
    $bus,
    nextTick,
    setExpectedState,
    debounceClose,
    updatePopper
  } = useSetup({
    props: defaultProps,
    renderless,
    api,
    vm,
    parent,
    ref
  })
  const refTooltip = useRef()
  vmThis.popperVM = useCreateVueInstance({
    ref: refTooltip,
    $bus,
    props: { ...defaultProps, state },
    doms: [refTooltip]
  }).vm
  const stringifyClassObj = (classObj) =>
    Object.keys(classObj)
      .filter((key) => classObj[key])
      .join(' ')

  const stringifyClassArr = (classArr) =>
    classArr
      .filter((item) => item)
      .map((item) => (typeof item === 'string' ? item.trim() : typeof item === 'object' ? stringifyClassObj(item) : ''))
      .join(' ')

  const addTooltipClass = (bindClass) => {
    let className = ''

    if (bindClass) {
      if (typeof bindClass === 'string') {
        className = bindClass.trim()
      } else if (Array.isArray(bindClass)) {
        className = stringifyClassArr(bindClass)
      } else if (typeof bindClass === 'object') {
        className = stringifyClassObj(bindClass)
      }
    }

    return 'tiny-tooltip ' + className.replace(/\btiny-tooltip\b/g, '').trim()
  }

  // 查找默认的slots, 并把它渲染到组件所在位置上。
  const getFirstElement = () => {
    const slots = props.children

    let element = null
    if (!Array.isArray(slots)) {
      element = slots
    } else {
      for (let index = 0; index < slots.length; index++) {
        const vnode = parseVnode(slots[index])

        if (vnode && vnode.type) {
          element = vnode
        }
      }
    }

    return element
  }

  const firstElement = getFirstElement()

  return (
    <>
      <ToolTipParent
        {...defaultProps}
        state={state}
        ref={refTooltip}
        v-ref="ref"
        nextTick={nextTick}
        setExpectedState={setExpectedState}
        debounceClose={debounceClose}
        updatePopper={updatePopper}></ToolTipParent>
      <div className={addTooltipClass(firstElement.props.className)} ref={ref}>
        {props.children}
      </div>
    </>
  )
}
