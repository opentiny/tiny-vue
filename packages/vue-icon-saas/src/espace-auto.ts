import { svg } from '@opentiny/vue-common'
import EspaceAuto from '@opentiny/vue-theme-saas/svgs/espace-auto.svg'
import EspaceAutoFilled from '@opentiny/vue-theme-saas/svgs/espace-auto-filled.svg'

const iconFn = () => svg({ name: 'IconEspaceAuto', component: EspaceAuto, filledComponent: EspaceAutoFilled })()
iconFn.__flag = { 'svgName': 'espace-auto', 'hasFill': true }
export default iconFn
