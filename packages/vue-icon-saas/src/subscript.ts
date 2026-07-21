import { svg } from '@opentiny/vue-common'
import Subscript from '@opentiny/vue-theme-saas/svgs/subscript.svg'
import SubscriptFilled from '@opentiny/vue-theme-saas/svgs/subscript-filled.svg'

const iconFn = () => svg({ name: 'IconSubscript', component: Subscript, filledComponent: SubscriptFilled })()
iconFn.__flag = { 'svgName': 'subscript', 'hasFill': true }
export default iconFn
