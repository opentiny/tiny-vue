import { svg } from '@opentiny/vue-common'
import Total from '@opentiny/vue-theme-saas/svgs/total.svg'
import TotalFilled from '@opentiny/vue-theme-saas/svgs/total-filled.svg'

const iconFn = () => svg({ name: 'IconTotal', component: Total, filledComponent: TotalFilled })()
iconFn.__flag = { 'svgName': 'total', 'hasFill': true }
export default iconFn
