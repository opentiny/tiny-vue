import { svg } from '@opentiny/vue-common'
import Milestone from '@opentiny/vue-theme-saas/svgs/milestone.svg'
import MilestoneFilled from '@opentiny/vue-theme-saas/svgs/milestone-filled.svg'

const iconFn = () => svg({ name: 'IconMilestone', component: Milestone, filledComponent: MilestoneFilled })()
iconFn.__flag = { 'svgName': 'milestone', 'hasFill': true }
export default iconFn
