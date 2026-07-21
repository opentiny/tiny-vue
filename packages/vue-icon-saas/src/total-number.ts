import { svg } from '@opentiny/vue-common'
import TotalNumber from '@opentiny/vue-theme-saas/svgs/total-number.svg'
import TotalNumberFilled from '@opentiny/vue-theme-saas/svgs/total-number-filled.svg'

const iconFn = () => svg({ name: 'IconTotalNumber', component: TotalNumber, filledComponent: TotalNumberFilled })()
iconFn.__flag = { 'svgName': 'total-number', 'hasFill': true }
export default iconFn
