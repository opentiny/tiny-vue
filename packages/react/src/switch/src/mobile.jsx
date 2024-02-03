import { useSetup, useVm, vc, If, Slot } from '@opentiny/react-common'
import { api, renderless } from '@opentiny/vue-renderless/switch/vue'
import '@opentiny/vue-theme-mobile/switch/index.less'

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
    displayOnly = false,
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

  const {
    ref,
    parent,
    current: vm
  } = useVm()

  const {
    state,
    toggle
  } = useSetup({
    props: defaultProps,
    api,
    renderless,
    vm,
    parent,
    constants: _constants
  })

  return (<span 
    className={vc(state.wrapClasses)}
    disabled={true}
    tabIndex='0'
    onClick={toggle}
    onKeyDown={(e) => {
      e.key === 'Enter' && toggle(e)
    }}
  ></span>)
} 