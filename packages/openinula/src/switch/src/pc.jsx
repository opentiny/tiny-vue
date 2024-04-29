import { useSetup, useVm, vc, If, Slot } from '@opentiny/openinula-common'
import { api, renderless } from '@opentiny/vue-renderless/switch/vue'
import '@opentiny/vue-theme/switch/index.less'

export default function (props) {
  const {
    _constants,
    disabled = false,
    showText,
    falseColor,
    falseValue = false,
    mini = false,
    modelValue = false,
    size,
    tabindex = '1',
    trueColor,
    trueValue = true,
    beforeChange,
    displayOnly = false
  } = props

  const defaultProps = Object.assign(
    {
      disabled,
      falseValue,
      mini,
      modelValue,
      tabindex,
      trueValue,
      displayOnly
    },
    props
  )

  const { ref, parent, current: vm } = useVm()

  const { state, toggle } = useSetup({
    props: defaultProps,
    api,
    renderless,
    vm,
    parent,
    constants: _constants
  })

  return (
    <span
      ref={ref}
      className={vc([state.wrapClasses, state.showText ? 'tiny-switch__text' : ''])}
      tabIndex={tabindex}
      onClick={toggle}
      onKeyDown={(e) => {
        e.key === 'Enter' && toggle(e)
      }}>
      <span className={state.innerClasses}>
        <If v-if={!mini && state.showText}>
          <Slot v-if={state.currentValue === trueValue} name="open" slots={props.slots}>
            ON
          </Slot>
          <Slot v-if={state.currentValue === falseValue} name="close" slots={props.slots}>
            OFF
          </Slot>
        </If>
      </span>
    </span>
  )
}
