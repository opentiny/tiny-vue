import { svg } from '@opentiny/vue-common'
import CheckOut from '@opentiny/vue-theme-saas/svgs/check-out.svg'
import CheckOutFilled from '@opentiny/vue-theme-saas/svgs/check-out-filled.svg'

const iconFn = () => svg({ name: 'IconCheckOut', component: CheckOut, filledComponent: CheckOutFilled })()
iconFn.__flag = { 'svgName': 'check-out', 'hasFill': true }
export default iconFn
