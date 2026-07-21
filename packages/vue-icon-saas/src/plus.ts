import { svg } from '@opentiny/vue-common'
import Plus from '@opentiny/vue-theme-saas/svgs/plus.svg'
import PlusFilled from '@opentiny/vue-theme-saas/svgs/plus-filled.svg'

const iconFn = () => svg({ name: 'IconPlus', component: Plus, filledComponent: PlusFilled })()
iconFn.__flag = { 'svgName': 'plus', 'hasFill': true }
export default iconFn
