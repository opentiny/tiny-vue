import { renderless, api } from '@opentiny/vue-renderless/switch/vue'
import { vc, useSetup, useVm } from '@opentiny/openinula-common'
import '@opentiny/vue-theme-mobile/switch/index.less'

const $constants = {}

export default function Switch(props) {
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

  const { ref, current: vm, parent } = useVm()

  const { toggle, state } = useSetup({
    props,
    renderless,
    api,
    constants: _constants,
    vm,
    parent
  })

  return (
    <div ref={ref}>
      {' '}
      <span className={vc(state.wrapClasses)} disabled={disabled} onClick={toggle} onKeydown={toggle}>
        <div className="tiny-mobile-switch-loading">
          {' '}
          <div className="tiny-mobile-switch-loading-inner"></div>
        </div>
      </span>
    </div>
  )
}
