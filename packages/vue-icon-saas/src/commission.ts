import { svg } from '@opentiny/vue-common'
import Commission from '@opentiny/vue-theme-saas/svgs/commission.svg'
import CommissionFilled from '@opentiny/vue-theme-saas/svgs/commission-filled.svg'

const iconFn = () => svg({ name: 'IconCommission', component: Commission, filledComponent: CommissionFilled })()
iconFn.__flag = { 'svgName': 'commission', 'hasFill': true }
export default iconFn
