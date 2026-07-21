import { svg } from '@opentiny/vue-common'
import Number from '@opentiny/vue-theme-saas/svgs/number.svg'
import NumberFilled from '@opentiny/vue-theme-saas/svgs/number-filled.svg'

const iconFn = () => svg({ name: 'IconNumber', component: Number, filledComponent: NumberFilled })()
iconFn.__flag = { 'svgName': 'number', 'hasFill': true }
export default iconFn
