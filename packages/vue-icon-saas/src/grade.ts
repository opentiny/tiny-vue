import { svg } from '@opentiny/vue-common'
import Grade from '@opentiny/vue-theme-saas/svgs/grade.svg'
import GradeFilled from '@opentiny/vue-theme-saas/svgs/grade-filled.svg'

const iconFn = () => svg({ name: 'IconGrade', component: Grade, filledComponent: GradeFilled })()
iconFn.__flag = { 'svgName': 'grade', 'hasFill': true }
export default iconFn
