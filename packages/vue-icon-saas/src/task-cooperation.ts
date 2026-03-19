import { svg } from '@opentiny/vue-common'
import TaskCooperation from '@opentiny/vue-theme-saas/svgs/task-cooperation.svg'
import TaskCooperationFilled from '@opentiny/vue-theme-saas/svgs/task-cooperation-filled.svg'

const iconFn = () =>
  svg({ name: 'IconTaskCooperation', component: TaskCooperation, filledComponent: TaskCooperationFilled })()
iconFn.__flag = { 'svgName': 'task-cooperation', 'hasFill': true }
export default iconFn
