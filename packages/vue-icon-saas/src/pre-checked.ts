import { svg } from '@opentiny/vue-common'
import PreChecked from '@opentiny/vue-theme-saas/svgs/pre-checked.svg'
import PreCheckedFilled from '@opentiny/vue-theme-saas/svgs/pre-checked-filled.svg'

const iconFn = () => svg({ name: 'IconPreChecked', component: PreChecked, filledComponent: PreCheckedFilled })()
iconFn.__flag = { 'svgName': 'pre-checked', 'hasFill': true }
export default iconFn
