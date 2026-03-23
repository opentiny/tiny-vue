import { svg } from '@opentiny/vue-common'
import WorkOvertime from '@opentiny/vue-theme-saas/svgs/work-overtime.svg'
import WorkOvertimeFilled from '@opentiny/vue-theme-saas/svgs/work-overtime-filled.svg'

const iconFn = () => svg({ name: 'IconWorkOvertime', component: WorkOvertime, filledComponent: WorkOvertimeFilled })()
iconFn.__flag = { 'svgName': 'work-overtime', 'hasFill': true }
export default iconFn
