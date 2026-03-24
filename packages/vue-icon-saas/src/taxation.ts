import { svg } from '@opentiny/vue-common'
import Taxation from '@opentiny/vue-theme-saas/svgs/taxation.svg'
import TaxationFilled from '@opentiny/vue-theme-saas/svgs/taxation-filled.svg'

const iconFn = () => svg({ name: 'IconTaxation', component: Taxation, filledComponent: TaxationFilled })()
iconFn.__flag = { 'svgName': 'taxation', 'hasFill': true }
export default iconFn
