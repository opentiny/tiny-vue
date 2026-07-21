import { svg } from '@opentiny/vue-common'
import CheckedTrue from '@opentiny/vue-theme-saas/svgs/checked-true.svg'

const iconFn = () => svg({ name: 'IconCheckedTrue', component: CheckedTrue, filledComponent: CheckedTrue })()

iconFn.__flag = { 'svgName': 'checked-true', 'hasFill': false }
export default iconFn
