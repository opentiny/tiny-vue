import { svg } from '@opentiny/vue-common'
import PanelNormal from '@opentiny/vue-theme-saas/svgs/panel-normal.svg'
import PanelNormalFilled from '@opentiny/vue-theme-saas/svgs/panel-normal-filled.svg'

const iconFn = () => svg({ name: 'IconPanelNormal', component: PanelNormal, filledComponent: PanelNormalFilled })()
iconFn.__flag = { 'svgName': 'panel-normal', 'hasFill': true }
export default iconFn
