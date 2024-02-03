import { renderless, api } from '@opentiny/vue-renderless/guide/vue'
import { useSetup, useVm, $props, Slot } from '@opentiny/react-common'
import '@opentiny/vue-theme/guide/index.less'
import Shepherd from 'shepherd.js'
import { offset } from '@floating-ui/dom'
import browser from '@opentiny/vue-renderless/common/browser'

export default function Guide(props) {
  const {
    showStep = false,
    domData = [],
    mainAxis = 18,
    crossAxis = null,
    alignmentAxis = null,
    popPosition = 'bottom',
    arrow = true,
    modalOverlayOpeningPadding = 0,
    modalOverlayOpeningRadius = 0,
    lightClass = '',
    width = browser.isMobile ? '350' : '510',
    height = '',
    main = () => { }
  } = props
  const defaultProps = {
    ...$props,
    showStep,
    domData,
    mainAxis,
    crossAxis,
    alignmentAxis,
    popPosition,
    arrow,
    modalOverlayOpeningPadding,
    modalOverlayOpeningRadius,
    lightClass,
    width,
    height,
    main
  }
  const { ref, parent, current: vm } = useVm()

  const { state } = useSetup({
    props: defaultProps,
    renderless,
    api,
    vm,
    parent,
    extendOptions: {
      Shepherd,
      offset
    }
  })
  return (
    <div className="tiny-guide">
      <Slot name="main" slots={props.slots} parent_child={props.children} />
    </div>
  )
}
