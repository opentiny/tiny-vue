import { svg } from '@opentiny/vue-common'
import PanelMax from '@opentiny/vue-theme-saas/svgs/panel-max.svg'
import PanelMaxFilled from '@opentiny/vue-theme-saas/svgs/panel-max-filled.svg'

const iconFn = () => svg({ name: 'IconPanelMax', component: PanelMax, filledComponent: PanelMaxFilled })()
iconFn.__flag = { 'svgName': 'panel-max', 'hasFill': true }
export default iconFn
