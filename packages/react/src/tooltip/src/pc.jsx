import { renderless, api } from '@opentiny/vue-renderless/tooltip/vue'
import { useSetup, useVm, $props, parseVnode } from '@opentiny/react-common'
import '@opentiny/vue-theme/tooltip/index.less'
import ToolTipParent from './tooltip.jsx'

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

  const { state, d } = useSetup({
    props: defaultProps,
    renderless,
    api,
    vm,
    parent
  })

  let popperVM = <ToolTipParent {...defaultProps} state={state} ref={ref} v-ref="ref"></ToolTipParent>

  d({ popperVM: { get: () => popperVM, set: (v) => (popperVM = v) } })

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

    if (!Array.isArray(slots)) return null

    let element = null

    for (let index = 0; index < slots.length; index++) {
      const vnode = parseVnode(slots[index])

      if (vnode && vnode.type) {
        element = vnode
      }
    }
    console.log(element, 'element')
    return element
  }

  const firstElement = getFirstElement()

  if (!firstElement) return null

  const data = firstElement.data || firstElement.props || (firstElement.props = {})

  data.class = addTooltipClass(data.class)

  return firstElement
}
