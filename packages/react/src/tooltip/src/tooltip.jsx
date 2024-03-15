import { vc } from '@opentiny/react-common'
import { forwardRef } from 'react'

const Tooltip = forwardRef((props, ref) => {
  const getContent = (vm) => {
    let slotContent = vm.content

    if (slotContent) {
      return slotContent
    }

    let attrContent

    if (vm.renderContent) {
      attrContent = vm.renderContent(h, vm.content)
    } else if (vm.pre) {
      attrContent = vm.content ? <pre>{vm.content}</pre> : null
    } else {
      attrContent = vm.content
    }

    return attrContent
  }
  let content = getContent(props)

  let typeClass = 'is-' + (props.type || props.effect)
  let mouseenter = () => props.setExpectedState(true)
  let mouseleave = () => {
    props.setExpectedState(false)
    props.debounceClose()
  }
  // 直接 updatePopper 会造成scroll事件的绑定，即使tooltip不显示，也在滚动时带来性能影响
  props.nextTick(() => {
    // 取 v-show的条件， v-show时，要更新一下位置
    if (!props.disabled && props.state.showPopper && content) {
      props.updatePopper()
    }
  })

  return (
    // <Transition afterLeave={props.doDestroy} name={props.transition}>
    <div
      ref={ref}
      v-ref="popper"
      id={props.state.tooltipId}
      style={{
        opacity: !props.disabled && props.state.showPopper && content ? 1 : 0,
        maxWidth: `${props.state.tipsMaxWidth}px`
      }}
      className={vc(
        [
          'tiny-tooltip',
          'tiny-tooltip__popper',
          typeClass,
          props.popperClass,
          { 'tiny-tooltip__show-tips': props.state.showContent }
        ],
        'toottip'
      )}
      role="tooltip"
      aria-hidden={props.disabled || !props.state.showPopper ? 'true' : 'false'}
      onMouseEnter={() => mouseenter()}
      onMouseLeave={() => mouseleave()}>
      {content}
    </div>

    // </Transition>
  )
})
export default Tooltip
