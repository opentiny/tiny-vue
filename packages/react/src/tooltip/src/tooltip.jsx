import { useCreateVueInstance } from "@opentiny/react-common/src"

export default function Tooltip(props) {
  let content = getContent(props)
  let propsData = {
    attrs: { name: props.transition },
    on: { 'after-leave': props.doDestroy }
  }
  let typeClass = 'is-' + (props.type || props.effect)
  let mouseenter = () => props.setExpectedState(true)
  let mouseleave = () => {
    props.setExpectedState(false)
    props.debounceClose()
  }
  useCreateVueInstance({$bus:props.$bus,props,doms:[],ref})
  const getContent = (vm) => {
    let slotContent = vm.slots.content && vm.slots.content()

    if (slotContent) {
      return slotContent
    }

    let attrContent

    if (vm.renderContent) {
      attrContent = vm.renderContent(h, vm.content)
    } else if (vm.pre) {
      attrContent = vm.content ?   <pre >{vm.content}</pre>  : null
    } else {
      attrContent = vm.content
    }

    return attrContent
  }
  // 直接 updatePopper 会造成scroll事件的绑定，即使tooltip不显示，也在滚动时带来性能影响
  props.$nextTick(() => {
    // 取 v-show的条件， v-show时，要更新一下位置
    if (!props.disabled && props.state.showPopper && content) {
      props.updatePopper()
    }
  })

  return (
    <transition {...propsData}>
      <div
      v-ref="ref"
        ref="popper"
        id={props.state.tooltipId}
        v-show={!props.disabled && props.state.showPopper && content}
        class={[
          'tiny-tooltip',
          'tiny-tooltip__popper',
          typeClass,
          props.popperClass,
          { 'tiny-tooltip__show-tips': props.state.showContent }
        ]}
        style={`max-width:${props.state.tipsMaxWidth}px`}
        role="tooltip"
        aria-hidden={props.disabled || !props.state.showPopper ? 'true' : 'false'}
        onMouseenter={() => mouseenter()}
        onMouseleave={() => mouseleave()}>
        {content}
      </div>
    </transition>
  )
}
