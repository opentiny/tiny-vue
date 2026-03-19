import { svg } from '@opentiny/vue-common'
import TotalWeight from '@opentiny/vue-theme-saas/svgs/total-weight.svg'
import TotalWeightFilled from '@opentiny/vue-theme-saas/svgs/total-weight-filled.svg'

const iconFn = () => svg({ name: 'IconTotalWeight', component: TotalWeight, filledComponent: TotalWeightFilled })()
iconFn.__flag = { 'svgName': 'total-weight', 'hasFill': true }
export default iconFn
