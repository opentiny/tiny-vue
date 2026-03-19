import { svg } from '@opentiny/vue-common'
import PanelMini from '@opentiny/vue-theme-saas/svgs/panel-mini.svg'

const iconFn = () => svg({ name: 'IconPanelMini', component: PanelMini, filledComponent: PanelMini })()

iconFn.__flag = { 'svgName': 'panel-mini', 'hasFill': false }
export default iconFn
