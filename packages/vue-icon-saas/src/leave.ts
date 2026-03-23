import { svg } from '@opentiny/vue-common'
import Leave from '@opentiny/vue-theme-saas/svgs/leave.svg'
import LeaveFilled from '@opentiny/vue-theme-saas/svgs/leave-filled.svg'

const iconFn = () => svg({ name: 'IconLeave', component: Leave, filledComponent: LeaveFilled })()
iconFn.__flag = { 'svgName': 'leave', 'hasFill': true }
export default iconFn
