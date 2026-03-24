import { svg } from '@opentiny/vue-common'
import MyAttendance from '@opentiny/vue-theme-saas/svgs/my-attendance.svg'
import MyAttendanceFilled from '@opentiny/vue-theme-saas/svgs/my-attendance-filled.svg'

const iconFn = () => svg({ name: 'IconMyAttendance', component: MyAttendance, filledComponent: MyAttendanceFilled })()
iconFn.__flag = { 'svgName': 'my-attendance', 'hasFill': true }
export default iconFn
