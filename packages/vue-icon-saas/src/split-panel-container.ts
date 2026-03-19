import { svg } from '@opentiny/vue-common'
import SplitPanelContainer from '@opentiny/vue-theme-saas/svgs/split-panel-container.svg'
import SplitPanelContainerFilled from '@opentiny/vue-theme-saas/svgs/split-panel-container-filled.svg'

const iconFn = () =>
  svg({ name: 'IconSplitPanelContainer', component: SplitPanelContainer, filledComponent: SplitPanelContainerFilled })()
iconFn.__flag = { 'svgName': 'split-panel-container', 'hasFill': true }
export default iconFn
