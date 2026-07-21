import { svg } from '@opentiny/vue-common'
import NoPremission from '@opentiny/vue-theme-saas/svgs/no-premission.svg'
import NoPremissionFilled from '@opentiny/vue-theme-saas/svgs/no-premission-filled.svg'

const iconFn = () => svg({ name: 'IconNoPremission', component: NoPremission, filledComponent: NoPremissionFilled })()
iconFn.__flag = { 'svgName': 'no-premission', 'hasFill': true }
export default iconFn
