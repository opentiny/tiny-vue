import { svg } from '@opentiny/vue-common'
import Check from '@opentiny/vue-theme-saas/svgs/check.svg'
import CheckFilled from '@opentiny/vue-theme-saas/svgs/check-filled.svg'

const iconFn = () => svg({ name: 'IconCheck', component: Check, filledComponent: CheckFilled })()
iconFn.__flag = { 'svgName': 'check', 'hasFill': true }
export default iconFn
